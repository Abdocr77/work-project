// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     reactStrictMode: true,
// }

// export default nextConfig;

import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com'],
      },
};

export default withNextIntl(nextConfig);