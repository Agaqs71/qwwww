/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  async redirects() {
    return [
      {
        source: '/profile',
        destination: '/dashboard/profile',
        permanent: true,
      },
      {
        source: '/my-tokens',
        destination: '/dashboard/my-tokens',
        permanent: true,
      },
      {
        source: '/status',
        destination: '/dashboard/status',
        permanent: true,
      },
      {
        source: '/how-to-buy',
        destination: '/dashboard/how-to-buy',
        permanent: true,
      },
      {
        source: '/binance',
        destination: '/dashboard/binance',
        permanent: true,
      },
      {
        source: '/buy-token',
        destination: '/dashboard/buy-token',
        permanent: true,
      }
    ]
  }
}

module.exports = nextConfig 
