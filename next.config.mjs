/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        showEmergencyForm: process.env.NEXT_PUBLIC_ENVIRONMENT === 'test' ? 'true' : 'false'
    }
};

export default nextConfig;