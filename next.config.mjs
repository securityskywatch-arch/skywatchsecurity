/** @type {import('next').NextConfig} */
const nextConfig = {
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
        source: "/recruitment/vacancies",
        destination: "/recruitment",
        permanent: true,
      },
      {
        source: "/blog/procuring-sia-licensed-security-buyers-checklist",
        destination: "/blog/hiring-security-guards-buyers-checklist",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
