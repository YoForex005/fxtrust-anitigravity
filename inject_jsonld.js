const fs = require('fs');
const path = require('path');

const seoAnalysisData = JSON.parse(fs.readFileSync('seo_analysis.json', 'utf8'));

let filesModified = 0;
let filesFailed = 0;

seoAnalysisData.MISSING_JSONLD.forEach(relativePath => {
    const fullPath = path.resolve(process.cwd(), relativePath);
    if (!fs.existsSync(fullPath)) {
        console.error(`File not found: ${relativePath}`);
        filesFailed++;
        return;
    }

    let content = fs.readFileSync(fullPath, 'utf8');

    // Extract title using regex
    const titleMatch = content.match(/title:\s*(['"`])(.*?)\1/);
    const title = titleMatch ? titleMatch[2] : 'FxTrusts';

    // Extract description using regex
    const descMatch = content.match(/description:\s*(['"`])([\s\S]*?)\1/);
    const description = descMatch ? descMatch[2].replace(/\n/g, ' ') : '';

    // Try extracting URL from openGraph or alternates
    const urlMatch = content.match(/url:\s*(['"`])(.*?)\1/) || content.match(/canonical:\s*(['"`])(.*?)\1/);
    const url = urlMatch ? urlMatch[2] : 'https://fxtrusts.com';

    const schemaObj = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": title,
        "description": description,
        "url": url
    };

    const schemaString = JSON.stringify(schemaObj);

    const scriptTag = `
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(${schemaString}) }}
      />`;

    // Inject before the first `<h1` occurance
    // Ensure we don't inject multiple times if accidentally ran twice.
    if (!content.includes('application/ld+json')) {
        const updatedContent = content.replace(/(<h1\b[^>]*>)/, scriptTag + '\n      $1');
        if (updatedContent !== content) {
            fs.writeFileSync(fullPath, updatedContent, 'utf8');
            filesModified++;
        } else {
            console.log(`Could not find <h1 tag to inject in ${relativePath}`);
            filesFailed++;
        }
    } else {
        console.log(`Already has JSON-LD: ${relativePath}`);
    }
});

console.log(`Successfully modified ${filesModified} files. Failed: ${filesFailed}`);
