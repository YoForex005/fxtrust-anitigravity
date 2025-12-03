'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../../dynamics.module.css';
import DynamicsSidebar from '../../components/DynamicsSidebar';

export default function TradingPage() {
    const router = useRouter();
    const [activeItem, setActiveItem] = useState('Real-Time Trading');

    // Mock data based on screenshot
    const tradingData = [
        { login: '13460427', type: 'Real', name: 'Mahmoud Makahleh Demo', currency: 'USD', equity: '25,178.45', equityUsd: '$25,178.45', openPl: '$0.00', freeMargin: '25,178.45', marginLevel: '', margin: '', balance: '25,178.45', openCount: '0' },
        { login: '7205652', type: 'Real', name: 'withdraw test', currency: 'USD', equity: '500.00', equityUsd: '$500.00', openPl: '$0.00', freeMargin: '500.00', marginLevel: '', margin: '', balance: '500.00', openCount: '0' },
        { login: '10254815', type: 'Real', name: 'Sarthak Presentation', currency: 'USD', equity: '10,054.26', equityUsd: '$10,054.26', openPl: '$0.00', freeMargin: '10,054.26', marginLevel: '', margin: '', balance: '10,054.26', openCount: '0' },
        { login: '11735086', type: 'Real', name: 'Tamir Gur', currency: 'USD', equity: '6,613.96', equityUsd: '$6,613.96', openPl: '$1.12', freeMargin: '6,611.36', marginLevel: '254,383.00%', margin: '2.60', balance: '6,612.84', openCount: '1' },
        { login: '9086518', type: 'Real', name: 'Jonathan Aziz Demo', currency: 'USD', equity: '37,549.14', equityUsd: '$37,549.14', openPl: '$49.14', freeMargin: '37,532.71', marginLevel: '228,540.11%', margin: '16.43', balance: '37,500.00', openCount: '1' },
        { login: '17528359', type: 'Real', name: 'Razi Shabaan Sirix Demo', currency: 'USD', equity: '10,000.00', equityUsd: '$10,000.00', openPl: '$0.00', freeMargin: '10,000.00', marginLevel: '', margin: '', balance: '10,000.00', openCount: '0' },
        { login: '8894470', type: 'Real', name: 'Sanjay Presentation', currency: 'EUR', equity: '520.33', equityUsd: '$606.72', openPl: '$0.00', freeMargin: '520.33', marginLevel: '', margin: '', balance: '370.33', openCount: '0' },
        { login: '6431252', type: 'Real', name: 'TestCrypto Crypto', currency: 'USD', equity: '65.00', equityUsd: '$65.00', openPl: '$0.00', freeMargin: '65.00', marginLevel: '', margin: '', balance: '65.00', openCount: '0' },
        { login: '18563106', type: 'Real', name: 'Yaroslav Sirix Demo', currency: 'USD', equity: '5,876.09', equityUsd: '$5,876.09', openPl: '-$732.10', freeMargin: '5,776.09', marginLevel: '5,876.09%', margin: '100.00', balance: '6,608.19', openCount: '1' },
        { login: '19437378', type: 'Real', name: 'Nedal DEMO', currency: 'USD', equity: '25,018.73', equityUsd: '$25,018.73', openPl: '$18.73', freeMargin: '25,005.78', marginLevel: '193,194.83%', margin: '12.95', balance: '25,000.00', openCount: '1' },
        { login: '6515928', type: 'Real', name: 'gfhgf hfghf', currency: 'USD', equity: '20.00', equityUsd: '$20.00', openPl: '$0.00', freeMargin: '20.00', marginLevel: '', margin: '', balance: '20.00', openCount: '0' },
        { login: '14071228', type: 'Real', name: 'Ram Kumar', currency: 'USD', equity: '500.00', equityUsd: '$500.00', openPl: '$0.00', freeMargin: '500.00', marginLevel: '', margin: '', balance: '500.00', openCount: '0' },
        { login: '13745104', type: 'Real', name: 'Tushar Presentation', currency: 'USD', equity: '4,596.14', equityUsd: '$4,596.14', openPl: '$2,108.33', freeMargin: '4,591.04', marginLevel: '90,120.39%', margin: '5.10', balance: '2,487.81', openCount: '1' },
        { login: '10966758', type: 'Real', name: 'Alex Radovic Presentation', currency: 'USD', equity: '12,000.00', equityUsd: '$12,000.00', openPl: '$0.00', freeMargin: '12,000.00', marginLevel: '', margin: '', balance: '12,000.00', openCount: '0' },
        { login: '20838262', type: 'Real', name: 'Dludlu Kelvin Tan', currency: 'USD', equity: '25,049.32', equityUsd: '$25,049.32', openPl: '$0.00', freeMargin: '25,049.32', marginLevel: '', margin: '', balance: '25,049.32', openCount: '0' },
        { login: '20341117', type: 'Real', name: 'Adam Sirix Lev Demo', currency: 'USD', equity: '22,570.00', equityUsd: '$22,570.00', openPl: '$0.00', freeMargin: '22,570.00', marginLevel: '', margin: '', balance: '22,570.00', openCount: '0' },
        { login: '13438706', type: 'Real', name: 'Mike Milton Demo', currency: 'USD', equity: '4,028.58', equityUsd: '$4,028.58', openPl: '-$368.14', freeMargin: '4,003.24', marginLevel: '15,896.11%', margin: '25.34', balance: '4,396.72', openCount: '1' },
        { login: '6220450', type: 'Real', name: 'Satyajit Mohanty', currency: 'USD', equity: '1,064.23', equityUsd: '$1,064.23', openPl: '$0.00', freeMargin: '1,064.23', marginLevel: '', margin: '', balance: '814.23', openCount: '0' },
    ];

    const columnDefs = [
        { key: 'login', label: 'Login' },
        { key: 'type', label: 'Type' },
        { key: 'name', label: 'Name' },
        { key: 'currency', label: 'Currency' },
        { key: 'equity', label: 'Equity' },
        { key: 'equityUsd', label: 'Equity(USD)' },
        { key: 'openPl', label: 'Open P/L(USD)' },
        { key: 'freeMargin', label: 'Free Margin' },
        { key: 'marginLevel', label: 'Margin Level' },
        { key: 'margin', label: 'Margin' },
        { key: 'balance', label: 'Balance' },
        { key: 'openCount', label: 'Open Count' }
    ];

    return (
        <div className={styles.container}>
            {/* Header */}
            <header className={styles.header}>
                <div className={styles.headerLeft}>
                    <div className={styles.waffleMenu}>
                        {[...Array(9)].map((_, i) => <div key={i} className={styles.waffleDot} />)}
                    </div>
                    <div className={styles.appName}>
                        fx Trusts <span className={styles.appBeta}>Beta</span>
                    </div>
                </div>
                <div className={styles.headerRight}>
                    <div className={styles.headerIcon} title="Search">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                    </div>
                    <div className={styles.headerIcon} title="Help">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg>
                    </div>
                    <div className={styles.headerIcon} title="User Profile">
                        <div style={{ width: 24, height: 24, borderRadius: '50%', background: '#8b5cf6', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 'bold' }}>AD</div>
                    </div>
                </div>
            </header>

            <div className={styles.mainLayout}>
                {/* Sidebar */}
                <DynamicsSidebar activeItem={activeItem} onNavigate={setActiveItem} />

                {/* Main Content */}
                <main className={styles.contentArea}>
                    {/* Command Bar */}
                    <div className={styles.commandBar}>
                        <button className={styles.commandButton}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" /><polyline points="17 21 17 13 7 13 7 21" /><polyline points="7 3 7 8 15 8" /></svg>
                            Save As
                        </button>
                        <button className={styles.commandButton}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: '#107c10' }}><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                            New ⌄
                        </button>
                        <button className={styles.commandButton}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="20 6 9 17 4 12" /></svg>
                            Set As Default
                        </button>
                        <button className={styles.commandButton}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" /></svg>
                            Refresh All
                        </button>
                    </div>

                    {/* View Header */}
                    <div className={styles.viewHeader}>
                        <div className={styles.viewTitle}>
                            Real-Time Trading Information ⌄
                        </div>
                    </div>

                    {/* Split View Container */}
                    <div style={{ display: 'flex', height: 'calc(100% - 100px)', gap: '10px', padding: '10px' }}>
                        {/* Main Grid */}
                        <div style={{ flex: 3, backgroundColor: 'white', border: '1px solid #e1dfdd', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ padding: '10px', borderBottom: '1px solid #e1dfdd', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ fontWeight: 'bold' }}>Accounts</span>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                    <div style={{ width: '32px', height: '16px', background: '#0078d4', borderRadius: '10px', position: 'relative' }}>
                                        <div style={{ width: '12px', height: '12px', background: 'white', borderRadius: '50%', position: 'absolute', top: '2px', right: '2px' }}></div>
                                    </div>
                                    <span>Hide Demo</span>
                                </div>
                                <div style={{ flex: 1 }} />
                                <span>$ €</span>
                                <div style={{ background: '#107c10', color: 'white', padding: '2px 4px', borderRadius: '2px' }}>X</div>
                            </div>
                            
                            {/* Filter Row */}
                            <div style={{ display: 'flex', borderBottom: '1px solid #e1dfdd', background: '#f8f8f8' }}>
                                {columnDefs.map((col, idx) => (
                                    <div key={idx} style={{ flex: 1, padding: '5px', borderRight: '1px solid #e1dfdd', minWidth: '80px' }}>
                                        <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>{col.label} ↑</div>
                                        <div style={{ display: 'flex', background: 'white', border: '1px solid #ccc', padding: '2px' }}>
                                            <input type="text" placeholder="Search..." style={{ border: 'none', width: '100%', fontSize: '12px', outline: 'none' }} />
                                            <span style={{ fontSize: '10px', color: '#666' }}>Y</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Totals Row */}
                            <div style={{ display: 'flex', borderBottom: '1px solid #e1dfdd', background: '#fff', fontWeight: 'bold', fontSize: '12px' }}>
                                <div style={{ flex: 1, padding: '5px', borderRight: '1px solid #e1dfdd', minWidth: '80px' }}></div>
                                <div style={{ flex: 1, padding: '5px', borderRight: '1px solid #e1dfdd', minWidth: '80px' }}></div>
                                <div style={{ flex: 1, padding: '5px', borderRight: '1px solid #e1dfdd', minWidth: '80px' }}></div>
                                <div style={{ flex: 1, padding: '5px', borderRight: '1px solid #e1dfdd', minWidth: '80px' }}></div>
                                <div style={{ flex: 1, padding: '5px', borderRight: '1px solid #e1dfdd', minWidth: '80px' }}>$22,587,866.33</div>
                                <div style={{ flex: 1, padding: '5px', borderRight: '1px solid #e1dfdd', minWidth: '80px' }}>$25,178.45</div>
                                <div style={{ flex: 1, padding: '5px', borderRight: '1px solid #e1dfdd', minWidth: '80px' }}>$2,863,147.93</div>
                                <div style={{ flex: 1, padding: '5px', borderRight: '1px solid #e1dfdd', minWidth: '80px' }}></div>
                                <div style={{ flex: 1, padding: '5px', borderRight: '1px solid #e1dfdd', minWidth: '80px' }}></div>
                                <div style={{ flex: 1, padding: '5px', borderRight: '1px solid #e1dfdd', minWidth: '80px' }}></div>
                                <div style={{ flex: 1, padding: '5px', borderRight: '1px solid #e1dfdd', minWidth: '80px' }}></div>
                                <div style={{ flex: 1, padding: '5px', borderRight: '1px solid #e1dfdd', minWidth: '80px' }}></div>
                            </div>

                            {/* Data Rows */}
                            <div style={{ overflowY: 'auto', flex: 1 }}>
                                {tradingData.map((item: any, idx) => (
                                    <div key={idx} style={{ display: 'flex', borderBottom: '1px solid #f3f2f1', fontSize: '12px', padding: '4px 0' }}>
                                        {columnDefs.map((col, colIdx) => (
                                            <div key={colIdx} style={{ flex: 1, padding: '0 5px', minWidth: '80px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: col.key === 'login' || col.key === 'name' ? '#0078d4' : 'inherit' }}>
                                                {item[col.key]}
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Side Panel */}
                        <div style={{ flex: 1, backgroundColor: 'white', border: '1px solid #e1dfdd', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ padding: '10px', borderBottom: '1px solid #e1dfdd', fontWeight: 'bold' }}>
                                Account Details
                            </div>
                            <div style={{ padding: '10px', display: 'flex', gap: '10px' }}>
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>Order ↑</div>
                                    <div style={{ display: 'flex', background: 'white', border: '1px solid #ccc', padding: '2px' }}>
                                        <input type="text" placeholder="Search..." style={{ border: 'none', width: '100%', fontSize: '12px', outline: 'none' }} />
                                        <span style={{ fontSize: '10px', color: '#666' }}>Y</span>
                                    </div>
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>Open Time ↑</div>
                                    <div style={{ display: 'flex', background: 'white', border: '1px solid #ccc', padding: '2px' }}>
                                        <input type="text" style={{ border: 'none', width: '100%', fontSize: '12px', outline: 'none' }} />
                                        <span style={{ fontSize: '10px', color: '#666' }}>X Y</span>
                                    </div>
                                </div>
                            </div>
                            <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', padding: '10px' }}>
                                <div style={{ width: '100%', height: '10px', background: '#e1dfdd', borderRadius: '5px' }}></div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
