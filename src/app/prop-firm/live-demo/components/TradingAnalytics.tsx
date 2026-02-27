'use client';

import { useState, useEffect } from 'react';
import styles from '../demo.module.css';

export default function TradingAnalytics() {
    const [activeTab, setActiveTab] = useState<'volume' | 'pnl' | 'distribution'>('volume');
    const [liveCount, setLiveCount] = useState(0);

    // Simulate live trade updates
    useEffect(() => {
        const interval = setInterval(() => {
            setLiveCount(prev => (prev + 1) % 100);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const topInstruments = [
        { symbol: 'EUR/USD', volume: 24500000, change: 2.4, color: '#10B981' },
        { symbol: 'BTC/USD', volume: 18200000, change: -1.2, color: '#EF4444' },
        { symbol: 'GBP/USD', volume: 15800000, change: 1.8, color: '#10B981' },
        { symbol: 'GOLD', volume: 12400000, change: 0.5, color: '#10B981' },
        { symbol: 'ETH/USD', volume: 9800000, change: -0.8, color: '#EF4444' },
    ];

    const assetDistribution = [
        { name: 'Forex', value: 52, color: '#6366F1' },
        { name: 'Crypto', value: 28, color: '#8B5CF6' },
        { name: 'Commodities', value: 12, color: '#EC4899' },
        { name: 'Indices', value: 8, color: '#14B8A6' },
    ];

    const recentTrades = [
        { id: 1, client: 'Client #1240', instrument: 'EUR/USD', type: 'BUY', amount: 50000, time: '2 min ago' },
        { id: 2, client: 'Client #0842', instrument: 'BTC/USD', type: 'SELL', amount: 25000, time: '3 min ago' },
        { id: 3, client: 'Client #2103', instrument: 'GOLD', type: 'BUY', amount: 75000, time: '5 min ago' },
        { id: 4, client: 'Client #1567', instrument: 'ETH/USD', type: 'BUY', amount: 30000, time: '7 min ago' },
        { id: 5, client: 'Client #0934', instrument: 'GBP/USD', type: 'SELL', amount: 45000, time: '9 min ago' },
    ];

    const formatVolume = (num: number) => {
        if (num >= 1000000) return `$${(num / 1000000).toFixed(1)}M`;
        if (num >= 1000) return `$${(num / 1000).toFixed(0)}K`;
        return `$${num}`;
    };

    return (
        <div className={styles.tradingAnalytics}>
            <div className={styles.analyticsHeader}>
                <div>
                    <h3 className={styles.analyticsTitle}>TRADING ANALYTICS</h3>
                    <div className={styles.liveIndicator}>
                        <span className={styles.liveDot}></span>
                        <span className={styles.liveText}>Live Data</span>
                    </div>
                </div>
                <div className={styles.analyticsTabs}>
                    <button
                        className={`${styles.analyticsTab} ${activeTab === 'volume' ? styles.analyticsTabActive : ''}`}
                        onClick={() => setActiveTab('volume')}
                    >
                        Volume
                    </button>
                    <button
                        className={`${styles.analyticsTab} ${activeTab === 'pnl' ? styles.analyticsTabActive : ''}`}
                        onClick={() => setActiveTab('pnl')}
                    >
                        P&L
                    </button>
                    <button
                        className={`${styles.analyticsTab} ${activeTab === 'distribution' ? styles.analyticsTabActive : ''}`}
                        onClick={() => setActiveTab('distribution')}
                    >
                        Distribution
                    </button>
                </div>
            </div>

            {activeTab === 'volume' && (
                <div className={styles.analyticsContent}>
                    <div className={styles.volumeSection}>
                        <h4 className={styles.sectionLabel}>Top 5 Instruments by Volume</h4>
                        <div className={styles.instrumentList}>
                            {topInstruments.map((instrument, index) => (
                                <div key={instrument.symbol} className={styles.instrumentRow}>
                                    <div className={styles.instrumentInfo}>
                                        <span className={styles.instrumentRank}>#{index + 1}</span>
                                        <span className={styles.instrumentSymbol}>{instrument.symbol}</span>
                                    </div>
                                    <div className={styles.instrumentMetrics}>
                                        <span className={styles.instrumentVolume}>{formatVolume(instrument.volume)}</span>
                                        <span className={instrument.change >= 0 ? styles.changePositive : styles.changeNegative}>
                                            {instrument.change >= 0 ? '+' : ''}{instrument.change}%
                                        </span>
                                    </div>
                                    <div className={styles.volumeBar}>
                                        <div
                                            className={styles.volumeBarFill}
                                            style={{
                                                width: `${(instrument.volume / topInstruments[0].volume) * 100}%`,
                                                background: instrument.color
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'distribution' && (
                <div className={styles.analyticsContent}>
                    <div className={styles.distributionSection}>
                        <h4 className={styles.sectionLabel}>Asset Class Distribution</h4>
                        <div className={styles.donutChart}>
                            {assetDistribution.map((asset, index) => {
                                const startAngle = assetDistribution.slice(0, index).reduce((sum, a) => sum + a.value, 0) * 3.6;
                                const endAngle = startAngle + (asset.value * 3.6);

                                return (
                                    <div key={asset.name} className={styles.donutSegment}>
                                        <svg width="200" height="200" viewBox="0 0 200 200">
                                            <circle
                                                cx="100"
                                                cy="100"
                                                r="70"
                                                fill="none"
                                                stroke={asset.color}
                                                strokeWidth="30"
                                                strokeDasharray={`${asset.value * 4.4} 440`}
                                                strokeDashoffset={-startAngle * 1.222}
                                                opacity="0.9"
                                            />
                                        </svg>
                                    </div>
                                );
                            })}
                            <div className={styles.donutCenter}>
                                <span className={styles.donutLabel}>Asset</span>
                                <span className={styles.donutValue}>Distribution</span>
                            </div>
                        </div>
                        <div className={styles.distributionLegend}>
                            {assetDistribution.map(asset => (
                                <div key={asset.name} className={styles.legendItem}>
                                    <span className={styles.legendDot} style={{ background: asset.color }}></span>
                                    <span className={styles.legendLabel}>{asset.name}</span>
                                    <span className={styles.legendValue}>{asset.value}%</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'pnl' && (
                <div className={styles.analyticsContent}>
                    <div className={styles.tradeFeedSection}>
                        <h4 className={styles.sectionLabel}>Recent Trades</h4>
                        <div className={styles.tradeFeed}>
                            {recentTrades.map(trade => (
                                <div key={trade.id} className={styles.tradeItem}>
                                    <div className={styles.tradeClient}>{trade.client}</div>
                                    <div className={styles.tradeDetails}>
                                        <span className={styles.tradeInstrument}>{trade.instrument}</span>
                                        <span className={trade.type === 'BUY' ? styles.tradeBuy : styles.tradeSell}>
                                            {trade.type}
                                        </span>
                                        <span className={styles.tradeAmount}>{formatVolume(trade.amount)}</span>
                                    </div>
                                    <div className={styles.tradeTime}>{trade.time}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <div className={styles.analyticsFooter}>
                <div className={styles.quickStat}>
                    <span className={styles.quickStatLabel}>Win Rate</span>
                    <span className={styles.quickStatValue}>67.8%</span>
                </div>
                <div className={styles.quickStat}>
                    <span className={styles.quickStatLabel}>Avg Position</span>
                    <span className={styles.quickStatValue}>4.2h</span>
                </div>
                <div className={styles.quickStat}>
                    <span className={styles.quickStatLabel}>Active Trades</span>
                    <span className={styles.quickStatValue}>284</span>
                </div>
            </div>
        </div>
    );
}
