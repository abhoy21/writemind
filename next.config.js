/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['bqihvgjtuezuhciuvyfj.supabase.co'],
  },
};

module.exports = nextConfig;