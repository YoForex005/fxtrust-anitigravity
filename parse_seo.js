const fs = require('fs');
const r = JSON.parse(fs.readFileSync('report.json', 'utf8'));
const seoAudits = r.categories.seo.auditRefs;
const failed = seoAudits.map(ref => r.audits[ref.id]).filter(a => a.score !== null && a.score < 1);
failed.forEach(a => console.log('- ' + a.title + '\n  ' + a.description));
