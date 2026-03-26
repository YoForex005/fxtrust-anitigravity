import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = process.cwd() + '/src/app';
let totalPages = 0;
let metaCount = 0;
let titleCount = 0;
let descCount = 0;
let missingMetaFiles = [];
let imgTagsTotal = 0;
let imgTagsWithAlt = 0;
let missingAltFiles = [];

function walk(dir) {
    if(!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            walk(filePath);
        } else if (file === 'page.tsx') {
            analyzeFile(filePath, true);
        } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
             analyzeFile(filePath, false);
        }
    }
}

function analyzeFile(filePath, isPage) {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Page specific checks
    if(isPage) {
        totalPages++;
        const hasMetadata = content.includes('export const metadata') || content.includes('export async function generateMetadata');
        if (hasMetadata) metaCount++;
        else missingMetaFiles.push(filePath.replace(process.cwd(), ''));

        if (content.match(/title:\s*['"`]/) || content.match(/title:\s*\{/)) titleCount++;
        if (content.match(/description:\s*['"`]/)) descCount++;
    }

    // Checking images
    const imgMatches = content.match(/<Image[^>]*>/g) || [];
    imgTagsTotal += imgMatches.length;
    for (const img of imgMatches) {
        if (img.includes('alt=')) imgTagsWithAlt++;
        else {
            if(!missingAltFiles.includes(filePath)) missingAltFiles.push(filePath.replace(process.cwd(), ''));
        }
    }
}

walk(rootDir);

const metaScore = totalPages === 0 ? 100 : (metaCount / totalPages) * 100;
const titleScore = totalPages === 0 ? 100 : (titleCount / totalPages) * 100;
const descScore = totalPages === 0 ? 100 : (descCount / totalPages) * 100;
const altScore = imgTagsTotal === 0 ? 100 : (imgTagsWithAlt / imgTagsTotal) * 100;

const totalScore = (metaScore + titleScore + descScore + altScore) / 4;

console.log('--- STATIC SEO AUDIT REPORT ---');
console.log(`Total Routes Analyzed: ${totalPages}`);
console.log(`Pages with Metadata:   ${metaCount}/${totalPages} (${metaScore.toFixed(1)}%)`);
console.log(`Pages with Title:      ${titleCount}/${totalPages} (${titleScore.toFixed(1)}%)`);
console.log(`Pages with Desc:       ${descCount}/${totalPages} (${descScore.toFixed(1)}%)`);
console.log(`Images with Alt tags:  ${imgTagsWithAlt}/${imgTagsTotal} (${altScore.toFixed(1)}%)`);
console.log(`\n=> OVERALL REPOSITORY SEO SCORE: ${totalScore.toFixed(1)} / 100\n`);

if(missingMetaFiles.length > 0) {
    console.log('Routes Missing Metadata:');
    missingMetaFiles.slice(0, 10).forEach(f => console.log('  - ' + f));
    if(missingMetaFiles.length > 10) console.log(`    ...and ${missingMetaFiles.length - 10} more`);
}

if(missingAltFiles.length > 0) {
    console.log('\nFiles missing Image Alt tags:');
    missingAltFiles.slice(0, 10).forEach(f => console.log('  - ' + f));
}
