'use client';

import React from 'react';
import styles from '../demo.module.css';

export default function WorldMap() {
    // Simplified abstract world map representation using dots
    // In a real app, this would be a D3.js or similar library
    const dots = [
        // North America
        { x: 20, y: 30, r: 2, active: true, label: 'USA' },
        { x: 25, y: 35, r: 1.5, active: true, label: 'USA' },
        { x: 15, y: 25, r: 1.5, active: false },
        { x: 22, y: 28, r: 1, active: false },
        // South America
        { x: 28, y: 60, r: 1.5, active: true, label: 'Brazil' },
        { x: 25, y: 65, r: 1, active: false },
        // Europe
        { x: 48, y: 25, r: 2, active: true, label: 'UK' },
        { x: 52, y: 28, r: 1.5, active: true, label: 'Germany' },
        { x: 50, y: 32, r: 1, active: false },
        // Asia
        { x: 70, y: 30, r: 2, active: true, label: 'China' },
        { x: 75, y: 35, r: 1.5, active: true, label: 'Japan' },
        { x: 65, y: 40, r: 1, active: false },
        { x: 68, y: 45, r: 1.5, active: true, label: 'Singapore' },
        // Australia
        { x: 80, y: 70, r: 1.5, active: true, label: 'Australia' },
    ];

    return (
        <div className={styles.mapCard}>
            <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>GLOBAL USER DISTRIBUTION</h3>
                <button className={styles.iconButtonSmall}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                </button>
            </div>

            <div className={styles.mapContainer}>
                <svg viewBox="0 0 100 80" className={styles.worldMapSvg}>
                    {/* Abstract Grid Background */}
                    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.05" />
                    </pattern>
                    <rect width="100" height="80" fill="url(#grid)" />

                    {/* Map Dots */}
                    {dots.map((dot, i) => (
                        <g key={i} className={styles.mapDotGroup}>
                            <circle
                                cx={dot.x}
                                cy={dot.y}
                                r={dot.r}
                                className={`${styles.mapDot} ${dot.active ? styles.mapDotActive : ''}`}
                            />
                            {dot.active && (
                                <>
                                    <circle cx={dot.x} cy={dot.y} r={dot.r * 3} className={styles.mapPulse} />
                                    <text x={dot.x} y={dot.y - 4} className={styles.mapLabel} textAnchor="middle">{dot.label}</text>
                                </>
                            )}
                        </g>
                    ))}
                </svg>

                <div className={styles.mapStats}>
                    <div className={styles.mapStatItem}>
                        <span className={styles.mapStatLabel}>Top Region</span>
                        <span className={styles.mapStatValue}>North America (45%)</span>
                    </div>
                    <div className={styles.mapStatItem}>
                        <span className={styles.mapStatLabel}>Active Sessions</span>
                        <span className={styles.mapStatValue}>1,248</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
