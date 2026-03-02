import React, { useState } from 'react';
import { Wallet, ArrowUpRight, CreditCard, Download, Loader2, Info, ShieldCheck, Zap } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { flexyService } from '../../../services/flexyService';

const PayoutDashboard = ({ walletData, onPayoutRequested }) => {
    const [isPayoutModalOpen, setIsPayoutModalOpen] = useState(false);
    const [amount, setAmount] = useState('');
    const [method, setMethod] = useState('crypto');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const payouts = walletData?.transactions
        ?.filter(t => t.type === 'debit' && t.status !== 'failed')
        ?.sort((a, b) => new Date(a.date) - new Date(b.date)) || [];

    const chartData = payouts.reduce((acc, curr) => {
        const lastTotal = acc.length > 0 ? acc[acc.length - 1].total : 0;
        acc.push({
            date: new Date(curr.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
            amount: curr.amount,
            total: lastTotal + curr.amount
        });
        return acc;
    }, []);

    if (chartData.length === 0) {
        chartData.push({ date: 'Start', total: 0 });
        chartData.push({ date: 'Now', total: 0 });
    }

    const handlePayout = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            await flexyService.requestPayout(walletData.login, amount, method);
            setIsPayoutModalOpen(false);
            setAmount('');
            if (onPayoutRequested) onPayoutRequested();
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-5">
            {/* Chart Card */}
            <div className="bg-white dark:bg-[#141414] rounded-lg p-5 shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-transparent dark:border-[#333]">
                <div className="flex items-center justify-between mb-5">
                    <div>
                        <h3 className="m-0 text-[15px] font-semibold text-[#111827] dark:text-[#f3f4f6]">Total Payouts</h3>
                        <p className="text-xs text-[#6b7280] dark:text-[#9ca3af] mt-1">Cumulative earnings over time</p>
                    </div>
                    <button className="flex items-center gap-2 px-3 py-1.5 border border-[#e5e7eb] dark:border-[#4b5563] bg-white dark:bg-[#1f2937] rounded text-xs cursor-pointer text-[#374151] dark:text-[#e5e7eb] hover:bg-[#f3f4f6] dark:hover:bg-[#374151] transition-all duration-200">
                        <Download size={14} />
                        Tax Documents
                    </button>
                </div>

                <div className="h-[200px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={chartData}>
                            <defs>
                                <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#6b7280" stopOpacity={0.2} />
                                    <stop offset="95%" stopColor="#6b7280" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" opacity={0.3} />
                            <XAxis
                                dataKey="date"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#9CA3AF', fontSize: 10 }}
                                dy={10}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#9CA3AF', fontSize: 10 }}
                                tickFormatter={(value) => `$${value}`}
                            />
                            <Tooltip
                                contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: '#fff', borderRadius: '8px' }}
                                itemStyle={{ color: '#fff' }}
                                formatter={(value) => [`$${value}`, 'Total Payouts']}
                            />
                            <Area
                                type="monotone"
                                dataKey="total"
                                stroke="#6b7280"
                                strokeWidth={2}
                                fillOpacity={1}
                                fill="url(#colorTotal)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Balance Card - Matching Account Metrix Style */}
            <div className="bg-white dark:bg-[#141414] rounded-lg p-5 shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-transparent dark:border-[#333] flex flex-col">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="m-0 text-[15px] font-semibold text-[#111827] dark:text-[#f3f4f6]">Wallet Balance</h3>
                </div>

                <div className="flex flex-col">
                    <div className="flex justify-between py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px]">
                        <span className="text-[#6b7280] dark:text-[#9ca3af]">Available:</span>
                        <span className="font-bold text-[#1a1a1a] dark:text-[#f3f4f6] text-lg">${walletData?.balance?.toFixed(2) || '0.00'}</span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px]">
                        <span className="text-[#6b7280] dark:text-[#9ca3af]">Pending:</span>
                        <span className="font-medium text-[#1a1a1a] dark:text-[#f3f4f6]">
                            ${walletData?.transactions
                                ?.filter(t => t.status === 'pending')
                                .reduce((acc, t) => acc + t.amount, 0).toFixed(2) || '0.00'}
                        </span>
                    </div>
                    <div className="flex justify-between py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px]">
                        <span className="text-[#6b7280] dark:text-[#9ca3af]">Min Payout:</span>
                        <span className="font-medium text-[#1a1a1a] dark:text-[#f3f4f6]">$50.00</span>
                    </div>
                    <div className="flex justify-between py-3 text-[13px]">
                        <span className="text-[#6b7280] dark:text-[#9ca3af]">Status:</span>
                        <span className="bg-[#10b981] text-white px-2 py-0.5 rounded text-[11px] font-semibold">Active</span>
                    </div>
                </div>

                <button
                    onClick={() => setIsPayoutModalOpen(true)}
                    className="mt-auto w-full py-3 bg-[#1d1d1f] dark:bg-white text-white dark:text-[#1d1d1f] font-semibold rounded-lg transition-all flex items-center justify-center gap-2 hover:opacity-90 text-[13px]"
                >
                    Request Payout
                    <ArrowUpRight size={16} />
                </button>
            </div>

            {/* Payout Modal */}
            {isPayoutModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                    <div className="bg-white dark:bg-[#141414] w-full max-w-md rounded-lg p-6 shadow-xl border border-[#e5e7eb] dark:border-[#333]">
                        <div className="flex justify-between items-start mb-5">
                            <div>
                                <h3 className="text-lg font-semibold text-[#111827] dark:text-[#f3f4f6] mb-1">Request Payout</h3>
                                <p className="text-xs text-[#6b7280] dark:text-[#9ca3af]">Withdraw funds from your wallet</p>
                            </div>
                        </div>

                        <form onSubmit={handlePayout} className="space-y-5">
                            <div>
                                <label className="block text-[11px] font-semibold text-[#6b7280] dark:text-[#9ca3af] mb-2 uppercase tracking-wide">Amount</label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6b7280] font-medium">$</span>
                                    <input
                                        type="number"
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                        max={walletData?.balance || 0}
                                        className="w-full pl-7 pr-16 py-3 bg-[#f9fafb] dark:bg-[#262626] border border-[#e5e7eb] dark:border-[#374151] rounded-lg text-[15px] font-medium outline-none text-[#1a1a1a] dark:text-[#f3f4f6] focus:border-[#0066ff] transition-all"
                                        placeholder="0.00"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setAmount(walletData?.balance)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-bold text-[#0066ff] hover:bg-[#f0f7ff] px-2 py-1 rounded transition-colors"
                                    >
                                        MAX
                                    </button>
                                </div>
                                <div className="text-right text-[11px] text-[#9ca3af] mt-1">
                                    Available: ${walletData?.balance?.toFixed(2)}
                                </div>
                            </div>

                            <div>
                                <label className="block text-[11px] font-semibold text-[#6b7280] dark:text-[#9ca3af] mb-2 uppercase tracking-wide">Speed</label>
                                <div className="space-y-2">
                                    <label className="flex items-center p-3 rounded-lg border border-[#0066ff] bg-[#f0f7ff] dark:bg-[#0066ff]/10 cursor-pointer">
                                        <input type="radio" name="speed" className="w-4 h-4 text-[#0066ff] mr-3" defaultChecked />
                                        <div className="flex-1 flex justify-between items-center">
                                            <span className="font-medium text-[13px] text-[#111827] dark:text-[#f3f4f6]">Standard / Same-Day</span>
                                            <span className="bg-[#d1fae5] text-[#10b981] text-[10px] font-bold px-2 py-0.5 rounded">FREE</span>
                                        </div>
                                    </label>
                                    <label className="flex items-center p-3 rounded-lg border border-[#e5e7eb] dark:border-[#374151] bg-[#f9fafb] dark:bg-[#1f2937] cursor-pointer hover:border-[#9ca3af] transition-colors">
                                        <input type="radio" name="speed" className="w-4 h-4 mr-3" />
                                        <div className="flex-1 flex justify-between items-center">
                                            <span className="font-medium text-[13px] text-[#374151] dark:text-[#e5e7eb] flex items-center gap-1">
                                                <Zap size={12} /> Flash Payout
                                            </span>
                                            <span className="text-[10px] font-bold text-[#6b7280]">2% Fee</span>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <div>
                                <label className="block text-[11px] font-semibold text-[#6b7280] dark:text-[#9ca3af] mb-2 uppercase tracking-wide">Method</label>
                                <div className="grid grid-cols-2 gap-3">
                                    <button
                                        type="button"
                                        onClick={() => setMethod('crypto')}
                                        className={`p-3 rounded-lg border flex items-center justify-center gap-2 transition-all text-[13px] font-medium ${method === 'crypto'
                                            ? 'border-[#0066ff] bg-[#f0f7ff] dark:bg-[#0066ff]/10 text-[#0066ff]'
                                            : 'border-[#e5e7eb] dark:border-[#374151] bg-[#f9fafb] dark:bg-[#1f2937] text-[#6b7280]'
                                            }`}
                                    >
                                        <Wallet size={16} /> Crypto
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setMethod('bank')}
                                        className={`p-3 rounded-lg border flex items-center justify-center gap-2 transition-all text-[13px] font-medium ${method === 'bank'
                                            ? 'border-[#0066ff] bg-[#f0f7ff] dark:bg-[#0066ff]/10 text-[#0066ff]'
                                            : 'border-[#e5e7eb] dark:border-[#374151] bg-[#f9fafb] dark:bg-[#1f2937] text-[#6b7280]'
                                            }`}
                                    >
                                        <CreditCard size={16} /> Bank
                                    </button>
                                </div>
                            </div>

                            {error && (
                                <div className="p-3 bg-[#fef2f2] dark:bg-[#7f1d1d]/20 text-[#ef4444] text-[13px] font-medium rounded-lg border border-[#fee2e2] dark:border-[#7f1d1d]/30">
                                    {error}
                                </div>
                            )}

                            <div className="grid grid-cols-2 gap-3 pt-2">
                                <button
                                    type="button"
                                    onClick={() => setIsPayoutModalOpen(false)}
                                    className="py-3 text-[#6b7280] font-medium hover:bg-[#f3f4f6] dark:hover:bg-[#374151] rounded-lg transition-colors text-[13px]"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={loading || !amount || amount <= 0 || amount > walletData?.balance}
                                    className="py-3 bg-[#1d1d1f] dark:bg-white text-white dark:text-[#1d1d1f] font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-all text-[13px]"
                                >
                                    {loading ? <Loader2 className="animate-spin" size={16} /> : 'Confirm'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PayoutDashboard;
