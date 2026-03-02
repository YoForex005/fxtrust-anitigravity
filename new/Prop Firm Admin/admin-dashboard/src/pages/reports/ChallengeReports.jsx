import React, { useState } from 'react';
import {
    RefreshCw,
    Filter,
    Download,
    ChevronLeft,
    ChevronRight,
    HelpCircle,
    TrendingUp,
    TrendingDown,
    CheckCircle,
    XCircle,
    Clock,
    Search,
    Calendar
} from 'lucide-react';
import { cn } from '../../lib/utils';
import { useNavigate } from 'react-router-dom';

const ChallengeReports = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('all');
    const [dateRange, setDateRange] = useState('last30');

    // Summary Statistics
    const stats = {
        passed: { count: 850, change: '+12%', trend: 'up' },
        failed: { count: 1240, change: '-5%', trend: 'down' },
        ongoing: { count: 2450, change: '+18%', trend: 'up' },
        total: { count: 4540, change: '+8%', trend: 'up' }
    };

    // Detailed challenge data
    const challenges = [
        { id: 2283, user: 'Alex Thompson', email: 'alex@gmail.com', plan: '100k Challenge', phase: 2, status: 'Passed', profit: '+$12,450', drawdown: '4.2%', startDate: '2024-01-15', endDate: '2024-02-28' },
        { id: 2284, user: 'Sarah Jen', email: 'sarah@yahoo.com', plan: '50k Challenge', phase: 1, status: 'Failed', profit: '-$3,200', drawdown: '11.5%', startDate: '2024-01-20', endDate: '2024-02-15' },
        { id: 2285, user: 'Michael Chan', email: 'm.chan@outlook.com', plan: '200k Challenge', phase: 2, status: 'Ongoing', profit: '+$8,900', drawdown: '3.8%', startDate: '2024-02-01', endDate: '-' },
        { id: 2286, user: 'Jessica Lee', email: 'jess.lee@gmail.com', plan: '100k Challenge', phase: 1, status: 'Passed', profit: '+$5,670', drawdown: '2.1%', startDate: '2024-01-10', endDate: '2024-02-20' },
        { id: 2287, user: 'David Smith', email: 'd.smith@proton.me', plan: '10k Challenge', phase: 1, status: 'Failed', profit: '-$890', drawdown: '12.3%', startDate: '2024-02-05', endDate: '2024-02-18' },
        { id: 2288, user: 'Emma Wilson', email: 'emma.w@gmail.com', plan: '50k Challenge', phase: 2, status: 'Ongoing', profit: '+$4,320', drawdown: '5.6%', startDate: '2024-02-10', endDate: '-' },
        { id: 2289, user: 'James Brown', email: 'j.brown@mail.com', plan: '100k Challenge', phase: 1, status: 'Passed', profit: '+$7,890', drawdown: '3.2%', startDate: '2024-01-25', endDate: '2024-03-01' },
        { id: 2290, user: 'Lisa Garcia', email: 'lisa.g@yahoo.com', plan: '200k Challenge', phase: 1, status: 'Failed', profit: '-$15,400', drawdown: '14.2%', startDate: '2024-01-18', endDate: '2024-02-10' },
    ];

    const filteredChallenges = activeTab === 'all'
        ? challenges
        : challenges.filter(c => c.status.toLowerCase() === activeTab);

    const getStatusBadge = (status) => {
        const styles = {
            'Passed': 'bg-success/20 text-success border-success/30',
            'Failed': 'bg-danger/20 text-danger border-danger/30',
            'Ongoing': 'bg-warning/20 text-warning border-warning/30'
        };
        return styles[status] || 'bg-surface-lighter text-text-muted';
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case 'Passed': return <CheckCircle className="w-4 h-4" />;
            case 'Failed': return <XCircle className="w-4 h-4" />;
            case 'Ongoing': return <Clock className="w-4 h-4" />;
            default: return null;
        }
    };

    // Export to CSV function
    const exportToCSV = () => {
        // CSV Headers
        const headers = ['ID', 'User', 'Email', 'Plan', 'Phase', 'Status', 'Profit/Loss', 'Drawdown', 'Start Date', 'End Date'];

        // Convert data to CSV rows
        const csvRows = [
            headers.join(','),
            ...filteredChallenges.map(item => [
                item.id,
                `"${item.user}"`,
                item.email,
                `"${item.plan}"`,
                item.phase,
                item.status,
                `"${item.profit}"`,
                item.drawdown,
                item.startDate,
                item.endDate
            ].join(','))
        ];

        // Create CSV content
        const csvContent = csvRows.join('\n');

        // Create blob and download
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);

        link.setAttribute('href', url);
        link.setAttribute('download', `challenge_report_${dateRange}_${new Date().toISOString().split('T')[0]}.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="space-y-6 animate-in fade-in zoom-in duration-300">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <h1 className="text-2xl font-bold text-text-main">Challenge Reports</h1>
                        <span className="text-text-muted text-sm border-l border-border pl-2">Detailed Statistics</span>
                        <a href="#" className="text-primary text-xs flex items-center gap-1 hover:underline ml-2">
                            Need Help? <HelpCircle className="w-3 h-3" />
                        </a>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <select
                        value={dateRange}
                        onChange={(e) => setDateRange(e.target.value)}
                        className="bg-surface border border-border rounded-lg px-4 py-2 text-sm text-text-main focus:outline-none focus:border-primary"
                    >
                        <option value="last7">Last 7 Days</option>
                        <option value="last30">Last 30 Days</option>
                        <option value="last90">Last 90 Days</option>
                        <option value="thisYear">This Year</option>
                        <option value="allTime">All Time</option>
                    </select>
                    <button
                        onClick={exportToCSV}
                        className="flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-lg text-text-muted hover:text-text-main hover:bg-surface-lighter transition-colors text-sm font-medium"
                    >
                        <Download className="w-4 h-4" />
                        Export
                    </button>
                </div>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Passed */}
                <div className="glass-panel p-6 rounded-xl border border-border">
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-success/20 flex items-center justify-center">
                            <CheckCircle className="w-6 h-6 text-success" />
                        </div>
                        <span className={cn(
                            "text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1",
                            stats.passed.trend === 'up' ? "text-success bg-success/10" : "text-danger bg-danger/10"
                        )}>
                            {stats.passed.trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                            {stats.passed.change}
                        </span>
                    </div>
                    <p className="text-text-muted text-xs uppercase tracking-wider mb-1">Passed Challenges</p>
                    <p className="text-3xl font-bold text-text-main">{stats.passed.count.toLocaleString()}</p>
                </div>

                {/* Failed */}
                <div className="glass-panel p-6 rounded-xl border border-border">
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-danger/20 flex items-center justify-center">
                            <XCircle className="w-6 h-6 text-danger" />
                        </div>
                        <span className={cn(
                            "text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1",
                            stats.failed.trend === 'down' ? "text-success bg-success/10" : "text-danger bg-danger/10"
                        )}>
                            {stats.failed.trend === 'down' ? <TrendingDown className="w-3 h-3" /> : <TrendingUp className="w-3 h-3" />}
                            {stats.failed.change}
                        </span>
                    </div>
                    <p className="text-text-muted text-xs uppercase tracking-wider mb-1">Failed Challenges</p>
                    <p className="text-3xl font-bold text-text-main">{stats.failed.count.toLocaleString()}</p>
                </div>

                {/* Ongoing */}
                <div className="glass-panel p-6 rounded-xl border border-border">
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-warning/20 flex items-center justify-center">
                            <Clock className="w-6 h-6 text-warning" />
                        </div>
                        <span className={cn(
                            "text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1",
                            stats.ongoing.trend === 'up' ? "text-success bg-success/10" : "text-danger bg-danger/10"
                        )}>
                            {stats.ongoing.trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                            {stats.ongoing.change}
                        </span>
                    </div>
                    <p className="text-text-muted text-xs uppercase tracking-wider mb-1">Ongoing Challenges</p>
                    <p className="text-3xl font-bold text-text-main">{stats.ongoing.count.toLocaleString()}</p>
                </div>

                {/* Total */}
                <div className="glass-panel p-6 rounded-xl border border-border">
                    <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                            <TrendingUp className="w-6 h-6 text-primary" />
                        </div>
                        <span className={cn(
                            "text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1",
                            stats.total.trend === 'up' ? "text-success bg-success/10" : "text-danger bg-danger/10"
                        )}>
                            {stats.total.trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                            {stats.total.change}
                        </span>
                    </div>
                    <p className="text-text-muted text-xs uppercase tracking-wider mb-1">Total Challenges</p>
                    <p className="text-3xl font-bold text-text-main">{stats.total.count.toLocaleString()}</p>
                </div>
            </div>

            {/* Pass Rate Card */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="glass-panel p-6 rounded-xl border border-border">
                    <h3 className="text-lg font-semibold text-text-main mb-4">Pass Rate</h3>
                    <div className="flex items-center justify-center">
                        <div className="relative w-32 h-32">
                            <svg className="w-32 h-32 transform -rotate-90">
                                <circle cx="64" cy="64" r="56" stroke="currentColor" strokeWidth="12" fill="none" className="text-surface-lighter" />
                                <circle cx="64" cy="64" r="56" stroke="currentColor" strokeWidth="12" fill="none" className="text-success"
                                    strokeDasharray={`${(850 / (850 + 1240)) * 351.86} 351.86`} strokeLinecap="round" />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-2xl font-bold text-text-main">40.7%</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 flex justify-center gap-6 text-sm">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-success"></div>
                            <span className="text-text-muted">Passed</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-danger"></div>
                            <span className="text-text-muted">Failed</span>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-2 glass-panel p-6 rounded-xl border border-border">
                    <h3 className="text-lg font-semibold text-text-main mb-4">Performance by Plan</h3>
                    <div className="space-y-4">
                        {[
                            { plan: '10k Challenge', passed: 120, failed: 80, rate: 60 },
                            { plan: '50k Challenge', passed: 280, failed: 320, rate: 46.7 },
                            { plan: '100k Challenge', passed: 350, failed: 540, rate: 39.3 },
                            { plan: '200k Challenge', passed: 100, failed: 300, rate: 25 },
                        ].map((item) => (
                            <div key={item.plan}>
                                <div className="flex items-center justify-between mb-1">
                                    <span className="text-sm text-text-main font-medium">{item.plan}</span>
                                    <span className="text-xs text-text-muted">{item.rate}% pass rate</span>
                                </div>
                                <div className="h-2 bg-surface-lighter rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-success to-success/70 rounded-full transition-all duration-500"
                                        style={{ width: `${item.rate}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Detailed Table */}
            <div className="glass-panel rounded-2xl overflow-hidden border border-border">
                {/* Table Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 border-b border-border">
                    <div className="flex items-center gap-4">
                        <h3 className="text-lg font-semibold text-text-main">Challenge Details</h3>
                        <div className="flex gap-2">
                            {['all', 'passed', 'failed', 'ongoing'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={cn(
                                        "px-3 py-1 text-xs font-medium rounded-full transition-colors capitalize",
                                        activeTab === tab
                                            ? "bg-primary text-white"
                                            : "bg-surface-lighter text-text-muted hover:text-text-main"
                                    )}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                        <input
                            type="text"
                            placeholder="Search challenges..."
                            className="bg-background border border-border rounded-lg pl-10 pr-4 py-2 text-sm text-text-main focus:outline-none focus:border-primary w-64"
                        />
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-surface/50 text-text-muted text-xs uppercase tracking-wider border-b border-border">
                                <th className="p-4 font-medium">ID</th>
                                <th className="p-4 font-medium">User</th>
                                <th className="p-4 font-medium">Plan</th>
                                <th className="p-4 font-medium">Phase</th>
                                <th className="p-4 font-medium">Status</th>
                                <th className="p-4 font-medium">Profit/Loss</th>
                                <th className="p-4 font-medium">Drawdown</th>
                                <th className="p-4 font-medium">Start Date</th>
                                <th className="p-4 font-medium">End Date</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border text-sm">
                            {filteredChallenges.map((item) => (
                                <tr key={item.id} className="hover:bg-surface/40 transition-colors">
                                    <td className="p-4 text-text-muted">#{item.id}</td>
                                    <td className="p-4">
                                        <div>
                                            <p className="text-text-main font-medium">{item.user}</p>
                                            <p className="text-text-muted text-xs">{item.email}</p>
                                        </div>
                                    </td>
                                    <td className="p-4 text-text-main">{item.plan}</td>
                                    <td className="p-4">
                                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                                            Phase {item.phase}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <span className={cn(
                                            "px-3 py-1 rounded-full text-xs font-medium border flex items-center gap-1 w-fit",
                                            getStatusBadge(item.status)
                                        )}>
                                            {getStatusIcon(item.status)}
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className={cn(
                                        "p-4 font-medium",
                                        item.profit.startsWith('+') ? "text-success" : "text-danger"
                                    )}>
                                        {item.profit}
                                    </td>
                                    <td className={cn(
                                        "p-4",
                                        parseFloat(item.drawdown) > 10 ? "text-danger" : "text-text-main"
                                    )}>
                                        {item.drawdown}
                                    </td>
                                    <td className="p-4 text-text-muted">{item.startDate}</td>
                                    <td className="p-4 text-text-muted">{item.endDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="p-4 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-muted">
                    <div>
                        Showing <span className="font-medium text-text-main">1</span> to <span className="font-medium text-text-main">{filteredChallenges.length}</span> of <span className="font-medium text-text-main">{filteredChallenges.length}</span> entries
                    </div>
                    <div className="flex items-center gap-2">
                        <select className="bg-surface border border-border rounded p-1 text-text-main focus:outline-none focus:border-primary">
                            <option>100</option>
                            <option>50</option>
                            <option>25</option>
                        </select>
                        <div className="flex items-center rounded-lg border border-border overflow-hidden">
                            <button className="p-2 hover:bg-surface transition-colors border-r border-border"><ChevronLeft className="w-4 h-4" /></button>
                            <button className="px-3 py-2 bg-primary text-white font-bold">1</button>
                            <button className="p-2 hover:bg-surface transition-colors border-l border-border"><ChevronRight className="w-4 h-4" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChallengeReports;
