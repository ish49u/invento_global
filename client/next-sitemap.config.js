// next-sitemap.config.js

module.exports = {
  siteUrl: 'https://inventoglobal.com',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  outDir: './public',

  additionalPaths: async (config) => {
    return [
      await config.transform(config, '/'),
      await config.transform(config, '/about'),
      await config.transform(config, '/contact'),
      await config.transform(config, '/founder'),
      await config.transform(config, '/products'),
    ];
  },
};
