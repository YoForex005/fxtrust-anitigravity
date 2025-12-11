'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from '../demo.module.css';
import { ClientViewType } from '../types';

interface ClientSidebarProps {
    activeTab: string;
    onTabChange: (tab: string) => void;
    onViewChange: (view: ClientViewType) => void;
    onSwitchMode: () => void;
}

// Icons matching the reference style (outline, clean)
const Icons = {
    MyAccount: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>,
    MT5List: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>,
    Compliance: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>,
    Transactions: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>,
    Performance: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>,
    Promotions: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>,
    Settings: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>,
    IB: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
    Help: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>,
    Logout: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>,
    Logo: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#111827' }}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>,
};

export default function ClientSidebar({ activeTab, onTabChange, onViewChange, onSwitchMode }: ClientSidebarProps) {
    const menuItems = [
        { id: 'my-account', label: 'My Account', icon: Icons.MyAccount, view: 'client-dashboard' },
        { id: 'mt5-list', label: 'MT5 List', icon: Icons.MT5List, view: 'client-accounts' },
        { id: 'compliance', label: 'Compliance', icon: Icons.Compliance, view: 'client-profile' }, // Placeholder
        { id: 'transactions', label: 'My Transactions', icon: Icons.Transactions, view: 'client-wallet' },
        { id: 'performance', label: 'Performance', icon: Icons.Performance, view: 'client-trading' }, // Placeholder
        { id: 'promotions', label: 'Promotions', icon: Icons.Promotions, view: 'client-dashboard' }, // Placeholder
        { id: 'settings', label: 'Settings', icon: Icons.Settings, view: 'client-profile' },
        { id: 'ib', label: 'IB Programme', icon: Icons.IB, view: 'client-dashboard' }, // Placeholder
        { id: 'help', label: 'Help Desk', icon: Icons.Help, view: 'client-dashboard' }, // Placeholder
        { id: 'logout', label: 'Logout', icon: Icons.Logout, view: 'client-dashboard' }, // Placeholder
    ];

    const handleMenuClick = (item: any) => {
        if (item.id === 'logout') {
            // Handle logout or switch mode
            return;
        }
        onTabChange(item.id);
        onViewChange(item.view as ClientViewType);
    };

    return (
        <aside className={styles.sidebar} style={{ background: '#FFFFFF', borderRight: '1px solid #E5E7EB' }}>
            <div className={styles.logo} style={{ borderBottom: 'none', padding: '1.5rem 1.5rem 0.5rem' }}>
                <div className={styles.logoIconWrapper} style={{ background: 'transparent' }}>
                    <Image src="/logo.png" alt="FxTrusts Logo" width={24} height={24} style={{ objectFit: 'contain' }} />
                </div>
                <span className={styles.logoText} style={{ color: '#111827', fontSize: '1.1rem' }}>FXTRUSTS</span>
            </div>

            <nav className={styles.nav} style={{ padding: '1rem 0' }}>
                {menuItems.map((item) => (
                    <div key={item.id} style={{ padding: '0 1rem', marginBottom: '0.25rem' }}>
                        <button
                            className={`${styles.navItem} ${activeTab === item.id ? styles.navItemActive : ''}`}
                            onClick={() => handleMenuClick(item)}
                            style={{
                                color: activeTab === item.id ? '#10B981' : '#6B7280',
                                background: activeTab === item.id ? '#ECFDF5' : 'transparent',
                                borderRadius: '8px',
                                padding: '0.75rem 1rem',
                                width: '100%',
                                justifyContent: 'flex-start',
                                borderLeft: 'none'
                            }}
                        >
                            <span className={styles.navIcon} style={{ color: activeTab === item.id ? '#10B981' : '#9CA3AF' }}>
                                <item.icon />
                            </span>
                            <span className={styles.navLabel} style={{ fontWeight: activeTab === item.id ? 600 : 500 }}>
                                {item.label}
                            </span>
                            {/* Chevron for items with submenus (if any) */}
                            {['mt5-list', 'compliance', 'transactions', 'performance', 'settings', 'ib', 'help'].includes(item.id) && (
                                <span style={{ marginLeft: 'auto', color: '#9CA3AF', fontSize: '0.8rem' }}>›</span>
                            )}
                        </button>
                    </div>
                ))}
            </nav>

            <div className={styles.sidebarFooter} style={{ borderTop: 'none', padding: '1rem' }}>
                <button
                    className={styles.secondaryButton}
                    style={{
                        width: '100%',
                        justifyContent: 'center',
                        background: '#F3F4F6',
                        color: '#4B5563',
                        border: 'none'
                    }}
                    onClick={onSwitchMode}
                >
                    <span style={{ marginRight: '8px' }}>🔄</span> Switch to Admin
                </button>
            </div>
        </aside>
    );
}
