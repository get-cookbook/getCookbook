/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => [
    {
      source: "/api/:path*",
      destination: "https://get-cookbook-backend.vercel.app/:path*",
    },
  ],
};

module.exports = nextConfig; 
