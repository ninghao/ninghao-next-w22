/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  async redirects() {
    return [
      {
        source: '/about-us',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/articles/:id',
        destination: '/posts/:id',
        permanent: true,
      },
      {
        source: '/',
        destination: '/posts',
        permanent: true,
        has: [
          {
            type: 'query',
            key: 'sort',
            value: 'latest',
          },
        ],
      },
    ];
  },

  images: {
    domains: ['resources.ninghao.net', 'localhost', 'nid-node.ninghao.co'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'resources.ninghao.net',
        pathname: '/images/**',
      },
    ],
  },
};

module.exports = nextConfig;
