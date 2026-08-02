import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  async redirects() {
    return [
      {
        source: "/r",
        destination: "/real-estate",
        permanent: false,
      },
      {
        source: "/c",
        destination: "/real-estate",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
