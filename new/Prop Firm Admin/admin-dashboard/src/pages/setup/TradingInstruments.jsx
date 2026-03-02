import React, { useState } from 'react';
import {
    HelpCircle,
    RefreshCw,
    Filter,
    Search,
    RotateCcw,
    Pencil,
    Trash2,
    ChevronLeft,
    ChevronRight,
    ArrowDown
} from 'lucide-react';
import { cn } from '../../lib/utils';

const TradingInstruments = () => {
    const [selectedRows, setSelectedRows] = useState([]);
    const [showFilters, setShowFilters] = useState(true);
    const [nameFilter, setNameFilter] = useState('');
    const [serverFilter, setServerFilter] = useState('Choose');
    const [instruments, setInstruments] = useState([
        { id: 1, server: 'demo.mt5.eightcap.com', name: 'USvsEUR', spread: 0, enabled: true },
        { id: 2, server: 'demo.mt5.eightcap.com', name: 'GBPUSD', spread: 0, enabled: true },
        { id: 3, server: 'demo.mt5.eightcap.com', name: 'USDCHF', spread: 0, enabled: true },
        { id: 4, server: 'demo.mt5.eightcap.com', name: 'USDJPY', spread: 0, enabled: true },
        { id: 5, server: 'demo.mt5.eightcap.com', name: 'USDCAD', spread: 0, enabled: true },
        { id: 6, server: 'demo.mt5.eightcap.com', name: 'AUDUSD', spread: 0, enabled: true },
        { id: 7, server: 'demo.mt5.eightcap.com', name: 'AUDNZD', spread: 0, enabled: true },
        { id: 8, server: 'demo.mt5.eightcap.com', name: 'AUDCAD', spread: 0, enabled: true },
        { id: 9, server: 'demo.mt5.eightcap.com', name: 'AUDCHF', spread: 0, enabled: true },
        { id: 10, server: 'demo.mt5.eightcap.com', name: 'AUDJPY', spread: 0, enabled: true },
    ]);

    const filteredInstruments = instruments.filter(item => {
        const matchesName = item.name.toLowerCase().includes(nameFilter.toLowerCase());
        const matchesServer = serverFilter === 'Choose' || item.server === serverFilter;
        return matchesName && matchesServer;
    });

    const handleToggle = (id) => {
        setInstruments(prev => prev.map(item =>
            item.id === id ? { ...item, enabled: !item.enabled } : item
        ));
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this symbol mapping?')) {
            setInstruments(prev => prev.filter(item => item.id !== id));
        }
    };

    const handleReset = () => {
        setNameFilter('');
        setServerFilter('Choose');
    };

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedRows(instruments.map(i => i.id));
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
                <div className="flex items-center gap-2 mb-6">
                    <h1 className="text-2xl font-bold text-text-main">Trading Instruments</h1>
                    <span className="text-text-muted text-sm border-l border-border pl-2">Trading Instruments Trading Hours and Basic Information</span>
                    <a href="#" className="text-primary text-xs flex items-center gap-1 hover:underline ml-2">
                        Need Help? <HelpCircle className="w-3 h-3" />
                    </a>
                </div>
            </div>

            {/* Toolbar Buttons */}
            <div className="flex items-center gap-2">
                <button
                    onClick={() => window.location.reload()}
                    className="flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded text-text-muted hover:text-white hover:bg-surface-lighter transition-colors text-sm"
                >
                    <RefreshCw className="w-4 h-4" />
                    Refresh
                </button>
                <button
                    className={cn(
                        "flex items-center gap-2 px-4 py-2 border rounded text-sm transition-colors",
                        showFilters
                            ? "bg-primary/10 border-primary text-primary"
                            : "bg-surface border-border text-text-muted hover:text-white hover:bg-surface-lighter"
                    )}
                    onClick={() => setShowFilters(!showFilters)}
                >
                    <Filter className="w-4 h-4" />
                    Filter
                </button>
            </div>

            {/* Filter Panel */}
            {showFilters && (
                <div className="glass-panel p-6 rounded-2xl border border-border space-y-4">
                    {/* Name Filter */}
                    <div className="flex items-center">
                        <div className="w-32 text-xs font-bold text-text-muted uppercase tracking-wider border-y border-l border-border rounded-l bg-surface-lighter/30 py-2.5 px-3">
                            Name
                        </div>
                        <input
                            type="text"
                            placeholder="name"
                            value={nameFilter}
                            onChange={(e) => setNameFilter(e.target.value)}
                            className="flex-1 bg-surface border border-border rounded-r py-2 px-4 text-sm text-text-main focus:outline-none focus:border-primary transition-colors h-[38px]"
                        />
                    </div>

                    {/* Broker Server + Actions Row */}
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1 flex items-center">
                            <div className="w-32 text-xs font-bold text-text-muted uppercase tracking-wider border-y border-l border-border rounded-l bg-surface-lighter/30 py-2.5 px-3">
                                Broker Server Id
                            </div>
                            <select
                                value={serverFilter}
                                onChange={(e) => setServerFilter(e.target.value)}
                                className="flex-1 bg-surface border border-border rounded-r py-2 px-4 text-sm text-text-main focus:outline-none focus:border-primary transition-colors h-[38px]"
                            >
                                <option>Choose</option>
                                <option>demo.mt5.eightcap.com</option>
                            </select>
                        </div>

                        <div className="flex items-center gap-2">
                            <button className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded text-sm font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 h-[38px]">
                                <Search className="w-4 h-4" />
                                Search
                            </button>
                            <button
                                onClick={handleReset}
                                className="flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded text-text-muted hover:text-white hover:bg-surface-lighter transition-colors text-sm font-medium h-[38px]"
                            >
                                <RotateCcw className="w-4 h-4" />
                                Reset
                            </button>
                        </div>
                    </div>
                </div>
            )}

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
                                        checked={selectedRows.length === instruments.length && instruments.length > 0}
                                        onChange={handleSelectAll}
                                    />
                                </th>
                                <th className="p-4 font-medium">Broker_server</th>
                                <th className="p-4 font-medium">Name</th>
                                <th className="p-4 font-medium">Spread</th>
                                <th className="p-4 font-medium">
                                    <div className="flex items-center gap-1">
                                        Enabled
                                        <ArrowDown className="w-3 h-3" />
                                    </div>
                                </th>
                                <th className="p-4 font-medium text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border text-sm">
                            {filteredInstruments.map((item) => (
                                <tr key={item.id} className="group hover:bg-surface/40 transition-colors">
                                    <td className="p-4 text-center">
                                        <input
                                            type="checkbox"
                                            className="rounded border-border bg-background focus:ring-primary text-primary"
                                            checked={selectedRows.includes(item.id)}
                                            onChange={() => handleSelectRow(item.id)}
                                        />
                                    </td>
                                    <td className="p-4 text-text-muted">{item.server}</td>
                                    <td className="p-4">
                                        <a href="#" className="text-primary hover:underline decoration-dotted underline-offset-4 font-medium">
                                            {item.name}
                                        </a>
                                    </td>
                                    <td className="p-4 text-text-main">{item.spread}</td>
                                    <td className="p-4">
                                        <ToggleSwitch checked={item.enabled} onChange={() => handleToggle(item.id)} />
                                    </td>
                                    <td className="p-4 text-center">
                                        <div className="flex items-center justify-center gap-3 text-text-muted">
                                            <button className="hover:text-primary transition-colors" title="Edit">
                                                <Pencil className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(item.id)}
                                                className="hover:text-danger transition-colors"
                                                title="Delete"
                                            >
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
                        Showing <span className="font-medium text-text-main">1</span> to <span className="font-medium text-text-main">{instruments.length}</span> of <span className="font-medium text-text-main">{instruments.length}</span> entries
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

export default TradingInstruments;
