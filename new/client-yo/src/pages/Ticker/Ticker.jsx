import React, { useState, useEffect, useRef } from 'react';
import {
    TrendingUp,
    TrendingDown,
    RefreshCw,
    Pause,
    Play,
    Zap,
    Activity,
    DollarSign,
    BarChart3,
    Clock,
    AlertCircle
} from 'lucide-react';
import Header from '../../components/Header/Header';
import { flexyService } from '../../services/flexyService';

// Fallback symbols in case API fails completely
const FALLBACK_SYMBOLS = [
    { symbol: 'EURUSD', description: 'Euro vs US Dollar', digits: 5, category: 'Forex' },
    { symbol: 'GBPUSD', description: 'British Pound vs US Dollar', digits: 5, category: 'Forex' },
    { symbol: 'USDJPY', description: 'US Dollar vs Japanese Yen', digits: 3, category: 'Forex' },
    { symbol: 'XAUUSD', description: 'Gold vs US Dollar', digits: 2, category: 'Metals' },
    { symbol: 'BTCUSD', description: 'Bitcoin vs US Dollar', digits: 2, category: 'Crypto' },
    { symbol: 'US30', description: 'Dow Jones', digits: 2, category: 'Indices' },
    { symbol: 'US100', description: 'NASDAQ 100', digits: 2, category: 'Indices' },
    { symbol: 'USOIL', description: 'US Crude Oil', digits: 3, category: 'Energy' },
    { symbol: 'AUDUSD', description: 'AUD vs USD', digits: 5, category: 'Forex' },
    { symbol: 'USDCAD', description: 'USD vs CAD', digits: 5, category: 'Forex' },
    { symbol: 'EURGBP', description: 'Euro vs GBP', digits: 5, category: 'Forex' },
    { symbol: 'XAGUSD', description: 'Silver vs USD', digits: 3, category: 'Metals' },
];

const Ticker = () => {
    const [symbols, setSymbols] = useState([]);
    const [ticks, setTicks] = useState({});
    const [prevTicks, setPrevTicks] = useState({});
    const [loading, setLoading] = useState(true);
    const [autoRefresh, setAutoRefresh] = useState(true);
    const [lastUpdate, setLastUpdate] = useState(null);
    const [error, setError] = useState(null);
    const [dataSource, setDataSource] = useState('loading');
    const scrollRef = useRef(null);
    const refreshIntervalRef = useRef(null);

    // Load symbols on mount
    useEffect(() => {
        loadSymbols();
        return () => {
            if (refreshIntervalRef.current) {
                clearInterval(refreshIntervalRef.current);
            }
        };
    }, []);

    // Auto-refresh ticker
    useEffect(() => {
        if (autoRefresh && symbols.length > 0) {
            refreshIntervalRef.current = setInterval(() => {
                refreshTicks();
            }, 3000); // Update every 3 seconds
        } else {
            if (refreshIntervalRef.current) {
                clearInterval(refreshIntervalRef.current);
            }
        }

        return () => {
            if (refreshIntervalRef.current) {
                clearInterval(refreshIntervalRef.current);
            }
        };
    }, [autoRefresh, symbols]);

    const loadSymbols = async () => {
        setLoading(true);
        setError(null);
        
        try {
            // Try to get symbols from API
            const response = await flexyService.getSymbols();
            
            if (response && Array.isArray(response) && response.length > 0) {
                setSymbols(response);
                setDataSource('api');
            } else {
                // If empty response, use fallback
                console.log('Empty API response, using fallback symbols');
                setSymbols(FALLBACK_SYMBOLS);
                setDataSource('fallback');
            }
            
            setLastUpdate(new Date());
        } catch (err) {
            console.error('Failed to load symbols:', err);
            // Use fallback on error
            setSymbols(FALLBACK_SYMBOLS);
            setDataSource('fallback');
            setError('API unavailable - showing demo data');
        } finally {
            setLoading(false);
        }
    };

    const refreshTicks = async () => {
        if (symbols.length === 0) return;
        
        try {
            const symbolNames = symbols.slice(0, 30).map(s => s.symbol);
            const tickData = await flexyService.getBatchTicks(symbolNames);
            
            if (tickData && Array.isArray(tickData)) {
                setPrevTicks({...ticks});
                
                const tickMap = {};
                tickData.forEach(tick => {
                    if (tick && tick.symbol) {
                        tickMap[tick.symbol] = tick;
                    }
                });
                setTicks(tickMap);
                setLastUpdate(new Date());
            }
        } catch (err) {
            // Silently fail tick updates - don't break the UI
            console.log('Tick refresh unavailable');
        }
    };

    // Get price direction
    const getPriceDirection = (symbol) => {
        const current = ticks[symbol]?.bid;
        const prev = prevTicks[symbol]?.bid;
        if (!current || !prev) return null;
        if (current > prev) return 'up';
        if (current < prev) return 'down';
        return null;
    };

    // Format price
    const formatPrice = (price, digits = 5) => {
        if (!price || price === 0) return '—';
        return parseFloat(price).toFixed(digits);
    };

    // Group symbols by category
    const groupedSymbols = symbols.reduce((acc, sym) => {
        const category = sym.category || 'Other';
        if (!acc[category]) acc[category] = [];
        acc[category].push(sym);
        return acc;
    }, {});

    // Category icons and colors
    const categoryStyles = {
        Forex: { icon: DollarSign, color: 'blue' },
        Metals: { icon: Zap, color: 'yellow' },
        Indices: { icon: BarChart3, color: 'purple' },
        Crypto: { icon: Activity, color: 'orange' },
        Energy: { icon: Activity, color: 'red' },
        Other: { icon: Activity, color: 'gray' }
    };

    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-white dark:bg-[#0d0d0d]">
                <div className="flex flex-col items-center gap-4">
                    <RefreshCw className="animate-spin text-orange-500" size={32} />
                    <span className="text-sm font-medium text-gray-500">Loading Market Ticker...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f8f9fa] dark:bg-[#0d0d0d] text-gray-900 dark:text-white pb-20">
            <Header title="Market Ticker" />

            <div className="max-w-7xl mx-auto px-6 py-8">
                
                {/* Header Controls */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight mb-2 flex items-center gap-3">
                            <TrendingUp className="text-orange-500" size={28} />
                            Live Market Ticker
                        </h1>
                        <div className="flex items-center gap-4 text-sm text-gray-500 flex-wrap">
                            <span className="flex items-center gap-1.5">
                                <Activity size={14} className={autoRefresh ? 'text-green-500 animate-pulse' : 'text-gray-400'} />
                                {autoRefresh ? 'Live Updates' : 'Paused'}
                            </span>
                            {lastUpdate && (
                                <span className="flex items-center gap-1.5">
                                    <Clock size={14} />
                                    {lastUpdate.toLocaleTimeString()}
                                </span>
                            )}
                            <span className="flex items-center gap-1.5">
                                <BarChart3 size={14} />
                                {symbols.length} Symbols
                            </span>
                            <span className={`px-2 py-0.5 rounded text-xs ${dataSource === 'api' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'}`}>
                                {dataSource === 'api' ? 'Live' : 'Demo'}
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setAutoRefresh(!autoRefresh)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm transition-all ${
                                autoRefresh 
                                    ? 'bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/30' 
                                    : 'bg-gray-100 dark:bg-[#1a1a1a] text-gray-500 border border-gray-200 dark:border-[#333]'
                            }`}
                        >
                            {autoRefresh ? <Pause size={16} /> : <Play size={16} />}
                            {autoRefresh ? 'Pause' : 'Resume'}
                        </button>
                        <button
                            onClick={loadSymbols}
                            className="flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm bg-orange-500 text-white hover:bg-orange-600 transition-all"
                        >
                            <RefreshCw size={16} />
                            Refresh
                        </button>
                    </div>
                </div>

                {/* Warning Banner */}
                {error && (
                    <div className="mb-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-4 text-yellow-700 dark:text-yellow-400 flex items-center gap-3">
                        <AlertCircle size={18} />
                        {error}
                    </div>
                )}

                {/* Scrolling Ticker Bar */}
                <div className="mb-8 bg-gradient-to-r from-[#1a1a1a] to-[#0d0d0d] dark:from-[#0a0a0a] dark:to-[#111] rounded-2xl border border-[#333] overflow-hidden">
                    <div className="py-4 px-6 relative overflow-hidden">
                        <div 
                            ref={scrollRef}
                            className="flex gap-8 whitespace-nowrap"
                            style={{
                                animation: autoRefresh ? 'scroll 30s linear infinite' : 'none'
                            }}
                        >
                            {symbols.slice(0, 20).map((sym, idx) => {
                                const tick = ticks[sym.symbol] || {};
                                const direction = getPriceDirection(sym.symbol);
                                return (
                                    <div 
                                        key={`${sym.symbol}-${idx}`}
                                        className={`flex items-center gap-3 px-4 py-2 rounded-lg bg-white/5 border border-white/10 transition-all duration-300 ${
                                            direction === 'up' ? 'bg-green-500/10 border-green-500/30' :
                                            direction === 'down' ? 'bg-red-500/10 border-red-500/30' : ''
                                        }`}
                                    >
                                        <span className="font-bold text-white">{sym.symbol}</span>
                                        <span className={`font-mono ${
                                            direction === 'up' ? 'text-green-400' :
                                            direction === 'down' ? 'text-red-400' : 'text-gray-400'
                                        }`}>
                                            {formatPrice(tick.bid, sym.digits)}
                                        </span>
                                        {direction === 'up' && <TrendingUp className="text-green-400" size={14} />}
                                        {direction === 'down' && <TrendingDown className="text-red-400" size={14} />}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Symbol Cards by Category */}
                {Object.entries(groupedSymbols).map(([category, categorySymbols]) => {
                    const style = categoryStyles[category] || categoryStyles.Other;
                    const IconComponent = style.icon;
                    
                    return (
                        <div key={category} className="mb-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className={`p-2 rounded-lg bg-${style.color}-500/10`}>
                                    <IconComponent className={`text-${style.color}-500`} size={20} />
                                </div>
                                <h2 className="text-lg font-bold">{category}</h2>
                                <span className="text-sm text-gray-500">({categorySymbols.length})</span>
                            </div>
                            
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                                {categorySymbols.map((sym) => {
                                    const tick = ticks[sym.symbol] || {};
                                    const direction = getPriceDirection(sym.symbol);
                                    const spread = tick.bid && tick.ask ? ((tick.ask - tick.bid) * Math.pow(10, sym.digits)).toFixed(1) : '—';
                                    
                                    return (
                                        <div 
                                            key={sym.symbol}
                                            className={`p-4 rounded-xl bg-white dark:bg-[#151515] border transition-all duration-300 ${
                                                direction === 'up' ? 'border-green-500/50 shadow-[0_0_15px_rgba(34,197,94,0.1)]' :
                                                direction === 'down' ? 'border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.1)]' :
                                                'border-gray-200 dark:border-[#252525]'
                                            }`}
                                        >
                                            <div className="flex justify-between items-start mb-3">
                                                <div>
                                                    <h3 className="font-bold text-base">{sym.symbol}</h3>
                                                    <p className="text-xs text-gray-500 truncate max-w-[120px]">{sym.description}</p>
                                                </div>
                                                {direction === 'up' && <TrendingUp className="text-green-500" size={18} />}
                                                {direction === 'down' && <TrendingDown className="text-red-500" size={18} />}
                                            </div>
                                            
                                            <div className="space-y-2">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-xs text-gray-500">Bid</span>
                                                    <span className={`font-mono font-semibold ${
                                                        direction === 'up' ? 'text-green-500' :
                                                        direction === 'down' ? 'text-red-500' : ''
                                                    }`}>
                                                        {formatPrice(tick.bid, sym.digits)}
                                                    </span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-xs text-gray-500">Ask</span>
                                                    <span className="font-mono text-sm">{formatPrice(tick.ask, sym.digits)}</span>
                                                </div>
                                                <div className="flex justify-between items-center pt-2 border-t border-gray-100 dark:border-[#252525]">
                                                    <span className="text-xs text-gray-500">Spread</span>
                                                    <span className="text-xs font-medium text-orange-500">{spread} pts</span>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}

                {/* No symbols state */}
                {symbols.length === 0 && (
                    <div className="text-center py-20">
                        <Activity className="mx-auto mb-4 text-gray-400" size={48} />
                        <h3 className="text-xl font-bold mb-2">No Symbols Available</h3>
                        <p className="text-gray-500">Unable to load market data. Please try again.</p>
                        <button
                            onClick={loadSymbols}
                            className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600"
                        >
                            Retry
                        </button>
                    </div>
                )}
            </div>

            {/* CSS for scroll animation */}
            <style>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
        </div>
    );
};

export default Ticker;
