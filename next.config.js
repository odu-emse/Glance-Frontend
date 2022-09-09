/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "images.unsplash.com"
    ]
  },
  env: {
    "backend": "http://localhost:4000/graphql"
  }
}

module.exports = nextConfig
