'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../../dynamics.module.css';
import DynamicsSidebar from '../../components/DynamicsSidebar';

export default function PhoneCallsPage() {
    const router = useRouter();
    const [activeItem, setActiveItem] = useState('Phone Calls');

    // Mock data based on screenshot
    const phoneCalls = [
        { createdOn: '10/28/2025 11:19 AM', subject: 'Call to for prod freefor prod free via for prod free phone', status: 'Placed', callFrom: 'Voiso QA', regarding: 'for prod free', description: '---' },
        { createdOn: '10/28/2025 11:19 AM', subject: 'Call to for prod freefor prod free via for prod free phone', status: 'Placed', callFrom: 'Voiso QA', regarding: 'for prod free', description: '---' },
        { createdOn: '10/28/2025 9:29 AM', subject: 'Call to Ginny WesleyGinny Wesley via Ginny Wesley phone', status: 'Placed', callFrom: 'Voiso QA', regarding: 'Ginny Wesley', description: '---' },
        { createdOn: '10/27/2025 6:03 PM', subject: 'Call to Ginny WesleyGinny Wesley via Ginny Wesley phone', status: 'Placed', callFrom: 'Voiso QA', regarding: 'Ginny Wesley', description: '---' },
        { createdOn: '10/27/2025 6:02 PM', subject: 'Call to John DoeJohn Doe via John Doe phone', status: 'Placed', callFrom: 'Voiso QA', regarding: 'John Doe', description: '---' },
        { createdOn: '10/27/2025 5:58 PM', subject: 'Call to Ginny WesleyGinny Wesley via Ginny Wesley phone', status: 'Placed', callFrom: 'Voiso QA', regarding: 'Ginny Wesley', description: '---' },
        { createdOn: '10/27/2025 5:57 PM', subject: 'Call to Ginny WesleyGinny Wesley via Ginny Wesley phone', status: 'Placed', callFrom: 'Voiso QA', regarding: 'Ginny Wesley', description: '---' },
        { createdOn: '10/27/2025 5:51 PM', subject: 'Call to John DoeJohn Doe via John Doe phone', status: 'Placed', callFrom: 'Voiso QA', regarding: 'John Doe', description: '---' },
        { createdOn: '10/27/2025 5:51 PM', subject: 'Call to John DoeJohn Doe via John Doe phone', status: 'Placed', callFrom: 'Voiso QA', regarding: 'John Doe', description: '---' },
        { createdOn: '10/27/2025 5:31 PM', subject: 'Call to Orange SmorangeOrange Smorange via Orange Smora', status: 'Placed', callFrom: 'Voiso QA', regarding: 'Orange Smorange', description: '---' },
        { createdOn: '10/27/2025 5:26 PM', subject: 'Call to Ginny WesleyGinny Wesley via Ginny Wesley phone', status: 'Placed', callFrom: 'Voiso QA', regarding: 'Ginny Wesley', description: '---' },
        { createdOn: '10/27/2025 5:20 PM', subject: 'Call to Orange SmorangeOrange Smorange via Orange Smora', status: 'Placed', callFrom: 'Voiso QA', regarding: 'Orange Smorange', description: '---' },
        { createdOn: '10/27/2025 5:18 PM', subject: 'Call to Ginny WesleyGinny Wesley via Ginny Wesley phone', status: 'Placed', callFrom: 'Voiso QA', regarding: 'Ginny Wesley', description: '---' },
        { createdOn: '10/27/2025 5:18 PM', subject: 'Call to Ginny WesleyGinny Wesley via Ginny Wesley phone', status: 'Placed', callFrom: 'Voiso QA', regarding: 'Ginny Wesley', description: '---' },
        { createdOn: '10/27/2025 5:18 PM', subject: 'Call to Ginny WesleyGinny Wesley via Ginny Wesley phone', status: 'Placed', callFrom: 'Voiso QA', regarding: 'Ginny Wedey', description: '---' },
        { createdOn: '9/17/2025 3:49 PM', subject: 'Call to Jeffrey RusselJeffrey Russel via Jeffrey Russel phone', status: 'Placed', callFrom: 'Voiso QA', regarding: 'Jeffrey Russel', description: '---' },
        { createdOn: '9/17/2025 3:44 PM', subject: 'Call to Jeffrey RusselJeffrey Russel via Jeffrey Russel phone', status: 'Placed', callFrom: 'Voiso QA', regarding: 'Jeffrey Russel', description: '---' },
    ];

    const columnDefs = [
        { key: 'createdOn', label: 'Created On' },
        { key: 'subject', label: 'Subject' },
        { key: 'status', label: 'Status Reason' },
        { key: 'callFrom', label: 'Call From' },
        { key: 'regarding', label: 'Regarding' },
        { key: 'description', label: 'Description' }
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
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                            task
                        </button>
                        <button className={styles.commandButton}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                            email
                        </button>
                        <button className={styles.commandButton}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            phonecall
                        </button>
                        <button className={styles.commandButton}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>
                            Other Activities ⌄
                        </button>
                        <div className={styles.commandSeparator} />
                        <button className={styles.commandButton}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" /></svg>
                            Refresh
                        </button>
                        <button className={styles.commandButton}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
                            Delete
                        </button>
                        <div className={styles.commandSeparator} />
                        <button className={styles.commandButton}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                            appointment ⌄
                        </button>
                        <button className={styles.commandButton}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                            Email a Link ⌄
                        </button>
                        <button className={styles.commandButton}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
                            Run Report ⌄
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
                            Create view
                        </button>
                    </div>

                    {/* View Header */}
                    <div className={styles.viewHeader}>
                        <div className={styles.viewTitle}>
                            All Phone Calls ⌄
                        </div>
                        <div style={{ flex: 1 }} />
                        <div className={styles.commandButton} style={{ border: '1px solid #e1dfdd', padding: '4px 8px', borderRadius: '2px', background: 'white' }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ marginRight: '8px' }}><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                            Search this view
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ marginLeft: '32px' }}><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                        </div>
                    </div>

                    {/* Filter Bar */}
                    <div style={{ padding: '10px 20px', borderBottom: '1px solid #e1dfdd', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ fontSize: '14px', color: '#666' }}>Due</span>
                        <select style={{ padding: '4px', border: '1px solid #ccc', borderRadius: '2px' }}>
                            <option>All</option>
                        </select>
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
                                {phoneCalls.map((item: any, idx) => (
                                    <tr key={idx} className={styles.gridRow}>
                                        <td className={styles.gridCell}><input type="checkbox" /></td>
                                        {columnDefs.map((col, colIdx) => (
                                            <td key={colIdx} className={styles.gridCell} style={{ 
                                                whiteSpace: 'nowrap', 
                                                color: col.key === 'subject' || col.key === 'regarding' ? '#0078d4' : 'inherit'
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
                            <span>1 - {Math.min(100, phoneCalls.length)} of {phoneCalls.length}</span>
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
