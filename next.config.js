/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['flowbite.com', 'cdn.pixabay.com']
  }
}

module.exports = nextConfig
