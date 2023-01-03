/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    PASS3_AGENT_SERVICE_URL: 'https://staging-agent.pass3.id',
    // PASS3_AGENT_SERVICE_URL: 'http://localhost:8080', // for testing
  },
}

module.exports = nextConfig
