import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NewChallengeModal from '../components/modals/NewChallengeModal';
import StatCard from '../components/dashboard/StatCard';
import PerformanceChart from '../components/dashboard/PerformanceChart';
import RecentUsersTable from '../components/dashboard/RecentUsersTable';
import { Users, Wallet, TrendingUp, TrendingDown, DollarSign, Activity } from 'lucide-react';
import {
    UserIcon,
    AccountsIcon,
    ProfitIcon,
    DrawdownIcon,
    PassedIcon,
    FailedIcon,
    OngoingIcon
} from '../components/common/Icons';
import { fetchDashboardStats } from '../services/api';

const Dashboard = () => {
    const navigate = useNavigate();
    const [isChallengeModalOpen, setIsChallengeModalOpen] = useState(false);
    const [stats, setStats] = useState({
        totalUsers: 0,
        activeAccounts: 0,
        totalProfitPayout: 0,
        totalDrawdown: 0
    });

    useEffect(() => {
        const loadStats = async () => {
            try {
                const data = await fetchDashboardStats();
                setStats(data);
            } catch (error) {
                console.error("Failed to load dashboard stats", error);
            }
        };
        loadStats();
    }, []);

    const formatCurrency = (value) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0
        }).format(value);
    };

    // Dashboard report data for export (using real data now)
    const reportData = {
        stats: {
            totalUsers: stats.totalUsers.toLocaleString(),
            activeAccounts: stats.activeAccounts.toLocaleString(),
            totalProfitPayout: formatCurrency(stats.totalProfitPayout),
            totalDrawdown: formatCurrency(stats.totalDrawdown)
        },
        challenges: {
            passed: 850, // These could also be fetched from API if added
            failed: 1240,
            ongoing: 2450
        }
    };

    // Download Report function
    const downloadReport = () => {
        const today = new Date().toISOString().split('T')[0];

        // Create CSV content with dashboard summary
        const csvContent = `Dashboard Report - ${today}

SUMMARY STATISTICS
Metric,Value
Total Users,${reportData.stats.totalUsers}
Active Accounts,${reportData.stats.activeAccounts}
Total Profit Payout,${reportData.stats.totalProfitPayout}
Total Drawdown,${reportData.stats.totalDrawdown}

CHALLENGE STATUS
Status,Count
Passed,${reportData.challenges.passed}
Failed,${reportData.challenges.failed}
Ongoing,${reportData.challenges.ongoing}
Total,${reportData.challenges.passed + reportData.challenges.failed + reportData.challenges.ongoing}

Pass Rate,${((reportData.challenges.passed / (reportData.challenges.passed + reportData.challenges.failed)) * 100).toFixed(1)}%
`;

        // Create blob and download
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);

        link.setAttribute('href', url);
        link.setAttribute('download', `dashboard_report_${today}.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="space-y-6 animate-in fade-in zoom-in duration-500">
            {/* Header Section */}
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-2xl font-bold text-text-main tracking-tight">Dashboard Overview</h1>
                    <p className="text-text-muted mt-1">Welcome back, Admin. Here's what's happening today.</p>
                </div>
                <div className="hidden md:flex gap-3">
                    <button
                        onClick={downloadReport}
                        className="px-4 py-2 bg-surface hover:bg-surface/80 text-text-main rounded-lg text-sm font-medium transition-colors border border-border"
                    >
                        Download Report
                    </button>
                    <button
                        onClick={() => setIsChallengeModalOpen(true)}
                        className="px-4 py-2 bg-primary hover:bg-primary/90 text-background rounded-lg text-sm font-bold shadow-glow-primary transition-all"
                    >
                        Create Challenge
                    </button>
                </div>
            </div>

            <NewChallengeModal
                isOpen={isChallengeModalOpen}
                onClose={() => setIsChallengeModalOpen(false)}
            />

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Total Users"
                    value={stats.totalUsers.toLocaleString()}
                    trend="up"
                    trendValue="12%"
                    icon={UserIcon}
                    color="primary"
                    onClick={() => navigate('/users')}
                />
                <StatCard
                    title="Active Accounts"
                    value={stats.activeAccounts.toLocaleString()}
                    trend="up"
                    trendValue="8.2%"
                    icon={AccountsIcon}
                    color="secondary"
                    onClick={() => navigate('/accounts')}
                />
                <StatCard
                    title="Total Profit Payout"
                    value={formatCurrency(stats.totalProfitPayout)}
                    trend="up"
                    trendValue="24%"
                    icon={ProfitIcon}
                    color="accent"
                    onClick={() => navigate('/withdrawals/overview')}
                />
                <StatCard
                    title="Total Drawdown"
                    value={formatCurrency(stats.totalDrawdown)}
                    trend="down"
                    trendValue="4.5%"
                    icon={DrawdownIcon}
                    color="warning" // Warning for drawdown
                    onClick={() => navigate('/reports/challenges')}
                />
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <PerformanceChart />
                </div>
                <div className="glass-panel p-6 rounded-2xl flex flex-col justify-between overflow-hidden">
                    <div className="relative">
                        <h3 className="text-lg font-bold text-text-main mb-6">Challenge Status</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center group bg-surface-lighter/30 hover:bg-surface-lighter/50 p-4 rounded-2xl transition-all border border-transparent hover:border-border cursor-pointer">
                                <div className="flex items-center gap-4">
                                    <div className="w-1.5 h-12 bg-success rounded-full shadow-[0_0_10px_rgba(16,185,129,0.3)]"></div>
                                    <div>
                                        <p className="text-xs font-bold text-text-muted uppercase tracking-wider mb-0.5">Passed</p>
                                        <p className="text-xl font-black text-text-main">850</p>
                                    </div>
                                </div>
                                <div className="p-2.5 bg-success/10 rounded-xl text-success group-hover:scale-110 transition-transform">
                                    <PassedIcon className="w-5 h-5" />
                                </div>
                            </div>
                            <div className="flex justify-between items-center group bg-surface-lighter/30 hover:bg-surface-lighter/50 p-4 rounded-2xl transition-all border border-transparent hover:border-border cursor-pointer">
                                <div className="flex items-center gap-4">
                                    <div className="w-1.5 h-12 bg-danger rounded-full shadow-[0_0_10px_rgba(239,68,68,0.3)]"></div>
                                    <div>
                                        <p className="text-xs font-bold text-text-muted uppercase tracking-wider mb-0.5">Failed</p>
                                        <p className="text-xl font-black text-text-main">1,240</p>
                                    </div>
                                </div>
                                <div className="p-2.5 bg-danger/10 rounded-xl text-danger group-hover:scale-110 transition-transform">
                                    <FailedIcon className="w-5 h-5" />
                                </div>
                            </div>
                            <div className="flex justify-between items-center group bg-surface-lighter/30 hover:bg-surface-lighter/50 p-4 rounded-2xl transition-all border border-transparent hover:border-border cursor-pointer">
                                <div className="flex items-center gap-4">
                                    <div className="w-1.5 h-12 bg-secondary rounded-full shadow-[0_0_10px_rgba(59,130,246,0.3)]"></div>
                                    <div>
                                        <p className="text-xs font-bold text-text-muted uppercase tracking-wider mb-0.5">Ongoing</p>
                                        <p className="text-xl font-black text-text-main">2,450</p>
                                    </div>
                                </div>
                                <div className="p-2.5 bg-secondary/10 rounded-xl text-secondary group-hover:scale-110 transition-transform">
                                    <OngoingIcon className="w-5 h-5" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={() => navigate('/reports/challenges')}
                        className="w-full mt-8 py-3.5 bg-surface-lighter hover:bg-surface/80 border border-border text-text-main text-sm font-bold rounded-xl transition-all shadow-sm active:scale-[0.98]"
                    >
                        View Detailed Report
                    </button>
                </div>
            </div>

            {/* Tables Section */}
            <RecentUsersTable />
        </div>
    );
};

export default Dashboard;
