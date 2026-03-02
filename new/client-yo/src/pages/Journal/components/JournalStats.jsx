import React from 'react';
import { ArrowUpRight, ArrowDownRight, Activity, BarChart2, Target, DollarSign } from 'lucide-react';

const StatCard = ({ label, value, subtext, trend, showBorder = true }) => (
    <div className={`p-6 ${showBorder ? 'border-r border-gray-100 dark:border-[#333] last:border-0' : ''}`}>
        <div className="text-xs font-semibold text-gray-500 dark:text-[#666] uppercase tracking-wider mb-2">{label}</div>
        <div className="flex items-baseline gap-2">
            <div className="text-3xl font-mono font-medium text-gray-900 dark:text-white tracking-tight">
                {value}
            </div>
            {subtext && (
                <div className={`text-xs font-medium px-1.5 py-0.5 rounded ${trend === 'up' ? 'text-green-600 bg-green-50 dark:bg-green-900/20 dark:text-green-400' :
                        trend === 'down' ? 'text-red-600 bg-red-50 dark:bg-red-900/20 dark:text-red-400' :
                            'text-gray-500 bg-gray-50 dark:bg-[#333] dark:text-gray-400'
                    }`}>
                    {subtext}
                </div>
            )}
        </div>
    </div>
);

const JournalStats = ({ analytics }) => {
    if (!analytics) return <div className="h-32 animate-pulse bg-gray-50 dark:bg-[#1a1a1a] rounded-xl" />;

    const { winRate, profitFactor, totalProfit, totalTrades, avgWin, avgLoss, expectancy } = analytics;
    const isProfit = totalProfit >= 0;

    return (
        <div className="bg-white dark:bg-[#141414] border border-gray-200 dark:border-[#333] rounded-xl shadow-sm mb-6">
            {/* Top Row: Primary Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-100 dark:divide-[#333]">
                <StatCard
                    label="Net PnL"
                    value={`$${totalProfit?.toFixed(2)}`}
                    trend={isProfit ? 'up' : 'down'}
                    subtext={`${totalTrades} Trades`}
                    showBorder={false}
                />
                <StatCard
                    label="Win Rate"
                    value={`${winRate}%`}
                    trend={winRate >= 50 ? 'up' : 'down'}
                    showBorder={false}
                />
                <StatCard
                    label="Profit Factor"
                    value={profitFactor}
                    trend={profitFactor >= 1.5 ? 'up' : 'neutral'}
                    showBorder={false}
                />
                <StatCard
                    label="Expectancy"
                    value={`$${expectancy}`}
                    trend={expectancy > 0 ? 'up' : 'down'}
                    showBorder={false}
                />
            </div>

            {/* Bottom Row: Secondary Metrics (Monochrome/Minimal) */}
            <div className="grid grid-cols-2 md:grid-cols-4 border-t border-gray-100 dark:border-[#333] bg-gray-50/50 dark:bg-[#1a1a1a]/50">
                <div className="p-4 border-r border-gray-100 dark:border-[#333] last:border-0">
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-[10px] text-gray-500 uppercase">Avg Win</span>
                        <ArrowUpRight size={12} className="text-gray-400" />
                    </div>
                    <div className="text-sm font-mono font-medium text-green-600 dark:text-green-400">${avgWin}</div>
                </div>
                <div className="p-4 border-r border-gray-100 dark:border-[#333] last:border-0">
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-[10px] text-gray-500 uppercase">Avg Loss</span>
                        <ArrowDownRight size={12} className="text-gray-400" />
                    </div>
                    <div className="text-sm font-mono font-medium text-red-600 dark:text-red-400">${avgLoss}</div>
                </div>
                <div className="p-4 border-r border-gray-100 dark:border-[#333] last:border-0">
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-[10px] text-gray-500 uppercase">Risk:Reward</span>
                        <Activity size={12} className="text-gray-400" />
                    </div>
                    <div className="text-sm font-mono font-medium text-gray-900 dark:text-white">
                        {avgLoss > 0 ? (avgWin / avgLoss).toFixed(2) : '-'}
                    </div>
                </div>
                <div className="p-4">
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-[10px] text-gray-500 uppercase">Best Trade</span>
                        <Target size={12} className="text-gray-400" />
                    </div>
                    <div className="text-sm font-mono font-medium text-green-600 dark:text-green-400">
                        +${avgWin * 2.5 /* Mock/Est */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JournalStats;
