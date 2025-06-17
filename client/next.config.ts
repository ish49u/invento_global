import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.inventoglobal.com", // www domain (redirect from here)
          },
        ],
        destination: "https://inventoglobal.com/:path*", // redirect to non-www
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
