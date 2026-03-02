import React, { useState, useEffect } from 'react';
import { BookOpen, Loader2, RefreshCw, Settings, TrendingUp } from 'lucide-react';
import Header from '../../components/Header/Header';
import { flexyService } from '../../services/flexyService';
import PerformanceStats from './components/PerformanceStats';
import JournalStats from './components/JournalStats';
import TradeList from './components/TradeList';
import TradeDetailModal from './components/TradeDetailModal';

const Journal = () => {
    const [loading, setLoading] = useState(true);
    const [syncing, setSyncing] = useState(false);
    const [activeLogin, setActiveLogin] = useState(null);
    const [accounts, setAccounts] = useState([]);
    const [trades, setTrades] = useState([]);
    const [analytics, setAnalytics] = useState(null);
    const [enhancedAnalytics, setEnhancedAnalytics] = useState(null);
    const [selectedTrade, setSelectedTrade] = useState(null);
    const [error, setError] = useState(null);

    // Initial Load: Get Accounts -> Select Active -> Sync Journal
    useEffect(() => {
        const init = async () => {
            try {
                const accs = await flexyService.getAccounts();
                setAccounts(accs || []);
                if (accs && accs.length > 0) {
                    // 1. First, check localStorage for the last viewed account (from Account Metrix)
                    const savedActiveLogin = localStorage.getItem('activeAccountLogin');
                    
                    let selectedLogin;
                    
                    // Check if saved login exists in current accounts
                    if (savedActiveLogin) {
                        const savedAccount = accs.find(acc => 
                            (acc.login || acc.Login) === savedActiveLogin ||
                            (acc.login || acc.Login) === parseInt(savedActiveLogin)
                        );
                        if (savedAccount) {
                            selectedLogin = savedActiveLogin;
                        }
                    }
                    
                    // 2. Fallback: use the first account (newest)
                    if (!selectedLogin) {
                        accs.sort((a, b) => new Date(b.created || b.Created || 0) - new Date(a.created || a.Created || 0));
                        selectedLogin = accs[0].login || accs[0].Login;
                    }
                    
                    setActiveLogin(selectedLogin);
                    await loadJournalData(selectedLogin);
                } else {
                    setLoading(false);
                }
            } catch (err) {
                console.error('Failed to init journal:', err);
                setError('Failed to load accounts');
                setLoading(false);
            }
        };
        init();
    }, []);

    const loadJournalData = async (login) => {
        setLoading(true);
        setError(null);
        try {
            const [syncRes, analyticsRes, enhancedRes] = await Promise.all([
                flexyService.syncJournal(login),
                flexyService.getJournalAnalytics(login),
                flexyService.getEnhancedAnalytics(login).catch(() => null)
            ]);

            if (syncRes.success) {
                setTrades(syncRes.trades);
            }
            if (analyticsRes.success) {
                setAnalytics(analyticsRes.analytics);
            }
            if (enhancedRes) {
                setEnhancedAnalytics(enhancedRes);
            }
        } catch (err) {
            console.error('Failed to load journal data:', err);
            setError('Failed to load journal data');
        } finally {
            setLoading(false);
        }
    };

    const handleSync = async () => {
        if (!activeLogin || syncing) return;
        setSyncing(true);
        try {
            await loadJournalData(activeLogin);
        } finally {
            setSyncing(false);
        }
    };

    const handleAccountChange = async (login) => {
        setActiveLogin(login);
        await loadJournalData(login);
    };

    const handleTradeUpdate = (updatedTrade) => {
        // Optimistic update in list
        setTrades(prev => prev.map(t => t.Ticket === updatedTrade.Ticket ? updatedTrade : t));

        // Refresh analytics in background
        if (activeLogin) {
            Promise.all([
                flexyService.getJournalAnalytics(activeLogin),
                flexyService.getEnhancedAnalytics(activeLogin).catch(() => null)
            ]).then(([res, enhanced]) => {
                if (res.success) setAnalytics(res.analytics);
                if (enhanced) setEnhancedAnalytics(enhanced);
            });
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white transition-colors duration-200">
            <Header title="Trading Journal" />

            <div className="max-w-7xl mx-auto px-4 lg:px-6 pb-20 pt-6 lg:pt-8">
                {/* Page Header */}
                <div className="mb-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-gray-100 dark:bg-[#1f1f1f] rounded-2xl text-gray-900 dark:text-white border border-gray-200 dark:border-[#333]">
                            <BookOpen size={28} />
                        </div>
                        <div>
                            <h1 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                                Trading Journal & Analytics
                            </h1>
                            <p className="text-gray-500 dark:text-[#9ca3af] font-medium text-sm lg:text-base">
                                Review your performance, track emotions, and refine your edge.
                            </p>
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center gap-3">
                        {/* Account Selector */}
                        {accounts.length > 1 && (
                            <select
                                value={activeLogin || ''}
                                onChange={(e) => handleAccountChange(e.target.value)}
                                className="px-4 py-2.5 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                {accounts.map(acc => (
                                    <option key={acc.login || acc.Login} value={acc.login || acc.Login}>
                                        #{acc.login || acc.Login}
                                    </option>
                                ))}
                            </select>
                        )}

                        <button
                            onClick={handleSync}
                            disabled={syncing}
                            className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors disabled:opacity-50"
                        >
                            <RefreshCw size={16} className={syncing ? 'animate-spin' : ''} />
                            {syncing ? 'Syncing...' : 'Sync'}
                        </button>
                    </div>
                </div>

                {loading ? (
                    <div className="flex h-96 items-center justify-center">
                        <div className="text-center">
                            <Loader2 className="animate-spin text-blue-500 mx-auto mb-4" size={48} />
                            <p className="text-gray-500 dark:text-gray-400">Loading your trading data...</p>
                        </div>
                    </div>
                ) : error ? (
                    <div className="text-center py-20 bg-white dark:bg-[#141414] rounded-3xl border border-gray-100 dark:border-white/5">
                        <div className="text-red-500 font-bold mb-2">{error}</div>
                        <button
                            onClick={handleSync}
                            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors"
                        >
                            Try Again
                        </button>
                    </div>
                ) : (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {/* Stats Section */}
                        <JournalStats analytics={analytics} />

                        {/* Enhanced Stats */}
                        {enhancedAnalytics && <PerformanceStats data={enhancedAnalytics} />}

                        {/* Trade List */}
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                                    <TrendingUp size={20} className="text-gray-900 dark:text-white" />
                                    Trade History
                                </h2>
                                <div className="text-sm text-gray-500 dark:text-[#6b7280] bg-gray-100 dark:bg-white/5 px-3 py-1 rounded-full">
                                    {trades.length} trades synced
                                </div>
                            </div>
                            <TradeList trades={trades} onEdit={setSelectedTrade} />
                        </div>
                    </div>
                )}
            </div>

            {/* Modal */}
            {selectedTrade && (
                <TradeDetailModal
                    trade={selectedTrade}
                    onClose={() => setSelectedTrade(null)}
                    onUpdate={handleTradeUpdate}
                />
            )}
        </div>
    );
};

export default Journal;
