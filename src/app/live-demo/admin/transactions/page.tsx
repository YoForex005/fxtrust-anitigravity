'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../../dynamics.module.css';
import DynamicsSidebar from '../../components/DynamicsSidebar';

export default function TransactionsPage() {
    const router = useRouter();
    const [activeItem, setActiveItem] = useState('Monetary Transactions');

    // Mock data based on screenshot
    const transactions = [
        { createdOn: '11/26/2025 3:07 PM', type: 'Withdrawal', amount: '1,000.00', currency: 'US Dollar', tpAccount: '6693826', account: 'LeverateAsia FX', method: 'Wire Transfer', usdValue: '1,000.00', approved: 'No' },
        { createdOn: '11/21/2025 2:39 PM', type: 'Deposit', amount: '30,000.00', currency: 'US Dollar', tpAccount: '24631821', account: 'Alex Ryder', method: 'Credit Card', usdValue: '30,000.00', approved: 'Yes' },
        { createdOn: '11/20/2025 5:43 PM', type: 'Deposit', amount: '500,000.00', currency: 'US Dollar', tpAccount: '13606044', account: 'Trading Success Demo Sirix', method: 'Credit Card', usdValue: '500,000.00', approved: 'Yes' },
        { createdOn: '11/20/2025 10:39 AM', type: 'Transfer Between Tradin...', amount: '500.00', currency: 'US Dollar', tpAccount: '24758128', account: 'Hitesh Patel Sirix Demo', method: 'Internal', usdValue: '500.00', approved: 'Yes' },
        { createdOn: '11/20/2025 10:38 AM', type: 'Deposit', amount: '5,000.00', currency: 'US Dollar', tpAccount: '24758128', account: 'Hitesh Patel Sirix Demo', method: 'Credit Card', usdValue: '5,000.00', approved: 'Yes' },
        { createdOn: '11/19/2025 5:14 PM', type: 'Withdrawal', amount: '150.00', currency: 'US Dollar', tpAccount: '11735086', account: 'Tamir Gur', method: 'Crypto', usdValue: '150.00', approved: 'No' },
        { createdOn: '11/19/2025 5:13 PM', type: 'Withdrawal', amount: '1,000.00', currency: 'US Dollar', tpAccount: '11735086', account: 'Tamir Gur', method: 'Credit Card', usdValue: '1,000.00', approved: 'No' },
        { createdOn: '11/19/2025 5:11 PM', type: 'Withdrawal', amount: '5,000.00', currency: 'US Dollar', tpAccount: '11735086', account: 'Tamir Gur', method: 'Crypto', usdValue: '5,000.00', approved: 'No' },
        { createdOn: '11/19/2025 2:09 PM', type: 'Deposit', amount: '30,000.00', currency: 'US Dollar', tpAccount: '24751880', account: 'Cesare Pasquale', method: 'Credit Card', usdValue: '30,000.00', approved: 'Yes' },
        { createdOn: '11/19/2025 10:15 AM', type: 'Deposit', amount: '100.00', currency: 'US Dollar', tpAccount: '24736656', account: 'nurettin test', method: 'Internal', usdValue: '100.00', approved: 'Yes' },
        { createdOn: '11/17/2025 5:23 PM', type: 'Transfer Between Tradin...', amount: '500.00', currency: 'US Dollar', tpAccount: '24734648', account: 'Majid Zoubi Sirix Demo', method: 'Internal', usdValue: '500.00', approved: 'Yes' },
        { createdOn: '11/17/2025 5:20 PM', type: 'Deposit', amount: '1,000.00', currency: 'Euro', tpAccount: '24734668', account: 'Majid Zoubi Sirix Demo', method: 'Internal', usdValue: '1,159.30', approved: 'Yes' },
        { createdOn: '11/17/2025 5:18 PM', type: 'Deposit', amount: '1,000.00', currency: 'US Dollar', tpAccount: '24734648', account: 'Majid Zoubi Sirix Demo', method: 'Credit Card', usdValue: '1,000.00', approved: 'Yes' },
        { createdOn: '11/17/2025 4:56 PM', type: 'Deposit', amount: '5,000.00', currency: 'US Dollar', tpAccount: '24734648', account: 'Majid Zoubi Sirix Demo', method: 'Credit Card', usdValue: '5,000.00', approved: 'Yes' },
        { createdOn: '11/17/2025 11:00 AM', type: 'Deposit', amount: '5,000.00', currency: 'US Dollar', tpAccount: '24733606', account: 'Saar Alul Sirixdemo', method: 'Credit Card', usdValue: '5,000.00', approved: 'Yes' },
    ];

    const columnDefs = [
        { key: 'createdOn', label: 'Created On' },
        { key: 'type', label: 'Type' },
        { key: 'amount', label: 'Amount' },
        { key: 'currency', label: 'Currency' },
        { key: 'tpAccount', label: 'TP Account' },
        { key: 'account', label: 'Account' },
        { key: 'method', label: 'Method of Payment' },
        { key: 'usdValue', label: 'USD Value' },
        { key: 'approved', label: 'Approved' }
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
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: '#107c10' }}><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>
                            Show Chart
                        </button>
                        <button className={styles.commandButton}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" /></svg>
                            Refresh
                        </button>
                        <button className={styles.commandButton}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                            New
                        </button>
                        <button className={styles.commandButton}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
                            Delete
                        </button>
                        <div className={styles.commandSeparator} />
                        <button className={styles.commandButton}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: '#107c10' }}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="8" y1="13" x2="16" y2="13" /><line x1="8" y1="17" x2="16" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                            Export to Excel
                        </button>
                        <button className={styles.commandButton}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: '#107c10' }}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="12" y1="18" x2="12" y2="12" /><line x1="9" y1="15" x2="15" y2="15" /></svg>
                            Import from Excel ⌄
                        </button>
                        <div className={styles.commandSeparator} />
                        <button className={styles.commandButton}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>
                            Create view
                        </button>
                    </div>

                    {/* View Header */}
                    <div className={styles.viewHeader}>
                        <div className={styles.viewTitle}>
                            All Transactions ⌄
                        </div>
                        <div style={{ flex: 1 }} />
                        <div className={styles.commandButton} style={{ border: '1px solid #e1dfdd', padding: '4px 8px', borderRadius: '2px', background: 'white' }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ marginRight: '8px' }}><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                            Search this view
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ marginLeft: '32px' }}><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                        </div>
                    </div>

                    {/* Data Grid */}
                    <div className={styles.gridContainer}>
                        <table className={styles.gridTable}>
                            <thead>
                                <tr>
                                    <th className={styles.gridHeader} style={{ width: '40px' }}>✓</th>
                                    {columnDefs.map((col, idx) => (
                                        <th key={idx} className={styles.gridHeader} style={{ whiteSpace: 'nowrap' }}>
                                            {col.label} ⌄
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {transactions.map((item: any, idx) => (
                                    <tr key={idx} className={styles.gridRow}>
                                        <td className={styles.gridCell}><input type="checkbox" /></td>
                                        {columnDefs.map((col, colIdx) => (
                                            <td key={colIdx} className={styles.gridCell} style={{ 
                                                whiteSpace: 'nowrap', 
                                                textAlign: ['amount', 'usdValue'].includes(col.key) ? 'right' : 'left',
                                                color: col.key === 'account' ? '#0078d4' : 'inherit'
                                            }}>
                                                {item[col.key]}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Footer */}
                    <div className={styles.footer}>
                        <div className={styles.alphabetFilter}>
                            <span>All</span>
                            <span>#</span>
                            {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'].map(char => (
                                <span key={char}>{char}</span>
                            ))}
                        </div>
                        <div className={styles.pagination}>
                            <span>1 - {Math.min(100, transactions.length)} of {transactions.length}</span>
                            <span>⏮️</span>
                            <span>Page 1 ⌄</span>
                            <span>⏭️</span>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
