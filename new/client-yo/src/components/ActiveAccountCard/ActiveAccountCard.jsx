import React from 'react';
import { Key, Briefcase, ChevronRight, Info } from 'lucide-react';

function ActiveAccountCard({ account }) {
    if (!account) return null;

    const todayProfitValue = parseFloat(account.todayProfit || 0);
    const unrealizedPnLValue = parseFloat(account.unrealizedPnL || 0);
    const isProfit = todayProfitValue > 0;
    const isUnrealizedProfit = unrealizedPnLValue > 0;

    return (
        <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
                <h2 className="text-sm font-bold flex items-center gap-2 text-[#1e293b] dark:text-white m-0">Active accounts</h2>
                <div className="flex items-center gap-2 text-xs text-[#a0a0a0] font-semibold">
                    <span>Show only visible</span>
                    <div className="w-8 h-[18px] bg-[#e2e8f0] dark:bg-[#333] rounded-[20px] relative cursor-pointer">
                        <div className="w-3.5 h-3.5 bg-white rounded-full absolute top-[2px] right-[2px]"></div>
                    </div>
                </div>
            </div>

            <div className="p-6 rounded-lg bg-white dark:bg-[#141414] border border-[#e5e7eb] dark:border-[#333] shadow-sm">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <div className="flex gap-2 mb-3">
                            <span className="px-2.5 py-0.5 rounded-xl text-[11px] font-extrabold capitalize bg-gray-100 dark:bg-[#262626] text-gray-600 dark:text-gray-400">Ongoing</span>
                            <span className="px-2.5 py-0.5 rounded-xl text-[11px] font-extrabold capitalize bg-gray-100 dark:bg-[#262626] text-gray-500 dark:text-gray-400">Free trial</span>
                        </div>
                        <div className="text-sm font-medium text-[#64748b]">
                            Login: <span className="font-extrabold text-[#1e293b] dark:text-white">{account.login}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-5">
                        <div className="flex items-center gap-3 text-[13px] text-[#a0a0a0] font-semibold">
                            <span>Visible</span>
                            <div className="w-9 h-5 bg-gray-400 dark:bg-gray-600 rounded-full relative cursor-pointer">
                                <div className="w-4 h-4 bg-white rounded-full absolute top-[2px] right-[2px]"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex gap-8 mb-6">
                    <div className="flex gap-1.5 items-baseline">
                        <span className="text-[13px] text-[#64748b] font-medium">Balance:</span>
                        <span className="text-sm font-extrabold text-[#1e293b] dark:text-white">${parseFloat(account.balance || 199999.97).toLocaleString()}</span>
                    </div>
                    <div className="flex gap-1.5 items-baseline">
                        <span className="text-[13px] text-[#64748b] font-medium">End:</span>
                        <span className="text-sm font-extrabold text-[#1e293b] dark:text-white">{account.endDate || '21 Jan 2026'}</span>
                    </div>
                    <div className="flex gap-1.5 items-baseline">
                        <span className="text-[13px] text-[#64748b] font-medium">Status:</span>
                        <span className="text-sm font-extrabold text-gray-700 dark:text-gray-300">{account.status || 'Active'}</span>
                    </div>
                </div>

                <div className="flex items-center gap-4 mb-6">
                    <div className="flex-1 h-1 bg-[#f1f5f9] dark:bg-[#333] rounded-sm">
                        <div className="h-full bg-gray-400 dark:bg-gray-600 rounded-sm" style={{ width: '45%' }}></div>
                    </div>

                    <div className="flex gap-2.5">
                        <button className="flex items-center gap-2 p-2 px-3 border border-[#e5e7eb] dark:border-[#333] rounded-md text-[13px] font-bold bg-white dark:bg-[#1f1f1f] text-[#1e293b] dark:text-white cursor-pointer hover:bg-[#f8fafc] dark:hover:bg-[#2d2d2d]">
                            <Key size={14} />
                            <span>Credentials</span>
                        </button>
                        <button className="flex items-center gap-2 p-2 px-3 border border-[#e5e7eb] dark:border-[#333] rounded-md text-[13px] font-bold bg-white dark:bg-[#1f1f1f] text-[#1e293b] dark:text-white cursor-pointer hover:bg-[#f8fafc] dark:hover:bg-[#2d2d2d]">
                            <Briefcase size={14} />
                            <span>Account Metrix</span>
                        </button>
                    </div>

                    <button className="ml-auto bg-white dark:bg-[#1f1f1f] border border-[#e5e7eb] dark:border-[#333] p-2 px-4 rounded-md text-[13px] font-bold flex items-center gap-1 cursor-pointer hover:bg-[#f8fafc] dark:hover:bg-[#2d2d2d] text-[#1e293b] dark:text-white">
                        <span>Detail</span>
                        <ChevronRight size={16} />
                    </button>
                </div>

                <div className="grid grid-cols-3 gap-3">
                    {/* Today's Profit - Monochrome background, colored text only */}
                    <div className="p-4 rounded text-center flex flex-col gap-2 bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#262626]">
                        <div className="text-[11px] font-bold text-gray-500 dark:text-gray-400 flex items-center justify-center gap-1 uppercase tracking-wide">
                            <span>Today's Profit</span>
                            <Info size={12} />
                        </div>
                        <div className={`text-lg font-extrabold ${todayProfitValue === 0 ? 'text-gray-600 dark:text-gray-400' : isProfit ? 'text-[#10b981]' : 'text-[#ef4444]'}`}>
                            {todayProfitValue === 0 ? '$0.00' : `${isProfit ? '+' : ''}$${Math.abs(todayProfitValue).toFixed(2)}`}
                        </div>
                    </div>

                    {/* Equity - Monochrome background, neutral text */}
                    <div className="p-4 rounded text-center flex flex-col gap-2 bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#262626]">
                        <div className="text-[11px] font-bold text-gray-500 dark:text-gray-400 flex items-center justify-center gap-1 uppercase tracking-wide">
                            <span>Equity</span>
                            <Info size={12} />
                        </div>
                        <div className="text-lg font-extrabold text-gray-800 dark:text-white">
                            ${parseFloat(account.equity || 50000).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                        </div>
                    </div>

                    {/* Unrealized PnL - Monochrome background, colored text only */}
                    <div className="p-4 rounded text-center flex flex-col gap-2 bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#262626]">
                        <div className="text-[11px] font-bold text-gray-500 dark:text-gray-400 flex items-center justify-center gap-1 uppercase tracking-wide">
                            <span>Unrealized PnL</span>
                            <Info size={12} />
                        </div>
                        <div className={`text-lg font-extrabold ${unrealizedPnLValue === 0 ? 'text-gray-600 dark:text-gray-400' : isUnrealizedProfit ? 'text-[#10b981]' : 'text-[#ef4444]'}`}>
                            {unrealizedPnLValue === 0 ? '$0.00' : `${isUnrealizedProfit ? '+' : ''}$${Math.abs(unrealizedPnLValue).toFixed(2)}`}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ActiveAccountCard;
