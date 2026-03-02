import React, { useState } from 'react';
import {
    HelpCircle,
    Plus,
    Pencil,
    Trash2,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';
import { cn } from '../../lib/utils';
import NewAccountSizeModal from '../../components/modals/NewAccountSizeModal';

const AccountSizes = () => {
    const [selectedRows, setSelectedRows] = useState([]);
    const [isNewModalOpen, setIsNewModalOpen] = useState(false);

    // Mock Data based on screenshot - now as state
    const [sizes, setSizes] = useState([
        { id: 563, title: 'Deposit - 1000.00; Leverage - 100', balance: '2000', leverage: '100', enabled: true },
        { id: 564, title: '100k', balance: '100000', leverage: '50', enabled: true },
        { id: 565, title: 'Crypto', balance: '50000', leverage: '100', enabled: true },
        { id: 566, title: '400000', balance: '25000', leverage: '100', enabled: true },
        { id: 567, title: 'Anyanwau', balance: '50000', leverage: '51', enabled: true },
        { id: 568, title: 'pro', balance: '5000', leverage: '100', enabled: true },
        { id: 569, title: '1M', balance: '1000000', leverage: '2', enabled: true },
    ]);

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedRows(sizes.map(s => s.id));
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

    // Toggle enabled state
    const handleToggleEnabled = (id) => {
        setSizes(sizes.map(size =>
            size.id === id ? { ...size, enabled: !size.enabled } : size
        ));
    };

    // Edit handler
    const handleEdit = (item) => {
        alert(`Edit Account Size:\n\nID: ${item.id}\nTitle: ${item.title}\nBalance: ${item.balance}\nLeverage: ${item.leverage}`);
        // In a real app, you would open an edit modal here
    };

    // Delete handler
    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this account size?')) {
            setSizes(sizes.filter(size => size.id !== id));
            setSelectedRows(selectedRows.filter(rowId => rowId !== id));
        }
    };

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
            <NewAccountSizeModal
                isOpen={isNewModalOpen}
                onClose={() => setIsNewModalOpen(false)}
            />

            {/* Header */}
            <div>
                <div className="flex items-center gap-2 mb-6">
                    <h1 className="text-2xl font-bold text-text-main">Account Sizes</h1>
                    <span className="text-text-muted text-sm border-l border-border pl-2">Metatrader Accounts Sizes</span>
                    <a href="#" className="text-primary text-xs flex items-center gap-1 hover:underline ml-2">
                        Need Help? <HelpCircle className="w-3 h-3" />
                    </a>
                </div>
            </div>

            {/* Toolbar */}
            <div className="flex justify-end gap-4">
                <button
                    onClick={() => setIsNewModalOpen(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-surface border border-primary/30 text-primary font-bold rounded-lg hover:bg-primary/10 transition-colors text-sm"
                >
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
                                <th className="p-4 w-12 text-center">
                                    <input
                                        type="checkbox"
                                        className="rounded border-border bg-background focus:ring-primary text-primary"
                                        checked={selectedRows.length === sizes.length && sizes.length > 0}
                                        onChange={handleSelectAll}
                                    />
                                </th>
                                <th className="p-4 font-medium">Id</th>
                                <th className="p-4 font-medium">Title</th>
                                <th className="p-4 font-medium">Balance</th>
                                <th className="p-4 font-medium">Leverage</th>
                                <th className="p-4 font-medium">Enabled</th>
                                <th className="p-4 font-medium text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border text-sm">
                            {sizes.map((item) => (
                                <tr key={item.id} className="group hover:bg-surface/40 transition-colors">
                                    <td className="p-4 text-center">
                                        <input
                                            type="checkbox"
                                            className="rounded border-border bg-background focus:ring-primary text-primary"
                                            checked={selectedRows.includes(item.id)}
                                            onChange={() => handleSelectRow(item.id)}
                                        />
                                    </td>
                                    <td className="p-4 text-text-muted">{item.id}</td>
                                    <td className="p-4">
                                        <a href="#" className="text-primary hover:underline decoration-dotted underline-offset-4 font-medium">
                                            {item.title}
                                        </a>
                                    </td>
                                    <td className="p-4 text-text-main">{item.balance}</td>
                                    <td className="p-4 text-text-main">{item.leverage}</td>
                                    <td className="p-4">
                                        <ToggleSwitch checked={item.enabled} onChange={() => handleToggleEnabled(item.id)} />
                                    </td>
                                    <td className="p-4 text-center">
                                        <div className="flex items-center justify-center gap-3 text-text-muted">
                                            <button onClick={() => handleEdit(item)} className="hover:text-primary transition-colors" title="Edit">
                                                <Pencil className="w-4 h-4" />
                                            </button>
                                            <button onClick={() => handleDelete(item.id)} className="hover:text-danger transition-colors" title="Delete">
                                                <Trash2 className="w-4 h-4" />
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
                        Showing <span className="font-medium text-text-main">1</span> to <span className="font-medium text-text-main">{sizes.length}</span> of <span className="font-medium text-text-main">{sizes.length}</span> entries
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

export default AccountSizes;
