/**
 * SerpApi Client for International Search Engines
 * Supports: Baidu, Yandex, Naver, Yahoo Japan
 * Excludes: Google, Bing (already covered by native APIs)
 */

const SERPAPI_BASE_URL = 'https://serpapi.com/search';
const SERPAPI_KEY = process.env.SERPAPI_KEY || '9430d46dc631953c5abf00dccdc6f1d086cf3049f5c60eb64488ec554708d719';

export type SearchEngine = 'baidu' | 'yandex' | 'naver' | 'yahoo_japan';

export interface SearchEngineConfig {
    engine: string;
    domain?: string;
    extraParams?: Record<string, string>;
}

export const SEARCH_ENGINES: Record<SearchEngine, SearchEngineConfig> = {
    baidu: {
        engine: 'baidu',
        extraParams: {}
    },
    yandex: {
        engine: 'yandex',
        extraParams: {
            yandex_domain: 'yandex.com'
        }
    },
    naver: {
        engine: 'naver',
        extraParams: {}
    },
    yahoo_japan: {
        engine: 'yahoo',
        domain: 'yahoo.co.jp',
        extraParams: {
            yahoo_domain: 'jp'
        }
    }
};

export interface SerpApiResponse {
    search_metadata: {
        id: string;
        status: string;
        created_at: string;
        processed_at: string;
        total_time_taken: number;
    };
    search_parameters: {
        engine: string;
        q: string;
    };
    organic_results?: Array<{
        position: number;
        title: string;
        link: string;
        snippet?: string;
        domain?: string;
    }>;
    error?: string;
}

export interface RankResult {
    keyword: string;
    engine: SearchEngine;
    position: number | null;
    url: string | null;
    title: string | null;
    searchedAt: string;
    found: boolean;
}

/**
 * Search for a keyword on a specific search engine
 */
export async function searchKeyword(
    keyword: string,
    engine: SearchEngine,
    targetDomain: string = 'fxtrusts.com'
): Promise<RankResult> {
    const config = SEARCH_ENGINES[engine];

    const params = new URLSearchParams({
        api_key: SERPAPI_KEY,
        engine: config.engine,
        q: keyword,
        num: '100', // Check top 100 results
        ...config.extraParams
    });

    if (config.domain) {
        params.set('domain', config.domain);
    }

    try {
        const response = await fetch(`${SERPAPI_BASE_URL}?${params.toString()}`);

        if (!response.ok) {
            console.error(`SerpApi error for ${engine}:`, response.status);
            return {
                keyword,
                engine,
                position: null,
                url: null,
                title: null,
                searchedAt: new Date().toISOString(),
                found: false
            };
        }

        const data: SerpApiResponse = await response.json();

        if (data.error) {
            console.error(`SerpApi error for ${engine}:`, data.error);
            return {
                keyword,
                engine,
                position: null,
                url: null,
                title: null,
                searchedAt: new Date().toISOString(),
                found: false
            };
        }

        // Find our domain in the results
        const organicResults = data.organic_results || [];
        const ourResult = organicResults.find(result =>
            result.link?.includes(targetDomain) ||
            result.domain?.includes(targetDomain)
        );

        if (ourResult) {
            return {
                keyword,
                engine,
                position: ourResult.position,
                url: ourResult.link,
                title: ourResult.title,
                searchedAt: new Date().toISOString(),
                found: true
            };
        }

        return {
            keyword,
            engine,
            position: null,
            url: null,
            title: null,
            searchedAt: new Date().toISOString(),
            found: false
        };

    } catch (error) {
        console.error(`SerpApi fetch error for ${engine}:`, error);
        return {
            keyword,
            engine,
            position: null,
            url: null,
            title: null,
            searchedAt: new Date().toISOString(),
            found: false
        };
    }
}

/**
 * Track rankings for a keyword across all international engines
 */
export async function trackKeywordAllEngines(
    keyword: string,
    engines: SearchEngine[] = ['baidu', 'yandex', 'naver', 'yahoo_japan']
): Promise<RankResult[]> {
    const results: RankResult[] = [];

    for (const engine of engines) {
        const result = await searchKeyword(keyword, engine);
        results.push(result);
        // Small delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 500));
    }

    return results;
}

/**
 * Get remaining API credits (approximate based on usage)
 */
export async function getApiStatus(): Promise<{ success: boolean; message: string }> {
    try {
        const params = new URLSearchParams({
            api_key: SERPAPI_KEY,
            engine: 'google',
            q: 'test',
            num: '1'
        });

        const response = await fetch(`${SERPAPI_BASE_URL}?${params.toString()}`);

        if (response.ok) {
            return { success: true, message: 'SerpApi connection successful' };
        } else {
            const error = await response.text();
            return { success: false, message: `SerpApi error: ${error}` };
        }
    } catch (error) {
        return { success: false, message: `Connection error: ${error}` };
    }
}
