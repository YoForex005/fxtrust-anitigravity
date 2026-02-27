'use client';

import GenericTableView from '../shared/GenericTableView';
import GenericFormView from '../shared/GenericFormView';
import { mockNews } from '../../data/mockDataExpanded';

export function NewsView() {
    return (
        <GenericTableView
            title="News Management"
            subtitle="Publish market analysis and company updates"
            data={mockNews}
            columns={[
                { header: 'Title', accessor: 'title', className: 'font-medium' },
                { header: 'Category', accessor: 'category' },
                { header: 'Author', accessor: 'author' },
                { header: 'Published', accessor: (item) => item.publishedAt ? new Date(item.publishedAt).toLocaleDateString() : '-' },
                {
                    header: 'Status', accessor: (item) => (
                        <span className={`status-badge status-${item.status}`}>{item.status}</span>
                    )
                }
            ]}
            actions={[
                { label: 'Edit', onClick: () => { }, variant: 'primary' },
                { label: 'Delete', onClick: () => { }, variant: 'danger' }
            ]}
            onNewItem={() => { }}
            newItemLabel="Post News"
        />
    );
}

export function SendEmailView() {
    return (
        <GenericFormView
            title="Send Email Broadcast"
            subtitle="Send newsletters or announcements to clients"
            fields={[
                { name: 'subject', label: 'Email Subject', type: 'text', placeholder: 'Important Update...' },
                { name: 'recipients', label: 'Recipients', type: 'select', options: [{ label: 'All Clients', value: 'all' }, { label: 'VIP Only', value: 'vip' }, { label: 'IBs Only', value: 'ib' }] },
                { name: 'template', label: 'Template', type: 'select', options: [{ label: 'Standard Newsletter', value: 'newsletter' }, { label: 'Alert', value: 'alert' }] },
                { name: 'content', label: 'Message Content', type: 'textarea', placeholder: 'Write your message here...' },
                { name: 'schedule', label: 'Schedule Send', type: 'checkbox', description: 'Send later' }
            ]}
            onSubmit={(data) => console.log(data)}
            submitLabel="Send Broadcast"
        />
    );
}

export function SystemAlertsView() {
    const alerts = [
        { id: 1, type: 'System', message: 'Server maintenance scheduled', severity: 'High', date: '2024-03-10' },
        { id: 2, type: 'Security', message: 'Failed login attempts detected', severity: 'Medium', date: '2024-03-09' },
    ];

    return (
        <GenericTableView
            title="System Alerts"
            subtitle="System health and security notifications"
            data={alerts}
            columns={[
                { header: 'Type', accessor: 'type' },
                { header: 'Message', accessor: 'message', className: 'font-medium' },
                {
                    header: 'Severity', accessor: (item) => (
                        <span style={{ color: item.severity === 'High' ? 'red' : 'orange' }}>{item.severity}</span>
                    )
                },
                { header: 'Date', accessor: 'date' }
            ]}
        />
    );
}
