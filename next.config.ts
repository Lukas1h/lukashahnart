import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  async redirects() {
    return [
      {
        source: "/real-estate",
        destination: "/",
        permanent: true,
      },
      {
        source: "/r",
        destination: "/",
        permanent: false,
      },
      {
        source: "/c",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
