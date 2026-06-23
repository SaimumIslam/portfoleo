import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/portfoleo",
  assetPrefix: "/portfoleo",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
