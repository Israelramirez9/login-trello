/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  distDir: '../docs',
  output: 'export',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
