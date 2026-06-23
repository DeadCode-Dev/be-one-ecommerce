import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
    async rewrites() {
        return [
            {
                source: `/:path*/${process.env.NEXT_PUBLIC_API_URL}/:slug*`,
                destination: `https://${process.env.NEXT_PUBLIC_API_URL}/:slug*`,
            }
        ];
    },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);