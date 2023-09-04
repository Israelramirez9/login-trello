/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  distDir: process.env.NODE_ENV === 'development' ? undefined : '../docs',
  output: process.env.NODE_ENV === 'development' ? undefined : 'export',
  images: {
    unoptimized: true
  },
  basePath: process.env.NEXT_PUBLIC_BASE_URL || '/login-trello'
}

module.exports = nextConfig
