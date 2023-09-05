/**  @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true
  },
  basePath: process.env.NEXT_PUBLIC_BASE_URL
}

module.exports = nextConfig
