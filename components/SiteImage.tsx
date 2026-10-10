import Image, { type ImageProps } from "next/image";
import { assetPath } from "@/lib/assetPath";

/**
 * next/image with `images.unoptimized: true` does not always prefix basePath.
 * Wrap string srcs so /assets/... becomes /lahore/assets/... on the group domain.
 */
export default function SiteImage({ src, ...props }: ImageProps) {
  const resolvedSrc = typeof src === "string" ? assetPath(src) : src;
  return <Image src={resolvedSrc} {...props} />;
}
