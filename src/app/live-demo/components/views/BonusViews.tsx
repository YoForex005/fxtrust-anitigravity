'use client';

import GenericTableView from '../shared/GenericTableView';
import { mockBonuses } from '../../data/mockDataExpanded';

export function ActiveBonusesView() {
    const totalBonuses = mockBonuses.length;
    const activeBonuses = mockBonuses.filter(b => b.status === 'active').length;
    const totalRedeemed = mockBonuses.reduce((acc, curr) => acc + curr.totalRedeemed, 0);

    return (
        <GenericTableView
            title="Active Bonuses"
            subtitle="Manage currently running bonus campaigns"
            data={mockBonuses}
            summaryCards={[
                { label: 'Total Campaigns', value: totalBonuses, icon: <span>🎁</span> },
                { label: 'Active Now', value: activeBonuses, trend: 'Stable', trendUp: true, icon: <span>⚡</span> },
                { label: 'Total Redeemed', value: totalRedeemed.toLocaleString('en-US'), trend: '+12% this week', trendUp: true, icon: <span>👥</span> }
            ]}
            columns={[
                { header: 'Name', accessor: 'name', className: 'font-medium' },
                { header: 'Type', accessor: 'type' },
                { header: 'Amount', accessor: (item) => item.percentage ? `${item.percentage}%` : `$${item.amount}` },
                { header: 'Eligibility', accessor: 'eligibility' },
                { header: 'Redeemed', accessor: (item) => `${item.totalRedeemed} / ${item.totalUsers}` },
                {
                    header: 'Status', accessor: (item) => (
                        <span className={`status-badge status-${item.status}`}>{item.status}</span>
                    )
                }
            ]}
            actions={[
                { label: 'Pause', onClick: () => { }, variant: 'secondary' },
                { label: 'Edit', onClick: () => { }, variant: 'ghost' }
            ]}
            onNewItem={() => { }}
            newItemLabel="Create Bonus"
        />
    );
}

export function BonusHistoryView() {
    const history = [
        { id: 1, client: 'John Doe', bonus: 'Welcome 100%', amount: 500, date: '2024-03-01', status: 'Credited' },
        { id: 2, client: 'Alice Smith', bonus: 'Cashback', amount: 25, date: '2024-02-28', status: 'Credited' },
    ];

    return (
        <GenericTableView
            title="Bonus History"
            subtitle="Log of all bonus distributions"
            data={history}
            columns={[
                { header: 'Client', accessor: 'client' },
                { header: 'Bonus Name', accessor: 'bonus' },
                { header: 'Amount', accessor: (item) => `$${item.amount}` },
                { header: 'Date', accessor: 'date' },
                { header: 'Status', accessor: 'status' }
            ]}
        />
    );
}
