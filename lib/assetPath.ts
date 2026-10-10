import { SITE_BASE_PATH } from "@/lib/site";

/**
 * Prefix a public asset path with the app basePath (e.g. /lahore).
 * Use for raw <img src>, <video src>, and CSS url() values.
 * next/image already handles basePath automatically.
 */
export function assetPath(path: string): string {
  if (!path || typeof path !== "string") return path;
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("data:") ||
    path.startsWith("blob:")
  ) {
    return path;
  }

  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (!SITE_BASE_PATH) return normalized;
  if (
    normalized === SITE_BASE_PATH ||
    normalized.startsWith(`${SITE_BASE_PATH}/`)
  ) {
    return normalized;
  }
  return `${SITE_BASE_PATH}${normalized}`;
}
