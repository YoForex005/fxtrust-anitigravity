const fs = require('fs');
const path = require('path');

function getFiles(dir) {
    const subdirs = fs.readdirSync(dir);
    const files = subdirs.map(subdir => {
        const res = path.resolve(dir, subdir);
        return fs.statSync(res).isDirectory() ? getFiles(res) : res;
    });
    return files.reduce((a, f) => a.concat(f), []);
}

const appDir = path.join('src', 'app');
const allFiles = getFiles(appDir).filter(f => f.endsWith('page.tsx'));

console.log(`Scanning ${allFiles.length} pages...`);

const missingMetadata = [];
const missingOGOrTwitter = [];
const badH1 = [];
const missingJSONLD = [];

allFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const relativePath = path.relative(process.cwd(), file);

    // 1. Metadata Completeness
    const hasMetadata = content.includes('export const metadata');
    if (!hasMetadata) {
        missingMetadata.push(relativePath);
    } else {
        // Check for openGraph and twitter
        const hasOG = content.includes('openGraph');
        const hasTwitter = content.includes('twitter');
        if (!hasOG || !hasTwitter) {
            missingOGOrTwitter.push(relativePath);
        }
    }

    // 2. Semantic HTML - H1 Check
    const h1Count = (content.match(/<h1/g) || []).length;
    if (h1Count !== 1) {
        badH1.push({ file: relativePath, count: h1Count });
    }

    // 3. Structured Data
    // Check for application/ld+json script OR usage of Schema components like OrganizationSchema
    // But audit asks specifically for the script tag for Organization or Product.
    // We'll check for the script tag literal.
    const hasJSONLD = content.includes('application/ld+json');
    if (!hasJSONLD) {
        // We might want to be smarter and ignore if there's a component, but the audit is strict.
        // However, layout.tsx has OrganizationSchema. Let's list pages that lack it locally.
        missingJSONLD.push(relativePath);
    }
});

const report = {
    MISSING_METADATA: missingMetadata,
    MISSING_OG_TWITTER: missingOGOrTwitter,
    BAD_H1: badH1,
    MISSING_JSONLD: missingJSONLD
};
fs.writeFileSync('seo_analysis.json', JSON.stringify(report, null, 2));
console.log('Report written to seo_analysis.json');
