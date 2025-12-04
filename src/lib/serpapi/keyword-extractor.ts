/**
 * Keyword Extractor - Automatically extracts and manages keywords from all pages
 */

import fs from 'fs';
import path from 'path';

export interface PageKeywords {
    path: string;
    title: string;
    keywords: string[];
    priority: 'high' | 'medium' | 'low';
}

// High-priority keywords for rank tracking (extracted from your pages)
export const PRIORITY_KEYWORDS: PageKeywords[] = [
    // Solutions - High Priority
    {
        path: '/solutions/forex-broker',
        title: 'Start a Forex Broker',
        keywords: ['start a forex broker', 'forex broker turnkey solution', 'white label forex broker'],
        priority: 'high'
    },
    {
        path: '/solutions/mt5',
        title: 'MT5 White Label',
        keywords: ['MT5 white label', 'MetaTrader 5 broker', 'forex white label'],
        priority: 'high'
    },
    {
        path: '/solutions/crm',
        title: 'Forex CRM',
        keywords: ['forex CRM', 'broker CRM', 'institutional CRM'],
        priority: 'high'
    },
    {
        path: '/solutions/liquidity',
        title: 'Liquidity Solutions',
        keywords: ['forex liquidity', 'tier-1 liquidity', 'liquidity provider'],
        priority: 'high'
    },
    {
        path: '/solutions/crypto-payments',
        title: 'Crypto Payments',
        keywords: ['crypto payment gateway', 'forex broker crypto payments', 'accept usdt'],
        priority: 'medium'
    },
    {
        path: '/solutions/prop-firm',
        title: 'Prop Firm Tech',
        keywords: ['prop firm tech', 'start a prop firm', 'prop firm crm'],
        priority: 'medium'
    },
    {
        path: '/solutions/risk-management',
        title: 'Risk Management',
        keywords: ['forex risk management', 'a-book vs b-book', 'broker risk management'],
        priority: 'medium'
    },

    // Platform - Medium Priority
    {
        path: '/platform/crm',
        title: 'Forex CRM Software',
        keywords: ['forex crm software', 'best forex crm', 'forex broker crm'],
        priority: 'high'
    },
    {
        path: '/platform/mt5',
        title: 'MT5 CRM',
        keywords: ['mt5 crm', 'metatrader 5 manager', 'mt5 white label'],
        priority: 'medium'
    },

    // Markets
    {
        path: '/markets/forex',
        title: 'Forex Trading',
        keywords: ['forex trading', 'currency pairs', 'forex broker'],
        priority: 'medium'
    },
    {
        path: '/markets/crypto',
        title: 'Crypto Trading',
        keywords: ['crypto trading', 'bitcoin broker', 'cryptocurrency exchange'],
        priority: 'medium'
    },

    // Resources - High Value for SEO
    {
        path: '/resources/comparisons/b2broker-alternative',
        title: 'B2Broker Alternative',
        keywords: ['b2broker alternative', 'b2broker vs fxtrusts', 'b2b broker competitors'],
        priority: 'high'
    },
    {
        path: '/resources/comparisons/leverate-alternative',
        title: 'Leverate Alternative',
        keywords: ['leverate alternative', 'leverate crm', 'leverate competitors'],
        priority: 'medium'
    },
    {
        path: '/resources/guides/how-to-start-forex-broker',
        title: 'How to Start Forex Broker',
        keywords: ['how to become a forex broker', 'how to start a forex brokerage firm', 'how to start forex broker business'],
        priority: 'high'
    },
    {
        path: '/resources/guides/forex-crm-complete-guide',
        title: 'Forex CRM Guide',
        keywords: ['forex crm guide', 'best crm for forex brokers'],
        priority: 'medium'
    },

    // Blog
    {
        path: '/resources/blog/best-forex-crm-providers-2025',
        title: 'Best Forex CRM 2025',
        keywords: ['best forex crm providers', 'forex crm comparison'],
        priority: 'medium'
    },
    {
        path: '/resources/blog/forex-broker-crm-pricing-exposed',
        title: 'Forex CRM Pricing',
        keywords: ['forex crm pricing', 'forex broker crm cost'],
        priority: 'medium'
    }
];

/**
 * Get all keywords grouped by priority
 */
export function getAllKeywords(): { high: string[]; medium: string[]; low: string[] } {
    const result = { high: [] as string[], medium: [] as string[], low: [] as string[] };

    for (const page of PRIORITY_KEYWORDS) {
        for (const keyword of page.keywords) {
            if (!result[page.priority].includes(keyword)) {
                result[page.priority].push(keyword);
            }
        }
    }

    return result;
}

/**
 * Get top N keywords for tracking (budget-conscious)
 */
export function getTopKeywords(limit: number = 15): string[] {
    const all = getAllKeywords();
    const combined = [...all.high, ...all.medium, ...all.low];
    return combined.slice(0, limit);
}

/**
 * Get keywords for a specific page path
 */
export function getPageKeywords(pagePath: string): string[] {
    const page = PRIORITY_KEYWORDS.find(p => p.path === pagePath);
    return page?.keywords || [];
}

/**
 * Get all tracked pages
 */
export function getTrackedPages(): PageKeywords[] {
    return PRIORITY_KEYWORDS;
}

/**
 * Calculate estimated API calls for a tracking run
 */
export function calculateApiCalls(
    keywordCount: number,
    engines: number = 4 // Baidu, Yandex, Naver, Yahoo
): number {
    return keywordCount * engines;
}
