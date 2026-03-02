import React, { useState } from 'react';
import {
    Trophy, Search, RefreshCw, TrendingUp,
    Medal, Star, ChevronRight, Filter
} from 'lucide-react';

function Leaderboard() {
    const [timeframe, setTimeframe] = useState('monthly');

    // Mock Leaderboard Data
    const rankings = [
        { rank: 1, name: 'Arjun S.', country: 'India', profit: '$42,450', gain: '+42.45%', trades: 156, winRate: '72%', status: 'Funded' },
        { rank: 2, name: 'Omar H.', country: 'UAE', profit: '$38,920', gain: '+38.92%', trades: 89, winRate: '68%', status: 'Funded' },
        { rank: 3, name: 'Xiao W.', country: 'China', profit: '$31,100', gain: '+31.10%', trades: 210, winRate: '65%', status: 'Verified' },
        { rank: 4, name: 'Linh N.', country: 'Vietnam', profit: '$28,800', gain: '+28.80%', trades: 142, winRate: '70%', status: 'Verified' },
        { rank: 5, name: 'Sarah J.', country: 'UK', profit: '$25,600', gain: '+25.60%', trades: 95, winRate: '75%', status: 'Funded' },
        { rank: 6, name: 'Manoj P.', country: 'India', profit: '$22,450', gain: '+22.45%', trades: 120, winRate: '63%', status: 'Verified' },
        { rank: 7, name: 'Budi S.', country: 'Indonesia', profit: '$19,800', gain: '+19.80%', trades: 64, winRate: '61%', status: 'Funded' },
        { rank: 8, name: 'Ahmad K.', country: 'Egypt', profit: '$17,250', gain: '+17.25%', trades: 110, winRate: '67%', status: 'Verified' },
    ];

    return (
        <div className="am-page">
            {/* Breadcrumbs */}
            <div className="am-breadcrumbs">
                <span>Community</span>
                <span className="mx-1">/</span>
                <span className="am-breadcrumbs-current">Leaderboard</span>
            </div>

            {/* Page Header */}
            <div className="am-page-title">
                <Trophy size={20} className="text-[#6b7280]" />
                <h1>Leaderboard</h1>
            </div>

            {/* Action Buttons & Tabs */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex gap-4 border-b-0">
                    <button
                        onClick={() => setTimeframe('monthly')}
                        className={`pb-2 text-[13px] font-semibold transition-colors border-b-2 ${timeframe === 'monthly' ? 'text-[#0066ff] border-[#0066ff]' : 'text-[#6b7280] dark:text-[#9ca3af] border-transparent'}`}
                    >
                        Monthly
                    </button>
                    <button
                        onClick={() => setTimeframe('alltime')}
                        className={`pb-2 text-[13px] font-semibold transition-colors border-b-2 ${timeframe === 'alltime' ? 'text-[#0066ff] border-[#0066ff]' : 'text-[#6b7280] dark:text-[#9ca3af] border-transparent'}`}
                    >
                        All Time
                    </button>
                </div>

                <div className="flex gap-3">
                    <button className="am-action-btn">
                        <Filter size={14} /> Filter
                    </button>
                    <button className="am-action-btn">
                        <RefreshCw size={14} /> Refresh
                    </button>
                </div>
            </div>

            {/* Podium Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
                {/* 2nd Place */}
                <div className="am-card flex flex-col items-center pt-10 relative overflow-hidden order-2 md:order-1">
                    <div className="absolute top-4 right-4 text-[#9ca3af] opacity-10"><Medal size={80} /></div>
                    <div className="w-16 h-16 rounded-full bg-[#f3f4f6] dark:bg-[#1a1a1a] border-4 border-[#e5e7eb] dark:border-[#374151] flex items-center justify-center mb-4 text-xl font-bold shadow-sm">2</div>
                    <div className="text-[15px] font-bold text-[#111827] dark:text-[#f3f4f6]">{rankings[1].name}</div>
                    <div className="text-[11px] text-[#6b7280] dark:text-[#9ca3af] mb-4">{rankings[1].country}</div>
                    <div className="text-[18px] font-bold text-[#111827] dark:text-[#f3f4f6]">{rankings[1].profit}</div>
                    <div className="text-[11px] text-[#10b981] font-semibold uppercase tracking-wide">{rankings[1].gain}</div>
                </div>

                {/* 1st Place */}
                <div className="am-card flex flex-col items-center pt-8 pb-10 relative overflow-hidden border-[#fef3c7] dark:border-[#fef3c7]/20 shadow-md scale-105 z-10 order-1 md:order-2">
                    <div className="absolute top-0 inset-x-0 h-1.5 bg-[#f59e0b]"></div>
                    <div className="absolute top-4 right-4 text-[#f59e0b] opacity-10"><Trophy size={90} /></div>
                    <div className="w-20 h-20 rounded-full bg-[#fffbeb] dark:bg-[#3d2d14] border-4 border-[#f59e0b] flex items-center justify-center mb-4 text-2xl font-bold shadow-sm text-[#f59e0b]">1</div>
                    <div className="text-[18px] font-bold text-[#111827] dark:text-[#f3f4f6]">{rankings[0].name}</div>
                    <div className="text-[13px] text-[#6b7280] dark:text-[#9ca3af] mb-6">{rankings[0].country}</div>
                    <div className="text-[24px] font-bold text-[#111827] dark:text-[#f3f4f6]">{rankings[0].profit}</div>
                    <div className="text-[13px] text-[#10b981] font-bold uppercase tracking-wider">{rankings[0].gain}</div>
                    <div className="mt-4 flex gap-1">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} size={12} fill="#f59e0b" className="text-[#f59e0b]" />)}
                    </div>
                </div>

                {/* 3rd Place */}
                <div className="am-card flex flex-col items-center pt-10 relative overflow-hidden order-3 md:order-3">
                    <div className="absolute top-4 right-4 text-[#9ca3af] opacity-10"><Medal size={80} /></div>
                    <div className="w-16 h-16 rounded-full bg-[#f3f4f6] dark:bg-[#1a1a1a] border-4 border-[#d1d5db] dark:border-[#374151] flex items-center justify-center mb-4 text-xl font-bold shadow-sm text-[#92400e]">3</div>
                    <div className="text-[15px] font-bold text-[#111827] dark:text-[#f3f4f6]">{rankings[2].name}</div>
                    <div className="text-[11px] text-[#6b7280] dark:text-[#9ca3af] mb-4">{rankings[2].country}</div>
                    <div className="text-[18px] font-bold text-[#111827] dark:text-[#f3f4f6]">{rankings[2].profit}</div>
                    <div className="text-[11px] text-[#10b981] font-semibold uppercase tracking-wide">{rankings[2].gain}</div>
                </div>
            </div>

            {/* Ranking Table */}
            <div className="am-card">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="m-0 text-[15px] font-semibold">Detailed Rankings</h3>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9ca3af]" size={12} />
                        <input
                            type="text"
                            placeholder="Find trader..."
                            className="pl-8 pr-3 py-1.5 bg-[#f9fafb] dark:bg-[#1a1a1a] border border-[#e5e7eb] dark:border-[#374151] rounded text-[11px] outline-none focus:border-[#0066ff] w-48 shadow-sm"
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="am-table">
                        <thead>
                            <tr>
                                <th className="w-16 text-center">Rank</th>
                                <th>Trader</th>
                                <th className="text-right">Profit</th>
                                <th className="text-right">Gain</th>
                                <th className="text-center">Trades</th>
                                <th className="text-center">Win Rate</th>
                                <th className="text-right">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rankings.map((trader) => (
                                <tr key={trader.rank} className="hover:bg-[#f9fafb] dark:hover:bg-[#1a1a1a] transition-colors cursor-pointer group">
                                    <td className="text-center font-bold text-[#6b7280] dark:text-[#9ca3af]">{trader.rank}</td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded bg-[#f3f4f6] dark:bg-[#1a1a1a] flex items-center justify-center text-[11px] font-bold border border-[#e5e7eb] dark:border-[#374151]">
                                                {trader.name.split(' ')[0][0]}{trader.name.split(' ')[1][0]}
                                            </div>
                                            <div>
                                                <div className="font-semibold text-[#111827] dark:text-[#f3f4f6] group-hover:text-[#0066ff] transition-colors">{trader.name}</div>
                                                <div className="text-[10px] text-[#9ca3af]">{trader.country}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-right font-bold text-[#111827] dark:text-[#f3f4f6]">{trader.profit}</td>
                                    <td className="text-right">
                                        <span className="text-[#10b981] font-semibold text-[13px]">{trader.gain}</span>
                                    </td>
                                    <td className="text-center text-[#6b7280] dark:text-[#9ca3af]">{trader.trades}</td>
                                    <td className="text-center text-[#6b7280] dark:text-[#9ca3af]">{trader.winRate}</td>
                                    <td className="text-right">
                                        <span className={`am-badge ${trader.status === 'Funded' ? 'am-badge-success' : 'am-badge-dark'}`}>
                                            {trader.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-6 pt-4 border-t border-[#f3f4f6] dark:border-[#374151] flex justify-center">
                    <button className="text-[11px] font-bold text-[#0066ff] hover:underline flex items-center gap-1">
                        View Full Rankings <ChevronRight size={12} />
                    </button>
                </div>
            </div>

            {/* Footer */}
            <div className="am-footer">
                <p className="am-footer-copyright">2026 © Copyright - YoPips.com</p>
            </div>
        </div>
    );
}

export default Leaderboard;
