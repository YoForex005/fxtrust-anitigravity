import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import AccountRow from '../../components/Dashboard/AccountRow';
import PromoCard from '../../components/Dashboard/PromoCard';
import { Timer, Search, Calendar as CalendarIcon, Briefcase, History, Eye, EyeOff, Loader2 } from 'lucide-react';
import { flexyService } from '../../services/flexyService';

// New Components
import ChallengeProgress from '../../components/Dashboard/ChallengeProgress';
import TradingRulesWidget from '../../components/Dashboard/TradingRulesWidget';
import LiveTransparencyWidget from '../../components/Dashboard/LiveTransparencyWidget';
import PayoutFeatures from '../../components/Dashboard/PayoutFeatures';
import SavingsCalculator from '../../components/Dashboard/SavingsCalculator';
import PlanComparison from '../../components/Dashboard/PlanComparison';
import PayoutCalculator from '../../components/Dashboard/PayoutCalculator';
import LiveTicker from '../../components/Dashboard/LiveTicker';

function Dashboard() {
    const navigate = useNavigate();
    const [showOnlyVisibleActive, setShowOnlyVisibleActive] = useState(false);
    const [showOnlyVisibleHistory, setShowOnlyVisibleHistory] = useState(false);
    const [historyTab, setHistoryTab] = useState('free-trial');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [allAccounts, setAllAccounts] = useState([]);
    const [activeLogin, setActiveLogin] = useState(null);
    const [activeMetrics, setActiveMetrics] = useState({ todaysProfit: 0, unrealizedPnL: 0 });

    // Helper to generate tags based on account type
    const getTags = (accountType) => {
        const type = accountType || 'free-trial';
        const tags = [{ label: 'Ongoing', type: 'ongoing' }];

        switch (type) {
            case 'free-trial':
                tags.push({ label: 'Free Trial', type: 'free-trial' });
                break;
            case 'evaluation':
                tags.push({ label: 'Evaluation', type: 'evaluation' });
                break;
            case 'evolution':
                tags.push({ label: 'Evolution', type: 'evolution' });
                break;
            case 'express':
                tags.push({ label: 'Express', type: 'express' });
                break;
            case 'instant':
                tags.push({ label: 'Instant', type: 'instant' });
                break;
            default:
                tags.push({ label: type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '), type: 'free-trial' });
        }
        return tags;
    };

    // Helper to estimate initial balance for progress calc
    const getInitialBalance = (currentBal) => {
        const tiers = [2000, 5000, 10000, 25000, 50000, 100000, 200000];
        // simple approach: find closest tier
        return tiers.reduce((prev, curr) => Math.abs(curr - currentBal) < Math.abs(prev - currentBal) ? curr : prev);
    };

    // Fetch account data on mount
    useEffect(() => {
        const fetchAccounts = async () => {
            setLoading(true);
            try {
                await flexyService.checkHealth();
                const accounts = await flexyService.getAccounts();

                if (accounts && accounts.length > 0) {
                    accounts.sort((a, b) => new Date(b.Created || b.created || 0) - new Date(a.Created || a.created || 0));

                    const processedAccounts = accounts.map(acc => {
                        let type = acc.AccountType || acc.accountType || 'free-trial';
                        if (type === 'evaluation') type = 'evolution'; // Migrate legacy

                        return {
                            ...acc,
                            login: (acc.Login || acc.login).toString(),
                            balance: acc.Balance || acc.balance,
                            equity: acc.Equity || acc.equity || acc.Balance || acc.balance,
                            created: acc.Created || acc.created,
                            type: type,
                            visible: true
                        };
                    });

                    setAllAccounts(processedAccounts);
                    setActiveLogin(processedAccounts[0].login);

                    if (processedAccounts[0].type && ['free-trial', 'express', 'evolution', 'instant'].includes(processedAccounts[0].type)) {
                        setHistoryTab(processedAccounts[0].type);
                    }
                }
            } catch (err) {
                console.error('Failed to load accounts:', err);
                setError('Failed to load accounts');
            } finally {
                setLoading(false);
            }
        };

        fetchAccounts();
    }, []);

    // Fetch metrics when active account changes
    useEffect(() => {
        const fetchMetrics = async () => {
            if (!activeLogin) return;

            try {
                const [drawdown, openPositions] = await Promise.all([
                    flexyService.getDrawdownMetrics(activeLogin).catch(() => null),
                    flexyService.getOpenPositions(activeLogin).catch(() => ({ totalProfit: 0 }))
                ]);

                setActiveMetrics({
                    todaysProfit: drawdown?.day_profit || 0,
                    unrealizedPnL: openPositions?.totalProfit || 0
                });
            } catch (err) {
                console.error('Failed to fetch metrics:', err);
            }
        };

        fetchMetrics();
    }, [activeLogin]);

    const handleSwitchAccount = (login) => {
        setActiveLogin(login);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const toggleVisibility = (login) => {
        setAllAccounts(prev => prev.map(acc =>
            acc.login === login ? { ...acc, visible: !acc.visible } : acc
        ));
    };

    const activeAccountRaw = allAccounts.find(a => a.login === activeLogin);
    const historyAccountsRaw = allAccounts.filter(a => a.login !== activeLogin);

    // Prepare active account object with format needed for AccountRow
    const activeAccount = activeAccountRaw ? {
        ...activeAccountRaw,
        balance: `$${(parseFloat(activeAccountRaw.balance) || 0).toLocaleString('en-US', { minimumFractionDigits: 2 })}`,
        equity: `$${(parseFloat(activeAccountRaw.equity) || 0).toLocaleString('en-US', { minimumFractionDigits: 2 })}`,
        endDate: new Date((new Date(activeAccountRaw.created || Date.now()).getTime()) + 14 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' }),
        status: 'Active',
        todaysProfit: `$${activeMetrics.todaysProfit.toFixed(2)}`,
        unrealizedPnL: `$${activeMetrics.unrealizedPnL.toFixed(2)}`,
        tags: getTags(activeAccountRaw.type),
    } : null;

    const historyAccounts = historyAccountsRaw.map(acc => ({
        ...acc,
        tags: getTags(acc.type),
        visible: acc.visible
    }));

    return (
        <div className="p-6 max-w-[1600px] mx-auto min-h-screen pb-20">
            <Header title="Dashboard" />

            {/* 0. Live Payout Ticker */}
            <LiveTicker />

            {/* 2. Active Account Section */}
            <div className="mb-10">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h2 className="text-xl font-bold text-[#1d1d1f] dark:text-white mb-1">Active Dashboard</h2>
                        <p className="text-sm text-[#86868b] dark:text-[#6b7280]">Real-time overview of your trading activity</p>
                    </div>
                </div>

                {activeAccount ? (
                    <div className="flex flex-col gap-6">
                        {/* 1. Account Overview Card (Using AccountRow for consistency, but enlarged) */}
                        <div className="bg-white dark:bg-[#1f2937] rounded-xl border border-gray-100 dark:border-[#374151] p-1 shadow-sm">
                            <AccountRow
                                account={activeAccount}
                                isActive={true}
                                isVisible={true}
                                onToggle={() => { }}
                                onClick={() => { }}
                                metrics={activeMetrics}
                                compact={false}
                            />
                        </div>

                        {/* 2 & 4. Challenge Progress & Trading Rules */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div className="lg:col-span-2 min-h-[300px]">
                                <ChallengeProgress
                                    metrics={{
                                        balance: Number(activeAccountRaw.balance),
                                        equity: Number(activeAccountRaw.equity),
                                        initialBalance: Number(activeAccountRaw.InitialBalance || activeAccountRaw.initialBalance) || getInitialBalance(Number(activeAccountRaw.balance))
                                    }}
                                    accountType={activeAccountRaw.type}
                                />
                            </div>
                            <div className="min-h-[300px]">
                                <TradingRulesWidget accountType={activeAccountRaw.type} />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="bg-white dark:bg-[#1f2937] rounded-2xl p-12 text-center border border-dashed border-gray-300 dark:border-gray-700">
                        <Briefcase size={48} className="mx-auto text-gray-300 dark:text-gray-600 mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No Active Account</h3>
                        <p className="text-gray-500 mb-6">Start a challenge to see your dashboard.</p>
                        <button
                            onClick={() => navigate('/new-challenge')}
                            className="bg-[#1d1d1f] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#333] transition-colors"
                        >
                            Start New Challenge
                        </button>
                    </div>
                )}
            </div>

            {/* 5. Account History Section */}
            <div className="mb-10">
                <div className="flex justify-between items-center mb-5">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#666] dark:bg-[#555] rounded-xl flex items-center justify-center shadow-lg">
                            <History size={20} className="text-white" />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold m-0 text-[#1d1d1f] dark:text-white">Account History</h2>
                            <p className="text-xs text-[#86868b] dark:text-[#6b7280] m-0">Review your past trading attempts</p>
                        </div>
                    </div>
                    <button
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] font-medium cursor-pointer transition-all duration-200 border ${showOnlyVisibleHistory
                            ? 'bg-[#1d1d1f] dark:bg-white text-white dark:text-[#1d1d1f] border-[#1d1d1f] dark:border-white'
                            : 'bg-white dark:bg-[#1a1a1a] text-[#666] dark:text-[#9ca3af] border-[#e0e0e0] dark:border-[#333] hover:border-[#999] dark:hover:border-[#555]'
                            }`}
                        onClick={() => setShowOnlyVisibleHistory(!showOnlyVisibleHistory)}
                    >
                        {showOnlyVisibleHistory ? <Eye size={14} /> : <EyeOff size={14} />}
                        <span className="hidden sm:inline">Show only visible</span>
                    </button>
                </div>

                {/* Tab Navigation */}
                <div className="flex p-1.5 bg-white dark:bg-[#1a1a1a] rounded-2xl border border-gray-100 dark:border-[#333] w-fit shadow-sm shadow-gray-200/50 dark:shadow-none mb-6">
                    {['free-trial', 'express', 'evolution', 'instant'].map((tab) => (
                        <button
                            key={tab}
                            className={`px-6 py-2.5 text-sm font-bold rounded-xl transition-all duration-300 capitalize relative overflow-hidden ${historyTab === tab
                                ? 'bg-black dark:bg-white text-white dark:text-black shadow-lg shadow-black/10 dark:shadow-white/20 scale-100'
                                : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-[#262626] scale-95 hover:scale-100'
                                }`}
                            onClick={() => setHistoryTab(tab)}
                        >
                            {tab.replace('-', ' ')}
                        </button>
                    ))}
                </div>

                <div className="space-y-4">
                    {historyAccounts
                        .filter(acc => acc.type === historyTab)
                        .filter(acc => !showOnlyVisibleHistory || acc.visible)
                        .map((acc) => (
                            <AccountRow
                                key={acc.login}
                                account={acc}
                                isHistory={true}
                                isVisible={acc.visible}
                                onToggle={() => toggleVisibility(acc.login)}
                                onSwitch={() => handleSwitchAccount(acc.login)}
                            />
                        ))}
                    {historyAccounts.filter(acc => acc.type === historyTab && (!showOnlyVisibleHistory || acc.visible)).length === 0 && (
                        <div className="text-center py-12 bg-gray-50 dark:bg-[#1a1a1a] rounded-xl border border-dashed border-gray-200 dark:border-gray-800">
                            <p className="text-sm text-gray-500">No {historyTab.replace('-', ' ')} accounts found.</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Platform Stats - Professional Monochrome */}
            <div className="mb-10">
                <h3 className="text-sm font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">Platform Statistics</h3>
                <LiveTransparencyWidget />
            </div>

            {/* Payout Features - Bottom Section */}
            <div className="mb-10">
                <h3 className="text-sm font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">Payout Options</h3>
                <PayoutFeatures />
            </div>

            {/* Footer */}
            <div className="mt-16 pt-8 pb-10 border-t border-[#eee] dark:border-[#262626]">
                <div className="flex gap-6 mb-4">
                    <a href="#" className="text-xs text-[#86868b] dark:text-[#6b7280] font-medium hover:text-[#1d1d1f] dark:hover:text-white transition-colors">Cookie settings</a>
                    <a href="#" className="text-xs text-[#86868b] dark:text-[#6b7280] font-medium hover:text-[#1d1d1f] dark:hover:text-white transition-colors">Privacy policy</a>
                    <a href="#" className="text-xs text-[#86868b] dark:text-[#6b7280] font-medium hover:text-[#1d1d1f] dark:hover:text-white transition-colors">Terms & Conditions</a>
                </div>
                <p className="text-[11px] text-[#9ca3af] dark:text-[#6b7280] leading-relaxed mb-4 max-w-4xl">
                    All information provided on this site is intended solely for educational purposes related to trading on financial markets.
                </p>
                <div className="text-[11px] text-[#9ca3af] dark:text-[#6b7280]">
                    2026 © Copyright - YoPips.com
                    <span className="ml-4 text-[10px] bg-[#f5f7fa] dark:bg-[#1a1a1a] px-2 py-0.5 rounded">v673b1000</span>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
