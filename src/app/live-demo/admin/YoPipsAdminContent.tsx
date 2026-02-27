'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './yopips-admin.module.css';

const registrations = [
    { name: 'Abhishek Kumar', email: 'yoforeopremium@gmail.com', plan: 'No Active Plan', joined: 'Feb 27, 2026. 12:55 PM', status: 'Pending', avatarColor: '#d9f99d' },
    { name: 'Abhishek Kumar', email: 'firkydevcvst@gmail.com', plan: 'No Active Plan', joined: 'Feb 27, 2026. 12:46 PM', status: 'Pending', avatarColor: '#d9f99d' },
    { name: 'Arijit Nayak', email: 'mql5helpline@gmail.com', plan: 'No Active Plan', joined: 'Feb 25, 2026. 02:18 PM', status: 'Pending', avatarColor: '#fef08a' },
    { name: 'raj', email: 'spinfxasia@gmail.com', plan: 'No Active Plan', joined: 'Feb 24, 2026. 05:07 PM', status: 'Pending', avatarColor: '#d9f99d' },
    { name: 'Arijeet Nayak', email: 'ranjan.nayak1968@gmail.com', plan: 'No Active Plan', joined: 'Feb 24, 2026. 05:07 PM', status: 'Pending', avatarColor: '#d9f99d' },
    { name: 'Archiman Das', email: 'dasarchisman2002@gmail.com', plan: 'No Active Plan', joined: 'Feb 24, 2026. 01:34 PM', status: 'Pending', avatarColor: '#fef08a' },
    { name: 'Jhilik Saw', email: 'jhilik@gmail.com', plan: 'No Active Plan', joined: 'Feb 19, 2026. 07:01 PM', status: 'Pending', avatarColor: '#86efac' },
    { name: 'Vaishlai Mam', email: 'vaishalimam@gmail.com', plan: 'No Active Plan', joined: 'Feb 19, 2026. 06:56 PM', status: 'Pending', avatarColor: '#fef08a' },
    { name: 'Ayush', email: 'ayushoffice002@gmail.com', plan: 'No Active Plan', joined: 'Feb 18, 2026. 05:39 PM', status: 'Pending', avatarColor: '#d9f99d' },
    { name: 'Tafajul bhai', email: 'tafajul@gmail.com', plan: 'No Active Plan', joined: 'Feb 18, 2026. 05:31 PM', status: 'Pending', avatarColor: '#86efac' },
];

const approvalsData = [
    { id: 'CH-RESTORED-889227623', name: 'Siddhartha Saw', email: 'siddharthasaw626@gmail.com', type: 'Two_step', value: '$5,000', phase: 'Phase 1', passedAt: '-' },
    { id: 'CH-1770286172640-934', name: 'Siddhartha Test', email: 'sawsiddhartha@gmail.com', type: 'One_step', value: '$2,000', phase: 'Phase 1', passedAt: '-' },
    { id: 'CH-1770700501402-540', name: 'Arijeet Nayak', email: 'yoforexpremium@gmail.com', type: 'One_step', value: '$5,000', phase: 'Phase 1', passedAt: '-' },
    { id: 'CH-1770700502185-355', name: 'Arijeet Nayak', email: 'yoforexpremium@gmail.com', type: 'One_step', value: '$5,000', phase: 'Phase 1', passedAt: '-' },
    { id: 'CH-1770703307040-966', name: 'Rabi Rajput', email: 'siddhsr60@gmail.com', type: 'One_step', value: '$5,000', phase: 'Phase 1', passedAt: '-' },
    { id: 'CH-1770703308101-349', name: 'Rabi Rajput', email: 'siddhsr60@gmail.com', type: 'One_step', value: '$5,000', phase: 'Phase 1', passedAt: '-' },
];

export default function YoPipsAdminContent() {
    const [activeTab, setActiveTab] = useState('Approvals');

    return (
        <div className={styles.container}>
            {/* Sidebar */}
            <aside className={styles.sidebar}>
                <div className={styles.logoContainer}>
                    <Image src="/yo_pips_logo.png" alt="YO PIPS" width={100} height={28} style={{ height: '28px', width: 'auto', display: 'block' }} />
                </div>

                <nav className={styles.navLinks}>
                    {[
                        { name: 'Dashboard', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg> },
                        { name: 'Approvals', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg> },
                        { name: 'Challenge Rules', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg> },
                        { name: 'Users', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> },
                        { name: 'Plans', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> },
                        { name: 'Accounts', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg> },
                        { name: 'Trading Objectives', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg> },
                        { name: 'Helpdesk', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg> },
                        { name: 'Contest Programs', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1.5.5 1.5 1.5L5 21"></path><path d="M21 21c-3 0-7-1-7-8V5c0-1.25.756-2.017 2-2h6c1.25 0 2 .75 2 1.972V11c0 1.25-.75 2-2 2-1 0-1.5.5-1.5 1.5L19 21"></path><path d="M9 22h6"></path><path d="M9 10h6"></path></svg> },
                        { name: 'Coupons', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line></svg> },
                        { name: 'Withdrawals', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>, hasChevron: true },
                        { name: 'Setup', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>, hasChevron: true },
                        { name: 'Leaderboard Setups', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>, hasChevron: true },
                        { name: 'Visitor Statistics', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg> },
                        { name: 'Issued Certificates', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg> },
                        { name: 'Certificate Templates', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>, hasChevron: true },
                        { name: 'Payment Gateways', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>, hasChevron: true },
                        { name: 'Payment Transactions', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> },
                    ].map((item) => (
                        <a
                            key={item.name}
                            href="#"
                            className={`${styles.navItem} ${activeTab === item.name ? styles.active : ''}`}
                            onClick={(e) => { e.preventDefault(); setActiveTab(item.name); }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1 }}>
                                {item.icon}
                                {item.name}
                            </div>
                            {item.hasChevron && (
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5 }}>
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            )}
                        </a>
                    ))}
                </nav>

                <div className={styles.sidebarBottom}>
                    <a href="#" className={styles.navItem}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                        Light Mode
                    </a>
                    <a href="#" className={`${styles.navItem} ${styles.navItemLogout}`}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                        Logout
                    </a>
                </div>
            </aside>

            {/* Main Content */}
            <main className={styles.mainContent}>
                {/* System Header */}
                <div className={styles.systemHeader}>
                    <div className={styles.iconGroup}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                    </div>
                    <div className={styles.userProfile}>
                        <div className={styles.userAvatar}>S</div>
                        <div className={styles.userInfo}>
                            <span className={styles.userName}>Siddhartha Saw</span>
                            <span className={styles.userRole}>Admin</span>
                        </div>
                    </div>
                </div>

                {activeTab === 'Dashboard' && (
                    <>
                        <div className={styles.header}>
                            <div className={styles.headerLeft}>
                                <h1>Dashboard Overview</h1>
                                <p>Welcome back, Siddhartha Saw. Here's what's happening today.</p>
                            </div>
                            <div className={styles.headerRight}>
                                <button className={styles.actionBtnOutline}>Download Report</button>
                                <button className={styles.actionBtnPrimary}>Create Challenge</button>
                            </div>
                        </div>

                        <div className={styles.dashboardBody}>
                            <div className={styles.statsRow}>
                                <div className={styles.statCard}>
                                    <div className={styles.statHeader}>
                                        <div className={styles.statIconWrapper} style={{ backgroundColor: 'rgba(6, 182, 212, 0.1)', color: '#06b6d4' }}>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                        </div>
                                        <div className={`${styles.statBadge} ${styles.badgePos}`}>
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                                            12%
                                        </div>
                                    </div>
                                    <div className={styles.statTitle}>TOTAL USERS</div>
                                    <div className={styles.statValue}>46</div>
                                </div>
                                <div className={styles.statCard}>
                                    <div className={styles.statHeader}>
                                        <div className={styles.statIconWrapper} style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b' }}>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                                        </div>
                                        <div className={`${styles.statBadge} ${styles.badgePos}`}>
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                                            8.2%
                                        </div>
                                    </div>
                                    <div className={styles.statTitle}>ACTIVE ACCOUNTS</div>
                                    <div className={styles.statValue}>22</div>
                                </div>
                                <div className={styles.statCard}>
                                    <div className={styles.statHeader}>
                                        <div className={styles.statIconWrapper} style={{ backgroundColor: 'rgba(234, 179, 8, 0.1)', color: '#eab308' }}>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                                        </div>
                                        <div className={`${styles.statBadge} ${styles.badgePos}`}>
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                                            24%
                                        </div>
                                    </div>
                                    <div className={styles.statTitle}>TOTAL PROFIT PAYOUT</div>
                                    <div className={styles.statValue}>$0</div>
                                </div>
                                <div className={styles.statCard}>
                                    <div className={styles.statHeader}>
                                        <div className={styles.statIconWrapper} style={{ backgroundColor: 'rgba(234, 179, 8, 0.1)', color: '#eab308' }}>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline></svg>
                                        </div>
                                        <div className={`${styles.statBadge} ${styles.badgeNeg}`}>
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline></svg>
                                            4.5%
                                        </div>
                                    </div>
                                    <div className={styles.statTitle}>TOTAL DRAWDOWN</div>
                                    <div className={styles.statValue}>$0</div>
                                </div>
                            </div>

                            <div className={styles.middleRow}>
                                <div className={styles.card}>
                                    <div className={styles.cardHeader}>
                                        <h3 className={styles.cardTitle}>Equity Curve</h3>
                                        <select className={styles.filterSelect}>
                                            <option>Last 12 Months</option>
                                            <option>Last 30 Days</option>
                                            <option>Last 7 Days</option>
                                        </select>
                                    </div>
                                    <div className={styles.equityChartWrapper}>
                                        <svg width="100%" height="100%" viewBox="0 0 800 200" preserveAspectRatio="none">
                                            <defs>
                                                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="0%" stopColor="rgba(16, 185, 129, 0.2)" />
                                                    <stop offset="100%" stopColor="rgba(16, 185, 129, 0)" />
                                                </linearGradient>
                                            </defs>
                                            <line x1="0" y1="0" x2="800" y2="0" stroke="#374151" strokeWidth="0.5" strokeDasharray="4 4" />
                                            <line x1="0" y1="50" x2="800" y2="50" stroke="#374151" strokeWidth="0.5" strokeDasharray="4 4" />
                                            <line x1="0" y1="100" x2="800" y2="100" stroke="#374151" strokeWidth="0.5" strokeDasharray="4 4" />
                                            <line x1="0" y1="150" x2="800" y2="150" stroke="#374151" strokeWidth="0.5" strokeDasharray="4 4" />
                                            <line x1="0" y1="200" x2="800" y2="200" stroke="#374151" strokeWidth="0.5" />

                                            <text x="0" y="10" fill="#6b7280" fontSize="12" style={{ transform: 'translateY(-5px)' }}>$10000</text>
                                            <text x="0" y="60" fill="#6b7280" fontSize="12" style={{ transform: 'translateY(-5px)' }}>$7500</text>
                                            <text x="0" y="110" fill="#6b7280" fontSize="12" style={{ transform: 'translateY(-5px)' }}>$5000</text>
                                            <text x="0" y="160" fill="#6b7280" fontSize="12" style={{ transform: 'translateY(-5px)' }}>$2500</text>
                                            <text x="5" y="210" fill="#6b7280" fontSize="12" style={{ transform: 'translateY(-5px)' }}>$0</text>

                                            <text x="30" y="215" fill="#6b7280" fontSize="12">Jan</text>
                                            <text x="90" y="215" fill="#6b7280" fontSize="12">Feb</text>
                                            <text x="150" y="215" fill="#6b7280" fontSize="12">Mar</text>
                                            <text x="210" y="215" fill="#6b7280" fontSize="12">Apr</text>
                                            <text x="270" y="215" fill="#6b7280" fontSize="12">May</text>
                                            <text x="330" y="215" fill="#6b7280" fontSize="12">Jun</text>
                                            <text x="390" y="215" fill="#6b7280" fontSize="12">Jul</text>
                                            <text x="450" y="215" fill="#6b7280" fontSize="12">Aug</text>
                                            <text x="510" y="215" fill="#6b7280" fontSize="12">Sep</text>
                                            <text x="570" y="215" fill="#6b7280" fontSize="12">Oct</text>
                                            <text x="630" y="215" fill="#6b7280" fontSize="12">Nov</text>
                                            <text x="690" y="215" fill="#6b7280" fontSize="12">Dec</text>

                                            <path d="M30 60 Q 150 150 200 130 T 320 150 T 450 100 T 600 50 T 780 10 L 780 200 L 30 200 Z" fill="url(#chartGradient)" />
                                            <path d="M30 60 Q 150 150 200 130 T 320 150 T 450 100 T 600 50 T 780 10" fill="none" stroke="#10b981" strokeWidth="3" />
                                        </svg>
                                    </div>
                                </div>

                                <div className={styles.card} style={{ display: 'flex', flexDirection: 'column' }}>
                                    <div className={styles.cardHeader}>
                                        <h3 className={styles.cardTitle}>Challenge Status</h3>
                                    </div>
                                    <div className={styles.statusList} style={{ flex: 1 }}>
                                        <div className={styles.statusItem}>
                                            <div className={styles.statusInfo}>
                                                <div className={styles.statusIndicator} style={{ backgroundColor: '#06b6d4' }}></div>
                                                <span className={styles.statusLabel}>PASSED</span>
                                                <span className={styles.statusCount}>2</span>
                                            </div>
                                            <div className={styles.statusIconWrapper} style={{ backgroundColor: 'rgba(6, 182, 212, 0.1)', color: '#06b6d4' }}>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                            </div>
                                        </div>
                                        <div className={styles.statusItem}>
                                            <div className={styles.statusInfo}>
                                                <div className={styles.statusIndicator} style={{ backgroundColor: '#ef4444' }}></div>
                                                <span className={styles.statusLabel}>FAILED</span>
                                                <span className={styles.statusCount}>1</span>
                                            </div>
                                            <div className={styles.statusIconWrapper} style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', color: '#ef4444' }}>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                                            </div>
                                        </div>
                                        <div className={styles.statusItem}>
                                            <div className={styles.statusInfo}>
                                                <div className={styles.statusIndicator} style={{ backgroundColor: '#eab308' }}></div>
                                                <span className={styles.statusLabel}>ONGOING</span>
                                                <span className={styles.statusCount}>22</span>
                                            </div>
                                            <div className={styles.statusIconWrapper} style={{ backgroundColor: 'rgba(234, 179, 8, 0.1)', color: '#eab308' }}>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <button className={styles.actionBtnOutline} style={{ width: '100%', marginTop: 'auto', backgroundColor: '#2d2d35', border: 'none' }}>
                                        View Detailed Report
                                    </button>
                                </div>
                            </div>

                            <div className={styles.card}>
                                <div className={styles.cardHeader}>
                                    <h3 className={styles.cardTitle}>Latest Registrations</h3>
                                    <a href="#" className={styles.viewAllLink}>View All</a>
                                </div>
                                <div className={styles.tableContainer}>
                                    <table className={styles.dataTable}>
                                        <thead>
                                            <tr>
                                                <th>USER</th>
                                                <th>PLAN</th>
                                                <th>JOINED</th>
                                                <th>STATUS</th>
                                                <th style={{ textAlign: 'right' }}>ACTION</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {registrations.map((user, idx) => (
                                                <tr key={idx}>
                                                    <td>
                                                        <div className={styles.userCell}>
                                                            <div className={styles.tableAvatar} style={{ backgroundColor: user.avatarColor, color: '#064e3b' }}>
                                                                {user.name.charAt(0).toUpperCase()}
                                                            </div>
                                                            <div className={styles.nameCol}>
                                                                <span className={styles.primaryText}>{user.name}</span>
                                                                <span className={styles.secondaryText}>{user.email}</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td style={{ color: '#d1d5db' }}>{user.plan}</td>
                                                    <td style={{ color: '#d1d5db' }}>{user.joined}</td>
                                                    <td>
                                                        <span className={styles.statusPill}>{user.status}</span>
                                                    </td>
                                                    <td style={{ textAlign: 'right', color: '#6b7280', cursor: 'pointer' }}>
                                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {activeTab === 'Approvals' && (
                    <div className={styles.approvalsContainer}>
                        <div className={styles.approvalsHeader}>
                            <div className={styles.approvalsTitle}>
                                <h1>Approvals</h1>
                                <span className={styles.approvalsSubtitle}>Manage Challenge Completions</span>
                            </div>
                            <button className={styles.refreshBtn}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
                                Refresh
                            </button>
                        </div>

                        <div className={styles.tabsNav}>
                            <div className={`${styles.tabItem} ${styles.active}`}>
                                Phase 1 <span className={styles.tabCount}>6</span>
                            </div>
                            <div className={styles.tabItem}>
                                Phase 2 <span className={styles.tabCount}>1</span>
                            </div>
                            <div className={styles.tabItem}>
                                Funding <span className={styles.tabCount}>10</span>
                            </div>
                            <div className={styles.tabItem}>
                                History
                            </div>
                        </div>

                        <div className={styles.approvalsCard}>
                            <div className={styles.tableContainer}>
                                <table className={styles.approvalsTable}>
                                    <thead>
                                        <tr>
                                            <th>CHALLENGE ID</th>
                                            <th>USER</th>
                                            <th>TYPE</th>
                                            <th>PHASE</th>
                                            <th>PASSED AT</th>
                                            <th>ACTIONS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {approvalsData.map((row, idx) => (
                                            <tr key={idx}>
                                                <td className={styles.idCell}>{row.id}</td>
                                                <td>
                                                    <div className={styles.userCellData}>
                                                        <span className={styles.userName}>{row.name}</span>
                                                        <span className={styles.userEmail}>{row.email}</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={styles.typeData}>
                                                        <span className={styles.typeMain}>{row.type}</span>
                                                        <span className={styles.typeValue}>{row.value}</span>
                                                    </div>
                                                </td>
                                                <td className={styles.phaseData}>{row.phase}</td>
                                                <td className={styles.phaseData}>{row.passedAt}</td>
                                                <td>
                                                    <div className={styles.actionCell}>
                                                        <button className={styles.approveBtn}>
                                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                                            Approve
                                                        </button>
                                                        <button className={styles.rejectBtn}>
                                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                                                            Reject
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'Challenge Rules' && (
                    <div className={styles.approvalsContainer}>
                        <div className={styles.approvalsHeader} style={{ marginBottom: '1.5rem' }}>
                            <div>
                                <div className={styles.approvalsTitle}>
                                    <h1>Challenge Rules</h1>
                                    <span className={styles.approvalsSubtitle}>Dynamic Rules Engine</span>
                                </div>
                                <div className={styles.rulesHeaderDesc}>
                                    Configure trading rules for different challenge types and account sizes
                                </div>
                            </div>
                        </div>

                        <div className={styles.rulesStatsGrid}>
                            <div className={styles.rulesStatCard}>
                                <div className={styles.rulesStatHeader}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                                    Active Rules
                                </div>
                                <div className={styles.rulesStatValue}>0</div>
                            </div>
                            <div className={styles.rulesStatCard}>
                                <div className={styles.rulesStatHeader}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                    Templates
                                </div>
                                <div className={styles.rulesStatValue}>0</div>
                            </div>
                            <div className={styles.rulesStatCard}>
                                <div className={styles.rulesStatHeader}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                                    Total Rules
                                </div>
                                <div className={styles.rulesStatValue}>0</div>
                            </div>
                            <div className={styles.rulesStatCard}>
                                <div className={styles.rulesStatHeader}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                                    Account Sizes
                                </div>
                                <div className={styles.rulesStatValue}>0</div>
                            </div>
                        </div>

                        <div className={styles.tabsNav} style={{ marginBottom: '1.5rem' }}>
                            <div className={`${styles.tabItem} ${styles.active}`}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                                Rules
                            </div>
                            <div className={styles.tabItem}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                Templates
                            </div>
                            <div className={styles.tabItem}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                                Account Matrix
                            </div>
                        </div>

                        <div className={styles.rulesActionBar}>
                            <div className={styles.searchContainer}>
                                <svg className={styles.searchIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                <input type="text" className={styles.searchInput} placeholder="Search rules..." />
                            </div>
                            <div className={styles.actionButtons}>
                                <button className={styles.btnOrangeOutline}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path></svg>
                                    Recalculate Rules
                                </button>
                                <button className={styles.btnGrayOutline}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
                                    Refresh
                                </button>
                                <button className={styles.btnCyanOutline}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                                    Seed Data
                                </button>
                                <button className={styles.btnCyanSolid}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                    New Rule
                                </button>
                            </div>
                        </div>

                        <div className={styles.rulesTableContainer}>
                            <table className={styles.rulesTable}>
                                <thead>
                                    <tr>
                                        <th>Rule Name</th>
                                        <th>Challenge Type</th>
                                        <th>Account Size</th>
                                        <th>Phase</th>
                                        <th>Value</th>
                                        <th>Description</th>
                                        <th>Active</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colSpan={8} className={styles.emptyTableState}>
                                            No rules found. Click "New Rule" to create one.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {activeTab === 'Users' && (
                    <div className={styles.approvalsContainer}>
                        <div className={styles.approvalsHeader} style={{ marginBottom: '1.5rem' }}>
                            <div className={styles.headerSubtitle}>
                                <h1>Users</h1>
                                <span className={styles.headerDivider}>|</span>
                                <a href="#" className={styles.headerSubLink}>Manage Users</a>
                                <a href="#" className={styles.headerSubLink}>
                                    Need Help?
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                                </a>
                            </div>
                        </div>

                        {/* Stat Cards */}
                        <div className={styles.usersStatCards}>
                            <div className={styles.userStatCard}>
                                <div className={styles.userStatValue}>47</div>
                                <div className={styles.userStatLabel}>Total</div>
                            </div>
                            <div className={styles.userStatCard}>
                                <div className={styles.userStatValue}>0</div>
                                <div className={styles.userStatLabel}>Online</div>
                            </div>
                        </div>

                        {/* Action Bar */}
                        <div className={styles.usersActionBar}>
                            <button className={styles.btnGrayOutline}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
                                Refresh
                            </button>
                            <button className={styles.btnGrayOutline}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
                                Filter
                            </button>
                            <div className={styles.searchContainer} style={{ width: 320 }}>
                                <svg className={styles.searchIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                <input type="text" className={styles.searchInput} placeholder="Search by name or email" />
                            </div>
                            <div className={styles.usersRightActions}>
                                <button className={styles.gridIconBtn}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                </button>
                                <button className={styles.btnCyanSolid}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                    New
                                </button>
                                <button className={styles.btnGrayOutline}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                                    Export
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                </button>
                            </div>
                        </div>

                        {/* Users Table */}
                        <div className={styles.approvalsCard}>
                            <div className={styles.tableContainer}>
                                <table className={styles.usersTable}>
                                    <thead>
                                        <tr>
                                            <th className={styles.checkboxCell}><input type="checkbox" /></th>
                                            <th>Id</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Status</th>
                                            <th colSpan={2} style={{ textAlign: 'center', borderLeft: '1px solid #2d2d35' }}>Accounts</th>
                                            <th colSpan={2} style={{ textAlign: 'center', borderLeft: '1px solid #2d2d35' }}>Challenges</th>
                                            <th>Imp</th>
                                            <th>Tags</th>
                                            <th>Action</th>
                                        </tr>
                                        <tr style={{ fontSize: '0.7rem', color: '#6b7280' }}>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th className={styles.thBordered} style={{ paddingTop: '0.25rem', paddingBottom: '0.75rem' }}>Cur</th>
                                            <th style={{ paddingTop: '0.25rem', paddingBottom: '0.75rem' }}>Total</th>
                                            <th className={styles.thBordered} style={{ paddingTop: '0.25rem', paddingBottom: '0.75rem' }}>Cur</th>
                                            <th style={{ paddingTop: '0.25rem', paddingBottom: '0.75rem' }}>Total</th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { id: '7119d051-fab0-4c41-a314-42fd05913d75', name: 'Dinesh ghasal', email: 'mrdineshfx@gmail.com', status: 'Active', aCur: 0, aTotal: 0, cCur: 0, cTotal: 0 },
                                            { id: '28c2dc57-0ca1-41fc-b988-6b4826ed16ba', name: 'Abhishek Kumar', email: 'yoforepremium@gmail.com', status: 'Active', aCur: 0, aTotal: 0, cCur: 0, cTotal: 0 },
                                            { id: '2be8622e-fada-4383-8401-61f2dc253a2f', name: 'Abhishek Kumar', email: 'firkydocvcvst@gmail.com', status: 'Active', aCur: 0, aTotal: 0, cCur: 0, cTotal: 0 },
                                            { id: '2ea16744-7d5d-4065-b533-ced2b5182919', name: 'Arijit Nayak', email: 'mql5helpline@gmail.com', status: 'Active', aCur: 0, aTotal: 0, cCur: 0, cTotal: 0 },
                                            { id: '769f03ca-c367-4cad-ad6d-d86b008870bd', name: 'raj', email: 'spinfxasia@gmail.com', status: 'Active', aCur: 0, aTotal: 0, cCur: 0, cTotal: 0 },
                                            { id: '67967b95-adc5-41d5-a8df-2fe1c0ee5a57', name: 'Arijeet Nayak', email: 'ranjan.nayak1968@gmail.com', status: 'Active', aCur: 0, aTotal: 0, cCur: 0, cTotal: 0 },
                                            { id: '539511c1-583a-452e-bb61-bd2a454bb278', name: 'Archiman Das', email: 'dasarchisman2002@gmail.com', status: 'Active', aCur: 0, aTotal: 0, cCur: 0, cTotal: 0 },
                                            { id: '5b8bc136-9498-47f6-b27b-756737739746', name: 'Jhilik Saw', email: 'jhilik@gmail.com', status: 'Active', aCur: 1, aTotal: 1, cCur: 0, cTotal: 0 },
                                            { id: '902d56e8-4548-4408-9b3c-9380e7c8f946', name: 'Vaishlai Mam', email: 'vaishalimam@gmail.com', status: 'Banned', aCur: 0, aTotal: 0, cCur: 0, cTotal: 0 },
                                            { id: '9ca604e3-4156-48da-8f86-41509e896c35', name: 'Ayush', email: 'ayushoffice002@gmail.com', status: 'Active', aCur: 1, aTotal: 1, cCur: 0, cTotal: 0 },
                                        ].map((user, idx) => (
                                            <tr key={idx}>
                                                <td className={styles.checkboxCell}><input type="checkbox" /></td>
                                                <td className={styles.userIdCell}>{user.id}</td>
                                                <td className={styles.userNameCell}>{user.name}</td>
                                                <td>
                                                    <div className={styles.userEmailCell}>
                                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                                        {user.email}
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className={user.status === 'Banned' ? styles.statusBadgeBanned : styles.statusBadgeActive}>{user.status}</span>
                                                </td>
                                                <td style={{ borderLeft: '1px solid #2d2d35', color: '#d1d5db', textAlign: 'center' }}>{user.aCur}</td>
                                                <td style={{ color: '#d1d5db', textAlign: 'center' }}>{user.aTotal}</td>
                                                <td style={{ borderLeft: '1px solid #2d2d35', color: '#d1d5db', textAlign: 'center' }}>{user.cCur}</td>
                                                <td style={{ color: '#d1d5db', textAlign: 'center' }}>{user.cTotal}</td>
                                                <td><button className={styles.goBtn}>GO</button></td>
                                                <td style={{ color: '#6b7280', fontSize: '0.75rem' }}>—</td>
                                                <td>
                                                    <div className={styles.actionIconsCell}>
                                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line></svg>
                                                        {user.status === 'Banned' ? (
                                                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                                                        ) : (
                                                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg>
                                                        )}
                                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className={styles.tableFooter}>
                                <span>Showing <strong>1 to 10</strong> of <strong>47</strong> entries</span>
                                <div className={styles.pagination}>
                                    <select className={styles.perPageSelect}>
                                        <option>10</option>
                                        <option>25</option>
                                        <option>50</option>
                                    </select>
                                    <button className={styles.pageBtn}>
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
                                    </button>
                                    <button className={`${styles.pageBtn} ${styles.activePage}`}>1</button>
                                    <button className={styles.pageBtn}>2</button>
                                    <button className={styles.pageBtn}>3</button>
                                    <button className={styles.pageBtn}>
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'Plans' && (
                    <div className={styles.approvalsContainer}>
                        {/* Header */}
                        <div className={styles.approvalsHeader} style={{ marginBottom: '1.5rem' }}>
                            <div className={styles.headerSubtitle}>
                                <h1>Plans</h1>
                                <span className={styles.headerDivider}>|</span>
                                <span style={{ color: '#d1d5db', fontSize: '0.875rem' }}>Trading Plans and Phases</span>
                                <a href="#" className={styles.headerSubLink}>
                                    Need Help?
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                                </a>
                            </div>
                            <div style={{ display: 'flex', gap: '0.75rem' }}>
                                <button className={styles.btnCyanSolid}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                    New
                                </button>
                                <button className={styles.reorderBtn}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                                    Reorder Phases
                                </button>
                            </div>
                        </div>

                        {/* Search bar */}
                        <div style={{ marginBottom: '1.5rem' }}>
                            <div className={styles.searchContainer} style={{ width: 320 }}>
                                <svg className={styles.searchIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                <input type="text" className={styles.searchInput} placeholder="Search" />
                            </div>
                        </div>

                        {/* Plans Table */}
                        <div className={styles.approvalsCard}>
                            <div className={styles.tableContainer}>
                                <table className={styles.usersTable}>
                                    <thead>
                                        <tr>
                                            <th className={styles.checkboxCell}><input type="checkbox" /></th>
                                            <th>Id</th>
                                            <th>Title</th>
                                            <th>Currency</th>
                                            <th>Price</th>
                                            <th>Enabled?</th>
                                            <th>Public?</th>
                                            <th>Phases Count</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { id: 6, title: '2-Step Challenge', price: 36, enabled: true, public: true },
                                            { id: 5, title: '1-Step Challenge', price: 59, enabled: true, public: true },
                                            { id: 7, title: 'Instant Funded', price: 20, enabled: false, public: true },
                                            { id: 8, title: 'Instant Funding', price: 50, enabled: true, public: true },
                                            { id: 9, title: 'Free Trial', price: 0, enabled: false, public: true },
                                        ].map((plan) => (
                                            <tr key={plan.id}>
                                                <td className={styles.checkboxCell}><input type="checkbox" /></td>
                                                <td style={{ color: '#d1d5db' }}>{plan.id}</td>
                                                <td style={{ color: '#ffffff', fontWeight: 600 }}>{plan.title}</td>
                                                <td>
                                                    <div className={styles.currencyCell}>
                                                        <span className={styles.currencyBox}>$</span>
                                                    </div>
                                                </td>
                                                <td style={{ color: '#d1d5db' }}>{plan.price}</td>
                                                <td>
                                                    <label className={styles.toggleSwitch}>
                                                        <input type="checkbox" defaultChecked={plan.enabled} />
                                                        <span className={styles.toggleSlider}></span>
                                                    </label>
                                                </td>
                                                <td>
                                                    <label className={styles.toggleSwitch}>
                                                        <input type="checkbox" defaultChecked={plan.public} />
                                                        <span className={styles.toggleSlider}></span>
                                                    </label>
                                                </td>
                                                <td>
                                                    <div className={styles.phasesCount}>
                                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                                        0
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={styles.actionIconsCell}>
                                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6l-1 14H6L5 6"></path><path d="M10 11v6M14 11v6"></path><path d="M9 6V4h6v2"></path></svg>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className={styles.tableFooter}>
                                <span>Showing <strong>1 to 5</strong> of <strong>5</strong> entries</span>
                                <div className={styles.pagination}>
                                    <select className={styles.perPageSelect}>
                                        <option>100</option>
                                        <option>25</option>
                                        <option>10</option>
                                    </select>
                                    <button className={styles.pageBtn}>
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
                                    </button>
                                    <button className={`${styles.pageBtn} ${styles.activePage}`}>1</button>
                                    <button className={styles.pageBtn}>
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'Accounts' && (
                    <div className={styles.approvalsContainer}>
                        {/* Header */}
                        <div className={styles.approvalsHeader} style={{ marginBottom: '1.5rem' }}>
                            <div className={styles.headerSubtitle}>
                                <h1>Accounts</h1>
                                <span className={styles.headerDivider}>|</span>
                                <span style={{ color: '#d1d5db', fontSize: '0.875rem' }}>Users with MT5 Accounts</span>
                                <a href="#" className={styles.headerSubLink}>
                                    Need Help?
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                                </a>
                            </div>
                        </div>

                        {/* Action Bar */}
                        <div className={styles.accountsSearchContainer}>
                            <div className={styles.searchWrapper}>
                                <button className={styles.btnGrayOutline}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
                                    Refresh
                                </button>
                                <div className={styles.searchContainer} style={{ width: 320 }}>
                                    <svg className={styles.searchIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                    <input type="text" className={styles.searchInput} placeholder="Search users by name or email..." />
                                </div>
                            </div>
                            <button className={styles.newAccountBtn}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                New Account
                            </button>
                        </div>

                        {/* Users Overview Table */}
                        <div className={styles.overviewHeader}>USERS OVERVIEW</div>
                        <div className={styles.approvalsCard}>
                            <div className={styles.tableContainer}>
                                <table className={`${styles.usersTable} ${styles.accountsTable}`}>
                                    <thead>
                                        <tr>
                                            <th>User</th>
                                            <th>Email</th>
                                            <th style={{ textAlign: 'center' }}>Total Accounts</th>
                                            <th style={{ textAlign: 'center' }}>Free Trial</th>
                                            <th style={{ textAlign: 'center' }}>Paid</th>
                                            <th style={{ textAlign: 'center' }}>Funded</th>
                                            <th style={{ textAlign: 'center' }}>Archived</th>
                                            <th>Joined</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { user: 'Siddhartha Test', email: 'sawsiddhartha@gmail.com', total: 28, trial: 0, paid: 1, funded: 4, archived: 0, joined: '2/2/2026' },
                                            { user: 'Siddhartha Saw', email: 'siddharthasaw626@gmail.com', total: 8, trial: 1, paid: 0, funded: 0, archived: 0, joined: '1/30/2026' },
                                            { user: 'Arijeet Nayak', email: 'yoforepremium@gmail.com', total: 4, trial: 1, paid: 0, funded: 0, archived: 0, joined: '2/10/2026' },
                                            { user: 'Rabi Rajput', email: 'rabidhonii09@gmail.com', total: 3, trial: 1, paid: 0, funded: 0, archived: 0, joined: '2/10/2026' },
                                            { user: 'Animash Sing', email: 'singhanimash218@gmail.com', total: 2, trial: 1, paid: 0, funded: 0, archived: 0, joined: '2/4/2026' },
                                            { user: 'Passed User 5', email: 'passed1770018873647_5@yopips.com', total: 2, trial: 0, paid: 0, funded: 0, archived: 0, joined: '2/2/2026' },
                                            { user: 'Passed User 4', email: 'passed1770018873644_4@yopips.com', total: 2, trial: 0, paid: 0, funded: 0, archived: 0, joined: '2/2/2026' },
                                            { user: 'Jhilik Saw', email: 'jhilik@gmail.com', total: 1, trial: 1, paid: 0, funded: 0, archived: 0, joined: '2/23/2026' },
                                            { user: 'Ayush', email: 'ayushoffice002@gmail.com', total: 1, trial: 1, paid: 0, funded: 0, archived: 0, joined: '2/10/2026' },
                                            { user: 'Talalul bhai', email: 'talalul@gmail.com', total: 1, trial: 1, paid: 0, funded: 0, archived: 0, joined: '2/10/2026' },
                                            { user: 'Abhishek Kumar', email: 'firkydoc@gmail.com', total: 1, trial: 1, paid: 0, funded: 0, archived: 0, joined: '2/10/2026' },
                                            { user: 'Amna Ahmad', email: 'amna@gmail.com', total: 1, trial: 1, paid: 0, funded: 0, archived: 0, joined: '2/10/2026' },
                                            { user: 'Passed User 3', email: 'passed1770018873641_3@yopips.com', total: 1, trial: 0, paid: 0, funded: 0, archived: 0, joined: '2/2/2026' },
                                            { user: 'Passed User 2', email: 'passed1770018873520_2@yopips.com', total: 1, trial: 0, paid: 0, funded: 0, archived: 0, joined: '2/2/2026' },
                                            { user: 'Passed User 1', email: 'passed1770018873600_1@yopips.com', total: 1, trial: 0, paid: 0, funded: 0, archived: 0, joined: '2/2/2026' }
                                        ].map((item, idx) => (
                                            <tr key={idx}>
                                                <td style={{ color: '#ffffff', fontWeight: 600 }}>{item.user}</td>
                                                <td style={{ color: '#9ca3af' }}>{item.email}</td>
                                                <td style={{ textAlign: 'center' }}>
                                                    <span className={`${styles.countBadge} ${styles.badgeCyan}`}>{item.total}</span>
                                                </td>
                                                <td style={{ textAlign: 'center' }}>
                                                    <span className={`${styles.countBadge} ${styles.badgeBlue}`}>{item.trial}</span>
                                                </td>
                                                <td style={{ textAlign: 'center' }}>
                                                    <span className={`${styles.countBadge} ${styles.badgePurple}`}>{item.paid}</span>
                                                </td>
                                                <td style={{ textAlign: 'center' }}>
                                                    <span className={`${styles.countBadge} ${styles.badgeGreen}`}>{item.funded}</span>
                                                </td>
                                                <td style={{ textAlign: 'center' }}>
                                                    <span className={`${styles.countBadge} ${styles.badgeGray}`}>{item.archived}</span>
                                                </td>
                                                <td className={styles.joinedCell}>{item.joined}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className={styles.tableFooter}>
                                <span>Showing <strong>1 to 15</strong> of <strong>47</strong> entries</span>
                                <div className={styles.pagination}>
                                    <select className={styles.perPageSelect}>
                                        <option>100</option>
                                        <option>50</option>
                                        <option>25</option>
                                        <option>10</option>
                                    </select>
                                    <button className={styles.pageBtn}>
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
                                    </button>
                                    <button className={`${styles.pageBtn} ${styles.activePage}`}>1</button>
                                    <button className={styles.pageBtn}>
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'Trading Objectives' && (
                    <div className={styles.approvalsContainer}>
                        {/* Header */}
                        <div className={styles.tradingObjHeader}>
                            <div className={styles.tradingObjTitle}>
                                <h1>Trading Objectives</h1>
                                <span className={styles.tradingObjSubtitle}>Real-Time Monitor</span>
                            </div>
                            <div className={styles.tradingObjActions}>
                                <button className={styles.liveUpdatesBtn}>
                                    <span className={styles.liveDot}></span>
                                    Live Updates
                                </button>
                                <button className={styles.filtersBtn}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
                                    Filters
                                </button>
                                <button className={styles.filtersBtn} style={{ padding: '0.45rem 0.65rem' }}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
                                </button>
                            </div>
                        </div>

                        {/* Table */}
                        <div className={styles.approvalsCard}>
                            <div className={styles.tableContainer}>
                                <table className={`${styles.usersTable} ${styles.objTable}`}>
                                    <thead>
                                        <tr>
                                            <th><input type="checkbox" className={styles.checkboxCell} /></th>
                                            <th>Trader Profile</th>
                                            <th>Phase</th>
                                            <th>Max Daily Loss</th>
                                            <th>Max Loss</th>
                                            <th>Profit Target</th>
                                            <th>Days</th>
                                            <th>Rules</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { name: 'Siddhartha Saw', id: '#889228113', type: '10K Trial', limit: 500, maxLimit: 1000, target: 100, pct: 0 },
                                            { name: 'Siddhartha Test', id: '#900668', type: '5K Two_step', limit: 250, maxLimit: 500, target: 100, pct: 0 },
                                            { name: 'Siddhartha Test', id: '#900668', type: '5K Two_step', limit: 250, maxLimit: 500, target: 500, pct: 0 },
                                            { name: 'Siddhartha Saw', id: '#900681', type: '5K Two_step', limit: 250, maxLimit: 500, target: 100, pct: 0 },
                                            { name: 'Siddhartha Test', id: '#900666', type: '2K Two_step', limit: 100, maxLimit: 200, target: 200, pct: 0 },
                                            { name: 'Siddhartha Test', id: '#900668', type: '5K Two_step', limit: 250, maxLimit: 500, target: 500, pct: 0 },
                                            { name: 'Siddhartha Test', id: '#900665', type: '2K Two_step', limit: 100, maxLimit: 200, target: 200, pct: 0 },
                                        ].map((row, i) => (
                                            <tr key={i}>
                                                <td><input type="checkbox" className={styles.checkboxCell} /></td>
                                                <td>
                                                    <div className={styles.traderName}>{row.name}</div>
                                                    <div className={styles.traderId}>{row.id} &nbsp;•&nbsp; {row.type}</div>
                                                </td>
                                                <td>
                                                    <span className={styles.phaseBadge}>PHASE 1</span>
                                                </td>
                                                {/* Max Daily Loss */}
                                                <td>
                                                    <div className={styles.metricCell}>
                                                        <span className={styles.metricValue}>$0.00</span>
                                                        <div className={styles.progressTrack}>
                                                            <div className={styles.progressFill} style={{ width: `${row.pct}%` }}></div>
                                                        </div>
                                                        <span className={styles.metricLimit}>Limit: ${row.limit}</span>
                                                    </div>
                                                </td>
                                                {/* Max Loss */}
                                                <td>
                                                    <div className={styles.metricCell}>
                                                        <span className={styles.metricValue}>$0.00</span>
                                                        <div className={styles.progressTrack}>
                                                            <div className={styles.progressFill} style={{ width: `${row.pct}%` }}></div>
                                                        </div>
                                                        <span className={styles.metricLimit}>Limit: ${row.maxLimit}</span>
                                                    </div>
                                                </td>
                                                {/* Profit Target */}
                                                <td>
                                                    <div className={styles.metricCell}>
                                                        <span className={styles.metricValue}>$0.00</span>
                                                        <div className={styles.progressTrack}>
                                                            <div className={styles.progressFill} style={{ width: `${row.pct}%` }}></div>
                                                        </div>
                                                        <span className={styles.metricLimit}>Target: ${row.target}</span>
                                                    </div>
                                                </td>
                                                {/* Days */}
                                                <td>
                                                    <div className={styles.daysCell}>
                                                        <span className={styles.daysValue}>0</span>
                                                        <span className={styles.daysMin}>Min: 30</span>
                                                    </div>
                                                </td>
                                                {/* Rules */}
                                                <td>
                                                    <div className={styles.rulesCell}>
                                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                                    </div>
                                                </td>
                                                {/* Actions */}
                                                <td>
                                                    <button className={styles.moreBtn}>···</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'Helpdesk' && (
                    <div className={styles.approvalsContainer}>
                        {/* Header */}
                        <div className={styles.helpdeskHeader}>
                            <div>
                                <div className={styles.helpdeskTitleRow}>
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                                    <h1>Helpdesk Admin</h1>
                                </div>
                                <div className={styles.helpdeskSubtitle}>Manage and resolve user support tickets</div>
                            </div>
                            <button className={styles.filtersBtn} style={{ padding: '0.45rem 0.65rem', marginTop: '4px' }}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
                            </button>
                        </div>

                        {/* Filter Bar */}
                        <div className={styles.helpdeskFilterBar}>
                            <div className={styles.filterGroup}>
                                <span className={styles.filterLabel}>Status</span>
                                <select className={styles.filterSelect}>
                                    <option>All Status</option>
                                    <option>Open</option>
                                    <option>Replied</option>
                                    <option>Closed</option>
                                </select>
                            </div>
                            <div className={styles.filterGroup}>
                                <span className={styles.filterLabel}>Priority</span>
                                <select className={styles.filterSelect}>
                                    <option>All Priorities</option>
                                    <option>High</option>
                                    <option>Medium</option>
                                    <option>Low</option>
                                </select>
                            </div>
                        </div>

                        {/* Tickets Table */}
                        <div className={styles.approvalsCard}>
                            <div className={styles.tableContainer}>
                                <table className={styles.usersTable}>
                                    <thead>
                                        <tr>
                                            <th>Ticket ID</th>
                                            <th>Subject</th>
                                            <th>User</th>
                                            <th>Status</th>
                                            <th>Priority</th>
                                            <th>Last Updated</th>
                                            <th style={{ textAlign: 'right' }}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { id: '#TKT-341371', subject: 'helo team', name: 'Siddhartha Test', email: 'sawsiddhartha@gmail.com', status: 'OPEN', updated: '2/18/2026, 5:57:58 PM' },
                                            { id: '#TKT-416508', subject: 'xgtdtrhyth', name: 'Siddhartha Test', email: 'sawsiddhartha@gmail.com', status: 'REPLIED', updated: '2/18/2026, 5:46:44 PM' },
                                            { id: '#TKT-829264', subject: 'ghtyhjythjdry', name: 'Siddhartha Saw', email: 'siddharthasaw626@gmail.com', status: 'REPLIED', updated: '2/4/2026, 7:49:35 AM' },
                                        ].map((ticket, i) => (
                                            <tr key={i}>
                                                <td className={styles.ticketId}>{ticket.id}</td>
                                                <td style={{ color: '#e5e7eb', fontWeight: 500 }}>{ticket.subject}</td>
                                                <td>
                                                    <div className={styles.userCell}>
                                                        <span className={styles.userCellName}>{ticket.name}</span>
                                                        <span className={styles.userCellEmail}>{ticket.email}</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    {ticket.status === 'OPEN'
                                                        ? <span className={styles.ticketStatusOpen}>OPEN</span>
                                                        : <span className={styles.ticketStatusReplied}>REPLIED</span>
                                                    }
                                                </td>
                                                <td><span className={styles.priorityHigh}>High</span></td>
                                                <td className={styles.lastUpdated}>{ticket.updated}</td>
                                                <td style={{ textAlign: 'right' }}>
                                                    <button className={styles.viewBtn}>
                                                        View
                                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'Contest Programs' && (
                    <div className={styles.approvalsContainer}>
                        {/* Header */}
                        <div className={styles.approvalsHeader} style={{ marginBottom: '1.5rem' }}>
                            <div className={styles.headerSubtitle}>
                                <h1>Contest Programs</h1>
                                <span className={styles.headerDivider}>|</span>
                                <span style={{ color: '#d1d5db', fontSize: '0.875rem' }}>Contest Programs and Conditions</span>
                                <a href="#" className={styles.headerSubLink}>
                                    Need Help?
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                                </a>
                            </div>
                            <button className={styles.btnCyanSolid}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                New
                            </button>
                        </div>

                        {/* Search */}
                        <div style={{ marginBottom: '1.5rem' }}>
                            <div className={styles.searchContainer} style={{ width: 320 }}>
                                <svg className={styles.searchIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                <input type="text" className={styles.searchInput} placeholder="Search" />
                            </div>
                        </div>

                        {/* Table */}
                        <div className={styles.approvalsCard}>
                            <div className={styles.tableContainer}>
                                <table className={styles.usersTable}>
                                    <thead>
                                        <tr>
                                            <th className={styles.checkboxCell}><input type="checkbox" /></th>
                                            <th>Id</th>
                                            <th>Title</th>
                                            <th>Price</th>
                                            <th>Public?</th>
                                            <th>Conditions</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* No data shown in screenshot — empty state */}
                                        <tr>
                                            <td colSpan={7} style={{ textAlign: 'center', color: '#6b7280', padding: '2rem', fontSize: '0.875rem' }}>
                                                No contest programs found.
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className={styles.tableFooter}>
                                <span>Showing <strong>1 to 2</strong> of <strong>2</strong> entries</span>
                                <div className={styles.pagination}>
                                    <select className={styles.perPageSelect}>
                                        <option>100</option>
                                        <option>25</option>
                                        <option>10</option>
                                    </select>
                                    <button className={styles.pageBtn}>
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
                                    </button>
                                    <button className={`${styles.pageBtn} ${styles.activePage}`}>1</button>
                                    <button className={styles.pageBtn}>
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'Coupons' && (
                    <div className={styles.approvalsContainer}>
                        {/* Header */}
                        <div className={styles.couponHeader}>
                            <div className={styles.couponTitle}>
                                <h1>Coupon Management</h1>
                                <div className={styles.couponSubtitle}>
                                    Create <span>and</span> manage <span>discount</span> coupons
                                </div>
                            </div>
                            <button className={styles.createCouponBtn}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                Create Coupon
                            </button>
                        </div>

                        {/* Search */}
                        <div className={styles.couponSearchBar}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                            <input type="text" placeholder="Search coupons..." />
                        </div>

                        {/* Table */}
                        <div className={styles.approvalsCard}>
                            <div className={styles.tableContainer}>
                                <table className={styles.usersTable}>
                                    <thead>
                                        <tr>
                                            <th>Code</th>
                                            <th>Discount</th>
                                            <th>Status</th>
                                            <th>Usage</th>
                                            <th>Validity</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { code: 'YOPIPS100', discount: '100%', usage: '0 / ∞', validFrom: '2/18/2026', validTill: null },
                                            { code: 'YOPIPS30', discount: '30%', usage: '0 / ∞', validFrom: '2/18/2026', validTill: '4/18/2026' },
                                        ].map((coupon, i) => (
                                            <tr key={i}>
                                                <td>
                                                    <div className={styles.couponCodeCell}>
                                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
                                                        {coupon.code}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={styles.discountCell}>
                                                        <span className={styles.discountIcon}>%</span>
                                                        {coupon.discount}
                                                    </div>
                                                </td>
                                                <td><span className={styles.couponActive}>ACTIVE</span></td>
                                                <td className={styles.usageCell}>{coupon.usage}</td>
                                                <td>
                                                    <div className={styles.validityCell}>
                                                        <div>From: {coupon.validFrom}</div>
                                                        {coupon.validTill && <div>Till: {coupon.validTill}</div>}
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={styles.actionIconsCell}>
                                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6l-1 14H6L5 6"></path><path d="M10 11v6M14 11v6"></path><path d="M9 6V4h6v2"></path></svg>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'Payment Transactions' && (
                    <div className={styles.approvalsContainer}>
                        {/* Header */}
                        <div className={styles.approvalsHeader} style={{ marginBottom: '1.25rem' }}>
                            <div className={styles.headerSubtitle}>
                                <h1>Payment Transactions</h1>
                                <span className={styles.headerDivider}>|</span>
                                <span style={{ color: '#d1d5db', fontSize: '0.875rem' }}>Real-time Payment Log</span>
                                <a href="#" className={styles.headerSubLink}>
                                    Need Help?
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                                </a>
                            </div>
                        </div>

                        {/* Action Bar */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <button className={styles.btnGrayOutline}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
                                    Refresh
                                </button>
                                <button className={styles.filtersBtn}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
                                    Filters
                                </button>
                                <button className={styles.filtersBtn}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                                    Export
                                </button>
                            </div>
                            <div className={styles.searchContainer} style={{ width: 260 }}>
                                <svg className={styles.searchIcon} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                <input type="text" className={styles.searchInput} placeholder="Search by User, Txn ID..." />
                            </div>
                        </div>

                        {/* Transactions Table */}
                        <div className={styles.approvalsCard}>
                            <div className={styles.tableContainer}>
                                <table className={styles.usersTable}>
                                    <thead>
                                        <tr>
                                            <th className={styles.checkboxCell}><input type="checkbox" /></th>
                                            <th>User</th>
                                            <th>Plan</th>
                                            <th>Gateway</th>
                                            <th>Amount</th>
                                            <th>Txn ID / Order ID</th>
                                            <th>Status</th>
                                            <th>Date</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { user: 'Trader', email: 'user@example.com', plan: 'one_step', planType: 'Challenge', amount: 319.00, orderId: 'ORDER_1771697895080_16340b6-3fed-4d23-b43e-a001617571e', status: 'PENDING', date: '2/27/2026, 2:46:28 PM' },
                                            { user: 'Abhishek Kumar', email: 'yoforepremium@gmail.com', plan: 'two_step', planType: 'Challenge', amount: 289.00, orderId: 'ORDER_1771711764283_226e41-fff-b1fc-4f6-188-6bdb2e2417be4', status: 'PENDING', date: '2/27/2026, 12:55:24 PM' },
                                            { user: 'Abhishek Kumar', email: 'firkydocvcvst@gmail.com', plan: 'instant', planType: 'Challenge', amount: 850.00, orderId: 'ORDER_1771710861201_2e3832b-1b04-4338-8497-d5130cc2c807', status: 'PENDING', date: '2/27/2026, 12:46:33 PM' },
                                            { user: 'Siddhartha Test', email: 'sawsiddhartha@gmail.com', plan: 'two_step', planType: 'Challenge', amount: 125.00, orderId: 'ORDER_1771619538840_0bba397a-5d3e-4d54-a424-92c31e851711', status: 'PENDING', date: '2/26/2026, 5:24:45 PM' },
                                            { user: 'Talalul bhai', email: 'talalul@gmail.com', plan: 'one_step', planType: 'Challenge', amount: 32.00, orderId: 'ORDER_1771490475814_ff0a4377562_df5c41b-90a1-4c15', status: 'PENDING', date: '2/24/2026, 2:44:47 PM' },
                                            { user: 'Siddhartha Test', email: 'sawsiddhartha@gmail.com', plan: 'two_step', planType: 'Challenge', amount: 70.00, orderId: 'ORDER_1771149788062_5f8a1b-b7de-432a-c1b-44-9638-518d43470a1', status: 'PENDING', date: '2/19/2026, 6:48:15 PM' },
                                            { user: 'Siddhartha Test', email: 'sawsiddhartha@gmail.com', plan: 'one_step', planType: 'Challenge', amount: 80.00, orderId: 'ORDER_1771086252001_a8c-31ec-4a-e-b3a8-0c271f34d8c3', status: 'PENDING', date: '2/19/2026, 6:43:51 AM' },
                                        ].map((tx, i) => (
                                            <tr key={i}>
                                                <td className={styles.checkboxCell}><input type="checkbox" /></td>
                                                <td>
                                                    <div className={styles.userCell}>
                                                        <span className={styles.userCellName}>{tx.user}</span>
                                                        <span className={styles.userCellEmail}>{tx.email}</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={styles.txnPlanCell}>
                                                        <span className={styles.txnPlanName}>{tx.plan}</span>
                                                        <span className={styles.txnPlanType}>{tx.planType}</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={styles.txnGatewayCell}>
                                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                                                        Coinpayments
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={styles.txnAmountCell}>
                                                        {tx.amount.toFixed(2)}<br />
                                                        <span className={styles.txnAmountUnit}>USD</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={styles.txnOrderId}>{tx.orderId}</div>
                                                </td>
                                                <td><span className={styles.txnPending}>PENDING</span></td>
                                                <td>
                                                    <div className={styles.txnDateCell}>
                                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                                        {tx.date}
                                                    </div>
                                                </td>
                                                <td>
                                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" style={{ cursor: 'pointer' }}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
