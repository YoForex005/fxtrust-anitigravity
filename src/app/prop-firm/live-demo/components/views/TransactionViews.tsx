'use client';

import GenericTableView from '../shared/GenericTableView';
import { mockWithdrawals, mockInternalTransfers } from '../../data/mockDataExpanded';

export function WithdrawalsView() {
    const pendingCount = mockWithdrawals.filter(w => w.status === 'Pending').length;
    const totalProcessed = mockWithdrawals
        .filter(w => w.status === 'Completed')
        .reduce((acc, w) => acc + w.amount, 0);
    const rejectedCount = mockWithdrawals.filter(w => w.status === 'Rejected').length;

    return (
        <GenericTableView
            title="Withdrawal Requests"
            subtitle="Process and approve client withdrawals"
            data={mockWithdrawals}
            summaryCards={[
                { label: 'Pending Requests', value: pendingCount, trend: 'Needs Action', trendUp: false, icon: <span>⏳</span> },
                { label: 'Processed Today', value: `$${totalProcessed.toLocaleString('en-US')}`, trend: '+12% vs avg', trendUp: true, icon: <span>💸</span> },
                { label: 'Rejected', value: rejectedCount, icon: <span>🚫</span> }
            ]}
            columns={[
                { header: 'Client', accessor: 'clientName', className: 'font-medium' },
                { header: 'Amount', accessor: (item) => `${item.amount} ${item.currency}` },
                { header: 'Method', accessor: 'method' },
                { header: 'Date', accessor: (item) => new Date(item.date).toLocaleString('en-US') },
                {
                    header: 'Status', accessor: (item) => (
                        <span className={`status-badge status-${item.status.toLowerCase()}`}>{item.status}</span>
                    )
                }
            ]}
            actions={[
                { label: 'Approve', onClick: () => { }, variant: 'primary' },
                { label: 'Reject', onClick: () => { }, variant: 'danger' }
            ]}
            filters={[
                { key: 'status', label: 'Status', options: [{ label: 'Pending', value: 'Pending' }, { label: 'Processing', value: 'Processing' }] }
            ]}
        />
    );
}

export function InternalTransfersView() {
    const totalVolume = mockInternalTransfers.reduce((acc, t) => acc + t.amount, 0);
    const completedCount = mockInternalTransfers.filter(t => t.status === 'Completed').length;
    const successRate = Math.round((completedCount / mockInternalTransfers.length) * 100);

    return (
        <GenericTableView
            title="Internal Transfers"
            subtitle="Log of wallet-to-account transfers"
            data={mockInternalTransfers}
            summaryCards={[
                { label: 'Total Volume', value: `$${totalVolume.toLocaleString('en-US')}`, icon: <span>🔄</span> },
                { label: 'Success Rate', value: `${successRate}%`, trend: 'Healthy', trendUp: true, icon: <span>✅</span> }
            ]}
            columns={[
                { header: 'Client', accessor: 'clientName' },
                { header: 'From', accessor: 'from' },
                { header: 'To', accessor: 'to' },
                { header: 'Amount', accessor: (item) => `$${item.amount}` },
                { header: 'Date', accessor: (item) => new Date(item.date).toLocaleDateString() },
                { header: 'Status', accessor: 'status' }
            ]}
        />
    );
}
