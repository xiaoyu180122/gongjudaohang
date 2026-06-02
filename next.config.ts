import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // If deployed to a subpath under GitHub Pages, basePath will be injected
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
};

export default nextConfig;
