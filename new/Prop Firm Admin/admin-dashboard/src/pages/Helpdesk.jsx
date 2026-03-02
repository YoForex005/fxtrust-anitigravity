import {
    RefreshCw,
    Search,
    HelpCircle,
    Info,
    ChevronLeft,
    ChevronRight,
    Filter,
    ArrowUpDown,
    LayoutGrid,
    ChevronDown,
    User,
    Archive
} from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { cn } from '../lib/utils';

const Helpdesk = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [sourceFilter, setSourceFilter] = useState(null);
    const [showColumnsDropdown, setShowColumnsDropdown] = useState(false);
    const columnsDropdownRef = useRef(null);
    const [searchTerm, setSearchTerm] = useState('');

    const [visibleColumns, setVisibleColumns] = useState({
        all: false,
        priority: true,
        subject: true,
        author: true,
        created: true,
        updated: true,
        updatedBy: true
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

    const handleRefresh = () => {
        setSearchTerm('');
        setSourceFilter(null);
        setSelectedItems([]);
        setShowColumnsDropdown(false);
        window.location.reload();
    };

    const toggleAllSelection = () => {
        // Since there's no data, we just toggle UI for now
        if (selectedItems.length > 0) {
            setSelectedItems([]);
        }
    };

    const toggleColumn = (column) => {
        if (column === 'all') {
            const newValue = !visibleColumns.all;
            const newVisibleColumns = { ...visibleColumns, all: newValue };
            Object.keys(newVisibleColumns).forEach(key => {
                if (key !== 'subject') { // Keep subject essential
                    newVisibleColumns[key] = newValue;
                }
            });
            newVisibleColumns.subject = true;
            setVisibleColumns(newVisibleColumns);
        } else {
            setVisibleColumns(prev => ({
                ...prev,
                [column]: !prev[column]
            }));
        }
    };

    return (
        <div className="space-y-6 animate-in fade-in zoom-in duration-300">

            {/* Header */}
            <div>
                <div className="flex items-center gap-2 mb-6">
                    <h1 className="text-2xl font-bold text-text-main">Tickets</h1>
                    <span className="text-text-muted text-sm border-l border-border pl-2">Helpdesk Tickets</span>
                    <a href="#" className="text-primary text-xs flex items-center gap-1 hover:underline ml-2">
                        Need Help? <HelpCircle className="w-3 h-3" />
                    </a>
                </div>
            </div>

            {/* Toolbar */}
            <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="flex items-center gap-4 flex-1">
                    <div className="flex items-center gap-2">
                        <button
                            onClick={handleRefresh}
                            className="flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-lg text-text-muted hover:text-text-main transition-colors text-sm font-medium"
                        >
                            <RefreshCw className="w-4 h-4" />
                            Refresh
                        </button>

                        {/* Source Toggles */}
                        <button
                            onClick={() => setSourceFilter(sourceFilter === 'manual' ? null : 'manual')}
                            className={cn(
                                "p-2 border rounded-lg transition-colors",
                                sourceFilter === 'manual'
                                    ? "bg-primary/10 border-primary text-primary"
                                    : "bg-surface border-border text-text-muted hover:text-text-main"
                            )}
                        >
                            <User className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => setSourceFilter(sourceFilter === 'challenge' ? null : 'challenge')}
                            className={cn(
                                "p-2 border rounded-lg transition-colors",
                                sourceFilter === 'challenge'
                                    ? "bg-primary/10 border-primary text-primary"
                                    : "bg-surface border-border text-text-muted hover:text-text-main"
                            )}
                        >
                            <Archive className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="relative flex-1 max-w-sm">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
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
                                <div className="px-4 py-2 border-b border-border mb-1">
                                    <label className="flex items-center gap-2 cursor-pointer group">
                                        <div className="relative flex items-center justify-center">
                                            <input
                                                type="checkbox"
                                                className="sr-only"
                                                checked={visibleColumns.all}
                                                onChange={() => toggleColumn('all')}
                                            />
                                            <div className={cn(
                                                "w-4 h-4 rounded border transition-all",
                                                visibleColumns.all ? "bg-primary border-primary" : "border-border group-hover:border-text-muted"
                                            )}></div>
                                            {visibleColumns.all && <div className="absolute w-2 h-2 bg-white rounded-sm"></div>}
                                        </div>
                                        <span className="text-xs font-bold text-text-main">All</span>
                                    </label>
                                </div>
                                <div className="max-h-64 overflow-y-auto custom-scrollbar">
                                    {Object.entries({
                                        priority: 'priority',
                                        subject: 'subject',
                                        author: 'author',
                                        created: 'created',
                                        updated: 'updated',
                                        updatedBy: 'updated by'
                                    }).map(([key, label]) => (
                                        <div key={key} className="px-4 py-1.5 hover:bg-surface-lighter transition-colors">
                                            <label className="flex items-center gap-2 cursor-pointer group">
                                                <div className="relative flex items-center justify-center">
                                                    <input
                                                        type="checkbox"
                                                        className="sr-only"
                                                        checked={visibleColumns[key]}
                                                        onChange={() => toggleColumn(key)}
                                                    />
                                                    <div className={cn(
                                                        "w-4 h-4 rounded border transition-all",
                                                        visibleColumns[key] ? "bg-primary border-primary" : "border-border group-hover:border-text-muted"
                                                    )}></div>
                                                    {visibleColumns[key] && <div className="absolute w-2 h-2 bg-white rounded-sm"></div>}
                                                </div>
                                                <span className="text-xs text-text-muted group-hover:text-text-main transition-colors capitalize">{label}</span>
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
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
                                    <div className="relative flex items-center justify-center">
                                        <input
                                            type="checkbox"
                                            className="sr-only"
                                            checked={selectedItems.length > 0}
                                            onChange={toggleAllSelection}
                                        />
                                        <div className={cn(
                                            "w-4 h-4 rounded border transition-all cursor-pointer hover:border-text-muted",
                                            selectedItems.length > 0 ? "bg-primary border-primary" : "bg-background border-border"
                                        )}></div>
                                        {selectedItems.length > 0 && <div className="absolute w-2 h-2 bg-white rounded-sm pointer-events-none"></div>}
                                    </div>
                                </th>
                                {visibleColumns.priority && <th className="p-4 font-medium">Priority</th>}
                                {visibleColumns.subject && <th className="p-4 font-medium">Subject</th>}
                                {visibleColumns.author && (
                                    <th className="p-4 font-medium">
                                        <div className="flex items-center gap-1">
                                            Author
                                            <Filter className="w-3 h-3 opacity-50 cursor-pointer hover:text-primary transition-colors" />
                                        </div>
                                    </th>
                                )}
                                {visibleColumns.created && <th className="p-4 font-medium">Created</th>}
                                {visibleColumns.updated && (
                                    <th className="p-4 font-medium">
                                        <div className="flex items-center gap-1">
                                            Updated
                                            <ArrowUpDown className="w-3 h-3 opacity-50 cursor-pointer hover:text-primary transition-colors" />
                                        </div>
                                    </th>
                                )}
                                {visibleColumns.updatedBy && <th className="p-4 font-medium">Updated By</th>}
                                <th className="p-4 font-medium text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border text-sm">
                            <tr>
                                <td colSpan={1 + Object.values(visibleColumns).filter(v => v === true).length - 1 + 1} className="p-8 text-center text-text-muted italic">
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

export default Helpdesk;
