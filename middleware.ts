import { NextRequest, NextResponse } from "next/server";
import {
  ALLOWED_HOSTS,
  APEX_HOST,
  LEGACY_REDIRECT_HOSTS,
  SITE_BASE_PATH,
  SITE_HOST,
  SITE_URL,
} from "@/lib/site";

function isLocalHost(host: string): boolean {
  return (
    host.startsWith("localhost") ||
    host.startsWith("127.0.0.1") ||
    host.endsWith(".vercel.app")
  );
}

function getRequestHost(req: NextRequest): string {
  return (req.headers.get("host") || req.nextUrl.host || "")
    .split(":")[0]
    .toLowerCase();
}

function getRequestProto(req: NextRequest): string {
  const forwarded = req.headers.get("x-forwarded-proto");
  if (forwarded) {
    return forwarded.split(",")[0].trim().toLowerCase();
  }
  return (req.nextUrl.protocol || "http:").replace(":", "").toLowerCase();
}

/** Skip host redirects for Next internals and static files (basePath-safe). */
function isStaticOrNextPath(pathname: string): boolean {
  return (
    pathname.includes("/_next/") ||
    pathname.startsWith("/_next/") ||
    /\.(?:png|jpe?g|gif|webp|svg|ico|mp4|webm|css|js|map|txt|xml|woff2?|ttf|otf)$/i.test(
      pathname
    )
  );
}

/** Map a path on a legacy root-domain host onto the new SITE_URL (+ base path). */
function buildLegacyDestination(req: NextRequest): string {
  const url = new URL(req.url);
  let appPath = url.pathname || "/";

  if (SITE_BASE_PATH && appPath.startsWith(SITE_BASE_PATH)) {
    appPath = appPath.slice(SITE_BASE_PATH.length) || "/";
  }

  if (appPath === "/") {
    return `${SITE_URL}${url.search}`;
  }

  return `${SITE_URL}${appPath}${url.search}`;
}

export function middleware(req: NextRequest) {
  const host = getRequestHost(req);
  const pathname = req.nextUrl.pathname;

  if (isStaticOrNextPath(pathname)) {
    return NextResponse.next();
  }

  if (!isLocalHost(host)) {
    const proto = getRequestProto(req);

    if (LEGACY_REDIRECT_HOSTS.has(host)) {
      return NextResponse.redirect(buildLegacyDestination(req), 301);
    }

    const isApex = host === APEX_HOST && SITE_HOST.startsWith("www.");
    const isUnknownHost = !ALLOWED_HOSTS.has(host);
    const isInsecure = proto !== "https";

    if (isInsecure || isApex || isUnknownHost) {
      const redirectUrl = req.nextUrl.clone();
      redirectUrl.protocol = "https:";
      redirectUrl.hostname = SITE_HOST;
      redirectUrl.port = "";
      return NextResponse.redirect(redirectUrl, 301);
    }
  }

  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-url", pathname);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  if (!isLocalHost(host)) {
    response.headers.set(
      "Strict-Transport-Security",
      "max-age=63072000; includeSubDomains; preload"
    );
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)",
    "/lahore/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};
