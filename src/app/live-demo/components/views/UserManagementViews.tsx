'use client';

import GenericTableView from '../shared/GenericTableView';
import { mockAdmins } from '../../data/mockDataExpanded';

export function AdminsView() {
    const totalAdmins = mockAdmins.length;
    const activeAdmins = mockAdmins.filter(a => a.status === 'active').length;
    const superAdmins = mockAdmins.filter(a => a.role === 'super_admin').length;

    return (
        <GenericTableView
            title="Admin Management"
            subtitle="Manage system administrators and permissions"
            data={mockAdmins}
            summaryCards={[
                { label: 'Total Staff', value: totalAdmins, icon: <span>👥</span> },
                { label: 'Active Now', value: activeAdmins, trend: '100% uptime', trendUp: true, icon: <span>🟢</span> },
                { label: 'Super Admins', value: superAdmins, icon: <span>🛡️</span> }
            ]}
            columns={[
                { header: 'Name', accessor: 'name', className: 'font-medium' },
                { header: 'Email', accessor: 'email' },
                {
                    header: 'Role', accessor: (item) => (
                        <span style={{ textTransform: 'capitalize' }}>{item.role.replace('_', ' ')}</span>
                    )
                },
                {
                    header: 'Status', accessor: (item) => (
                        <span className={`status-badge status-${item.status}`}>{item.status}</span>
                    )
                },
                { header: 'Last Login', accessor: (item) => new Date(item.lastLogin).toLocaleString('en-US') }
            ]}
            actions={[
                { label: 'Edit', onClick: () => { }, variant: 'secondary' },
                { label: 'Permissions', onClick: () => { }, variant: 'ghost' }
            ]}
            onNewItem={() => { }}
            newItemLabel="Add Admin"
        />
    );
}

export function KYCView() {
    const kycRequests = [
        { id: 1, client: 'John Doe', document: 'Passport', submitted: '2024-03-10', status: 'Pending' },
        { id: 2, client: 'Alice Smith', document: 'Utility Bill', submitted: '2024-03-09', status: 'Reviewing' },
        { id: 3, client: 'Bob Brown', document: 'ID Card', submitted: '2024-03-08', status: 'Rejected' },
        { id: 4, client: 'Charlie Day', document: 'Passport', submitted: '2024-03-10', status: 'Pending' },
        { id: 5, client: 'Eva Green', document: 'Driver License', submitted: '2024-03-07', status: 'Verified' },
        { id: 6, client: 'Frank White', document: 'Passport', submitted: '2024-03-06', status: 'Verified' },
    ];

    const pending = kycRequests.filter(r => r.status === 'Pending').length;
    const reviewing = kycRequests.filter(r => r.status === 'Reviewing').length;
    const verified = kycRequests.filter(r => r.status === 'Verified').length;

    return (
        <GenericTableView
            title="KYC Verification"
            subtitle="Review and approve client documents"
            data={kycRequests}
            summaryCards={[
                { label: 'Pending Review', value: pending, trend: '+2 today', trendUp: false, icon: <span>⏳</span> },
                { label: 'Under Review', value: reviewing, icon: <span>👀</span> },
                { label: 'Verified Total', value: verified, trend: 'High Quality', trendUp: true, icon: <span>✅</span> }
            ]}
            columns={[
                { header: 'Client', accessor: 'client', className: 'font-medium' },
                { header: 'Document Type', accessor: 'document' },
                { header: 'Submitted Date', accessor: 'submitted' },
                {
                    header: 'Status', accessor: (item) => (
                        <span className={`status-badge status-${item.status.toLowerCase()}`}>{item.status}</span>
                    )
                }
            ]}
            actions={[
                { label: 'Approve', onClick: () => { }, variant: 'primary' },
                { label: 'Reject', onClick: () => { }, variant: 'danger' },
                { label: 'View', onClick: () => { }, variant: 'secondary' }
            ]}
            filters={[
                { key: 'status', label: 'Status', options: [{ label: 'Pending', value: 'Pending' }, { label: 'Rejected', value: 'Rejected' }] }
            ]}
        />
    );
}
