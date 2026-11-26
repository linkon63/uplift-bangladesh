import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "10.169.146.60",
    "10.169.146.60:3000",
    "localhost:3000",
    "127.0.0.1:3000",
  ],
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upliftbangladesh.bd",
      },
      {
        protocol: "https",
        hostname: "**.upliftbangladesh.bd",
      },
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
      },
    ],
  },
};

export default nextConfig;
