/**
 * IndexNow Protocol Implementation
 * ================================
 * 
 * This library provides functions to submit URLs to IndexNow-enabled search engines
 * (Bing, Yandex, Seznam, Naver) for immediate indexing.
 * 
 * Environment Variables Required:
 * - INDEXNOW_KEY: 32-character hex key (must match key file in public folder)
 * - INDEXNOW_HOST: Your domain (e.g., fxtrusts.com)
 * - INDEXNOW_ENDPOINT: Search engine endpoint (default: www.bing.com)
 */

// Types
export interface IndexNowResponse {
    success: boolean;
    message: string;
    statusCode?: number;
    submittedUrls?: string[];
}

export interface IndexNowConfig {
    key: string;
    host: string;
    endpoint: string;
    keyLocation: string;
}

// Get configuration from environment
function getConfig(): IndexNowConfig {
    const key = process.env.INDEXNOW_KEY;
    const host = process.env.INDEXNOW_HOST || 'fxtrusts.com';
    const endpoint = process.env.INDEXNOW_ENDPOINT || 'www.bing.com';

    if (!key) {
        throw new Error('INDEXNOW_KEY environment variable is not set');
    }

    return {
        key,
        host,
        endpoint,
        keyLocation: `https://${host}/${key}.txt`,
    };
}

/**
 * Submit a single URL to IndexNow
 * 
 * @param url - The full URL to submit (e.g., https://fxtrusts.com/blog/post)
 * @returns IndexNowResponse with success status
 * 
 * @example
 * const result = await submitSingleUrl('https://fxtrusts.com/pricing');
 */
export async function submitSingleUrl(url: string): Promise<IndexNowResponse> {
    try {
        const config = getConfig();

        // Validate URL belongs to our host
        if (!url.includes(config.host)) {
            return {
                success: false,
                message: `URL must belong to ${config.host}`,
            };
        }

        // Build GET request URL
        const indexNowUrl = new URL(`https://${config.endpoint}/indexnow`);
        indexNowUrl.searchParams.set('url', url);
        indexNowUrl.searchParams.set('key', config.key);

        console.log(`[IndexNow] Submitting single URL: ${url}`);

        const response = await fetch(indexNowUrl.toString(), {
            method: 'GET',
            headers: {
                'User-Agent': 'FXTrusts-IndexNow/1.0',
            },
        });

        const statusCode = response.status;

        // IndexNow returns 200 or 202 for success
        if (statusCode === 200 || statusCode === 202) {
            console.log(`[IndexNow] ✅ Successfully submitted: ${url}`);
            return {
                success: true,
                message: 'URL submitted successfully',
                statusCode,
                submittedUrls: [url],
            };
        }

        // Handle error responses
        const errorMessage = getErrorMessage(statusCode);
        console.error(`[IndexNow] ❌ Failed to submit ${url}: ${errorMessage}`);

        return {
            success: false,
            message: errorMessage,
            statusCode,
        };
    } catch (error) {
        console.error('[IndexNow] Error:', error);
        return {
            success: false,
            message: error instanceof Error ? error.message : 'Unknown error occurred',
        };
    }
}

/**
 * Submit multiple URLs to IndexNow (bulk submission)
 * 
 * @param urls - Array of URLs to submit (max 10,000 per request)
 * @returns IndexNowResponse with success status
 * 
 * @example
 * const result = await submitBulkUrls([
 *   'https://fxtrusts.com/blog/post-1',
 *   'https://fxtrusts.com/blog/post-2',
 * ]);
 */
export async function submitBulkUrls(urls: string[]): Promise<IndexNowResponse> {
    try {
        const config = getConfig();

        if (urls.length === 0) {
            return {
                success: false,
                message: 'No URLs provided',
            };
        }

        if (urls.length > 10000) {
            return {
                success: false,
                message: 'Maximum 10,000 URLs allowed per request',
            };
        }

        // Filter URLs to only include our host
        const validUrls = urls.filter(url => url.includes(config.host));

        if (validUrls.length === 0) {
            return {
                success: false,
                message: `No valid URLs for host ${config.host}`,
            };
        }

        console.log(`[IndexNow] Submitting ${validUrls.length} URLs in bulk`);

        // Build POST request
        const response = await fetch(`https://${config.endpoint}/indexnow`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'User-Agent': 'FXTrusts-IndexNow/1.0',
            },
            body: JSON.stringify({
                host: config.host,
                key: config.key,
                keyLocation: config.keyLocation,
                urlList: validUrls,
            }),
        });

        const statusCode = response.status;

        if (statusCode === 200 || statusCode === 202) {
            console.log(`[IndexNow] ✅ Successfully submitted ${validUrls.length} URLs`);
            return {
                success: true,
                message: `${validUrls.length} URLs submitted successfully`,
                statusCode,
                submittedUrls: validUrls,
            };
        }

        const errorMessage = getErrorMessage(statusCode);
        console.error(`[IndexNow] ❌ Bulk submit failed: ${errorMessage}`);

        return {
            success: false,
            message: errorMessage,
            statusCode,
        };
    } catch (error) {
        console.error('[IndexNow] Error:', error);
        return {
            success: false,
            message: error instanceof Error ? error.message : 'Unknown error occurred',
        };
    }
}

/**
 * Verify that the key file is accessible
 * 
 * @returns true if key file is accessible and contains correct key
 */
export async function verifyKeyFile(): Promise<boolean> {
    try {
        const config = getConfig();

        console.log(`[IndexNow] Verifying key file at: ${config.keyLocation}`);

        const response = await fetch(config.keyLocation);

        if (!response.ok) {
            console.error(`[IndexNow] Key file not accessible: ${response.status}`);
            return false;
        }

        const content = (await response.text()).trim();

        if (content === config.key) {
            console.log('[IndexNow] ✅ Key file verified successfully');
            return true;
        }

        console.error('[IndexNow] Key file content does not match INDEXNOW_KEY');
        return false;
    } catch (error) {
        console.error('[IndexNow] Error verifying key file:', error);
        return false;
    }
}

/**
 * Get all URLs from the sitemap for bulk submission
 */
export function getSitemapUrls(): string[] {
    const baseUrl = 'https://fxtrusts.com';

    // These match your sitemap.ts routes
    const routes = [
        '',
        '/get-started',
        '/platform/crm',
        '/platform/mt5',
        '/platform/copy-trading',
        '/platform/mobile-app',
        '/platform/web-trader',
        '/platform/hosting',
        '/solutions/crm',
        '/solutions/mt5',
        '/solutions/liquidity',
        '/solutions/crypto-payments',
        '/solutions/prop-firm',
        '/solutions/risk-management',
        '/solutions/forex-broker',
        '/markets/forex',
        '/markets/crypto',
        '/markets/indices',
        '/markets/commodities',
        '/markets/stocks',
        '/company/about',
        '/company/contact',
        '/company/manifesto',
        '/press',
        '/pricing',
        '/resources/help-center',
        '/resources/api-docs',
        '/legal/privacy-policy',
        '/legal/terms-conditions',
        '/legal/refund-policy',
        '/legal/risk-disclosure',
        '/resources/guides/how-to-start-forex-broker',
        '/resources/guides/forex-crm-complete-guide',
        '/resources',
        '/resources/status',
        '/resources/comparisons/b2broker-alternative',
        '/resources/comparisons/leverate-alternative',
        '/resources/comparisons/match-trader-alternative',
        '/resources/comparisons/currencycloud-alternative',
        '/resources/comparisons/gold-i-alternative',
        '/resources/comparisons/onetrader-alternative',
        '/resources/blog',
        '/resources/blog/best-forex-crm-providers-2025',
        '/resources/blog/mt4-vs-mt5-crm',
        '/resources/blog/forex-broker-crm-pricing-exposed',
        '/resources/blog/why-we-refuse-to-charge-setup-fees',
        '/resources/blog/how-to-start-forex-brokerage-2025',
        '/resources/blog/mt5-white-label-complete-guide',
        '/resources/blog/forex-crm-pricing-decoded',
        '/resources/blog/how-to-start-prop-firm-2025',
        '/resources/blog/a-book-vs-b-book-explained',
        '/resources/blog/forex-liquidity-providers-guide',
    ];

    return routes.map(route => `${baseUrl}${route}`);
}

// Helper function to get human-readable error messages
function getErrorMessage(statusCode: number): string {
    const errorMessages: Record<number, string> = {
        400: 'Bad request - Invalid URL format',
        403: 'Forbidden - Key file not found or key mismatch',
        422: 'Unprocessable - URLs do not belong to the host',
        429: 'Too many requests - Rate limit exceeded',
    };

    return errorMessages[statusCode] || `HTTP Error ${statusCode}`;
}
