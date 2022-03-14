/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    CONTEXT: process.env.CONTEXT,
    URL: process.env.URL,
    DEPLOY_PRIME_URL: process.env.DEPLOY_PRIME_URL,
  },
  serverRuntimeConfig: {
    API_KEY: process.env.API_KEY,
    CONTEXT: process.env.CONTEXT,
  },
};

module.exports = nextConfig;
