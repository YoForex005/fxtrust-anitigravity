'use client';

import { useState } from 'react';
import styles from '../../demo.module.css';
import Modal from '../Modal';
import { mockClients } from '../../data/mockClients';
import { Client } from '../../types';

export default function UserClientsView() {
    const [selectedClient, setSelectedClient] = useState<Client | null>(null);
    const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'suspended' | 'pending'>('all');
    const [kycFilter, setKycFilter] = useState<'all' | 'verified' | 'pending' | 'rejected' | 'not_submitted'>('all');
    const [segmentFilter, setSegmentFilter] = useState<'all' | 'vip' | 'regular' | 'new' | 'inactive'>('all');
    const [selectedClients, setSelectedClients] = useState<string[]>([]);

    const filteredClients = mockClients.filter(client => {
        if (statusFilter !== 'all' && client.status !== statusFilter) return false;
        if (kycFilter !== 'all' && client.kycStatus !== kycFilter) return false;
        if (segmentFilter !== 'all' && client.segment !== segmentFilter) return false;
        return true;
    });

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'active': return { bg: '#10B98120', text: '#15803D', border: '#10B98140' };
            case 'suspended': return { bg: '#EF444420', text: '#B91C1C', border: '#EF444440' };
            case 'pending': return { bg: '#F59E0B20', text: '#B45309', border: '#F59E0B40' };
            default: return { bg: '#64748B20', text: '#475569', border: '#64748B40' };
        }
    };

    const getKycColor = (status: string) => {
        switch (status) {
            case 'verified': return { bg: '#10B98120', text: '#15803D', border: '#10B98140' };
            case 'pending': return { bg: '#F59E0B20', text: '#B45309', border: '#F59E0B40' };
            case 'rejected': return { bg: '#EF444420', text: '#B91C1C', border: '#EF444440' };
            default: return { bg: '#64748B20', text: '#475569', border: '#64748B40' };
        }
    };

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(amount);
    };

    const handleSelectAll = () => {
        if (selectedClients.length === filteredClients.length) {
            setSelectedClients([]);
        } else {
            setSelectedClients(filteredClients.map(c => c.id));
        }
    };

    const handleSelectClient = (id: string) => {
        setSelectedClients(prev =>
            prev.includes(id) ? prev.filter(v => v !== id) : [...prev, id]
        );
    };

    return (
        <div className={styles.viewContainer}>
            <div className={styles.viewHeader}>
                <h1 className={styles.viewTitle}>Client Management</h1>
                <div className={styles.viewActions}>
                    <button className={styles.btnSecondary}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '0.5rem' }}>
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                        Export
                    </button>
                    <button className={styles.btnPrimary}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '0.5rem' }}>
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                        Add Client
                    </button>
                </div>
            </div>

            {/* Filters */}
            <div className={styles.filterRow}>
                <div className={styles.filterGroup}>
                    <label className={styles.filterLabel}>Status:</label>
                    <select className={styles.filterSelect} value={statusFilter} onChange={(e) => setStatusFilter(e.target.value as any)}>
                        <option value="all">All Status</option>
                        <option value="active">Active</option>
                        <option value="suspended">Suspended</option>
                        <option value="pending">Pending</option>
                    </select>
                </div>
                <div className={styles.filterGroup}>
                    <label className={styles.filterLabel}>KYC:</label>
                    <select className={styles.filterSelect} value={kycFilter} onChange={(e) => setKycFilter(e.target.value as any)}>
                        <option value="all">All KYC Status</option>
                        <option value="verified">Verified</option>
                        <option value="pending">Pending</option>
                        <option value="rejected">Rejected</option>
                        <option value="not_submitted">Not Submitted</option>
                    </select>
                </div>
                <div className={styles.filterGroup}>
                    <label className={styles.filterLabel}>Segment:</label>
                    <select className={styles.filterSelect} value={segmentFilter} onChange={(e) => setSegmentFilter(e.target.value as any)}>
                        <option value="all">All Segments</option>
                        <option value="vip">VIP</option>
                        <option value="regular">Regular</option>
                        <option value="new">New</option>
                        <option value="inactive">Inactive</option>
                    </select>
                </div>
            </div>

            {/* Bulk Actions */}
            {selectedClients.length > 0 && (
                <div className={styles.bulkActions}>
                    <span className={styles.selectedCount}>{selectedClients.length} clients selected</span>
                    <div className={styles.bulkButtons}>
                        <button className={styles.bulkButton}>Send Email</button>
                        <button className={styles.bulkButton}>Export Selected</button>
                        <button className={`${styles.bulkButton} ${styles.danger}`}>Suspend</button>
                    </div>
                </div>
            )}

            {/* Clients Table */}
            <div className={styles.clientsSection}>
                <div className={styles.clientsTable}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>
                                    <input
                                        type="checkbox"
                                        className={styles.checkbox}
                                        checked={selectedClients.length === filteredClients.length}
                                        onChange={handleSelectAll}
                                    />
                                </th>
                                <th>Client</th>
                                <th>Country</th>
                                <th>Status</th>
                                <th>KYC</th>
                                <th>Segment</th>
                                <th>Balance</th>
                                <th>LTV</th>
                                <th>Last Activity</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredClients.map(client => {
                                const statusStyle = getStatusColor(client.status);
                                const kycStyle = getKycColor(client.kycStatus);

                                return (
                                    <tr key={client.id} className={selectedClients.includes(client.id) ? styles.rowSelected : ''}>
                                        <td>
                                            <input
                                                type="checkbox"
                                                className={styles.checkbox}
                                                checked={selectedClients.includes(client.id)}
                                                onChange={() => handleSelectClient(client.id)}
                                            />
                                        </td>
                                        <td>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                                <div className={styles.avatarSmall}>{client.name.split(' ').map(n => n[0]).join('')}</div>
                                                <div>
                                                    <div style={{ fontWeight: 600, color: 'var(--slate-900)' }}>{client.name}</div>
                                                    <div style={{ fontSize: '0.75rem', color: 'var(--slate-500)' }}>{client.email}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{client.country}</td>
                                        <td>
                                            <span className={styles.badge} style={{ background: statusStyle.bg, color: statusStyle.text, border: `1px solid ${statusStyle.border}` }}>
                                                {client.status}
                                            </span>
                                        </td>
                                        <td>
                                            <span className={styles.badge} style={{ background: kycStyle.bg, color: kycStyle.text, border: `1px solid ${kycStyle.border}` }}>
                                                {client.kycStatus.replace('_', ' ')}
                                            </span>
                                        </td>
                                        <td>
                                            <span className={styles.badge} style={{
                                                background: client.segment === 'vip' ? '#8B5CF620' : 'var(--slate-100)',
                                                color: client.segment === 'vip' ? '#7C3AED' : 'var(--slate-700)',
                                                border: `1px solid ${client.segment === 'vip' ? '#8B5CF640' : 'var(--slate-200)'}`
                                            }}>
                                                {client.segment.toUpperCase()}
                                            </span>
                                        </td>
                                        <td style={{ fontWeight: 600, fontVariantNumeric: 'tabular-nums' }}>{formatCurrency(client.balance)}</td>
                                        <td style={{ fontWeight: 600, fontVariantNumeric: 'tabular-nums', color: client.lifetimeValue > 0 ? 'var(--success-700)' : 'var(--danger-700)' }}>
                                            {formatCurrency(client.lifetimeValue)}
                                        </td>
                                        <td style={{ fontSize: '0.8rem' }}>{new Date(client.lastActivity).toLocaleDateString()}</td>
                                        <td>
                                            <button className={styles.moreButton} onClick={() => setSelectedClient(client)}>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <circle cx="12" cy="12" r="1"></circle>
                                                    <circle cx="12" cy="5" r="1"></circle>
                                                    <circle cx="12" cy="19" r="1"></circle>
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

                <div className={styles.pagination}>
                    <span className={styles.pageInfo}>Showing {filteredClients.length} of {mockClients.length} clients</span>
                    <div className={styles.pageControls}>
                        <button className={styles.pageButton} disabled>Previous</button>
                        <button className={styles.pageButton} disabled>Next</button>
                    </div>
                </div>
            </div>

            {/* Client Detail Modal */}
            {selectedClient && (
                <Modal
                    isOpen={!!selectedClient}
                    onClose={() => setSelectedClient(null)}
                    title={`Client Details - ${selectedClient.name}`}
                    size="large"
                >
                    <div className={styles.clientDetail}>
                        <div className={styles.clientDetailGrid}>
                            <div className={styles.clientDetailSection}>
                                <h3 className={styles.clientDetailSectionTitle}>Personal Information</h3>
                                <div className={styles.clientDetailRow}>
                                    <span className={styles.clientDetailLabel}>Email:</span>
                                    <span className={styles.clientDetailValue}>{selectedClient.email}</span>
                                </div>
                                <div className={styles.clientDetailRow}>
                                    <span className={styles.clientDetailLabel}>Country:</span>
                                    <span className={styles.clientDetailValue}>{selectedClient.country}</span>
                                </div>
                                <div className={styles.clientDetailRow}>
                                    <span className={styles.clientDetailLabel}>Registration:</span>
                                    <span className={styles.clientDetailValue}>{new Date(selectedClient.registrationDate).toLocaleDateString()}</span>
                                </div>
                                <div className={styles.clientDetailRow}>
                                    <span className={styles.clientDetailLabel}>Last Activity:</span>
                                    <span className={styles.clientDetailValue}>{new Date(selectedClient.lastActivity).toLocaleString('en-US')}</span>
                                </div>
                            </div>

                            <div className={styles.clientDetailSection}>
                                <h3 className={styles.clientDetailSectionTitle}>Financial Summary</h3>
                                <div className={styles.clientDetailRow}>
                                    <span className={styles.clientDetailLabel}>Current Balance:</span>
                                    <span className={styles.clientDetailValue} style={{ fontWeight: 700, fontSize: '1.1rem' }}>{formatCurrency(selectedClient.balance)}</span>
                                </div>
                                <div className={styles.clientDetailRow}>
                                    <span className={styles.clientDetailLabel}>Total Deposits:</span>
                                    <span className={styles.clientDetailValue} style={{ color: 'var(--success-700)' }}>{formatCurrency(selectedClient.totalDeposits)}</span>
                                </div>
                                <div className={styles.clientDetailRow}>
                                    <span className={styles.clientDetailLabel}>Total Withdrawals:</span>
                                    <span className={styles.clientDetailValue} style={{ color: 'var(--danger-700)' }}>{formatCurrency(selectedClient.totalWithdrawals)}</span>
                                </div>
                                <div className={styles.clientDetailRow}>
                                    <span className={styles.clientDetailLabel}>Lifetime Value:</span>
                                    <span className={styles.clientDetailValue} style={{ fontWeight: 700, color: selectedClient.lifetimeValue > 0 ? 'var(--success-700)' : 'var(--danger-700)' }}>
                                        {formatCurrency(selectedClient.lifetimeValue)}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.clientDetailActions}>
                            <button className={styles.btnSecondary} onClick={() => setSelectedClient(null)}>Close</button>
                            <button className={styles.btnSecondary}>Send Email</button>
                            <button className={styles.btnSecondary}>View Transactions</button>
                            <button className={styles.btnPrimary}>Edit Client</button>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
}
