import { NextResponse } from 'next/server';
import { submitUrlsToBing } from '@/lib/bing-indexing';

// This route can be triggered manually or via a cron job
// GET /api/webhooks/bing-submit?secret=YOUR_SECRET
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const secret = searchParams.get('secret');

    // Simple protection to prevent unauthorized usage
    // In production, use a more robust secret or authentication
    if (secret !== process.env.BING_SUBMISSION_SECRET && process.env.NODE_ENV === 'production') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // TODO: Dynamically fetch URLs from your sitemap or database
    // For now, we'll submit the main pages
    const urlsToSubmit = [
        'https://www.fxtrusts.com/',
        'https://www.fxtrusts.com/solutions/mt5',
        'https://www.fxtrusts.com/solutions/crypto-payments',
        'https://www.fxtrusts.com/solutions/crm',
        'https://www.fxtrusts.com/solutions/liquidity',
        'https://www.fxtrusts.com/company/contact',
        'https://www.fxtrusts.com/resources/blog',
    ];

    const result = await submitUrlsToBing(urlsToSubmit);

    return NextResponse.json(result, { status: result.success ? 200 : 500 });
}
