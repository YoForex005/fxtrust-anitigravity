'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../dynamics.module.css';
import accountsData from './data.json';
import DynamicsSidebar from '../components/DynamicsSidebar';
import DynamicsHeader from '../components/DynamicsHeader';

export default function DynamicsAdminPage() {
    const router = useRouter();
    const [activeItem, setActiveItem] = useState('Accounts');
<<<<<<< HEAD
    const [recentOpen, setRecentOpen] = useState(true);
    const [pinnedOpen, setPinnedOpen] = useState(true);
=======
    const [showChart, setShowChart] = useState(false);

    // Modal states for command bar buttons
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showMassAssignment, setShowMassAssignment] = useState(false);
    const [showBonusModal, setShowBonusModal] = useState(false);
    const [showNotificationModal, setShowNotificationModal] = useState(false);
    const [showExportDropdown, setShowExportDropdown] = useState(false);
    const [showImportDropdown, setShowImportDropdown] = useState(false);
    const [showDashboardsPanel, setShowDashboardsPanel] = useState(false);
    const [showExtensionModal, setShowExtensionModal] = useState(false);
    const [selectedRows, setSelectedRows] = useState<number[]>([]);
    const [refreshing, setRefreshing] = useState(false);
>>>>>>> fxTrustAdmin

    // Define explicit columns to match the reference image and exclude system columns
    const columnDefs = [
        { key: 'Created On', label: 'Created On' },
        { key: 'First Name', label: 'First Name' },
        { key: 'Last Name', label: 'Last Name' },
        { key: 'E-mail', label: 'E-mail' },
        { key: 'Business Unit Name', label: 'Business Unit' },
        { key: 'Phone 1: Phone', label: 'Phone 1' },
        { key: 'Last Deposit Date', label: 'Last Deposit' },
        { key: 'Sum of Deposits (USD)', label: 'Sum of Deposits (USD)' },
        { key: 'Owner', label: 'Owner' },
        { key: 'Account Status', label: 'Account Status' },
        { key: 'Lead Status', label: 'Lead Status' },
        { key: 'Main TP Account', label: 'Main TP Account' },
        { key: 'Conversion Owner', label: 'Conversion Owner' },
        { key: 'Retention owner', label: 'Retention owner' },
        { key: 'Modified On', label: 'Modified On' }
    ];

    // Cast data to any[] to avoid type errors with imported JSON
    const data = accountsData as any[];

    // Handle refresh action
    const handleRefresh = () => {
        setRefreshing(true);
        setTimeout(() => setRefreshing(false), 1000);
    };

    // Handle row selection
    const toggleRowSelection = (idx: number) => {
        setSelectedRows(prev =>
            prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
        );
    };

    return (
        <div className={styles.container}>
            {/* 1. Global Header */}
            {/* 1. Global Header */}
            <DynamicsHeader />

            {/* 2. Main Layout */}
            <div className={styles.mainLayout}>
                {/* Sidebar */}
<<<<<<< HEAD
                <aside className={styles.sidebar}>
                    <div className={styles.sidebarGroup}>
                        <div className={styles.sidebarItem}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                            Home
                        </div>

                        {/* Recent Expanded */}
                        <div className={styles.sidebarItem} onClick={() => setRecentOpen(!recentOpen)}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                            Recent
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: 'auto', transform: recentOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}><path d="M18 15l-6-6-6 6" /></svg>
                        </div>
                        {recentOpen && (
                            <div className={styles.recentList}>
                                {['Active Accounts', 'All Transactions', 'Available Roles', 'Enabled Users', 'All Phone Calls', 'Real-Time Trading ...', 'asma bazani', 'Accounts', 'Mahmoud Makahl...', 'Active Brands'].map((item, i) => (
                                    <div key={i} className={styles.recentItem}>{item}</div>
                                ))}
                            </div>
                        )}

                        {/* Pinned Expanded */}
                        <div className={styles.sidebarItem} onClick={() => setPinnedOpen(!pinnedOpen)}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4a2 2 0 0 0-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42z" /><circle cx="6.5" cy="6.5" r="1.5" /></svg>
                            Pinned
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: 'auto', transform: pinnedOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}><path d="M18 15l-6-6-6 6" /></svg>
                        </div>
                        {pinnedOpen && (
                            <div className={styles.recentList}>
                                {['Real-Time Trading ...', 'Active IPs', 'Active Cases', 'Sergiu Presentation', 'Yasser Attia Presen...', 'Demo Test'].map((item, i) => (
                                    <div key={i} className={styles.recentItem}>{item}</div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className={styles.sidebarGroup}>
                        <div className={styles.sidebarGroupTitle}>My Work</div>
                        <div className={`${styles.sidebarItem} ${activeItem === 'Accounts' ? styles.sidebarItemActive : ''}`} onClick={() => setActiveItem('Accounts')}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line x1="20" y1="8" x2="20" y2="14" /><line x1="23" y1="11" x2="17" y2="11" /></svg>
                            Accounts
                        </div>
                        <div className={styles.sidebarItem}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                            Monetary Transactions
                        </div>
                        <div className={styles.sidebarItem}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>
                            Real-Time Trading
                        </div>
                    </div>

                    <div className={styles.sidebarGroup}>
                        <div className={styles.sidebarGroupTitle}>Activities</div>
                        <div className={styles.sidebarItem}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            Phone Calls
                        </div>
                        <div className={styles.sidebarItem}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                            Emails
                        </div>
                    </div>

                    <div className={styles.sidebarGroup}>
                        <div className={styles.sidebarGroupTitle}>Back Office</div>
                        <div className={styles.sidebarItem}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                            Documents
                        </div>
                        <div className={styles.sidebarItem}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
                            Cases
                        </div>
                    </div>

                    <div className={styles.sidebarGroup}>
                        <div className={styles.sidebarGroupTitle}>Tools</div>
                        <div className={styles.sidebarItem}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="7" height="9" /><rect x="14" y="3" width="7" height="5" /><rect x="14" y="12" width="7" height="9" /><rect x="3" y="16" width="7" height="5" /></svg>
                            Dashboards
                        </div>
                        <div className={styles.sidebarItem}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                            Reports
                        </div>
                    </div>
                </aside>
=======
                <DynamicsSidebar activeItem={activeItem} onNavigate={setActiveItem} />
>>>>>>> fxTrustAdmin

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
                                        <line x1="3" y1="9" x2="21" y2="9" />
                                        <line x1="9" y1="21" x2="9" y2="9" />
                                    </>
                                )}
                            </svg>
                            {showChart ? 'Hide Chart' : 'Show Chart'}
                        </button>
                        <button className={styles.commandButton} onClick={() => router.push('/live-demo/admin/new')}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                            New
                        </button>
                        <button className={styles.commandButton} onClick={() => setShowDeleteModal(true)}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
                            Delete
                        </button>
                        <div className={styles.commandSeparator} />
                        <button className={styles.commandButton} onClick={() => setShowExtensionModal(true)}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>
                            Set extension
                        </button>
                        <button className={styles.commandButton} onClick={() => setShowMassAssignment(true)}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                            Mass Assignment
                        </button>
                        <button className={styles.commandButton} onClick={() => setShowBonusModal(true)}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                            Realize Bonus
                        </button>
                        <button className={styles.commandButton} onClick={() => setShowNotificationModal(true)}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
                            Send Notification
                        </button>
                        <div className={styles.commandSeparator} />
                        <button className={styles.commandButton} onClick={handleRefresh} style={{ opacity: refreshing ? 0.5 : 1 }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ animation: refreshing ? 'spin 1s linear infinite' : 'none' }}><polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" /></svg>
                            {refreshing ? 'Refreshing...' : 'Refresh'}
                        </button>
                        <div style={{ position: 'relative' }}>
                            <button className={styles.commandButton} onClick={() => setShowExportDropdown(!showExportDropdown)}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: '#107c10' }}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="8" y1="13" x2="16" y2="13" /><line x1="8" y1="17" x2="16" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                Export to Excel ⌄
                            </button>
                            {showExportDropdown && (
                                <div style={{ position: 'absolute', top: '100%', left: 0, background: 'white', border: '1px solid #e1dfdd', boxShadow: '0 2px 8px rgba(0,0,0,0.15)', minWidth: '200px', zIndex: 1000 }}>
                                    <div style={{ padding: '8px 16px', cursor: 'pointer', fontSize: '14px' }} onClick={() => { alert('Exporting all records to Excel...'); setShowExportDropdown(false); }}>Export All Records</div>
                                    <div style={{ padding: '8px 16px', cursor: 'pointer', fontSize: '14px' }} onClick={() => { alert('Exporting selected records to Excel...'); setShowExportDropdown(false); }}>Export Selected Records</div>
                                    <div style={{ padding: '8px 16px', cursor: 'pointer', fontSize: '14px' }} onClick={() => { alert('Exporting current page to Excel...'); setShowExportDropdown(false); }}>Export Current Page</div>
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
                        <button className={styles.commandButton} onClick={() => setShowDashboardsPanel(!showDashboardsPanel)}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>
                            Open Dashboards
                        </button>
                        <button className={styles.commandButton}>⋮</button>
                    </div>

                    {/* View Header */}
                    <div className={styles.viewHeader}>
                        <div className={styles.viewTitle}>
                            Active Accounts ⌄
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
                                    <span style={{ fontSize: '12px', fontWeight: '600' }}>Accounts by Affiliate (Pie) ⌄</span>
                                    <div style={{ display: 'flex', gap: '8px' }}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="1" /><circle cx="12" cy="5" r="1" /><circle cx="12" cy="19" r="1" /></svg>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ cursor: 'pointer' }} onClick={() => setShowChart(false)}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                                    </div>
                                </div>
                                <div style={{ flex: 1, padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                                    {/* Mock Donut Chart */}
                                    <div style={{ position: 'relative', width: '200px', height: '200px' }}>
                                        <svg viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)' }}>
                                            <circle cx="50" cy="50" r="40" fill="transparent" stroke="#5c9ad3" strokeWidth="20" strokeDasharray="210 251" /> {/* Blue - 85% */}
                                            <circle cx="50" cy="50" r="40" fill="transparent" stroke="#ed7d31" strokeWidth="20" strokeDasharray="15 251" strokeDashoffset="-210" /> {/* Orange - 6% */}
                                            <circle cx="50" cy="50" r="40" fill="transparent" stroke="#a5a5a5" strokeWidth="20" strokeDasharray="10 251" strokeDashoffset="-225" /> {/* Grey - 4% */}
                                            <circle cx="50" cy="50" r="40" fill="transparent" stroke="#ffc000" strokeWidth="20" strokeDasharray="5 251" strokeDashoffset="-235" /> {/* Yellow - 2% */}
                                            <circle cx="50" cy="50" r="40" fill="transparent" stroke="#4472c4" strokeWidth="20" strokeDasharray="3 251" strokeDashoffset="-240" /> {/* Dark Blue - 1% */}
                                            <circle cx="50" cy="50" r="40" fill="transparent" stroke="#70ad47" strokeWidth="20" strokeDasharray="3 251" strokeDashoffset="-243" /> {/* Green - 1% */}
                                        </svg>
                                        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '10px', fontWeight: 'bold' }}>
                                            7,691
                                        </div>
                                        {/* Labels (simplified) */}
                                        <div style={{ position: 'absolute', top: '10%', left: '-10%', fontSize: '10px' }}>47</div>
                                        <div style={{ position: 'absolute', top: '20%', left: '-15%', fontSize: '10px' }}>30</div>
                                        <div style={{ position: 'absolute', top: '30%', left: '-18%', fontSize: '10px' }}>22</div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Dashboards Panel */}
                        {showDashboardsPanel && (
                            <div style={{ width: '280px', borderRight: '1px solid #e1dfdd', background: '#f3f2f1', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ padding: '12px 16px', borderBottom: '1px solid #e1dfdd', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'white' }}>
                                    <span style={{ fontWeight: '600', fontSize: '14px' }}>Dashboards</span>
                                    <span style={{ cursor: 'pointer' }} onClick={() => setShowDashboardsPanel(false)}>✕</span>
                                </div>
                                <div style={{ flex: 1, padding: '8px', overflowY: 'auto' }}>
                                    {['Sales Overview', 'Account Performance', 'Revenue Trends', 'Customer Activity', 'Lead Pipeline'].map((dash, i) => (
                                        <div key={i} style={{ padding: '10px 12px', background: 'white', marginBottom: '4px', cursor: 'pointer', borderRadius: '2px', fontSize: '13px' }} onClick={() => router.push('/live-demo/admin/dashboards')}>
                                            {dash}
                                        </div>
                                    ))}
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
                                            <th key={idx} className={styles.gridHeader} style={{ whiteSpace: 'nowrap' }}>{col.label} ⌄</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((account: any, idx) => (
                                        <tr
                                            key={idx}
                                            className={styles.gridRow}
                                            style={{ cursor: 'pointer', background: selectedRows.includes(idx) ? '#e8f4ff' : undefined }}
                                        >
                                            <td className={styles.gridCell}>
                                                <input
                                                    type="checkbox"
                                                    checked={selectedRows.includes(idx)}
                                                    onChange={() => toggleRowSelection(idx)}
                                                    onClick={(e) => e.stopPropagation()}
                                                />
                                            </td>
                                            {columnDefs.map((col, colIdx) => (
                                                <td
                                                    key={colIdx}
                                                    className={styles.gridCell}
                                                    style={{ whiteSpace: 'nowrap', maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis' }}
                                                    onClick={() => router.push(`/live-demo/admin/${idx}`)}
                                                >
                                                    {col.key === 'First Name' || col.key === 'Owner' ? (
                                                        <a href="#" className={styles.gridLink}>{account[col.key]}</a>
                                                    ) : (
                                                        account[col.key]
                                                    )}
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
                            <span>1 - {Math.min(100, data.length)} of {data.length}</span>
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
                        <h3 style={{ margin: '0 0 16px', fontSize: '18px' }}>Delete Records</h3>
                        <p style={{ margin: '0 0 24px', color: '#605e5c' }}>
                            {selectedRows.length > 0
                                ? `Are you sure you want to delete ${selectedRows.length} selected record(s)?`
                                : 'Please select at least one record to delete.'}
                        </p>
                        <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                            <button onClick={() => setShowDeleteModal(false)} style={{ padding: '6px 16px', border: '1px solid #8a8886', background: 'white', cursor: 'pointer' }}>Cancel</button>
                            {selectedRows.length > 0 && (
                                <button onClick={() => { alert('Records deleted!'); setSelectedRows([]); setShowDeleteModal(false); }} style={{ padding: '6px 16px', border: 'none', background: '#d13438', color: 'white', cursor: 'pointer' }}>Delete</button>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Set Extension Modal */}
            {showExtensionModal && (
                <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000 }}>
                    <div style={{ background: 'white', padding: '24px', borderRadius: '4px', minWidth: '450px', boxShadow: '0 4px 16px rgba(0,0,0,0.2)' }}>
                        <h3 style={{ margin: '0 0 16px', fontSize: '18px' }}>Set Extension</h3>
                        <div style={{ marginBottom: '16px' }}>
                            <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px', color: '#323130' }}>Extension Type</label>
                            <select style={{ width: '100%', padding: '8px', border: '1px solid #8a8886' }}>
                                <option>Standard Extension</option>
                                <option>Premium Extension</option>
                                <option>Enterprise Extension</option>
                            </select>
                        </div>
                        <div style={{ marginBottom: '16px' }}>
                            <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px', color: '#323130' }}>Duration (Days)</label>
                            <input type="number" defaultValue={30} style={{ width: '100%', padding: '8px', border: '1px solid #8a8886' }} />
                        </div>
                        <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                            <button onClick={() => setShowExtensionModal(false)} style={{ padding: '6px 16px', border: '1px solid #8a8886', background: 'white', cursor: 'pointer' }}>Cancel</button>
                            <button onClick={() => { alert('Extension set successfully!'); setShowExtensionModal(false); }} style={{ padding: '6px 16px', border: 'none', background: '#0078d4', color: 'white', cursor: 'pointer' }}>Apply</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Mass Assignment Modal */}
            {showMassAssignment && (
                <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000 }}>
                    <div style={{ background: 'white', padding: '24px', borderRadius: '4px', minWidth: '500px', boxShadow: '0 4px 16px rgba(0,0,0,0.2)' }}>
                        <h3 style={{ margin: '0 0 16px', fontSize: '18px' }}>Mass Assignment</h3>
                        <div style={{ marginBottom: '16px' }}>
                            <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px', color: '#323130' }}>Assign To</label>
                            <select style={{ width: '100%', padding: '8px', border: '1px solid #8a8886' }}>
                                <option>Select User...</option>
                                <option>John Smith</option>
                                <option>Sarah Johnson</option>
                                <option>Mike Wilson</option>
                            </select>
                        </div>
                        <div style={{ marginBottom: '16px' }}>
                            <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px', color: '#323130' }}>Assignment Type</label>
                            <select style={{ width: '100%', padding: '8px', border: '1px solid #8a8886' }}>
                                <option>Owner</option>
                                <option>Conversion Owner</option>
                                <option>Retention Owner</option>
                            </select>
                        </div>
                        <p style={{ fontSize: '13px', color: '#605e5c' }}>Selected records: {selectedRows.length || 'None'}</p>
                        <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                            <button onClick={() => setShowMassAssignment(false)} style={{ padding: '6px 16px', border: '1px solid #8a8886', background: 'white', cursor: 'pointer' }}>Cancel</button>
                            <button onClick={() => { alert('Mass assignment completed!'); setShowMassAssignment(false); }} style={{ padding: '6px 16px', border: 'none', background: '#0078d4', color: 'white', cursor: 'pointer' }}>Assign</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Realize Bonus Modal */}
            {showBonusModal && (
                <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000 }}>
                    <div style={{ background: 'white', padding: '24px', borderRadius: '4px', minWidth: '450px', boxShadow: '0 4px 16px rgba(0,0,0,0.2)' }}>
                        <h3 style={{ margin: '0 0 16px', fontSize: '18px' }}>Realize Bonus</h3>
                        <div style={{ marginBottom: '16px' }}>
                            <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px', color: '#323130' }}>Bonus Type</label>
                            <select style={{ width: '100%', padding: '8px', border: '1px solid #8a8886' }}>
                                <option>Welcome Bonus</option>
                                <option>Deposit Bonus</option>
                                <option>Trading Bonus</option>
                                <option>Referral Bonus</option>
                            </select>
                        </div>
                        <div style={{ marginBottom: '16px' }}>
                            <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px', color: '#323130' }}>Amount (USD)</label>
                            <input type="number" placeholder="Enter amount" style={{ width: '100%', padding: '8px', border: '1px solid #8a8886' }} />
                        </div>
                        <p style={{ fontSize: '13px', color: '#605e5c' }}>Selected accounts: {selectedRows.length || 'None'}</p>
                        <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                            <button onClick={() => setShowBonusModal(false)} style={{ padding: '6px 16px', border: '1px solid #8a8886', background: 'white', cursor: 'pointer' }}>Cancel</button>
                            <button onClick={() => { alert('Bonus realized!'); setShowBonusModal(false); }} style={{ padding: '6px 16px', border: 'none', background: '#107c10', color: 'white', cursor: 'pointer' }}>Realize</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Send Notification Modal */}
            {showNotificationModal && (
                <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000 }}>
                    <div style={{ background: 'white', padding: '24px', borderRadius: '4px', minWidth: '500px', boxShadow: '0 4px 16px rgba(0,0,0,0.2)' }}>
                        <h3 style={{ margin: '0 0 16px', fontSize: '18px' }}>Send Notification</h3>
                        <div style={{ marginBottom: '16px' }}>
                            <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px', color: '#323130' }}>Notification Type</label>
                            <select style={{ width: '100%', padding: '8px', border: '1px solid #8a8886' }}>
                                <option>Email</option>
                                <option>SMS</option>
                                <option>Push Notification</option>
                                <option>In-App Message</option>
                            </select>
                        </div>
                        <div style={{ marginBottom: '16px' }}>
                            <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px', color: '#323130' }}>Subject</label>
                            <input type="text" placeholder="Enter subject" style={{ width: '100%', padding: '8px', border: '1px solid #8a8886' }} />
                        </div>
                        <div style={{ marginBottom: '16px' }}>
                            <label style={{ display: 'block', marginBottom: '4px', fontSize: '14px', color: '#323130' }}>Message</label>
                            <textarea placeholder="Enter message" rows={4} style={{ width: '100%', padding: '8px', border: '1px solid #8a8886', resize: 'vertical' }} />
                        </div>
                        <p style={{ fontSize: '13px', color: '#605e5c' }}>Recipients: {selectedRows.length || 'All visible records'}</p>
                        <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                            <button onClick={() => setShowNotificationModal(false)} style={{ padding: '6px 16px', border: '1px solid #8a8886', background: 'white', cursor: 'pointer' }}>Cancel</button>
                            <button onClick={() => { alert('Notification sent!'); setShowNotificationModal(false); }} style={{ padding: '6px 16px', border: 'none', background: '#0078d4', color: 'white', cursor: 'pointer' }}>Send</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Global styles for animations */}
            <style jsx>{`
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
}

