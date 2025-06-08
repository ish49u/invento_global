// next-sitemap.config.js
module.exports = {
  siteUrl: 'https://inventoglobal.com',
  generateRobotsTxt: true,
  outDir: './public',
  exclude: [
    '/admin/*',
    '/navbar*',
    '/footer*',
    '/hero',
    '/certificates',
    '/products-main',
    '/whyChooseUs',
    '/testimonials',
    '/industriesServed',
    '/globalReach',
    '/founder/map',
    '/founder/profile',
  ],
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: 'daily',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};
