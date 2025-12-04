import { NextRequest, NextResponse } from 'next/server';
import { getTopKeywords, getAllKeywords, getTrackedPages, getPageKeywords, calculateApiCalls } from '@/lib/serpapi/keyword-extractor';

/**
 * GET /api/seo/keywords
 * Get all keywords extracted from the site
 */
export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const path = searchParams.get('path');
        const limit = parseInt(searchParams.get('limit') || '50');

        // If path specified, get keywords for that page
        if (path) {
            const pageKeywords = getPageKeywords(path);
            return NextResponse.json({
                success: true,
                path,
                keywords: pageKeywords,
                count: pageKeywords.length
            });
        }

        // Get all keywords grouped by priority
        const allKeywords = getAllKeywords();
        const topKeywords = getTopKeywords(limit);
        const pages = getTrackedPages();

        return NextResponse.json({
            success: true,
            summary: {
                totalPages: pages.length,
                totalKeywords: allKeywords.high.length + allKeywords.medium.length + allKeywords.low.length,
                byPriority: {
                    high: allKeywords.high.length,
                    medium: allKeywords.medium.length,
                    low: allKeywords.low.length
                }
            },
            topKeywords,
            byPriority: allKeywords,
            pages: pages.map(p => ({
                path: p.path,
                title: p.title,
                priority: p.priority,
                keywordCount: p.keywords.length
            })),
            apiEstimate: {
                engines: 4,
                topKeywordsCount: topKeywords.length,
                estimatedCalls: calculateApiCalls(topKeywords.length),
                monthlyBudget: 250,
                budgetRemaining: 250 - calculateApiCalls(topKeywords.length)
            }
        });

    } catch (error) {
        console.error('Keywords API error:', error);
        return NextResponse.json({
            success: false,
            error: 'Failed to get keywords'
        }, { status: 500 });
    }
}
