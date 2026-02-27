'use client';

import GenericTableView from '../shared/GenericTableView';
import { mockStrategies } from '../../data/mockDataExpanded';

export function CopyTradingView() {
    return (
        <GenericTableView
            title="Copy Trading Strategies"
            subtitle="Manage strategy providers and performance"
            data={mockStrategies}
            columns={[
                { header: 'Strategy Name', accessor: 'name', className: 'font-bold' },
                { header: 'Provider', accessor: 'provider' },
                {
                    header: 'Return', accessor: (item) => (
                        <span style={{ color: '#10b981' }}>{item.return}</span>
                    )
                },
                { header: 'Copiers', accessor: 'copiers' },
                { header: 'Risk Score', accessor: 'risk' },
                { header: 'Fee', accessor: 'fee' }
            ]}
            actions={[
                { label: 'Audit', onClick: () => { } }
            ]}
        />
    );
}

export function APIView() {
    const keys = [
        { id: 1, name: 'Trading Bot 1', key: 'pk_live_...', permissions: 'Trade', lastUsed: '2 mins ago', status: 'Active' },
        { id: 2, name: 'Reporting Tool', key: 'pk_read_...', permissions: 'Read-Only', lastUsed: '1 hour ago', status: 'Active' },
    ];

    return (
        <GenericTableView
            title="API Keys"
            subtitle="Manage API access tokens"
            data={keys}
            columns={[
                { header: 'Name', accessor: 'name' },
                { header: 'Key Prefix', accessor: 'key' },
                { header: 'Permissions', accessor: 'permissions' },
                { header: 'Last Used', accessor: 'lastUsed' },
                { header: 'Status', accessor: 'status' }
            ]}
            actions={[
                { label: 'Revoke', onClick: () => { }, variant: 'danger' }
            ]}
            onNewItem={() => { }}
            newItemLabel="Generate Key"
        />
    );
}

export function RewardsView() {
    const rewards = [
        { id: 1, item: 'iPhone 15 Pro', points: 50000, stock: 5, claimed: 12 },
        { id: 2, item: '$100 Cash Credit', points: 1000, stock: 999, claimed: 450 },
    ];

    return (
        <GenericTableView
            title="Loyalty Rewards"
            subtitle="Manage redeemable items and points"
            data={rewards}
            columns={[
                { header: 'Item', accessor: 'item', className: 'font-medium' },
                { header: 'Points Cost', accessor: (item) => item.points.toLocaleString('en-US') },
                { header: 'Stock', accessor: 'stock' },
                { header: 'Total Claimed', accessor: 'claimed' }
            ]}
            onNewItem={() => { }}
            newItemLabel="Add Reward"
        />
    );
}

export function RiskView() {
    const exposure = [
        { id: 1, symbol: 'EURUSD', netPosition: '+50.5 Lots', value: '$5,050,000', pnl: '+$12,400' },
        { id: 2, symbol: 'XAUUSD', netPosition: '-12.0 Lots', value: '$2,400,000', pnl: '-$5,200' },
        { id: 3, symbol: 'BTCUSD', netPosition: '+5.0 Lots', value: '$350,000', pnl: '+$8,500' },
    ];

    return (
        <GenericTableView
            title="Risk Exposure"
            subtitle="Real-time net open positions"
            data={exposure}
            columns={[
                { header: 'Symbol', accessor: 'symbol', className: 'font-bold' },
                {
                    header: 'Net Position', accessor: (item) => (
                        <span style={{ color: item.netPosition.startsWith('+') ? '#10b981' : '#ef4444' }}>{item.netPosition}</span>
                    )
                },
                { header: 'Notional Value', accessor: 'value' },
                {
                    header: 'Floating P&L', accessor: (item) => (
                        <span style={{ color: item.pnl.startsWith('+') ? '#10b981' : '#ef4444' }}>{item.pnl}</span>
                    )
                }
            ]}
        />
    );
}
