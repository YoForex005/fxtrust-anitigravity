import fs from 'fs';
import path from 'path';

const srcDir = path.join(process.cwd(), 'src');
const appDir = path.join(srcDir, 'app');

function getAllTsx(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getAllTsx(fullPath, fileList);
    } else if (file.endsWith('.tsx')) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const tsxFiles = getAllTsx(srcDir);

const report = {
  legacyImages: [],
  imageIssues: {
    missingAlt: [],
    possibleMissingPriority: []
  },
  linkSafety: {
    brokenInternalLinks: [],
    unsafeExternalLinks: []
  }
};

const internalLinksCache = new Set();
const brokenLinksCache = new Set();

function checkInternalLinkExists(href) {
  if (href === '/') return true;
  // Handle anchors and query params
  const cleanHref = href.split('#')[0].split('?')[0];
  if (!cleanHref) return true; // It was just an anchor like "#contact"

  if (internalLinksCache.has(cleanHref)) return true;
  if (brokenLinksCache.has(cleanHref)) return false;

  const parts = cleanHref.split('/').filter(Boolean);
  
  // Try direct path matches
  const directPath = path.join(appDir, ...parts, 'page.tsx');
  if (fs.existsSync(directPath)) {
    internalLinksCache.add(cleanHref);
    return true;
  }

  // Very basic check: does the topmost directory exist in app? (to handle [slug] etc.)
  let currentPath = appDir;
  for (let i = 0; i < parts.length; i++) {
    const p = parts[i];
    const nxt = path.join(currentPath, p);
    if (fs.existsSync(nxt)) {
        currentPath = nxt;
    } else {
        // Try finding a directory with Brackets e.g. [slug]
        const dirs = fs.existsSync(currentPath) ? fs.readdirSync(currentPath) : [];
        const dynamicDir = dirs.find(d => d.startsWith('[') && d.endsWith(']'));
        if (dynamicDir) {
            currentPath = path.join(currentPath, dynamicDir);
        } else {
            // Check if it's a file bypass
            if (fs.existsSync(nxt + '.tsx') || fs.existsSync(nxt + '.ts')) {
                internalLinksCache.add(cleanHref);
                return true;
            }
            brokenLinksCache.add(cleanHref);
            return false;
        }
    }
  }
  
  internalLinksCache.add(cleanHref);
  return true;
}

for (const file of tsxFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const relPath = path.relative(process.cwd(), file);
  const noComments = content.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '');

  // 1. Legacy Image Detection
  const legacyMatch = noComments.match(/<img\b(?![^>]*\/>)[^>]*>|<img\b[^>]*\/>/gi);
  if (legacyMatch) {
    // some might be in SVG or standard usage, but Next warns against <img>
    report.legacyImages.push({ file: relPath, count: legacyMatch.length });
  }

  // 2. Accessibility & Vitals (Next/Image)
  const imageTags = noComments.match(/<Image\b[^>]*(\/?>|>.*?<\/Image>)/gi) || [];
  for (const imgTag of imageTags) {
     if (!/\balt=["'{]/i.test(imgTag) || /\balt=["']\s*["']/i.test(imgTag) || /\balt={""}/i.test(imgTag)) {
        report.imageIssues.missingAlt.push(relPath);
     }
     // priority checks: rough heuristic. Images above fold usually are large and need priority
     if (!/\bpriority\b/.test(imgTag) && !/\bpriority=\{true\}/.test(imgTag)) {
        if (/hero/i.test(imgTag) || /banner/i.test(imgTag) || /logo/i.test(imgTag)) {
            report.imageIssues.possibleMissingPriority.push(relPath);
        }
     }
  }

  // 3. Link Safety
  const anchorTags = noComments.match(/<(?:a|Link)\b[^>]*(\/?>|>.*?<\/(?:a|Link)>)/gi) || [];
  for (const aTag of anchorTags) {
      const match = aTag.match(/\bhref=["']([^"']+)["']/i) || aTag.match(/\bhref=\{["']([^"']+)["']\}/i);
      if (match) {
          const href = match[1];
          // External Links Check
          if (href.startsWith('http')) {
              // Ignore internal domains if any. 
              const hasTarget = /target=["']_blank["']/i.test(aTag);
              const hasRel = /rel=["'][^"']*noopener[^"']*["']/i.test(aTag) && /rel=["'][^"']*noreferrer[^"']*["']/i.test(aTag);
              
              if (hasTarget && !hasRel) {
                  report.linkSafety.unsafeExternalLinks.push({ file: relPath, link: href });
              }
          } 
          // Internal Links Check
          else if (href.startsWith('/')) {
              const exists = checkInternalLinkExists(href);
              if (!exists) {
                  report.linkSafety.brokenInternalLinks.push({ file: relPath, link: href });
              }
          }
      }
  }
}

// deduplicate
report.imageIssues.missingAlt = [...new Set(report.imageIssues.missingAlt)];
report.imageIssues.possibleMissingPriority = [...new Set(report.imageIssues.possibleMissingPriority)];

console.log(JSON.stringify(report, null, 2));

