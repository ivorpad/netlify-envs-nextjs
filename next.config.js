/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env: {
    URL: process.env.URL,
    DEPLOY_PRIME_URL: process.env.DEPLOY_PRIME_URL,
    CONTEXT: process.env.CONTEXT,
    // API_KEY: process.env.API_KEY,
  },
  // serverRuntimeConfig: {
  //   API_KEY: process.env.API_KEY,
  // },
};

module.exports = nextConfig;
