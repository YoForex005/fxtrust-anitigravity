'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../../dynamics.module.css';
import DynamicsSidebar from '../../components/DynamicsSidebar';

export default function CasesPage() {
    const router = useRouter();
    const [activeItem, setActiveItem] = useState('Active Cases');

    // Mock data based on screenshot
    const cases = [
        { createdOn: '12/3/2025 1:53 PM', title: 'Contact us - Email request - Deposit/withdrawal related questi', customer: 'Dob Dob', tpAccount: '---', type: 'General', status: 'Active' },
        { createdOn: '11/29/2025 1:23 PM', title: 'Registration blocked - Duplication detected', customer: 'Jabir NV', tpAccount: '---', type: 'General', status: 'Active' },
        { createdOn: '11/26/2025 3:07 PM', title: 'Pending Withdrawal Transaction', customer: 'LeverateAsia FX', tpAccount: '6693826', type: 'Withdrawal Confirmation', status: 'Active' },
        { createdOn: '11/26/2025 9:04 AM', title: 'Registration blocked - Duplication detected', customer: 'Shivani Leverate', tpAccount: '---', type: 'General', status: 'Active' },
        { createdOn: '11/21/2025 2:39 PM', title: 'Deposit Approval', customer: 'Alex Ryder', tpAccount: '24631821', type: 'Deposit Request', status: 'Active' },
        { createdOn: '11/20/2025 5:43 PM', title: 'Deposit Approval', customer: 'Trading Success Demo Sirix', tpAccount: '13606044', type: 'Deposit Request', status: 'Active' },
        { createdOn: '11/20/2025 10:39 AM', title: 'Automatic TransferBetweenTradingPlatformAccounts Approval', customer: 'Hitesh Patel Sirix Demo', tpAccount: '24758128', type: 'Transfer Between Trading Platform Acco...', status: 'Active' },
        { createdOn: '11/20/2025 10:38 AM', title: 'Deposit Approval', customer: 'Hitesh Patel Sirix Demo', tpAccount: '24758128', type: 'Deposit Request', status: 'Active' },
        { createdOn: '11/19/2025 5:14 PM', title: 'Pending Withdrawal Transaction', customer: 'Tamir Gur', tpAccount: '11735086', type: 'Withdrawal Confirmation', status: 'Active' },
        { createdOn: '11/19/2025 5:13 PM', title: 'Pending Withdrawal Transaction', customer: 'Tamir Gur', tpAccount: '11735086', type: 'Withdrawal Confirmation', status: 'Active' },
        { createdOn: '11/19/2025 5:11 PM', title: 'Pending Withdrawal Transaction', customer: 'Tamir Gur', tpAccount: '11735086', type: 'Withdrawal Confirmation', status: 'Active' },
        { createdOn: '11/19/2025 2:09 PM', title: 'Deposit Approval', customer: 'Cesare Pasquale', tpAccount: '24751880', type: 'Deposit Request', status: 'Active' },
        { createdOn: '11/19/2025 10:15 AM', title: 'Deposit Approval', customer: 'nurettin test', tpAccount: '24736656', type: 'Deposit Request', status: 'Active' },
        { createdOn: '11/18/2025 6:19 PM', title: 'Registration blocked - Duplication detected', customer: 'Mary test', tpAccount: '---', type: 'General', status: 'Active' },
        { createdOn: '11/18/2025 6:19 PM', title: 'Registration blocked - Duplication detected', customer: 'Mary test', tpAccount: '---', type: 'General', status: 'Active' },
        { createdOn: '11/18/2025 6:19 PM', title: 'Registration blocked - Duplication detected', customer: 'Mary test', tpAccount: '---', type: 'General', status: 'Active' },
        { createdOn: '11/17/2025 5:23 PM', title: 'Automatic TransferBetweenTradingPlatformAccounts Approval', customer: 'Majid Zoubi Sirix Demo', tpAccount: '24734648', type: 'Transfer Between Trading Platform Acco...', status: 'Active' },
        { createdOn: '11/17/2025 5:20 PM', title: 'Pending Deposit Transaction', customer: 'Majid Zoubi Sirix Demo', tpAccount: '24734668', type: 'Deposit Request', status: 'Active' },
    ];

    const columnDefs = [
        { key: 'createdOn', label: 'Created On' },
        { key: 'title', label: 'Case Title' },
        { key: 'customer', label: 'Customer' },
        { key: 'tpAccount', label: 'TP Account' },
        { key: 'type', label: 'Type' },
        { key: 'status', label: 'Status' }
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
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                            New Case
                        </button>
                        <button className={styles.commandButton}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
                            Delete ⌄
                        </button>
                        <div className={styles.commandSeparator} />
                        <button className={styles.commandButton}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" /></svg>
                            Refresh
                        </button>
                        <button className={styles.commandButton}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
                            Run Report ⌄
                        </button>
                        <button className={styles.commandButton}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                            Email a Link ⌄
                        </button>
                        <button className={styles.commandButton}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>
                            Excel Templates ⌄
                        </button>
                        <button className={styles.commandButton}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: '#107c10' }}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="12" y1="18" x2="12" y2="12" /><line x1="9" y1="15" x2="15" y2="15" /></svg>
                            Import from Excel ⌄
                        </button>
                        <button className={styles.commandButton}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>
                            Open Dashboards
                        </button>
                        <button className={styles.commandButton}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>
                            Create view
                        </button>
                    </div>

                    {/* View Header */}
                    <div className={styles.viewHeader}>
                        <div className={styles.viewTitle}>
                            Active Cases ⌄
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
                                {cases.map((item: any, idx) => (
                                    <tr key={idx} className={styles.gridRow}>
                                        <td className={styles.gridCell}><input type="checkbox" /></td>
                                        {columnDefs.map((col, colIdx) => (
                                            <td key={colIdx} className={styles.gridCell} style={{ 
                                                whiteSpace: 'nowrap', 
                                                color: col.key === 'title' || col.key === 'customer' || col.key === 'tpAccount' ? '#0078d4' : 'inherit'
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
                            <span>1 - {Math.min(100, cases.length)} of {cases.length}</span>
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
