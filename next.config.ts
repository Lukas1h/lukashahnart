import type { NextConfig } from "next";

// Agent pages (personal portfolio links) live in the LeadFinder app, which
// serves them at r.lukashahn.media. These forward them so the link Lukas texts
// reads lukashahn.media/portfolio/<word>, the business's own domain. LeadFinder
// keeps its assets under /lf (its assetPrefix) so they don't collide with this
// site's /_next (Next.js multi-zones). Each path below is one the agent page
// loads: its JS/CSS/fonts, visit tracking, the vCard, listing and before/after
// photos, and its stock portfolio photos.
const AGENT_PAGES = "https://r.lukashahn.media";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/portfolio/:slug", destination: `${AGENT_PAGES}/portfolio/:slug` },
      { source: "/lf/:path+", destination: `${AGENT_PAGES}/lf/:path+` },
      { source: "/api/portfolio/:path+", destination: `${AGENT_PAGES}/api/portfolio/:path+` },
      { source: "/api/portfolio-image/:path+", destination: `${AGENT_PAGES}/api/portfolio-image/:path+` },
      { source: "/agent-page/:path+", destination: `${AGENT_PAGES}/agent-page/:path+` },
    ];
  },

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
