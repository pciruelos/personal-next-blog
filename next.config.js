/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
      loader: 'akamai',
      path: '',
    disableStaticImages: true,
  },


}

module.exports = nextConfig
