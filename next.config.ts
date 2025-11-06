import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  images: {
    domains: ["localhost", "images.unsplash.com"],
    unoptimized: true,
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ['localhost', 'images.unsplash.com'],
//     unoptimized: true
//   },
// }

// module.exports = nextConfig
