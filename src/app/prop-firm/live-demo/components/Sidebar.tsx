'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from '../demo.module.css';
import { ViewType } from '../types';

interface SidebarProps {
    activeTab: string;
    onTabChange: (tab: string) => void;
    onViewChange?: (view: ViewType) => void;
    onSwitchMode?: () => void;
}

// Icons as components for cleaner usage
const Icons = {
    Dashboard: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>,
    Content: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>,
    User: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>,
    Bonus: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>,
    IB: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>,
    Group: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
    Transaction: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>,
    Marketing: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10 10 10 0 0 1-10-10 10 10 0 0 1 10-10z"></path><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>,
    Email: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>,
    News: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1m2 13a2 2 0 0 1-2-2V7m2 13a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>,
    Notification: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>,
    Rewards: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 21h8a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-3v-2a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2H1a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3v2a2 2 0 0 0 2 2z"></path><path d="M9 7V5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v2"></path></svg>,
    Risk: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>,
    Ticket: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 21V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2z"></path><path d="M17 21V7a2 2 0 0 0-2-2H9"></path><path d="M21 21V7a2 2 0 0 0-2-2H13"></path></svg>,
    Logo: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'white' }}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>,
    Copy: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>,
    Api: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>,
};

interface MenuItem {
    id: string;
    label: string;
    icon?: any;
    children?: MenuItem[];
}

export default function Sidebar({ activeTab, onTabChange, onViewChange, onSwitchMode }: SidebarProps) {
    const [expandedItems, setExpandedItems] = useState<string[]>(['group-management']);

    const toggleExpand = (id: string) => {
        setExpandedItems(prev =>
            prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        );
    };

    const handleMenuClick = (id: string, hasChildren: boolean) => {
        if (hasChildren) {
            toggleExpand(id);
        } else if (onViewChange) {
            const viewMap: Record<string, ViewType> = {
                'dashboard': 'dashboard',
                'pages': 'content-pages',
                'banners': 'content-banners',
                'seo': 'content-seo',
                'clients': 'user-clients',
                'admins': 'user-admins',
                'kyc': 'user-kyc',
                'active-bonuses': 'bonus-active',
                'bonus-history': 'bonus-history',
                'ib-tree': 'ib-tree',
                'commissions': 'ib-commissions',
                'create-group': 'group-mt5-create',
                'change-group': 'group-mt5-change',
                'add-spread': 'group-spreads-add',
                'decrease-spread': 'group-spreads-decrease',
                'deposits': 'transaction-deposits',
                'withdrawals': 'transaction-withdrawals',
                'internal-transfer': 'transaction-internal',
                'email-marketing': 'marketing-email',
                'campaigns': 'marketing-campaigns',
                'affiliate': 'marketing-affiliate',
                'copy-trading': 'copy-trading',
                'apis': 'apis',
                'send-email': 'send-email',
                'news': 'news',
                'system-alerts': 'notification-alerts',
                'push-config': 'notification-push',
                'loyalty': 'rewards-loyalty',
                'points': 'rewards-points',
                'exposure': 'risk-exposure',
                'pnl-reports': 'risk-pnl',
                'tickets': 'tickets'
            };

            const viewType = viewMap[id];
            if (viewType) {
                onViewChange(viewType);
                onTabChange(id);
            }
        }
    };

    const menuItems: MenuItem[] = [
        { id: 'dashboard', label: 'Dashboard', icon: Icons.Dashboard },
        {
            id: 'content',
            label: 'Content Management',
            icon: Icons.Content,
            children: [
                { id: 'pages', label: 'Pages' },
                { id: 'banners', label: 'Banners' },
                { id: 'seo', label: 'SEO Settings' }
            ]
        },
        {
            id: 'users',
            label: 'User Management',
            icon: Icons.User,
            children: [
                { id: 'clients', label: 'Clients' },
                { id: 'admins', label: 'Admins' },
                { id: 'kyc', label: 'KYC Verification' }
            ]
        },
        {
            id: 'bonus',
            label: 'Bonus',
            icon: Icons.Bonus,
            children: [
                { id: 'active-bonuses', label: 'Active Bonuses' },
                { id: 'bonus-history', label: 'Bonus History' }
            ]
        },
        {
            id: 'ib',
            label: 'IB Management',
            icon: Icons.IB,
            children: [
                { id: 'ib-tree', label: 'IB Tree' },
                { id: 'commissions', label: 'Commissions' }
            ]
        },
        {
            id: 'group-management',
            label: 'Group Management',
            icon: Icons.Group,
            children: [
                {
                    id: 'mt5-groups',
                    label: 'MT5 Groups',
                    children: [
                        { id: 'create-group', label: 'Create New Group' },
                        { id: 'change-group', label: 'Change Group' }
                    ]
                },
                {
                    id: 'spreads',
                    label: 'Spreads',
                    children: [
                        { id: 'add-spread', label: 'Add Spread' },
                        { id: 'decrease-spread', label: 'Decrease Spread' }
                    ]
                }
            ]
        },
        {
            id: 'transaction',
            label: 'Transaction',
            icon: Icons.Transaction,
            children: [
                { id: 'deposits', label: 'Deposits' },
                { id: 'withdrawals', label: 'Withdrawals' },
                { id: 'internal-transfer', label: 'Internal Transfer' }
            ]
        },
        {
            id: 'marketing',
            label: 'Marketing',
            icon: Icons.Marketing,
            children: [
                { id: 'email-marketing', label: 'Email Marketing' },
                { id: 'campaigns', label: 'Campaigns' },
                { id: 'affiliates', label: 'Affiliate System' }
            ]
        },
        { id: 'copy-trading', label: 'Copy Trading', icon: Icons.Copy },
        { id: 'api', label: 'APIs', icon: Icons.Api },
        { id: 'send-email', label: 'Send Email', icon: Icons.Email },
        { id: 'news', label: 'News', icon: Icons.News },
        {
            id: 'notification',
            label: 'Notification',
            icon: Icons.Notification,
            children: [
                { id: 'system-alerts', label: 'System Alerts' },
                { id: 'push-config', label: 'Push Configuration' }
            ]
        },
        {
            id: 'rewards',
            label: 'Rewards Management',
            icon: Icons.Rewards,
            children: [
                { id: 'loyalty', label: 'Loyalty Program' },
                { id: 'points', label: 'Points System' }
            ]
        },
        {
            id: 'risk',
            label: 'Risk Management Report',
            icon: Icons.Risk,
            children: [
                { id: 'exposure', label: 'Exposure' },
                { id: 'pnl-reports', label: 'P&L Reports' }
            ]
        },
        { id: 'tickets', label: 'Tickets', icon: Icons.Ticket },
    ];

    const renderMenuItem = (item: MenuItem, level: number = 0) => {
        const hasChildren = item.children && item.children.length > 0;
        const isExpanded = expandedItems.includes(item.id);
        const isActive = activeTab === item.id;

        const isChildActive = (item: MenuItem): boolean => {
            if (item.id === activeTab) return true;
            if (item.children) return item.children.some(child => isChildActive(child));
            return false;
        };
        const isParentActive = hasChildren && isChildActive(item);

        return (
            <div key={item.id} className={styles.menuItemWrapper}>
                <button
                    className={`${styles.navItem} ${isActive ? styles.navItemActive : ''} ${isParentActive && !isActive ? styles.navItemParentActive : ''}`}
                    style={{ paddingLeft: `${0.85 + (level * 1)}rem` }}
                    onClick={() => handleMenuClick(item.id, !!hasChildren)}
                >
                    {item.icon && <span className={styles.navIcon}><item.icon /></span>}
                    <span className={styles.navLabel}>{item.label}</span>
                    {hasChildren && (
                        <span className={`${styles.navChevron} ${isExpanded ? styles.navChevronExpanded : ''}`}>›</span>
                    )}
                    {isActive && <div className={styles.activeIndicator}></div>}
                </button>

                {hasChildren && isExpanded && (
                    <div className={styles.subMenu}>
                        {item.children!.map(child => renderMenuItem(child, level + 1))}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className={styles.sidebar}>
            <div className={styles.logo}>
                <div className={styles.logoIconWrapper}>
                    <Image src="/logo.png" alt="FxTrusts Logo" width={24} height={24} style={{ objectFit: 'contain' }} />
                </div>
                <span className={styles.logoText}>FXTRUSTS ADMIN</span>
            </div>

            <nav className={styles.nav}>
                <div className={styles.navSectionLabel}>MAIN MENU</div>
                {menuItems.map(item => renderMenuItem(item))}
            </nav>

            <div className={styles.sidebarFooter}>
                {onSwitchMode && (
                    <button className={styles.secondaryButton} style={{ width: '100%', justifyContent: 'center', marginBottom: '1rem' }} onClick={onSwitchMode}>
                        <span style={{ marginRight: '8px' }}>🔄</span> Switch to Client
                    </button>
                )}
                <div className={styles.userInfo}>
                    <div className={styles.userAvatar}>
                        AD
                        <div className={styles.onlineStatus}></div>
                    </div>
                    <div className={styles.userDetails}>
                        <div className={styles.userName}>Administrator</div>
                        <div className={styles.userRole}>Super Admin</div>
                    </div>
                    <button className={styles.userMenu}>⋮</button>
                </div>
            </div>
        </div>
    );
}
