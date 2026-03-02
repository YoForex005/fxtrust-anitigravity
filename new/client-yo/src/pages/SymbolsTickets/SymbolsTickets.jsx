import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
    Tag,
    Ticket,
    Search,
    ArrowUpRight,
    ArrowDownRight,
    RefreshCw,
    Loader2,
    Layers,
    TrendingUp,
    TrendingDown,
    Activity,
    DollarSign,
    Clock,
    Zap
} from 'lucide-react';
import Header from '../../components/Header/Header';
import { flexyService } from '../../services/flexyService';

const SymbolsTickets = () => {
    const [activeTab, setActiveTab] = useState('symbols'); // 'symbols' | 'tickets'
    const [loading, setLoading] = useState(true);
    const [symbols, setSymbols] = useState([]);
    const [ticks, setTicks] = useState({});
    const [prevTicks, setPrevTicks] = useState({});
    const [positions, setPositions] = useState([]);
    const [accounts, setAccounts] = useState([]);
    const [activeLogin, setActiveLogin] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [error, setError] = useState(null);
    const [lastUpdate, setLastUpdate] = useState(null);
    const [autoRefresh, setAutoRefresh] = useState(true);
    const refreshIntervalRef = useRef(null);

    // Initial Load
    useEffect(() => {
        const init = async () => {
            try {
                const accs = await flexyService.getAccounts();
                setAccounts(accs || []);
                if (accs && accs.length > 0) {
                    const sorted = accs.sort((a, b) => new Date(b.created || 0) - new Date(a.created || 0));
                    const login = sorted[0].login || sorted[0].Login;
                    setActiveLogin(login);
                }
                // Load symbols list
                await loadSymbols();
            } catch (err) {
                console.error('Failed to init:', err);
                setError('Failed to load accounts');
                setLoading(false);
            }
        };
        init();
    }, []);

    // Load positions when login changes
    useEffect(() => {
        if (activeLogin && activeTab === 'tickets') {
            loadPositions(activeLogin);
        }
    }, [activeLogin, activeTab]);

    // Auto-refresh for real-time updates
    useEffect(() => {
        if (autoRefresh) {
            refreshIntervalRef.current = setInterval(() => {
                if (activeTab === 'symbols' && symbols.length > 0) {
                    refreshTicks();
                } else if (activeTab === 'tickets' && activeLogin) {
                    loadPositions(activeLogin);
                }
            }, 3000); // Update every 3 seconds
        }

        return () => {
            if (refreshIntervalRef.current) {
                clearInterval(refreshIntervalRef.current);
            }
        };
    }, [autoRefresh, activeTab, symbols, activeLogin]);

    const loadSymbols = async () => {
        setLoading(true);
        setError(null);
        try {
            const symbolList = await flexyService.getSymbols();
            setSymbols(symbolList || []);
            
            // Get initial ticks for all symbols
            if (symbolList && symbolList.length > 0) {
                const symbolNames = symbolList.slice(0, 50).map(s => s.symbol); // Limit to 50 for performance
                const tickData = await flexyService.getBatchTicks(symbolNames);
                const tickMap = {};
                tickData.forEach(tick => {
                    tickMap[tick.symbol] = tick;
                });
                setTicks(tickMap);
            }
            setLastUpdate(new Date());
        } catch (err) {
            console.error('Failed to load symbols:', err);
            setError('Failed to load symbols from MT5. Server might be disconnected.');
        } finally {
            setLoading(false);
        }
    };

    const refreshTicks = async () => {
        try {
            if (symbols.length === 0) return;
            
            const symbolNames = symbols.slice(0, 50).map(s => s.symbol);
            const tickData = await flexyService.getBatchTicks(symbolNames);
            
            // Save previous ticks for comparison
            setPrevTicks({...ticks});
            
            const tickMap = {};
            tickData.forEach(tick => {
                tickMap[tick.symbol] = tick;
            });
            setTicks(tickMap);
            setLastUpdate(new Date());
        } catch (err) {
            console.error('Failed to refresh ticks:', err);
        }
    };

    const loadPositions = async (login) => {
        try {
            const data = await flexyService.getLivePositions(login);
            setPositions(data.positions || []);
            setLastUpdate(new Date());
        } catch (err) {
            console.error('Failed to load positions:', err);
        }
    };

    const handleAccountChange = (e) => {
        const login = e.target.value;
        setActiveLogin(login);
    };

    // Get price direction for animation
    const getPriceDirection = (symbol, field) => {
        const currentPrice = ticks[symbol]?.[field];
        const prevPrice = prevTicks[symbol]?.[field];
        if (!currentPrice || !prevPrice) return null;
        if (currentPrice > prevPrice) return 'up';
        if (currentPrice < prevPrice) return 'down';
        return null;
    };

    // Filter symbols based on search
    const filteredSymbols = symbols.filter(s => 
        s.symbol?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.description?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Filter positions based on search
    const filteredPositions = positions.filter(p =>
        p.symbol?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        String(p.ticket).includes(searchQuery)
    );

    // Calculate totals
    const totalProfit = positions.reduce((sum, p) => sum + (p.profit || 0), 0);
    const totalSwap = positions.reduce((sum, p) => sum + (p.swap || 0), 0);

    if (loading && symbols.length === 0) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-white dark:bg-[#0d0d0d]">
                <div className="flex flex-col items-center gap-4">
                    <Loader2 className="animate-spin text-black dark:text-white" size={32} />
                    <span className="text-sm font-medium text-gray-500">Loading Market Data...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f8f9fa] dark:bg-[#0d0d0d] text-gray-900 dark:text-white pb-20">
            <Header title="Symbols & Tickets" />

            <div className="max-w-7xl mx-auto px-6 py-8">

                {/* Top Controls */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight mb-2 flex items-center gap-3">
                            <Layers className="text-gray-400" size={24} />
                            {activeTab === 'symbols' ? 'Live Market Data' : 'Open Positions'}
                        </h1>
                        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                            <span className="flex items-center gap-1.5">
                                <Activity size={14} className={autoRefresh ? 'text-green-500 animate-pulse' : 'text-gray-400'} />
                                {autoRefresh ? 'Live' : 'Paused'}
                            </span>
                            {lastUpdate && (
                                <span className="flex items-center gap-1.5">
                                    <Clock size={14} />
                                    Updated: {lastUpdate.toLocaleTimeString()}
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="flex items-center gap-3 bg-white dark:bg-[#1a1a1a] p-1.5 rounded-xl border border-gray-200 dark:border-[#333] shadow-sm">
                        {activeTab === 'tickets' && accounts.length > 0 && (
                            <>
                                <select
                                    value={activeLogin || ''}
                                    onChange={handleAccountChange}
                                    className="bg-transparent border-none text-sm font-semibold px-3 py-1.5 focus:outline-none cursor-pointer"
                                >
                                    {accounts.map(acc => (
                                        <option key={acc.login || acc.Login} value={acc.login || acc.Login}>
                                            #{acc.login || acc.Login}
                                        </option>
                                    ))}
                                </select>
                                <div className="h-4 w-[1px] bg-gray-300 dark:bg-gray-700"></div>
                            </>
                        )}
                        <button
                            onClick={() => setAutoRefresh(!autoRefresh)}
                            className={`p-1.5 rounded-lg transition-colors ${autoRefresh 
                                ? 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400' 
                                : 'hover:bg-gray-100 dark:hover:bg-[#333] text-gray-500'}`}
                            title={autoRefresh ? 'Pause auto-refresh' : 'Enable auto-refresh'}
                        >
                            <Zap size={16} />
                        </button>
                        <button
                            onClick={() => activeTab === 'symbols' ? loadSymbols() : loadPositions(activeLogin)}
                            className="p-1.5 hover:bg-gray-100 dark:hover:bg-[#333] rounded-lg transition-colors text-gray-500"
                            title="Refresh Now"
                        >
                            <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
                        </button>
                    </div>
                </div>

                {/* Error Banner */}
                {error && (
                    <div className="mb-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900 rounded-xl p-4 text-red-600 dark:text-red-400">
                        {error}
                    </div>
                )}

                {/* Main Content Card */}
                <div className="bg-white dark:bg-[#141414] rounded-2xl border border-gray-200 dark:border-[#262626] shadow-xl shadow-gray-100/20 dark:shadow-none overflow-hidden">

                    {/* Tabs & Search Toolbar */}
                    <div className="border-b border-gray-200 dark:border-[#262626] p-4 flex flex-col sm:flex-row justify-between items-center gap-4">

                        {/* Tabs */}
                        <div className="flex p-1 bg-gray-100 dark:bg-[#1a1a1a] rounded-xl">
                            <button
                                onClick={() => setActiveTab('symbols')}
                                className={`px-6 py-2 rounded-lg text-sm font-bold transition-all duration-200 flex items-center gap-2 ${activeTab === 'symbols'
                                    ? 'bg-white dark:bg-[#262626] text-black dark:text-white shadow-sm'
                                    : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                                    }`}
                            >
                                <Tag size={16} />
                                Symbols ({symbols.length})
                            </button>
                            <button
                                onClick={() => setActiveTab('tickets')}
                                className={`px-6 py-2 rounded-lg text-sm font-bold transition-all duration-200 flex items-center gap-2 ${activeTab === 'tickets'
                                    ? 'bg-white dark:bg-[#262626] text-black dark:text-white shadow-sm'
                                    : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                                    }`}
                            >
                                <Ticket size={16} />
                                Open Positions ({positions.length})
                            </button>
                        </div>

                        {/* Search */}
                        <div className="relative w-full sm:w-72">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                            <input
                                type="text"
                                placeholder={`Search ${activeTab}...`}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#333] pl-10 pr-4 py-2.5 rounded-xl text-sm focus:outline-none focus:border-gray-400 dark:focus:border-gray-600 transition-colors"
                            />
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="overflow-x-auto min-h-[400px]">
                        {activeTab === 'symbols' ? (
                            // Symbols Tab - Live Market Data
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gray-50/50 dark:bg-[#1a1a1a]/50 text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold">
                                        <th className="px-6 py-4 rounded-tl-lg">Symbol</th>
                                        <th className="px-6 py-4 text-right">Bid</th>
                                        <th className="px-6 py-4 text-right">Ask</th>
                                        <th className="px-6 py-4 text-right">Spread</th>
                                        <th className="px-6 py-4 text-right rounded-tr-lg">Description</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 dark:divide-[#262626] text-sm">
                                    {filteredSymbols.length > 0 ? (
                                        filteredSymbols.map((sym) => {
                                            const tick = ticks[sym.symbol] || {};
                                            const bidDir = getPriceDirection(sym.symbol, 'bid');
                                            const askDir = getPriceDirection(sym.symbol, 'ask');
                                            const spread = tick.spread || (tick.ask && tick.bid ? tick.ask - tick.bid : 0);
                                            const digits = sym.digits || 5;

                                            return (
                                                <tr key={sym.symbol} className="group hover:bg-gray-50 dark:hover:bg-[#1a1a1a] transition-colors">
                                                    <td className="px-6 py-4">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#262626] dark:to-[#333] flex items-center justify-center text-gray-600 dark:text-gray-300 font-bold text-xs">
                                                                {sym.symbol?.substring(0, 2)}
                                                            </div>
                                                            <span className="font-bold text-gray-900 dark:text-white">{sym.symbol}</span>
                                                        </div>
                                                    </td>
                                                    <td className={`px-6 py-4 text-right font-mono font-semibold transition-colors duration-300 ${
                                                        bidDir === 'up' ? 'text-green-600 dark:text-green-400 bg-green-50/50 dark:bg-green-900/10' :
                                                        bidDir === 'down' ? 'text-red-600 dark:text-red-400 bg-red-50/50 dark:bg-red-900/10' :
                                                        'text-gray-700 dark:text-gray-300'
                                                    }`}>
                                                        <span className="flex items-center justify-end gap-1">
                                                            {bidDir === 'up' && <TrendingUp size={12} />}
                                                            {bidDir === 'down' && <TrendingDown size={12} />}
                                                            {tick.bid ? tick.bid.toFixed(digits) : '—'}
                                                        </span>
                                                    </td>
                                                    <td className={`px-6 py-4 text-right font-mono font-semibold transition-colors duration-300 ${
                                                        askDir === 'up' ? 'text-green-600 dark:text-green-400 bg-green-50/50 dark:bg-green-900/10' :
                                                        askDir === 'down' ? 'text-red-600 dark:text-red-400 bg-red-50/50 dark:bg-red-900/10' :
                                                        'text-gray-700 dark:text-gray-300'
                                                    }`}>
                                                        <span className="flex items-center justify-end gap-1">
                                                            {askDir === 'up' && <TrendingUp size={12} />}
                                                            {askDir === 'down' && <TrendingDown size={12} />}
                                                            {tick.ask ? tick.ask.toFixed(digits) : '—'}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 text-right font-mono text-gray-500 dark:text-gray-400">
                                                        {spread ? (spread * Math.pow(10, digits)).toFixed(1) : '—'}
                                                    </td>
                                                    <td className="px-6 py-4 text-right text-gray-500 dark:text-gray-400 text-xs max-w-[200px] truncate">
                                                        {sym.description || '—'}
                                                    </td>
                                                </tr>
                                            );
                                        })
                                    ) : (
                                        <tr>
                                            <td colSpan="5" className="px-6 py-12 text-center text-gray-400 dark:text-gray-600">
                                                <div className="flex flex-col items-center gap-3">
                                                    <Tag size={32} className="opacity-20" />
                                                    <p>{symbols.length === 0 ? 'No symbols available' : 'No symbols match your search'}</p>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        ) : (
                            // Tickets Tab - Open Positions
                            <>
                                {/* Positions Summary */}
                                {positions.length > 0 && (
                                    <div className="p-4 bg-gray-50 dark:bg-[#1a1a1a]/50 border-b border-gray-200 dark:border-[#262626]">
                                        <div className="flex flex-wrap gap-6 text-sm">
                                            <div className="flex items-center gap-2">
                                                <DollarSign size={16} className="text-gray-400" />
                                                <span className="text-gray-500">Total P/L:</span>
                                                <span className={`font-bold ${totalProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                                    {totalProfit >= 0 ? '+' : ''}{totalProfit.toFixed(2)}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-gray-500">Swap:</span>
                                                <span className="font-medium text-gray-700 dark:text-gray-300">{totalSwap.toFixed(2)}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-gray-500">Open Trades:</span>
                                                <span className="font-medium text-gray-700 dark:text-gray-300">{positions.length}</span>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-gray-50/50 dark:bg-[#1a1a1a]/50 text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold">
                                            <th className="px-6 py-4 rounded-tl-lg">Ticket</th>
                                            <th className="px-6 py-4">Symbol</th>
                                            <th className="px-6 py-4">Type</th>
                                            <th className="px-6 py-4 text-right">Lots</th>
                                            <th className="px-6 py-4 text-right">Open Price</th>
                                            <th className="px-6 py-4 text-right">Current</th>
                                            <th className="px-6 py-4 text-right rounded-tr-lg">Profit</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 dark:divide-[#262626] text-sm">
                                        {filteredPositions.length > 0 ? (
                                            filteredPositions.map((pos) => {
                                                const isProfit = pos.profit >= 0;
                                                return (
                                                    <tr key={pos.ticket} className="group hover:bg-gray-50 dark:hover:bg-[#1a1a1a] transition-colors">
                                                        <td className="px-6 py-4 font-mono text-gray-500">#{pos.ticket}</td>
                                                        <td className="px-6 py-4 font-bold text-gray-900 dark:text-gray-100">{pos.symbol}</td>
                                                        <td className="px-6 py-4">
                                                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold border ${pos.type === 'BUY'
                                                                ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800'
                                                                : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800'
                                                                }`}>
                                                                {pos.type === 'BUY' ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                                                                {pos.type}
                                                            </span>
                                                        </td>
                                                        <td className="px-6 py-4 text-right font-mono text-gray-600 dark:text-gray-400">{pos.lots?.toFixed(2)}</td>
                                                        <td className="px-6 py-4 text-right font-mono text-gray-600 dark:text-gray-400">{pos.openPrice?.toFixed(5)}</td>
                                                        <td className="px-6 py-4 text-right font-mono text-gray-700 dark:text-gray-300">{pos.currentPrice?.toFixed(5)}</td>
                                                        <td className={`px-6 py-4 text-right font-mono font-bold ${isProfit ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                                                            {isProfit ? '+' : ''}{pos.profit?.toFixed(2)}
                                                        </td>
                                                    </tr>
                                                );
                                            })
                                        ) : (
                                            <tr>
                                                <td colSpan="7" className="px-6 py-12 text-center text-gray-400 dark:text-gray-600">
                                                    <div className="flex flex-col items-center gap-3">
                                                        <Ticket size={32} className="opacity-20" />
                                                        <p>{positions.length === 0 ? 'No open positions' : 'No positions match your search'}</p>
                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SymbolsTickets;
