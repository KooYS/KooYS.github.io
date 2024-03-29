/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    reactStrictMode: true,
    compiler: {
        emotion: true,
    },
    async rewrites() {
        return [
            {
                source: '/link/:path*',
                destination: '/api/link?href=:path*',
            },
        ];
    },
};

module.exports = nextConfig;
