'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../../dynamics.module.css';
import DynamicsSidebar from '../../components/DynamicsSidebar';

export default function DocumentsPage() {
    const router = useRouter();
    const [activeItem, setActiveItem] = useState('Documents');

    // Mock data based on screenshot
    const documents = [
        { createdOn: '10/10/2025 1:27 AM', name: 'proofOfId_AAVEUSD_2025-10-09_19-13-44.png', account: 'Rico Business', owner: 'Caglar Test' },
        { createdOn: '8/14/2025 11:58 AM', name: 'TestO', account: 'TestFull Tt', owner: 'Leverate Demo Manager' },
        { createdOn: '7/7/2025 4:17 PM', name: 'proofOfResidence_photo_2025-05-06_09-56-48.jpg', account: 'Ian Branutara Sirix Demo', owner: 'LeverateDemo LeverateDemo Owner' },
        { createdOn: '6/21/2025 5:21 PM', name: 'proofOfAttorney_account page - MT.png', account: 'Test AffiliatePermissions', owner: 'LeverateDemo LeverateDemo Owner' },
        { createdOn: '6/18/2025 12:19 PM', name: 'proofOfId_for-export-2.png', account: 'Test AffiliatePermissions', owner: 'LeverateDemo LeverateDemo Owner' },
        { createdOn: '6/17/2025 12:19 PM', name: 'creditCard_682208c730697.png', account: 'regression mrc', owner: 'LeverateDemo LeverateDemo Owner' },
        { createdOn: '5/22/2025 3:55 PM', name: 'proofOfId_test2.pdf', account: 'Leverate Test Account', owner: 'LeverateDemo LeverateDemo Owner' },
        { createdOn: '5/22/2025 3:54 PM', name: 'proofOfId_test.pdf', account: 'Leverate Test Account', owner: 'LeverateDemo LeverateDemo Owner' },
        { createdOn: '5/22/2025 3:27 PM', name: 'proofOfId_test.pdf', account: 'Leverate Test Account', owner: 'LeverateDemo LeverateDemo Owner' },
        { createdOn: '4/13/2025 7:58 PM', name: 'swift_mmexport1743867883458.jpg', account: 'LeverateAsia FX', owner: 'LeverateDemo LeverateDemo Owner' },
        { createdOn: '4/9/2025 12:35 PM', name: 'swift_mmexport1743867883458.jpg', account: 'LeverateAsia FX', owner: 'LeverateDemo LeverateDemo Owner' },
        { createdOn: '4/9/2025 11:42 AM', name: 'declarationOfDeposit_mmexport1743867883458.jpg', account: 'LeverateAsia FX', owner: 'LeverateDemo LeverateDemo Owner' },
        { createdOn: '4/8/2025 6:06 PM', name: 'declarationOfDeposit_16449044357775511.jpg', account: 'LeverateAsia FX', owner: 'LeverateDemo LeverateDemo Owner' },
        { createdOn: '4/8/2025 6:05 PM', name: 'declarationOfDeposit_mmexport1743867883458.jpg', account: 'LeverateAsia FX', owner: 'LeverateDemo LeverateDemo Owner' },
        { createdOn: '4/8/2025 5:45 PM', name: 'creditCard_550216-21542399_com.ss.android.ugc.aweme.lite.png', account: 'LeverateAsia FX', owner: 'LeverateDemo LeverateDemo Owner' },
        { createdOn: '4/8/2025 4:12 PM', name: 'proofOfResidence_IMG_2665.jpeg', account: 'LeverateAsia FX', owner: 'LeverateDemo LeverateDemo Owner' },
        { createdOn: '3/22/2025 12:52 AM', name: 'proofOfResidence_Avatar Picture (1) (1) (1) (1).png', account: 'Bj Wen', owner: 'LeverateDemo LeverateDemo Owner' },
        { createdOn: '3/22/2025 12:51 AM', name: 'proofOfResidence_Avatar Picture (1) (1) (1) (1).png', account: 'Bj Wen', owner: 'LeverateDemo LeverateDemo Owner' },
    ];

    const columnDefs = [
        { key: 'createdOn', label: 'Created On' },
        { key: 'name', label: 'Name' },
        { key: 'account', label: 'Account' },
        { key: 'owner', label: 'Owner' }
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
                            New
                        </button>
                        <button className={styles.commandButton}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
                            Delete
                        </button>
                        <div className={styles.commandSeparator} />
                        <button className={styles.commandButton}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" /></svg>
                            Refresh
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
                            Documents ⌄
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
                                {documents.map((item: any, idx) => (
                                    <tr key={idx} className={styles.gridRow}>
                                        <td className={styles.gridCell}><input type="checkbox" /></td>
                                        {columnDefs.map((col, colIdx) => (
                                            <td key={colIdx} className={styles.gridCell} style={{ 
                                                whiteSpace: 'nowrap', 
                                                color: col.key === 'name' || col.key === 'account' || col.key === 'owner' ? '#0078d4' : 'inherit'
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
                            <span>1 - {Math.min(100, documents.length)} of {documents.length}</span>
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
