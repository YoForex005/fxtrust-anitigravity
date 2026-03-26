import fs from 'fs';
import path from 'path';

const rootDir = process.cwd();
const srcApp = path.join(rootDir, 'src', 'app');
const srcComp = path.join(rootDir, 'src', 'components');

const strucReport = [];
const mediaReport = [];
const techReport = [];

strucReport.push('# SEO Audit: Structure\n');
mediaReport.push('# SEO Audit: Media & Links\n');
techReport.push('# SEO Audit: Technical\n');

// Arrays to hold issues
let ogTwitterMissing = [];
let layoutIssues = [];
let h1Issues = [];
let nestedLinks = [];
let schemaStatus = [];

let legacyImgs = [];
let missingAlt = [];
let unsafeLinks = [];

function walk(dir) {
    if(!fs.existsSync(dir)) return [];
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else { 
            if(file.endsWith('.tsx') || file.endsWith('.ts')) results.push(file);
        }
    });
    return results;
}

const allFiles = [...walk(srcApp), ...walk(srcComp)];

allFiles.forEach(file => {
    const relFile = file.replace(rootDir, '');
    const content = fs.readFileSync(file, 'utf8');
    const isPage = file.endsWith('page.tsx');
    const isLayout = file.endsWith('layout.tsx');

    // 1. Structure Audit
    if (isPage) {
        // Metadata & OG/Twitter
        const hasMetadata = content.includes('export const metadata') || content.includes('generateMetadata');
        if (hasMetadata) {
            const hasOG = content.includes('openGraph:');
            const hasTwitter = content.includes('twitter:');
            if(!hasOG || !hasTwitter) {
                ogTwitterMissing.push(`- **${relFile}**: Missing ${!hasOG?'openGraph':''} ${!hasTwitter?'twitter':''}`);
            }
        } else {
            ogTwitterMissing.push(`- **${relFile}**: Missing metadata entirely.`);
        }

        // H1 check
        const h1Count = (content.match(/<h1[^>]*>/gi) || []).length;
        if(h1Count !== 1) {
            h1Issues.push(`- **${relFile}**: Found ${h1Count} <h1> tags (Expected: exactly 1).`);
        }

        // Schema JSON-LD
        const hasSchema = content.includes('application/ld+json') || content.includes('Schema');
        if(!hasSchema) {
            schemaStatus.push(`- **${relFile}**: Missing JSON-LD Schema.`);
        }
    }

    if (isLayout) {
        const hasMetaBase = content.includes('metadataBase');
        const hasTitleTemp = content.includes('template:');
        if(!hasMetaBase || !hasTitleTemp) {
            layoutIssues.push(`- **${relFile}**: Missing ${!hasMetaBase?'metadataBase':''} ${!hasTitleTemp?'title.template':''}`);
        }
    }

    // Nested <a>
    if(content.match(/<(Link|a)[^>]*>[\s\S]*?<(Link|a)[^>]*>/gi)) {
        // Simple regex check, might catch false positives but good for flagging
        if(content.match(/<Link[^>]*>[\s\S]*?<a[^>]*>/g) || content.match(/<a[^>]*>[\s\S]*?<a[^>]*>/g)) {
            nestedLinks.push(`- **${relFile}**: Potential illegal nested Link/a tag.`);
        }
    }

    // 2. Media Audit
    // Legacy <img>
    const imgTags = content.match(/<img([^>]*)>/gi) || [];
    if(imgTags.length > 0) {
        legacyImgs.push(`- **${relFile}**: Found ${imgTags.length} legacy <img> tags (Use <Image> instead).`);
    }

    // Missing <Image alt
    const nextImages = content.match(/<Image([^>]*)>/gi) || [];
    nextImages.forEach(img => {
        if(!img.includes('alt=')) {
            missingAlt.push(`- **${relFile}**: <Image> missing 'alt' prop -> \`${img.substring(0, 50)}...\``);
        }
    });

    // Unsafe external Links
    const extLinks = content.match(/<Link([^>]*)href=["'](http[^"']*)["']([^>]*)>/gi) || [];
    extLinks.forEach(link => {
        if(!link.includes('target="_blank"') && !link.includes('fxtrusts.com')) {
            unsafeLinks.push(`- **${relFile}**: External Link without target="_blank" -> \`${link.substring(0, 50)}...\``);
        }
    });
});

// Build Reports
strucReport.push('## Metadata (openGraph & twitter) Checks');
strucReport.push(ogTwitterMissing.length > 0 ? ogTwitterMissing.join('\n') : '- ✅ All pages have required OG/Twitter metadata.');

strucReport.push('\n## Layout Checks (metadataBase & title.template)');
strucReport.push(layoutIssues.length > 0 ? layoutIssues.join('\n') : '- ✅ All layouts have metadataBase and title templates.');

strucReport.push('\n## H1 Hierarchy Checks');
strucReport.push(h1Issues.length > 0 ? h1Issues.join('\n') : '- ✅ All pages have exactly one H1.');

strucReport.push('\n## Illegal Nested Links');
strucReport.push(nestedLinks.length > 0 ? nestedLinks.join('\n') : '- ✅ No illegal nested <a> within <Link> detected.');

strucReport.push('\n## JSON-LD Schema Checks');
strucReport.push(schemaStatus.length > 0 ? schemaStatus.join('\n') : '- ✅ All pages implement structured Schema data.');

mediaReport.push('## Legacy `<img>` Tags (ERRORS)');
mediaReport.push(legacyImgs.length > 0 ? legacyImgs.join('\n') : '- ✅ No legacy `<img>` tags found. <Image> is used cleanly.');

mediaReport.push('\n## `<Image>` Tags Missing `alt`');
mediaReport.push(missingAlt.length > 0 ? missingAlt.join('\n') : '- ✅ All <Image> tags have `alt` props.');

mediaReport.push('\n## Untargeted External Links');
mediaReport.push(unsafeLinks.length > 0 ? unsafeLinks.join('\n') : '- ✅ All external <Link> tags have target="_blank".');

// 3. Technical Audit
const hasRobots = fs.existsSync(path.join(srcApp, 'robots.ts')) || fs.existsSync(path.join(srcApp, 'robots.txt'));
const hasSitemap = fs.existsSync(path.join(srcApp, 'sitemap.ts')) || fs.existsSync(path.join(srcApp, 'sitemap.xml'));
const hasManifest = fs.existsSync(path.join(srcApp, 'manifest.ts')) || fs.existsSync(path.join(srcApp, 'manifest.json'));

techReport.push(`- **robots.ts / robots.txt**: ${hasRobots ? 'PRESENT ✅' : 'MISSING ❌'}`);
techReport.push(`- **sitemap.ts / sitemap.xml**: ${hasSitemap ? 'PRESENT ✅' : 'MISSING ❌'}`);
techReport.push(`- **manifest.ts / manifest.json**: ${hasManifest ? 'PRESENT ✅' : 'MISSING ❌'}`);

fs.writeFileSync(path.join(rootDir, 'SEO_Audit_Structure.md'), strucReport.join('\n'));
fs.writeFileSync(path.join(rootDir, 'SEO_Audit_Media.md'), mediaReport.join('\n'));
fs.writeFileSync(path.join(rootDir, 'SEO_Audit_Technical.md'), techReport.join('\n'));

console.log('Successfully generated 3 SEO Audit Markdown reports in the root directory.');
