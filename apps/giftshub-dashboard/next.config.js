/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/moc-engine',
        destination: '/decision-support/missions',
        permanent: false,
      },
      {
        source: '/operational-pilot',
        destination: '/operations/operational-pilot',
        permanent: false,
      },
      {
        source: '/batch-processor',
        destination: '/laboratory/batch-processor',
        permanent: false,
      }
    ];
  }
};

module.exports = nextConfig;
