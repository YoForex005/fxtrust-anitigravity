import React from 'react';
import {
    HelpCircle,
    Plus,
    Pencil,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';

const EmailDepartments = () => {
    // Mock Data based on screenshot
    const departments = [
        {
            id: 1,
            name: 'funded',
            fromName: 'Funded',
            email: 'funded@dev4traders.com',
            createdAt: '2023-09-18 12:01:17',
            updatedAt: '2025-06-06 09:45:45'
        },
    ];

    return (
        <div className="space-y-6 animate-in fade-in zoom-in duration-300">

            {/* Header */}
            <div>
                <div className="flex items-center gap-2 mb-6">
                    <h1 className="text-2xl font-bold text-text-main">Email Departments</h1>
                    <span className="text-text-muted text-sm border-l border-border pl-2">Email Departments</span>
                    <a href="#" className="text-primary text-xs flex items-center gap-1 hover:underline ml-2">
                        Need Help? <HelpCircle className="w-3 h-3" />
                    </a>
                </div>
            </div>

            {/* Toolbar */}
            <div className="flex justify-end gap-4">
                <button className="flex items-center gap-2 px-4 py-2 bg-surface border border-primary/30 text-primary font-bold rounded-lg hover:bg-primary/10 transition-colors text-sm">
                    <Plus className="w-4 h-4" />
                    New
                </button>
            </div>

            {/* Main Content Card */}
            <div className="glass-panel rounded-2xl overflow-hidden border border-border">

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-surface/50 text-text-muted text-xs font-medium border-b border-border">
                                <th className="p-4 font-medium">Name</th>
                                <th className="p-4 font-medium">From Name</th>
                                <th className="p-4 font-medium">EmailAddress</th>
                                <th className="p-4 font-medium">Created At</th>
                                <th className="p-4 font-medium">Updated At</th>
                                <th className="p-4 font-medium text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border text-sm">
                            {departments.map((item) => (
                                <tr key={item.id} className="group hover:bg-surface/40 transition-colors">
                                    <td className="p-4 text-text-muted">{item.name}</td>
                                    <td className="p-4 text-text-muted">{item.fromName}</td>
                                    <td className="p-4">
                                        <span className="bg-secondary text-white px-3 py-1 rounded-full text-xs">
                                            {item.email}
                                        </span>
                                    </td>
                                    <td className="p-4 text-text-muted text-xs whitespace-pre-line">
                                        {item.createdAt.split(' ').join('\n')}
                                    </td>
                                    <td className="p-4 text-text-muted text-xs whitespace-pre-line">
                                        {item.updatedAt.split(' ').join('\n')}
                                    </td>
                                    <td className="p-4 text-center">
                                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="text-secondary hover:text-text-main transition-colors" title="Edit">
                                                <Pencil className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Footer / Pagination */}
                <div className="p-4 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-muted">
                    <div>
                        Showing <span className="font-medium text-text-main">1</span> to <span className="font-medium text-text-main">{departments.length}</span> of <span className="font-medium text-text-main">{departments.length}</span> entries
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

export default EmailDepartments;
