'use client';

import GenericTableView from '../shared/GenericTableView';
import GenericFormView from '../shared/GenericFormView';
import { mockPages } from '../../data/mockDataExpanded';

export function PagesView() {
    const totalPages = mockPages.length;
    const published = mockPages.filter(p => p.status === 'published').length;
    const drafts = mockPages.filter(p => p.status === 'draft').length;

    return (
        <GenericTableView
            title="Content Pages"
            subtitle="Manage your website static pages"
            data={mockPages}
            summaryCards={[
                { label: 'Total Pages', value: totalPages, icon: <span>📄</span> },
                { label: 'Published', value: published, trend: 'Live', trendUp: true, icon: <span>🌐</span> },
                { label: 'Drafts', value: drafts, icon: <span>📝</span> }
            ]}
            columns={[
                { header: 'Title', accessor: 'title', className: 'font-medium' },
                { header: 'Slug', accessor: 'slug' },
                {
                    header: 'Status', accessor: (item) => (
                        <span className={`status-badge status-${item.status}`}>{item.status}</span>
                    )
                },
                { header: 'Last Modified', accessor: (item) => new Date(item.lastModified).toLocaleDateString() }
            ]}
            actions={[
                { label: 'Edit', onClick: () => { }, variant: 'primary' },
                { label: 'Delete', onClick: () => { }, variant: 'danger' }
            ]}
            onNewItem={() => { }}
            newItemLabel="Create Page"
        />
    );
}

export function BannersView() {
    const banners = [
        { id: 1, name: 'Main Hero', position: 'Home Top', status: 'Active', clicks: 1250 },
        { id: 2, name: 'Crypto Promo', position: 'Sidebar', status: 'Scheduled', clicks: 0 },
        { id: 3, name: 'Webinar Alert', position: 'Dashboard Top', status: 'Active', clicks: 450 },
        { id: 4, name: 'Footer Links', position: 'Footer', status: 'Active', clicks: 890 },
    ];

    const totalClicks = banners.reduce((acc, b) => acc + b.clicks, 0);

    return (
        <GenericTableView
            title="Banner Management"
            subtitle="Manage website banners and promotional spaces"
            data={banners}
            summaryCards={[
                { label: 'Active Banners', value: banners.filter(b => b.status === 'Active').length, icon: <span>🖼️</span> },
                { label: 'Total Clicks', value: totalClicks.toLocaleString('en-US'), trend: '+5% today', trendUp: true, icon: <span>🖱️</span> }
            ]}
            columns={[
                { header: 'Name', accessor: 'name' },
                { header: 'Position', accessor: 'position' },
                { header: 'Status', accessor: 'status' },
                { header: 'Clicks', accessor: 'clicks' }
            ]}
            actions={[
                { label: 'Edit', onClick: () => { } }
            ]}
            onNewItem={() => { }}
            newItemLabel="Add Banner"
        />
    );
}

export function SEOSettingsView() {
    return (
        <GenericFormView
            title="Platform Settings"
            subtitle="Configure global SEO, social media, and analytics"
            fields={[
                // General SEO
                { name: 'siteTitle', label: 'Default Site Title', type: 'text', defaultValue: 'FXTrusts - Premium Trading Platform' },
                { name: 'metaDescription', label: 'Default Meta Description', type: 'textarea', defaultValue: 'Trade Forex, Crypto, Indices and Commodities with low spreads.' },
                { name: 'keywords', label: 'Global Keywords', type: 'text', defaultValue: 'forex, trading, broker, crypto' },

                // Social Media
                { name: 'facebookUrl', label: 'Facebook URL', type: 'text', defaultValue: 'https://facebook.com/fxtrusts' },
                { name: 'twitterUrl', label: 'Twitter/X URL', type: 'text', defaultValue: 'https://x.com/fxtrusts' },
                { name: 'linkedinUrl', label: 'LinkedIn URL', type: 'text', defaultValue: 'https://linkedin.com/company/fxtrusts' },

                // Analytics
                { name: 'ga4Id', label: 'Google Analytics 4 ID', type: 'text', defaultValue: 'G-XXXXXXXXXX' },
                { name: 'fbPixelId', label: 'Facebook Pixel ID', type: 'text', defaultValue: '1234567890' },

                // System
                { name: 'maintenanceMode', label: 'Maintenance Mode', type: 'checkbox' },
                { name: 'allowRegistrations', label: 'Allow New Registrations', type: 'checkbox', defaultValue: true },
                { name: 'robotsTxt', label: 'robots.txt Content', type: 'textarea', defaultValue: 'User-agent: *\nAllow: /' }
            ]}
            onSubmit={(data) => console.log(data)}
        />
    );
}
