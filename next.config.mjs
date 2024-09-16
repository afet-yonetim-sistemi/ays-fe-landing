/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        showEmergencyForm: process.env.NEXT_PUBLIC_SHOW_EMERGENCY_FORM
    }
};

export default nextConfig;