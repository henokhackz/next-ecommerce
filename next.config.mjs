/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
           {
             protocol: 'https',
             hostname: 'images.pixels.com',
             port: '',
             pathname: '/**',
           }
        ]
    }
};

export default nextConfig;
