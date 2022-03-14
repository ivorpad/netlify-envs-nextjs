/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    API_KEY: process.env.API_KEY,
  },
  serverRuntimeConfig: {
    API_KEY: process.env.API_KEY,
  }
};

module.exports = nextConfig;
