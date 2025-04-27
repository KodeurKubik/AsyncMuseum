import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/AsyncMuseum",
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
