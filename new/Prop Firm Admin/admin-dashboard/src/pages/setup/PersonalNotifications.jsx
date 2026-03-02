import React, { useState, useRef, useEffect } from 'react';
import {
    HelpCircle,
    Info,
    X,
    ChevronLeft,
    ChevronRight,
    LayoutGrid,
    ChevronDown
} from 'lucide-react';
import { cn } from '../../lib/utils';

const PersonalNotifications = () => {
    const [selectedRows, setSelectedRows] = useState([]);
    const [showColumnsDropdown, setShowColumnsDropdown] = useState(false);
    const columnsDropdownRef = useRef(null);

    const [visibleColumns, setVisibleColumns] = useState({
        all: false,
        key: false,
        type: true,
        enabled: true
    });

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (columnsDropdownRef.current && !columnsDropdownRef.current.contains(event.target)) {
                setShowColumnsDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleColumn = (column) => {
        if (column === 'all') {
            const nextValue = !visibleColumns.all;
            setVisibleColumns({
                all: nextValue,
                key: nextValue,
                type: nextValue,
                enabled: nextValue
            });
        } else {
            const nextState = { ...visibleColumns, [column]: !visibleColumns[column] };
            const { all, ...others } = nextState;
            const allSelected = Object.values(others).every(v => v);
            setVisibleColumns({ ...nextState, all: allSelected });
        }
    };

    // Mock Data based on state
    const [notifications, setNotifications] = useState([
        { id: 1, type: 'User Activated', enabled: true },
        { id: 2, type: 'Challenge Passed', enabled: true },
        { id: 3, type: 'Challenge Cancelled', enabled: true },
        { id: 4, type: 'Challenge Failed', enabled: true },
        { id: 5, type: 'Challenge Passed (Unverified)', enabled: true },
        { id: 6, type: 'Affiliate Portal Setup', enabled: true },
    ]);

    const handleToggle = (id) => {
        setNotifications(prev => prev.map(n =>
            n.id === id ? { ...n, enabled: !n.enabled } : n
        ));
    };

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedRows(notifications.map(n => n.id));
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
                <div className="flex items-center gap-2 mb-2">
                    <h1 className="text-2xl font-bold text-text-main">Personal Email Notifications</h1>
                    <span className="text-text-muted text-sm border-l border-border pl-2">Send me the following email notifications:</span>
                    <a href="#" className="text-primary text-xs flex items-center gap-1 hover:underline ml-2">
                        Need Help? <HelpCircle className="w-3 h-3" />
                    </a>
                </div>
            </div>

            {/* Info Banner */}
            <div className="bg-secondary/20 border border-secondary/30 rounded-lg flex items-center justify-between p-4 text-secondary text-sm">
                <div className="flex items-center gap-3">
                    <Info className="w-5 h-5 fill-current" />
                    <span className="font-medium text-base">Press F5 to refresh sidebar menu</span>
                </div>
                <button className="hover:text-white transition-colors"><X className="w-4 h-4" /></button>
            </div>

            {/* Toolbar */}
            <div className="flex justify-end relative" ref={columnsDropdownRef}>
                <div className="flex items-center rounded-lg border border-border bg-surface overflow-hidden">
                    <button
                        onClick={() => setShowColumnsDropdown(!showColumnsDropdown)}
                        className="p-2 text-text-muted hover:text-text-main transition-colors border-r border-border"
                    >
                        <LayoutGrid className="w-4 h-4" />
                    </button>
                    <button
                        onClick={() => setShowColumnsDropdown(!showColumnsDropdown)}
                        className="p-1 px-1.5 text-text-muted hover:text-text-main transition-colors"
                    >
                        <ChevronDown className={cn("w-3 h-3 transition-transform", showColumnsDropdown && "rotate-180")} />
                    </button>
                </div>

                {showColumnsDropdown && (
                    <div className="absolute right-0 mt-10 w-48 bg-surface border border-border rounded-lg shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="px-4 py-2 border-b border-border mb-1">
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <input
                                    type="checkbox"
                                    className="rounded border-border bg-background focus:ring-primary text-primary"
                                    checked={visibleColumns.all}
                                    onChange={() => toggleColumn('all')}
                                />
                                <span className="text-sm font-bold text-text-main group-hover:text-primary transition-colors">All</span>
                            </label>
                        </div>
                        <div className="py-1">
                            {['key', 'type', 'enabled'].map((col) => (
                                <label key={col} className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-surface-lighter group transition-colors">
                                    <input
                                        type="checkbox"
                                        className="rounded border-border bg-background focus:ring-primary text-primary"
                                        checked={visibleColumns[col]}
                                        onChange={() => toggleColumn(col)}
                                    />
                                    <span className="text-sm text-text-main capitalize group-hover:text-primary transition-colors">{col}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                )}
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
                                        checked={selectedRows.length === notifications.length && notifications.length > 0}
                                        onChange={handleSelectAll}
                                    />
                                </th>
                                {visibleColumns.key && <th className="p-4 font-medium">Key</th>}
                                {visibleColumns.type && <th className="p-4 font-medium w-3/4">Type</th>}
                                {visibleColumns.enabled && <th className="p-4 font-medium text-right pr-12">Enabled</th>}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border text-sm">
                            {notifications.map((item) => (
                                <tr key={item.id} className="group hover:bg-surface/40 transition-colors">
                                    <td className="p-4 text-center">
                                        <input
                                            type="checkbox"
                                            className="rounded border-border bg-background focus:ring-primary text-primary"
                                            checked={selectedRows.includes(item.id)}
                                            onChange={() => handleSelectRow(item.id)}
                                        />
                                    </td>
                                    {visibleColumns.key && <td className="p-4 text-text-muted">{item.id}</td>}
                                    {visibleColumns.type && <td className="p-4 text-text-muted">{item.type}</td>}
                                    {visibleColumns.enabled && (
                                        <td className="p-4 flex justify-end pr-8">
                                            <ToggleSwitch checked={item.enabled} onChange={() => handleToggle(item.id)} />
                                        </td>
                                    )}
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

export default PersonalNotifications;
