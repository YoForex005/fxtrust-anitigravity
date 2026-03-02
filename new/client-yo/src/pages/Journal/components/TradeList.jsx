import React, { useState, useMemo } from 'react';
import { Edit2, ArrowUpRight, ArrowDownRight, Search, Filter, Calendar, Download, ChevronDown, AlignJustify } from 'lucide-react';

const TradeList = ({ trades, onEdit }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filterType, setFilterType] = useState('all'); // all, wins, losses

    // Filter logic (simplified for brevity, assume similar to before but cleaner UI)
    const filteredTrades = useMemo(() => {
        let result = [...(trades || [])];
        if (searchQuery) {
            result = result.filter(t => t.Symbol?.toLowerCase().includes(searchQuery.toLowerCase()));
        }
        if (filterType === 'wins') result = result.filter(t => parseFloat(t.Profit) >= 0);
        if (filterType === 'losses') result = result.filter(t => parseFloat(t.Profit) < 0);
        return result.sort((a, b) => new Date(b.Time) - new Date(a.Time));
    }, [trades, searchQuery, filterType]);

    if (!trades || trades.length === 0) return null;

    return (
        <div className="bg-white dark:bg-[#141414] border border-gray-200 dark:border-[#333] rounded-xl overflow-hidden">
            {/* Professional Toolbar */}
            <div className="px-5 py-3 border-b border-gray-200 dark:border-[#333] flex flex-col md:flex-row items-center justify-between gap-4 bg-gray-50/50 dark:bg-[#1a1a1a]">
                <div className="flex items-center gap-3 w-full md:w-auto">
                    <div className="relative">
                        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-9 pr-3 py-1.5 text-sm bg-white dark:bg-[#111] border border-gray-200 dark:border-[#444] rounded-md focus:outline-none focus:border-gray-400 transition-colors w-64"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <span className="text-[10px] text-gray-500 uppercase font-bold mr-2">View:</span>
                    {['all', 'wins', 'losses'].map(type => (
                        <button
                            key={type}
                            onClick={() => setFilterType(type)}
                            className={`px-3 py-1 text-xs font-medium rounded border uppercase tracking-wide transition-all ${filterType === type
                                    ? 'bg-gray-900 dark:bg-white text-white dark:text-black border-gray-900 dark:border-white'
                                    : 'bg-transparent text-gray-500 border-transparent hover:bg-gray-100 dark:hover:bg-[#222]'
                                }`}
                        >
                            {type}
                        </button>
                    ))}
                </div>
            </div>

            {/* Dense Data Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm">
                    <thead>
                        <tr className="border-b border-gray-200 dark:border-[#333] text-[10px] uppercase text-gray-500 bg-gray-50 dark:bg-[#1a1a1a]">
                            <th className="px-5 py-2 font-medium w-32">Date</th>
                            <th className="px-5 py-2 font-medium">Symbol</th>
                            <th className="px-5 py-2 font-medium">Side</th>
                            <th className="px-5 py-2 font-medium">Vol</th>
                            <th className="px-5 py-2 font-medium text-right">PnL</th>
                            <th className="px-5 py-2 font-medium">Strategy</th>
                            <th className="px-5 py-2 font-medium">Mood</th>
                            <th className="px-5 py-2 font-medium text-right w-16">Edit</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-[#333]">
                        {filteredTrades.map((trade) => {
                            const isWin = parseFloat(trade.Profit) >= 0;
                            const type = trade.Type === '0' ? 'BUY' : 'SELL';

                            return (
                                <tr key={trade.Ticket} className="hover:bg-gray-50 dark:hover:bg-[#1a1a1a] transition-colors group">
                                    <td className="px-5 py-2 text-gray-500 font-mono text-xs">
                                        {(() => {
                                            const date = new Date(parseInt(trade.Time) * 1000);
                                            return !isNaN(date.getTime()) ? (
                                                <>
                                                    {date.toLocaleDateString('en-CA')} <span className="opacity-50">{date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                                </>
                                            ) : (
                                                <span>-</span>
                                            );
                                        })()}
                                    </td>
                                    <td className="px-5 py-2 font-bold text-gray-900 dark:text-white font-mono text-xs">
                                        {trade.Symbol}
                                    </td>
                                    <td className="px-5 py-2">
                                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ${type === 'BUY'
                                                ? 'text-blue-600 border-blue-200 bg-blue-50 dark:bg-blue-900/10 dark:text-blue-400 dark:border-blue-900/30'
                                                : 'text-orange-600 border-orange-200 bg-orange-50 dark:bg-orange-900/10 dark:text-orange-400 dark:border-orange-900/30'
                                            }`}>
                                            {type}
                                        </span>
                                    </td>
                                    <td className="px-5 py-2 text-gray-600 dark:text-gray-400 font-mono text-xs">
                                        {trade.Volume}
                                    </td>
                                    <td className={`px-5 py-2 text-right font-mono font-medium ${isWin ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                                        {isWin ? '+' : ''}{parseFloat(trade.Profit).toFixed(2)}
                                    </td>
                                    <td className="px-5 py-2 text-xs text-gray-500 font-medium">
                                        {trade.strategy || '-'}
                                    </td>
                                    <td className="px-5 py-2 text-xs text-gray-500">
                                        {trade.mood && (
                                            <span className="capitalize px-1.5 py-0.5 bg-gray-100 dark:bg-[#222] rounded text-[10px]">
                                                {trade.mood}
                                            </span>
                                        )}
                                    </td>
                                    <td className="px-5 py-2 text-right">
                                        <button
                                            onClick={() => onEdit(trade)}
                                            className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-200 dark:hover:bg-[#333] rounded text-gray-500 transition-all"
                                        >
                                            <Edit2 size={12} />
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TradeList;
