import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // www → non-www
      {
        source: "/:path*",
        has: [
          { type: "host", value: "www.inventoglobal.com" },
        ],
        destination: "https://inventoglobal.com/:path*",
        permanent: true,
      },

      // Legacy HTML pages
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/contactus.html", destination: "/contact", permanent: true },
      { source: "/aboutUs.html", destination: "/about", permanent: true },
      { source: "/clients.html", destination: "/", permanent: true },

      // Shop & product URLs
      { source: "/shop", destination: "/", permanent: true },
      { source: "/shop/", destination: "/", permanent: true },
      { source: "/product/:slug*", destination: "/", permanent: true },

      // ✅ NEW: Product-category URLs (old WooCommerce categories)
      { source: "/product-category/:slug*", destination: "/", permanent: true },

      // ✅ NEW: add-to-cart parameters anywhere on the site
      { source: "/:path*/?add-to-cart=:id", destination: "/", permanent: true },

      // ✅ NEW: feeds in product/product-category paths
      { source: "/product/:slug*/feed", destination: "/", permanent: true },
      { source: "/product-category/:slug*/feed", destination: "/", permanent: true },

      // Old WordPress archives
      { source: "/2023/12", destination: "/", permanent: true },
      { source: "/2023/12/", destination: "/", permanent: true },

      // Old WordPress API & admin
      { source: "/wp-json", destination: "/", permanent: true },
      { source: "/wp-json/:slug*", destination: "/", permanent: true },
      { source: "/wp-admin/:slug*", destination: "/", permanent: true },

      // Misc pages
      { source: "/lander", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
