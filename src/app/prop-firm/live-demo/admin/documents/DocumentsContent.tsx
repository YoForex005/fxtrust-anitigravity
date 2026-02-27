'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../../dynamics.module.css';
import DynamicsSidebar from '../../components/DynamicsSidebar';
import DynamicsHeader from '../../components/DynamicsHeader';

export default function DocumentsContent() {
    const router = useRouter();
    const [activeItem, setActiveItem] = useState('Documents');
    const [showChart, setShowChart] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEmailModal, setShowEmailModal] = useState(false);
    const [showReportDropdown, setShowReportDropdown] = useState(false);
    const [showExcelDropdown, setShowExcelDropdown] = useState(false);
    const [showImportDropdown, setShowImportDropdown] = useState(false);
    const [selectedRows, setSelectedRows] = useState<number[]>([]);
    const [refreshing, setRefreshing] = useState(false);

    const documents = [
        { createdOn: '10/10/2025 1:27 AM', name: 'proofOfId_AAVEUSD.png', account: 'Rico Business', owner: 'Caglar Test' },
        { createdOn: '8/14/2025 11:58 AM', name: 'TestO', account: 'TestFull Tt', owner: 'Leverate Demo Manager' },
        { createdOn: '7/7/2025 4:17 PM', name: 'proofOfResidence.jpg', account: 'Ian Branutara Demo', owner: 'LeverateDemo Owner' },
        { createdOn: '6/21/2025 5:21 PM', name: 'proofOfAttorney.png', account: 'Test AffiliatePermissions', owner: 'LeverateDemo Owner' },
        { createdOn: '6/18/2025 12:19 PM', name: 'proofOfId_export.png', account: 'Test AffiliatePermissions', owner: 'LeverateDemo Owner' },
        { createdOn: '6/17/2025 12:19 PM', name: 'creditCard.png', account: 'regression mrc', owner: 'LeverateDemo Owner' },
        { createdOn: '5/22/2025 3:55 PM', name: 'proofOfId_test2.pdf', account: 'Leverate Test Account', owner: 'LeverateDemo Owner' },
    ];

    const columnDefs = [
        { key: 'createdOn', label: 'Created On' },
        { key: 'name', label: 'Name' },
        { key: 'account', label: 'Account' },
        { key: 'owner', label: 'Owner' }
    ];

    const handleRefresh = () => { setRefreshing(true); setTimeout(() => setRefreshing(false), 1000); };
    const toggleRowSelection = (idx: number) => { setSelectedRows(prev => prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]); };

    return (
        <div className={styles.container}>
            <DynamicsHeader />
            <div className={styles.mainLayout}>
                <DynamicsSidebar activeItem={activeItem} onNavigate={setActiveItem} />
                <main className={styles.contentArea}>
                    <div className={styles.commandBar}>
                        <button className={styles.commandButton} onClick={() => setShowChart(!showChart)}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: '#107c10' }}>{showChart ? <path d="M18 6L6 18M6 6l12 12" /> : <><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></>}</svg>
                            {showChart ? 'Hide Chart' : 'Show Chart'}
                        </button>
                        <button className={styles.commandButton} onClick={() => router.push('/prop-firm/live-demo/admin/documents/new')}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>New</button>
                        <button className={styles.commandButton} onClick={() => setShowDeleteModal(true)}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2-2v2" /></svg>Delete</button>
                        <div className={styles.commandSeparator} />
                        <button className={styles.commandButton} onClick={handleRefresh} style={{ opacity: refreshing ? 0.5 : 1 }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" /></svg>{refreshing ? 'Refreshing...' : 'Refresh'}</button>
                        <button className={styles.commandButton} onClick={() => setShowEmailModal(true)}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>Email a Link</button>
                        <div style={{ position: 'relative' }}>
                            <button className={styles.commandButton} onClick={() => setShowReportDropdown(!showReportDropdown)}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>Run Report ⌄</button>
                            {showReportDropdown && <div style={{ position: 'absolute', top: '100%', left: 0, background: 'white', border: '1px solid #e1dfdd', boxShadow: '0 2px 8px rgba(0,0,0,0.15)', minWidth: '180px', zIndex: 1000 }}><div style={{ padding: '8px 16px', cursor: 'pointer', fontSize: '14px' }} onClick={() => { alert('Running Document Report...'); setShowReportDropdown(false); }}>Document Summary</div></div>}
                        </div>
                        <div style={{ position: 'relative' }}>
                            <button className={styles.commandButton} onClick={() => setShowExcelDropdown(!showExcelDropdown)}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>Excel Templates ⌄</button>
                            {showExcelDropdown && <div style={{ position: 'absolute', top: '100%', left: 0, background: 'white', border: '1px solid #e1dfdd', boxShadow: '0 2px 8px rgba(0,0,0,0.15)', minWidth: '180px', zIndex: 1000 }}><div style={{ padding: '8px 16px', cursor: 'pointer', fontSize: '14px' }} onClick={() => { alert('Downloading Template...'); setShowExcelDropdown(false); }}>Document Template</div></div>}
                        </div>
                        <div style={{ position: 'relative' }}>
                            <button className={styles.commandButton} onClick={() => setShowImportDropdown(!showImportDropdown)}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: '#107c10' }}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="12" y1="18" x2="12" y2="12" /><line x1="9" y1="15" x2="15" y2="15" /></svg>Import ⌄</button>
                            {showImportDropdown && <div style={{ position: 'absolute', top: '100%', left: 0, background: 'white', border: '1px solid #e1dfdd', boxShadow: '0 2px 8px rgba(0,0,0,0.15)', minWidth: '180px', zIndex: 1000 }}><div style={{ padding: '8px 16px', cursor: 'pointer', fontSize: '14px' }} onClick={() => { alert('Opening import...'); setShowImportDropdown(false); }}>Import from File</div></div>}
                        </div>
                        <button className={styles.commandButton} onClick={() => alert('Create view clicked')}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>Create view</button>
                    </div>
                    <div className={styles.viewHeader}><div className={styles.viewTitle}>Documents ⌄</div><div style={{ flex: 1 }} /><div className={styles.commandButton} style={{ border: '1px solid #e1dfdd', padding: '4px 8px', borderRadius: '2px', background: 'white' }}>Search this view</div></div>
                    <div style={{ display: 'flex', height: 'calc(100% - 80px)', overflow: 'hidden' }}>
                        {showChart && <div style={{ width: '320px', borderRight: '1px solid #e1dfdd', background: 'white', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><div style={{ width: '200px', height: '200px', position: 'relative' }}><svg viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)' }}><circle cx="50" cy="50" r="40" fill="transparent" stroke="#5c9ad3" strokeWidth="20" strokeDasharray="150 251" /><circle cx="50" cy="50" r="40" fill="transparent" stroke="#ed7d31" strokeWidth="20" strokeDasharray="101 251" strokeDashoffset="-150" /></svg><div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '10px', fontWeight: 'bold' }}>Total</div></div></div>}
                        <div className={styles.gridContainer} style={{ flex: 1 }}><table className={styles.gridTable}><thead><tr><th className={styles.gridHeader} style={{ width: '40px' }}>✓</th>{columnDefs.map((col, idx) => <th key={idx} className={styles.gridHeader} style={{ whiteSpace: 'nowrap' }}>{col.label} ⌄</th>)}</tr></thead><tbody>{documents.map((item: any, idx) => <tr key={idx} className={styles.gridRow} style={{ background: selectedRows.includes(idx) ? '#e8f4ff' : undefined }}><td className={styles.gridCell}><input type="checkbox" checked={selectedRows.includes(idx)} onChange={() => toggleRowSelection(idx)} /></td>{columnDefs.map((col, colIdx) => <td key={colIdx} className={styles.gridCell} style={{ whiteSpace: 'nowrap', color: ['name', 'account', 'owner'].includes(col.key) ? '#0078d4' : 'inherit' }}>{item[col.key]}</td>)}</tr>)}</tbody></table></div>
                    </div>
                    <div className={styles.footer}><div className={styles.alphabetFilter}><span>All</span><span>#</span>{['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'].map(c => <span key={c}>{c}</span>)}</div><div className={styles.pagination}><span>1 - {documents.length} of {documents.length}</span></div></div>
                </main>
            </div>
            {showDeleteModal && <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000 }}><div style={{ background: 'white', padding: '24px', borderRadius: '4px', minWidth: '400px' }}><h3 style={{ margin: '0 0 16px', fontSize: '18px' }}>Delete Documents</h3><p style={{ margin: '0 0 24px', color: '#605e5c' }}>{selectedRows.length > 0 ? `Delete ${selectedRows.length} document(s)?` : 'Please select documents to delete.'}</p><div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}><button onClick={() => setShowDeleteModal(false)} style={{ padding: '6px 16px', border: '1px solid #8a8886', background: 'white', cursor: 'pointer' }}>Cancel</button>{selectedRows.length > 0 && <button onClick={() => { alert('Deleted!'); setSelectedRows([]); setShowDeleteModal(false); }} style={{ padding: '6px 16px', border: 'none', background: '#d13438', color: 'white', cursor: 'pointer' }}>Delete</button>}</div></div></div>}
            {showEmailModal && <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000 }}><div style={{ background: 'white', padding: '24px', borderRadius: '4px', minWidth: '400px' }}><h3 style={{ margin: '0 0 16px', fontSize: '18px' }}>Email a Link</h3><div style={{ marginBottom: '16px' }}><label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>To</label><input type="email" placeholder="Email address" style={{ width: '100%', padding: '8px', border: '1px solid #8a8886' }} /></div><div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}><button onClick={() => setShowEmailModal(false)} style={{ padding: '6px 16px', border: '1px solid #8a8886', background: 'white', cursor: 'pointer' }}>Cancel</button><button onClick={() => { alert('Email sent!'); setShowEmailModal(false); }} style={{ padding: '6px 16px', border: 'none', background: '#0078d4', color: 'white', cursor: 'pointer' }}>Send</button></div></div></div>}
        </div>
    );
}
