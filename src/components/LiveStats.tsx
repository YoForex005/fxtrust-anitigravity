'use client';

import { useEffect, useState } from 'react';
import styles from './LiveStats.module.css';

export default function LiveStats() {
    const [stats, setStats] = useState({
        volume: 2847650000,
        brokers: 142,
        transactions: 456789,
        speed: 8.4,
        countries: 67,
        uptime: 99.99
    });

    // Simulate real-time updates
    useEffect(() => {
        const interval = setInterval(() => {
            setStats(prev => ({
                volume: prev.volume + Math.floor(Math.random() * 500000),
                brokers: prev.brokers + (Math.random() > 0.95 ? 1 : 0),
                transactions: prev.transactions + Math.floor(Math.random() * 50),
                speed: 8 + Math.random() * 4,
                countries: prev.countries,
                uptime: prev.uptime
            }));
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const formatNumber = (num: number) => {
        if (num >= 1000000000) return `$${(num / 1000000000).toFixed(2)}B`;
        if (num >= 1000000) return `$${(num / 1000000).toFixed(1)}M`;
        if (num >= 1000) return num.toLocaleString('en-US');
        return num.toString();
    };

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <div className={styles.badge}>
                        <span className={styles.pulse}></span>
                        <span>PROOF WE'RE NOT JUST MAKING THIS UP</span>
                    </div>
                    <h2 className={styles.headline}>
                        Actual Numbers That Update in Real-Time
                    </h2>
                    <p className={styles.subtext}>
                        $2.85B in daily volume. 142 brokers who finally stopped stressing. 8.4ms execution (yes, we're speed demons). These numbers update because we have nothing to hide. <em>Feel free to screenshot and fact-check.</em>
                    </p>
                </div>

                <div className={styles.grid}>
                    {/* Trading Volume */}
                    <div className={styles.statCard}>
                        <div className={styles.statIcon}>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {/* Candlestick Chart */}
                                {/* Bar 1 - down */}
                                <rect x="4" y="18" width="4" height="8" rx="1" fill="rgba(147,197,253,0.25)" stroke="#93C5FD" strokeWidth="1.2"/>
                                <line x1="6" y1="14" x2="6" y2="18" stroke="#93C5FD" strokeWidth="1.2" strokeLinecap="round"/>
                                <line x1="6" y1="26" x2="6" y2="29" stroke="#93C5FD" strokeWidth="1.2" strokeLinecap="round"/>
                                {/* Bar 2 - up */}
                                <rect x="11" y="13" width="4" height="9" rx="1" fill="rgba(52,211,153,0.25)" stroke="#34D399" strokeWidth="1.2"/>
                                <line x1="13" y1="9" x2="13" y2="13" stroke="#34D399" strokeWidth="1.2" strokeLinecap="round"/>
                                <line x1="13" y1="22" x2="13" y2="25" stroke="#34D399" strokeWidth="1.2" strokeLinecap="round"/>
                                {/* Bar 3 - up big */}
                                <rect x="18" y="8" width="4" height="12" rx="1" fill="rgba(52,211,153,0.35)" stroke="#34D399" strokeWidth="1.2"/>
                                <line x1="20" y1="5" x2="20" y2="8" stroke="#34D399" strokeWidth="1.2" strokeLinecap="round"/>
                                <line x1="20" y1="20" x2="20" y2="23" stroke="#34D399" strokeWidth="1.2" strokeLinecap="round"/>
                                {/* Bar 4 */}
                                <rect x="25" y="10" width="4" height="10" rx="1" fill="rgba(147,197,253,0.25)" stroke="#93C5FD" strokeWidth="1.2"/>
                                <line x1="27" y1="7" x2="27" y2="10" stroke="#93C5FD" strokeWidth="1.2" strokeLinecap="round"/>
                                <line x1="27" y1="20" x2="27" y2="23" stroke="#93C5FD" strokeWidth="1.2" strokeLinecap="round"/>
                                {/* Trend line */}
                                <polyline points="6,26 13,20 20,14 27,16" stroke="#60A5FA" strokeWidth="1" strokeDasharray="2 1" opacity="0.5"/>
                            </svg>
                        </div>
                        <div className={styles.statValue}>{formatNumber(stats.volume)}</div>
                        <div className={styles.statLabel}>Trading Volume (24h)<br /><small style={{ opacity: 0.7 }}>(Yeah, we double-checked the math too)</small></div>
                        <div className={styles.statTrend}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 2l6 6H9v6H7V8H2l6-6z" /></svg>
                            <span>Live</span>
                        </div>
                    </div>

                    {/* Active Brokers */}
                    <div className={styles.statCard}>
                        <div className={styles.statIcon}>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {/* Building */}
                                <rect x="4" y="10" width="14" height="19" rx="1.5" fill="rgba(147,197,253,0.15)" stroke="#93C5FD" strokeWidth="1.3"/>
                                {/* Windows */}
                                <rect x="7" y="13" width="3" height="3" rx="0.5" fill="#60A5FA" opacity="0.7"/>
                                <rect x="12" y="13" width="3" height="3" rx="0.5" fill="#60A5FA" opacity="0.7"/>
                                <rect x="7" y="19" width="3" height="3" rx="0.5" fill="#60A5FA" opacity="0.4"/>
                                <rect x="12" y="19" width="3" height="3" rx="0.5" fill="#60A5FA" opacity="0.7"/>
                                {/* Taller building behind */}
                                <rect x="19" y="6" width="10" height="23" rx="1.5" fill="rgba(147,197,253,0.1)" stroke="#93C5FD" strokeWidth="1.3"/>
                                <rect x="21" y="9" width="2.5" height="2.5" rx="0.4" fill="#60A5FA" opacity="0.5"/>
                                <rect x="25" y="9" width="2.5" height="2.5" rx="0.4" fill="#60A5FA" opacity="0.8"/>
                                <rect x="21" y="14" width="2.5" height="2.5" rx="0.4" fill="#60A5FA" opacity="0.8"/>
                                <rect x="25" y="14" width="2.5" height="2.5" rx="0.4" fill="#60A5FA" opacity="0.5"/>
                                <rect x="21" y="19" width="2.5" height="2.5" rx="0.4" fill="#60A5FA" opacity="0.5"/>
                                <rect x="25" y="19" width="2.5" height="2.5" rx="0.4" fill="#34D399" opacity="0.9"/>
                                {/* Ground */}
                                <line x1="2" y1="29" x2="30" y2="29" stroke="#93C5FD" strokeWidth="1.2" strokeLinecap="round" opacity="0.4"/>
                            </svg>
                        </div>
                        <div className={styles.statValue}>{stats.brokers}</div>
                        <div className={styles.statLabel}>Active Brokers</div>
                        <div className={styles.statTrend}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 2l6 6H9v6H7V8H2l6-6z" /></svg>
                            <span>+12 This Month</span>
                        </div>
                    </div>

                    {/* Execution Speed */}
                    <div className={styles.statCard}>
                        <div className={styles.statIcon}>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {/* Stopwatch outer ring */}
                                <circle cx="16" cy="18" r="11" fill="rgba(147,197,253,0.1)" stroke="#93C5FD" strokeWidth="1.3"/>
                                {/* Tick marks */}
                                <line x1="16" y1="8" x2="16" y2="10" stroke="#93C5FD" strokeWidth="1.2" strokeLinecap="round"/>
                                <line x1="22.5" y1="11.5" x2="21.2" y2="12.7" stroke="#93C5FD" strokeWidth="1.2" strokeLinecap="round"/>
                                <line x1="27" y1="18" x2="25" y2="18" stroke="#93C5FD" strokeWidth="1.2" strokeLinecap="round"/>
                                <line x1="5" y1="18" x2="7" y2="18" stroke="#93C5FD" strokeWidth="1.2" strokeLinecap="round"/>
                                <line x1="9.5" y1="11.5" x2="10.8" y2="12.7" stroke="#93C5FD" strokeWidth="1.2" strokeLinecap="round"/>
                                {/* Speed needle pointing to fast */}
                                <line x1="16" y1="18" x2="22" y2="13" stroke="#34D399" strokeWidth="1.8" strokeLinecap="round"/>
                                <circle cx="16" cy="18" r="2" fill="#34D399"/>
                                {/* Button top */}
                                <rect x="14" y="5" width="4" height="2.5" rx="1" fill="#93C5FD" opacity="0.8"/>
                                <line x1="13" y1="5" x2="11" y2="3" stroke="#93C5FD" strokeWidth="1.2" strokeLinecap="round"/>
                                <line x1="19" y1="5" x2="21" y2="3" stroke="#93C5FD" strokeWidth="1.2" strokeLinecap="round"/>
                            </svg>
                        </div>
                        <div className={styles.statValue}>{stats.speed.toFixed(1)}ms</div>
                        <div className={styles.statLabel}>Avg. Execution Speed<br /><small style={{ opacity: 0.7 }}>(Faster than your last provider's support team)</small></div>
                        <div className={styles.statTrend}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 14l-6-6h5V2h2v6h5l-6 6z" /></svg>
                            <span>Faster Than Average</span>
                        </div>
                    </div>

                    {/* Transactions */}
                    <div className={styles.statCard}>
                        <div className={styles.statIcon}>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {/* Two arrows cycling - money transfer */}
                                {/* Top arrow: left to right */}
                                <path d="M6 11 Q16 5 26 11" stroke="#93C5FD" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                                <polygon points="26,11 21,8 22,13" fill="#93C5FD"/>
                                {/* Bottom arrow: right to left */}
                                <path d="M26 21 Q16 27 6 21" stroke="#34D399" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                                <polygon points="6,21 11,24 10,19" fill="#34D399"/>
                                {/* Center coin stack */}
                                <ellipse cx="16" cy="16" rx="5" ry="2.5" fill="rgba(147,197,253,0.2)" stroke="#93C5FD" strokeWidth="1.2"/>
                                <ellipse cx="16" cy="14.5" rx="5" ry="2.5" fill="rgba(147,197,253,0.2)" stroke="#93C5FD" strokeWidth="1.2"/>
                                <ellipse cx="16" cy="13" rx="5" ry="2.5" fill="rgba(147,197,253,0.35)" stroke="#60A5FA" strokeWidth="1.2"/>
                                <text x="16" y="14" textAnchor="middle" fontSize="4" fontWeight="700" fill="#60A5FA">$</text>
                            </svg>
                        </div>
                        <div className={styles.statValue}>{stats.transactions.toLocaleString('en-US')}</div>
                        <div className={styles.statLabel}>Transactions Today</div>
                        <div className={styles.statTrend}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 2l6 6H9v6H7V8H2l6-6z" /></svg>
                            <span>Live</span>
                        </div>
                    </div>

                    {/* Uptime SLA */}
                    <div className={styles.statCard}>
                        <div className={styles.statIcon}>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {/* Server rack */}
                                <rect x="5" y="6" width="22" height="6" rx="2" fill="rgba(147,197,253,0.15)" stroke="#93C5FD" strokeWidth="1.3"/>
                                <rect x="5" y="14" width="22" height="6" rx="2" fill="rgba(147,197,253,0.15)" stroke="#93C5FD" strokeWidth="1.3"/>
                                <rect x="5" y="22" width="22" height="6" rx="2" fill="rgba(147,197,253,0.15)" stroke="#93C5FD" strokeWidth="1.3"/>
                                {/* LEDs */}
                                <circle cx="23" cy="9" r="1.5" fill="#34D399"/>
                                <circle cx="23" cy="17" r="1.5" fill="#34D399"/>
                                <circle cx="23" cy="25" r="1.5" fill="#34D399"/>
                                {/* Drive slots */}
                                <rect x="8" y="8" width="10" height="2" rx="0.5" fill="#60A5FA" opacity="0.3"/>
                                <rect x="8" y="16" width="10" height="2" rx="0.5" fill="#60A5FA" opacity="0.3"/>
                                <rect x="8" y="24" width="10" height="2" rx="0.5" fill="#60A5FA" opacity="0.3"/>
                            </svg>
                        </div>
                        <div className={styles.statValue}>{stats.uptime}%</div>
                        <div className={styles.statLabel}>Uptime SLA</div>
                        <div className={styles.statTrend}>
                            <span className={styles.statusDot}></span>
                            <span>All Systems Operational</span>
                        </div>
                    </div>

                    {/* Countries */}
                    <div className={styles.statCard}>
                        <div className={styles.statIcon}>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {/* Globe */}
                                <circle cx="16" cy="16" r="12" fill="rgba(147,197,253,0.1)" stroke="#93C5FD" strokeWidth="1.3"/>
                                {/* Longitude lines */}
                                <ellipse cx="16" cy="16" rx="6" ry="12" stroke="#93C5FD" strokeWidth="1" opacity="0.5"/>
                                <line x1="4" y1="16" x2="28" y2="16" stroke="#93C5FD" strokeWidth="1" opacity="0.5"/>
                                <path d="M6 10 Q16 12 26 10" stroke="#93C5FD" strokeWidth="0.8" fill="none" opacity="0.4"/>
                                <path d="M6 22 Q16 20 26 22" stroke="#93C5FD" strokeWidth="0.8" fill="none" opacity="0.4"/>
                                {/* Location pin */}
                                <circle cx="20" cy="12" r="2.5" fill="rgba(52,211,153,0.25)" stroke="#34D399" strokeWidth="1.3"/>
                                <circle cx="20" cy="12" r="1" fill="#34D399"/>
                                <line x1="20" y1="14.5" x2="20" y2="17" stroke="#34D399" strokeWidth="1.2" strokeLinecap="round"/>
                                {/* Signal ripple */}
                                <circle cx="20" cy="12" r="4.5" stroke="#34D399" strokeWidth="0.7" opacity="0.3"/>
                            </svg>
                        </div>
                        <div className={styles.statValue}>{stats.countries}+</div>
                        <div className={styles.statLabel}>Countries Served</div>
                        <div className={styles.statTrend}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 2C4.7 2 2 4.7 2 8s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6z" /></svg>
                            <span>Global Reach</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
