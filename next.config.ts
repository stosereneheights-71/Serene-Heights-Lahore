import type { NextConfig } from "next";

/**
 * Path mount under sereneheightsgroup.com.
 * Leave empty for the current root-domain deploy.
 * Set NEXT_PUBLIC_BASE_PATH=/lahore when cutting over to the group domain.
 */
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(/\/$/, "");

const nextConfig: NextConfig = {
  ...(basePath ? { basePath } : {}),
  images: {
    unoptimized: true,
    qualities: [75, 80],
  },
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/theproject",
        destination: "/the-project",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
