/**
 * Dynamic Keyword Scanner - Automatically extracts keywords from all pages
 * Scans the /src/app directory for page.tsx files with metadata.keywords
 */

import fs from 'fs';
import path from 'path';

export interface ScannedPage {
    path: string;
    filePath: string;
    keywords: string[];
    title: string;
    lastScanned: string;
}

const APP_DIR = path.join(process.cwd(), 'src', 'app');
const CACHE_FILE = path.join(process.cwd(), 'src', 'data', 'keyword-cache.json');

/**
 * Recursively find all page.tsx files
 */
function findPageFiles(dir: string, files: string[] = []): string[] {
    const items = fs.readdirSync(dir);

    for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            // Skip api, live-demo, and node_modules
            if (!['api', 'live-demo', 'node_modules', '.next'].includes(item)) {
                findPageFiles(fullPath, files);
            }
        } else if (item === 'page.tsx') {
            files.push(fullPath);
        }
    }

    return files;
}

/**
 * Extract keywords from a page.tsx file
 */
function extractKeywordsFromFile(filePath: string): { keywords: string[]; title: string } {
    try {
        const content = fs.readFileSync(filePath, 'utf-8');

        // Extract keywords array
        const keywordsMatch = content.match(/keywords:\s*\[([\s\S]*?)\]/);
        let keywords: string[] = [];

        if (keywordsMatch) {
            // Parse the keywords array
            const keywordsString = keywordsMatch[1];
            const matches = keywordsString.match(/['"`](.*?)['"`]/g);
            if (matches) {
                keywords = matches.map(m => m.replace(/['"`]/g, '').trim());
            }
        }

        // Extract title
        const titleMatch = content.match(/title:\s*['"`](.*?)['"`]/);
        const title = titleMatch ? titleMatch[1] : 'Unknown';

        return { keywords, title };
    } catch (error) {
        console.error(`Error reading file ${filePath}:`, error);
        return { keywords: [], title: 'Unknown' };
    }
}

/**
 * Convert file path to URL path
 */
function filePathToUrlPath(filePath: string): string {
    const relativePath = path.relative(APP_DIR, filePath);
    const urlPath = relativePath
        .replace(/\\/g, '/') // Windows path fix
        .replace('/page.tsx', '')
        .replace('page.tsx', '');

    return urlPath ? `/${urlPath}` : '/';
}

/**
 * Scan all pages and extract keywords
 */
export function scanAllPages(): ScannedPage[] {
    const pageFiles = findPageFiles(APP_DIR);
    const pages: ScannedPage[] = [];

    for (const filePath of pageFiles) {
        const { keywords, title } = extractKeywordsFromFile(filePath);
        const urlPath = filePathToUrlPath(filePath);

        if (keywords.length > 0) {
            pages.push({
                path: urlPath,
                filePath,
                keywords,
                title,
                lastScanned: new Date().toISOString()
            });
        }
    }

    // Save to cache
    saveCache(pages);

    return pages;
}

/**
 * Save scanned pages to cache
 */
function saveCache(pages: ScannedPage[]): void {
    const cacheDir = path.dirname(CACHE_FILE);
    if (!fs.existsSync(cacheDir)) {
        fs.mkdirSync(cacheDir, { recursive: true });
    }
    fs.writeFileSync(CACHE_FILE, JSON.stringify({
        lastUpdated: new Date().toISOString(),
        totalPages: pages.length,
        totalKeywords: pages.reduce((acc, p) => acc + p.keywords.length, 0),
        pages
    }, null, 2));
}

/**
 * Load cached pages
 */
export function loadCachedPages(): ScannedPage[] {
    try {
        if (fs.existsSync(CACHE_FILE)) {
            const data = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf-8'));
            return data.pages || [];
        }
    } catch (error) {
        console.error('Error loading cache:', error);
    }
    return [];
}

/**
 * Get all unique keywords from scanned pages
 */
export function getAllScannedKeywords(rescan: boolean = false): string[] {
    const pages = rescan ? scanAllPages() : loadCachedPages();

    if (pages.length === 0) {
        // First time - scan
        return getAllScannedKeywords(true);
    }

    const allKeywords = new Set<string>();
    for (const page of pages) {
        for (const keyword of page.keywords) {
            allKeywords.add(keyword);
        }
    }

    return Array.from(allKeywords);
}

/**
 * Get keywords for new/recently added pages
 */
export function getNewPageKeywords(lastCheck: Date): ScannedPage[] {
    const pages = scanAllPages();

    return pages.filter(page => {
        try {
            const stat = fs.statSync(page.filePath);
            return stat.mtime > lastCheck;
        } catch {
            return false;
        }
    });
}
