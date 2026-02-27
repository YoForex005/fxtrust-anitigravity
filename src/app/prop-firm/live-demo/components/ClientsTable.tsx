'use client';

import { useState } from 'react';
import styles from '../demo.module.css';
import { demoClients } from '../data/demoData';

export default function ClientsTable() {
    const [selectedClients, setSelectedClients] = useState<string[]>([]);
    const [currentPage, setCurrentPage] = useState(1);

    const totalClients = demoClients.length;
    const itemsPerPage = 5;
    const totalPages = Math.ceil(totalClients / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentClients = demoClients.slice(startIndex, startIndex + itemsPerPage);

    const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setSelectedClients(currentClients.map(c => c.id));
        } else {
            setSelectedClients([]);
        }
    };

    const handleSelectClient = (id: string) => {
        if (selectedClients.includes(id)) {
            setSelectedClients(selectedClients.filter(c => c !== id));
        } else {
            setSelectedClients([...selectedClients, id]);
        }
    };

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
        }).format(amount);
    };

    return (
        <div className={styles.clientsSection}>
            <div className={styles.clientsHeader}>
                <h3 className={styles.sectionTitle}>CLIENT OVERVIEW</h3>
                <div className={styles.headerActions}>
                    <button className={styles.filterButton}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
                        Filter
                    </button>
                    <button className={styles.exportButton}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                        Export
                    </button>
                </div>
            </div>

            {selectedClients.length > 0 && (
                <div className={styles.bulkActions}>
                    <span className={styles.selectedCount}>{selectedClients.length} selected</span>
                    <div className={styles.bulkButtons}>
                        <button className={styles.bulkButton}>Approve KYC</button>
                        <button className={styles.bulkButton}>Send Email</button>
                        <button className={`${styles.bulkButton} ${styles.danger}`}>Suspend</button>
                    </div>
                </div>
            )}

            <div className={styles.clientsTable}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th style={{ width: '40px' }}>
                                <input
                                    type="checkbox"
                                    className={styles.checkbox}
                                    checked={selectedClients.length === currentClients.length && currentClients.length > 0}
                                    onChange={handleSelectAll}
                                />
                            </th>
                            <th>Client ID</th>
                            <th>Full Name</th>
                            <th>Email Address</th>
                            <th>Account Status</th>
                            <th>KYC Status</th>
                            <th>Balance</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentClients.map((client) => (
                            <tr key={client.id} className={selectedClients.includes(client.id) ? styles.rowSelected : ''}>
                                <td>
                                    <input
                                        type="checkbox"
                                        className={styles.checkbox}
                                        checked={selectedClients.includes(client.id)}
                                        onChange={() => handleSelectClient(client.id)}
                                    />
                                </td>
                                <td style={{ fontFamily: 'monospace', color: '#64748B' }}>#{client.id.padStart(5, '0')}</td>
                                <td>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <div className={styles.avatarSmall}>{client.name.charAt(0)}</div>
                                        <span style={{ fontWeight: 600, color: '#0F172A' }}>{client.name}</span>
                                    </div>
                                </td>
                                <td style={{ color: '#475569' }}>{client.email}</td>
                                <td>
                                    <span className={`${styles.badge} ${styles[`badge${client.status}`]}`}>
                                        {client.status.toUpperCase()}
                                    </span>
                                </td>
                                <td>
                                    <span className={`${styles.badge} ${styles[`badge${client.kycStatus}`]}`}>
                                        {client.kycStatus.replace('Required', 'REQ').toUpperCase()}
                                    </span>
                                </td>
                                <td style={{ fontWeight: 600, color: '#0F172A', fontVariantNumeric: 'tabular-nums' }}>
                                    {formatCurrency(client.balance)}
                                </td>
                                <td>
                                    <button className={styles.moreButton}>•••</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className={styles.pagination}>
                <span className={styles.pageInfo}>Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, totalClients)} of {totalClients}</span>
                <div className={styles.pageControls}>
                    <button
                        className={styles.pageButton}
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(p => p - 1)}
                    >
                        Previous
                    </button>
                    <button
                        className={styles.pageButton}
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(p => p + 1)}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
