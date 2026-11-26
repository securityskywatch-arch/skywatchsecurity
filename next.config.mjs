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
        permanent: false,
        statusCode: 301,
      },
      {
        source: "/recruitment/vacancies",
        destination: "/recruitment",
        permanent: false,
        statusCode: 301,
      },
      {
        source: "/blog/procuring-sia-licensed-security-buyers-checklist",
        destination: "/blog/hiring-security-guards-buyers-checklist",
        permanent: false,
        statusCode: 301,
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
