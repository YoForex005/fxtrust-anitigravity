const fs = require('fs');
const data = JSON.parse(fs.readFileSync('lh-report3.json'));
console.log('SEO Score:', Math.round(data.categories.seo.score * 100));
console.log('Speed Index:', data.audits['speed-index'].displayValue);
console.log('Performance Score:', Math.round(data.categories.performance.score * 100));
