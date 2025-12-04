import { NextRequest, NextResponse } from 'next/server';
import { searchKeyword, trackKeywordAllEngines, SearchEngine, RankResult } from '@/lib/serpapi/serpapi-client';
import { getTopKeywords, getAllKeywords } from '@/lib/serpapi/keyword-extractor';
import { addRankResults, getRankingSummary, detectRankingChanges } from '@/lib/serpapi/rank-tracker';

/**
 * POST /api/seo/track-rankings
 * Trigger rank tracking for specified keywords
 * 
 * Body: { keywords?: string[], engines?: SearchEngine[], limit?: number }
 * If no keywords specified, uses top priority keywords
 */
export async function POST(request: NextRequest) {
    try {
        const body = await request.json().catch(() => ({}));

        // Get keywords to track
        let keywords: string[] = body.keywords || getTopKeywords(body.limit || 15);

        // Engines to check (default: all international engines)
        const engines: SearchEngine[] = body.engines || ['baidu', 'yandex', 'naver', 'yahoo_japan'];

        // Calculate API calls
        const estimatedCalls = keywords.length * engines.length;

        // Safety check - don't exceed monthly budget in one call
        if (estimatedCalls > 60) {
            return NextResponse.json({
                success: false,
                error: 'Too many API calls requested',
                estimatedCalls,
                recommendation: 'Limit to 15 keywords × 4 engines = 60 calls max per run'
            }, { status: 400 });
        }

        const allResults: RankResult[] = [];

        // Track each keyword
        for (const keyword of keywords) {
            const results = await trackKeywordAllEngines(keyword, engines);
            allResults.push(...results);
        }

        // Save results to history
        const history = addRankResults(allResults);

        // Detect changes
        const changes = detectRankingChanges();

        // Get summary
        const summary = getRankingSummary();

        return NextResponse.json({
            success: true,
            tracking: {
                keywordsTracked: keywords.length,
                enginesChecked: engines.length,
                totalApiCalls: allResults.length,
                timestamp: new Date().toISOString()
            },
            results: allResults,
            changes: changes.length > 0 ? changes : null,
            summary
        });

    } catch (error) {
        console.error('Rank tracking error:', error);
        return NextResponse.json({
            success: false,
            error: 'Internal server error during rank tracking'
        }, { status: 500 });
    }
}

/**
 * GET /api/seo/track-rankings
 * Get current ranking summary and history
 */
export async function GET() {
    try {
        const summary = getRankingSummary();
        const changes = detectRankingChanges();
        const allKeywords = getAllKeywords();

        return NextResponse.json({
            success: true,
            summary,
            recentChanges: changes,
            keywordCounts: {
                high: allKeywords.high.length,
                medium: allKeywords.medium.length,
                low: allKeywords.low.length,
                total: allKeywords.high.length + allKeywords.medium.length + allKeywords.low.length
            },
            apiUsageEstimate: {
                perFullRun: allKeywords.high.length * 4, // High priority × 4 engines
                monthlyBudget: 250,
                recommended: 'Track high-priority keywords monthly'
            }
        });

    } catch (error) {
        console.error('Get rankings error:', error);
        return NextResponse.json({
            success: false,
            error: 'Failed to get ranking summary'
        }, { status: 500 });
    }
}
