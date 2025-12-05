'use client';

import { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import styles from '../../dynamics.module.css';
import accountsData from '../data.json';
import DynamicsSidebar from '../../components/DynamicsSidebar';
import DynamicsHeader from '../../components/DynamicsHeader';

export default function AccountDetailPage() {
    const router = useRouter();
    const params = useParams();
    const accountId = Array.isArray(params.id) ? params.id[0] : params.id;
    
    const account = (accountsData as any[])[parseInt(accountId)];

    if (!account) {
        return (
            <div className={styles.container}>
                <div style={{ padding: '20px' }}>
                    <h2>Account Not Found</h2>
                    <button onClick={() => router.back()}>Go Back</button>
                </div>
            </div>
        );
    }

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

    return (
        <div className={styles.container}>
            {/* Header */}
            <DynamicsHeader />

            <div className={styles.mainLayout}>
                {/* Sidebar */}
                <DynamicsSidebar activeItem="Accounts" />

                {/* Main Content */}
                <main className={styles.contentArea}>
                    {/* Command Bar */}
                    <div className={styles.commandBar}>
                        <button className={styles.commandButton} onClick={() => router.back()}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                            Back
                        </button>
                    </div>

                    {/* Account Details */}
                    <div className={styles.viewHeader}>
                        <div className={styles.viewTitle}>
                            {account['First Name']} {account['Last Name']}
                        </div>
                    </div>

                    <div style={{ padding: '20px', backgroundColor: '#f3f2f1' }}>
                        <div style={{ backgroundColor: 'white', borderRadius: '4px', padding: '20px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                {columnDefs.map((col, idx) => (
                                    <div key={idx} style={{ marginBottom: '15px' }}>
                                        <label style={{ display: 'block', fontSize: '12px', fontWeight: '500', color: '#666', marginBottom: '4px' }}>
                                            {col.label}
                                        </label>
                                        <div style={{ fontSize: '14px', color: '#000' }}>
                                            {account[col.key] || '---'}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
