/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    API_KEY: process.env.API_KEY,
    CONTEXT: process.env.CONTEXT,
  },
};

module.exports = nextConfig;
