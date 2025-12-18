'use client';

import { useState } from 'react';
import styles from './ROICalculator.module.css';

export default function ROICalculator() {
    const [activeUsers, setActiveUsers] = useState(50);

    // Entry Plan pricing tiers (10-149 accounts) - $700 base fee (+20%)
    const entryPricingTiers: { [key: string]: number } = {
        '10': 57.85, '20': 56.32, '30': 54.82, '40': 53.38,
        '50': 51.98, '60': 50.64, '70': 49.33, '80': 48.08,
        '90': 46.88, '100': 45.72, '110': 44.62, '120': 43.55,
        '130': 42.54, '140': 41.57,
    };

    // Standard Plan pricing tiers (150-500 accounts) - $1,300 base fee (+20%)
    const standardPricingTiers: { [key: string]: number } = {
        '150': 29.76, '160': 29.23, '170': 28.70, '180': 28.16,
        '190': 27.64, '200': 27.11, '210': 26.57, '220': 26.04,
        '230': 25.51, '240': 24.97, '250': 24.44, '260': 23.92,
        '270': 23.39, '280': 22.85, '290': 22.32, '300': 21.79,
        '310': 21.26, '320': 20.72, '330': 20.20, '340': 19.67,
        '350': 19.13, '360': 18.60, '370': 18.07, '380': 17.54,
        '390': 17.00, '400': 16.48, '410': 15.95, '420': 15.41,
        '430': 14.88, '440': 14.35, '450': 13.82, '460': 13.28,
        '470': 12.76, '480': 12.23, '490': 11.69,
    };

    // Get the tier key for a given account count
    const getTierKey = (accounts: number): string => {
        const tierStart = Math.floor(accounts / 10) * 10;
        return tierStart.toString();
    };

    // Determine if using Entry or Standard plan
    const isStandardPlan = activeUsers >= 150;
    const baseFee = isStandardPlan ? 1300 : 700;

    // Get effective rate per account based on plan and tier
    const getEffectiveRate = (accounts: number): number => {
        const tierKey = getTierKey(accounts);
        if (accounts >= 150) {
            return standardPricingTiers[tierKey] || standardPricingTiers['490'];
        }
        return entryPricingTiers[tierKey] || entryPricingTiers['140'];
    };

    const effectiveRate = getEffectiveRate(activeUsers);
    const monthlyTotal = activeUsers * effectiveRate;
    const perUserCost = (monthlyTotal - baseFee) / activeUsers;

    const traditional = {
        setupFee: 10000,
        monthlyBase: 5000,
        perUserCost: 100,
    };

    const traditionalTotal = traditional.setupFee + (traditional.monthlyBase + (activeUsers * traditional.perUserCost)) * 12;
    const fxtrustTotal = monthlyTotal * 12;
    const savings = traditionalTotal - fxtrustTotal;
    const savingsPercent = ((savings / traditionalTotal) * 100).toFixed(0);

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <div className={styles.badge}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                        </svg>
                        <span>THE "PAINFUL TRUTH" CALCULATOR</span>
                    </div>
                    <h2 className={styles.headline}>
                        How Much Are You Overpaying Right Now?
                    </h2>
                    <p className={styles.subtext}>
                        Move the slider. Watch your current vendor's "competitive pricing" suddenly look less competitive. We'll wait while you process this. <em>(Spoiler: It's probably enough to fund that boat you keep dreaming about.)</em>
                    </p>
                </div>

                <div className={styles.calculator}>
                    <div className={styles.inputSection}>
                        <label className={styles.inputLabel}>
                            How many traders are you overpaying for?
                        </label>
                        <div className={styles.sliderContainer}>
                            <input
                                type="range"
                                min="10"
                                max="500"
                                step="10"
                                value={activeUsers}
                                onChange={(e) => setActiveUsers(Number(e.target.value))}
                                className={styles.slider}
                            />
                            <div className={styles.sliderValue}>{activeUsers} traders</div>
                        </div>
                    </div>

                    <div className={styles.comparison}>
                        <div className={styles.providerCard}>
                            <div className={styles.providerBadge + ' ' + styles.traditional}>(You Know Who)</div>
                            <div className={styles.breakdown}>
                                <div className={styles.breakdownItem}>
                                    <span>Setup Fee</span>
                                    <span>${traditional.setupFee.toLocaleString()}</span>
                                </div>
                                <div className={styles.breakdownItem}>
                                    <span>Monthly Base</span>
                                    <span>${traditional.monthlyBase.toLocaleString()}/mo</span>
                                </div>
                                <div className={styles.breakdownItem}>
                                    <span>Per User Cost</span>
                                    <span>${traditional.perUserCost}/user</span>
                                </div>
                            </div>
                            <div className={styles.total}>
                                <span>First Year Total</span>
                                <span className={styles.totalValue}>${traditionalTotal.toLocaleString()}</span>
                            </div>
                        </div>

                        <div className={styles.vs}>VS</div>

                        <div className={styles.providerCard + ' ' + styles.fxtrust}>
                            <div className={styles.providerBadge + ' ' + styles.fxtrustBadge}>FXTrusts</div>
                            <div className={styles.savingsPill}>Save {savingsPercent}%</div>
                            <div className={styles.breakdown}>
                                <div className={styles.breakdownItem}>
                                    <span>Setup Fee</span>
                                    <span className={styles.free}>$0</span>
                                </div>
                                <div className={styles.breakdownItem}>
                                    <span>Monthly Base</span>
                                    <span>${baseFee.toLocaleString()}/mo</span>
                                </div>
                                <div className={styles.breakdownItem}>
                                    <span>Per Active User</span>
                                    <span>${effectiveRate.toFixed(2)}/user</span>
                                </div>
                            </div>
                            <div className={styles.total}>
                                <span>First Year Total</span>
                                <span className={styles.totalValue + ' ' + styles.green}>${fxtrustTotal.toLocaleString()}</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.savingsCard}>
                        <div className={styles.savingsIcon}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                            </svg>
                        </div>
                        <div className={styles.savingsContent}>
                            <div className={styles.savingsLabel}>Money You're Literally Throwing Away</div>
                            <div className={styles.savingsAmount}>${savings.toLocaleString()}</div>
                            <div className={styles.savingsSubtext}>That's {savingsPercent}% you could've spent on literally anything else</div>
                        </div>
                        <button className={styles.ctaButton}>
                            Stop the Bleeding →
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
