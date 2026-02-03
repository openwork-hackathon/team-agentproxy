/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  env: {
    OPENWORK_API_URL: process.env.OPENWORK_API_URL || 'https://www.openwork.bot/api',
  },
};
export default nextConfig;
