import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "10.169.146.60",
    "10.169.146.60:3000",
    "localhost:3000",
    "127.0.0.1:3000",
  ],
  devIndicators: false,
};

export default nextConfig;
