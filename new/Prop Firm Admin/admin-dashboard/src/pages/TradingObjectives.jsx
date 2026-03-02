import {
    RefreshCw,
    Filter,
    User,
    Archive,
    LayoutGrid,
    Download,
    HelpCircle,
    Info,
    ChevronLeft,
    ChevronRight,
    ChevronDown,
    Search,
    RotateCcw,
    Calendar
} from 'lucide-react';
import { cn } from '../lib/utils';
import { useState, useRef, useEffect } from 'react';

const TradingObjectives = () => {
    const [showFilter, setShowFilter] = useState(false);
    const [sourceFilter, setSourceFilter] = useState(null); // 'manual' or 'challenge'
    const [showColumnsDropdown, setShowColumnsDropdown] = useState(false);
    const columnsDropdownRef = useRef(null);
    const [showExportDropdown, setShowExportDropdown] = useState(false);
    const exportDropdownRef = useRef(null);
    const [selectedRows, setSelectedRows] = useState([]);

    // Mock Data
    const initialData = [
        { id: 101, user: 'Mahdi', account: '123456', plan: '10K Evaluation', phase: 'Phase 1', maxDailyLoss: { result: '$200', target: '$500', percent: '40%' }, maxLoss: { result: '$400', target: '$1000', percent: '40%' }, profit: { result: '$1200', target: '$1000', percent: '120%' }, tradingDays: { result: '15', minMax: '10/30' }, stoploss: { check: 'Yes', used: 'Yes' }, expert: { check: 'No', used: 'No' } },
        { id: 102, user: 'John Doe', account: '654321', plan: '25K Evaluation', phase: 'Phase 2', maxDailyLoss: { result: '$350', target: '$1250', percent: '28%' }, maxLoss: { result: '$800', target: '$2500', percent: '32%' }, profit: { result: '$500', target: '$2500', percent: '20%' }, tradingDays: { result: '5', minMax: '10/30' }, stoploss: { check: 'Yes', used: 'Yes' }, expert: { check: 'Yes', used: 'Yes' } },
    ];

    const [data, setData] = useState(initialData);

    const [filters, setFilters] = useState({
        user: '',
        account: '',
        plan: '',
        endedAt: ''
    });

    const [visibleColumns, setVisibleColumns] = useState({
        all: false,
        id: true,
        user: true,
        account: true,
        plan: true,
        phase: true,
        maxDailyLoss: true,
        maxLoss: true,
        profit: true,
        tradingDays: true,
        stoploss: true,
        expert: true
    });

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (columnsDropdownRef.current && !columnsDropdownRef.current.contains(event.target)) {
                setShowColumnsDropdown(false);
            }
            if (exportDropdownRef.current && !exportDropdownRef.current.contains(event.target)) {
                setShowExportDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedRows(data.map(item => item.id));
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

    const handleExport = (type) => {
        let exportData = [];
        if (type === 'all' || type === 'current') {
            exportData = data;
        } else if (type === 'selected') {
            exportData = data.filter(item => selectedRows.includes(item.id));
        }

        if (exportData.length === 0) {
            alert('No data to export');
            return;
        }

        // Simple CSV generation
        const headers = ['Id', 'User', 'Account', 'Plan', 'Phase', 'Max Daily Loss', 'Max Loss', 'Profit', 'Trading Days'];
        const csvContent = [
            headers.join(','),
            ...exportData.map(item => [
                item.id,
                item.user,
                item.account,
                item.plan,
                item.phase,
                item.maxDailyLoss.result,
                item.maxLoss.result,
                item.profit.result,
                item.tradingDays.result
            ].join(','))
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', `trading_objectives_${type}_${new Date().toISOString().split('T')[0]}.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setShowExportDropdown(false);
    };

    const handleRefresh = () => {
        setFilters({
            user: '',
            account: '',
            plan: '',
            endedAt: ''
        });
        setSourceFilter(null);
        setShowFilter(false);
        setShowColumnsDropdown(false);
        window.location.reload();
    };

    const handleReset = () => {
        setFilters({
            user: '',
            account: '',
            plan: '',
            endedAt: ''
        });
    };

    const toggleColumn = (column) => {
        if (column === 'all') {
            const newValue = !visibleColumns.all;
            const newVisibleColumns = { ...visibleColumns, all: newValue };
            Object.keys(newVisibleColumns).forEach(key => {
                if (key !== 'id' && key !== 'user') { // Keep essential columns
                    newVisibleColumns[key] = newValue;
                }
            });
            newVisibleColumns.id = true;
            newVisibleColumns.user = true;
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
                    <h1 className="text-2xl font-bold text-text-main">Trading Objectives</h1>
                    <span className="text-text-muted text-sm border-l border-border pl-2">Trading Objectives and Statistics</span>
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
                    <div className="relative">
                        <button
                            onClick={() => setShowFilter(!showFilter)}
                            className={cn(
                                "flex items-center gap-2 px-4 py-2 border rounded-lg transition-colors text-sm font-medium",
                                showFilter
                                    ? "bg-primary/10 border-primary text-primary"
                                    : "bg-surface border-border text-text-muted hover:text-text-main"
                            )}
                        >
                            <Filter className="w-4 h-4" />
                            Filter
                        </button>
                    </div>

                    {/* Icon Buttons - Source Filters */}
                    <button
                        onClick={() => setSourceFilter(sourceFilter === 'manual' ? null : 'manual')}
                        className={cn(
                            "p-2 border rounded-lg transition-colors",
                            sourceFilter === 'manual'
                                ? "bg-primary/10 border-primary text-primary"
                                : "bg-surface border-border text-text-muted hover:text-text-main"
                        )}
                        title="Manual Accounts"
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
                        title="Challenge Accounts"
                    >
                        <Archive className="w-4 h-4" />
                    </button>
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
                                        id: 'id',
                                        user: 'user',
                                        account: 'account',
                                        plan: 'plan',
                                        phase: 'phase',
                                        maxDailyLoss: 'max daily loss',
                                        maxLoss: 'max loss',
                                        profit: 'profit',
                                        tradingDays: 'trading days',
                                        stoploss: 'stoploss',
                                        expert: 'expert'
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
                    <div className="relative" ref={exportDropdownRef}>
                        <div className="flex items-center rounded-lg border border-border bg-surface overflow-hidden shadow-sm hover:shadow-md transition-all">
                            <button
                                onClick={() => handleExport('all')}
                                className="flex items-center gap-2 px-4 py-2 text-text-muted hover:text-text-main transition-colors border-r border-border text-sm font-medium group"
                            >
                                <Download className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                Export
                            </button>
                            <button
                                onClick={() => setShowExportDropdown(!showExportDropdown)}
                                className="p-2 py-2.5 text-text-muted hover:text-text-main transition-colors flex items-center justify-center min-w-[32px]"
                            >
                                <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-300", showExportDropdown && "rotate-180")} />
                            </button>
                        </div>

                        {showExportDropdown && (
                            <div className="absolute right-0 mt-2 w-48 bg-surface border border-border rounded-xl shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-300 border-t-primary/20">
                                <div className="absolute -top-1 right-3 w-2 h-2 bg-surface border-t border-l border-border rotate-45"></div>
                                <button
                                    onClick={() => handleExport('all')}
                                    className="w-full text-left px-4 py-2.5 text-sm text-text-muted hover:text-text-main hover:bg-surface-lighter transition-all flex items-center gap-2"
                                >
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40"></div>
                                    All
                                </button>
                                <button
                                    onClick={() => handleExport('current')}
                                    className="w-full text-left px-4 py-2.5 text-sm text-text-muted hover:text-text-main hover:bg-surface-lighter transition-all flex items-center gap-2"
                                >
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500/40"></div>
                                    Current page
                                </button>
                                <button
                                    onClick={() => handleExport('selected')}
                                    className="w-full text-left px-4 py-2.5 text-sm text-text-muted hover:text-text-main hover:bg-surface-lighter transition-all flex items-center gap-2 border-t border-border/50 mt-1"
                                >
                                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500/40"></div>
                                    Selected rows ({selectedRows.length})
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Filter Panel */}
            {showFilter && (
                <div className="glass-panel p-6 rounded-2xl border border-border animate-in slide-in-from-top-4 duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* User Filter */}
                        <div className="flex items-center bg-surface border border-border rounded-lg overflow-hidden h-10">
                            <div className="px-3 py-2 bg-background/50 border-r border-border text-xs font-bold text-text-main min-w-[80px]">User</div>
                            <div className="relative flex-1">
                                <select
                                    value={filters.user}
                                    onChange={(e) => setFilters({ ...filters, user: e.target.value })}
                                    className="w-full bg-transparent px-3 py-2 text-sm text-text-muted focus:outline-none appearance-none"
                                >
                                    <option value="">Choose</option>
                                    <option value="1">Mahdi</option>
                                    <option value="2">John Doe</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
                            </div>
                        </div>

                        {/* Account Filter */}
                        <div className="flex items-center bg-surface border border-border rounded-lg overflow-hidden h-10">
                            <div className="px-3 py-2 bg-background/50 border-r border-border text-xs font-bold text-text-main min-w-[80px]">Account</div>
                            <div className="relative flex-1">
                                <select
                                    value={filters.account}
                                    onChange={(e) => setFilters({ ...filters, account: e.target.value })}
                                    className="w-full bg-transparent px-3 py-2 text-sm text-text-muted focus:outline-none appearance-none"
                                >
                                    <option value="">Choose</option>
                                    <option value="1">123456</option>
                                    <option value="2">654321</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
                            </div>
                        </div>

                        {/* Plan Filter */}
                        <div className="flex items-center bg-surface border border-border rounded-lg overflow-hidden h-10">
                            <div className="px-3 py-2 bg-background/50 border-r border-border text-xs font-bold text-text-main min-w-[80px]">Plan</div>
                            <div className="relative flex-1">
                                <select
                                    value={filters.plan}
                                    onChange={(e) => setFilters({ ...filters, plan: e.target.value })}
                                    className="w-full bg-transparent px-3 py-2 text-sm text-text-muted focus:outline-none appearance-none"
                                >
                                    <option value="">Choose</option>
                                    <option value="1">10K Evaluation</option>
                                    <option value="2">25K Evaluation</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
                            </div>
                        </div>

                        {/* Ended At Filter */}
                        <div className="flex items-center bg-surface border border-border rounded-lg overflow-hidden h-10 group cursor-pointer focus-within:border-primary transition-colors">
                            <div className="px-3 py-2 bg-background/50 border-r border-border text-xs font-bold text-text-main min-w-[80px]">Ended At</div>
                            <div className="relative flex-1 flex items-center pr-3 h-full">
                                <input
                                    type="date"
                                    value={filters.endedAt}
                                    onChange={(e) => setFilters({ ...filters, endedAt: e.target.value })}
                                    className="w-full bg-transparent px-3 py-2 text-sm text-text-main focus:outline-none [color-scheme:dark] h-full"
                                    onClick={(e) => e.target.showPicker?.()}
                                />
                                <Calendar
                                    className="w-4 h-4 text-text-muted pointer-events-none"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center gap-3">
                        <button className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all text-sm font-bold shadow-lg shadow-primary/20">
                            <Search className="w-4 h-4" />
                            Search
                        </button>
                        <button
                            onClick={handleReset}
                            className="flex items-center gap-2 px-6 py-2 border border-border rounded-lg text-text-main hover:bg-surface-lighter transition-colors text-sm font-medium"
                        >
                            <RotateCcw className="w-4 h-4" />
                            Reset
                        </button>
                    </div>
                </div>
            )}

            {/* Main Content Card */}
            <div className="glass-panel rounded-2xl overflow-hidden border border-border">

                {/* Table */}
                <div className="overflow-x-auto min-h-[200px]">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            {/* Top Header Row */}
                            <tr className="bg-surface/50 text-text-muted text-xs font-medium border-b border-border">
                                <th className="p-4 w-12 text-center border-r border-border/50" rowSpan="2">
                                    <input
                                        type="checkbox"
                                        className="rounded border-border bg-background focus:ring-primary text-primary cursor-pointer hover:border-primary transition-all"
                                        checked={data.length > 0 && selectedRows.length === data.length}
                                        onChange={handleSelectAll}
                                    />
                                </th>
                                {visibleColumns.id && <th className="p-3 border-r border-border/50 font-bold text-text-main" rowSpan="2">Id</th>}
                                {visibleColumns.user && <th className="p-3 border-r border-border/50 font-bold text-text-main" rowSpan="2">User</th>}
                                {visibleColumns.account && <th className="p-3 border-r border-border/50 font-bold text-text-main" rowSpan="2">Account</th>}
                                {visibleColumns.plan && <th className="p-3 border-r border-border/50 font-bold text-text-main" rowSpan="2">Plan</th>}
                                {visibleColumns.phase && <th className="p-3 border-r border-border/50 font-bold text-text-main" rowSpan="2">Phase</th>}

                                {/* Max Daily Loss Group */}
                                {visibleColumns.maxDailyLoss && <th className="p-2 text-center border-r border-border/50 border-b border-border/50 bg-surface/70 text-text-main font-bold" colSpan="3">Max Daily Loss</th>}

                                {/* Max Loss Group */}
                                {visibleColumns.maxLoss && <th className="p-2 text-center border-r border-border/50 border-b border-border/50 bg-surface/70 text-text-main font-bold" colSpan="3">Max Loss</th>}

                                {/* Profit Group */}
                                {visibleColumns.profit && <th className="p-2 text-center border-r border-border/50 border-b border-border/50 bg-surface/70 text-text-main font-bold" colSpan="3">Profit</th>}

                                {/* Trading Days Group */}
                                {visibleColumns.tradingDays && <th className="p-2 text-center border-r border-border/50 border-b border-border/50 bg-surface/70 text-text-main font-bold" colSpan="3">Trading Days</th>}

                                {/* Stoploss Group */}
                                {visibleColumns.stoploss && <th className="p-2 text-center border-r border-border/50 border-b border-border/50 bg-surface/70 text-text-main font-bold" colSpan="2">Stoploss</th>}

                                {/* Expert Group */}
                                {visibleColumns.expert && <th className="p-2 text-center border-b border-border/50 bg-surface/70 text-text-main font-bold" colSpan="2">Expert</th>}
                            </tr>

                            {/* Sub Header Row */}
                            <tr className="bg-surface/50 text-text-muted text-[10px] items-center font-medium border-b border-border uppercase tracking-wider">
                                {/* Max Daily Loss Cols */}
                                {visibleColumns.maxDailyLoss && (
                                    <>
                                        <th className="p-2 text-center border-r border-border/50 min-w-[60px]">
                                            <div className="flex items-center justify-center gap-1">Result <HelpCircle className="w-3 h-3 opacity-50" /></div>
                                        </th>
                                        <th className="p-2 text-center border-r border-border/50 min-w-[60px]">
                                            <div className="flex items-center justify-center gap-1">Target <HelpCircle className="w-3 h-3 opacity-50" /></div>
                                        </th>
                                        <th className="p-2 text-center border-r border-border/50 min-w-[30px] font-bold text-primary">%</th>
                                    </>
                                )}

                                {/* Max Loss Cols */}
                                {visibleColumns.maxLoss && (
                                    <>
                                        <th className="p-2 text-center border-r border-border/50 min-w-[60px]">
                                            <div className="flex items-center justify-center gap-1">Result <HelpCircle className="w-3 h-3 opacity-50" /></div>
                                        </th>
                                        <th className="p-2 text-center border-r border-border/50 min-w-[60px]">
                                            <div className="flex items-center justify-center gap-1">Target <HelpCircle className="w-3 h-3 opacity-50" /></div>
                                        </th>
                                        <th className="p-2 text-center border-r border-border/50 min-w-[30px] font-bold text-primary">%</th>
                                    </>
                                )}

                                {/* Profit Cols */}
                                {visibleColumns.profit && (
                                    <>
                                        <th className="p-2 text-center border-r border-border/50 min-w-[60px]">
                                            <div className="flex items-center justify-center gap-1">Result <HelpCircle className="w-3 h-3 opacity-50" /></div>
                                        </th>
                                        <th className="p-2 text-center border-r border-border/50 min-w-[60px]">
                                            <div className="flex items-center justify-center gap-1">Target <HelpCircle className="w-3 h-3 opacity-50" /></div>
                                        </th>
                                        <th className="p-2 text-center border-r border-border/50 min-w-[30px] font-bold text-primary">%</th>
                                    </>
                                )}

                                {/* Trading Days Cols */}
                                {visibleColumns.tradingDays && (
                                    <>
                                        <th className="p-2 text-center border-r border-border/50 min-w-[30px]">
                                            <HelpCircle className="w-3.5 h-3.5 mx-auto opacity-70 text-primary" />
                                        </th>
                                        <th className="p-2 text-center border-r border-border/50 min-w-[60px]">
                                            <div className="flex items-center justify-center gap-1">Result <HelpCircle className="w-3 h-3 opacity-50" /></div>
                                        </th>
                                        <th className="p-2 text-center border-r border-border/50 min-w-[60px]">Min/Max</th>
                                    </>
                                )}

                                {/* Stoploss Cols */}
                                {visibleColumns.stoploss && (
                                    <>
                                        <th className="p-2 text-center border-r border-border/50 min-w-[50px]">
                                            <div className="flex items-center justify-center gap-1">Check? <HelpCircle className="w-3 h-3 opacity-50" /></div>
                                        </th>
                                        <th className="p-2 text-center border-r border-border/50 min-w-[50px]">Used?</th>
                                    </>
                                )}

                                {/* Expert Cols */}
                                {visibleColumns.expert && (
                                    <>
                                        <th className="p-2 text-center border-r border-border/50 min-w-[50px]">
                                            <div className="flex items-center justify-center gap-1">Check? <HelpCircle className="w-3 h-3 opacity-50" /></div>
                                        </th>
                                        <th className="p-2 text-center min-w-[50px]">Used?</th>
                                    </>
                                )}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border text-sm">
                            {data.length > 0 ? (
                                data.map((item) => (
                                    <tr
                                        key={item.id}
                                        className={cn(
                                            "group transition-all duration-200",
                                            selectedRows.includes(item.id) ? "bg-primary/5" : "hover:bg-surface/40"
                                        )}
                                    >
                                        <td className="p-4 text-center border-r border-border/30">
                                            <input
                                                type="checkbox"
                                                className="rounded border-border bg-background focus:ring-primary text-primary cursor-pointer transition-all"
                                                checked={selectedRows.includes(item.id)}
                                                onChange={() => handleSelectRow(item.id)}
                                            />
                                        </td>
                                        {visibleColumns.id && <td className="p-3 text-text-main font-mono text-xs border-r border-border/30">{item.id}</td>}
                                        {visibleColumns.user && <td className="p-3 text-text-main font-medium border-r border-border/30">{item.user}</td>}
                                        {visibleColumns.account && <td className="p-3 text-text-muted border-r border-border/30">{item.account}</td>}
                                        {visibleColumns.plan && <td className="p-3 text-text-muted border-r border-border/30 italic text-xs">{item.plan}</td>}
                                        {visibleColumns.phase && (
                                            <td className="p-3 border-r border-border/30">
                                                <span className="px-2 py-0.5 rounded-full bg-surface-lighter text-[10px] font-bold text-text-muted uppercase">
                                                    {item.phase}
                                                </span>
                                            </td>
                                        )}

                                        {/* Max Daily Loss Data */}
                                        {visibleColumns.maxDailyLoss && (
                                            <>
                                                <td className="p-2 text-center text-text-muted border-r border-border/30">{item.maxDailyLoss.result}</td>
                                                <td className="p-2 text-center text-text-muted border-r border-border/30">{item.maxDailyLoss.target}</td>
                                                <td className="p-2 text-center font-bold text-primary border-r border-border/30">{item.maxDailyLoss.percent}</td>
                                            </>
                                        )}

                                        {/* Max Loss Data */}
                                        {visibleColumns.maxLoss && (
                                            <>
                                                <td className="p-2 text-center text-text-muted border-r border-border/30">{item.maxLoss.result}</td>
                                                <td className="p-2 text-center text-text-muted border-r border-border/30">{item.maxLoss.target}</td>
                                                <td className="p-2 text-center font-bold text-primary border-r border-border/30">{item.maxLoss.percent}</td>
                                            </>
                                        )}

                                        {/* Profit Data */}
                                        {visibleColumns.profit && (
                                            <>
                                                <td className="p-2 text-center text-text-muted border-r border-border/30 underline decoration-primary/20">{item.profit.result}</td>
                                                <td className="p-2 text-center text-text-muted border-r border-border/30">{item.profit.target}</td>
                                                <td className="p-2 text-center font-bold text-green-500 border-r border-border/30">{item.profit.percent}</td>
                                            </>
                                        )}

                                        {/* Trading Days Data */}
                                        {visibleColumns.tradingDays && (
                                            <>
                                                <td className="p-2 text-center border-r border-border/30">
                                                    <div className="w-2 h-2 rounded-full bg-green-500 mx-auto shadow-[0_0_8px_rgba(34,197,94,0.4)]"></div>
                                                </td>
                                                <td className="p-2 text-center text-text-muted border-r border-border/30 font-medium">{item.tradingDays.result}</td>
                                                <td className="p-2 text-center text-text-muted border-r border-border/30">{item.tradingDays.minMax}</td>
                                            </>
                                        )}

                                        {/* Stoploss Data */}
                                        {visibleColumns.stoploss && (
                                            <>
                                                <td className="p-2 text-center text-text-muted border-r border-border/30">{item.stoploss.check}</td>
                                                <td className="p-2 text-center text-text-muted border-r border-border/30 bg-primary/5 font-bold text-primary">{item.stoploss.used}</td>
                                            </>
                                        )}

                                        {/* Expert Data */}
                                        {visibleColumns.expert && (
                                            <>
                                                <td className="p-2 text-center text-text-muted border-r border-border/30">{item.expert.check}</td>
                                                <td className="p-2 text-center text-text-muted bg-danger/5 font-bold text-danger">{item.expert.used}</td>
                                            </>
                                        )}
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={100} className="p-8 text-center text-text-muted italic">
                                        <div className="flex items-center gap-2 justify-center opacity-70">
                                            <Info className="w-4 h-4" />
                                            No data.
                                        </div>
                                    </td>
                                </tr>
                            )}
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

export default TradingObjectives;
