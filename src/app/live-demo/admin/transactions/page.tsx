'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../../dynamics.module.css';
import DynamicsSidebar from '../../components/DynamicsSidebar';
import DynamicsHeader from '../../components/DynamicsHeader';

export default function TransactionsPage() {
    const router = useRouter();
    const [activeItem, setActiveItem] = useState('Monetary Transactions');
    const [showChart, setShowChart] = useState(false);

    // Modal states
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showExportDropdown, setShowExportDropdown] = useState(false);
    const [showImportDropdown, setShowImportDropdown] = useState(false);
    const [showCreateViewModal, setShowCreateViewModal] = useState(false);
    const [selectedRows, setSelectedRows] = useState<number[]>([]);
    const [refreshing, setRefreshing] = useState(false);

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

    const handleRefresh = () => {
        setRefreshing(true);
        setTimeout(() => setRefreshing(false), 1000);
    };

    const toggleRowSelection = (idx: number) => {
        setSelectedRows(prev =>
            prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
        );
    };

    return (
        <div className={styles.container}>
            {/* Header */}
            <DynamicsHeader />

            <div className={styles.mainLayout}>
                {/* Sidebar */}
                <DynamicsSidebar activeItem={activeItem} onNavigate={setActiveItem} />

                {/* Main Content */}
                <main className={styles.contentArea}>
                    {/* Command Bar */}
                    <div className={styles.commandBar}>
                        <button className={styles.commandButton} onClick={() => setShowChart(!showChart)}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: '#107c10' }}>
                                {showChart ? (
                                    <path d="M18 6L6 18M6 6l12 12" />
                                ) : (
                                    <>
                                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                        <line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" />
                                    </>
                                )}
                            </svg>
                            {showChart ? 'Hide Chart' : 'Show Chart'}
                        </button>
                        <button className={styles.commandButton} onClick={handleRefresh} style={{ opacity: refreshing ? 0.5 : 1 }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ animation: refreshing ? 'spin 1s linear infinite' : 'none' }}><polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" /></svg>
                            {refreshing ? 'Refreshing...' : 'Refresh'}
                        </button>
                        <button className={styles.commandButton} onClick={() => router.push('/live-demo/admin/transactions/new')}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                            New
                        </button>
                        <button className={styles.commandButton} onClick={() => setShowDeleteModal(true)}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
                            Delete
                        </button>
                        <div className={styles.commandSeparator} />
                        <div style={{ position: 'relative' }}>
                            <button className={styles.commandButton} onClick={() => setShowExportDropdown(!showExportDropdown)}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: '#107c10' }}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="8" y1="13" x2="16" y2="13" /><line x1="8" y1="17" x2="16" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                Export to Excel ⌄
                            </button>
                            {showExportDropdown && (
                                <div style={{ position: 'absolute', top: '100%', left: 0, background: 'white', border: '1px solid #e1dfdd', boxShadow: '0 2px 8px rgba(0,0,0,0.15)', minWidth: '200px', zIndex: 1000 }}>
                                    <div style={{ padding: '8px 16px', cursor: 'pointer', fontSize: '14px' }} onClick={() => { alert('Exporting all transactions...'); setShowExportDropdown(false); }}>Export All Records</div>
                                    <div style={{ padding: '8px 16px', cursor: 'pointer', fontSize: '14px' }} onClick={() => { alert('Exporting selected transactions...'); setShowExportDropdown(false); }}>Export Selected</div>
                                    <div style={{ padding: '8px 16px', cursor: 'pointer', fontSize: '14px' }} onClick={() => { alert('Exporting current page...'); setShowExportDropdown(false); }}>Export Current Page</div>
                                </div>
                            )}
                        </div>
                        <div style={{ position: 'relative' }}>
                            <button className={styles.commandButton} onClick={() => setShowImportDropdown(!showImportDropdown)}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: '#107c10' }}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="12" y1="18" x2="12" y2="12" /><line x1="9" y1="15" x2="15" y2="15" /></svg>
                                Import from Excel ⌄
                            </button>
                            {showImportDropdown && (
                                <div style={{ position: 'absolute', top: '100%', left: 0, background: 'white', border: '1px solid #e1dfdd', boxShadow: '0 2px 8px rgba(0,0,0,0.15)', minWidth: '200px', zIndex: 1000 }}>
                                    <div style={{ padding: '8px 16px', cursor: 'pointer', fontSize: '14px' }} onClick={() => { alert('Opening import wizard...'); setShowImportDropdown(false); }}>Import from File</div>
                                    <div style={{ padding: '8px 16px', cursor: 'pointer', fontSize: '14px' }} onClick={() => { alert('Download import template...'); setShowImportDropdown(false); }}>Download Template</div>
                                </div>
                            )}
                        </div>
                        <div className={styles.commandSeparator} />
                        <button className={styles.commandButton} onClick={() => setShowCreateViewModal(true)}>
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

                    {/* Content Container (Split View) */}
                    <div style={{ display: 'flex', height: 'calc(100% - 80px)', overflow: 'hidden' }}>
                        {/* Chart Panel */}
                        {showChart && (
                            <div style={{ width: '320px', borderRight: '1px solid #e1dfdd', background: 'white', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ padding: '10px 15px', borderBottom: '1px solid #e1dfdd', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ fontSize: '12px', fontWeight: '600' }}>Transactions by Type (Pie) ⌄</span>
                                    <div style={{ display: 'flex', gap: '8px' }}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="1" /><circle cx="12" cy="5" r="1" /><circle cx="12" cy="19" r="1" /></svg>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ cursor: 'pointer' }} onClick={() => setShowChart(false)}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                                    </div>
                                </div>
                                <div style={{ flex: 1, padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                                    {/* Mock Donut Chart */}
                                    <div style={{ position: 'relative', width: '200px', height: '200px' }}>
                                        <svg viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)' }}>
                                            <circle cx="50" cy="50" r="40" fill="transparent" stroke="#5c9ad3" strokeWidth="20" strokeDasharray="150 251" />
                                            <circle cx="50" cy="50" r="40" fill="transparent" stroke="#ed7d31" strokeWidth="20" strokeDasharray="101 251" strokeDashoffset="-150" />
                                        </svg>
                                        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '10px', fontWeight: 'bold' }}>
                                            Total
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Data Grid */}
                        <div className={styles.gridContainer} style={{ flex: 1 }}>
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
                                        <tr key={idx} className={styles.gridRow} style={{ background: selectedRows.includes(idx) ? '#e8f4ff' : undefined }}>
                                            <td className={styles.gridCell}>
                                                <input
                                                    type="checkbox"
                                                    checked={selectedRows.includes(idx)}
                                                    onChange={() => toggleRowSelection(idx)}
                                                />
                                            </td>
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

            {/* Delete Confirmation Modal */}
            {showDeleteModal && (
                <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000 }}>
                    <div style={{ background: 'white', padding: '24px', borderRadius: '4px', minWidth: '400px', boxShadow: '0 4px 16px rgba(0,0,0,0.2)' }}>
                        <h3 style={{ margin: '0 0 16px', fontSize: '18px' }}>Delete Transactions</h3>
                        <p style={{ margin: '0 0 24px', color: '#605e5c' }}>
                            {selectedRows.length > 0
                                ? `Are you sure you want to delete ${selectedRows.length} selected transaction(s)?`
                                : 'Please select at least one transaction to delete.'}
                        </p>
                        <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                            <button onClick={() => setShowDeleteModal(false)} style={{ padding: '6px 16px', border: '1px solid #8a8886', background: 'white', cursor: 'pointer' }}>Cancel</button>
                            {selectedRows.length > 0 && (
                                <button onClick={() => { alert('Transactions deleted!'); setSelectedRows([]); setShowDeleteModal(false); }} style={{ padding: '6px 16px', border: 'none', background: '#d13438', color: 'white', cursor: 'pointer' }}>Delete</button>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Create View Modal */}
            {showCreateViewModal && (
                <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000 }}>
                    <div style={{ background: 'white', padding: '24px', borderRadius: '4px', minWidth: '450px', boxShadow: '0 4px 16px rgba(0,0,0,0.2)' }}>
                        <h3 style={{ margin: '0 0 16px', fontSize: '18px' }}>Create New View</h3>
                        <div style={{ marginBottom: '16px' }}>
                            <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px', color: '#323130' }}>View Name</label>
                            <input type="text" placeholder="Enter view name" style={{ width: '100%', padding: '8px', border: '1px solid #8a8886' }} />
                        </div>
                        <div style={{ marginBottom: '16px' }}>
                            <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px', color: '#323130' }}>Description</label>
                            <textarea placeholder="Enter description" rows={3} style={{ width: '100%', padding: '8px', border: '1px solid #8a8886', resize: 'vertical' }} />
                        </div>
                        <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                            <button onClick={() => setShowCreateViewModal(false)} style={{ padding: '6px 16px', border: '1px solid #8a8886', background: 'white', cursor: 'pointer' }}>Cancel</button>
                            <button onClick={() => { alert('View created!'); setShowCreateViewModal(false); }} style={{ padding: '6px 16px', border: 'none', background: '#0078d4', color: 'white', cursor: 'pointer' }}>Create</button>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
}
