import React, { useState } from 'react';
import { RefreshCw, Filter, Trash2, Eye, HelpCircle, ChevronLeft, ChevronRight, ChevronDown, CheckCircle, RotateCcw } from 'lucide-react';
import { cn } from '../lib/utils';

const Notifications = () => {
    const [selectedRows, setSelectedRows] = useState([]);
    const [filter, setFilter] = useState('all'); // 'all' or 'unread'
    const [typeFilter, setTypeFilter] = useState('all'); // 'all', 'challenge_cancelled', 'cancel'
    const [showFilterDropdown, setShowFilterDropdown] = useState(false);

    // Mock Data based on screenshot
    const [notifications, setNotifications] = useState([
        { id: 1, date: '7 months ago', type: 'Challenge Cancelled', details: 'Challenge cancelled. Order #order_id, Plan "Starter".', unread: false },
        { id: 2, date: '7 months ago', type: 'Challenge Cancelled', details: 'Challenge cancelled. Order #order_id, Plan "Starter".', unread: true },
        { id: 3, date: '7 months ago', type: 'Challenge Cancelled', details: 'Challenge cancelled. Order #order_id, Plan "Starter".', unread: true },
        { id: 4, date: '7 months ago', type: 'Challenge Cancelled', details: 'Challenge cancelled. Order #order_id, Plan "Test C".', unread: true },
        { id: 5, date: '7 months ago', type: 'Cancel', details: 'Order cancelled. Order #order_id, Plan "Test".', unread: true },
        { id: 6, date: '10 months ago', type: 'Challenge Cancelled', details: 'Challenge cancelled. Order #order_id, Plan "test1".', unread: false },
        { id: 7, date: '11 months ago', type: 'Cancel', details: 'Order cancelled. Order #order_id, Plan "Starter".', unread: true },
        { id: 8, date: '1 year ago', type: 'Challenge Cancelled', details: 'Challenge cancelled. Order #order_id, Plan "Starter".', unread: true },
        { id: 9, date: '1 year ago', type: 'Challenge Cancelled', details: 'Challenge cancelled. Order #order_id, Plan "Test".', unread: true },
        { id: 10, date: '1 year ago', type: 'Cancel', details: 'Order cancelled. Order #order_id, Plan "Test C".', unread: true },
        { id: 11, date: '1 year ago', type: 'Challenge Cancelled', details: 'Challenge cancelled. Order #order_id, Plan "Test Plan".', unread: true },
        { id: 12, date: '1 year ago', type: 'Challenge Cancelled', details: 'Challenge cancelled. Order #order_id, Plan "Test Plan".', unread: true },
        { id: 13, date: '1 year ago', type: 'Cancel', details: 'Order cancelled. Order #order_id, Plan "Test Plan".', unread: true },
        { id: 14, date: '1 year ago', type: 'Challenge Cancelled', details: 'Challenge cancelled. Order #order_id, Plan "Test C".', unread: true },
        { id: 15, date: '1 year ago', type: 'Challenge Cancelled', details: 'Challenge cancelled. Order #order_id, Plan "Test C".', unread: true },
    ]);

    // Apply both filters
    let filteredNotifications = filter === 'all'
        ? notifications
        : notifications.filter(n => n.unread);

    if (typeFilter !== 'all') {
        const typeValue = typeFilter === 'challenge_cancelled' ? 'Challenge Cancelled' : 'Cancel';
        filteredNotifications = filteredNotifications.filter(n => n.type === typeValue);
    }

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedRows(filteredNotifications.map(n => n.id));
        } else {
            setSelectedRows([]);
        }
    };

    const handleSelectRow = (id) => {
        if (selectedRows.includes(id)) {
            setSelectedRows(selectedRows.filter(rowId => rowId !== id));
        } else {
            setSelectedRows([...selectedRows, id]);
        }
    };

    const handleTypeFilterSelect = (filterType) => {
        setTypeFilter(filterType);
        setShowFilterDropdown(false);
    };

    return (
        <div className="space-y-6 animate-in fade-in zoom-in duration-300">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-bold text-text-main">Notifications</h1>
                    <span className="text-text-muted text-sm border-l border-border pl-2">System Notifications</span>
                </div>
            </div>

            {/* Controls */}
            <div className="flex justify-between items-center">
                <div className="flex gap-2">
                    <button
                        onClick={() => window.location.reload()}
                        className="flex items-center gap-2 px-3 py-1.5 bg-surface border border-border rounded text-text-muted hover:text-text-main transition-colors text-xs font-medium h-[34px]"
                    >
                        <RefreshCw className="w-4 h-4" />
                        Refresh
                    </button>
                    <div className="relative">
                        <button
                            onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                            className={cn(
                                "flex items-center gap-2 px-3 py-1.5 border rounded transition-colors text-xs font-medium h-[34px]",
                                typeFilter !== 'all'
                                    ? "bg-primary/10 border-primary text-primary"
                                    : "bg-surface border-border text-text-muted hover:text-text-main"
                            )}
                        >
                            <Filter className="w-4 h-4" />
                            {typeFilter === 'all' ? 'Filter' : typeFilter === 'challenge_cancelled' ? 'Challenge Cancelled' : 'Cancel'}
                            <ChevronDown className={cn("w-3 h-3 ml-1 transition-transform", showFilterDropdown && "rotate-180")} />
                        </button>
                        {showFilterDropdown && (
                            <div className="absolute top-full left-0 mt-1 w-48 bg-surface border border-border rounded-lg shadow-xl z-50 py-1 animate-in fade-in slide-in-from-top-2 duration-150">
                                <button
                                    onClick={() => handleTypeFilterSelect('all')}
                                    className={cn(
                                        "w-full px-4 py-2 text-left text-sm hover:bg-surface-lighter transition-colors",
                                        typeFilter === 'all' ? "text-primary font-medium" : "text-text-main"
                                    )}
                                >
                                    All Types
                                </button>
                                <button
                                    onClick={() => handleTypeFilterSelect('challenge_cancelled')}
                                    className={cn(
                                        "w-full px-4 py-2 text-left text-sm hover:bg-surface-lighter transition-colors",
                                        typeFilter === 'challenge_cancelled' ? "text-primary font-medium" : "text-text-main"
                                    )}
                                >
                                    Challenge Cancelled
                                </button>
                                <button
                                    onClick={() => handleTypeFilterSelect('cancel')}
                                    className={cn(
                                        "w-full px-4 py-2 text-left text-sm hover:bg-surface-lighter transition-colors",
                                        typeFilter === 'cancel' ? "text-primary font-medium" : "text-text-main"
                                    )}
                                >
                                    Cancel
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                <button
                    onClick={() => setTypeFilter('all')}
                    className="flex items-center gap-2 px-3 py-1.5 bg-surface text-text-muted border border-border rounded hover:bg-surface-lighter transition-colors text-xs font-medium h-[34px]"
                >
                    <RotateCcw className="w-4 h-4 text-primary" />
                    Clear
                </button>
            </div>

            {/* Main Content Card */}
            <div className="glass-panel rounded-lg overflow-hidden border border-border bg-surface">
                {/* Filter Tabs */}
                <div className="flex items-center px-6 py-4 border-b border-border gap-8">
                    <span className="text-sm font-medium text-text-muted">Status</span>
                    <button
                        onClick={() => setFilter('all')}
                        className={cn(
                            "text-sm font-medium transition-colors relative",
                            filter === 'all' ? "text-primary" : "text-text-muted hover:text-text-main"
                        )}
                    >
                        All
                    </button>
                    <button
                        onClick={() => setFilter('unread')}
                        className={cn(
                            "text-sm font-medium transition-colors relative",
                            filter === 'unread' ? "text-primary" : "text-text-muted hover:text-text-main"
                        )}
                    >
                        Unread
                    </button>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-surface-lighter/30 text-text-muted text-xs font-medium border-b border-border">
                                <th className="p-4 w-10 text-center">
                                    <input
                                        type="checkbox"
                                        className="rounded border-border bg-background focus:ring-primary text-primary"
                                        checked={selectedRows.length === filteredNotifications.length && filteredNotifications.length > 0}
                                        onChange={handleSelectAll}
                                    />
                                </th>
                                <th className="p-4 w-48">Date</th>
                                <th className="p-4 w-1/4">Type</th>
                                <th className="p-4">Details</th>
                                <th className="p-4 w-24 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border text-sm">
                            {filteredNotifications.map((item) => (
                                <tr key={item.id} className="group hover:bg-surface-lighter/5 transition-colors">
                                    <td className="p-4 text-center">
                                        <input
                                            type="checkbox"
                                            className="rounded border-border bg-background focus:ring-primary text-primary"
                                            checked={selectedRows.includes(item.id)}
                                            onChange={() => handleSelectRow(item.id)}
                                        />
                                    </td>
                                    <td className="p-4">
                                        <span className={cn("px-3 py-1 rounded text-xs font-medium inline-block min-w-[100px] text-center", item.unread ? "bg-primary text-white" : "bg-transparent text-text-main border border-border")}>
                                            {item.date}
                                        </span>
                                    </td>
                                    <td className="p-4 text-text-muted">{item.type}</td>
                                    <td className="p-4 text-text-muted">{item.details}</td>
                                    <td className="p-4">
                                        <div className="flex items-center justify-center gap-4 text-primary">
                                            {item.unread ? (
                                                <>
                                                    <button className="hover:text-primary-lighter transition-colors" title="Mark as read">
                                                        <CheckCircle className="w-4 h-4" />
                                                    </button>
                                                    <button className="hover:text-primary-lighter transition-colors" title="View details">
                                                        <Eye className="w-4 h-4" />
                                                    </button>
                                                </>
                                            ) : (
                                                <button className="hover:text-danger transition-colors text-text-muted" title="Delete">
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* Footer / Pagination */}
                <div className="p-4 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-text-muted uppercase font-bold tracking-wider">
                    <div>
                        Showing <span className="text-text-main">1</span> to <span className="text-text-main">{filteredNotifications.length}</span> of <span className="text-text-main">{filteredNotifications.length}</span> entries
                    </div>

                    <div className="flex items-center gap-2">
                        <select className="bg-surface border border-border rounded p-1 text-text-main focus:outline-none focus:border-primary h-8">
                            <option>100</option>
                            <option>25</option>
                        </select>
                        <div className="flex items-center rounded-lg border border-border overflow-hidden h-8">
                            <button className="p-2 hover:bg-surface transition-colors border-r border-border"><ChevronLeft className="w-3 h-3" /></button>
                            <button className="px-3 py-1 bg-[#5d6bb3] text-white">1</button>
                            <button className="p-2 hover:bg-surface transition-colors border-l border-border"><ChevronRight className="w-3 h-3" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notifications;
