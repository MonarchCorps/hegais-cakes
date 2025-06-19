import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'orca-app-h75k3.ondigitalocean.app',
      },
    ],
  },
};

export default nextConfig;
