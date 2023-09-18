/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['restho-nextjs.vercel.app','g.foolcdn.com','fthmb.tqn.com'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 's3.amazonaws.com',
          port: '',
          pathname: '/my-bucket/**',
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  
