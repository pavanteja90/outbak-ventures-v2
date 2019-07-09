const SitemapGenerator = require('sitemap-generator');
 
// create generator
const generator = SitemapGenerator('http://outbakventures.com/', {
    filepath: './sitemap.xml',
    maxEntriesPerFile: 50000,
    stripQuerystring: false,
    lastMod: true,
    priorityMap: [1.0, 0.8, 0.6, 0.4, 0.2, 0]
});
 
// register event listeners
generator.on('done', () => {
  // sitemaps created
});

generator.on('error', (error) => {
	console.log(error);
	generator.stop();
});
 
// start the crawler
generator.start();