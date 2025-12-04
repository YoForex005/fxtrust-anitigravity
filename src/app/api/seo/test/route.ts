import { NextRequest, NextResponse } from 'next/server';
import { searchKeyword, SearchEngine, getApiStatus } from '@/lib/serpapi/serpapi-client';

/**
 * GET /api/seo/test
 * Test SerpApi connection and perform a single search
 * 
 * Query params:
 * - keyword: string (default: "forex CRM")
 * - engine: SearchEngine (default: "baidu")
 */
export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const keyword = searchParams.get('keyword') || 'forex CRM';
        const engine = (searchParams.get('engine') || 'baidu') as SearchEngine;

        // Test API connection first
        const status = await getApiStatus();

        if (!status.success) {
            return NextResponse.json({
                success: false,
                error: 'SerpApi connection failed',
                details: status.message
            }, { status: 500 });
        }

        // Perform a test search
        const result = await searchKeyword(keyword, engine);

        return NextResponse.json({
            success: true,
            apiStatus: 'Connected',
            testSearch: {
                keyword,
                engine,
                result
            },
            usage: {
                note: 'This test used 1 API call',
                monthlyBudget: 250,
                recommendation: 'Use POST /api/seo/track-rankings for full tracking'
            }
        });

    } catch (error) {
        console.error('SerpApi test error:', error);
        return NextResponse.json({
            success: false,
            error: 'Test failed',
            details: error instanceof Error ? error.message : 'Unknown error'
        }, { status: 500 });
    }
}
