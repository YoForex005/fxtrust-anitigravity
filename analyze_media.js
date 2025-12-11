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

const srcDir = path.join('src');
const allFiles = getFiles(srcDir).filter(f => f.endsWith('.tsx') || f.endsWith('.jsx'));

console.log(`Scanning ${allFiles.length} files for media analysis...`);

const legacyImg = [];
const missingAlt = [];
const nextImageUsage = [];

allFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const relativePath = path.relative(process.cwd(), file);

    // 1. Legacy <img> tags
    // Simple regex to catch <img ... >
    // We try to avoid matching comments, but simple regex is usually "good enough" for an audit hint.
    const imgMatches = content.match(/<img[^>]*>/g);
    if (imgMatches) {
        legacyImg.push({ file: relativePath, count: imgMatches.length });
    }

    // 2. next/image usage
    // Check if imported
    if (content.includes('next/image')) {
        // Find <Image ... />
        const imageMatches = content.match(/<Image[^>]*>/g);
        if (imageMatches) {
            imageMatches.forEach(match => {
                // Check for alt
                if (!match.includes('alt=')) {
                    missingAlt.push({ file: relativePath, snippet: match.substring(0, 50) + '...' });
                }
                nextImageUsage.push({ file: relativePath });
            });
        }
    }
});

const report = {
    LEGACY_IMG_TAGS: legacyImg,
    MISSING_ALT_NEXT_IMAGE: missingAlt,
    TOTAL_NEXT_IMAGE_FILES: nextImageUsage.length
};

fs.writeFileSync('media_analysis.json', JSON.stringify(report, null, 2));
console.log('Media analysis written to media_analysis.json');
