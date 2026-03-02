import React, { useState } from 'react';
import {
    HelpCircle,
    ChevronLeft,
    ChevronRight,
    Search
} from 'lucide-react';
import { cn } from '../../lib/utils';

const SystemNotifications = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [notifications, setNotifications] = useState([
        { id: 1, type: 'Account Generated', email: true, dashboard: true, webhook: true },
        { id: 2, type: 'Challenge Passes', email: true, dashboard: true, webhook: false },
        { id: 3, type: 'Challenge Rejected', email: true, dashboard: true, webhook: false },
        { id: 4, type: 'Objective Failed', email: true, dashboard: true, webhook: false },
        { id: 5, type: 'Inactive Challenge Cancelled Notification', email: true, dashboard: true, webhook: false },
        { id: 6, type: 'Challenge Rejected', email: true, dashboard: true, webhook: false },
        { id: 7, type: 'Challenge Created', email: true, dashboard: true, webhook: false },
        { id: 8, type: 'Order Confirmed', email: true, dashboard: true, webhook: false },
        { id: 9, type: 'Challenge Account Generated', email: true, dashboard: true, webhook: false },
        { id: 10, type: 'Account Added', email: true, dashboard: true, webhook: false },
        { id: 11, type: 'User Activated', email: true, dashboard: true, webhook: false },
        { id: 12, type: 'Challenge Passed', email: true, dashboard: true, webhook: false },
        { id: 13, type: 'Challenge Cancelled', email: true, dashboard: true, webhook: false },
        { id: 14, type: 'Challenge Failed', email: true, dashboard: true, webhook: false },
        { id: 15, type: 'Challenge Passed (Unverified)', email: true, dashboard: true, webhook: false },
        { id: 16, type: 'Affiliate Portal Setup', email: true, dashboard: true, webhook: false },
        { id: 17, type: 'Inactive Challenge Cancelled Notification', email: true, dashboard: true, webhook: false },
        { id: 18, type: 'New User Created', email: true, dashboard: true, webhook: false },
    ]);

    const handleToggle = (id, field) => {
        setNotifications(prev => prev.map(n =>
            n.id === id ? { ...n, [field]: !n[field] } : n
        ));
    };

    const filteredNotifications = notifications.filter(n =>
        n.type.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Toggle Switch Component
    const ToggleSwitch = ({ checked, onChange }) => (
        <div
            className={cn(
                "w-11 h-6 rounded-full relative cursor-pointer transition-colors duration-200 ease-in-out",
                checked ? "bg-primary" : "bg-surface-lighter border border-border"
            )}
            onClick={() => onChange(!checked)}
        >
            <div
                className={cn(
                    "absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-transform duration-200 ease-in-out",
                    checked ? "translate-x-5" : "translate-x-0"
                )}
            />
        </div>
    );

    return (
        <div className="space-y-6 animate-in fade-in zoom-in duration-300">

            {/* Header */}
            <div>
                <div className="flex items-center gap-2 mb-2">
                    <h1 className="text-2xl font-bold text-text-main">System Notifications</h1>
                    <span className="text-text-muted text-sm border-l border-border pl-2">System Notifications</span>
                    <a href="#" className="text-primary text-xs flex items-center gap-1 hover:underline ml-2">
                        Need Help? <HelpCircle className="w-3 h-3" />
                    </a>
                </div>
            </div>

            {/* Toolbar */}
            <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                    <input
                        type="text"
                        placeholder="Search Notifications"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-surface border border-border rounded-full pl-10 pr-4 py-2 text-sm text-text-main focus:outline-none focus:border-primary transition-colors"
                    />
                </div>
            </div>

            {/* Main Content Card */}
            <div className="glass-panel rounded-2xl overflow-hidden border border-border">

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-surface/50 text-text-muted text-xs font-medium border-b border-border">
                                <th className="p-4 w-1/2">Type</th>
                                <th className="p-4 w-1/6">Email?</th>
                                <th className="p-4 w-1/6">Dashboard Notification?</th>
                                <th className="p-4 w-1/6">Send Webhooks?</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border text-sm">
                            {filteredNotifications.map((item) => (
                                <tr key={item.id} className="group hover:bg-surface/40 transition-colors">
                                    <td className="p-4 text-text-muted">{item.type}</td>
                                    <td className="p-4">
                                        <ToggleSwitch checked={item.email} onChange={() => handleToggle(item.id, 'email')} />
                                    </td>
                                    <td className="p-4">
                                        <ToggleSwitch checked={item.dashboard} onChange={() => handleToggle(item.id, 'dashboard')} />
                                    </td>
                                    <td className="p-4">
                                        <ToggleSwitch checked={item.webhook} onChange={() => handleToggle(item.id, 'webhook')} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Footer / Pagination */}
                <div className="p-4 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-muted">
                    <div>
                        Showing <span className="font-medium text-text-main">1</span> to <span className="font-medium text-text-main">{notifications.length}</span> of <span className="font-medium text-text-main">{notifications.length}</span> entries
                    </div>

                    <div className="flex items-center gap-2">
                        <select className="bg-surface border border-border rounded p-1 text-text-main focus:outline-none focus:border-primary">
                            <option>100</option>
                            <option>50</option>
                            <option>25</option>
                        </select>
                        <div className="flex items-center rounded-lg border border-border overflow-hidden">
                            <button className="p-2 hover:bg-surface transition-colors border-r border-border"><ChevronLeft className="w-4 h-4" /></button>
                            <button className="px-3 py-2 bg-primary text-background font-bold">1</button>
                            <button className="p-2 hover:bg-surface transition-colors border-l border-border"><ChevronRight className="w-4 h-4" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SystemNotifications;
