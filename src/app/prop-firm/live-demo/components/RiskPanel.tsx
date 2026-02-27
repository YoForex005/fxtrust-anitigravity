'use client';

import { useState, useEffect } from 'react';
import styles from '../demo.module.css';

export default function RiskPanel() {
    const [alertsOpen, setAlertsOpen] = useState(false);
    const [pulseKey, setPulseKey] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPulseKey(prev => prev + 1);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const totalExposure = 68; // percentage
    const exposureByAsset = [
        { name: 'Forex', exposure: 4200000, percentage: 45, risk: 'low' },
        { name: 'Crypto', exposure: 2800000, percentage: 30, risk: 'medium' },
        { name: 'Commodities', exposure: 1500000, percentage: 16, risk: 'low' },
        { name: 'Indices', exposure: 850000, percentage: 9, risk: 'low' },
    ];

    const riskyPositions = [
        { client: 'Client #2401', instrument: 'BTC/USD', exposure: 450000, margin: 92, risk: 'high' },
        { client: 'Client #1893', instrument: 'ETH/USD', exposure: 280000, margin: 88, risk: 'high' },
        { client: 'Client #3012', instrument: 'EUR/USD', exposure: 520000, margin: 78, risk: 'medium' },
        { client: 'Client #0654', instrument: 'GOLD', exposure: 190000, margin: 75, risk: 'medium' },
        { client: 'Client #2187', instrument: 'GBP/JPY', exposure: 340000, margin: 72, risk: 'medium' },
    ];

    const formatCurrency = (num: number) => {
        if (num >= 1000000) return `$${(num / 1000000).toFixed(1)}M`;
        if (num >= 1000) return `$${(num / 1000).toFixed(0)}K`;
        return `$${num}`;
    };

    const getRiskColor = (level: string) => {
        switch (level) {
            case 'high': return '#EF4444';
            case 'medium': return '#F59E0B';
            case 'low': return '#10B981';
            default: return '#64748B';
        }
    };

    const getExposureStatus = (percentage: number) => {
        if (percentage >= 80) return { label: 'CRITICAL', color: '#EF4444' };
        if (percentage >= 60) return { label: 'WARNING', color: '#F59E0B' };
        return { label: 'HEALTHY', color: '#10B981' };
    };

    const status = getExposureStatus(totalExposure);

    return (
        <div className={styles.riskPanel}>
            <div className={styles.riskHeader}>
                <h3 className={styles.riskTitle}>RISK MANAGEMENT</h3>
                <button
                    className={styles.alertButton}
                    onClick={() => setAlertsOpen(!alertsOpen)}
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                        <line x1="12" y1="9" x2="12" y2="13"></line>
                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                    <span className={styles.alertCount}>3</span>
                </button>
            </div>

            {/* Exposure Gauge */}
            <div className={styles.exposureGauge}>
                <div className={styles.gaugeContainer}>
                    <svg width="200" height="120" viewBox="0 0 200 120">
                        {/* Background arc */}
                        <path
                            d="M 20 100 A 80 80 0 0 1 180 100"
                            fill="none"
                            stroke="#1E293B"
                            strokeWidth="20"
                        />
                        {/* Colored zones */}
                        <path
                            d="M 20 100 A 80 80 0 0 1 100 20"
                            fill="none"
                            stroke="#10B981"
                            strokeWidth="20"
                            opacity="0.3"
                        />
                        <path
                            d="M 100 20 A 80 80 0 0 1 160 60"
                            fill="none"
                            stroke="#F59E0B"
                            strokeWidth="20"
                            opacity="0.3"
                        />
                        <path
                            d="M 160 60 A 80 80 0 0 1 180 100"
                            fill="none"
                            stroke="#EF4444"
                            strokeWidth="20"
                            opacity="0.3"
                        />
                        {/* Active arc */}
                        <path
                            d={`M 20 100 A 80 80 0 0 1 ${20 + (160 * (totalExposure / 100))} ${100 - (80 * Math.sin((totalExposure / 100) * Math.PI))}`}
                            fill="none"
                            stroke={status.color}
                            strokeWidth="20"
                            strokeLinecap="round"
                            className={styles.gaugeArc}
                        />
                        {/* Needle */}
                        <line
                            x1="100"
                            y1="100"
                            x2={100 + 70 * Math.cos((totalExposure / 100) * Math.PI - Math.PI)}
                            y2={100 + 70 * Math.sin((totalExposure / 100) * Math.PI - Math.PI)}
                            stroke={status.color}
                            strokeWidth="3"
                            strokeLinecap="round"
                        />
                        <circle cx="100" cy="100" r="8" fill={status.color} />
                    </svg>
                    <div className={styles.gaugeCenter}>
                        <span className={styles.gaugeValue}>{totalExposure}%</span>
                        <span className={styles.gaugeLabel} style={{ color: status.color }}>{status.label}</span>
                    </div>
                </div>
                <div className={styles.gaugeLegend}>
                    <div className={styles.gaugeLegendItem}>
                        <span className={styles.legendDot} style={{ background: '#10B981' }}></span>
                        <span>0-60%</span>
                    </div>
                    <div className={styles.gaugeLegendItem}>
                        <span className={styles.legendDot} style={{ background: '#F59E0B' }}></span>
                        <span>60-80%</span>
                    </div>
                    <div className={styles.gaugeLegendItem}>
                        <span className={styles.legendDot} style={{ background: '#EF4444' }}></span>
                        <span>80%+</span>
                    </div>
                </div>
            </div>

            {/* Exposure by Asset */}
            <div className={styles.exposureByAsset}>
                <h4 className={styles.sectionLabel}>Exposure by Asset Class</h4>
                <div className={styles.assetList}>
                    {exposureByAsset.map(asset => (
                        <div key={asset.name} className={styles.assetItem}>
                            <div className={styles.assetHeader}>
                                <span className={styles.assetName}>{asset.name}</span>
                                <span className={styles.assetExposure}>{formatCurrency(asset.exposure)}</span>
                            </div>
                            <div className={styles.assetBar}>
                                <div
                                    className={styles.assetBarFill}
                                    style={{
                                        width: `${asset.percentage}%`,
                                        background: getRiskColor(asset.risk)
                                    }}
                                />
                            </div>
                            <div className={styles.assetFooter}>
                                <span className={styles.assetPercentage}>{asset.percentage}%</span>
                                <span className={styles.assetRisk} style={{ color: getRiskColor(asset.risk) }}>
                                    {asset.risk.toUpperCase()}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Risky Positions */}
            <div className={styles.riskyPositions}>
                <h4 className={styles.sectionLabel}>High Risk Positions</h4>
                <div className={styles.positionsList}>
                    {riskyPositions.slice(0, 5).map(position => (
                        <div key={position.client} className={styles.positionItem}>
                            <div className={styles.positionClient}>
                                <span className={styles.riskIndicator} style={{ background: getRiskColor(position.risk) }} />
                                {position.client}
                            </div>
                            <div className={styles.positionDetails}>
                                <span className={styles.positionInstrument}>{position.instrument}</span>
                                <span className={styles.positionExposure}>{formatCurrency(position.exposure)}</span>
                            </div>
                            <div className={styles.marginBar}>
                                <div
                                    className={styles.marginBarFill}
                                    style={{
                                        width: `${position.margin}%`,
                                        background: position.margin >= 85 ? '#EF4444' : '#F59E0B'
                                    }}
                                />
                            </div>
                            <span className={styles.marginValue}>{position.margin}%</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Quick Stats */}
            <div className={styles.riskStats}>
                <div className={styles.riskStatItem}>
                    <span className={styles.riskStatLabel}>Total Margin Used</span>
                    <span className={styles.riskStatValue}>$9.35M</span>
                </div>
                <div className={styles.riskStatItem}>
                    <span className={styles.riskStatLabel}>Available Margin</span>
                    <span className={styles.riskStatValue}>$4.42M</span>
                </div>
            </div>
        </div>
    );
}
