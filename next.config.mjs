/** @type {import('next').NextConfig} */

// GitHub Pages project site is served from https://<user>.github.io/<repo>/,
// so the app needs a base path in production. Static export writes to /out.
const repo = "tmi-home-page";
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? `/${repo}` : "";

const nextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
