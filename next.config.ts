import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
    rewrites() {
        return [
            {
                source: `/${process.env.NEXT_PUBLIC_API_URL}`,
                destination: `https://${process.env.NEXT_PUBLIC_API_URL as string}`,
            }
        ]
    },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
