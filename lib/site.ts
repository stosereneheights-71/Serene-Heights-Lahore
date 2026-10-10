/**
 * Canonical site URL. May include a path prefix when mounted under the group
 * domain, e.g. https://www.sereneheightsgroup.com/lahore
 *
 * Cutover (Vercel env):
 * - Before: https://www.sereneheightslahore.com  + NEXT_PUBLIC_BASE_PATH empty
 * - After:  https://www.sereneheightsgroup.com/lahore + NEXT_PUBLIC_BASE_PATH=/lahore
 */
const RAW_SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  "https://www.sereneheightslahore.com"
).replace(/\/$/, "");

const parsedSiteUrl = new URL(
  RAW_SITE_URL.includes("://") ? RAW_SITE_URL : `https://${RAW_SITE_URL}`
);

export const SITE_ORIGIN = parsedSiteUrl.origin;
export const SITE_HOST = parsedSiteUrl.host;
export const APEX_HOST = SITE_HOST.replace(/^www\./, "");

/** Path prefix from SITE_URL (e.g. "/lahore") or NEXT_PUBLIC_BASE_PATH. */
export const SITE_BASE_PATH = (
  process.env.NEXT_PUBLIC_BASE_PATH ||
  parsedSiteUrl.pathname.replace(/\/$/, "") ||
  ""
).replace(/\/$/, "");

/** Full canonical base without trailing slash (origin + optional base path). */
export const SITE_URL = SITE_BASE_PATH
  ? `${SITE_ORIGIN}${SITE_BASE_PATH}`
  : SITE_ORIGIN;

/** Comma-separated extra hosts that may serve this app (e.g. legacy domain). */
export const ALLOWED_HOSTS = new Set(
  [
    SITE_HOST,
    APEX_HOST,
    "www.sereneheightslahore.com",
    "sereneheightslahore.com",
    "www.sereneheightsgroup.com",
    "sereneheightsgroup.com",
    ...(process.env.NEXT_PUBLIC_ALLOWED_HOSTS || "")
      .split(",")
      .map((h) => h.trim().toLowerCase())
      .filter(Boolean),
  ].filter(Boolean)
);

/** Comma-separated hosts that should 301 to SITE_URL (legacy cutover). */
export const LEGACY_REDIRECT_HOSTS = new Set(
  (process.env.NEXT_PUBLIC_LEGACY_REDIRECT_HOSTS || "")
    .split(",")
    .map((h) => h.trim().toLowerCase())
    .filter(Boolean)
);

export const SITE_NAME = "Serene Heights Lahore";
export const HOME_TITLE =
  "Serene Heights Lahore - A New Standard of Urban Living";
export const HOME_DESCRIPTION =
  "A landmark 21-storey mixed-use commercial development on Gulberg Main Boulevard, Lahore.";
