import { NextRequest, NextResponse } from 'next/server';
import { scanAllPages, getAllScannedKeywords, loadCachedPages } from '@/lib/serpapi/keyword-scanner';

/**
 * GET /api/seo/scan
 * Scan all pages for keywords (auto-detects new blogs)
 * 
 * Query params:
 * - rescan: boolean (force rescan all pages)
 */
export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const rescan = searchParams.get('rescan') === 'true';

        // Scan or load cached
        const pages = rescan ? scanAllPages() : (loadCachedPages().length > 0 ? loadCachedPages() : scanAllPages());
        const allKeywords = getAllScannedKeywords(rescan);

        // Group by category
        const byCategory = {
            solutions: pages.filter(p => p.path.startsWith('/solutions')),
            platform: pages.filter(p => p.path.startsWith('/platform')),
            markets: pages.filter(p => p.path.startsWith('/markets')),
            resources: pages.filter(p => p.path.startsWith('/resources')),
            blog: pages.filter(p => p.path.includes('/blog/')),
            legal: pages.filter(p => p.path.startsWith('/legal')),
            other: pages.filter(p =>
                !p.path.startsWith('/solutions') &&
                !p.path.startsWith('/platform') &&
                !p.path.startsWith('/markets') &&
                !p.path.startsWith('/resources') &&
                !p.path.startsWith('/legal')
            )
        };

        return NextResponse.json({
            success: true,
            scanned: rescan ? 'fresh' : 'cached',
            summary: {
                totalPages: pages.length,
                totalKeywords: allKeywords.length,
                byCategory: {
                    solutions: byCategory.solutions.length,
                    platform: byCategory.platform.length,
                    markets: byCategory.markets.length,
                    resources: byCategory.resources.length,
                    blog: byCategory.blog.length,
                    legal: byCategory.legal.length,
                    other: byCategory.other.length
                }
            },
            pages: pages.map(p => ({
                path: p.path,
                title: p.title,
                keywordCount: p.keywords.length,
                keywords: p.keywords
            })),
            allKeywords,
            apiEstimate: {
                engines: 4,
                keywordsCount: allKeywords.length,
                estimatedCalls: allKeywords.length * 4,
                monthlyBudget: 250,
                recommendation: allKeywords.length > 60
                    ? `Too many keywords (${allKeywords.length}). Recommend tracking top 15-20.`
                    : `Safe to track all ${allKeywords.length} keywords.`
            }
        });

    } catch (error) {
        console.error('Scan error:', error);
        return NextResponse.json({
            success: false,
            error: 'Failed to scan pages'
        }, { status: 500 });
    }
}

/**
 * POST /api/seo/scan
 * Force rescan and optionally trigger rank tracking for new keywords
 */
export async function POST(request: NextRequest) {
    try {
        // Force rescan
        const pages = scanAllPages();
        const allKeywords = getAllScannedKeywords(true);

        return NextResponse.json({
            success: true,
            message: 'Scan complete',
            pagesFound: pages.length,
            keywordsFound: allKeywords.length,
            newPages: pages.filter(p => {
                const hourAgo = new Date(Date.now() - 60 * 60 * 1000);
                return new Date(p.lastScanned) > hourAgo;
            }).map(p => p.path)
        });

    } catch (error) {
        console.error('Scan error:', error);
        return NextResponse.json({
            success: false,
            error: 'Failed to scan pages'
        }, { status: 500 });
    }
}
