'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../dynamics.module.css';

interface DynamicsSidebarProps {
    activeItem?: string;
    onNavigate?: (item: string) => void;
}

export default function DynamicsSidebar({ activeItem = 'Accounts', onNavigate }: DynamicsSidebarProps) {
    const router = useRouter();
    const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({
        'recent': true,
        'pinned': true,
        'sales': false,
        'activities': true,
        'backOffice': true
    });

    const [recentItems, setRecentItems] = useState<{ label: string, path: string }[]>([
        { label: 'Active Accounts', path: '/live-demo/admin' },
        { label: 'Real-Time Trading', path: '/live-demo/admin/trading' },
        { label: 'All Transactions', path: '/live-demo/admin/transactions' }
    ]);

    const toggleGroup = (group: string) => {
        setExpandedGroups(prev => ({ ...prev, [group]: !prev[group] }));
    };

    const handleNavigate = (item: string, path?: string) => {
        if (onNavigate) {
            onNavigate(item);
        }
        if (path) {
            // Add to recent items
            setRecentItems(prev => {
                const newItem = { label: item, path };
                const filtered = prev.filter(i => i.label !== item);
                return [newItem, ...filtered].slice(0, 7);
            });
            router.push(path);
        }
    };

    return (
        <aside className={styles.sidebar}>
            <div className={styles.sidebarGroup}>
                <div className={styles.sidebarItem} onClick={() => handleNavigate('Home', '/live-demo/admin')}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                    Home
                </div>
                <div className={styles.sidebarItem} onClick={() => toggleGroup('recent')}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                    Recent {expandedGroups['recent'] ? '⌃' : '⌄'}
                </div>
                {expandedGroups['recent'] && (
                    <div className={styles.sidebarSubGroup}>
                        {recentItems.map((item, idx) => (
                            <div key={idx} className={styles.sidebarItem} onClick={() => handleNavigate(item.label, item.path)}>
                                {item.label}
                            </div>
                        ))}
                    </div>
                )}
                <div className={styles.sidebarItem} onClick={() => toggleGroup('pinned')}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4a2 2 0 0 0-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42z" /><circle cx="6.5" cy="6.5" r="1.5" /></svg>
                    Pinned {expandedGroups['pinned'] ? '⌃' : '⌄'}
                </div>
                 {expandedGroups['pinned'] && (
                    <div className={styles.sidebarSubGroup}>
                        <div className={styles.sidebarItem} onClick={() => handleNavigate('Accounts', '/live-demo/admin')}>Active Accounts</div>
                        <div className={styles.sidebarItem} onClick={() => handleNavigate('Real-Time Trading', '/live-demo/admin/trading')}>Real-Time Trading</div>
                        <div className={styles.sidebarItem} onClick={() => handleNavigate('Monetary Transactions', '/live-demo/admin/transactions')}>Monetary Transactions</div>
                        <div className={styles.sidebarItem} onClick={() => handleNavigate('Phone Calls', '/live-demo/admin/phone-calls')}>Phone Calls</div>
                        <div className={styles.sidebarItem} onClick={() => handleNavigate('Active Cases', '/live-demo/admin/cases')}>Active Cases</div>
                    </div>
                )}
            </div>

            <div className={styles.sidebarGroup}>
                <div className={styles.sidebarGroupTitle}>My Work</div>
                <div 
                    className={`${styles.sidebarItem} ${activeItem === 'Accounts' ? styles.sidebarItemActive : ''}`} 
                    onClick={() => handleNavigate('Accounts', '/live-demo/admin')}
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line x1="20" y1="8" x2="20" y2="14" /><line x1="23" y1="11" x2="17" y2="11" /></svg>
                    Accounts
                </div>
                <div 
                    className={`${styles.sidebarItem} ${activeItem === 'Monetary Transactions' ? styles.sidebarItemActive : ''}`}
                    onClick={() => handleNavigate('Monetary Transactions', '/live-demo/admin/transactions')}
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                    Monetary Transactions
                </div>
                <div 
                    className={`${styles.sidebarItem} ${activeItem === 'Real-Time Trading' ? styles.sidebarItemActive : ''}`}
                    onClick={() => handleNavigate('Real-Time Trading', '/live-demo/admin/trading')}
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>
                    Real-Time Trading
                </div>
            </div>

            <div className={styles.sidebarGroup}>
                <div className={styles.sidebarGroupTitle}>Activities</div>
                <div 
                    className={`${styles.sidebarItem} ${activeItem === 'Phone Calls' ? styles.sidebarItemActive : ''}`}
                    onClick={() => handleNavigate('Phone Calls', '/live-demo/admin/phone-calls')}
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                    Phone Calls
                </div>
                <div 
                    className={`${styles.sidebarItem} ${activeItem === 'All E-mails' ? styles.sidebarItemActive : ''}`}
                    onClick={() => handleNavigate('All E-mails', '/live-demo/admin/emails')}
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                    Emails
                </div>
            </div>

            <div className={styles.sidebarGroup}>
                <div className={styles.sidebarGroupTitle}>Back Office</div>
                <div 
                    className={`${styles.sidebarItem} ${activeItem === 'Documents' ? styles.sidebarItemActive : ''}`}
                    onClick={() => handleNavigate('Documents', '/live-demo/admin/documents')}
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                    Documents
                </div>
                <div 
                    className={`${styles.sidebarItem} ${activeItem === 'Active Cases' ? styles.sidebarItemActive : ''}`}
                    onClick={() => handleNavigate('Active Cases', '/live-demo/admin/cases')}
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                    Cases
                </div>
            </div>

            <div className={styles.sidebarGroup}>
                <div className={styles.sidebarGroupTitle}>Tools</div>
                <div 
                    className={`${styles.sidebarItem} ${activeItem === 'Dashboards' ? styles.sidebarItemActive : ''}`}
                    onClick={() => handleNavigate('Dashboards', '/live-demo/admin/dashboards')}
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="7" height="9" /><rect x="14" y="3" width="7" height="5" /><rect x="14" y="12" width="7" height="9" /><rect x="3" y="16" width="7" height="5" /></svg>
                    Dashboards
                </div>
                <div 
                    className={`${styles.sidebarItem} ${activeItem === 'Reports' ? styles.sidebarItemActive : ''}`}
                    onClick={() => handleNavigate('Reports', '/live-demo/admin/reports')}
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                    Reports
                </div>
            </div>

             <div className={styles.sidebarGroup}>
                <div className={styles.sidebarItem} onClick={() => toggleGroup('sales')}>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>
                        <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                            <div style={{background: '#005a9e', color: 'white', padding: '2px 6px', borderRadius: '2px', fontSize: '12px', fontWeight: 'bold'}}>S</div>
                            Sales
                        </div>
                        <span>{expandedGroups['sales'] ? '⌃' : '⌄'}</span>
                    </div>
                </div>
            </div>
        </aside>
    );
}
