import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    RefreshCw,
    Filter,
    Plus,
    Search,
    LayoutGrid,
    HelpCircle,
    User,
    Archive,
    Info,
    ChevronLeft,
    ChevronRight,
    ArrowUpDown,
    ChevronDown
} from 'lucide-react';
import { cn } from '../lib/utils';

const Accounts = () => {
    const navigate = useNavigate();
    const [showFilterDropdown, setShowFilterDropdown] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState(null);
    const [sourceFilter, setSourceFilter] = useState(null); // 'manual' or 'challenge'
    const [showColumnsDropdown, setShowColumnsDropdown] = useState(false);
    const columnsDropdownRef = useRef(null);

    const [visibleColumns, setVisibleColumns] = useState({
        all: false,
        id: true,
        title: true,
        user: true,
        email: true,
        type: true,
        server: true,
        group: true,
        initBalance: true,
        leverage: true,
        status: true,
        createdAt: false,
        updatedAt: true,
        ver: false,
        phases: true,
        tags: true,
        createdBy: false
    });

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (columnsDropdownRef.current && !columnsDropdownRef.current.contains(event.target)) {
                setShowColumnsDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleAllColumns = () => {
        const newValue = !visibleColumns.all;
        const newState = { all: newValue };
        Object.keys(visibleColumns).forEach(key => {
            if (key !== 'all') newState[key] = newValue;
        });
        setVisibleColumns(newState);
    };

    const toggleColumn = (column) => {
        setVisibleColumns(prev => ({
            ...prev,
            [column]: !prev[column]
        }));
    };

    const handleRefresh = () => {
        setSelectedFilter(null);
        setSourceFilter(null);
        setShowFilterDropdown(false);
        window.location.reload();
    };

    return (
        <div className="space-y-6 animate-in fade-in zoom-in duration-300">

            {/* Header */}
            <div>
                <div className="flex items-center gap-2 mb-6">
                    <h1 className="text-2xl font-bold text-text-main">Accounts</h1>
                    <span className="text-text-muted text-sm ml-2">Metatrader Accounts</span>
                    <a href="#" className="text-primary text-xs flex items-center gap-1 hover:underline ml-2">
                        Need Help? <HelpCircle className="w-3 h-3" />
                    </a>
                </div>
            </div>

            {/* Toolbar */}
            <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="flex items-center gap-2 flex-1">
                    <button
                        onClick={handleRefresh}
                        className="flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-lg text-text-muted hover:text-text-main transition-colors text-sm font-medium"
                    >
                        <RefreshCw className="w-4 h-4" />
                        Refresh
                    </button>
                    <div className="flex items-center">
                        <div className="relative">
                            <button
                                onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                                className={cn(
                                    "flex items-center gap-2 px-4 py-2 bg-surface border border-border transition-colors text-sm font-medium",
                                    selectedFilter ? "rounded-l-lg border-r-0" : "rounded-lg"
                                )}
                            >
                                <Filter className="w-4 h-4" />
                                Filter
                            </button>

                            {showFilterDropdown && (
                                <div className="absolute top-full left-0 mt-2 w-48 bg-surface border border-border rounded-lg shadow-xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                                    <button
                                        onClick={() => { setSelectedFilter('Metatrader 4'); setShowFilterDropdown(false); }}
                                        className="w-full text-left px-4 py-2.5 text-sm text-text-muted hover:text-text-main hover:bg-surface-lighter transition-colors border-b border-border/50"
                                    >
                                        MetaTrader 4
                                    </button>
                                    <button
                                        onClick={() => { setSelectedFilter('Metatrader 5'); setShowFilterDropdown(false); }}
                                        className="w-full text-left px-4 py-2.5 text-sm text-text-muted hover:text-text-main hover:bg-surface-lighter transition-colors border-b border-border/50"
                                    >
                                        MetaTrader 5
                                    </button>
                                    <button
                                        onClick={() => { setSelectedFilter(null); setShowFilterDropdown(false); }}
                                        className="w-full text-left px-4 py-2.5 text-sm text-danger hover:bg-danger/10 transition-colors"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            )}
                        </div>
                        {selectedFilter && (
                            <button
                                onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                                className="flex items-center gap-2 px-4 py-2 bg-surface border border-border border-l-border/30 rounded-r-lg text-primary transition-colors text-sm font-medium"
                            >
                                {selectedFilter.replace(' ', '')}
                                <ChevronDown className={cn("w-4 h-4 transition-transform", showFilterDropdown && "rotate-180")} />
                            </button>
                        )}
                    </div>

                    {/* Icon Buttons */}
                    <button
                        onClick={() => setSourceFilter(sourceFilter === 'manual' ? null : 'manual')}
                        className={cn(
                            "p-2 border rounded-lg transition-colors",
                            sourceFilter === 'manual'
                                ? "bg-primary/10 border-primary text-primary shadow-sm"
                                : "bg-surface border-border text-text-muted hover:text-text-main"
                        )}
                        title="Filter: Created manually by manager"
                    >
                        <User className="w-4 h-4" />
                    </button>
                    <button
                        onClick={() => setSourceFilter(sourceFilter === 'challenge' ? null : 'challenge')}
                        className={cn(
                            "p-2 border rounded-lg transition-colors",
                            sourceFilter === 'challenge'
                                ? "bg-primary/10 border-primary text-primary shadow-sm"
                                : "bg-surface border-border text-text-muted hover:text-text-main"
                        )}
                        title="Filter: Created by challenge"
                    >
                        <Archive className="w-4 h-4" />
                    </button>

                    <div className="relative flex-1 max-w-sm ml-2">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full bg-surface border border-border rounded-full pl-10 pr-4 py-2 text-sm text-text-main focus:outline-none focus:border-primary transition-colors"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <div className="relative" ref={columnsDropdownRef}>
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
                            <div className="absolute right-0 mt-2 w-48 bg-surface border border-border rounded-lg shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                                <label className="flex items-center gap-3 px-4 py-2 hover:bg-surface-lighter cursor-pointer group transition-colors border-b border-border/50 mb-1">
                                    <input
                                        type="checkbox"
                                        className="rounded border-border bg-background focus:ring-primary text-primary"
                                        checked={visibleColumns.all}
                                        onChange={toggleAllColumns}
                                    />
                                    <span className="text-sm text-text-main group-hover:text-primary transition-colors">All</span>
                                </label>
                                <div className="max-h-[300px] overflow-y-auto custom-scrollbar">
                                    {[
                                        { id: 'id', label: 'Id' },
                                        { id: 'title', label: 'Title' },
                                        { id: 'user', label: 'User' },
                                        { id: 'email', label: 'Email' },
                                        { id: 'type', label: 'Type' },
                                        { id: 'server', label: 'Server' },
                                        { id: 'group', label: 'Group' },
                                        { id: 'initBalance', label: 'Init. Balance' },
                                        { id: 'leverage', label: 'leverage' },
                                        { id: 'status', label: 'Status' },
                                        { id: 'createdAt', label: 'Created At' },
                                        { id: 'updatedAt', label: 'Updated At' },
                                        { id: 'ver', label: 'Ver#' },
                                        { id: 'phases', label: 'phases' },
                                        { id: 'tags', label: 'tags' },
                                        { id: 'createdBy', label: 'created by' },
                                    ].map((col) => (
                                        <label key={col.id} className="flex items-center gap-3 px-4 py-1.5 hover:bg-surface-lighter cursor-pointer group transition-colors">
                                            <input
                                                type="checkbox"
                                                className="rounded border-border bg-background focus:ring-primary text-primary"
                                                checked={visibleColumns[col.id]}
                                                onChange={() => toggleColumn(col.id)}
                                            />
                                            <span className="text-sm text-text-main group-hover:text-primary transition-colors">{col.label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                    <button
                        onClick={() => navigate('/accounts/new')}
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors text-sm"
                    >
                        <Plus className="w-4 h-4" />
                        New
                    </button>
                </div>
            </div>

            {/* Main Content Card */}
            <div className="glass-panel rounded-2xl overflow-hidden border border-border">

                {/* Tab/Filter Bar */}
                <div className="border-b border-border bg-surface/50 px-6 py-3">
                    <span className="text-text-muted text-xs uppercase tracking-wider font-medium">Status</span>
                </div>

                {/* Table */}
                <div className="overflow-x-auto min-h-[200px]">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-surface/50 text-text-muted text-xs font-medium border-b border-border">
                                <th className="p-4 w-12 text-center">
                                    <input
                                        type="checkbox"
                                        className="rounded border-border bg-background focus:ring-primary text-primary"
                                        disabled
                                    />
                                </th>
                                {visibleColumns.id && <th className="p-4 font-medium">Id</th>}
                                {visibleColumns.title && <th className="p-4 font-medium">Title</th>}
                                {visibleColumns.user && (
                                    <th className="p-4 font-medium">
                                        <div className="flex items-center gap-1">
                                            User
                                            <Filter className="w-3 h-3 opacity-50" />
                                        </div>
                                    </th>
                                )}
                                {visibleColumns.email && (
                                    <th className="p-4 font-medium">
                                        <div className="flex items-center gap-1">
                                            Email
                                            <Filter className="w-3 h-3 opacity-50" />
                                        </div>
                                    </th>
                                )}
                                {visibleColumns.type && <th className="p-4 font-medium">Type</th>}
                                {visibleColumns.server && <th className="p-4 font-medium">Server</th>}
                                {visibleColumns.group && <th className="p-4 font-medium">Group</th>}
                                {visibleColumns.initBalance && <th className="p-4 font-medium">Init. Balance</th>}
                                {visibleColumns.leverage && <th className="p-4 font-medium">Leverage</th>}
                                {visibleColumns.status && <th className="p-4 font-medium">Status</th>}
                                {visibleColumns.createdAt && <th className="p-4 font-medium text-nowrap">Created At</th>}
                                {visibleColumns.updatedAt && (
                                    <th className="p-4 font-medium">
                                        <div className="flex items-center gap-1">
                                            Updated At
                                            <ChevronDown className="w-3 h-3 opacity-50" />
                                        </div>
                                    </th>
                                )}
                                {visibleColumns.ver && <th className="p-4 font-medium">Ver#</th>}
                                {visibleColumns.phases && <th className="p-4 font-medium">Phases</th>}
                                {visibleColumns.tags && <th className="p-4 font-medium">Tags</th>}
                                {visibleColumns.createdBy && <th className="p-4 font-medium text-nowrap">Created By</th>}
                                <th className="p-4 font-medium text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border text-sm">
                            <tr>
                                <td colSpan={Object.keys(visibleColumns).filter(key => key !== 'all' && visibleColumns[key]).length + 2} className="p-8 text-center text-text-muted italic">
                                    <div className="flex items-center gap-2 justify-center opacity-70">
                                        <Info className="w-4 h-4" />
                                        No data.
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Footer / Pagination */}
                <div className="p-4 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-muted">
                    <div>
                        Showing to of <span className="font-medium text-text-main">0</span> entries
                    </div>

                    <div className="flex items-center gap-2">
                        <select className="bg-surface border border-border rounded p-1 text-text-main focus:outline-none focus:border-primary">
                            <option>100</option>
                            <option>50</option>
                            <option>25</option>
                        </select>
                        <div className="flex items-center rounded-lg border border-border overflow-hidden opacity-50">
                            <button className="p-2 bg-surface cursor-not-allowed border-r border-border"><ChevronLeft className="w-4 h-4" /></button>
                            <button className="px-3 py-2 bg-primary text-background font-bold">1</button>
                            <button className="p-2 bg-surface cursor-not-allowed border-l border-border"><ChevronRight className="w-4 h-4" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accounts;
