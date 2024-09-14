/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        showEmergency: process.env.NEXT_PUBLIC_SHOW_EMERGENCY
    }
};

export default nextConfig;