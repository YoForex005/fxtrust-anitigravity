'use client';

import GenericTableView from '../shared/GenericTableView';
import { mockIBTree } from '../../data/mockDataExpanded';
import styles from '../../demo.module.css';

export function IBTreeView() {
    // Flatten tree for table view, but indented
    const flattenTree = (nodes: any[], level = 0): any[] => {
        return nodes.reduce((acc, node) => {
            const flatNode = { ...node, level };
            return [...acc, flatNode, ...flattenTree(node.children || [], level + 1)];
        }, []);
    };

    const flatData = flattenTree(mockIBTree);
    const totalIBs = flatData.length;
    const totalVolume = flatData.reduce((acc, ib) => acc + ib.monthlyVolume, 0);
    const totalEarned = flatData.reduce((acc, ib) => acc + ib.totalEarned, 0);

    return (
        <GenericTableView
            title="IB Tree Structure"
            subtitle="Multi-level partnership hierarchy"
            data={flatData}
            summaryCards={[
                { label: 'Total Partners', value: totalIBs, icon: <span>🤝</span> },
                { label: 'Network Volume', value: `$${(totalVolume / 1000000).toFixed(1)}M`, trend: 'High Activity', trendUp: true, icon: <span>📊</span> },
                { label: 'Total Commissions', value: `$${totalEarned.toLocaleString('en-US')}`, icon: <span>💰</span> }
            ]}
            columns={[
                {
                    header: 'Partner Name', accessor: (item) => (
                        <div style={{ paddingLeft: `${item.level * 20}px`, display: 'flex', alignItems: 'center' }}>
                            {item.level > 0 && <span style={{ marginRight: '8px', color: '#94a3b8' }}>↳</span>}
                            <span className="font-medium">{item.name}</span>
                        </div>
                    )
                },
                { header: 'Level', accessor: 'level' },
                { header: 'Commission', accessor: (item) => `${item.commissionRate}%` },
                { header: 'Clients', accessor: 'totalClients' },
                { header: 'Volume', accessor: (item) => `$${(item.monthlyVolume / 1000000).toFixed(1)}M` },
                { header: 'Total Earned', accessor: (item) => `$${item.totalEarned.toLocaleString('en-US')}` }
            ]}
            actions={[
                { label: 'View Details', onClick: () => { } }
            ]}
        />
    );
}

export function IBCommissionsView() {
    const commissions = [
        { id: 1, ib: 'Global FX Partners', amount: 4500, period: 'March 2024', status: 'Paid' },
        { id: 2, ib: 'Top Traders Academy', amount: 2800, period: 'March 2024', status: 'Pending' },
        { id: 3, ib: 'Crypto Influencers', amount: 12000, period: 'March 2024', status: 'Pending' },
        { id: 4, ib: 'Asia Trading Group', amount: 1500, period: 'Feb 2024', status: 'Paid' },
    ];

    const pendingPayouts = commissions.filter(c => c.status === 'Pending').reduce((acc, c) => acc + c.amount, 0);
    const totalPaid = commissions.filter(c => c.status === 'Paid').reduce((acc, c) => acc + c.amount, 0);

    return (
        <GenericTableView
            title="IB Commissions"
            subtitle="Commission payouts and reports"
            data={commissions}
            summaryCards={[
                { label: 'Pending Payouts', value: `$${pendingPayouts.toLocaleString('en-US')}`, trend: 'Due Soon', trendUp: false, icon: <span>⏳</span> },
                { label: 'Total Paid (MTD)', value: `$${totalPaid.toLocaleString('en-US')}`, icon: <span>✅</span> }
            ]}
            columns={[
                { header: 'IB Name', accessor: 'ib' },
                { header: 'Amount', accessor: (item) => `$${item.amount.toLocaleString('en-US')}` },
                { header: 'Period', accessor: 'period' },
                {
                    header: 'Status', accessor: (item) => (
                        <span className={`status-badge status-${item.status.toLowerCase()}`}>{item.status}</span>
                    )
                }
            ]}
            actions={[
                { label: 'Approve', onClick: () => { }, variant: 'primary' }
            ]}
        />
    );
}
