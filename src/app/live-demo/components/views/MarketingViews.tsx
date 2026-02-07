'use client';

import GenericTableView from '../shared/GenericTableView';
import { mockCampaigns } from '../../data/mockDataExpanded';

export function CampaignsView() {
    const totalRevenue = mockCampaigns.reduce((acc, c) => acc + c.revenue, 0);
    const activeCampaigns = mockCampaigns.filter(c => c.status === 'Active').length;
    const avgOpenRate = Math.round(
        mockCampaigns.reduce((acc, c) => acc + (c.sent > 0 ? (c.opened / c.sent) * 100 : 0), 0) / mockCampaigns.length
    );

    return (
        <GenericTableView
            title="Marketing Campaigns"
            subtitle="Track performance of email and ad campaigns"
            data={mockCampaigns}
            summaryCards={[
                { label: 'Total Revenue', value: `$${totalRevenue.toLocaleString('en-US')}`, trend: '+22% vs last month', trendUp: true, icon: <span>📈</span> },
                { label: 'Active Campaigns', value: activeCampaigns, icon: <span>📢</span> },
                { label: 'Avg Open Rate', value: `${avgOpenRate}%`, trend: 'Industry Avg', trendUp: true, icon: <span>📧</span> }
            ]}
            columns={[
                { header: 'Campaign Name', accessor: 'name', className: 'font-medium' },
                { header: 'Type', accessor: 'type' },
                { header: 'Sent', accessor: (item) => item.sent.toLocaleString('en-US') },
                { header: 'Open Rate', accessor: (item) => `${((item.opened / item.sent) * 100).toFixed(1)}%` },
                { header: 'Revenue', accessor: (item) => `$${item.revenue.toLocaleString('en-US')}` },
                {
                    header: 'Status', accessor: (item) => (
                        <span className={`status-badge status-${item.status.toLowerCase()}`}>{item.status}</span>
                    )
                }
            ]}
            actions={[
                { label: 'Report', onClick: () => { }, variant: 'secondary' }
            ]}
            onNewItem={() => { }}
            newItemLabel="New Campaign"
        />
    );
}

export function AffiliateSystemView() {
    const affiliates = [
        { id: 1, name: 'BestForex.com', clicks: 15000, signups: 450, conversion: '3%', payout: 12500 },
        { id: 2, name: 'TradingGurus', clicks: 5000, signups: 200, conversion: '4%', payout: 8000 },
        { id: 3, name: 'CryptoNews Daily', clicks: 8000, signups: 150, conversion: '1.8%', payout: 4500 },
        { id: 4, name: 'SignalMaster', clicks: 2000, signups: 80, conversion: '4%', payout: 3200 },
    ];

    const totalPayouts = affiliates.reduce((acc, a) => acc + a.payout, 0);
    const topPartner = affiliates.reduce((prev, current) => (prev.payout > current.payout) ? prev : current);

    return (
        <GenericTableView
            title="Affiliate Partners"
            subtitle="External traffic sources and performance"
            data={affiliates}
            summaryCards={[
                { label: 'Total Payouts', value: `$${totalPayouts.toLocaleString('en-US')}`, icon: <span>💸</span> },
                { label: 'Top Partner', value: topPartner.name, trend: `$${topPartner.payout.toLocaleString('en-US')}`, trendUp: true, icon: <span>🏆</span> }
            ]}
            columns={[
                { header: 'Partner', accessor: 'name', className: 'font-medium' },
                { header: 'Clicks', accessor: (item) => item.clicks.toLocaleString('en-US') },
                { header: 'Signups', accessor: 'signups' },
                { header: 'Conversion', accessor: 'conversion' },
                { header: 'Payout', accessor: (item) => `$${item.payout.toLocaleString('en-US')}` }
            ]}
        />
    );
}
