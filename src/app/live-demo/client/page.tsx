'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './client.module.css';

export default function ClientDashboardPage() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('social');
    const [oneClickTrading, setOneClickTrading] = useState(false);
    const [tradingView, setTradingView] = useState(true);

    // EXACT DATA FROM SCREENSHOT
    const marketData = [
        { symbol: 'XAUEUR', desc: 'Gold (US$) / Euro', sell: '3,621.85', buy: '3,622.83', change: '-0.05%', high: '3,634.85', low: '3,598.85', flag: 'eu' },
        { symbol: 'XAUINR', desc: 'Gold / Indian Rupee', sell: '381,050.5', buy: '381,060.5', change: '+0.12%', high: '382,200.2', low: '378,150.2', flag: 'in' },
        { symbol: 'XAUTRY', desc: 'Gold (US$) / Turkish Lira', sell: '179,352.73', buy: '179,353.23', change: '+0.50%', high: '180,012.68', low: '178,050.97', flag: 'tr' },
        { symbol: 'XAUUSD', desc: 'GOLD (USD)', sell: '4,224.91', buy: '4,225.57', change: '-0.61%', high: '4,240.54', low: '4,194.39', flag: 'us' },
        { symbol: 'XAUUSD.L', desc: 'GOLD (USD)', sell: '4,224.4', buy: '4,224.6', change: '+0.10%', high: '4,240.8', low: '4,194.8', flag: 'us' },
    ];

    const socialData = [
        { name: 'axia402', return: '235%', copiers: 14 },
        { name: 'DarrenMacken...', return: '2872%', copiers: 28 },
        { name: 'rich12342222', return: '115%', copiers: 3 },
        { name: 'nmmlkkjkj', return: '103%', copiers: 1 },
        { name: 'aplaglup', return: '86%', copiers: 0 },
        { name: 'Richard546123', return: '100%', copiers: 1 },
        { name: 'ghgyy123', return: '94%', copiers: 1 },
        { name: 'Khalid514', return: '91%', copiers: 1 },
        { name: 'Terry522', return: '78%', copiers: 0 },
        { name: 'Fawcett500', return: '67%', copiers: 0 },
        { name: 'AHT23', return: '58%', copiers: 0 },
        { name: 'Sweetbookss', return: '57%', copiers: 0 },
        { name: 'epiphimothely', return: '47%', copiers: 0 },
        { name: 'CheaterIslots.it', return: '121%', copiers: 1 },
        { name: 'Kuna-2055', return: '343%', copiers: 34 },
    ];

    const signalsData = [
        {
            pair: 'GBPUSD',
            type: 'Buy',
            timeFrame: 'Intraday',
            target: '1.33673',
            timeAgo: '1h 34m ago',
            duration: 'in 6d 2h 37m',
            description: 'GBPUSD broke through the resistance level. Rise to 1.3367 is expected to happen.'
        },
        {
            pair: 'EURJPY',
            type: 'Buy',
            timeFrame: 'Intraday',
            target: '181.995',
            timeAgo: '3h 35m ago',
            duration: 'in 5d 14h 37m',
            description: 'Symmetrical triangle on EURJPY chart is broken upward. Rise to resistance level at 181.995 is expected to happen.'
        },
        {
            pair: 'GBPCAD',
            type: 'Sell',
            timeFrame: 'Intraday',
            target: '1.83953',
            timeAgo: '5h 48m ago',
            duration: 'in 19h 37m',
            description: 'GBPCAD bounced off the bearish trendline. GBPCAD bounced off the resistance level. Decline to support level at 1.83953 is expected to happen.'
        },
        {
            pair: 'XAUUSD',
            type: 'Sell',
            timeFrame: 'Intraday',
            target: '4,157.0',
            timeAgo: '8h 39m ago',
            duration: 'in 1h 37m',
            description: 'Gold bounced off the upper boundary of descending channel. Decline to 4157 is expected to happen.'
        },
        {
            pair: 'AUDUSD',
            type: 'Buy',
            timeFrame: 'Intraday',
            target: '0.64250',
            timeAgo: '11h 22m ago',
            duration: 'in 4d 8h 15m',
            description: 'AUDUSD broke through the resistance level and is expected to rise to 0.64250.'
        },
    ];

    return (
        <div className={styles.container}>
            {/* Left Sidebar */}
            <aside className={styles.sidebar}>
                <div className={styles.menuIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
                </div>

                <div className={styles.sidebarNav}>
                    <div className={styles.sidebarItem}>
                        <div className={styles.sidebarIcon}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                        </div>
                        Home
                    </div>

                    <div className={`${styles.sidebarItem} ${styles.sidebarItemActive}`} style={{ background: '#f3f4f6', color: '#333', fontWeight: '500' }}>
                        <div className={styles.sidebarIcon}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /><path d="M21 5c0 1.66-4 3-9 3s-9-1.34-9-3" /></svg>
                        </div>
                        Funds
                    </div>

                    <div className={styles.sidebarItem}>
                        <div className={styles.sidebarIcon}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4" /><path d="M4 6v12c0 1.1.9 2 2 2h14v-4" /><path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z" /></svg>
                        </div>
                        Deposit
                    </div>

                    <div className={styles.sidebarItem}>
                        <div className={styles.sidebarIcon}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="2" /><circle cx="12" cy="12" r="2" /><path d="M6 12h.01M18 12h.01" /></svg>
                        </div>
                        Withdraw
                    </div>

                    <div className={styles.sidebarItem}>
                        <div className={styles.sidebarIcon}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><polyline points="17 11 19 13 23 9" /></svg>
                        </div>
                        Refer & earn
                    </div>

                    <div className={styles.sidebarItem}>
                        <div className={styles.sidebarIcon}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                        </div>
                        Economic Calendar
                    </div>

                    <div className={styles.sidebarItem} style={{ color: '#f97316' }}>
                        <div className={styles.sidebarIcon}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12" /><rect x="2" y="7" width="20" height="5" /><line x1="12" y1="22" x2="12" y2="7" /><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" /><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" /></svg>
                        </div>
                        Refer & Earn
                    </div>

                    <div className={styles.sidebarItem}>
                        <div className={styles.sidebarIcon}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" /></svg>
                        </div>
                        Trading Analysis
                    </div>

                    <div className={styles.sidebarItem}>
                        <div className={styles.sidebarIcon}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
                        </div>
                        Help Center
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 'auto' }}><polyline points="6 9 12 15 18 9" /></svg>
                    </div>

                    <div className={styles.sidebarItem}>
                        <div className={styles.sidebarIcon}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
                        </div>
                        Personal Settings
                    </div>

                    <div className={styles.sidebarItem}>
                        <div className={styles.sidebarIcon}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" /><path d="M9 21h6" /></svg>
                        </div>
                        Trader's Education
                    </div>

                    <div className={styles.sidebarItem}>
                        <div className={styles.sidebarIcon}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>
                        </div>
                        Upload documents
                    </div>

                    <div className={styles.sidebarDivider}></div>

                    <div className={styles.sidebarItem}>
                        <div className={styles.sidebarIcon}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
                        </div>
                        Dark Mode
                    </div>

                    <div className={styles.sidebarItem}>
                        <div className={styles.sidebarIcon}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
                        </div>
                        Tour guide
                    </div>

                    <div className={styles.sidebarItem}>
                        <div className={styles.sidebarIcon}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" /><path d="M10 2c1 .5 2 2 2 5" /></svg>
                        </div>
                        App for iOS
                    </div>

                    <div className={styles.sidebarItem}>
                        <div className={styles.sidebarIcon}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="#3DDC84" stroke="none"><path d="M3,3 L21,3 L21,21 L3,21 Z M8,6 L8,18 L11,18 L11,6 Z M13,6 L13,18 L16,18 L16,6 Z" /></svg>
                        </div>
                        App for Android
                    </div>

                    <div className={styles.sidebarItem}>
                        <div className={styles.sidebarIcon}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>
                        </div>
                        Log out
                    </div>
                </div>

                <div className={styles.shareSection}>
                    <div className={styles.shareText}>Share the app</div>
                    <div className={styles.socialIcons}>
                        <div className={styles.socialIcon}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
                        </div>
                        <div className={styles.socialIcon}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                        </div>
                        <div className={styles.socialIcon}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Layout */}
            <div className={styles.mainLayout}>
                {/* Top Header */}
                <header className={styles.header}>
                    <div className={styles.logo}>
                        <img src="/fxtrusts_logo_v2.png" alt="FxTrusts" style={{ height: '50px', objectFit: 'contain' }} />
                    </div>

                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                        <div className={styles.accountInfo}>
                            <span className={styles.accountLabel}>
                                <span style={{ color: '#22c55e', marginRight: '4px' }}>●</span> Account ID
                            </span>
                            <span className={styles.accountValue}>6693826</span>
                        </div>
                        <div className={styles.accountInfo}>
                            <span className={styles.accountLabel}>
                                <span style={{ color: '#22c55e', marginRight: '4px' }}>●</span> Currency
                            </span>
                            <span className={styles.accountValue}>USD</span>
                        </div>
                        <div className={styles.accountInfo}>
                            <span className={styles.accountLabel}>
                                <span style={{ color: '#22c55e', marginRight: '4px' }}>●</span> Type
                            </span>
                            <span className={styles.accountValue}>Real</span>
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: '4px' }}><polyline points="6 9 12 15 18 9" /></svg>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                        <div style={{ border: '1px solid #e0e0e0', borderRadius: '4px', padding: '4px 8px', display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                            <img src="https://flagcdn.com/w20/gb.png" width="16" height="12" alt="Language" />
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
                        </div>
                        <div style={{ padding: '6px', borderRadius: '50%', border: '1px solid #e0e0e0', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
                        </div>
                    </div>
                </header>

                {/* Content */}
                <div className={styles.content}>
                    {/* Market Watch */}
                    <div className={styles.marketWatch}>
                        <div className={styles.marketHeader}>
                            <div className={styles.searchBox}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                                <span>xau</span>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: 'auto', cursor: 'pointer' }}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                            </div>
                        </div>
                        <div className={styles.marketTabs}>
                            <span className={`${styles.marketTab} ${styles.marketTabActive}`}>Market (5)</span>
                            <span className={styles.marketTab}>Sell</span>
                            <span className={styles.marketTab}>Buy</span>
                        </div>
                        <div className={styles.marketList}>
                            {marketData.map((item, i) => (
                                <div key={i} className={styles.marketItem}>
                                    <div className={styles.symbolInfo}>
                                        <div className={styles.symbolName}>
                                            <img src={`https://flagcdn.com/w20/${item.flag}.png`} width="14" height="10" alt="flag" />
                                            {item.symbol}
                                            <svg width="10" height="10" viewBox="0 0 24 24" fill="#fbbf24" stroke="#fbbf24" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                        </div>
                                        <div className={styles.symbolDesc}>{item.desc}</div>
                                        <div className={styles.priceChange} style={{ color: item.change.startsWith('+') ? 'var(--client-green)' : 'var(--client-red)' }}>
                                            {item.change.startsWith('+') ? '▲' : '▼'} {item.change}
                                        </div>
                                    </div>
                                    <div className={styles.priceInfo}>
                                        <div className={styles.priceBox}>
                                            <div className={`${styles.priceValue} ${styles.textRed}`}>{item.sell}</div>
                                            <div className={styles.symbolDesc}>L: {item.low}</div>
                                        </div>
                                        <div className={styles.priceBox}>
                                            <div className={`${styles.priceValue} ${styles.textGreen}`}>{item.buy}</div>
                                            <div className={styles.symbolDesc}>H: {item.high}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Chart Area */}
                    <div className={styles.chartArea}>
                        <div className={styles.chartHeader}>
                            <div className={styles.chartControls}>
                                <div
                                    onClick={() => setOneClickTrading(!oneClickTrading)}
                                    style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#f4f5f7', padding: '6px 12px', borderRadius: '16px', fontSize: '12px', cursor: 'pointer' }}
                                >
                                    <div className={`${styles.toggleSwitch} ${oneClickTrading ? styles.toggleOn : styles.toggleOff}`}>
                                        <div className={styles.toggleKnob}></div>
                                    </div>
                                    1-Click Trading
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
                                </div>
                                <div className={styles.tradeButtons}>
                                    <button className={`${styles.tradeBtn} ${styles.btnSell}`}>
                                        Sell<br /><span style={{ fontSize: '13px' }}>4,224.91</span>
                                    </button>
                                    <button className={`${styles.tradeBtn} ${styles.btnBuy}`}>
                                        Buy<br /><span style={{ fontSize: '13px' }}>4,225.66</span>
                                    </button>
                                </div>
                                <div
                                    onClick={() => setTradingView(!tradingView)}
                                    style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', cursor: 'pointer', fontWeight: '500' }}
                                >
                                    <div className={`${styles.toggleSwitch} ${tradingView ? styles.toggleOn : styles.toggleOff}`}>
                                        <div className={styles.toggleKnob}></div>
                                    </div>
                                    TradingView
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '12px', color: '#777' }}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ cursor: 'pointer' }}><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" /></svg>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ cursor: 'pointer' }}><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="9" y1="3" x2="9" y2="21" /><line x1="15" y1="3" x2="15" y2="21" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="3" y1="15" x2="21" y2="15" /></svg>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ cursor: 'pointer' }}><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
                            </div>
                        </div>

                        {/* EMPTY CHART PLACEHOLDER - TradingView API will go here */}
                        <div className={styles.chartPlaceholder} id="tradingview_chart">
                            {/* Empty space for TradingView API integration */}
                        </div>
                    </div>

                    {/* Right Social Panel */}
                    <div className={styles.rightSidebar}>
                        <div className={styles.rightTabs}>
                            <div className={`${styles.rightTab} ${activeTab === 'social' ? styles.rightTabActive : ''}`} onClick={() => setActiveTab('social')}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                Social
                            </div>
                            <div className={`${styles.rightTab} ${activeTab === 'signals' ? styles.rightTabActive : ''}`} onClick={() => setActiveTab('signals')}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 20h.01" /><path d="M7 20v-4" /><path d="M12 20v-8" /><path d="M17 20V8" /><path d="M22 4v16" /></svg>
                                Signals
                            </div>
                        </div>

                        <div style={{ padding: '12px' }}>
                            <div className={styles.searchBox}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                                <span>Search</span>
                            </div>
                            <div style={{ display: 'flex', gap: '8px', marginTop: '12px', fontSize: '11px' }}>
                                <span style={{ border: '1px solid var(--client-blue)', color: 'var(--client-blue)', padding: '4px 8px', borderRadius: '12px', cursor: 'pointer' }}>Top ranked</span>
                                <span style={{ color: 'var(--client-text-secondary)', cursor: 'pointer' }}>Spotlight</span>
                                <span style={{ color: 'var(--client-text-secondary)', cursor: 'pointer' }}>Stream</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: 'var(--client-text-secondary)', marginTop: '12px', paddingBottom: '6px', borderBottom: '1px solid #f0f0f0' }}>
                                <span>Name</span>
                                <span>P/L (%)</span>
                                <span>Copiers</span>
                            </div>
                        </div>

                        <div className={styles.socialList}>
                            {activeTab === 'social' ? (
                                // Social Feed
                                socialData.map((user, i) => (
                                    <div key={i} className={styles.socialItem}>
                                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`} className={styles.avatar} alt="avatar" />
                                        <div className={styles.socialContent}>
                                            <div className={styles.socialHeader}>
                                                <span className={styles.socialName}>{user.name}</span>
                                            </div>
                                            <div className={styles.socialStats}>
                                                <span className={styles.statGreen}>{user.return}</span>
                                                <span>{user.copiers}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                // Signals Feed
                                signalsData.map((signal, i) => (
                                    <div key={i} className={styles.signalCard}>
                                        <div className={styles.signalHeader}>
                                            {signal.type === 'Buy' ? (
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5">
                                                    <path d="M12 19V5M5 12l7-7 7 7" />
                                                </svg>
                                            ) : (
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5">
                                                    <path d="M12 5v14M19 12l-7 7-7-7" />
                                                </svg>
                                            )}
                                            <span className={styles.signalPair}>{signal.pair}</span>
                                            <span className={`${styles.signalType} ${signal.type === 'Buy' ? styles.signalBuy : styles.signalSell}`}>
                                                {signal.type}
                                            </span>
                                        </div>
                                        <div className={styles.signalTimeFrame}>{signal.timeFrame}</div>
                                        <div className={styles.signalMeta}>
                                            <span className={styles.signalTarget}>
                                                <strong>Target:</strong> {signal.target}
                                            </span>
                                            <span className={styles.signalTime}>
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <circle cx="12" cy="12" r="10" />
                                                    <polyline points="12 6 12 12 16 14" />
                                                </svg>
                                                {signal.timeAgo}
                                            </span>
                                        </div>
                                        <div className={styles.signalTime} style={{ marginBottom: '8px', fontSize: '11px' }}>
                                            {signal.duration}
                                        </div>
                                        <div className={styles.signalDescription}>
                                            {signal.description}
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <footer className={styles.footer}>
                    <div className={styles.footerItem}>
                        <span className={styles.footerLabel}>Balance</span>
                        <span className={styles.footerValue}>$56,973.01</span>
                    </div>
                    <div className={styles.footerItem}>
                        <span className={styles.footerLabel}>Credit</span>
                        <span className={styles.footerValue}>$0.00</span>
                    </div>
                    <div style={{ flex: 1 }}></div>
                    <div className={styles.footerItem}>
                        <span className={styles.footerLabel}>Open P/L</span>
                        <span className={styles.footerValue}>$1,301.00</span>
                    </div>
                    <div className={styles.footerItem}>
                        <span className={styles.footerLabel}>Equity</span>
                        <span className={styles.footerValue}>$58,274.01</span>
                    </div>
                    <div style={{ marginLeft: 'auto', display: 'flex', gap: '16px', color: 'var(--client-text-secondary)', fontSize: '11px' }}>
                        <span>14:16:41 (UTC)</span>
                        <span>% log auto</span>
                        <span style={{ cursor: 'pointer' }}>^</span>
                    </div>
                </footer>
            </div>
        </div>
    );
}
