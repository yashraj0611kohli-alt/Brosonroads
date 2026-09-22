import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel handles the Next.js deployment output natively.
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
