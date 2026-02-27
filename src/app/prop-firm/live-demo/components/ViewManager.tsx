'use client';

import { ReactNode } from 'react';
import { ViewType } from '../types';
import styles from '../demo.module.css';

interface ViewManagerProps {
    currentView: ViewType;
    onViewChange: (view: ViewType) => void;
    children: ReactNode;
}

const viewTitles: Record<ViewType, string> = {
    'dashboard': 'Dashboard',
    'content-pages': 'Pages Management',
    'content-banners': 'Banners Management',
    'content-seo': 'SEO Settings',
    'user-clients': 'Client Management',
    'user-admins': 'Admin Management',
    'user-kyc': 'KYC Verification',
    'bonus-active': 'Active Bonuses',
    'bonus-history': 'Bonus History',
    'ib-tree': 'IB Tree',
    'ib-commissions': 'IB Commissions',
    'group-mt5-create': 'Create MT5 Group',
    'group-mt5-change': 'Change Group',
    'group-spreads-add': 'Add Spreads',
    'group-spreads-decrease': 'Decrease Spreads',
    'transaction-deposits': 'Deposits',
    'transaction-withdrawals': 'Withdrawals',
    'transaction-internal': 'Internal Transfers',
    'marketing-email': 'Email Marketing',
    'marketing-campaigns': 'Marketing Campaigns',
    'marketing-affiliate': 'Affiliate System',
    'copy-trading': 'Copy Trading',
    'apis': 'API Management',
    'send-email': 'Send Email',
    'news': 'News Management',
    'notification-alerts': 'System Alerts',
    'notification-push': 'Push Notifications',
    'rewards-loyalty': 'Loyalty Program',
    'rewards-points': 'Points System',
    'risk-exposure': 'Risk Exposure',
    'risk-pnl': 'P&L Reports',
    'tickets': 'Support Tickets'
};

const getBreadcrumbs = (view: ViewType): { label: string; view?: ViewType }[] => {
    const parts = view.split('-');

    if (view === 'dashboard') return [{ label: 'Dashboard' }];

    const breadcrumbs: { label: string; view?: ViewType }[] = [
        { label: 'Dashboard', view: 'dashboard' }
    ];

    if (parts[0] === 'content') {
        breadcrumbs.push({ label: 'Content Management' });
    } else if (parts[0] === 'user') {
        breadcrumbs.push({ label: 'User Management' });
    } else if (parts[0] === 'bonus') {
        breadcrumbs.push({ label: 'Bonus' });
    } else if (parts[0] === 'ib') {
        breadcrumbs.push({ label: 'IB Management' });
    } else if (parts[0] === 'group') {
        breadcrumbs.push({ label: 'Group Management' });
    } else if (parts[0] === 'transaction') {
        breadcrumbs.push({ label: 'Transactions' });
    } else if (parts[0] === 'marketing') {
        breadcrumbs.push({ label: 'Marketing' });
    } else if (parts[0] === 'notification') {
        breadcrumbs.push({ label: 'Notifications' });
    } else if (parts[0] === 'rewards') {
        breadcrumbs.push({ label: 'Rewards' });
    } else if (parts[0] === 'risk') {
        breadcrumbs.push({ label: 'Risk Management' });
    }

    breadcrumbs.push({ label: viewTitles[view] });

    return breadcrumbs;
};

export default function ViewManager({ currentView, onViewChange, children }: ViewManagerProps) {
    const breadcrumbs = getBreadcrumbs(currentView);

    return (
        <div className={styles.viewContainer}>
            {currentView !== 'dashboard' && (
                <div className={styles.breadcrumbBar}>
                    <nav className={styles.breadcrumbs}>
                        {breadcrumbs.map((crumb, index) => (
                            <span key={index} className={styles.breadcrumbItem}>
                                {crumb.view ? (
                                    <>
                                        <button
                                            className={styles.breadcrumbLink}
                                            onClick={() => onViewChange(crumb.view!)}
                                        >
                                            {crumb.label}
                                        </button>
                                        <span className={styles.breadcrumbSeparator}>/</span>
                                    </>
                                ) : (
                                    <span className={styles.breadcrumbCurrent}>{crumb.label}</span>
                                )}
                            </span>
                        ))}
                    </nav>
                </div>
            )}

            <div className={styles.viewContent}>
                {children}
            </div>
        </div>
    );
}
