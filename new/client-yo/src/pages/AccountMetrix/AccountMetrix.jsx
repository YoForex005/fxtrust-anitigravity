import React, { useState, useEffect, useRef } from 'react';
import {
    Download, Info, Key, Phone, RefreshCw, Share2, XCircle,
    ChevronDown, Check, X, Calendar, ChevronLeft, ChevronRight,
    Settings, Search, ArrowLeft, Loader2, Lock, BarChart, Clock
} from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import CredentialsModal from '../../components/Modals/CredentialsModal';
import ResetPasswordModal from '../../components/Modals/ResetPasswordModal';
import ShareModal from '../../components/Modals/ShareModal';
import { flexyService } from '../../services/flexyService';
import RiskGauge from '../../components/RiskManagement/RiskGauge';
import PositionCalculator from '../../components/RiskManagement/PositionCalculator';
import RiskAlertBanner from '../../components/RiskManagement/RiskAlertBanner';
import TradingSessionIndicator from '../../components/RiskManagement/TradingSessionIndicator';
import StreakTracker from '../../components/RiskManagement/StreakTracker';

function AccountMetrix() {
    const navigate = useNavigate();
    const { id } = useParams(); // Get account ID from URL
    const accountLogin = id || '1512264795'; // Fallback

    const [chartTab, setChartTab] = useState('1-day');
    const [showCredentials, setShowCredentials] = useState(false);
    const [showResetModal, setShowResetModal] = useState(false);
    const [showShareModal, setShowShareModal] = useState(false);
    const [objectiveLinesOn, setObjectiveLinesOn] = useState(true);
    const [chartZoomed, setChartZoomed] = useState(true);
    const [loading, setLoading] = useState(true);

    // Risk Dashboard State
    const [activeTab, setActiveTab] = useState('overview');
    const [riskSettings, setRiskSettings] = useState({
        userDailyLossLimit: '',
        userMaxDrawdown: '',
        userProfitTarget: '',
        riskPerTradePercent: 1,
        alertEnabled: true
    });
    const [riskAlerts, setRiskAlerts] = useState([]);

    // Live data states
    const [accountData, setAccountData] = useState(null);
    const [allAccounts, setAllAccounts] = useState([]); // List of all accounts for dropdown
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown UI state
    const [openPositions, setOpenPositions] = useState([]);
    const [closedTrades, setClosedTrades] = useState([]);
    const [tradeStats, setTradeStats] = useState(null);
    const [drawdownMetrics, setDrawdownMetrics] = useState(null);
    const [journalTab, setJournalTab] = useState('daily'); // 'daily', 'closed', 'charts'
    const [expandedTrade, setExpandedTrade] = useState(null); // Track which trade row is expanded

    // Computed Analytics State
    const [analytics, setAnalytics] = useState({
        hourly: Array(24).fill(0),
        sessions: { Asian: 0, London: 0, 'New York': 0 },
        symbols: {},
        streaks: { current: 0, maxWin: 0, maxDrawdown: 0 },
        bestTrade: 0,
        riskReward: 0
    });

    const wsRef = useRef(null);

    const [mockAccount, setMockAccount] = useState({
        login: accountLogin,
        server: 'YoPips-Server',
        platform: 'MT5',
        password: 'Password123'
    });

    const shareLink = `https://yopips.com/live-metrix/${accountLogin}/share`;
    const [accountNotFound, setAccountNotFound] = useState(false);

    // Economic Calendar State
    const [calendarEvents, setCalendarEvents] = useState([]);
    const [calendarLoading, setCalendarLoading] = useState(true);

    // Fetch Calendar Data
    useEffect(() => {
        const fetchCalendar = () => {
            fetch('/api/calendar')
                .then(res => res.json())
                .then(data => {
                    if (data.status && data.data) {
                        const today = new Date();
                        // Reset time to 00:00:00 for accurate day comparison if needed, 
                        // but here we just compare Day/Month/Year components.
                        const tDay = today.getDate();
                        const tMonth = today.getMonth();
                        const tYear = today.getFullYear();

                        const mappedEvents = data.data
                            .map(item => {
                                const date = new Date(item.date);
                                const isExpired = new Date() > date;
                                return {
                                    time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                                    day: date.toLocaleDateString('en-US', { weekday: 'short' }),
                                    fullDate: date.toLocaleDateString('en-US', { day: 'numeric', month: 'short' }),
                                    currency: item.country,
                                    event: item.title,
                                    actual: item.actual || '',
                                    forecast: item.forecast,
                                    previous: item.previous,
                                    impact: item.impact.toLowerCase(),
                                    isExpired: isExpired,
                                    rawDate: date
                                };
                            })
                            // Filter by matching Day, Month, and Year exactly
                            .filter(ev => 
                                ev.rawDate.getDate() === tDay && 
                                ev.rawDate.getMonth() === tMonth && 
                                ev.rawDate.getFullYear() === tYear
                            );
                        
                        setCalendarEvents(mappedEvents);
                    }
                    setCalendarLoading(false);
                })
                .catch(err => {
                    console.error("Error fetching calendar:", err);
                    setCalendarLoading(false);
                });
        };

        fetchCalendar();
        // Poll every minute
        const interval = setInterval(fetchCalendar, 60000);
        return () => clearInterval(interval);
    }, []);

    // Helper: Calculate Analytics from Closed Trades
    const calculateAnalytics = (trades) => {
        const hourly = Array(24).fill(0);
        const sessions = { Asian: 0, London: 0, 'New York': 0 };
        const symbols = {};
        let currentStreak = 0;
        let maxWinRun = 0;
        let maxDrawdown = 0; // This would need equity curve, simplified here as max consecutive loss sum
        let currentDrawdownAccum = 0;
        let bestTrade = 0;
        let totalWinAmt = 0;
        let totalLossAmt = 0;
        let winCount = 0;
        let lossCount = 0;

        // Sort trades by time ascending for streak calc
        const sortedTrades = [...trades].sort((a, b) => parseInt(a.Time) - parseInt(b.Time));

        sortedTrades.forEach(trade => {
            const profit = parseFloat(trade.Profit || 0);
            const time = parseInt(trade.Time) * 1000;
            const date = new Date(time);
            const hour = date.getHours(); 
            
            // Hourly PnL
            if (!isNaN(hour)) {
                hourly[hour] += profit;
            }

            // Session PnL (Approximate GMT offsets)
            const utcHour = date.getUTCHours();
            if (utcHour >= 0 && utcHour < 8) sessions.Asian += profit;
            if (utcHour >= 8 && utcHour < 16) sessions.London += profit;
            if (utcHour >= 13 && utcHour < 22) sessions['New York'] += profit;

            // Symbol Stats
            if (!symbols[trade.Symbol]) {
                symbols[trade.Symbol] = { pnl: 0, volume: 0, trades: 0, wins: 0 };
            }
            symbols[trade.Symbol].pnl += profit;
            symbols[trade.Symbol].volume += (parseFloat(trade.Volume || 0) / 10000);
            symbols[trade.Symbol].trades += 1;
            if (profit > 0) symbols[trade.Symbol].wins += 1;

            // Streaks
            if (profit >= 0) {
                if (currentStreak < 0) currentStreak = 0;
                currentStreak++;
                if (currentStreak > maxWinRun) maxWinRun = currentStreak;
                
                currentDrawdownAccum = 0; 
                if (profit > bestTrade) bestTrade = profit;
                totalWinAmt += profit;
                winCount++;
            } else {
                if (currentStreak > 0) currentStreak = 0;
                currentStreak--;
                
                currentDrawdownAccum += Math.abs(profit);
                if (currentDrawdownAccum > maxDrawdown) maxDrawdown = currentDrawdownAccum;
                
                totalLossAmt += Math.abs(profit);
                lossCount++;
            }
        });

        const avgWin = winCount > 0 ? totalWinAmt / winCount : 0;
        const avgLoss = lossCount > 0 ? totalLossAmt / lossCount : 0;
        const rr = avgLoss > 0 ? (avgWin / avgLoss) : 0;

        return {
            hourly,
            sessions,
            symbols,
            streaks: {
                current: currentStreak,
                maxWin: maxWinRun,
                maxDrawdown: maxDrawdown
            },
            bestTrade,
            riskReward: rr
        };
    };

    // Re-calculate analytics whenever closedTrades changes
    useEffect(() => {
        if (closedTrades.length > 0) {
            setAnalytics(calculateAnalytics(closedTrades));
            
            // Calculate drawdown metrics for Risk Dashboard
            const todayDate = new Date().toDateString();
            const actualTrades = closedTrades.filter(d => d.Action === '0' || d.Action === '1' || d.Action === 0 || d.Action === 1);
            
            // Today's loss (negative PnL sum for today)
            const todayTrades = actualTrades.filter(d => {
                const tradeDate = new Date(parseInt(d.Time) * 1000).toDateString();
                return tradeDate === todayDate;
            });
            const todayPnL = todayTrades.reduce((sum, d) => sum + parseFloat(d.Profit || 0), 0);
            const dailyLoss = todayPnL < 0 ? Math.abs(todayPnL) : 0;
            
            // Total drawdown from initial (all-time loss)
            const totalPnL = actualTrades.reduce((sum, d) => sum + parseFloat(d.Profit || 0), 0);
            const totalLoss = totalPnL < 0 ? Math.abs(totalPnL) : 0;
            
            setDrawdownMetrics({
                dailyLoss,
                totalLoss,
                todayPnL,
                totalPnL
            });
        } else {
             setAnalytics({
                hourly: Array(24).fill(0),
                sessions: { Asian: 0, London: 0, 'New York': 0 },
                symbols: {},
                streaks: { current: 0, maxWin: 0, maxDrawdown: 0 },
                bestTrade: 0,
                riskReward: 0
            });
            setDrawdownMetrics({ dailyLoss: 0, totalLoss: 0, todayPnL: 0, totalPnL: 0 });
        }
    }, [closedTrades]);

    // Fetch data on mount & when accountLogin changes
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setAccountNotFound(false);
            try {
                // 1. Fetch list of all accounts first
                if (allAccounts.length === 0) {
                     const accounts = await flexyService.getAccounts().catch(() => []);
                     setAllAccounts(accounts || []);
                }

                // 2. Fetch details for selected account
                const [account, positions, stats, drawdown, history] = await Promise.all([
                    flexyService.getAccountDetails(accountLogin),
                    flexyService.getOpenPositions(accountLogin).catch(() => ({ positions: [], totalProfit: 0 })),
                    flexyService.getTradeStats(accountLogin).catch(() => null),
                    flexyService.getDrawdownMetrics(accountLogin).catch(() => null),
                    flexyService.getTradeHistory(accountLogin).catch(() => []) 
                ]);

                setAccountData(account);
                setOpenPositions(positions.positions || []);
                setTradeStats(stats);
                setDrawdownMetrics(drawdown);
                setClosedTrades(history || []); 

                setMockAccount(prev => ({
                    ...prev,
                    login: account.Login || accountLogin,
                    server: account.serverAddress || 'YoPips-Server',
                    password: account.password || prev.password,
                    platform: 'MT5'
                }));
                
                // Save as active account for Trading Journal
                localStorage.setItem('activeAccountLogin', account.Login || accountLogin);
            } catch (err) {
                console.error('Failed to fetch account data:', err);
                if (err.message?.includes('Not found') || err.message?.includes('13')) {
                    setAccountNotFound(true);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        // WebSocket Connection
        if (wsRef.current) {
            wsRef.current.close();
        }

        const wsProtocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
        const wsHost = window.location.hostname; // Dynamically use current host (e.g. 192.168.1.25)
        const wsUrl = `${wsProtocol}//${wsHost}:3001?login=${accountLogin}`;
        const ws = new WebSocket(wsUrl);
        wsRef.current = ws;
        
        ws.onopen = () => {
            console.log(`🔗 WebSocket Connected to ${wsHost} for ${accountLogin}`);
            ws.send(JSON.stringify({
                type: 'subscribe',
                channels: ['account-update', 'positions-update', 'deals-update', 'rule-alerts']
            }));
        };



        ws.onmessage = (event) => {
            try {
                const message = JSON.parse(event.data);
                // console.log('📨 WS Message:', message.type);
                
                if (message.type === 'account-update') {
                    setAccountData(prev => ({ ...prev, ...message.data }));
                } else if (message.type === 'positions-update') {
                    setOpenPositions(message.data.positions || []);
                } else if (message.type === 'deals-update') {
                    setClosedTrades(message.data.deals || []);
                } else if (message.type === 'rule-alerts') {
                    setRiskAlerts(prev => [...prev, message.data]);
                }
            } catch (err) {
                console.error('WS Message Error:', err);
            }
        };

        ws.onerror = (error) => {
            console.error('❌ WebSocket Error:', error);
        };

        return () => {
            if (ws.readyState === WebSocket.OPEN) {
                ws.close();
            }
        };
    }, [accountLogin]);

    const handleAccountSwitch = (newLogin) => {
        setIsDropdownOpen(false);
        if (newLogin === accountLogin) return;
        navigate(`/metrix/${newLogin}`); 
    };

    // Fetch Risk Settings when tab changes
    useEffect(() => {
        if (activeTab === 'risk') {
            flexyService.getRiskSettings(accountLogin)
                .then(settings => {
                    if (settings) {
                        setRiskSettings(prev => ({ ...prev, ...settings }));
                    }
                })
                .catch(err => console.error('Failed to fetch risk settings', err));
        }
    }, [activeTab, accountLogin]);

    const handleSaveRiskSettings = async () => {
        try {
            await flexyService.updateRiskSettings(accountLogin, riskSettings);
            alert('Risk settings saved successfully!');
        } catch (error) {
            console.error('Failed to save settings:', error);
            alert('Failed to save settings');
        }
    };

    // Generate mock alerts based on current state
    const generateAlerts = () => {
        const alerts = [];
        const dailyLoss = drawdownMetrics?.dailyLoss || 0;
        const userLimit = parseFloat(riskSettings.userDailyLossLimit) || 0;

        if (userLimit > 0 && dailyLoss >= userLimit * 0.8) {
            alerts.push({
                severity: dailyLoss >= userLimit ? 'critical' : 'warning',
                type: 'drawdown',
                title: 'Daily Loss Limit',
                message: dailyLoss >= userLimit
                    ? 'You have exceeded your daily loss limit! Consider stopping trading for today.'
                    : 'Approaching daily loss limit. Be cautious with your next trades.',
                value: `$${dailyLoss.toFixed(0)}`,
                limit: `$${userLimit.toFixed(0)}`
            });
        }
        return alerts;
    };

    // Format currency helper
    const formatCurrency = (value) => {
        const num = parseFloat(value) || 0;
        return `$${num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    };


    // If account not found, show error message
    if (accountNotFound) {
        return (
            <div className="min-h-screen bg-[#f3f4f6] dark:bg-[#0d0d0d] p-6 lg:p-10 font-sans text-[#1a1a1a] dark:text-[#f3f4f6] flex items-center justify-center">
                <div className="bg-white dark:bg-[#141414] rounded-xl p-10 text-center max-w-md border border-[#eee] dark:border-[#262626]">
                    <div className="text-4xl mb-4">🔍</div>
                    <h2 className="text-xl font-bold mb-2 text-[#1a1a1a] dark:text-[#f3f4f6]">Account Not Found</h2>
                    <p className="text-[#6b7280] dark:text-[#9ca3af] text-sm mb-6">
                        Account <span className="font-mono bg-[#f3f4f6] dark:bg-[#262626] px-2 py-1 rounded">{accountLogin}</span> was not found in MT5.
                    </p>
                    <button
                        onClick={() => navigate('/')}
                        className="bg-[#1d1d1f] dark:bg-white text-white dark:text-[#1d1d1f] px-6 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
                    >
                        Back to Dashboard
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f3f4f6] dark:bg-[#0d0d0d] p-6 lg:p-10 font-sans text-[#1a1a1a] dark:text-[#f3f4f6]">
            {showCredentials && (
                <CredentialsModal
                    onClose={() => setShowCredentials(false)}
                    credentials={mockAccount}
                />
            )}
            {showShareModal && (
                <ShareModal
                    onClose={() => setShowShareModal(false)}
                    shareLink={shareLink}
                />
            )}
            {showResetModal && (
                <ResetPasswordModal
                    onClose={() => setShowResetModal(false)}
                    login={accountLogin}
                    onSuccess={(newPass) => {
                        // Optionally update local mock account state to reflect the new password immediately
                        setMockAccount(prev => ({ ...prev, password: newPass }));
                    }}
                />
            )}
            {/* Breadcrumbs */}
            <div className="flex items-center gap-1.5 mb-3 text-[11px] text-[#9ca3af] dark:text-[#6b7280]">
                <span>Traders</span>
                <span className="mx-1">/</span>
                <span>Accounts Overview</span>
                <span className="mx-1">/</span>
                <span className="text-[#4b5563] dark:text-[#9ca3af]">Account Metrix: {accountLogin}</span>
            </div>

            {/* Page Header */}
            <div className="flex items-center mb-5">
                <div className="flex items-center gap-3">
                    <BarChart />
                    <h1 className="text-xl font-semibold m-0 text-[#1a1a1a] dark:text-[#f3f4f6]">Account Metrix {accountLogin}</h1>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 mb-6">
                <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#1f2937] border border-[#e5e7eb] dark:border-[#374151] rounded text-[13px] font-medium text-[#374151] dark:text-[#e5e7eb] cursor-pointer shadow-sm hover:bg-[#f9fafb] dark:hover:bg-[#374151] transition-all duration-200" onClick={() => setShowCredentials(true)}>
                    <Key size={14} /> Credentials
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#1f2937] border border-[#e5e7eb] dark:border-[#374151] rounded text-[13px] font-medium text-[#374151] dark:text-[#e5e7eb] cursor-pointer shadow-sm hover:bg-[#f9fafb] dark:hover:bg-[#374151] transition-all duration-200" onClick={() => setShowResetModal(true)}>
                    <Lock size={14} /> Reset Password
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#1f2937] border border-[#e5e7eb] dark:border-[#374151] rounded text-[13px] font-medium text-[#374151] dark:text-[#e5e7eb] cursor-pointer shadow-sm hover:bg-[#f9fafb] dark:hover:bg-[#374151] transition-all duration-200" onClick={() => navigate('/support')}>
                    <Phone size={14} /> Contact us
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#1f2937] border border-[#e5e7eb] dark:border-[#374151] rounded text-[13px] font-medium text-[#374151] dark:text-[#e5e7eb] cursor-pointer shadow-sm hover:bg-[#f9fafb] dark:hover:bg-[#374151] transition-all duration-200" onClick={() => window.location.reload()}>
                    <RefreshCw size={14} /> Refresh
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#1f2937] border border-[#e5e7eb] dark:border-[#374151] rounded text-[13px] font-medium text-[#374151] dark:text-[#e5e7eb] cursor-pointer shadow-sm hover:bg-[#f9fafb] dark:hover:bg-[#374151] transition-all duration-200" onClick={() => setShowShareModal(true)}>
                    <Share2 size={14} /> Share
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#1f2937] border border-[#e5e7eb] dark:border-[#374151] rounded text-[13px] font-medium text-[#374151] dark:text-[#e5e7eb] cursor-pointer shadow-sm hover:bg-[#f9fafb] dark:hover:bg-[#374151] transition-all duration-200">
                    <XCircle size={14} /> Close account
                </button>
            </div>

            {/* Tab Switcher */}
            <div className="flex gap-4 mb-6 border-b border-[#e5e7eb] dark:border-[#374151]">
                <button
                    className={`pb-2 text-sm font-semibold transition-colors ${activeTab === 'overview' ? 'text-[#0066ff] border-b-2 border-[#0066ff]' : 'text-[#6b7280] dark:text-[#9ca3af] hover:text-[#111827] dark:hover:text-[#f3f4f6]'}`}
                    onClick={() => setActiveTab('overview')}
                >
                    Overview
                </button>
                <button
                    className={`pb-2 text-sm font-semibold transition-colors ${activeTab === 'risk' ? 'text-[#0066ff] border-b-2 border-[#0066ff]' : 'text-[#6b7280] dark:text-[#9ca3af] hover:text-[#111827] dark:hover:text-[#f3f4f6]'}`}
                    onClick={() => setActiveTab('risk')}
                >
                    Risk Dashboard
                </button>
            </div>

            {activeTab === 'overview' && (
                <>
                    {/* Top Grid: Current Results & Free Trial */}
                    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-5 mb-8">
                        {/* Current Results */}
                        <div className="bg-white dark:bg-[#141414] rounded-lg p-5 shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-transparent dark:border-[#333]">
                            <h3 className="m-0 mb-4 text-[15px] font-semibold text-[#111827] dark:text-[#f3f4f6]">Current Results</h3>

                            <div className="flex justify-between mb-5 pb-5 border-b border-[#f3f4f6] dark:border-[#374151]">
                                <div className="flex flex-col gap-1">
                                    <span className="text-xs text-[#6b7280] dark:text-[#9ca3af] flex items-center gap-1">Balance <Info size={12} /></span>
                                    <span className="text-lg font-bold text-[#1a1a1a] dark:text-[#f3f4f6]">{loading ? '...' : formatCurrency(accountData?.Balance)}</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-xs text-[#6b7280] dark:text-[#9ca3af] flex items-center gap-1">Equity <Info size={12} /></span>
                                    <span className="text-lg font-bold text-[#10b981]">{loading ? '...' : formatCurrency(accountData?.Equity || accountData?.Balance)}</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-xs text-[#6b7280] dark:text-[#9ca3af] flex items-center gap-1">Unrealized PnL <Info size={12} /></span>
                                    <span className={`text-lg font-medium ${(parseFloat(accountData?.Equity || 0) - parseFloat(accountData?.Balance || 0)) >= 0 ? 'text-[#10b981]' : 'text-[#ef4444]'}`}>{loading ? '...' : formatCurrency(parseFloat(accountData?.Equity || 0) - parseFloat(accountData?.Balance || 0))}</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-5 mb-5 flex-wrap">
                                <div className="flex flex-col gap-1">
                                    <span className="text-[10px] text-[#6b7280] dark:text-[#9ca3af]">Trading Objective lines</span>
                                    <div className="flex bg-[#f3f4f6] dark:bg-[#374151] rounded p-0.5">
                                        <button
                                            className={`px-4 py-1 border-none text-xs cursor-pointer rounded transition-all duration-200 ${!objectiveLinesOn ? 'bg-[#1d1d1f] dark:bg-white text-white dark:text-[#1d1d1f] shadow-sm' : 'bg-transparent text-[#374151] dark:text-[#9ca3af] hover:text-[#1d1d1f] dark:hover:text-white'}`}
                                            onClick={() => setObjectiveLinesOn(false)}
                                        >
                                            Off
                                        </button>
                                        <button
                                            className={`px-4 py-1 border-none text-xs cursor-pointer rounded transition-all duration-200 ${objectiveLinesOn ? 'bg-[#0066ff] text-white shadow-sm' : 'bg-transparent text-[#374151] dark:text-[#9ca3af] hover:text-[#1d1d1f] dark:hover:text-white'}`}
                                            onClick={() => setObjectiveLinesOn(true)}
                                        >
                                            On
                                        </button>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-[10px] text-[#6b7280] dark:text-[#9ca3af]">PnL Values</span>
                                    <select className="px-3 py-1 border border-[#e5e7eb] dark:border-[#4b5563] rounded text-xs bg-white dark:bg-[#1f2937] text-[#1a1a1a] dark:text-[#f3f4f6]">
                                        <option>Absolute</option>
                                        <option>Percentage</option>
                                    </select>
                                </div>
                                <button
                                    className="ml-auto px-3 py-1.5 border border-[#e5e7eb] dark:border-[#4b5563] bg-white dark:bg-[#1f2937] rounded text-xs cursor-pointer text-[#374151] dark:text-[#e5e7eb] hover:bg-[#f3f4f6] dark:hover:bg-[#374151] transition-all duration-200 flex items-center gap-1.5"
                                    onClick={() => setChartZoomed(!chartZoomed)}
                                >
                                    {chartZoomed ? (
                                        <>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="8" y1="11" x2="14" y2="11" /></svg>
                                            Zoom out
                                        </>
                                    ) : (
                                        <>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /><line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" /></svg>
                                            Zoom in
                                        </>
                                    )}
                                </button>
                            </div>

                            <div className={`bg-[#fafbfc] dark:bg-[#111827] border border-dashed border-[#e5e7eb] dark:border-[#374151] relative transition-all duration-300 overflow-hidden ${chartZoomed ? 'h-[200px]' : 'h-[80px]'}`}>
                                {/* Placeholder for Bar Chart */}
                                <div className="h-full relative py-5 pl-[60px] pr-0">
                                    {chartZoomed && (
                                        <div className="absolute left-[10px] top-[20px] bottom-[40px] flex flex-col justify-between text-[10px] text-[#9ca3af]">
                                            <span>$50,200.00</span>
                                            <span>$50,100.00</span>
                                            <span>$50,000.00</span>
                                            <span>$49,900.00</span>
                                        </div>
                                    )}
                                    {!chartZoomed && (
                                        <div className="absolute left-[10px] top-[15px] bottom-[25px] flex flex-col justify-between text-[10px] text-[#9ca3af]">
                                            <span>$50,200.00</span>
                                            <span>$49,900.00</span>
                                        </div>
                                    )}
                                    <div className="h-full flex items-end pb-[30px]">
                                        <div className={`w-[60px] bg-[#60a5fa] opacity-50 ml-auto mr-[40px] transition-all duration-300`} style={{ height: chartZoomed ? '60%' : '40%' }}></div>
                                    </div>
                                    <div className="absolute bottom-[10px] left-[60px] right-[20px] flex justify-between text-[10px] text-[#9ca3af]">
                                        <span>7 Jan 2025 10:00</span>
                                        <span>Now</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Free Trial / Account Info */}
                        <div className="bg-white dark:bg-[#141414] rounded-lg p-5 shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-transparent dark:border-[#333] flex flex-col">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="m-0 text-[15px] font-semibold text-[#111827] dark:text-[#f3f4f6]">Free trial</h3>
                            </div>

                            <div className="flex flex-col">
                                <div className="flex justify-between py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px]">
                                    <span className="text-[#6b7280] dark:text-[#9ca3af]">Result:</span>
                                    <span className="bg-[#10b981] text-white px-2 py-0.5 rounded text-[11px] font-semibold">Ongoing</span>
                                </div>
                                <div className="flex justify-between py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px]">
                                    <span className="text-[#6b7280] dark:text-[#9ca3af]">Status:</span>
                                    <span className="font-medium text-[#1a1a1a] dark:text-[#f3f4f6]">Active</span>
                                </div>
                                <div className="flex justify-between py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px]">
                                    <span className="text-[#6b7280] dark:text-[#9ca3af]">Free trial:</span>
                                    <span className="font-medium text-[#1a1a1a] dark:text-[#f3f4f6]">{mockAccount.login}</span>
                                </div>
                                <div className="flex justify-between py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px]">
                                    <span className="text-[#6b7280] dark:text-[#9ca3af]">Start:</span>
                                    <span className="font-medium text-[#1a1a1a] dark:text-[#f3f4f6] flex items-center gap-1">
                                        {loading ? '...' : (accountData?.Created ? new Date(accountData.Created).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : '-')} <Info size={12} />
                                    </span>
                                </div>
                                <div className="flex justify-between py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px]">
                                    <span className="text-[#6b7280] dark:text-[#9ca3af]">End:</span>
                                    <span className="font-medium text-[#1a1a1a] dark:text-[#f3f4f6] flex items-center gap-1">
                                        {loading ? '...' : (accountData?.Created ? (() => {
                                            const d = new Date(accountData.Created);
                                            d.setDate(d.getDate() + 14);
                                            return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
                                        })() : '-')} <Info size={12} />
                                    </span>
                                </div>
                                <div className="flex justify-between py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px]">
                                    <span className="text-[#6b7280] dark:text-[#9ca3af]">Account size:</span>
                                    <span className="font-medium text-[#1a1a1a] dark:text-[#f3f4f6]">{loading ? '...' : formatCurrency(accountData?.InitialBalance || accountData?.Balance)}</span>
                                </div>
                                <div className="flex justify-between py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px]">
                                    <span className="text-[#6b7280] dark:text-[#9ca3af]">Account Type:</span>
                                    <span className="font-medium text-[#1a1a1a] dark:text-[#f3f4f6]">
                                        {accountData?.AccountType === 'free-trial' ? 'Free Trial' : 
                                         accountData?.AccountType === 'evolution' ? 'Evolution' :
                                         accountData?.AccountType === 'express' ? 'Express' :
                                         accountData?.AccountType === 'instant' ? 'Instant' :
                                         accountData?.AccountType || 'Standard'}
                                    </span>
                                </div>
                                <div className="flex justify-between py-3 border-b-0 text-[13px]">
                                    <span className="text-[#6b7280] dark:text-[#9ca3af]">Platform (MT5):</span>
                                    <span className="font-medium text-[#1a1a1a] dark:text-[#f3f4f6]">Downloaded</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <div className="cursor-pointer mb-2.5">
                            <div className="text-sm font-semibold text-[#4b5563] dark:text-[#9ca3af] flex items-center gap-1.5">
                                <span className="text-[10px] text-[#0066ff]">▼</span> Open trades
                            </div>
                        </div>
                        <div className="bg-white dark:bg-[#141414] rounded-lg p-5 shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-[#e5e7eb] dark:border-[#333] overflow-x-auto">
                            <table className="w-full border-collapse min-w-[600px]">
                                <thead>
                                    <tr>
                                        <th className="text-left text-[11px] font-semibold text-[#6b7280] dark:text-[#9ca3af] pb-3 border-b border-[#f3f4f6] dark:border-[#374151]">Type</th>
                                        <th className="text-left text-[11px] font-semibold text-[#6b7280] dark:text-[#9ca3af] pb-3 border-b border-[#f3f4f6] dark:border-[#374151]">Open Time</th>
                                        <th className="text-left text-[11px] font-semibold text-[#6b7280] dark:text-[#9ca3af] pb-3 border-b border-[#f3f4f6] dark:border-[#374151]">Volume</th>
                                        <th className="text-left text-[11px] font-semibold text-[#6b7280] dark:text-[#9ca3af] pb-3 border-b border-[#f3f4f6] dark:border-[#374151]">Symbol</th>
                                        <th className="text-left text-[11px] font-semibold text-[#6b7280] dark:text-[#9ca3af] pb-3 border-b border-[#f3f4f6] dark:border-[#374151]">PnL</th>
                                        <th className="text-left text-[11px] font-semibold text-[#6b7280] dark:text-[#9ca3af] pb-3 border-b border-[#f3f4f6] dark:border-[#374151]">Pips</th>
                                        <th className="text-left text-[11px] font-semibold text-[#6b7280] dark:text-[#9ca3af] pb-3 border-b border-[#f3f4f6] dark:border-[#374151]">Duration</th>
                                        <th className="pb-3 border-b border-[#f3f4f6] dark:border-[#374151]"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {loading ? (
                                        <tr>
                                            <td colSpan="8" className="py-8 text-center text-[#9ca3af]">
                                                <Loader2 size={20} className="animate-spin inline mr-2" />
                                                Loading trades...
                                            </td>
                                        </tr>
                                    ) : openPositions.length === 0 ? (
                                        <tr>
                                            <td colSpan="8" className="py-8 text-center text-[#9ca3af]">
                                                No open positions
                                            </td>
                                        </tr>
                                    ) : openPositions.map((pos, idx) => {
                                        const profit = parseFloat(pos.Profit || pos.profit || 0);
                                        const isProfit = profit >= 0;
                                        // MT5 API returns Action: 0=BUY, 1=SELL
                                        const posType = pos.type || (pos.Action === '0' || pos.Action === 0 ? 'BUY' : 'SELL');
                                        const openTime = pos.TimeCreate ? new Date(parseInt(pos.TimeCreate) * 1000) : (pos.open_time ? new Date(pos.open_time) : new Date());
                                        const duration = Math.floor((Date.now() - openTime.getTime()) / 1000);
                                        const days = Math.floor(duration / 86400);
                                        const hours = Math.floor((duration % 86400) / 3600);
                                        const mins = Math.floor((duration % 3600) / 60);
                                        const secs = duration % 60;
                                        const durationStr = days > 0
                                            ? `${days}d ${hours}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
                                            : `${hours}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

                                        return (
                                            <React.Fragment key={pos.Position || pos.ticket || idx}>
                                                <tr className={expandedTrade === (pos.Position || pos.ticket) ? 'bg-[#f9fafb] dark:bg-[#1f2937]' : ''}>
                                                    <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] align-middle text-[#1a1a1a] dark:text-[#f3f4f6]">
                                                        <div className="flex flex-col gap-1">
                                                            <span className="font-medium text-[#111827] dark:text-[#f3f4f6]">{pos.Position || pos.ticket}</span>
                                                            <span className={`font-medium text-xs ${posType === 'BUY' ? 'text-[#10b981]' : 'text-[#ef4444]'}`}>
                                                                {posType}
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] align-middle text-[#1a1a1a] dark:text-[#f3f4f6]">
                                                        <div className="flex flex-col gap-0.5 text-[13px] text-[#374151] dark:text-[#9ca3af]">
                                                            <span>{openTime.toLocaleDateString()},</span>
                                                            <span className="text-xs">{openTime.toLocaleTimeString()}</span>
                                                        </div>
                                                    </td>
                                                    <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] align-middle text-[#1a1a1a] dark:text-[#f3f4f6]">{(parseFloat(pos.Volume || 0) / 10000).toFixed(2)}</td>
                                                    <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] align-middle text-[#1a1a1a] dark:text-[#f3f4f6]">{pos.Symbol || pos.symbol}</td>
                                                    <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] align-middle text-[#1a1a1a] dark:text-[#f3f4f6]">
                                                        <span className={`px-3 py-1.5 rounded font-medium min-w-[80px] inline-block text-center ${isProfit ? 'bg-[#f0fdf4] dark:bg-[#064e3b] text-[#10b981] dark:text-[#34d399]' : 'bg-[#fef2f2] dark:bg-[#7f1d1d] text-[#ef4444] dark:text-[#f87171]'}`}>
                                                            {formatCurrency(profit)}
                                                        </span>
                                                    </td>
                                                    <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] align-middle text-[#1a1a1a] dark:text-[#f3f4f6]">
                                                        <span className={`font-medium px-3 py-1.5 rounded min-w-[60px] inline-block text-center ${isProfit ? 'text-[#10b981] dark:text-[#34d399] bg-[#f0fdf4] dark:bg-[#064e3b]' : 'text-[#ef4444] dark:text-[#f87171] bg-[#fef2f2] dark:bg-[#7f1d1d]'}`}>
                                                            -
                                                        </span>
                                                    </td>
                                                    <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] align-middle text-[#1a1a1a] dark:text-[#f3f4f6]">
                                                        <span className="bg-[#f3f4f6] dark:bg-[#374151] px-3 py-1.5 rounded text-[#374151] dark:text-[#e5e7eb] text-xs inline-block">{durationStr}</span>
                                                    </td>
                                                    <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] align-middle text-[#1a1a1a] dark:text-[#f3f4f6]">
                                                        <button 
                                                            onClick={() => setExpandedTrade(expandedTrade === (pos.Position || pos.ticket) ? null : (pos.Position || pos.ticket))}
                                                            className={`bg-white dark:bg-[#374151] border border-[#e5e7eb] dark:border-[#4b5563] rounded w-7 h-7 flex items-center justify-center cursor-pointer text-[#6b7280] dark:text-[#9ca3af] hover:bg-[#f9fafb] transition-transform ${expandedTrade === (pos.Position || pos.ticket) ? 'rotate-180' : ''}`}
                                                        >
                                                            <ChevronDown size={16} />
                                                        </button>
                                                    </td>
                                                </tr>
                                                {/* Expanded Details Row */}
                                                {expandedTrade === (pos.Position || pos.ticket) && (
                                                    <tr className="bg-[#f9fafb] dark:bg-[#1f2937]">
                                                        <td colSpan="8" className="p-4 border-b border-[#e5e7eb] dark:border-[#374151]">
                                                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-sm">
                                                                <div>
                                                                    <span className="text-xs text-[#6b7280] block">Entry Price</span>
                                                                    <span className="font-medium text-[#111827] dark:text-[#f3f4f6]">{parseFloat(pos.PriceOpen || 0).toFixed(5)}</span>
                                                                </div>
                                                                <div>
                                                                    <span className="text-xs text-[#6b7280] block">Current Price</span>
                                                                    <span className="font-medium text-[#111827] dark:text-[#f3f4f6]">{parseFloat(pos.PriceCurrent || 0).toFixed(5)}</span>
                                                                </div>
                                                                <div>
                                                                    <span className="text-xs text-[#6b7280] block">Stop Loss</span>
                                                                    <span className="font-medium text-[#111827] dark:text-[#f3f4f6]">{parseFloat(pos.PriceSL || 0) > 0 ? parseFloat(pos.PriceSL).toFixed(5) : '-'}</span>
                                                                </div>
                                                                <div>
                                                                    <span className="text-xs text-[#6b7280] block">Take Profit</span>
                                                                    <span className="font-medium text-[#111827] dark:text-[#f3f4f6]">{parseFloat(pos.PriceTP || 0) > 0 ? parseFloat(pos.PriceTP).toFixed(5) : '-'}</span>
                                                                </div>
                                                                <div>
                                                                    <span className="text-xs text-[#6b7280] block">Swap</span>
                                                                    <span className="font-medium text-[#111827] dark:text-[#f3f4f6]">{formatCurrency(parseFloat(pos.Storage || 0))}</span>
                                                                </div>
                                                                <div>
                                                                    <span className="text-xs text-[#6b7280] block">Commission</span>
                                                                    <span className="font-medium text-[#111827] dark:text-[#f3f4f6]">{formatCurrency(parseFloat(pos.Commission || 0))}</span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )}
                                            </React.Fragment>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* "Your stats" Section */}
                    <div className="mb-4">
                        <h3 className="text-base font-semibold text-[#1a1a1a] dark:text-[#f3f4f6]">Your stats</h3>
                    </div>

                    {/* Consistency Score & Stats Calculated Block */}
                    {(() => {
                        // Calculations
                        const actualTrades = closedTrades.filter(d => d.Action === '0' || d.Action === '1' || d.Action === 0 || d.Action === 1);
                        const uniqueDays = new Set(actualTrades.map(d => new Date(parseInt(d.Time) * 1000).toDateString())).size;
                        
                        // Today's PnL
                        const todayDate = new Date().toDateString();
                        const todayTrades = actualTrades.filter(d => new Date(parseInt(d.Time) * 1000).toDateString() === todayDate);
                        const todayClosedProfit = todayTrades.reduce((acc, d) => acc + parseFloat(d.Profit || 0), 0);
                        const floatingPnL = accountData ? (parseFloat(accountData.Equity) - parseFloat(accountData.Balance)) : 0;
                        const todayTotalProfit = todayClosedProfit + floatingPnL;

                        // Assumptions for demo (can be dynamic if challenge data available)
                        const initialBalance = 50000; 
                        const maxDailyLossLimit = 2500; // 5% of 50k
                        const maxLossLimit = 5000; // 10% of 50k
                        const profitTarget = 5000; // 10% of 50k
                        // Note: Adjusted limits to 50k account standard (5%/10%) as balance is ~50k. 
                        // Previous hardcoded 10k/20k seemed to be for 200k account which didn't match balance.

                        const currentBalance = accountData ? parseFloat(accountData.Balance) : initialBalance;
                        const totalPnL = (currentBalance - initialBalance) + floatingPnL;

                        // Consistency Score Logic (Simple placeholder based on activity)
                        const score = Math.min(100, Math.max(0, actualTrades.length * 5 + uniqueDays * 10));
                        const scoreColor = score < 30 ? '#ef4444' : score < 80 ? '#f59e0b' : '#10b981';
                        const scoreText = score < 30 ? 'Poor' : score < 80 ? 'Good' : 'Excellent';

                        // Permitted Losses
                        const todaysPermittedLoss = maxDailyLossLimit + todayTotalProfit;
                        const maxPermittedLoss = maxLossLimit + totalPnL;

                        return (
                            <>
                                <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-5 mb-5">
                                    {/* Consistency Score */}
                                    <div className="bg-white dark:bg-[#141414] rounded-lg p-5 shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-transparent dark:border-[#333] text-center">
                                        <div className="flex justify-between items-center mb-4">
                                            <h4 className="m-0 text-[15px] font-semibold text-[#111827] dark:text-[#f3f4f6]">Consistency score</h4>
                                            <Settings size={14} className="text-gray-400 dark:text-[#9ca3af]" />
                                        </div>
                                        <div className="flex justify-center gap-4 text-[11px] text-[#6b7280] dark:text-[#9ca3af] mb-6">
                                            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#ef4444] to-[#f87171]"></span> 0 - 30%</span>
                                            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#f59e0b] to-[#fbbf24]"></span> 30 - 80%</span>
                                            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#10b981] to-[#34d399]"></span> 80 - 100%</span>
                                        </div>
                                        <div className="flex justify-center items-center relative" style={{ height: '160px' }}>
                                            <svg width="220" height="130" viewBox="0 0 220 130" className="overflow-visible">
                                                <defs>
                                                    <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                        <stop offset="0%" stopColor="#ef4444" />
                                                        <stop offset="30%" stopColor="#f59e0b" />
                                                        <stop offset="70%" stopColor="#f59e0b" />
                                                        <stop offset="100%" stopColor="#10b981" />
                                                    </linearGradient>
                                                    <linearGradient id="trackGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                        <stop offset="0%" stopColor="#e5e7eb" />
                                                        <stop offset="100%" stopColor="#f3f4f6" />
                                                    </linearGradient>
                                                    <filter id="gaugeShadow" x="-20%" y="-20%" width="140%" height="140%">
                                                        <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15"/>
                                                    </filter>
                                                </defs>
                                                {/* Background track */}
                                                <path
                                                    d="M 20 110 A 90 90 0 0 1 200 110"
                                                    fill="none"
                                                    stroke="url(#trackGradient)"
                                                    strokeWidth="16"
                                                    strokeLinecap="round"
                                                    className="dark:opacity-30"
                                                />
                                                {/* Colored progress arc */}
                                                <path
                                                    d="M 20 110 A 90 90 0 0 1 200 110"
                                                    fill="none"
                                                    stroke="url(#gaugeGradient)"
                                                    strokeWidth="16"
                                                    strokeLinecap="round"
                                                    strokeDasharray={`${(score / 100) * 283} 283`}
                                                    filter="url(#gaugeShadow)"
                                                    style={{ transition: 'stroke-dasharray 0.8s ease-out' }}
                                                />
                                                {/* Tick marks */}
                                                {[0, 25, 50, 75, 100].map((tick, i) => {
                                                    const angle = (180 - (tick / 100) * 180) * (Math.PI / 180);
                                                    const x1 = 110 + 75 * Math.cos(angle);
                                                    const y1 = 110 - 75 * Math.sin(angle);
                                                    const x2 = 110 + 82 * Math.cos(angle);
                                                    const y2 = 110 - 82 * Math.sin(angle);
                                                    return (
                                                        <line
                                                            key={i}
                                                            x1={x1} y1={y1} x2={x2} y2={y2}
                                                            stroke="#9ca3af"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                        />
                                                    );
                                                })}
                                                {/* Needle */}
                                                <g style={{ 
                                                    transform: `rotate(${-90 + (score / 100) * 180}deg)`, 
                                                    transformOrigin: '110px 110px',
                                                    transition: 'transform 0.8s ease-out'
                                                }}>
                                                    <line
                                                        x1="110" y1="110" x2="110" y2="40"
                                                        stroke={scoreColor}
                                                        strokeWidth="3"
                                                        strokeLinecap="round"
                                                    />
                                                    <circle cx="110" cy="110" r="8" fill={scoreColor} />
                                                    <circle cx="110" cy="110" r="4" fill="white" />
                                                </g>
                                            </svg>
                                            {/* Center text */}
                                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center translate-y-6">
                                                <span className="block text-4xl font-bold text-[#1a1a1a] dark:text-[#f3f4f6] mb-1" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>{score}%</span>
                                                <span 
                                                    className="inline-block text-xs font-semibold px-3 py-1 rounded-full shadow-sm" 
                                                    style={{ 
                                                        color: scoreColor,
                                                        backgroundColor: score < 30 ? '#fef2f2' : score < 80 ? '#fffbeb' : '#f0fdf4',
                                                        border: `1px solid ${score < 30 ? '#fecaca' : score < 80 ? '#fde68a' : '#bbf7d0'}`
                                                    }}
                                                >
                                                    {scoreText}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Objectives */}
                                    <div className="bg-white dark:bg-[#141414] rounded-lg p-5 shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-transparent dark:border-[#333]">
                                        <h4 className="m-0 mb-4 text-[15px] font-semibold text-[#111827] dark:text-[#f3f4f6]">Objectives</h4>
                                        <table className="w-full border-collapse">
                                            <thead>
                                                <tr>
                                                    <th className="text-left text-[11px] font-semibold text-[#6b7280] dark:text-[#9ca3af] pb-3 border-b border-[#f3f4f6] dark:border-[#374151]">Trading objectives</th>
                                                    <th className="text-left text-[11px] font-semibold text-[#6b7280] dark:text-[#9ca3af] pb-3 border-b border-[#f3f4f6] dark:border-[#374151]">Result</th>
                                                    <th className="text-left text-[11px] font-semibold text-[#6b7280] dark:text-[#9ca3af] pb-3 border-b border-[#f3f4f6] dark:border-[#374151]">Summary</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] text-[#0066ff] dark:text-[#60a5fa] cursor-pointer">Minimum 5 trading days</td>
                                                    <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] text-[#1a1a1a] dark:text-[#f3f4f6]">{uniqueDays}</td>
                                                    <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] text-right">
                                                        <div className={`inline-flex p-1 rounded ${uniqueDays >= 5 ? 'bg-[#d1fae5] dark:bg-[#064e3b] text-[#10b981] dark:text-[#34d399]' : 'bg-[#fee2e2] dark:bg-[#7f1d1d] text-[#ef4444] dark:text-[#f87171]'}`}>
                                                            {uniqueDays >= 5 ? <Check size={12} /> : <X size={12} />}
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] text-[#0066ff] dark:text-[#60a5fa] cursor-pointer">Max Daily Loss - {formatCurrency(maxDailyLossLimit)}</td>
                                                    <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] text-[#1a1a1a] dark:text-[#f3f4f6]">{formatCurrency(todayTotalProfit)} ({((todayTotalProfit/initialBalance)*100).toFixed(2)}%)</td>
                                                    <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] text-right">
                                                        <div className={`inline-flex p-1 rounded ${todayTotalProfit > -maxDailyLossLimit ? 'bg-[#d1fae5] dark:bg-[#064e3b] text-[#10b981] dark:text-[#34d399]' : 'bg-[#fee2e2] dark:bg-[#7f1d1d] text-[#ef4444] dark:text-[#f87171]'}`}>
                                                            {todayTotalProfit > -maxDailyLossLimit ? <Check size={12} /> : <X size={12} />}
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] text-[#0066ff] dark:text-[#60a5fa] cursor-pointer">Max Loss - {formatCurrency(maxLossLimit)}</td>
                                                    <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] text-[#1a1a1a] dark:text-[#f3f4f6]">{formatCurrency(totalPnL)} ({((totalPnL/initialBalance)*100).toFixed(2)}%)</td>
                                                    <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] text-right">
                                                        <div className={`inline-flex p-1 rounded ${totalPnL > -maxLossLimit ? 'bg-[#d1fae5] dark:bg-[#064e3b] text-[#10b981] dark:text-[#34d399]' : 'bg-[#fee2e2] dark:bg-[#7f1d1d] text-[#ef4444] dark:text-[#f87171]'}`}>
                                                            {totalPnL > -maxLossLimit ? <Check size={12} /> : <X size={12} />}
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] text-[#0066ff] dark:text-[#60a5fa] cursor-pointer">Profit Target {formatCurrency(profitTarget)}</td>
                                                    <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] text-[#1a1a1a] dark:text-[#f3f4f6]">{formatCurrency(totalPnL)} ({((totalPnL/initialBalance)*100).toFixed(2)}%)</td>
                                                    <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] text-right">
                                                        <div className={`inline-flex p-1 rounded ${totalPnL >= profitTarget ? 'bg-[#d1fae5] dark:bg-[#064e3b] text-[#10b981] dark:text-[#34d399]' : 'bg-[#fee2e2] dark:bg-[#7f1d1d] text-[#ef4444] dark:text-[#f87171]'}`}>
                                                            {totalPnL >= profitTarget ? <Check size={12} /> : <X size={12} />}
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                
                                {/* Permitted Loss Stats Bars */}
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8">
                                    <div className="bg-[#f9fafb] dark:bg-[#262626] p-3 rounded-md text-center flex flex-col gap-1.5 border border-[#e5e7eb] dark:border-[#333]">
                                        <span className="text-[11px] text-[#6b7280] dark:text-[#9ca3af] flex items-center justify-center gap-1">Today's permitted loss <Info size={12} /></span>
                                        <span className="text-sm font-semibold text-[#111827] dark:text-[#f3f4f6]">{formatCurrency(todaysPermittedLoss)}</span>
                                    </div>
                                    <div className="bg-[#f9fafb] dark:bg-[#262626] p-3 rounded-md text-center flex flex-col gap-1.5 border border-[#e5e7eb] dark:border-[#333]">
                                        <span className="text-[11px] text-[#6b7280] dark:text-[#9ca3af] flex items-center justify-center gap-1">Max permitted loss <Info size={12} /></span>
                                        <span className="text-sm font-semibold text-[#111827] dark:text-[#f3f4f6]">{formatCurrency(maxPermittedLoss)}</span>
                                    </div>
                                    <div className="bg-[#f9fafb] dark:bg-[#262626] p-3 rounded-md text-center flex flex-col gap-1.5 border border-[#e5e7eb] dark:border-[#333]">
                                        <span className="text-[11px] text-[#6b7280] dark:text-[#9ca3af] flex items-center justify-center gap-1">Today's profit <Info size={12} /></span>
                                        <span className={`text-sm font-semibold ${todayTotalProfit >= 0 ? 'text-[#10b981]' : 'text-[#ef4444]'}`}>{formatCurrency(todayTotalProfit)}</span>
                                    </div>
                                </div>
                            </>
                        );
                    })()}

                    {/* Statistics & Daily Summary */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8">
                        <div className="bg-white dark:bg-[#141414] rounded-lg p-5 shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-transparent dark:border-[#333]">
                            <h3 className="m-0 mb-4 text-[15px] font-semibold text-[#111827] dark:text-[#f3f4f6]">Statistics</h3>
                            {(() => {
                                // Calculate stats from closedTrades (WebSocket data)
                                const actualTrades = closedTrades.filter(d => d.Action === '0' || d.Action === '1' || d.Action === 0 || d.Action === 1);
                                const winningTrades = actualTrades.filter(d => parseFloat(d.Profit || 0) > 0);
                                const losingTrades = actualTrades.filter(d => parseFloat(d.Profit || 0) < 0);
                                
                                const totalTrades = actualTrades.length;
                                const winRate = totalTrades > 0 ? ((winningTrades.length / totalTrades) * 100).toFixed(1) : 0;
                                
                                const grossProfit = winningTrades.reduce((sum, d) => sum + parseFloat(d.Profit || 0), 0);
                                const grossLoss = Math.abs(losingTrades.reduce((sum, d) => sum + parseFloat(d.Profit || 0), 0));
                                
                                const avgProfit = winningTrades.length > 0 ? (grossProfit / winningTrades.length).toFixed(2) : 0;
                                const avgLoss = losingTrades.length > 0 ? (grossLoss / losingTrades.length).toFixed(2) : 0;
                                
                                const totalLots = actualTrades.reduce((sum, d) => sum + (parseFloat(d.Volume || 0) / 10000), 0).toFixed(2);
                                
                                const profitFactor = grossLoss > 0 ? (grossProfit / grossLoss).toFixed(2) : (grossProfit > 0 ? '∞' : 'N/A');
                                
                                // Expectancy = (Win% x Avg Win) - (Loss% x Avg Loss)
                                const winPercent = totalTrades > 0 ? winningTrades.length / totalTrades : 0;
                                const lossPercent = totalTrades > 0 ? losingTrades.length / totalTrades : 0;
                                const expectancy = ((winPercent * parseFloat(avgProfit)) - (lossPercent * parseFloat(avgLoss))).toFixed(2);
                                
                                // Average RRR (Risk Reward Ratio) = Avg Profit / Avg Loss
                                const avgRRR = parseFloat(avgLoss) > 0 ? (parseFloat(avgProfit) / parseFloat(avgLoss)).toFixed(2) : '-';
                                
                                return (
                                    <div className="grid grid-cols-3 gap-3">
                                        <StatBox label="Equity" value={formatCurrency(accountData?.Equity || 0)} />
                                        <StatBox label="Balance" value={formatCurrency(accountData?.Balance || 0)} />
                                        <StatBox label="Win rate" value={`${winRate}%`} />
                                        <StatBox label="Average profit" value={formatCurrency(avgProfit)} />
                                        <StatBox label="Average loss" value={formatCurrency(avgLoss)} />
                                        <StatBox label="Number of trades" value={totalTrades} />
                                        <StatBox label="Lots" value={totalLots} />
                                        <StatBox label="Sharpe Ratio" value="-" />
                                        <StatBox label="Average RRR" value={avgRRR} />
                                        <StatBox label="Expectancy" value={formatCurrency(expectancy)} />
                                        <StatBox label="Profit factor" value={profitFactor} />
                                    </div>
                                );
                            })()}
                        </div>

                        <div className="bg-white dark:bg-[#141414] rounded-lg p-5 shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-transparent dark:border-[#333]">
                            <h3 className="m-0 mb-4 text-[15px] font-semibold text-[#111827] dark:text-[#f3f4f6] flex items-center gap-1">Daily summary <Info size={14} /></h3>
                            <div className="flex justify-between text-[11px] text-[#6b7280] dark:text-[#9ca3af] mb-3 px-2">
                                <span className="w-1/4">Date</span>
                                <span className="w-1/4 text-center">Trades</span>
                                <span className="w-1/4 text-center">Lots</span>
                                <span className="w-1/4 text-right">Result</span>
                            </div>
                            <div className="max-h-[180px] overflow-y-auto">
                                {(() => {
                                    // Group trades by date
                                    const actualTrades = closedTrades.filter(d => d.Action === '0' || d.Action === '1' || d.Action === 0 || d.Action === 1);
                                    const dailyData = {};
                                    
                                    actualTrades.forEach(deal => {
                                        const timestamp = parseInt(deal.Time) * 1000;
                                        const dateStr = new Date(timestamp).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
                                        
                                        if (!dailyData[dateStr]) {
                                            dailyData[dateStr] = { trades: 0, lots: 0, result: 0 };
                                        }
                                        dailyData[dateStr].trades += 1;
                                        dailyData[dateStr].lots += parseFloat(deal.Volume || 0) / 10000;
                                        dailyData[dateStr].result += parseFloat(deal.Profit || 0);
                                    });
                                    
                                    const days = Object.entries(dailyData).sort((a, b) => new Date(b[0]) - new Date(a[0]));
                                    
                                    if (days.length === 0) {
                                        return (
                                            <div className="text-center py-8 text-[#9ca3af] text-sm">
                                                No trading activity yet
                                            </div>
                                        );
                                    }
                                    
                                    return days.map(([date, data]) => (
                                        <div key={date} className="flex justify-between items-center py-2 px-2 border-b border-[#f3f4f6] dark:border-[#374151] last:border-0">
                                            <span className="w-1/4 text-[13px] text-[#111827] dark:text-[#f3f4f6]">{date}</span>
                                            <span className="w-1/4 text-center text-[13px] text-[#111827] dark:text-[#f3f4f6]">{data.trades}</span>
                                            <span className="w-1/4 text-center text-[13px] text-[#111827] dark:text-[#f3f4f6]">{data.lots.toFixed(2)}</span>
                                            <span className={`w-1/4 text-right text-[13px] font-medium ${data.result >= 0 ? 'text-[#10b981]' : 'text-[#ef4444]'}`}>
                                                {data.result >= 0 ? '+' : ''}{formatCurrency(data.result)}
                                            </span>
                                        </div>
                                    ));
                                })()}
                            </div>
                        </div>
                    </div>

                    {/* Trading Journal & Analytics Dashboard */}
                    <div className="bg-[#09090b] text-[#e4e4e7] p-6 rounded-xl font-sans mb-8 border border-[#27272a] shadow-2xl">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4 md:gap-0">
                            <div>
                                <div className="flex items-center gap-3 mb-1">
                                    <div className="p-2 bg-[#27272a] rounded-lg">
                                        <BarChart size={20} className="text-white" />
                                    </div>
                                    <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                                        Trading Journal & Analytics
                                    </h1>
                                </div>
                                <p className="text-[#a1a1aa] text-sm md:ml-12">Review your performance, track emotions, and refine your edge.</p>
                            </div>
                            
                            <div className="flex gap-4">
                                <div className="relative">
                                    <button 
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                        className="flex items-center gap-2 bg-[#18181b] border border-[#27272a] px-4 py-2 rounded-lg text-sm hover:bg-[#27272a] transition-colors min-w-[160px] justify-between"
                                    >
                                        <span className="font-mono text-[#22c55e]">#{mockAccount.login}</span>
                                        <ChevronDown size={14} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    
                                    {isDropdownOpen && (
                                        <div className="absolute top-full right-0 mt-2 w-full bg-[#18181b] border border-[#27272a] rounded-lg shadow-xl z-50 max-h-60 overflow-y-auto">
                                            {allAccounts.map(acc => (
                                                <div 
                                                    key={acc.login}
                                                    onClick={() => handleAccountSwitch(acc.login)}
                                                    className={`px-4 py-2 text-sm cursor-pointer hover:bg-[#27272a] font-mono flex items-center justify-between ${acc.login == accountLogin ? 'text-[#22c55e] bg-[#22c55e]/10' : 'text-[#a1a1aa]'}`}
                                                >
                                                    <span>#{acc.login}</span>
                                                    {acc.login == accountLogin && <Check size={12} />}
                                                </div>
                                            ))}
                                            {allAccounts.length === 0 && (
                                                <div className="px-4 py-2 text-sm text-[#a1a1aa]">No other accounts</div>
                                            )}
                                        </div>
                                    )}
                                </div>

                                <button 
                                    onClick={() => window.location.reload()} 
                                    className="flex items-center gap-2 bg-[#18181b] border border-[#27272a] px-4 py-2 rounded-lg text-sm hover:bg-[#27272a] transition-colors text-[#a1a1aa] hover:text-white"
                                >
                                    <RefreshCw size={14} />
                                    <span>Sync</span>
                                </button>
                            </div>
                        </div>

                        {/* Top Stats Grid */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#27272a] border border-[#27272a] rounded-xl overflow-hidden mb-8">
                            {/* Row 1 */}
                            <div className="bg-[#09090b] p-6 hover:bg-[#18181b] transition-colors group relative">
                                <span className="text-[11px] font-bold text-[#71717a] uppercase tracking-wider">Net PnL</span>
                                <div className={`text-2xl font-mono mt-2 font-bold ${closedTrades.reduce((s, d) => s + parseFloat(d.Profit || 0), 0) >= 0 ? 'text-[#22c55e]' : 'text-[#ef4444]'}`}>
                                    {formatCurrency(closedTrades.reduce((s, d) => s + parseFloat(d.Profit || 0), 0))}
                                    <span className={`text-xs ml-2 py-0.5 px-2 rounded-full ${closedTrades.reduce((s, d) => s + parseFloat(d.Profit || 0), 0) >= 0 ? 'bg-[#22c55e]/10 text-[#22c55e]' : 'bg-[#ef4444]/10 text-[#ef4444]'}`}>
                                        {closedTrades.length} Trades
                                    </span>
                                </div>
                            </div>
                            <div className="bg-[#09090b] p-6 hover:bg-[#18181b] transition-colors">
                                <span className="text-[11px] font-bold text-[#71717a] uppercase tracking-wider">Win Rate</span>
                                <div className="text-2xl font-mono mt-2 font-bold text-white">
                                    {closedTrades.length > 0 ? ((closedTrades.filter(d => parseFloat(d.Profit || 0) > 0).length / closedTrades.filter(d => d.Action === '0' || d.Action === '1').length) * 100).toFixed(1) : 0}%
                                </div>
                            </div>
                            <div className="bg-[#09090b] p-6 hover:bg-[#18181b] transition-colors">
                                <span className="text-[11px] font-bold text-[#71717a] uppercase tracking-wider">Profit Factor</span>
                                <div className="text-2xl font-mono mt-2 font-bold text-white">
                                    {(() => {
                                        const wins = closedTrades.filter(d => parseFloat(d.Profit) > 0).reduce((s, d) => s + parseFloat(d.Profit), 0);
                                        const losses = Math.abs(closedTrades.filter(d => parseFloat(d.Profit) < 0).reduce((s, d) => s + parseFloat(d.Profit), 0));
                                        return losses > 0 ? (wins / losses).toFixed(2) : (wins > 0 ? '∞' : '0');
                                    })()}
                                </div>
                            </div>
                            <div className="bg-[#09090b] p-6 hover:bg-[#18181b] transition-colors">
                                <span className="text-[11px] font-bold text-[#71717a] uppercase tracking-wider">Expectancy</span>
                                <div className="text-2xl font-mono mt-2 font-bold text-white">
                                    {(() => {
                                        const actuals = closedTrades.filter(d => d.Action === '0' || d.Action === '1');
                                        if (actuals.length === 0) return '$0';
                                        const wins = actuals.filter(d => parseFloat(d.Profit) > 0);
                                        const losses = actuals.filter(d => parseFloat(d.Profit) < 0);
                                        const avgWin = wins.length ? wins.reduce((s, d) => s + parseFloat(d.Profit), 0) / wins.length : 0;
                                        const avgLoss = losses.length ? Math.abs(losses.reduce((s, d) => s + parseFloat(d.Profit), 0)) / losses.length : 0;
                                        const winRate = wins.length / actuals.length;
                                        const lossRate = losses.length / actuals.length;
                                        const exp = (winRate * avgWin) - (lossRate * avgLoss);
                                        return formatCurrency(exp);
                                    })()}
                                </div>
                            </div>

                            {/* Row 2 */}
                            <div className="bg-[#09090b] p-6 hover:bg-[#18181b] transition-colors border-t border-[#27272a]">
                                <span className="text-[11px] font-bold text-[#71717a] uppercase tracking-wider">Avg Win</span>
                                <div className="text-lg font-mono mt-1 text-[#22c55e]">
                                    {formatCurrency(closedTrades.filter(d => parseFloat(d.Profit) > 0).reduce((s, d) => s + parseFloat(d.Profit), 0) / (closedTrades.filter(d => parseFloat(d.Profit) > 0).length || 1))}
                                </div>
                            </div>
                            <div className="bg-[#09090b] p-6 hover:bg-[#18181b] transition-colors border-t border-[#27272a]">
                                <span className="text-[11px] font-bold text-[#71717a] uppercase tracking-wider">Avg Loss</span>
                                <div className="text-lg font-mono mt-1 text-[#ef4444]">
                                    {formatCurrency(Math.abs(closedTrades.filter(d => parseFloat(d.Profit) < 0).reduce((s, d) => s + parseFloat(d.Profit), 0) / (closedTrades.filter(d => parseFloat(d.Profit) < 0).length || 1)))}
                                </div>
                            </div>
                            <div className="bg-[#09090b] p-6 hover:bg-[#18181b] transition-colors border-t border-[#27272a]">
                                <span className="text-[11px] font-bold text-[#71717a] uppercase tracking-wider">Risk:Reward</span>
                                <div className="text-lg font-mono mt-1 text-white">
                                    {analytics.riskReward ? `1:${analytics.riskReward.toFixed(2)}` : '-'}
                                </div>
                            </div>
                            <div className="bg-[#09090b] p-6 hover:bg-[#18181b] transition-colors border-t border-[#27272a]">
                                <span className="text-[11px] font-bold text-[#71717a] uppercase tracking-wider">Best Trade</span>
                                <div className="text-lg font-mono mt-1 text-[#22c55e]">
                                    +{formatCurrency(analytics.bestTrade)}
                                </div>
                            </div>
                        </div>

                        {/* Middle Section: Performance & Hourly */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                            {/* Performance Metrics Card */}
                            <div className="bg-[#18181b] rounded-xl p-6 border border-[#27272a]">
                                <h3 className="text-xs font-bold text-[#71717a] uppercase mb-6 tracking-wider">Performance Metrics</h3>
                                <div className="space-y-6">
                                    <div className="flex justify-between items-center border-b border-[#27272a] pb-4">
                                        <span className="text-sm text-[#d4d4d8]">Current Streak</span>
                                        <span className={`font-mono font-bold ${analytics.streaks.current >= 0 ? 'text-[#22c55e]' : 'text-[#ef4444]'}`}>
                                            {analytics.streaks.current >= 0 ? `W${analytics.streaks.current}` : `L${Math.abs(analytics.streaks.current)}`}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-[#27272a] pb-4">
                                        <span className="text-sm text-[#d4d4d8]">Longest Win Run</span>
                                        <span className="font-mono font-bold text-white">{analytics.streaks.maxWin}</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-[#27272a] pb-4">
                                        <span className="text-sm text-[#d4d4d8]">Longest Drawdown</span>
                                        <span className="font-mono font-bold text-white">{formatCurrency(analytics.streaks.maxDrawdown)}</span>
                                    </div>
                                    <div className="flex justify-between items-center pt-2">
                                        <span className="text-sm text-[#d4d4d8]">Net Profit</span>
                                        <span className={`font-mono font-bold ${closedTrades.reduce((s, d) => s + parseFloat(d.Profit || 0), 0) >= 0 ? 'text-[#22c55e]' : 'text-[#ef4444]'}`}>
                                            {formatCurrency(closedTrades.reduce((s, d) => s + parseFloat(d.Profit || 0), 0))}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Hourly PnL & Sessions */}
                            <div className="lg:col-span-2 bg-[#18181b] rounded-xl p-6 border border-[#27272a]">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-xs font-bold text-[#71717a] uppercase tracking-wider flex items-center gap-2">
                                        <Clock size={14} /> Hourly PnL
                                    </h3>
                                    <span className="text-[10px] text-[#52525b] uppercase">UTC Time</span>
                                </div>

                                {/* Hourly Heatmap Grid */}
                                <div className="grid grid-cols-12 gap-1 mb-8">
                                    {analytics.hourly.map((pnl, i) => (
                                        <div key={i} className="flex flex-col items-center gap-1 group relative">
                                            <div 
                                                className={`w-full aspect-square rounded cursor-pointer transition-all ${pnl > 0 ? 'bg-[#22c55e]/20 hover:bg-[#22c55e]/40 border border-[#22c55e]/30' : pnl < 0 ? 'bg-[#ef4444]/20 hover:bg-[#ef4444]/40 border border-[#ef4444]/30' : 'bg-[#27272a] hover:bg-[#3f3f46]'}`}
                                            ></div>
                                            <span className="text-[9px] text-[#52525b]">{i}</span>
                                            {/* Tooltip */}
                                            <div className="absolute bottom-full mb-2 hidden group-hover:block bg-black text-xs p-2 rounded border border-[#333] z-10 whitespace-nowrap">
                                                Hour {i}:00 - {formatCurrency(pnl)}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Session Stats */}
                                <div className="grid grid-cols-3 gap-4 border-t border-[#27272a] pt-6">
                                    <div>
                                        <span className="text-[10px] font-bold text-[#71717a] uppercase mb-1 block">Asian</span>
                                        <div className={`font-mono font-bold ${analytics.sessions.Asian >= 0 ? 'text-[#22c55e]' : 'text-[#ef4444]'}`}>
                                            {formatCurrency(analytics.sessions.Asian)}
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-bold text-[#71717a] uppercase mb-1 block">London</span>
                                        <div className={`font-mono font-bold ${analytics.sessions.London >= 0 ? 'text-[#22c55e]' : 'text-[#ef4444]'}`}>
                                            {formatCurrency(analytics.sessions.London)}
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-bold text-[#71717a] uppercase mb-1 block">New York</span>
                                        <div className={`font-mono font-bold ${analytics.sessions['New York'] >= 0 ? 'text-[#22c55e]' : 'text-[#ef4444]'}`}>
                                            {formatCurrency(analytics.sessions['New York'])}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Tables */}
                        <div className="bg-[#18181b] rounded-xl border border-[#27272a] overflow-hidden mb-8">
                            <div className="flex justify-between items-center p-4 border-b border-[#27272a] bg-[#27272a]/30">
                                <h3 className="text-xs font-bold text-[#71717a] uppercase tracking-wider">Symbol Performance</h3>
                                <span className="text-[10px] text-[#52525b]">Top 5 by Vol</span>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm text-left">
                                    <thead>
                                        <tr className="border-b border-[#27272a] text-[10px] font-bold text-[#52525b] uppercase">
                                            <th className="px-4 py-3">Symbol</th>
                                            <th className="px-4 py-3 text-right">Net PnL</th>
                                            <th className="px-4 py-3 text-right">Volume</th>
                                            <th className="px-4 py-3 text-right">Trades</th>
                                            <th className="px-4 py-3 text-right">Win Rate</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-[#27272a]">
                                        {Object.entries(analytics.symbols)
                                            .sort((a, b) => b[1].volume - a[1].volume)
                                            .slice(0, 5)
                                            .map(([curr, stats]) => (
                                                <tr key={curr} className="hover:bg-[#27272a]/50 transition-colors">
                                                    <td className="px-4 py-3 font-mono text-white">{curr}</td>
                                                    <td className={`px-4 py-3 text-right font-mono font-bold ${stats.pnl >= 0 ? 'text-[#22c55e]' : 'text-[#ef4444]'}`}>
                                                        {formatCurrency(stats.pnl)}
                                                    </td>
                                                    <td className="px-4 py-3 text-right font-mono text-[#a1a1aa]">{stats.volume.toFixed(2)}</td>
                                                    <td className="px-4 py-3 text-right font-mono text-[#a1a1aa]">{stats.trades}</td>
                                                    <td className="px-4 py-3 text-right font-mono text-[#a1a1aa]">
                                                        {((stats.wins / stats.trades) * 100).toFixed(1)}%
                                                    </td>
                                                </tr>
                                            ))}
                                        {Object.keys(analytics.symbols).length === 0 && (
                                            <tr><td colSpan="5" className="p-4 text-center text-[#52525b]">No data available</td></tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Trade History */}
                        <div className="bg-[#18181b] rounded-xl border border-[#27272a] overflow-hidden">
                            <div className="flex justify-between items-center p-4 border-b border-[#27272a] bg-[#27272a]/30">
                                <h3 className="text-xs font-bold text-[#71717a] uppercase tracking-wider flex items-center gap-2">
                                     Trade History
                                </h3>
                                <span className="text-[10px] text-[#52525b]">{closedTrades.length} trades synced</span>
                            </div>
                            <div className="overflow-x-auto max-h-[400px]">
                                <table className="w-full text-sm text-left">
                                    <thead>
                                        <tr className="border-b border-[#27272a] text-[10px] font-bold text-[#52525b] uppercase sticky top-0 bg-[#18181b]">
                                            <th className="px-4 py-3">Time</th>
                                            <th className="px-4 py-3">Type</th>
                                            <th className="px-4 py-3">Symbol</th>
                                            <th className="px-4 py-3 text-right">Volume</th>
                                            <th className="px-4 py-3 text-right">Price</th>
                                            <th className="px-4 py-3 text-right">Profit</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-[#27272a]">
                                        {closedTrades.slice(0, 50).map((deal, idx) => {
                                            const profit = parseFloat(deal.Profit || 0);
                                            const dealTime = deal.Time ? new Date(parseInt(deal.Time) * 1000) : new Date();
                                            const dealType = deal.Action === '0' ? 'BUY' : deal.Action === '1' ? 'SELL' : deal.Action === '2' ? 'BALANCE' : 'OTHER';
                                            
                                            // Skip non-trade entries if desired, but User usually wants to see everything or at least Trades
                                            if (dealType === 'BALANCE' || dealType === 'OTHER') return null;

                                            return (
                                                <tr key={idx} className="hover:bg-[#27272a]/50 transition-colors">
                                                    <td className="px-4 py-3 text-[#71717a] font-mono text-xs">{dealTime.toLocaleString()}</td>
                                                    <td className="px-4 py-3">
                                                        <span className={`text-xs font-bold px-1.5 py-0.5 rounded ${dealType === 'BUY' ? 'bg-[#22c55e]/20 text-[#22c55e]' : 'bg-[#ef4444]/20 text-[#ef4444]'}`}>
                                                            {dealType}
                                                        </span>
                                                    </td>
                                                    <td className="px-4 py-3 font-mono text-white">{deal.Symbol}</td>
                                                    <td className="px-4 py-3 text-right font-mono text-[#a1a1aa]">{(parseFloat(deal.Volume || 0) / 10000).toFixed(2)}</td>
                                                    <td className="px-4 py-3 text-right font-mono text-[#a1a1aa]">{parseFloat(deal.Price || 0).toFixed(5)}</td>
                                                    <td className={`px-4 py-3 text-right font-mono font-bold ${profit >= 0 ? 'text-[#22c55e]' : 'text-[#ef4444]'}`}>
                                                        {formatCurrency(profit)}
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                        {closedTrades.length === 0 && (
                                            <tr><td colSpan="6" className="p-8 text-center text-[#52525b]">No trades found</td></tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Economic Calendar Footer */}
                    <div className="bg-white dark:bg-[#141414] rounded-lg p-0 shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-transparent dark:border-[#333] overflow-hidden">
                        <div className="p-5 pb-0">
                            <h3 className="m-0 mb-4 text-[15px] font-semibold text-[#111827] dark:text-[#f3f4f6]">Economic Calendar</h3>
                        </div>
                        <div className="px-4 py-3 text-sm font-semibold text-[#111827] dark:text-[#f3f4f6] border-b border-[#f3f4f6] dark:border-[#374151] bg-[#fff] dark:bg-[#1f2937]">
                            {new Date().toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'short' })}
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-white dark:bg-[#1f2937]">
                                        <th className="px-4 py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[11px] font-semibold text-[#6b7280] dark:text-[#9ca3af] text-left">Description:</th>
                                        <th className="px-4 py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[11px] font-semibold text-[#6b7280] dark:text-[#9ca3af] text-left">Instrument:</th>
                                        <th className="px-4 py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[11px] font-semibold text-[#6b7280] dark:text-[#9ca3af] text-left">Date:</th>
                                        <th className="px-4 py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[11px] font-semibold text-[#6b7280] dark:text-[#9ca3af] text-left">Actual:</th>
                                        <th className="px-4 py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[11px] font-semibold text-[#6b7280] dark:text-[#9ca3af] text-left">Forecast:</th>
                                        <th className="px-4 py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[11px] font-semibold text-[#6b7280] dark:text-[#9ca3af] text-left">Previous:</th>
                                        <th className="px-4 py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[11px] font-semibold text-[#6b7280] dark:text-[#9ca3af] text-left">Actions:</th>
                                    </tr>
                                </thead>
                                <tbody className="text-[13px] text-[#1a1a1a] dark:text-[#f3f4f6]">
                                    {calendarEvents.length === 0 ? (
                                        <tr>
                                            <td colSpan="7" className="px-4 py-6 text-center text-[#6b7280] dark:text-[#9ca3af]">
                                                {calendarLoading ? 'Loading events...' : 'No events scheduled for today.'}
                                            </td>
                                        </tr>
                                    ) : (
                                        calendarEvents.map((ev, index) => (
                                            <tr key={index}>
                                                <td className="px-4 py-3 align-middle">
                                                    <div className="flex items-center gap-3">
                                                        <div className={`w-1 h-6 rounded-sm ${
                                                            ev.impact === 'high' ? 'bg-red-500' : 
                                                            ev.impact === 'medium' ? 'bg-orange-400' : 
                                                            'bg-emerald-400'
                                                        }`}></div>
                                                        <div className="flex flex-col gap-0.5">
                                                            <span className="text-[13px] text-[#374151] dark:text-[#e5e7eb]">{ev.event}</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-3 align-middle">
                                                    <div className="flex items-center gap-2 font-semibold text-[#111827] dark:text-[#f3f4f6]">
                                                        {ev.currency}
                                                    </div>
                                                </td>
                                                <td className="px-4 py-3 align-middle">
                                                    <div className="flex flex-col text-xs text-[#374151] dark:text-[#9ca3af]">
                                                        {ev.time} {ev.fullDate}
                                                        {ev.isExpired && <span className="text-[11px] text-[#9ca3af]">Expired</span>}
                                                    </div>
                                                </td>
                                                <td className="px-4 py-3 align-middle font-medium">
                                                    {ev.actual ? (
                                                        <span className={ev.actual.startsWith('-') ? 'text-red-500' : 'text-emerald-500'}>
                                                            {ev.actual}
                                                        </span>
                                                    ) : '—'}
                                                </td>
                                                <td className="px-4 py-3 align-middle">
                                                    {ev.forecast ? (
                                                        <span className={ev.forecast.startsWith('-') ? 'text-red-500' : 'text-emerald-500'}>
                                                            {ev.forecast}
                                                        </span>
                                                    ) : '—'}
                                                </td>
                                                <td className="px-4 py-3 align-middle">{ev.previous || '—'}</td>
                                                <td className="px-4 py-3 align-middle">
                                                    <Calendar size={16} className="text-[#9ca3af] cursor-pointer hover:text-[#374151]" />
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                        <button 
                            onClick={() => navigate('/calendar')}
                            className="w-full p-3 bg-[#f3f4f6] dark:bg-[#374151] border-none text-[13px] font-semibold text-[#111827] dark:text-[#f3f4f6] cursor-pointer hover:bg-[#e5e7eb] dark:hover:bg-[#4b5563]"
                        >
                            Show full Economic Calendar
                        </button>
                    </div>

                    <div className="text-[10px] text-[#374151] dark:text-[#9ca3af] mb-8 font-medium">
                        THE VALUES IN THIS ACCOUNT METRIX ARE INFORMATIVE ONLY. REAL-TIME TRADING VALUES CAN BE SEEN IN THE TRADING PLATFORM.
                    </div>

                    {/* Footer */}
                    <div className="border-t border-[#e5e7eb] dark:border-[#374151] pt-8 text-center">
                        <div className="mb-5 flex justify-center gap-5">
                            <a href="#" className="text-[#111827] dark:text-[#f3f4f6] underline text-xs font-semibold">Cookie settings</a>
                            <a href="#" className="text-[#111827] dark:text-[#f3f4f6] underline text-xs font-semibold">Privacy policy</a>
                            <a href="#" className="text-[#111827] dark:text-[#f3f4f6] underline text-xs font-semibold">Terms & Conditions</a>
                        </div>
                        <p className="text-[10px] text-[#6b7280] dark:text-[#9ca3af] leading-relaxed mb-5 text-justify">
                            All information provided on this site is intended solely for educational purposes related to trading on financial markets and does not serve in any way as a specific investment recommendation...
                        </p>
                        <p className="text-[11px] text-[#9ca3af]">2025 © Copyright - FTMO.com Made with ❤️ for trading.</p>
                    </div>
                </>
            )}

            {activeTab === 'risk' && (
                <div className="flex flex-col gap-6">
                    {/* Alert Banner */}
                    <RiskAlertBanner
                        alerts={generateAlerts()}
                        onDismiss={(idx) => setRiskAlerts(prev => prev.filter((_, i) => i !== idx))}
                    />

                    {/* Risk Meters Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <RiskGauge
                            label="Daily Loss"
                            subLabel="User Limit"
                            value={drawdownMetrics?.dailyLoss || 0}
                            max={parseFloat(riskSettings.userDailyLossLimit) || accountData?.InitialBalance * 0.05 || 5000}
                            warningThreshold={0.8}
                            icon="down"
                        />
                        <RiskGauge
                            label="Max Drawdown"
                            subLabel="Total Limit"
                            value={drawdownMetrics?.totalLoss || 0}
                            max={parseFloat(riskSettings.userMaxDrawdown) || accountData?.InitialBalance * 0.10 || 10000}
                            warningThreshold={0.8}
                            icon="warning"
                        />
                        <RiskGauge
                            label="Profit Progress"
                            subLabel="Target"
                            value={Math.max(0, (accountData?.Balance || 0) - (accountData?.InitialBalance || 0))}
                            max={parseFloat(riskSettings.userProfitTarget) || accountData?.InitialBalance * 0.10 || 10000}
                            color="#0066ff"
                            warningThreshold={1.5}
                            icon="up"
                        />
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
                        {/* Left Column - Calculator */}
                        <div className="xl:col-span-2">
                            <PositionCalculator
                                balance={accountData?.Balance || 100000}
                                riskPercent={parseFloat(riskSettings.riskPerTradePercent) || 1}
                            />
                        </div>

                        {/* Right Column - Sessions */}
                        <div>
                            <TradingSessionIndicator />
                        </div>
                    </div>

                    {/* Second Row */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        {/* Settings Form */}
                        <div className="bg-white dark:bg-gradient-to-br dark:from-[#1a1a1a] dark:to-[#0f0f0f] rounded-xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-lg border border-transparent dark:border-[#2a2a2a]">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center shadow-lg">
                                    <Settings size={20} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="m-0 text-[15px] font-bold text-[#111827] dark:text-[#f3f4f6]">Risk Configuration</h3>
                                    <p className="text-[11px] text-[#6b7280] dark:text-[#9ca3af]">Set your personal limits</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-[11px] font-medium text-[#6b7280] dark:text-[#9ca3af] mb-2">Daily Loss Limit ($)</label>
                                    <input
                                        type="number"
                                        value={riskSettings.userDailyLossLimit}
                                        onChange={(e) => setRiskSettings({ ...riskSettings, userDailyLossLimit: e.target.value })}
                                        className="w-full px-4 py-3 bg-white dark:bg-[#262626] border border-[#e5e7eb] dark:border-[#374151] rounded-lg text-[13px] font-medium text-[#1a1a1a] dark:text-[#f3f4f6] focus:outline-none focus:ring-2 focus:ring-[#6366f1]/20 focus:border-[#6366f1] transition-all"
                                        placeholder="e.g. 500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-[11px] font-medium text-[#6b7280] dark:text-[#9ca3af] mb-2">Max Drawdown Limit ($)</label>
                                    <input
                                        type="number"
                                        value={riskSettings.userMaxDrawdown}
                                        onChange={(e) => setRiskSettings({ ...riskSettings, userMaxDrawdown: e.target.value })}
                                        className="w-full px-4 py-3 bg-white dark:bg-[#262626] border border-[#e5e7eb] dark:border-[#374151] rounded-lg text-[13px] font-medium text-[#1a1a1a] dark:text-[#f3f4f6] focus:outline-none focus:ring-2 focus:ring-[#6366f1]/20 focus:border-[#6366f1] transition-all"
                                        placeholder="e.g. 2000"
                                    />
                                </div>

                                <div>
                                    <label className="block text-[11px] font-medium text-[#6b7280] dark:text-[#9ca3af] mb-2">Profit Target ($)</label>
                                    <input
                                        type="number"
                                        value={riskSettings.userProfitTarget}
                                        onChange={(e) => setRiskSettings({ ...riskSettings, userProfitTarget: e.target.value })}
                                        className="w-full px-4 py-3 bg-white dark:bg-[#262626] border border-[#e5e7eb] dark:border-[#374151] rounded-lg text-[13px] font-medium text-[#1a1a1a] dark:text-[#f3f4f6] focus:outline-none focus:ring-2 focus:ring-[#6366f1]/20 focus:border-[#6366f1] transition-all"
                                        placeholder="e.g. 5000"
                                    />
                                </div>

                                <div className="flex items-center gap-3 p-3 bg-[#f9fafb] dark:bg-[#1f1f1f] rounded-lg">
                                    <input
                                        type="checkbox"
                                        checked={riskSettings.alertEnabled}
                                        onChange={(e) => setRiskSettings({ ...riskSettings, alertEnabled: e.target.checked })}
                                        id="alertEnabled"
                                        className="w-4 h-4 rounded accent-[#6366f1]"
                                    />
                                    <label htmlFor="alertEnabled" className="text-[13px] font-medium text-[#1a1a1a] dark:text-[#f3f4f6]">Enable Push Alerts</label>
                                </div>

                                <button
                                    onClick={handleSaveRiskSettings}
                                    className="w-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] hover:from-[#5558e8] hover:to-[#7c3aed] text-white py-3 rounded-lg text-sm font-bold transition-all shadow-lg shadow-[#6366f1]/25 hover:shadow-xl hover:shadow-[#6366f1]/30"
                                >
                                    Save Configuration
                                </button>
                            </div>
                        </div>

                        {/* Streak Tracker */}
                        <StreakTracker
                            winStreak={analytics.streaks.current > 0 ? analytics.streaks.current : 0}
                            loseStreak={analytics.streaks.current < 0 ? Math.abs(analytics.streaks.current) : 0}
                            bestStreak={analytics.streaks.maxWin || 0}
                            consecutiveDays={(() => {
                                // Calculate green days (profitable days)
                                const actualTrades = closedTrades.filter(d => d.Action === '0' || d.Action === '1');
                                const dailyPnL = {};
                                actualTrades.forEach(d => {
                                    const day = new Date(parseInt(d.Time) * 1000).toDateString();
                                    dailyPnL[day] = (dailyPnL[day] || 0) + parseFloat(d.Profit || 0);
                                });
                                return Object.values(dailyPnL).filter(pnl => pnl > 0).length;
                            })()}
                        />
                    </div>

                    {/* Portfolio Heatmap */}
                    <div className="bg-white dark:bg-gradient-to-br dark:from-[#1a1a1a] dark:to-[#0f0f0f] rounded-xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-lg border border-transparent dark:border-[#2a2a2a]">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#10b981] to-[#059669] flex items-center justify-center shadow-lg">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                                    <rect x="3" y="3" width="7" height="7" />
                                    <rect x="14" y="3" width="7" height="7" />
                                    <rect x="3" y="14" width="7" height="7" />
                                    <rect x="14" y="14" width="7" height="7" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="m-0 text-[15px] font-bold text-[#111827] dark:text-[#f3f4f6]">Portfolio Exposure</h3>
                                <p className="text-[11px] text-[#6b7280] dark:text-[#9ca3af]">{openPositions.length} active position{openPositions.length !== 1 ? 's' : ''}</p>
                            </div>
                        </div>
                        <div className="min-h-[180px] flex items-center justify-center bg-[#f9fafb] dark:bg-[#141414] rounded-xl border border-dashed border-[#e5e7eb] dark:border-[#333]">
                            {openPositions.length > 0 ? (
                                <div className="flex flex-wrap gap-3 p-4 w-full">
                                    {openPositions.map((pos, idx) => {
                                        const profit = parseFloat(pos.Profit || pos.profit || 0);
                                        const isProfit = profit >= 0;
                                        const lotSize = (parseFloat(pos.Volume || 0) / 10000).toFixed(2);
                                        const size = Math.max(80, Math.min(150, parseFloat(lotSize) * 80 + 60));
                                        return (
                                            <div
                                                key={pos.Position || pos.ticket || idx}
                                                className={`rounded-xl flex flex-col items-center justify-center p-3 transition-all hover:scale-105 cursor-pointer ${isProfit ? 'bg-gradient-to-br from-[#10b981]/20 to-[#059669]/10 border border-[#10b981]/30' : 'bg-gradient-to-br from-[#ef4444]/20 to-[#dc2626]/10 border border-[#ef4444]/30'}`}
                                                style={{ width: `${size}px`, height: `${size}px` }}
                                            >
                                                <span className="text-xs font-bold text-[#111827] dark:text-[#f3f4f6]">{pos.Symbol || pos.symbol}</span>
                                                <span className={`text-lg font-black ${isProfit ? 'text-[#10b981]' : 'text-[#ef4444]'}`}>{lotSize}</span>
                                                <span className={`text-[10px] font-medium ${isProfit ? 'text-[#10b981]' : 'text-[#ef4444]'}`}>
                                                    {isProfit ? '+' : ''}{profit.toFixed(0)}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="text-center p-6">
                                    <div className="w-16 h-16 rounded-full bg-[#f3f4f6] dark:bg-[#262626] flex items-center justify-center mx-auto mb-3">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#9ca3af]">
                                            <rect x="3" y="3" width="7" height="7" />
                                            <rect x="14" y="3" width="7" height="7" />
                                            <rect x="3" y="14" width="7" height="7" />
                                            <rect x="14" y="14" width="7" height="7" />
                                        </svg>
                                    </div>
                                    <p className="text-sm font-medium text-[#6b7280] dark:text-[#9ca3af]">No open positions</p>
                                    <p className="text-[11px] text-[#9ca3af]">Your portfolio heatmap will appear here</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

// Helper component for statistics boxes
function StatBox({ label, value }) {
    return (
        <div className="bg-[#f9fafb] dark:bg-[#262626] p-2.5 rounded-md text-center border border-[#e5e7eb] dark:border-[#333] flex flex-col items-center justify-center">
            <span className="block text-[10px] text-[#6b7280] dark:text-[#9ca3af] mb-1 flex items-center gap-1">{label} <Info size={10} className="ml-0.5" /></span>
            <span className="text-[13px] font-semibold text-[#1a1a1a] dark:text-[#f3f4f6]">{value}</span>
        </div>
    );
}

// Icon helper
function BarChartIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#1a1a1a] dark:text-[#f3f4f6]">
            <line x1="18" y1="20" x2="18" y2="10"></line>
            <line x1="12" y1="20" x2="12" y2="4"></line>
            <line x1="6" y1="20" x2="6" y2="14"></line>
        </svg>
    )
}

export default AccountMetrix;
