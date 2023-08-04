/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    esmExternals: 'loose',
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
},
};

module.exports = nextConfig;
