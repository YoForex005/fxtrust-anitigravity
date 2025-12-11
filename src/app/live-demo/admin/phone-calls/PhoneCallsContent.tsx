'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../../dynamics.module.css';
import DynamicsSidebar from '../../components/DynamicsSidebar';
import DynamicsHeader from '../../components/DynamicsHeader';

export default function PhoneCallsContent() {
    const router = useRouter();
    const [activeItem, setActiveItem] = useState('Phone Calls');
    const [showChart, setShowChart] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEmailModal, setShowEmailModal] = useState(false);
    const [showAppointmentDropdown, setShowAppointmentDropdown] = useState(false);
    const [showReportDropdown, setShowReportDropdown] = useState(false);
    const [showExcelDropdown, setShowExcelDropdown] = useState(false);
    const [showImportDropdown, setShowImportDropdown] = useState(false);
    const [showActivitiesDropdown, setShowActivitiesDropdown] = useState(false);
    const [selectedRows, setSelectedRows] = useState<number[]>([]);
    const [refreshing, setRefreshing] = useState(false);

    const phoneCalls = [
        { createdOn: '10/28/2025 11:19 AM', subject: 'Call to for prod free', status: 'Placed', callFrom: 'Voiso QA', regarding: 'for prod free', description: '---' },
        { createdOn: '10/28/2025 9:29 AM', subject: 'Call to Ginny Wesley', status: 'Placed', callFrom: 'Voiso QA', regarding: 'Ginny Wesley', description: '---' },
        { createdOn: '10/27/2025 6:03 PM', subject: 'Call to John Doe', status: 'Placed', callFrom: 'Voiso QA', regarding: 'John Doe', description: '---' },
        { createdOn: '10/27/2025 5:51 PM', subject: 'Call to Orange Smorange', status: 'Placed', callFrom: 'Voiso QA', regarding: 'Orange Smorange', description: '---' },
        { createdOn: '9/17/2025 3:49 PM', subject: 'Call to Jeffrey Russel', status: 'Placed', callFrom: 'Voiso QA', regarding: 'Jeffrey Russel', description: '---' },
    ];

    const columnDefs = [
        { key: 'createdOn', label: 'Created On' },
        { key: 'subject', label: 'Subject' },
        { key: 'status', label: 'Status Reason' },
        { key: 'callFrom', label: 'Call From' },
        { key: 'regarding', label: 'Regarding' },
        { key: 'description', label: 'Description' }
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
                        <button className={styles.commandButton} onClick={() => alert('Create new task')}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /></svg>task</button>
                        <button className={styles.commandButton} onClick={() => alert('Compose email')}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /></svg>email</button>
                        <button className={styles.commandButton} onClick={() => router.push('/live-demo/admin/phone-calls/new')}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>phonecall</button>
                        <div style={{ position: 'relative' }}>
                            <button className={styles.commandButton} onClick={() => setShowActivitiesDropdown(!showActivitiesDropdown)}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /></svg>Other Activities ⌄</button>
                            {showActivitiesDropdown && <div style={{ position: 'absolute', top: '100%', left: 0, background: 'white', border: '1px solid #e1dfdd', boxShadow: '0 2px 8px rgba(0,0,0,0.15)', minWidth: '180px', zIndex: 1000 }}><div style={{ padding: '8px 16px', cursor: 'pointer', fontSize: '14px' }} onClick={() => { alert('Create meeting'); setShowActivitiesDropdown(false); }}>Meeting</div><div style={{ padding: '8px 16px', cursor: 'pointer', fontSize: '14px' }} onClick={() => { alert('Create task'); setShowActivitiesDropdown(false); }}>Task</div></div>}
                        </div>
                        <div className={styles.commandSeparator} />
                        <button className={styles.commandButton} onClick={handleRefresh} style={{ opacity: refreshing ? 0.5 : 1 }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="23 4 23 10 17 10" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" /></svg>{refreshing ? 'Refreshing...' : 'Refresh'}</button>
                        <button className={styles.commandButton} onClick={() => setShowDeleteModal(true)}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>Delete</button>
                        <div className={styles.commandSeparator} />
                        <div style={{ position: 'relative' }}>
                            <button className={styles.commandButton} onClick={() => setShowAppointmentDropdown(!showAppointmentDropdown)}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /></svg>appointment ⌄</button>
                            {showAppointmentDropdown && <div style={{ position: 'absolute', top: '100%', left: 0, background: 'white', border: '1px solid #e1dfdd', boxShadow: '0 2px 8px rgba(0,0,0,0.15)', minWidth: '180px', zIndex: 1000 }}><div style={{ padding: '8px 16px', cursor: 'pointer', fontSize: '14px' }} onClick={() => { alert('Create appointment'); setShowAppointmentDropdown(false); }}>New Appointment</div></div>}
                        </div>
                        <button className={styles.commandButton} onClick={() => setShowEmailModal(true)}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /></svg>Email a Link</button>
                        <div style={{ position: 'relative' }}>
                            <button className={styles.commandButton} onClick={() => setShowReportDropdown(!showReportDropdown)}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /></svg>Run Report ⌄</button>
                            {showReportDropdown && <div style={{ position: 'absolute', top: '100%', left: 0, background: 'white', border: '1px solid #e1dfdd', boxShadow: '0 2px 8px rgba(0,0,0,0.15)', minWidth: '180px', zIndex: 1000 }}><div style={{ padding: '8px 16px', cursor: 'pointer', fontSize: '14px' }} onClick={() => { alert('Running report...'); setShowReportDropdown(false); }}>Call Summary</div></div>}
                        </div>
                        <div style={{ position: 'relative' }}>
                            <button className={styles.commandButton} onClick={() => setShowExcelDropdown(!showExcelDropdown)}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /></svg>Excel Templates ⌄</button>
                            {showExcelDropdown && <div style={{ position: 'absolute', top: '100%', left: 0, background: 'white', border: '1px solid #e1dfdd', boxShadow: '0 2px 8px rgba(0,0,0,0.15)', minWidth: '180px', zIndex: 1000 }}><div style={{ padding: '8px 16px', cursor: 'pointer', fontSize: '14px' }} onClick={() => { alert('Downloading...'); setShowExcelDropdown(false); }}>Call Template</div></div>}
                        </div>
                        <div style={{ position: 'relative' }}>
                            <button className={styles.commandButton} onClick={() => setShowImportDropdown(!showImportDropdown)}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: '#107c10' }}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /></svg>Import ⌄</button>
                            {showImportDropdown && <div style={{ position: 'absolute', top: '100%', left: 0, background: 'white', border: '1px solid #e1dfdd', boxShadow: '0 2px 8px rgba(0,0,0,0.15)', minWidth: '180px', zIndex: 1000 }}><div style={{ padding: '8px 16px', cursor: 'pointer', fontSize: '14px' }} onClick={() => { alert('Opening import...'); setShowImportDropdown(false); }}>Import</div></div>}
                        </div>
                        <button className={styles.commandButton} onClick={() => alert('Create view')}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /></svg>Create view</button>
                    </div>
                    <div className={styles.viewHeader}><div className={styles.viewTitle}>All Phone Calls ⌄</div><div style={{ flex: 1 }} /><div className={styles.commandButton} style={{ border: '1px solid #e1dfdd', padding: '4px 8px', borderRadius: '2px', background: 'white' }}>Search this view</div></div>
                    <div style={{ padding: '10px 20px', borderBottom: '1px solid #e1dfdd', display: 'flex', alignItems: 'center', gap: '10px' }}><span style={{ fontSize: '14px', color: '#666' }}>Due</span><select style={{ padding: '4px', border: '1px solid #ccc', borderRadius: '2px' }}><option>All</option></select></div>
                    <div style={{ display: 'flex', height: 'calc(100% - 120px)', overflow: 'hidden' }}>
                        {showChart && <div style={{ width: '320px', borderRight: '1px solid #e1dfdd', background: 'white', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><div style={{ width: '200px', height: '200px', position: 'relative' }}><svg viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)' }}><circle cx="50" cy="50" r="40" fill="transparent" stroke="#5c9ad3" strokeWidth="20" strokeDasharray="150 251" /></svg><div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '10px', fontWeight: 'bold' }}>Total</div></div></div>}
                        <div className={styles.gridContainer} style={{ flex: 1 }}><table className={styles.gridTable}><thead><tr><th className={styles.gridHeader} style={{ width: '40px' }}>✓</th>{columnDefs.map((col, idx) => <th key={idx} className={styles.gridHeader} style={{ whiteSpace: 'nowrap' }}>{col.label} ⌄</th>)}</tr></thead><tbody>{phoneCalls.map((item: any, idx) => <tr key={idx} className={styles.gridRow} style={{ background: selectedRows.includes(idx) ? '#e8f4ff' : undefined }}><td className={styles.gridCell}><input type="checkbox" checked={selectedRows.includes(idx)} onChange={() => toggleRowSelection(idx)} /></td>{columnDefs.map((col, colIdx) => <td key={colIdx} className={styles.gridCell} style={{ whiteSpace: 'nowrap', color: ['subject', 'regarding'].includes(col.key) ? '#0078d4' : 'inherit' }}>{item[col.key]}</td>)}</tr>)}</tbody></table></div>
                    </div>
                    <div className={styles.footer}><div className={styles.alphabetFilter}><span>All</span>{['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'].map(c => <span key={c}>{c}</span>)}</div><div className={styles.pagination}><span>1 - {phoneCalls.length} of {phoneCalls.length}</span></div></div>
                </main>
            </div>
            {showDeleteModal && <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000 }}><div style={{ background: 'white', padding: '24px', borderRadius: '4px', minWidth: '400px' }}><h3 style={{ margin: '0 0 16px', fontSize: '18px' }}>Delete Phone Calls</h3><p style={{ margin: '0 0 24px', color: '#605e5c' }}>{selectedRows.length > 0 ? `Delete ${selectedRows.length} record(s)?` : 'Please select records to delete.'}</p><div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}><button onClick={() => setShowDeleteModal(false)} style={{ padding: '6px 16px', border: '1px solid #8a8886', background: 'white', cursor: 'pointer' }}>Cancel</button>{selectedRows.length > 0 && <button onClick={() => { alert('Deleted!'); setSelectedRows([]); setShowDeleteModal(false); }} style={{ padding: '6px 16px', border: 'none', background: '#d13438', color: 'white', cursor: 'pointer' }}>Delete</button>}</div></div></div>}
            {showEmailModal && <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000 }}><div style={{ background: 'white', padding: '24px', borderRadius: '4px', minWidth: '400px' }}><h3 style={{ margin: '0 0 16px', fontSize: '18px' }}>Email a Link</h3><div style={{ marginBottom: '16px' }}><label style={{ display: 'block', marginBottom: '4px', fontSize: '14px' }}>To</label><input type="email" placeholder="Email address" style={{ width: '100%', padding: '8px', border: '1px solid #8a8886' }} /></div><div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}><button onClick={() => setShowEmailModal(false)} style={{ padding: '6px 16px', border: '1px solid #8a8886', background: 'white', cursor: 'pointer' }}>Cancel</button><button onClick={() => { alert('Sent!'); setShowEmailModal(false); }} style={{ padding: '6px 16px', border: 'none', background: '#0078d4', color: 'white', cursor: 'pointer' }}>Send</button></div></div></div>}
        </div>
    );
}
