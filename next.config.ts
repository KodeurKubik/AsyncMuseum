import type { NextConfig } from "next";

const repo = "AsyncMuseum";

const nextConfig: NextConfig = {
  output: "export",
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
