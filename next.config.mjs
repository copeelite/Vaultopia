// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin(
    './src/i18n/i18n.ts'
);
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
          },
          {
            protocol: 'https',
            hostname: 'drive.google.com',
          },
          {
            protocol: "https",
            hostname: "*.googleusercontent.com",
            port: "",
            pathname: "**",
          },
        ],
      },

};
 
export default withNextIntl(nextConfig);