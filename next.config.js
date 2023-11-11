/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["dev.obtenmas.com/", "firebasestorage.googleapis.com"]
  }
};

module.exports = nextConfig;
