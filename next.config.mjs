/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
    images: {
        remotePatterns: [
          // {
          //   protocol: 'https',
          //   hostname: 'example.com'
          // },
        ],
      },
};

export default nextConfig;
