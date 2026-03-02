import React, { useState } from 'react';
import {
    HelpCircle,
    Pencil,
    Search,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';

const EmailTemplates = () => {
    const [selectedRows, setSelectedRows] = useState([]);

    // Mock Data based on screenshot
    const templates = [
        { id: 83, type: 'New Device Detected', department: 'funded@dev4traders.com', subject: 'Your account logged in from a new device', updated: '2 years ago' },
        { id: 84, type: 'Failed Login', department: 'funded@dev4traders.com', subject: 'Failed login to your account', updated: '2 years ago' },
        { id: 85, type: 'User Activated', department: 'funded@dev4traders.com', subject: 'Account Activated', updated: '2 years ago' },
        { id: 86, type: 'User Activation Required', department: 'funded@dev4traders.com', subject: 'Activation required', updated: '2 years ago' },
        { id: 88, type: 'Challenge Confirmed', department: 'funded@dev4traders.com', subject: 'Challenge Order Confirmed', updated: '2 years ago' },
        { id: 89, type: 'Account Generated for Challenge', department: 'funded@dev4traders.com', subject: 'Trading Account Details', updated: '2 years ago' },
        { id: 90, type: 'Challenge Cancelled', department: 'funded@dev4traders.com', subject: 'Challenge Order Cancelled', updated: '2 years ago' },
        { id: 91, type: 'Trading Objective Failed', department: 'funded@dev4traders.com', subject: 'Challenge Failed', updated: '2 years ago' },
        { id: 92, type: 'Trading Objective Passed', department: 'funded@dev4traders.com', subject: 'Challenge Passed', updated: '2 years ago' },
        { id: 93, type: 'Account Generated', department: 'funded@dev4traders.com', subject: 'Trading Account Details', updated: '2 years ago' },
        { id: 94, type: 'Account Became Invalid', department: 'funded@dev4traders.com', subject: 'Account Invalid', updated: '2 years ago' },
        { id: 95, type: 'Account Added Manually', department: 'funded@dev4traders.com', subject: 'Trading Account Details', updated: '2 years ago' },
        { id: 97, type: 'User Created', department: 'funded@dev4traders.com', subject: 'You Login Details', updated: '2 years ago' },
        { id: 121, type: 'Trading Objective Rejected', department: 'funded@dev4traders.com', subject: 'Performance Rejected', updated: '2 years ago' },
    ];

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedRows(templates.map(t => t.id));
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

    return (
        <div className="space-y-6 animate-in fade-in zoom-in duration-300">

            {/* Header */}
            <div>
                <div className="flex items-center gap-2 mb-6">
                    <h1 className="text-2xl font-bold text-text-main">Email Templates</h1>
                    <a href="#" className="text-primary text-xs flex items-center gap-1 hover:underline ml-2">
                        Need Help? <HelpCircle className="w-3 h-3" />
                    </a>
                </div>
            </div>

            {/* Main Content Card */}
            <div className="glass-panel rounded-2xl overflow-hidden border border-border">

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-surface/50 text-text-muted text-xs font-medium border-b border-border">
                                <th className="p-4 w-12 text-center">
                                    <input
                                        type="checkbox"
                                        className="rounded border-border bg-background focus:ring-primary text-primary"
                                        checked={selectedRows.length === templates.length && templates.length > 0}
                                        onChange={handleSelectAll}
                                    />
                                </th>
                                <th className="p-4 font-medium uppercase text-[11px] tracking-wider">ID</th>
                                <th className="p-4 font-medium uppercase text-[11px] tracking-wider w-1/4">Type</th>
                                <th className="p-4 font-medium uppercase text-[11px] tracking-wider">Department</th>
                                <th className="p-4 font-medium uppercase text-[11px] tracking-wider w-1/4">Subject</th>
                                <th className="p-4 font-medium uppercase text-[11px] tracking-wider">Updated At</th>
                                <th className="p-4 font-medium uppercase text-[11px] tracking-wider text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border text-sm">
                            {templates.map((item) => (
                                <tr key={item.id} className="group hover:bg-surface/40 transition-colors">
                                    <td className="p-4 text-center">
                                        <input
                                            type="checkbox"
                                            className="rounded border-border bg-background focus:ring-primary text-primary"
                                            checked={selectedRows.includes(item.id)}
                                            onChange={() => handleSelectRow(item.id)}
                                        />
                                    </td>
                                    <td className="p-4 text-text-muted text-xs">{item.id}</td>
                                    <td className="p-4 text-text-main">{item.type}</td>
                                    <td className="p-4">
                                        <span className="bg-secondary/20 text-secondary border border-secondary/30 px-2 py-0.5 rounded textxs">
                                            {item.department}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <a href="#" className="text-text-muted hover:text-primary hover:underline transition-colors decoration-dotted underline-offset-4">
                                            {item.subject}
                                        </a>
                                    </td>
                                    <td className="p-4 text-text-muted text-xs">{item.updated}</td>
                                    <td className="p-4 text-center">
                                        <button className="text-secondary hover:text-white transition-colors">
                                            <Pencil className="w-4 h-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Footer / Pagination */}
                <div className="p-4 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-muted">
                    <div>
                        Showing <span className="font-medium text-text-main">1</span> to <span className="font-medium text-text-main">{templates.length}</span> of <span className="font-medium text-text-main">{templates.length}</span> entries
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

export default EmailTemplates;
