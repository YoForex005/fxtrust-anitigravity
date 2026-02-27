'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../../dynamics.module.css';
import DynamicsSidebar from '../../components/DynamicsSidebar';
import DynamicsHeader from '../../components/DynamicsHeader';

export default function TradingContent() {
    const router = useRouter();
    const [activeItem, setActiveItem] = useState('Real-Time Trading');
    const [showNewDropdown, setShowNewDropdown] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [hideDemo, setHideDemo] = useState(true);

    const tradingData = [
        { login: '13460427', type: 'Real', name: 'Mahmoud Makahleh Demo', currency: 'USD', equity: '25,178.45', equityUsd: '$25,178.45', openPl: '$0.00', freeMargin: '25,178.45', marginLevel: '', margin: '', balance: '25,178.45', openCount: '0' },
        { login: '7205652', type: 'Real', name: 'withdraw test', currency: 'USD', equity: '500.00', equityUsd: '$500.00', openPl: '$0.00', freeMargin: '500.00', marginLevel: '', margin: '', balance: '500.00', openCount: '0' },
        { login: '10254815', type: 'Real', name: 'Sarthak Presentation', currency: 'USD', equity: '10,054.26', equityUsd: '$10,054.26', openPl: '$0.00', freeMargin: '10,054.26', marginLevel: '', margin: '', balance: '10,054.26', openCount: '0' },
        { login: '11735086', type: 'Real', name: 'Tamir Gur', currency: 'USD', equity: '6,613.96', equityUsd: '$6,613.96', openPl: '$1.12', freeMargin: '6,611.36', marginLevel: '254,383.00%', margin: '2.60', balance: '6,612.84', openCount: '1' },
        { login: '9086518', type: 'Real', name: 'Jonathan Aziz Demo', currency: 'USD', equity: '37,549.14', equityUsd: '$37,549.14', openPl: '$49.14', freeMargin: '37,532.71', marginLevel: '228,540.11%', margin: '16.43', balance: '37,500.00', openCount: '1' },
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

    const handleRefresh = () => { setRefreshing(true); setTimeout(() => setRefreshing(false), 1000); };

    return (
        <div className={styles.container}>
            <DynamicsHeader />
            <div className={styles.mainLayout}>
                <DynamicsSidebar activeItem={activeItem} onNavigate={setActiveItem} />
                <main className={styles.contentArea}>
                    <div className={styles.commandBar}>
                        <button className={styles.commandButton} onClick={() => alert('Save As clicked')}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" /></svg>Save As</button>
                        <div style={{ position: 'relative' }}>
                            <button className={styles.commandButton} onClick={() => setShowNewDropdown(!showNewDropdown)}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: '#107c10' }}><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>New ⌄</button>
                            {showNewDropdown && <div style={{ position: 'absolute', top: '100%', left: 0, background: 'white', border: '1px solid #e1dfdd', boxShadow: '0 2px 8px rgba(0,0,0,0.15)', minWidth: '180px', zIndex: 1000 }}><div style={{ padding: '8px 16px', cursor: 'pointer', fontSize: '14px' }} onClick={() => { alert('New Trade'); setShowNewDropdown(false); }}>New Trade</div><div style={{ padding: '8px 16px', cursor: 'pointer', fontSize: '14px' }} onClick={() => { alert('New Order'); setShowNewDropdown(false); }}>New Order</div></div>}
                        </div>
                        <button className={styles.commandButton} onClick={() => alert('Set As Default clicked')}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="20 6 9 17 4 12" /></svg>Set As Default</button>
                        <button className={styles.commandButton} onClick={handleRefresh} style={{ opacity: refreshing ? 0.5 : 1 }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="23 4 23 10 17 10" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" /></svg>{refreshing ? 'Refreshing...' : 'Refresh All'}</button>
                    </div>
                    <div className={styles.viewHeader}><div className={styles.viewTitle}>Real-Time Trading Information ⌄</div></div>
                    <div style={{ display: 'flex', height: 'calc(100% - 100px)', gap: '10px', padding: '10px' }}>
                        <div style={{ flex: 3, backgroundColor: 'white', border: '1px solid #e1dfdd', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ padding: '10px', borderBottom: '1px solid #e1dfdd', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ fontWeight: 'bold' }}>Accounts</span>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }} onClick={() => setHideDemo(!hideDemo)}>
                                    <div style={{ width: '32px', height: '16px', background: hideDemo ? '#0078d4' : '#ccc', borderRadius: '10px', position: 'relative', transition: 'background 0.2s' }}><div style={{ width: '12px', height: '12px', background: 'white', borderRadius: '50%', position: 'absolute', top: '2px', transition: 'right 0.2s', right: hideDemo ? '2px' : '18px' }}></div></div>
                                    <span>Hide Demo</span>
                                </div>
                                <div style={{ flex: 1 }} /><span>$ €</span>
                            </div>
                            <div style={{ display: 'flex', borderBottom: '1px solid #e1dfdd', background: '#f8f8f8' }}>{columnDefs.map((col, idx) => <div key={idx} style={{ flex: 1, padding: '5px', borderRight: '1px solid #e1dfdd', minWidth: '80px' }}><div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>{col.label} ↑</div><div style={{ display: 'flex', background: 'white', border: '1px solid #ccc', padding: '2px' }}><input type="text" placeholder="Search..." style={{ border: 'none', width: '100%', fontSize: '12px', outline: 'none' }} /></div></div>)}</div>
                            <div style={{ display: 'flex', borderBottom: '1px solid #e1dfdd', background: '#fff', fontWeight: 'bold', fontSize: '12px' }}><div style={{ flex: 1, padding: '5px', minWidth: '80px' }}></div><div style={{ flex: 1, padding: '5px', minWidth: '80px' }}></div><div style={{ flex: 1, padding: '5px', minWidth: '80px' }}></div><div style={{ flex: 1, padding: '5px', minWidth: '80px' }}></div><div style={{ flex: 1, padding: '5px', minWidth: '80px' }}>$22,587,866.33</div><div style={{ flex: 1, padding: '5px', minWidth: '80px' }}>$25,178.45</div><div style={{ flex: 1, padding: '5px', minWidth: '80px' }}>$2,863,147.93</div><div style={{ flex: 1, padding: '5px', minWidth: '80px' }}></div><div style={{ flex: 1, padding: '5px', minWidth: '80px' }}></div><div style={{ flex: 1, padding: '5px', minWidth: '80px' }}></div><div style={{ flex: 1, padding: '5px', minWidth: '80px' }}></div><div style={{ flex: 1, padding: '5px', minWidth: '80px' }}></div></div>
                            <div style={{ overflowY: 'auto', flex: 1 }}>{tradingData.map((item: any, idx) => <div key={idx} style={{ display: 'flex', borderBottom: '1px solid #f3f2f1', fontSize: '12px', padding: '4px 0', cursor: 'pointer' }} onClick={() => router.push(`/prop-firm/live-demo/admin/trading/${item.login}`)}>{columnDefs.map((col, colIdx) => <div key={colIdx} style={{ flex: 1, padding: '0 5px', minWidth: '80px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: ['login', 'name'].includes(col.key) ? '#0078d4' : 'inherit' }}>{item[col.key]}</div>)}</div>)}</div>
                        </div>
                        <div style={{ flex: 1, backgroundColor: 'white', border: '1px solid #e1dfdd', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ padding: '10px', borderBottom: '1px solid #e1dfdd', fontWeight: 'bold' }}>Account Details</div>
                            <div style={{ padding: '10px', display: 'flex', gap: '10px' }}><div style={{ flex: 1 }}><div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>Order ↑</div><div style={{ display: 'flex', background: 'white', border: '1px solid #ccc', padding: '2px' }}><input type="text" placeholder="Search..." style={{ border: 'none', width: '100%', fontSize: '12px', outline: 'none' }} /></div></div><div style={{ flex: 1 }}><div style={{ fontSize: '12px', color: '#666', marginBottom: '4px' }}>Open Time ↑</div><div style={{ display: 'flex', background: 'white', border: '1px solid #ccc', padding: '2px' }}><input type="text" style={{ border: 'none', width: '100%', fontSize: '12px', outline: 'none' }} /></div></div></div>
                            <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', padding: '10px' }}><div style={{ width: '100%', height: '10px', background: '#e1dfdd', borderRadius: '5px' }}></div></div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
