/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/solaceprep",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  distDir: "docs",
};

export default nextConfig;
