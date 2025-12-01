'use client';

import { useState } from 'react';
import styles from '../../demo.module.css';
import Modal from '../Modal';
import { ConfirmDialog } from '../Modal';
import { mockTransactions } from '../../data/mockTransactions';
import { Transaction } from '../../types';

export default function TransactionDepositsView() {
    const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
    const [statusFilter, setStatusFilter] = useState<'all' | 'Completed' | 'Pending' | 'Processing' | 'Rejected'>('all');
    const [paymentFilter, setPaymentFilter] = useState<string>('all');
    const [confirmAction, setConfirmAction] = useState<{ type: 'approve' | 'reject'; transaction: Transaction } | null>(null);

    const deposits = mockTransactions.filter(t => t.type === 'Deposit');
    const filteredDeposits = deposits.filter(deposit => {
        if (statusFilter !== 'all' && deposit.status !== statusFilter) return false;
        if (paymentFilter !== 'all' && deposit.paymentMethod !== paymentFilter) return false;
        return true;
    });

    const paymentMethods = Array.from(new Set(deposits.map(d => d.paymentMethod)));

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Completed': return { bg: '#10B98120', text: '#15803D', border: '#10B98140' };
            case 'Pending': return { bg: '#F59E0B20', text: '#B45309', border: '#F59E0B40' };
            case 'Processing': return { bg: '#3B82F620', text: '#1E40AF', border: '#3B82F640' };
            case 'Rejected': return { bg: '#EF444420', text: '#B91C1C', border: '#EF444440' };
            default: return { bg: '#64748B20', text: '#475569', border: '#64748B40' };
        }
    };

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(amount);
    };

    const handleApprove = (transaction: Transaction) => {
        setConfirmAction({ type: 'approve', transaction });
    };

    const handleReject = (transaction: Transaction) => {
        setConfirmAction({ type: 'reject', transaction });
    };

    const executeAction = () => {
        if (!confirmAction) return;
        console.log(`${confirmAction.type} transaction:`, confirmAction.transaction.id);
        setConfirmAction(null);
        setSelectedTransaction(null);
    };

    const pendingCount = deposits.filter(d => d.status === 'Pending').length;
    const todayDeposits = deposits.filter(d => {
        const today = new Date();
        const depositDate = new Date(d.date);
        return depositDate.toDateString() === today.toDateString() && d.status === 'Completed';
    });
    const todayTotal = todayDeposits.reduce((sum, d) => sum + d.amount, 0);

    return (
        <div className={styles.viewContainer}>
            <div className={styles.viewHeader}>
                <div>
                    <h1 className={styles.viewTitle}>Deposit Management</h1>
                    <div style={{ display: 'flex', gap: '2rem', marginTop: '0.75rem' }}>
                        <div>
                            <span style={{ fontSize: '0.8rem', color: 'var(--slate-500)', fontWeight: 600 }}>Pending Approval</span>
                            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--danger-600)' }}>{pendingCount}</div>
                        </div>
                        <div>
                            <span style={{ fontSize: '0.8rem', color: 'var(--slate-500)', fontWeight: 600 }}>Today's Deposits</span>
                            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--success-600)' }}>{formatCurrency(todayTotal)}</div>
                        </div>
                    </div>
                </div>
                <div className={styles.viewActions}>
                    <button className={styles.btnSecondary}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '0.5rem' }}>
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                        Export
                    </button>
                </div>
            </div>

            {/* Filters */}
            <div className={styles.filterRow}>
                <div className={styles.filterGroup}>
                    <label className={styles.filterLabel}>Status:</label>
                    <select className={styles.filterSelect} value={statusFilter} onChange={(e) => setStatusFilter(e.target.value as any)}>
                        <option value="all">All Status</option>
                        <option value="Pending">Pending</option>
                        <option value="Processing">Processing</option>
                        <option value="Completed">Completed</option>
                        <option value="Rejected">Rejected</option>
                    </select>
                </div>
                <div className={styles.filterGroup}>
                    <label className={styles.filterLabel}>Payment Method:</label>
                    <select className={styles.filterSelect} value={paymentFilter} onChange={(e) => setPaymentFilter(e.target.value)}>
                        <option value="all">All Methods</option>
                        {paymentMethods.map(method => (
                            <option key={method} value={method}>{method}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Deposits Table */}
            <div className={styles.clientsSection}>
                <div className={styles.clientsTable}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Transaction ID</th>
                                <th>Client</th>
                                <th>Amount</th>
                                <th>Payment Method</th>
                                <th>Status</th>
                                <th>Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredDeposits.map(deposit => {
                                const statusStyle = getStatusColor(deposit.status);

                                return (
                                    <tr key={deposit.id}>
                                        <td style={{ fontFamily: 'monospace', fontWeight: 600, color: 'var(--slate-700)' }}>{deposit.id}</td>
                                        <td style={{ fontWeight: 600 }}>{deposit.clientName}</td>
                                        <td style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--success-700)', fontVariantNumeric: 'tabular-nums' }}>
                                            +{formatCurrency(deposit.amount)}
                                        </td>
                                        <td>{deposit.paymentMethod}</td>
                                        <td>
                                            <span className={styles.badge} style={{ background: statusStyle.bg, color: statusStyle.text, border: `1px solid ${statusStyle.border}` }}>
                                                {deposit.status}
                                            </span>
                                        </td>
                                        <td style={{ fontSize: '0.85rem' }}>{new Date(deposit.date).toLocaleString()}</td>
                                        <td>
                                            <button className={styles.moreButton} onClick={() => setSelectedTransaction(deposit)}>
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
                    <span className={styles.pageInfo}>Showing {filteredDeposits.length} of {deposits.length} deposits</span>
                    <div className={styles.pageControls}>
                        <button className={styles.pageButton} disabled>Previous</button>
                        <button className={styles.pageButton} disabled>Next</button>
                    </div>
                </div>
            </div>

            {/* Transaction Detail Modal */}
            {selectedTransaction && (
                <Modal
                    isOpen={!!selectedTransaction}
                    onClose={() => setSelectedTransaction(null)}
                    title={`Deposit Details - ${selectedTransaction.id}`}
                    size="medium"
                >
                    <div className={styles.transactionDetail}>
                        <div className={styles.clientDetailSection}>
                            <div className={styles.clientDetailRow}>
                                <span className={styles.clientDetailLabel}>Client:</span>
                                <span className={styles.clientDetailValue} style={{ fontWeight: 600 }}>{selectedTransaction.clientName}</span>
                            </div>
                            <div className={styles.clientDetailRow}>
                                <span className={styles.clientDetailLabel}>Amount:</span>
                                <span className={styles.clientDetailValue} style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--success-700)' }}>
                                    {formatCurrency(selectedTransaction.amount)}
                                </span>
                            </div>
                            <div className={styles.clientDetailRow}>
                                <span className={styles.clientDetailLabel}>Payment Method:</span>
                                <span className={styles.clientDetailValue}>{selectedTransaction.paymentMethod}</span>
                            </div>
                            <div className={styles.clientDetailRow}>
                                <span className={styles.clientDetailLabel}>Status:</span>
                                <span className={styles.badge} style={{
                                    ...getStatusColor(selectedTransaction.status),
                                    border: `1px solid ${getStatusColor(selectedTransaction.status).border}`
                                }}>
                                    {selectedTransaction.status}
                                </span>
                            </div>
                            <div className={styles.clientDetailRow}>
                                <span className={styles.clientDetailLabel}>Date:</span>
                                <span className={styles.clientDetailValue}>{new Date(selectedTransaction.date).toLocaleString()}</span>
                            </div>
                            {selectedTransaction.notes && (
                                <div className={styles.clientDetailRow}>
                                    <span className={styles.clientDetailLabel}>Notes:</span>
                                    <span className={styles.clientDetailValue}>{selectedTransaction.notes}</span>
                                </div>
                            )}
                        </div>

                        <div className={styles.clientDetailActions}>
                            <button className={styles.btnSecondary} onClick={() => setSelectedTransaction(null)}>Close</button>
                            {selectedTransaction.status === 'Pending' && (
                                <>
                                    <button className={styles.btnDanger} onClick={() => handleReject(selectedTransaction)}>Reject</button>
                                    <button className={styles.btnPrimary} onClick={() => handleApprove(selectedTransaction)}>Approve</button>
                                </>
                            )}
                        </div>
                    </div>
                </Modal>
            )}

            {/* Confirm Dialog */}
            {confirmAction && (
                <ConfirmDialog
                    isOpen={!!confirmAction}
                    onClose={() => setConfirmAction(null)}
                    onConfirm={executeAction}
                    title={confirmAction.type === 'approve' ? 'Approve Deposit' : 'Reject Deposit'}
                    message={`Are you sure you want to ${confirmAction.type} this deposit of ${formatCurrency(confirmAction.transaction.amount)} from ${confirmAction.transaction.clientName}?`}
                    confirmText={confirmAction.type === 'approve' ? 'Approve' : 'Reject'}
                    variant={confirmAction.type === 'reject' ? 'danger' : 'info'}
                />
            )}
        </div>
    );
}
