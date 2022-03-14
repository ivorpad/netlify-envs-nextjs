/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    API_KEY: process.env.API_KEY,
  }
};

module.exports = nextConfig;
