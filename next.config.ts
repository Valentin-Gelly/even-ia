import type { NextConfig } from "next";

const nextConfig = {
    output: 'export', // ✅ très important pour héberger sur o2switch
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
