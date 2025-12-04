/**
 * Rank Tracker - Stores and manages ranking history
 */

import { RankResult, SearchEngine } from './serpapi-client';
import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'src', 'data');
const RANKINGS_FILE = path.join(DATA_DIR, 'seo-rankings.json');

export interface RankingHistory {
    lastUpdated: string;
    totalChecks: number;
    results: RankingRecord[];
}

export interface RankingRecord {
    keyword: string;
    engine: SearchEngine;
    positions: PositionEntry[];
}

export interface PositionEntry {
    position: number | null;
    url: string | null;
    checkedAt: string;
    found: boolean;
}

/**
 * Initialize the rankings file if it doesn't exist
 */
export function initRankingsFile(): void {
    if (!fs.existsSync(DATA_DIR)) {
        fs.mkdirSync(DATA_DIR, { recursive: true });
    }

    if (!fs.existsSync(RANKINGS_FILE)) {
        const initialData: RankingHistory = {
            lastUpdated: new Date().toISOString(),
            totalChecks: 0,
            results: []
        };
        fs.writeFileSync(RANKINGS_FILE, JSON.stringify(initialData, null, 2));
    }
}

/**
 * Load current rankings from file
 */
export function loadRankings(): RankingHistory {
    initRankingsFile();
    const data = fs.readFileSync(RANKINGS_FILE, 'utf-8');
    return JSON.parse(data);
}

/**
 * Save rankings to file
 */
export function saveRankings(history: RankingHistory): void {
    initRankingsFile();
    history.lastUpdated = new Date().toISOString();
    fs.writeFileSync(RANKINGS_FILE, JSON.stringify(history, null, 2));
}

/**
 * Add new rank results to history
 */
export function addRankResults(results: RankResult[]): RankingHistory {
    const history = loadRankings();
    history.totalChecks += results.length;

    for (const result of results) {
        // Find existing record for this keyword + engine
        let record = history.results.find(
            r => r.keyword === result.keyword && r.engine === result.engine
        );

        if (!record) {
            // Create new record
            record = {
                keyword: result.keyword,
                engine: result.engine,
                positions: []
            };
            history.results.push(record);
        }

        // Add new position entry (keep last 30 entries per keyword)
        record.positions.push({
            position: result.position,
            url: result.url,
            checkedAt: result.searchedAt,
            found: result.found
        });

        // Trim to last 30 entries
        if (record.positions.length > 30) {
            record.positions = record.positions.slice(-30);
        }
    }

    saveRankings(history);
    return history;
}

/**
 * Get latest position for a keyword on a specific engine
 */
export function getLatestPosition(keyword: string, engine: SearchEngine): PositionEntry | null {
    const history = loadRankings();
    const record = history.results.find(
        r => r.keyword === keyword && r.engine === engine
    );

    if (!record || record.positions.length === 0) {
        return null;
    }

    return record.positions[record.positions.length - 1];
}

/**
 * Get ranking summary for all keywords
 */
export function getRankingSummary(): {
    totalKeywords: number;
    byEngine: Record<SearchEngine, { tracked: number; found: number; avgPosition: number }>;
    topRankings: Array<{ keyword: string; engine: SearchEngine; position: number }>;
} {
    const history = loadRankings();
    const engines: SearchEngine[] = ['baidu', 'yandex', 'naver', 'yahoo_japan'];

    const byEngine: Record<SearchEngine, { tracked: number; found: number; avgPosition: number }> = {} as any;
    const topRankings: Array<{ keyword: string; engine: SearchEngine; position: number }> = [];

    for (const engine of engines) {
        const engineRecords = history.results.filter(r => r.engine === engine);
        const foundRecords = engineRecords.filter(r => {
            const latest = r.positions[r.positions.length - 1];
            return latest?.found && latest.position !== null;
        });

        const positions = foundRecords.map(r => {
            const latest = r.positions[r.positions.length - 1];
            return latest.position!;
        });

        byEngine[engine] = {
            tracked: engineRecords.length,
            found: foundRecords.length,
            avgPosition: positions.length > 0
                ? Math.round(positions.reduce((a, b) => a + b, 0) / positions.length)
                : 0
        };

        // Collect top rankings (position <= 20)
        for (const record of foundRecords) {
            const latest = record.positions[record.positions.length - 1];
            if (latest.position && latest.position <= 20) {
                topRankings.push({
                    keyword: record.keyword,
                    engine: record.engine,
                    position: latest.position
                });
            }
        }
    }

    // Sort top rankings by position
    topRankings.sort((a, b) => a.position - b.position);

    return {
        totalKeywords: new Set(history.results.map(r => r.keyword)).size,
        byEngine,
        topRankings: topRankings.slice(0, 20)
    };
}

/**
 * Detect significant ranking changes (for alerts)
 */
export function detectRankingChanges(): Array<{
    keyword: string;
    engine: SearchEngine;
    previousPosition: number | null;
    currentPosition: number | null;
    change: 'improved' | 'dropped' | 'new' | 'lost';
}> {
    const history = loadRankings();
    const changes: Array<{
        keyword: string;
        engine: SearchEngine;
        previousPosition: number | null;
        currentPosition: number | null;
        change: 'improved' | 'dropped' | 'new' | 'lost';
    }> = [];

    for (const record of history.results) {
        if (record.positions.length < 2) continue;

        const current = record.positions[record.positions.length - 1];
        const previous = record.positions[record.positions.length - 2];

        if (current.found && !previous.found) {
            changes.push({
                keyword: record.keyword,
                engine: record.engine,
                previousPosition: null,
                currentPosition: current.position,
                change: 'new'
            });
        } else if (!current.found && previous.found) {
            changes.push({
                keyword: record.keyword,
                engine: record.engine,
                previousPosition: previous.position,
                currentPosition: null,
                change: 'lost'
            });
        } else if (current.position && previous.position) {
            const diff = previous.position - current.position;
            if (diff >= 5) {
                changes.push({
                    keyword: record.keyword,
                    engine: record.engine,
                    previousPosition: previous.position,
                    currentPosition: current.position,
                    change: 'improved'
                });
            } else if (diff <= -5) {
                changes.push({
                    keyword: record.keyword,
                    engine: record.engine,
                    previousPosition: previous.position,
                    currentPosition: current.position,
                    change: 'dropped'
                });
            }
        }
    }

    return changes;
}
