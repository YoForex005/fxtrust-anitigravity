import React, { useState } from 'react';
import {
    HelpCircle,
    Plus,
    RefreshCw,
    Pencil,
    Trash2,
    ChevronLeft,
    ChevronRight,
    CircleDollarSign,
    ImageOff
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../lib/utils';

const FakeGateways = () => {
    const navigate = useNavigate();
    // Mock Data based on screenshot
    const initialWays = [
        {
            id: 1,
            name: 'Free',
            enabled: true,
            created: '2 years ago',
            createdAt: '2023-08-26 10:19:00',
        },
        {
            id: 2,
            name: 'XAUUSD',
            enabled: true,
            created: '4 months ago',
            createdAt: '2025-08-16 09:46:24',
        }
    ];

    const [ways, setWays] = useState(initialWays);
    const [selectedRows, setSelectedRows] = useState([]);

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedRows(ways.map(w => w.id));
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

    const handleToggleEnabled = (id) => {
        setWays(ways.map(way =>
            way.id === id ? { ...way, enabled: !way.enabled } : way
        ));
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

            {/* Header */}
            <div>
                <div className="flex items-center gap-2 mb-1">
                    <h1 className="text-2xl font-bold text-text-main">Fake Payment Gateways</h1>
                    <span className="text-text-muted text-sm border-l border-border pl-2">Fake Payment Gateways use for testing only</span>
                    <a href="#" className="text-primary text-xs flex items-center gap-1 hover:underline ml-2">
                        Need Help? <HelpCircle className="w-3 h-3" />
                    </a>
                </div>
            </div>

            {/* Toolbar */}
            <div className="flex justify-between items-center">
                <button
                    onClick={() => window.location.reload()}
                    className="flex items-center gap-2 px-4 py-2 bg-surface border border-border text-text-muted font-medium rounded-lg hover:bg-surface-lighter transition-colors text-sm"
                >
                    <RefreshCw className="w-4 h-4" />
                    Refresh
                </button>

                <button
                    onClick={() => navigate('/payment-gateways/fake/new')}
                    className="flex items-center gap-2 px-4 py-2 bg-[#5d6bb3] text-white font-bold rounded-lg hover:bg-[#4d5999] transition-colors text-sm shadow-lg shadow-primary/20"
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
                                        checked={ways.length > 0 && selectedRows.length === ways.length}
                                        onChange={handleSelectAll}
                                    />
                                </th>
                                <th className="p-4 font-medium whitespace-nowrap">Icon</th>
                                <th className="p-4 font-medium whitespace-nowrap">Name</th>
                                <th className="p-4 font-medium whitespace-nowrap">Enabled</th>
                                <th className="p-4 font-medium whitespace-nowrap">Created</th>
                                <th className="p-4 font-medium whitespace-nowrap">Created At</th>
                                <th className="p-4 font-medium whitespace-nowrap text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border text-sm">
                            {ways.map((item) => (
                                <tr key={item.id} className="group hover:bg-surface/40 transition-colors">
                                    <td className="p-4 text-center">
                                        <input
                                            type="checkbox"
                                            className="rounded border-border bg-background focus:ring-primary text-primary"
                                            checked={selectedRows.includes(item.id)}
                                            onChange={() => handleSelectRow(item.id)}
                                        />
                                    </td>
                                    <td className="p-4">
                                        <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center border border-border overflow-hidden">
                                            {/* Using generic icon or blank as per screenshot's broken image icon look */}
                                            <ImageOff className="w-4 h-4 text-text-muted/50" />
                                        </div>
                                    </td>
                                    <td className="p-4 text-text-main font-medium">{item.name}</td>
                                    <td className="p-4">
                                        <ToggleSwitch checked={item.enabled} onChange={() => handleToggleEnabled(item.id)} />
                                    </td>
                                    <td className="p-4 text-text-muted">{item.created}</td>
                                    <td className="p-4 text-text-muted">{item.createdAt}</td>
                                    <td className="p-4 text-center">
                                        <div className="flex items-center justify-center gap-2 text-text-muted">
                                            <button className="hover:text-primary transition-colors" title="Edit">
                                                <Pencil className="w-3 h-3" />
                                            </button>
                                            <button className="hover:text-danger transition-colors" title="Delete">
                                                <Trash2 className="w-3 h-3" />
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
                        Showing <span className="font-medium text-text-main">1</span> to <span className="font-medium text-text-main">{ways.length}</span> of <span className="font-medium text-text-main">{ways.length}</span> entries
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

export default FakeGateways;
