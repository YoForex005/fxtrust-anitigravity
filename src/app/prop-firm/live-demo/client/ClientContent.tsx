'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './client.module.css';

export default function ClientContent() {
    const [lightMode, setLightMode] = useState(true);
    const [payoutEligible, setPayoutEligible] = useState(true);
    const [activePage, setActivePage] = useState('dashboard');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Mock History Data
    const historyData = [
        { id: '12411985396', tradeId: '98421', type: 'Buy', lots: 0.05, symbol: 'XAUUSD', profit: 0.00 },
        { id: '12411985395', tradeId: '98442', type: 'Buy', lots: 0.05, symbol: 'XAUUSD', profit: 0.00 },
        { id: '12411985394', tradeId: '98413', type: 'Sell', lots: 0.10, symbol: 'EURUSD', profit: 12.50 },
        { id: '12411984231', tradeId: '98332', type: 'Buy', lots: 0.01, symbol: 'US30', profit: -4.20 },
        { id: '12411984230', tradeId: '98321', type: 'Buy', lots: 0.05, symbol: 'XAUUSD', profit: 5.60 },
    ];

    return (
        <div className={styles.yopipsApp}>
            <div className={`${styles.overlay} ${isSidebarOpen ? styles.open : ''}`} onClick={() => setIsSidebarOpen(false)}></div>
            {/* Sidebar */}
            <aside className={`${styles.yopipsSidebar} ${isSidebarOpen ? styles.open : ''}`}>
                {/* Logo area */}
                <div className={styles.yopipsLogo}>
                    <Image src="/logo.png" alt="Yo Pips" width={260} height={86} style={{ objectFit: 'contain' }} />
                </div>

                {/* Back Button */}
                <Link href="/" style={{ textDecoration: 'none' }}>
                    <button className={styles.backBtn}>
                        <svg className={styles.backBtnIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        Back To The Homepage
                    </button>
                </Link>

                {/* Main Menu */}
                <div className={styles.menuSection}>
                    <button
                        className={styles.sidebarNewChallengeBtn}
                        onClick={() => setActivePage('new-challenge')}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                        New FX Trusts Challenge
                    </button>
                    <div className={styles.menuLabel}>MAIN MENU</div>
                    <div className={`${styles.menuItem} ${activePage === 'dashboard' ? styles.active : ''}`} onClick={() => setActivePage('dashboard')}>
                        <div className={styles.menuItemLeft}>
                            <svg className={styles.menuItemIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="3" width="7" height="7"></rect>
                                <rect x="14" y="3" width="7" height="7"></rect>
                                <rect x="14" y="14" width="7" height="7"></rect>
                                <rect x="3" y="14" width="7" height="7"></rect>
                            </svg>
                            Accounts Overview
                        </div>
                    </div>
                    <div className={`${styles.menuItem} ${activePage === 'journal' ? styles.active : ''}`} onClick={() => setActivePage('journal')}>
                        <div className={styles.menuItemLeft}>
                            <svg className={styles.menuItemIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                            Trading Journal
                        </div>
                    </div>
                    <div className={`${styles.menuItem} ${activePage === 'profile' ? styles.active : ''}`} onClick={() => setActivePage('profile')}>
                        <div className={styles.menuItemLeft}>
                            <svg className={styles.menuItemIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                            Profile
                        </div>
                    </div>
                    <div className={`${styles.menuItem} ${activePage === 'traders' ? styles.active : ''}`} onClick={() => setActivePage('traders')}>
                        <div className={styles.menuItemLeft}>
                            <svg className={styles.menuItemIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                            Yo Pips Traders
                        </div>
                    </div>
                    <div className={`${styles.menuItem} ${activePage === 'academy' ? styles.active : ''}`} onClick={() => setActivePage('academy')}>
                        <div className={styles.menuItemLeft}>
                            <svg className={styles.menuItemIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 0 1 .665 6.479A11.952 11.952 0 0 0 12 20.055a11.952 11.952 0 0 0-6.824-2.998 12.078 12.078 0 0 1 .665-6.479L12 14z" /><path d="M12 14v7" /></svg>
                            Yo Pips Academy
                        </div>
                    </div>
                    <div className={`${styles.menuItem} ${activePage === 'billing' ? styles.active : ''}`} onClick={() => setActivePage('billing')}>
                        <div className={styles.menuItemLeft}>
                            <svg className={styles.menuItemIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>
                            Billing
                        </div>
                    </div>
                    <div className={`${styles.menuItem} ${activePage === 'leaderboard' ? styles.active : ''}`} onClick={() => setActivePage('leaderboard')}>
                        <div className={styles.menuItemLeft}>
                            <svg className={styles.menuItemIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
                            Leaderboard
                        </div>
                    </div>
                    <div className={`${styles.menuItem} ${activePage === 'certificates' ? styles.active : ''}`} onClick={() => setActivePage('certificates')}>
                        <div className={styles.menuItemLeft}>
                            <svg className={styles.menuItemIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>
                            Certificates
                        </div>
                    </div>
                </div>

                {/* Settings Menu */}
                <div className={styles.menuSection} style={{ marginTop: 'auto' }}>
                    <div className={styles.menuLabel}>SETTINGS</div>
                    <div className={styles.menuItem} style={{ cursor: 'default' }}>
                        <div className={styles.menuItemLeft}>
                            <svg className={styles.menuItemIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
                            Light Mode
                        </div>
                        <div className={`${styles.toggleSwitch} ${lightMode ? styles.active : ''}`} onClick={() => setLightMode(!lightMode)}>
                            <div className={styles.toggleCircle}></div>
                        </div>
                    </div>
                    <div className={styles.menuItem}>
                        <div className={styles.menuItemLeft}>
                            <div style={{ width: 18, height: 18, borderRadius: '50%', backgroundColor: '#06b6d4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <span style={{ fontSize: 10, color: '#0f172a', fontWeight: 'bold' }}>Q</span>
                            </div>
                            Siddhartha
                        </div>
                        <span style={{ fontSize: 10, color: '#06b6d4' }}>PRO</span>
                    </div>
                    <div className={`${styles.menuItem} ${styles.logoutItem}`}>
                        <div className={styles.menuItemLeft}>
                            <svg className={styles.menuItemIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>
                            Logout Application
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Area */}
            <main className={styles.yopipsMain}>
                <button className={styles.mobileMenuBtn} onClick={() => setIsSidebarOpen(true)} style={{ position: 'absolute', top: '15px', right: '15px', zIndex: 900, background: '#ffffff', borderRadius: '4px', border: '1px solid #e2e8f0' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                </button>
                {/* Header */}
                {activePage === 'dashboard' && (
                    <header className={styles.yopipsHeader}>
                        <div className={styles.breadcrumb}>
                            Home / <span>Accounts Overview</span>
                        </div>
                        <div className={styles.userDropdown}>
                            Siddhartha Saw
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                            <div className={styles.userAvatar}>Q</div>
                        </div>
                    </header>
                )}

                {/* Scrollable Content */}
                <div className={styles.yopipsContent}>
                    {activePage === 'dashboard' ? (
                        <>
                            <h1 className={styles.pageTitle}>Active Dashboard</h1>
                            <p className={styles.pageSubtitle}>Welcome Siddhartha, all your trading info stay here.</p>

                            {/* Active Account Card */}
                            <div className={styles.card}>
                                <div className={styles.accountCardHeader}>
                                    <div className={styles.accBadge}>
                                        <span>123456</span>
                                        Yo Pips Challange 5K
                                    </div>
                                    <div className={styles.phDay}>
                                        Phase 1 <div className={`${styles.toggleSwitch} ${styles.active}`}><div className={styles.toggleCircle}></div></div>
                                    </div>
                                </div>

                                <div className={styles.accountCardBody}>
                                    <div className={styles.accBalancesRow}>
                                        <div className={styles.accStatGroup}>
                                            <div className={styles.accLabel}>ACCOUNT SIZE <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: 4, opacity: 0.5, verticalAlign: -2 }}><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg></div>
                                            <div className={styles.accValue}>$5,000.00</div>
                                        </div>
                                        <div style={{ width: 1, backgroundColor: '#e2e8f0', height: 40, alignSelf: 'center' }}></div>
                                        <div className={styles.accStatGroup}>
                                            <div className={styles.accLabel}>STATUS <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: 4, opacity: 0.5, verticalAlign: -2 }}><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg></div>
                                            <div className={styles.accValue}>
                                                <div className={styles.statusDot}></div> Active
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.accTargetBox}>
                                        <div className={styles.accTargetHeader}>
                                            <div style={{ fontSize: 13, color: '#475569' }}>Profit Target</div>
                                            <div style={{ fontSize: 13, color: '#0f172a', fontWeight: 600 }}>1000 Min</div>
                                        </div>
                                        <div className={styles.progressBarContainer}>
                                            <div className={styles.progressBarFill} style={{ width: '80%' }}></div>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#475569' }}>
                                            <span>Current Profit</span>
                                            <span>$800</span>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.accDetailsGrid}>
                                    <div className={styles.detailItem}>
                                        <div className={styles.detailLabel}>Account Id</div>
                                        <div className={styles.detailValue}>1042791...</div>
                                    </div>
                                    <div className={styles.detailItem}>
                                        <div className={styles.detailLabel}>Status</div>
                                        <div className={styles.detailValue}>Challenge...</div>
                                    </div>
                                    <div className={styles.detailItem}>
                                        <div className={styles.detailLabel}>End Date</div>
                                        <div className={styles.detailValue}>Aug 25, 2026</div>
                                    </div>
                                    <div className={styles.detailItem}>
                                        <div className={styles.detailLabel}>Phase</div>
                                        <div className={styles.detailValue}>Phase 1</div>
                                    </div>
                                    <div className={styles.detailItem}>
                                        <div className={styles.detailLabel}>Payout</div>
                                        <div className={styles.detailValue}>
                                            Eligible
                                            <div className={`${styles.toggleSwitch} ${payoutEligible ? styles.active : ''}`} onClick={() => setPayoutEligible(!payoutEligible)}>
                                                <div className={styles.toggleCircle}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.accountCardFooter}>
                                    <button className={styles.btnSecondary}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" /></svg>
                                        Credentials
                                    </button>
                                    <button className={styles.btnSecondary}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>
                                        Account Matrix
                                    </button>
                                    <button className={styles.btnPrimary}>
                                        Buy Evalu'x &gt;
                                    </button>
                                </div>
                            </div>

                            {/* 3 Stats Grid */}
                            <div className={styles.statsGrid}>
                                <div className={styles.statCard}>
                                    <div className={styles.statTitle}>
                                        EQUITY (FLOATING)
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>
                                    </div>
                                    <div className={styles.statValue}>$0.00</div>
                                </div>
                                <div className={styles.statCard}>
                                    <div className={styles.statTitle}>
                                        BALANCE
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" ry="2" /><line x1="2" y1="10" x2="22" y2="10" /></svg>
                                    </div>
                                    <div className={styles.statValue}>$5,000.00</div>
                                </div>
                                <div className={styles.statCard}>
                                    <div className={styles.statTitle}>
                                        PROFIT (TODAY)
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                    </div>
                                    <div className={styles.statValue}>$0.00</div>
                                </div>
                            </div>

                            {/* Drawdown Grid */}
                            <div className={styles.drawdownGrid}>
                                <div className={styles.card} style={{ marginBottom: 0 }}>
                                    <div className={styles.ddHeader}>
                                        <div className={styles.ddTitle}>Daily Loss Limit 5%</div>
                                        <div className={styles.ddLimit}>Max Daily Loss <span style={{ color: '#0f172a' }}>5.0%</span></div>
                                    </div>
                                    <div className={styles.ddBarContainer}>
                                        <div className={styles.ddBarFill} style={{ width: '20%' }}></div>
                                        <div className={styles.ddBarText}>-$250</div>
                                        <div className={styles.ddTargetLimit}>Max Loss $250</div>
                                    </div>
                                </div>
                                <div className={styles.card} style={{ marginBottom: 0 }}>
                                    <div className={styles.ddHeader}>
                                        <div className={styles.ddTitle}>Overall Maximum Loss (10%)</div>
                                        <div className={styles.ddLimit}>Max Loss <span style={{ color: '#0f172a' }}>10.0%</span></div>
                                    </div>
                                    <div className={styles.ddBarContainer}>
                                        <div className={styles.ddBarFill} style={{ width: '40%' }}></div>
                                        <div className={styles.ddBarText}>-$500</div>
                                        <div className={styles.ddTargetLimit}>Max Loss $500</div>
                                    </div>
                                </div>
                            </div>

                            {/* Account History */}
                            <div className={styles.card}>
                                <div className={styles.historyHeader}>
                                    <div>
                                        <h3 className={styles.historyTitle}>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                            Account History
                                        </h3>
                                        <p className={styles.historySubtitle}>Explore all your trading activity</p>
                                    </div>
                                    <div className={styles.historyTabs}>
                                        <button className={`${styles.historyTab} ${styles.active}`}>All</button>
                                        <button className={styles.historyTab}>Phase One</button>
                                        <button className={styles.historyTab}>Phase Two</button>
                                        <button className={styles.historyTab}>Funded</button>
                                        <button className={styles.historyTab}>Payout</button>
                                    </div>
                                </div>

                                <div className={styles.tableContainer}>
                                    <table className={styles.historyTable}>
                                        <tbody>
                                            {historyData.map((trade, i) => (
                                                <tr key={i}>
                                                    <td>
                                                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                                            <span style={{ color: '#06b6d4', backgroundColor: 'rgba(6, 182, 212,0.1)', padding: '4px 8px', borderRadius: 4, fontSize: 12, fontWeight: 600 }}>FX TRUSTS</span>
                                                            <span style={{ color: '#475569', fontSize: 13 }}>Ticket ID: {trade.id}</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                                                            Trade #: {trade.tradeId}
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <span className={`${styles.tradeType} ${trade.type === 'Buy' ? styles.buyType : styles.sellType}`}>{trade.type}</span>
                                                    </td>
                                                    <td>{trade.lots} Lots</td>
                                                    <td><span className={styles.tradeSymbol}>{trade.symbol}</span></td>
                                                    <td>
                                                        <span className={trade.profit >= 0 ? styles.profitPos : styles.profitNeg}>
                                                            {trade.profit > 0 ? '+' : ''}${trade.profit.toFixed(2)}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <div className={styles.rowAction}>
                                                            <div className={`${styles.toggleSwitch} ${styles.active}`}>
                                                                <div className={styles.toggleCircle}></div>
                                                            </div>
                                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2"><circle cx="12" cy="12" r="1" /><circle cx="12" cy="5" r="1" /><circle cx="12" cy="19" r="1" /></svg>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                            {/* Repeat rows to simulate full look */}
                                            {historyData.map((trade, i) => (
                                                <tr key={'copy' + i}>
                                                    <td>
                                                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                                            <span style={{ color: '#06b6d4', backgroundColor: 'rgba(6, 182, 212,0.1)', padding: '4px 8px', borderRadius: 4, fontSize: 12, fontWeight: 600 }}>FX TRUSTS</span>
                                                            <span style={{ color: '#475569', fontSize: 13 }}>Ticket ID: {trade.id}</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                                                            Trade #: {trade.tradeId}
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <span className={`${styles.tradeType} ${trade.type === 'Buy' ? styles.buyType : styles.sellType}`}>{trade.type}</span>
                                                    </td>
                                                    <td>{trade.lots} Lots</td>
                                                    <td><span className={styles.tradeSymbol}>{trade.symbol}</span></td>
                                                    <td>
                                                        <span className={trade.profit >= 0 ? styles.profitPos : styles.profitNeg}>
                                                            {trade.profit > 0 ? '+' : ''}${trade.profit.toFixed(2)}
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <div className={styles.rowAction}>
                                                            <div className={`${styles.toggleSwitch} ${styles.active}`}>
                                                                <div className={styles.toggleCircle}></div>
                                                            </div>
                                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#475569" strokeWidth="2"><circle cx="12" cy="12" r="1" /><circle cx="12" cy="5" r="1" /><circle cx="12" cy="19" r="1" /></svg>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <div style={{ textAlign: 'center', marginTop: 24 }}>
                                        <button style={{ background: 'transparent', border: 'none', color: '#475569', cursor: 'pointer', fontSize: 14 }}>
                                            No more records found.
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : activePage === 'profile' ? (
                        <>
                            <div className={styles.breadcrumb} style={{ marginBottom: 24 }}>
                                Dashboard / <span>Profile</span>
                            </div>

                            <div className={styles.profileHeader}>
                                <div>
                                    <h1 className={styles.profileTitle}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                                        Hello, Siddhartha
                                    </h1>
                                </div>
                                <div className={styles.profileActions}>
                                    <button className={styles.btnProfile}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" /></svg>
                                        Edit Profile
                                    </button>
                                    <button className={styles.btnProfile}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.59-9.27l-5.46 5.46" /></svg>
                                        Refresh
                                    </button>
                                </div>
                            </div>

                            <div className={styles.profileTabs}>
                                <button className={`${styles.profileTab} ${styles.active}`}>Personal Info</button>
                                <button className={styles.profileTab}>Security & Login</button>
                                <button className={styles.profileTab}>Activity Log</button>
                            </div>

                            <div className={styles.profileGrid}>
                                <div className={styles.profileCol}>
                                    {/* Basic Information Card */}
                                    <div className={styles.profileCard}>
                                        <div className={styles.profileCardHeader}>
                                            <div className={styles.profileCardTitle}>Basic Information</div>
                                            <div className={styles.profileIdBadge}>ID: 8c5e5974...</div>
                                        </div>
                                        <div className={styles.infoList}>
                                            <div className={styles.infoRow}>
                                                <div className={styles.infoLabel}>First Name</div>
                                                <div className={styles.infoValue}>Siddhartha</div>
                                            </div>
                                            <div className={styles.infoRow}>
                                                <div className={styles.infoLabel}>Last Name</div>
                                                <div className={styles.infoValue}>Test</div>
                                            </div>
                                            <div className={styles.infoRow}>
                                                <div className={styles.infoLabel}>Status</div>
                                                <div className={styles.infoValue}>
                                                    <span className={styles.statusBadge}>
                                                        <span className={styles.statusDotSmall}></span> Active
                                                    </span>
                                                </div>
                                            </div>
                                            <div className={styles.infoRow}>
                                                <div className={styles.infoLabel}>Member Since</div>
                                                <div className={styles.infoValue}>Feb 2026</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Contact & Location Card */}
                                    <div className={styles.profileCard}>
                                        <div className={styles.profileCardHeader}>
                                            <div className={styles.profileCardTitle}>Contact & Location</div>
                                        </div>
                                        <div className={styles.infoList}>
                                            <div className={styles.infoRow}>
                                                <div className={styles.infoLabel}>
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                                    Email
                                                </div>
                                                <div className={styles.infoValue}>sawsiddhartha@gmail.com</div>
                                            </div>
                                            <div className={styles.infoRow}>
                                                <div className={styles.infoLabel}>
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                                    Phone
                                                </div>
                                                <div className={styles.infoValue}>Not set</div>
                                            </div>
                                            <div className={styles.infoRow}>
                                                <div className={styles.infoLabel}>
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                                    Country
                                                </div>
                                                <div className={styles.infoValue}>Not set</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.profileCol}>
                                    {/* Account Summary Card */}
                                    <div className={styles.profileCard}>
                                        <div className={styles.profileCardHeader}>
                                            <div className={styles.profileCardTitle}>Account Summary</div>
                                        </div>
                                        <div className={styles.infoList}>
                                            <div className={styles.infoRow}>
                                                <div className={styles.infoLabel}>Account Status</div>
                                                <div className={styles.infoValue}>
                                                    <span className={styles.statusBadge} style={{ backgroundColor: '#1f6f50', color: '#0f172a', borderRadius: '4px' }}>Active</span>
                                                </div>
                                            </div>
                                            <div className={styles.infoRow}>
                                                <div className={styles.infoLabel}>Yo Pips Points</div>
                                                <div className={styles.infoValue}><span className={styles.pointsValue}>0</span></div>
                                            </div>
                                            <div className={styles.infoRow}>
                                                <div className={styles.infoLabel}>Connected Accounts</div>
                                                <div className={styles.infoValue}><span className={styles.connectedValue}>28</span></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Need Help Card */}
                                    <div className={styles.profileCard}>
                                        <div className={styles.profileCardHeader} style={{ marginBottom: 16 }}>
                                            <div className={styles.profileCardTitle}>Need Help?</div>
                                        </div>
                                        <p className={styles.helpText}>
                                            Contact support for sensitive account changes.
                                        </p>
                                        <a href="#" className={styles.helpLink}>
                                            Contact Support
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : activePage === 'billing' ? (
                        <>
                            <div className={styles.breadcrumb} style={{ marginBottom: 24 }}>
                                Dashboard / <span>Billing & Payouts</span>
                            </div>

                            <div className={styles.profileHeader}>
                                <div>
                                    <h1 className={styles.profileTitle}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>
                                        Billing & Payouts
                                    </h1>
                                </div>
                                <div className={styles.profileActions}>
                                    <button className={styles.btnProfile}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.59-9.27l-5.46 5.46" /></svg>
                                        Refresh
                                    </button>
                                    <button className={styles.btnProfile}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" /></svg>
                                        Export
                                    </button>
                                    <button className={styles.btnProfile}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                        Support
                                    </button>
                                </div>
                            </div>

                            <div className={styles.profileTabs}>
                                <button className={`${styles.profileTab} ${styles.active}`}>Overview</button>
                                <button className={styles.profileTab}>Transaction History</button>
                                <button className={styles.profileTab}>Settings</button>
                            </div>

                            <div className={styles.billingGrid}>
                                <div className={styles.billingCol}>
                                    {/* Total Payouts Chart */}
                                    <div className={styles.profileCard}>
                                        <div className={styles.profileCardHeader} style={{ marginBottom: 0 }}>
                                            <div>
                                                <div className={styles.profileCardTitle}>Total Payouts</div>
                                                <div className={styles.totalPayoutSub}>Cumulative earnings over time</div>
                                            </div>
                                            <button className={styles.btnSmall}>
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" /></svg>
                                                Tax Documents
                                            </button>
                                        </div>

                                        <div className={styles.chartContainer}>
                                            <div className={styles.chartRow}>
                                                <div className={styles.chartLabel}>$4</div>
                                                <div className={styles.chartLine}></div>
                                            </div>
                                            <div className={styles.chartRow}>
                                                <div className={styles.chartLabel}>$3</div>
                                                <div className={styles.chartLine}></div>
                                            </div>
                                            <div className={styles.chartRow}>
                                                <div className={styles.chartLabel}>$2</div>
                                                <div className={styles.chartLine}></div>
                                            </div>
                                            <div className={styles.chartRow}>
                                                <div className={styles.chartLabel}>$1</div>
                                                <div className={styles.chartLine}></div>
                                            </div>
                                            <div className={styles.chartRow}>
                                                <div className={styles.chartLabel}>$0</div>
                                                <div className={styles.chartLine}>
                                                    <div className={styles.chartDataLine}></div>
                                                </div>
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: 32, marginTop: 8 }}>
                                                <div className={styles.chartLabel} style={{ textAlign: 'left', width: 'auto' }}>Start</div>
                                                <div className={styles.chartLabel} style={{ textAlign: 'right', width: 'auto' }}>Now</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Payment Methods */}
                                    <div className={styles.profileCard}>
                                        <div className={styles.profileCardHeader}>
                                            <div className={styles.profileCardTitle}>Payment Methods</div>
                                            <button className={styles.btnSmall}>+ Add</button>
                                        </div>
                                        <div>
                                            <div className={styles.methodItem}>
                                                <div className={styles.methodLeft}>
                                                    <div className={styles.methodIcon}>
                                                        <svg width="24" height="16" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>
                                                    </div>
                                                    <div>
                                                        <div className={styles.methodTitle}>
                                                            Visa •••• 4242 <span className={styles.badgeDefault}>DEFAULT</span>
                                                        </div>
                                                        <div className={styles.methodSub}>Expires 12/28</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={styles.methodItem}>
                                                <div className={styles.methodLeft}>
                                                    <div className={styles.methodIcon}>
                                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></svg>
                                                    </div>
                                                    <div>
                                                        <div className={styles.methodTitle}>USDT Wallet</div>
                                                        <div className={styles.methodSub}>0x123...abc</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.billingCol}>
                                    {/* Wallet Balance */}
                                    <div className={styles.profileCard}>
                                        <div className={styles.walletHeader}>
                                            <div className={styles.walletTitle}>Wallet Balance</div>
                                        </div>
                                        <div>
                                            <div className={styles.walletItem}>
                                                <div className={styles.walletLabel}>Available:</div>
                                                <div className={styles.walletValue}>$0.00</div>
                                            </div>
                                            <div className={styles.walletItem}>
                                                <div className={styles.walletLabel}>Pending:</div>
                                                <div className={styles.walletValue}>$0.00</div>
                                            </div>
                                            <div className={styles.walletItem}>
                                                <div className={styles.walletLabel}>Min Payout:</div>
                                                <div className={styles.walletValue}>$50.00</div>
                                            </div>
                                            <div className={styles.walletItem}>
                                                <div className={styles.walletLabel}>Status:</div>
                                                <div className={styles.walletValue}>
                                                    <span className={styles.statusBadge} style={{ backgroundColor: '#1a7f37', color: '#ffffff', borderRadius: '4px', padding: '2px 8px' }}>Active</span>
                                                </div>
                                            </div>
                                        </div>
                                        <button className={styles.btnWhiteFull}>
                                            Request Payout
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
                                        </button>
                                    </div>

                                    {/* Billing Settings */}
                                    <div className={styles.profileCard}>
                                        <div className={styles.profileCardHeader}>
                                            <div className={styles.profileCardTitle}>Billing Settings</div>
                                        </div>
                                        <div>
                                            <div className={styles.settingsRow}>
                                                <div className={styles.settingsLabel}>Billing Address <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg></div>
                                                <div className={styles.settingsValue}>123 Trading St. New York</div>
                                            </div>
                                            <div className={styles.settingsRow}>
                                                <div className={styles.settingsLabel}>Country</div>
                                                <div className={styles.settingsValue}>USA</div>
                                            </div>
                                            <div className={styles.settingsRow}>
                                                <div className={styles.settingsLabel}>ZIP Code</div>
                                                <div className={styles.settingsValue}>10001</div>
                                            </div>
                                            <div className={styles.settingsRow}>
                                                <div className={styles.settingsLabel}>Currency</div>
                                                <div className={styles.settingsValue}>USD</div>
                                            </div>
                                            <div className={styles.settingsRow} style={{ borderBottom: 'none' }}>
                                                <div className={styles.settingsLabel}>Invoice Email</div>
                                                <div className={styles.settingsValue}>
                                                    <span className={styles.statusBadge} style={{ backgroundColor: '#1a7f37', color: '#ffffff', borderRadius: '4px', padding: '2px 8px' }}>Enabled</span>
                                                </div>
                                            </div>
                                        </div>
                                        <button className={styles.btnGrayFull}>Edit Settings</button>
                                    </div>
                                </div>
                            </div>

                            {/* Profit Split Grid Option 2 */}
                            <div className={styles.profileCard} style={{ marginBottom: 24, padding: 32 }}>
                                <div className={styles.profileCardHeader} style={{ marginBottom: 32 }}>
                                    <div className={styles.profileCardTitle}>Profit Split Calculator</div>
                                </div>
                                <div className={styles.billingGrid} style={{ gap: 40, marginBottom: 0 }}>
                                    {/* Sliders Area */}
                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                        <div className={styles.settingsLabel} style={{ marginBottom: 8 }}>Total Profit Generated</div>
                                        <div className={styles.calcInputContainer}>
                                            <span className={styles.calcInputSymbol}>$</span>
                                            <input type="text" className={styles.calcInput} defaultValue="10000" />
                                        </div>

                                        <div className={styles.settingsLabel} style={{ marginBottom: 4 }}>Adjust Profit</div>
                                        <div className={styles.sliderContainer}>
                                            <div className={styles.sliderTrack}>
                                                <div className={styles.sliderFill} style={{ width: '10%' }}></div>
                                                <div className={styles.sliderThumb}></div>
                                            </div>
                                            <div className={styles.sliderLabels}>
                                                <span>$0</span>
                                                <span>$50,000</span>
                                                <span>$100,000</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Result Area */}
                                    <div className={styles.ratioBox}>
                                        <div className={styles.ratioRow}>
                                            <div className={styles.ratioLabel}>Your Share (80%) <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg></div>
                                            <div className={styles.ratioValueGreen}>$8,000</div>
                                        </div>
                                        <div className={styles.ratioRow}>
                                            <div className={styles.ratioLabel}>Firm Share (20%)</div>
                                            <div className={styles.ratioValue}>$2,000</div>
                                        </div>
                                        <div className={styles.ratioRowLast}>
                                            <div className={styles.ratioLabel}>Split Ratio</div>
                                            <div className={styles.ratioBadge}>80/20</div>
                                        </div>

                                        <div>
                                            <div className={styles.ratioBarContainer}>
                                                <div className={styles.ratioBarUser} style={{ width: '80%' }}></div>
                                                <div className={styles.ratioBarFirm} style={{ width: '20%' }}></div>
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: '#475569', fontWeight: 600 }}>
                                                <span>You: $8,000</span>
                                                <span>Firm: $2,000</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Plans and Upgrades Section */}
                            <div className={styles.billingGrid}>
                                <div className={styles.profileCard}>
                                    <div className={styles.profileCardHeader}>
                                        <div className={styles.profileCardTitle}>Price Comparison</div>
                                    </div>
                                    <div className={styles.settingsLabel} style={{ marginBottom: 8 }}>Select Account Size <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg></div>
                                    <select className={styles.compareSelect}>
                                        <option>$50,000</option>
                                        <option>$100,000</option>
                                        <option>$200,000</option>
                                    </select>

                                    <div className={styles.walletItem} style={{ paddingTop: 0 }}>
                                        <div className={styles.walletLabel}>Avg. Market Rate</div>
                                        <div className={styles.walletValue}>$280</div>
                                    </div>
                                    <div className={styles.walletItem}>
                                        <div className={styles.walletLabel} style={{ color: '#0f172a' }}>Yo Pips Price</div>
                                        <div className={styles.ratioValueGreen}>$169</div>
                                    </div>
                                    <div className={styles.walletItem} style={{ borderBottom: 'none', paddingBottom: 0 }}>
                                        <div className={styles.walletLabel}>You Save</div>
                                        <div className={styles.walletValue} style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#3fb950' }}>
                                            $111 <span className={styles.saveBadge}>-40%</span>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.profileCard} style={{ gridColumn: 'span 2' }}>
                                    <div className={styles.profileCardHeader}>
                                        <div className={styles.profileCardTitle}>Compare Plans</div>
                                    </div>
                                    <div className={styles.planTableContainer}>
                                        <table className={styles.planTable}>
                                            <thead>
                                                <tr>
                                                    <th>Feature</th>
                                                    <th>Evolution</th>
                                                    <th>Express</th>
                                                    <th>Instant</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Profit Split</td>
                                                    <td className={styles.tdGreen}>90%</td>
                                                    <td>85%</td>
                                                    <td>75-85%</td>
                                                </tr>
                                                <tr>
                                                    <td className={styles.tdBlue}>Max Drawdown</td>
                                                    <td>10% (EOD)</td>
                                                    <td>10% (EOD)</td>
                                                    <td>6% (Static)</td>
                                                </tr>
                                                <tr>
                                                    <td className={styles.tdBlue}>Daily Loss</td>
                                                    <td>5%</td>
                                                    <td>5%</td>
                                                    <td>3%</td>
                                                </tr>
                                                <tr>
                                                    <td className={styles.tdBlue}>First Payout</td>
                                                    <td className={styles.tdGreen}>2 Days</td>
                                                    <td>3 Days</td>
                                                    <td>7 Days</td>
                                                </tr>
                                                <tr>
                                                    <td>Fee Refund</td>
                                                    <td></td>
                                                    <td><svg className={styles.checkIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg></td>
                                                    <td className={styles.tdGreen}><svg className={styles.checkIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg> 50%</td>
                                                </tr>
                                                <tr>
                                                    <td>Free Reset</td>
                                                    <td></td>
                                                    <td><svg className={styles.checkIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg></td>
                                                    <td><svg className={styles.crossIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></td>
                                                </tr>
                                                <tr>
                                                    <td>Time Limit</td>
                                                    <td className={styles.tdBlue}>Unlimited</td>
                                                    <td className={styles.tdBlue}>Unlimited</td>
                                                    <td className={styles.tdBlue}>Unlimited</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.sidebarFooter}>
                                <div className={styles.footerLinks}>
                                    <span>Cookie settings</span>
                                    <span>Privacy policy</span>
                                    <span>Terms & Conditions</span>
                                </div>
                                <div className={styles.footerCopyright} style={{ textAlign: 'center', marginTop: 16 }}>
                                    Yo Pips provides simulated trading services. All accounts are demo accounts with virtual funds. Performance on simulated accounts does not guarantee real-world results. Payouts are based on simulated profit performance.<br /><br />
                                    2026 © Copyright - YoPips.com
                                </div>
                            </div>
                        </>
                    ) : activePage === 'academy' ? (
                        <>
                            <div className={styles.breadcrumb} style={{ marginBottom: 24 }}>
                                Trader / <span>Accounts overview</span>
                            </div>

                            {/* Hero Section */}
                            <div className={styles.academyHero}>
                                <div className={styles.academyHeroLeft}>
                                    <div className={styles.academyHeroBadge}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0969da" strokeWidth="2"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 0 1 .665 6.479A11.952 11.952 0 0 0 12 20.055a11.952 11.952 0 0 0-6.824-2.998 12.078 12.078 0 0 1 .665-6.479L12 14z" /><path d="M12 14v7" /></svg>
                                        Yo Pips Academy
                                    </div>
                                    <h1 className={styles.academyHeroTitle}>
                                        Master the Markets<br />
                                        <span className={styles.gradientText}>One Pip at a Time</span>
                                    </h1>
                                    <p className={styles.academyHeroSub}>
                                        Comprehensive trading education to take you from beginner to funded trader. Start your journey today.
                                    </p>
                                    <div className={styles.academyHeroActions}>
                                        <button className={styles.btnPrimary}>Resume Learning</button>
                                        <button className={styles.btnSecondary}>Browse Catalog</button>
                                    </div>
                                </div>
                                <div className={styles.academyHeroRight}>
                                    <div className={styles.academyStatsRow}>
                                        <div className={styles.academyStatBox}>
                                            <svg className={`${styles.academyStatIcon} ${styles.gold}`} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></svg>
                                            <div className={styles.academyStatValue}>12</div>
                                            <div className={styles.academyStatLabel}>Courses Completed</div>
                                        </div>
                                        <div className={styles.academyStatBox}>
                                            <svg className={`${styles.academyStatIcon} ${styles.green}`} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
                                            <div className={styles.academyStatValue}>85%</div>
                                            <div className={styles.academyStatLabel}>Average Quiz Score</div>
                                        </div>
                                    </div>
                                    <div className={styles.academyCurrentBox}>
                                        <div className={styles.academyCurrentIcon}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="2" width="16" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>
                                        </div>
                                        <div className={styles.academyCurrentInfo}>
                                            <div className={styles.academyCurrentLabel}>CURRENT COURSE</div>
                                            <div className={styles.academyCurrentTitle}>Advanced Price Action Patterns</div>
                                            <div className={styles.academyProgressBg}>
                                                <div className={styles.academyProgressFill} style={{ width: '65%' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Library Header */}
                            <div className={styles.libraryHeader}>
                                <h2 className={styles.libraryTitle}>Course Library</h2>
                                <div className={styles.libraryFilters}>
                                    <button className={`${styles.filterPill} ${styles.active}`}>All Courses</button>
                                    <button className={styles.filterPill}>Basics</button>
                                    <button className={styles.filterPill}>Technical Analysis</button>
                                    <button className={styles.filterPill}>Psychology</button>
                                    <button className={styles.filterPill}>Strategies</button>
                                </div>
                            </div>

                            {/* Course Grid */}
                            <div className={styles.courseGrid}>
                                {/* Course 1 */}
                                <div className={styles.courseCard}>
                                    <div className={`${styles.courseTop} ${styles.bgBlue}`}>
                                        <div className={styles.courseBadges}>
                                            <span className={styles.courseBadge}>BASICS</span>
                                            <span className={styles.courseBadge} style={{ backgroundColor: '#0f172a' }}>BEGINNER</span>
                                        </div>
                                    </div>
                                    <div className={styles.courseBottom}>
                                        <h3 className={styles.courseTitle}>Forex Trading Bootcamp: Zero t...</h3>
                                        <p className={styles.courseDesc}>The complete guide to starting your forex journey. Learn terminology, chart reading, and basic...</p>
                                        <div className={styles.courseProgress}>
                                            <div className={styles.courseProgressLabel}>
                                                <span>100% Complete</span>
                                            </div>
                                            <div className={styles.courseProgressBarBg}>
                                                <div className={styles.courseProgressBarFill} style={{ width: '100%', backgroundColor: '#0969da' }}></div>
                                            </div>
                                        </div>
                                        <div className={styles.courseMeta} style={{ justifyContent: 'space-between' }}>
                                            <div style={{ display: 'flex', gap: 16 }}>
                                                <div className={styles.metaItem}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg> 4h 30m</div>
                                                <div className={styles.metaItem}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg> 24 Lessons</div>
                                            </div>
                                            <div className={styles.metaItem} style={{ color: '#3fb950', fontWeight: 600 }}>
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Completed
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Course 2 */}
                                <div className={styles.courseCard}>
                                    <div className={`${styles.courseTop} ${styles.bgPurple}`}>
                                        <div className={styles.courseBadges}>
                                            <span className={styles.courseBadge}>TECHNICAL</span>
                                            <span className={styles.courseBadge} style={{ backgroundColor: '#0f172a' }}>ADVANCED</span>
                                        </div>
                                    </div>
                                    <div className={styles.courseBottom}>
                                        <h3 className={styles.courseTitle}>Advanced Price Action Patterns</h3>
                                        <p className={styles.courseDesc}>Master the art of reading raw price action. Identify valid order blocks, liquidity sweeps, and precise...</p>
                                        <div className={styles.courseProgress}>
                                            <div className={styles.courseProgressLabel}>
                                                <span>65% Complete</span>
                                            </div>
                                            <div className={styles.courseProgressBarBg}>
                                                <div className={styles.courseProgressBarFill} style={{ width: '65%', backgroundColor: '#0969da' }}></div>
                                            </div>
                                        </div>
                                        <div className={styles.courseMeta}>
                                            <div className={styles.metaItem}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg> 6h 15m</div>
                                            <div className={styles.metaItem}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg> 32 Lessons</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Course 3 */}
                                <div className={styles.courseCard}>
                                    <div className={`${styles.courseTop} ${styles.bgOrange}`}>
                                        <div className={styles.courseBadges}>
                                            <span className={styles.courseBadge}>PSYCHOLOGY</span>
                                            <span className={styles.courseBadge} style={{ backgroundColor: '#0f172a' }}>ALL LEVELS</span>
                                        </div>
                                    </div>
                                    <div className={styles.courseBottom}>
                                        <h3 className={styles.courseTitle}>Trading Psychology & Mindset</h3>
                                        <p className={styles.courseDesc}>Control your emotions, eliminate FOMO, and build the discipline required for consistent profitability.</p>
                                        <div className={styles.courseProgress}>
                                            <div className={styles.courseProgressLabel}>
                                                <span>10% Complete</span>
                                            </div>
                                            <div className={styles.courseProgressBarBg}>
                                                <div className={styles.courseProgressBarFill} style={{ width: '10%' }}></div>
                                            </div>
                                        </div>
                                        <div className={styles.courseMeta}>
                                            <div className={styles.metaItem}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg> 3h 00m</div>
                                            <div className={styles.metaItem}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg> 18 Lessons</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Course 4 */}
                                <div className={styles.courseCard}>
                                    <div className={`${styles.courseTop} ${styles.bgGreen}`}>
                                        <div className={styles.courseBadges}>
                                            <span className={styles.courseBadge}>STRATEGY</span>
                                            <span className={styles.courseBadge} style={{ backgroundColor: '#0f172a' }}>INTERMEDIATE</span>
                                        </div>
                                    </div>
                                    <div className={styles.courseBottom}>
                                        <h3 className={styles.courseTitle}>Risk Management Mastery</h3>
                                        <p className={styles.courseDesc}>The most important skill in trading. Learn position sizing, R-multiples, and portfolio protection.</p>
                                        <div className={styles.courseMeta} style={{ borderTop: 'none', paddingTop: 0, marginTop: 'auto' }}>
                                            <div className={styles.metaItem}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg> 2h 45m</div>
                                            <div className={styles.metaItem}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg> 14 Lessons</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Course 5 */}
                                <div className={styles.courseCard}>
                                    <div className={`${styles.courseTop} ${styles.bgTeal}`}>
                                        <div className={styles.courseBadges}>
                                            <span className={styles.courseBadge}>STRATEGY</span>
                                            <span className={styles.courseBadge} style={{ backgroundColor: '#0f172a' }}>EXPERT</span>
                                        </div>
                                    </div>
                                    <div className={styles.courseBottom}>
                                        <h3 className={styles.courseTitle}>Scalping the 1-Minute Chart</h3>
                                        <p className={styles.courseDesc}>High-intensity strategy for quick profits. Learn to execute fast with precision on lower timeframes.</p>
                                        <div className={styles.courseMeta} style={{ borderTop: 'none', paddingTop: 0, marginTop: 'auto' }}>
                                            <div className={styles.metaItem}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg> 5h 20m</div>
                                            <div className={styles.metaItem}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg> 28 Lessons</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Course 6 */}
                                <div className={styles.courseCard}>
                                    <div className={`${styles.courseTop} ${styles.bgMagenta}`}>
                                        <div className={styles.courseBadges}>
                                            <span className={styles.courseBadge}>TECHNICAL</span>
                                            <span className={styles.courseBadge} style={{ backgroundColor: '#0f172a' }}>ADVANCED</span>
                                        </div>
                                    </div>
                                    <div className={styles.courseBottom}>
                                        <h3 className={styles.courseTitle}>Fundamental Analysis: News...</h3>
                                        <p className={styles.courseDesc}>How to trade NFP, CPI, and interest rate decisions without getting wrecked by slippage.</p>
                                        <div className={styles.courseMeta} style={{ borderTop: 'none', paddingTop: 0, marginTop: 'auto' }}>
                                            <div className={styles.metaItem}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg> 3h 10m</div>
                                            <div className={styles.metaItem}><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg> 16 Lessons</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.academyFooter}>
                                All Academy content is for educational purposes only. Trading involves risk.
                            </div>
                        </>
                    ) : activePage === 'traders' ? (
                        <>
                            <div className={styles.breadcrumb} style={{ marginBottom: 24 }}>
                                Community / <span>YoPips Traders</span>
                            </div>

                            <div className={styles.tradersHeader}>
                                <svg className={styles.tradersHeaderIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                YoPips Traders
                            </div>

                            <div className={styles.tradersActionBar}>
                                <div className={styles.tradersActionLeft}>
                                    <button className={styles.btnActionOutline}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                                        Top Performers
                                    </button>
                                    <button className={styles.btnActionOutline}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.59-9.27l-5.46 5.46" /></svg>
                                        Refresh
                                    </button>
                                </div>
                                <div className={styles.tradersSearchBox}>
                                    <svg className={styles.tradersSearchIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                    <input type="text" placeholder="Search traders..." className={styles.tradersSearchInput} />
                                </div>
                            </div>

                            <div className={styles.tradersStatsGrid}>
                                <div className={styles.tradersStatCard}>
                                    <div className={styles.tradersStatInfo}>
                                        <div className={styles.tradersStatLabel}>Total Payouts</div>
                                        <div className={styles.tradersStatValue}>$0</div>
                                    </div>
                                    <div className={`${styles.tradersStatIconBox} ${styles.iconBoxGreen}`}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
                                    </div>
                                </div>
                                <div className={styles.tradersStatCard}>
                                    <div className={styles.tradersStatInfo}>
                                        <div className={styles.tradersStatLabel}>Active Traders</div>
                                        <div className={styles.tradersStatValue}>0</div>
                                    </div>
                                    <div className={`${styles.tradersStatIconBox} ${styles.iconBoxBlue}`}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                    </div>
                                </div>
                                <div className={styles.tradersStatCard}>
                                    <div className={styles.tradersStatInfo}>
                                        <div className={styles.tradersStatLabel}>Win Rate Avg</div>
                                        <div className={styles.tradersStatValue}>0%</div>
                                    </div>
                                    <div className={`${styles.tradersStatIconBox} ${styles.iconBoxOrange}`}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.tradersEmptyState}>
                                <svg className={styles.tradersEmptyIcon} width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                <h3 className={styles.tradersEmptyTitle}>No Public Profiles Yet</h3>
                                <p className={styles.tradersEmptySub}>Traders can enable "Visibility" in their Dashboard settings to appear here.</p>
                            </div>

                            <div className={styles.tradersFooterNav}>
                                <div className={styles.tradersFooterLinks}>
                                    <span>Support</span>
                                    <span>Rules</span>
                                    <span>Funding</span>
                                </div>
                                <div className={styles.tradersFooterCopyright}>
                                    2026 © Copyright - YoPips.com
                                </div>
                            </div>
                        </>
                    ) : activePage === 'leaderboard' ? (
                        <>
                            <div className={styles.leaderboardHeader}>
                                <div className={styles.leaderboardTitleGroup}>
                                    <div className={styles.leaderboardIconBox}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></svg>
                                    </div>
                                    <div className={styles.leaderboardTitleText}>
                                        <h1>Top Traders</h1>
                                        <p>Celebrating Our Best Performers</p>
                                    </div>
                                </div>
                                <div className={styles.leaderboardActions}>
                                    <div className={styles.timeToggleGroup}>
                                        <button className={`${styles.btnTimeToggle} ${styles.active}`}>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                                            This Month
                                        </button>
                                        <button className={styles.btnTimeToggle}>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                            All Time
                                        </button>
                                    </div>
                                    <button className={styles.btnIconOnly}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.59-9.27l-5.46 5.46" /></svg>
                                    </button>
                                </div>
                            </div>

                            <div className={styles.leaderboardEmptyState}>
                                <svg className={styles.leaderboardEmptyBgIcon} width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></svg>

                                <div className={styles.leaderboardEmptyContent}>
                                    <h2 className={styles.leaderboardEmptyTitle}>No Rankings Yet</h2>
                                    <p className={styles.leaderboardEmptySub}>Be the first to claim the top spot!</p>
                                </div>
                            </div>
                        </>
                    ) : activePage === 'journal' ? (
                        <>
                            <div className={styles.breadcrumb} style={{ marginBottom: 24 }}>
                                Trader / <span>Accounts overview</span>
                            </div>

                            <div className={styles.journalHeader}>
                                <div className={styles.journalTitleGroup}>
                                    <div className={styles.journalIconBox}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
                                    </div>
                                    <div className={styles.journalTitleText}>
                                        <h1>Trading Journal & Analytics</h1>
                                        <p>Review your performance, track emotions, and refine your edge.</p>
                                    </div>
                                </div>
                                <div className={styles.journalActions}>
                                    <div className={styles.journalAccountDropdown}>
                                        #889228228
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                    </div>
                                    <button className={styles.btnSync}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.59-9.27l-5.46 5.46"></path></svg>
                                        Sync
                                    </button>
                                </div>
                            </div>

                            <div className={styles.journalStatsContainer}>
                                <div className={styles.journalStatCell}>
                                    <div className={styles.jStatLabelRow}>
                                        <span className={styles.jStatLabel}>NET PNL</span>
                                    </div>
                                    <div className={styles.jStatValueRow}>
                                        <span className={styles.jStatValueMain}>$0.00</span>
                                        <span className={styles.jStatSubGreen}>0 Trades</span>
                                    </div>
                                </div>
                                <div className={styles.journalStatCell}>
                                    <div className={styles.jStatLabelRow}>
                                        <span className={styles.jStatLabel}>WIN RATE</span>
                                    </div>
                                    <div className={styles.jStatValueRow}>
                                        <span className={styles.jStatValueMain}>0%</span>
                                    </div>
                                </div>
                                <div className={styles.journalStatCell}>
                                    <div className={styles.jStatLabelRow}>
                                        <span className={styles.jStatLabel}>PROFIT FACTOR</span>
                                    </div>
                                    <div className={styles.jStatValueRow}>
                                        <span className={styles.jStatValueMain}>0</span>
                                    </div>
                                </div>
                                <div className={styles.journalStatCell}>
                                    <div className={styles.jStatLabelRow}>
                                        <span className={styles.jStatLabel}>EXPECTANCY</span>
                                    </div>
                                    <div className={styles.jStatValueRow}>
                                        <span className={styles.jStatValueMain}>$0</span>
                                    </div>
                                </div>
                                <div className={styles.journalStatCell}>
                                    <div className={styles.jStatLabelRow}>
                                        <span className={styles.jStatLabel}>AVG WIN</span>
                                        <svg className={styles.jStatIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="17 11 21 7 17 3"></polyline><line x1="21" y1="7" x2="9" y2="7"></line><line x1="9" y1="21" x2="9" y2="7"></line></svg>
                                    </div>
                                    <div className={styles.jStatValueRow}>
                                        <span className={styles.jStatSubGreen} style={{ fontSize: '14px' }}>$0</span>
                                    </div>
                                </div>
                                <div className={styles.journalStatCell}>
                                    <div className={styles.jStatLabelRow}>
                                        <span className={styles.jStatLabel}>AVG LOSS</span>
                                        <svg className={styles.jStatIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="17 13 21 17 17 21"></polyline><line x1="21" y1="17" x2="9" y2="17"></line><line x1="9" y1="3" x2="9" y2="17"></line></svg>
                                    </div>
                                    <div className={styles.jStatValueRow}>
                                        <span className={styles.jStatSubRed} style={{ fontSize: '14px' }}>$0</span>
                                    </div>
                                </div>
                                <div className={styles.journalStatCell}>
                                    <div className={styles.jStatLabelRow}>
                                        <span className={styles.jStatLabel}>RISK:REWARD</span>
                                        <svg className={styles.jStatIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                    </div>
                                    <div className={styles.jStatValueRow}>
                                        <span className={styles.jStatValueMain} style={{ fontSize: '14px', color: '#475569' }}>-</span>
                                    </div>
                                </div>
                                <div className={styles.journalStatCell}>
                                    <div className={styles.jStatLabelRow}>
                                        <span className={styles.jStatLabel}>BEST TRADE</span>
                                        <svg className={styles.jStatIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                    </div>
                                    <div className={styles.jStatValueRow}>
                                        <span className={styles.jStatSubGreen} style={{ fontSize: '14px' }}>+$0</span>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.journalMiddleSplit}>
                                <div className={styles.journalPerfMetrics}>
                                    <div className={styles.jSectionHeader}>
                                        PERFORMANCE METRICS
                                    </div>
                                    <div className={styles.jMetricRow}>
                                        <span>Current Streak</span>
                                        <span style={{ color: '#f85149', fontWeight: 600 }}>L0</span>
                                    </div>
                                    <div className={styles.jMetricRow}>
                                        <span>Longest Win Run</span>
                                        <span style={{ fontWeight: 600 }}>0</span>
                                    </div>
                                    <div className={styles.jMetricRow}>
                                        <span>Longest Drawdown</span>
                                        <span style={{ fontWeight: 600 }}>0</span>
                                    </div>
                                    <div className={styles.jMetricRow}>
                                        <span>Net Profit</span>
                                        <span style={{ color: '#3fb950', fontWeight: 600 }}>+$0.00</span>
                                    </div>
                                </div>

                                <div className={styles.jHourlyPnL}>
                                    <div className={styles.jSectionHeader} style={{ borderBottom: 'none' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                            <span style={{ color: '#0f172a' }}>Hourly PnL</span>
                                        </div>
                                        <span>UTC TIME</span>
                                    </div>
                                    <div className={styles.jHourlyGridWrap}>
                                        <div className={styles.jHourlyGrid}>
                                            <div className={styles.jHourlyItem}>0</div>
                                            <div className={styles.jHourlyItem}>1</div>
                                            <div className={styles.jHourlyItem}>2</div>
                                            <div className={styles.jHourlyItem}>3</div>
                                            <div className={styles.jHourlyItem}>4</div>
                                            <div className={styles.jHourlyItem}>5</div>
                                            <div className={styles.jHourlyItem}>6</div>
                                            <div className={styles.jHourlyItem}>7</div>
                                            <div className={styles.jHourlyItem}>8</div>
                                            <div className={styles.jHourlyItem}>9</div>
                                            <div className={styles.jHourlyItem}>10</div>
                                            <div className={styles.jHourlyItem}>11</div>
                                        </div>
                                        <div className={styles.jHourlyGrid} style={{ marginBottom: 0 }}>
                                            <div className={styles.jHourlyItem}>12</div>
                                            <div className={styles.jHourlyItem}>13</div>
                                            <div className={styles.jHourlyItem}>14</div>
                                            <div className={styles.jHourlyItem}>15</div>
                                            <div className={styles.jHourlyItem}>16</div>
                                            <div className={styles.jHourlyItem}>17</div>
                                            <div className={styles.jHourlyItem}>18</div>
                                            <div className={styles.jHourlyItem}>19</div>
                                            <div className={styles.jHourlyItem}>20</div>
                                            <div className={styles.jHourlyItem}>21</div>
                                            <div className={styles.jHourlyItem}>22</div>
                                            <div className={styles.jHourlyItem}>23</div>
                                        </div>
                                    </div>
                                    <div className={styles.jSessionsRow}>
                                        <div className={styles.jSessionBox}>
                                            <span className={styles.jSessionLabel}>ASIAN</span>
                                            <span className={styles.jStatSubGreen}>$0</span>
                                        </div>
                                        <div className={styles.jSessionBox}>
                                            <span className={styles.jSessionLabel}>LONDON</span>
                                            <span className={styles.jStatSubGreen}>$0</span>
                                        </div>
                                        <div className={styles.jSessionBox}>
                                            <span className={styles.jSessionLabel}>NEW YORK</span>
                                            <span className={styles.jStatSubGreen}>$0</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.jBottomSection}>
                                <div className={styles.jSectionHeader}>
                                    SYMBOL PERFORMANCE
                                    <span>Top 5 by Vol</span>
                                </div>
                                <div className={styles.jSymbolGrid}>
                                    <div>SYMBOL</div>
                                    <div>NET PNL</div>
                                    <div>VOLUME</div>
                                    <div>TRADES</div>
                                    <div>WIN RATE</div>
                                </div>
                            </div>

                            <div className={styles.jSectionHeader} style={{ borderBottom: 'none', padding: '8px 0', alignItems: 'center' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '14px', color: '#0f172a', fontWeight: 800 }}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                                    Trade History
                                </div>
                                <span style={{ color: '#475569', fontSize: '11px', fontWeight: 500 }}>0 trades synced</span>
                            </div>
                        </>
                    ) : activePage === 'certificates' ? (
                        <>
                            <div className={styles.breadcrumb} style={{ marginBottom: 24 }}>
                                Traders / <span>Certificates</span>
                            </div>

                            <div className={styles.certificatesHeader}>
                                <svg className={styles.certificatesHeaderIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>
                                <h1 className={styles.certificatesHeaderTitle}>Your Certificates</h1>
                            </div>

                            <div className={styles.certificatesActions}>
                                <button className={styles.btnSyncDim}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.59-9.27l-5.46 5.46"></path></svg>
                                    Sync Data
                                </button>
                                <div className={styles.certSearchWrap}>
                                    <svg className={styles.certSearchIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                    <input type="text" className={styles.certSearchInput} placeholder="Search awards..." />
                                </div>
                            </div>

                            <div className={styles.certCard}>
                                <div className={styles.certTopIconY}>Y</div>

                                <span className={styles.certStatusLabel}>PASSED</span>
                                <div className={styles.certMainTitle}>FX TRUSTS</div>
                                <div className={styles.certNameGold}>Siddhartha Test</div>

                                <div className={styles.certPreviewLabel}>Click to preview</div>

                                <div className={styles.certPhaseRow}>
                                    <div className={styles.certPhaseTitle}>Phase 1 Passed - Siddhartha Test</div>
                                    <div className={styles.certBadgeEarned}>Earned</div>
                                </div>
                                <div className={styles.certPhaseSub}>Phase 1 Certificate</div>

                                <div className={styles.certDetailRow}>
                                    <div className={styles.certDetailLabel}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                        Date Received
                                    </div>
                                    <div className={styles.certDetailValue}>2 Feb 2026</div>
                                </div>
                                <div className={styles.certDetailRow}>
                                    <div className={styles.certDetailLabel}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                                        Reward Size
                                    </div>
                                    <div className={styles.certDetailValue}>$2000.00</div>
                                </div>

                                <div className={styles.certActionsRow}>
                                    <button className={styles.btnDownloadPdf}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                                        Download PDF
                                    </button>
                                    <button className={styles.btnExternalLink}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                    </button>
                                </div>
                            </div>

                            <div className={styles.achievementStatsContainer}>
                                <div className={styles.achievementTitle}>Achievement Statistics</div>
                                <div className={styles.achievementGrid}>
                                    <div className={`${styles.achievementCol} ${styles.left}`}>
                                        <span className={styles.achievementValueMain}>1</span>
                                        <span className={styles.achievementLabel}>TOTAL AWARDS</span>
                                    </div>
                                    <div className={styles.achievementCol}>
                                        <span className={styles.achievementValueDim}>-</span>
                                        <span className={styles.achievementLabel}>COMPLETION</span>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : activePage === 'new-challenge' ? (
                        <>
                            <div className={styles.breadcrumb} style={{ marginBottom: 24 }}>
                                Trader / <span>New Challenge</span>
                            </div>
                            <h1 className={styles.challengeTitle}>Configure Your Challenge</h1>
                            <p className={styles.challengeSub}>Select the plan that fits your trading style.</p>

                            <div className={styles.challengeConfigLayout}>
                                <div className={styles.challengeStepsCol}>

                                    {/* Step 1: Choose Your Plan */}
                                    <div className={styles.cStepBlock}>
                                        <div className={styles.cStepTitle}>1. Choose Your Plan</div>
                                        <div className={styles.cCardsGrid}>
                                            <div className={`${styles.cCard} ${styles.selected}`}>
                                                <div className={styles.cCardHeaderRow}>
                                                    <span className={styles.cCardTitle}>2-Step Challenge</span>
                                                    <span className={styles.cCardBadge}>Best Sellers</span>
                                                </div>
                                                <div className={styles.cCardDesc}>Standard two-phase evaluation</div>
                                                <div className={styles.cCardRadioRow}>
                                                    <div className={styles.cRadioIcon}>
                                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                                    </div>
                                                    Selected
                                                </div>
                                            </div>

                                            <div className={styles.cCard}>
                                                <div className={styles.cCardHeaderRow}>
                                                    <span className={styles.cCardTitle}>1-Step Challenge</span>
                                                    <span className={styles.cCardBadgeDim}>Fastest</span>
                                                </div>
                                                <div className={styles.cCardDesc}>Prove your skills in a single phase</div>
                                                <div className={styles.cCardRadioRow}>
                                                    <div className={styles.cRadioIcon}></div>
                                                    Select Plan
                                                </div>
                                            </div>

                                            <div className={styles.cCard}>
                                                <div className={styles.cCardHeaderRow}>
                                                    <span className={styles.cCardTitle}>Instant Funding</span>
                                                    <span className={styles.cCardBadgeDim}>Fast</span>
                                                </div>
                                                <div className={styles.cCardDesc}>Skip evaluation and start earning</div>
                                                <div className={styles.cCardRadioRow}>
                                                    <div className={styles.cRadioIcon}></div>
                                                    Select Plan
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Step 2: Model */}
                                    <div className={styles.cStepBlock}>
                                        <div className={styles.cStepTitle}>2. Model</div>
                                        <div className={styles.cCardsGrid}>
                                            <div className={`${styles.cCard} ${styles.selected}`} style={{ padding: '16px 20px' }}>
                                                <div className={styles.cCardHeaderRow} style={{ marginBottom: 4 }}>
                                                    <span className={styles.cCardTitle}>Standard</span>
                                                    <div className={styles.cRadioIcon}>
                                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                                    </div>
                                                </div>
                                                <div className={styles.cCardDesc} style={{ marginBottom: 0 }}>Regular execution</div>
                                            </div>
                                            <div className={styles.cCard} style={{ padding: '16px 20px' }}>
                                                <div className={styles.cCardHeaderRow} style={{ marginBottom: 4 }}>
                                                    <span className={styles.cCardTitle}>Swing</span>
                                                    <div className={styles.cRadioIcon}></div>
                                                </div>
                                                <div className={styles.cCardDesc} style={{ marginBottom: 0 }}>Overnight holding allowed</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Step 3: Account Size */}
                                    <div className={styles.cStepBlock}>
                                        <div className={styles.cStepTitle}>3. Account Size & Currency</div>
                                        <div className={styles.cCurrencyTabs}>
                                            <div className={`${styles.cCurrencyBtn} ${styles.active}`}>USD</div>
                                            <div className={styles.cCurrencyBtn}>EUR</div>
                                            <div className={styles.cCurrencyBtn}>GBP</div>
                                        </div>
                                        <div className={styles.cSizeGrid}>
                                            <div className={styles.cSizeCard}>
                                                <div className={styles.cSizeValue}>$5,000</div>
                                                <div className={styles.cSizePrice}>$36</div>
                                            </div>
                                            <div className={styles.cSizeCard}>
                                                <div className={styles.cSizeValue}>$10,000</div>
                                                <div className={styles.cSizePrice}>$66</div>
                                            </div>
                                            <div className={styles.cSizeCard}>
                                                <div className={styles.cSizeValue}>$25,000</div>
                                                <div className={styles.cSizePrice}>$156</div>
                                            </div>
                                            <div className={`${styles.cSizeCard} ${styles.selected}`}>
                                                <div className={styles.cSizeValue} style={{ color: '#06b6d4' }}>$50,000</div>
                                                <div className={styles.cSizePrice}>$289</div>
                                            </div>
                                            <div className={styles.cSizeCard}>
                                                <div className={styles.cSizeValue}>$100,000</div>
                                                <div className={styles.cSizePrice}>$519</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Step 4: Trading Platform */}
                                    <div className={styles.cStepBlock}>
                                        <div className={styles.cStepTitle}>4. Trading Platform</div>
                                        <div className={styles.cCardFull}>
                                            <div className={styles.cFullCardTexts}>
                                                <span className={styles.cCardTitle}>MetaTrader 5</span>
                                            </div>
                                            <div className={styles.cRadioIcon} style={{ borderColor: '#06b6d4', backgroundColor: '#06b6d4', color: '#0f172a' }}>
                                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Step 5: Payment Method */}
                                    <div className={styles.cStepBlock}>
                                        <div className={styles.cStepTitle}>5. Payment Method</div>
                                        <div className={styles.cCardFull}>
                                            <div className={styles.cFullCardTexts}>
                                                <span className={styles.cCardTitle}>Crypto (CoinPayments)</span>
                                                <span className={styles.cCardDesc} style={{ marginBottom: 0 }}>Bitcoin, Litecoin, USDT, etc.</span>
                                            </div>
                                            <div className={styles.cRadioIcon} style={{ borderColor: '#06b6d4', backgroundColor: '#06b6d4', color: '#0f172a' }}>
                                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                {/* Right Column Order Summary */}
                                <div className={styles.orderSummaryCol}>
                                    <div className={styles.orderSummaryCard}>
                                        <div className={styles.osHeader}>
                                            <div className={styles.osTitle}>Order Summary</div>
                                            <div className={styles.osPriceLarge}>$289</div>
                                            <div className={styles.osSubtitle}>One-time payment</div>
                                        </div>

                                        <div className={styles.osDivider}></div>

                                        <div className={styles.osRow}>
                                            <span className={styles.osLabel}>Plan</span>
                                            <span className={styles.osValue}>2-Step Challenge</span>
                                        </div>
                                        <div className={styles.osRow}>
                                            <span className={styles.osLabel}>Balance</span>
                                            <span className={styles.osValue}>$50,000</span>
                                        </div>

                                        <div className={styles.osDivider}></div>

                                        <div className={styles.osPromoWrap}>
                                            <input type="text" className={styles.osPromoInput} placeholder="Promo Code / Coupon" />
                                            <button className={styles.osPromoBtn}>Apply</button>
                                        </div>

                                        <div className={styles.osTotalRow}>
                                            <span>Total</span>
                                            <span className={styles.osTotalValue}>$289.00</span>
                                        </div>

                                        <button className={styles.osBtnComplete}>
                                            Complete Order
                                        </button>

                                        <div className={styles.osSecureSSL}>
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                            Secure SSL Payment
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : null}
                </div>
            </main>

            {/* Floating Chat Button */}
            <div className={styles.fab} style={{ backgroundColor: '#007bff' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2h-4l-4 4-4-4H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /></svg>
            </div>
        </div>
    );
}
