/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ["lucide-react", "react-icons"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.skywatchsecurity.co.uk",
          },
        ],
        destination: "https://skywatchsecurity.co.uk/:path*",
        permanent: true,
        statusCode: 308,
      },
      {
        source: "/recruitment/vacancies",
        destination: "/recruitment",
        permanent: true,
        statusCode: 308,
      },
      {
        source: "/blog/procuring-sia-licensed-security-buyers-checklist",
        destination: "/blog/hiring-security-guards-buyers-checklist",
        permanent: true,
        statusCode: 308,
      },
      {
        source: "/services/sia-guarding",
        destination: "/services/manned-security-guards",
        permanent: true,
        statusCode: 308,
      },
      {
        source: "/services/security-patrol",
        destination: "/services/mobile-patrols",
        permanent: true,
        statusCode: 308,
      },
      {
        source: "/services/hotel-office-reception",
        destination: "/services/concierge-security",
        permanent: true,
        statusCode: 308,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
