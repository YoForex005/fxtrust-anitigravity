'use client';

import { useState } from 'react';
import styles from '../demo.module.css';
import { demoTransactions, Transaction } from '../data/demoData';
import { AreaChart, TrendIndicator } from './Charts';

export default function WalletSection() {
    const [activeSection, setActiveSection] = useState<'today' | 'week' | 'month' | 'total'>('today');
    const [transferAmount, setTransferAmount] = useState('');

    // Mock data for charts
    const depositTrend = [4500, 3200, 5100, 4800, 6200, 5500, 7500];
    const withdrawTrend = [1200, 1500, 900, 2100, 1800, 1100, 2000];
    const commissionTrend = [350, 420, 380, 550, 480, 600, 680];

    const todayTransactions = demoTransactions.filter(t => {
        const date = new Date(t.date);
        const today = new Date();
        return date.toDateString() === today.toDateString();
    });

    const calculateTotal = (type: string, transactions: Transaction[]) => {
        return transactions
            .filter(t => t.type === type && t.status === 'Completed')
            .reduce((sum, t) => sum + t.amount, 0);
    };

    const todayDeposits = calculateTotal('Deposit', todayTransactions);
    const todayWithdrawals = calculateTotal('Withdrawal', todayTransactions);
    const todayCommissions = calculateTotal('IB Commission', todayTransactions);

    const sections = [
        { id: 'today' as const, label: 'TODAY' },
        { id: 'week' as const, label: 'THIS WEEK' },
        { id: 'month' as const, label: 'THIS MONTH' },
        { id: 'total' as const, label: 'ALL TIME' },
    ];

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
        }).format(amount);
    };

    return (
        <div className={styles.walletContainer}>
            <div className={styles.walletCard}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <h3 className={styles.walletTitle} style={{ margin: 0 }}>FINANCIAL OVERVIEW</h3>
                    <button className={styles.iconButtonSmall}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                    </button>
                </div>

                <div className={styles.walletSections}>
                    {sections.map((section) => (
                        <div key={section.id} className={styles.walletSection}>
                            <button
                                className={`${styles.walletSectionHeader} ${activeSection === section.id ? styles.walletSectionActive : ''}`}
                                onClick={() => setActiveSection(section.id)}
                            >
                                <span>{section.label}</span>
                                <span className={styles.chevron}>{activeSection === section.id ? '▼' : '▶'}</span>
                            </button>

                            {activeSection === section.id && section.id === 'today' && (
                                <div className={styles.walletContent}>
                                    <div className={styles.walletItem}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                            <span className={styles.walletLabel}>Total Deposits</span>
                                            <TrendIndicator value={12.5} />
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'flex-end' }}>
                                            <span className={styles.walletValueLarge} style={{ color: '#0F172A' }}>{formatCurrency(todayDeposits)}</span>
                                            <div style={{ width: '80px' }}>
                                                <AreaChart data={depositTrend} color="#10B981" height={30} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.walletItem}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                            <span className={styles.walletLabel}>Total Withdrawals</span>
                                            <TrendIndicator value={-2.4} />
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'flex-end' }}>
                                            <span className={styles.walletValueLarge} style={{ color: '#0F172A' }}>{formatCurrency(todayWithdrawals)}</span>
                                            <div style={{ width: '80px' }}>
                                                <AreaChart data={withdrawTrend} color="#EF4444" height={30} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.walletItem}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                            <span className={styles.walletLabel}>IB Commissions</span>
                                            <TrendIndicator value={8.1} />
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'flex-end' }}>
                                            <span className={styles.walletValueLarge} style={{ color: '#0F172A' }}>{formatCurrency(todayCommissions)}</span>
                                            <div style={{ width: '80px' }}>
                                                <AreaChart data={commissionTrend} color="#6366F1" height={30} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Quick Transfer Widget */}
            <div className={styles.quickTransferCard}>
                <h3 className={styles.cardTitle}>QUICK TRANSFER</h3>
                <div className={styles.transferForm}>
                    <div className={styles.inputGroup}>
                        <label className={styles.inputLabel}>Amount</label>
                        <div className={styles.amountInputWrapper}>
                            <span className={styles.currencySymbol}>$</span>
                            <input
                                type="text"
                                className={styles.amountInput}
                                placeholder="0.00"
                                value={transferAmount}
                                onChange={(e) => setTransferAmount(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className={styles.transferActions}>
                        <button className={styles.transferButton}>Send Funds</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
