import React, { useState } from 'react';
import { Calendar, Clock, BarChart2 } from 'lucide-react';

const PerformanceStats = ({ data }) => {
    const [activeTab, setActiveTab] = useState('time');

    if (!data) return null;

    const { time_analysis, symbol_analysis, streaks, summary } = data;
    const { hours, days, sessions } = time_analysis;

    const getMaxProfit = (arr) => Math.max(...arr.map(x => Math.abs(x.profit)), 1);
    const maxHourProfit = getMaxProfit(hours);

    // Subtle Monochrome Heatmap
    const getHeatmapStyle = (profit, max) => {
        if (!profit || Math.abs(profit) < 0.01) return { background: 'transparent' };

        const intensity = Math.min(Math.abs(profit) / max, 1);
        const isProfit = profit > 0;

        // Professional Monochrome/Subtle Scale
        // Profit: Darker gray/black (or subtle green in light mode)
        // Loss: Lighter gray or subtle red

        // Let's stick to a very subtle professional color hint
        // Light Mode: Green = emerald-500 at low opacity, Red = rose-500 at low opacity
        // Dark Mode: Green = emerald-400 at low opacity, Red = rose-400 at low opacity

        const color = isProfit ? '16, 185, 129' : '244, 63, 94'; // Emerald / Rose
        return {
            backgroundColor: `rgba(${color}, ${intensity * 0.2 + 0.05})`, // Very subtle background
            borderColor: `rgba(${color}, ${intensity * 0.5})`,
            color: isProfit ? '#047857' : '#be123c' // Text color stronger
        };
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">

            {/* Left Column: Streaks & Net Stats (Compact List) */}
            <div className="bg-white dark:bg-[#141414] border border-gray-200 dark:border-[#333] rounded-xl p-0 overflow-hidden h-fit">
                <div className="px-5 py-3 border-b border-gray-100 dark:border-[#333] bg-gray-50/50 dark:bg-[#1a1a1a]">
                    <h3 className="text-xs font-bold text-gray-500 dark:text-[#888] uppercase tracking-wider">Performance Metrics</h3>
                </div>
                <div className="divide-y divide-gray-100 dark:divide-[#333]">
                    <div className="flex justify-between items-center px-5 py-4">
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Current Streak</span>
                        <span className={`font-mono font-bold ${streaks.current_win > 0 ? 'text-green-600' : 'text-red-500'}`}>
                            {streaks.current_win > 0 ? `W${streaks.current_win}` : `L${Math.abs(streaks.current_loss)}`}
                        </span>
                    </div>
                    <div className="flex justify-between items-center px-5 py-4">
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Longest Win Run</span>
                        <span className="font-mono font-medium text-gray-900 dark:text-white">{streaks.max_win}</span>
                    </div>
                    <div className="flex justify-between items-center px-5 py-4">
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Longest Drawdown</span>
                        <span className="font-mono font-medium text-gray-900 dark:text-white">{streaks.max_loss}</span>
                    </div>
                    <div className="flex justify-between items-center px-5 py-4">
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Net Profit</span>
                        <span className={`font-mono font-bold ${summary.net_profit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {summary.net_profit >= 0 ? '+' : ''}${summary.net_profit.toFixed(2)}
                        </span>
                    </div>
                </div>
            </div>

            {/* Middle Column: Hourly Analysis (Clean Grid) */}
            <div className="bg-white dark:bg-[#141414] border border-gray-200 dark:border-[#333] rounded-xl p-5 lg:col-span-2">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <Clock size={14} className="text-gray-400" /> Hourly PnL
                    </h3>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest">UTC Time</div>
                </div>

                <div className="grid grid-cols-6 sm:grid-cols-12 gap-1">
                    {hours.map((h) => {
                        const style = getHeatmapStyle(h.profit, maxHourProfit);
                        return (
                            <div
                                key={h.hour}
                                className="aspect-square flex flex-col items-center justify-center border border-transparent rounded-[2px] cursor-default group relative"
                                style={style}
                            >
                                <span className="text-[10px] font-medium text-gray-400 dark:text-[#555] group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                                    {h.hour}
                                </span>

                                {/* Minimal Tooltip */}
                                <div className="absolute bottom-full mb-1 hidden group-hover:flex flex-col bg-gray-900 text-white text-[10px] p-2 rounded shadow-xl z-20 whitespace-nowrap">
                                    <span className="font-bold mb-0.5">{h.hour}:00 - {h.hour}:59</span>
                                    <span>PnL: ${h.profit.toFixed(2)}</span>
                                    <span className="text-gray-400">{h.wins}/{h.trades} Trades</span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Session Pill-bars */}
                <div className="flex gap-4 mt-6 pt-4 border-t border-gray-100 dark:border-[#333]">
                    <SessionStat name="Asian" stats={sessions.asian} />
                    <SessionStat name="London" stats={sessions.london} />
                    <SessionStat name="New York" stats={sessions.ny} />
                </div>
            </div>

            {/* Bottom Row: Symbol Performance (Table) */}
            <div className="lg:col-span-3 bg-white dark:bg-[#141414] border border-gray-200 dark:border-[#333] rounded-xl overflow-hidden">
                <div className="px-5 py-3 border-b border-gray-100 dark:border-[#333] flex justify-between items-center bg-gray-50/50 dark:bg-[#1a1a1a]">
                    <h3 className="text-xs font-bold text-gray-500 dark:text-[#888] uppercase tracking-wider">Symbol Performance</h3>
                    <span className="text-[10px] text-gray-400">Top 5 by Vol</span>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="text-[10px] uppercase text-gray-500 bg-gray-50 dark:bg-[#222]">
                            <tr>
                                <th className="px-5 py-2 font-medium">Symbol</th>
                                <th className="px-5 py-2 font-medium text-right">Net PnL</th>
                                <th className="px-5 py-2 font-medium text-right">Volume</th>
                                <th className="px-5 py-2 font-medium text-right">Trades</th>
                                <th className="px-5 py-2 font-medium text-right">Win Rate</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-[#333]">
                            {symbol_analysis.slice(0, 5).map((sym) => (
                                <tr key={sym.symbol} className="hover:bg-gray-50 dark:hover:bg-[#1a1a1a] transition-colors">
                                    <td className="px-5 py-3 font-mono text-gray-900 dark:text-white">{sym.symbol}</td>
                                    <td className={`px-5 py-3 text-right font-mono font-medium ${sym.profit >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                                        {sym.profit >= 0 ? '+' : ''}${sym.profit.toFixed(2)}
                                    </td>
                                    <td className="px-5 py-3 text-right text-gray-500 dark:text-[#888]">{sym.volume.toFixed(2)}</td>
                                    <td className="px-5 py-3 text-right text-gray-500 dark:text-[#888]">{sym.trades}</td>
                                    <td className="px-5 py-3 text-right">
                                        <span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-bold bg-gray-100 dark:bg-[#333] text-gray-700 dark:text-[#ccc]">
                                            {Math.round((sym.wins / sym.trades) * 100)}%
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

const SessionStat = ({ name, stats }) => (
    <div className="flex-1 flex flex-col">
        <span className="text-[10px] text-gray-400 uppercase mb-1">{name}</span>
        <div className="flex items-baseline justify-between mb-1">
            <span className={`text-sm font-mono font-bold ${stats.profit >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                ${stats.profit.toFixed(0)}
            </span>
        </div>
        <div className="w-full h-1 bg-gray-100 dark:bg-[#333] rounded-full overflow-hidden">
            <div
                className={`h-full ${stats.profit >= 0 ? 'bg-green-500' : 'bg-red-500'}`}
                style={{ width: `${Math.min((Math.abs(stats.profit) / 1000) * 100, 100)}%` }} // Normalized width
            />
        </div>
    </div>
);

export default PerformanceStats;
