'use client';

import { useState } from 'react';
import styles from '../demo.module.css';

type TimePeriod = 'today' | 'week' | 'month' | 'all';

export default function FinancialOverview() {
    const [selectedPeriod, setSelectedPeriod] = useState<TimePeriod>('today');
    const [amount, setAmount] = useState('');

    const metrics = {
        deposits: { value: 124500, trend: 12.5, direction: 'up' },
        withdrawals: { value: 89200, trend: 2.4, direction: 'down' },
        ibCommissions: { value: 15800, trend: 8.1, direction: 'up' }
    };

    // Generate sparkline points for mini charts
    const generateSparkline = (trend: string) => {
        const points = trend === 'up'
            ? [30, 25, 35, 28, 40, 35, 45, 40, 50]
            : [50, 45, 48, 42, 45, 40, 42, 38, 35];

        return points.map((y, i) => `${i * 12},${60 - y}`).join(' ');
    };

    return (
        <div className={styles.financialOverview}>
            <div className={styles.financialCard}>
                <div className={styles.financialHeader}>
                    <h3 className={styles.financialTitle}>FINANCIAL OVERVIEW</h3>
                    <button className={styles.moreButton} aria-label="More options">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="1"></circle>
                            <circle cx="12" cy="5" r="1"></circle>
                            <circle cx="12" cy="19" r="1"></circle>
                        </svg>
                    </button>
                </div>

                <div className={styles.metricsContainer}>
                    {/* Total Deposits */}
                    <div className={styles.metricRow}>
                        <div className={styles.metricInfo}>
                            <span className={styles.metricLabel}>TOTAL DEPOSITS</span>
                            <div className={styles.metricTrend}>
                                <svg width="12" height="12" viewBox="0 0 12 12" className={styles.trendIconUp}>
                                    <path d="M6 2L6 10M6 2L3 5M6 2L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className={styles.trendValueUp}>12.5%</span>
                            </div>
                        </div>
                        <svg className={styles.sparkline} width="100" height="60" viewBox="0 0 100 60">
                            <polyline
                                points={generateSparkline('up')}
                                fill="none"
                                stroke="rgba(52, 211, 153, 0.8)"
                                strokeWidth="2"
                            />
                        </svg>
                    </div>

                    {/* Total Withdrawals */}
                    <div className={styles.metricRow}>
                        <div className={styles.metricInfo}>
                            <span className={styles.metricLabel}>TOTAL WITHDRAWALS</span>
                            <div className={styles.metricTrend}>
                                <svg width="12" height="12" viewBox="0 0 12 12" className={styles.trendIconDown}>
                                    <path d="M6 10L6 2M6 10L3 7M6 10L9 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className={styles.trendValueDown}>2.4%</span>
                            </div>
                        </div>
                        <svg className={styles.sparkline} width="100" height="60" viewBox="0 0 100 60">
                            <polyline
                                points={generateSparkline('down')}
                                fill="none"
                                stroke="rgba(248, 113, 113, 0.8)"
                                strokeWidth="2"
                            />
                        </svg>
                    </div>

                    {/* IB Commissions */}
                    <div className={styles.metricRow}>
                        <div className={styles.metricInfo}>
                            <span className={styles.metricLabel}>IB COMMISSIONS</span>
                            <div className={styles.metricTrend}>
                                <svg width="12" height="12" viewBox="0 0 12 12" className={styles.trendIconUp}>
                                    <path d="M6 2L6 10M6 2L3 5M6 2L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className={styles.trendValueUp}>8.1%</span>
                            </div>
                        </div>
                        <svg className={styles.sparkline} width="100" height="60" viewBox="0 0 100 60">
                            <polyline
                                points={generateSparkline('up')}
                                fill="none"
                                stroke="rgba(96, 165, 250, 0.8)"
                                strokeWidth="2"
                            />
                        </svg>
                    </div>
                </div>

                {/* Time Period Filters */}
                <div className={styles.periodFilters}>
                    <button
                        className={`${styles.periodButton} ${selectedPeriod === 'today' ? styles.periodButtonActive : ''}`}
                        onClick={() => setSelectedPeriod('today')}
                    >
                        TODAY
                        {selectedPeriod === 'today' && <span className={styles.periodIndicator}>▼</span>}
                    </button>
                    <button
                        className={`${styles.periodButton} ${selectedPeriod === 'week' ? styles.periodButtonActive : ''}`}
                        onClick={() => setSelectedPeriod('week')}
                    >
                        THIS WEEK
                        {selectedPeriod === 'week' && <span className={styles.periodIndicator}>▶</span>}
                    </button>
                    <button
                        className={`${styles.periodButton} ${selectedPeriod === 'month' ? styles.periodButtonActive : ''}`}
                        onClick={() => setSelectedPeriod('month')}
                    >
                        THIS MONTH
                        {selectedPeriod === 'month' && <span className={styles.periodIndicator}>▶</span>}
                    </button>
                    <button
                        className={`${styles.periodButton} ${selectedPeriod === 'all' ? styles.periodButtonActive : ''}`}
                        onClick={() => setSelectedPeriod('all')}
                    >
                        ALL TIME
                        {selectedPeriod === 'all' && <span className={styles.periodIndicator}>▶</span>}
                    </button>
                </div>
            </div>

            {/* Quick Transfer Section */}
            <div className={styles.quickTransferCard}>
                <h4 className={styles.quickTransferTitle}>QUICK TRANSFER</h4>
                <div className={styles.transferForm}>
                    <label className={styles.transferLabel}>Amount</label>
                    <div className={styles.amountInputWrapper}>
                        <span className={styles.currencySymbol}>$</span>
                        <input
                            type="text"
                            placeholder="0.00"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className={styles.transferAmountInput}
                        />
                    </div>
                    <button className={styles.sendFundsButton}>
                        Send Funds
                    </button>
                </div>
            </div>
        </div>
    );
}
