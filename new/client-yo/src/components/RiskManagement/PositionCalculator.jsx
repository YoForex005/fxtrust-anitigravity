import React, { useState, useEffect } from 'react';
import { Calculator, ChevronDown, DollarSign, Target, TrendingUp } from 'lucide-react';

const PositionCalculator = ({ balance, riskPercent = 1 }) => {
    const [risk, setRisk] = useState(riskPercent);
    const [stopLoss, setStopLoss] = useState(20);
    const [takeProfit, setTakeProfit] = useState(40);
    const [pair, setPair] = useState('EURUSD');
    const [accountCurrency, setAccountCurrency] = useState('USD');
    const [lotSize, setLotSize] = useState(0);
    const [riskAmount, setRiskAmount] = useState(0);
    const [potentialProfit, setPotentialProfit] = useState(0);
    const [riskReward, setRiskReward] = useState(0);

    const pairs = [
        { value: 'EURUSD', label: 'EUR/USD', pipValue: 10 },
        { value: 'GBPUSD', label: 'GBP/USD', pipValue: 10 },
        { value: 'USDJPY', label: 'USD/JPY', pipValue: 9.1 },
        { value: 'XAUUSD', label: 'XAU/USD (Gold)', pipValue: 10 },
        { value: 'BTCUSD', label: 'BTC/USD', pipValue: 1 },
    ];

    useEffect(() => {
        const currentPair = pairs.find(p => p.value === pair) || pairs[0];
        const calculatedRiskAmount = (balance * (risk / 100));
        setRiskAmount(calculatedRiskAmount);

        const lots = calculatedRiskAmount / (stopLoss * currentPair.pipValue);
        setLotSize(isFinite(lots) && lots > 0 ? lots : 0);

        const profit = lots * takeProfit * currentPair.pipValue;
        setPotentialProfit(isFinite(profit) ? profit : 0);

        const rr = takeProfit / stopLoss;
        setRiskReward(isFinite(rr) ? rr : 0);
    }, [balance, risk, stopLoss, takeProfit, pair]);

    const presetRisks = [0.5, 1, 2, 3];

    return (
        <div className="bg-white dark:bg-gradient-to-br dark:from-[#1a1a1a] dark:to-[#0f0f0f] rounded-xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-lg border border-transparent dark:border-[#2a2a2a] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0066ff] to-[#0052cc] flex items-center justify-center shadow-lg">
                        <Calculator size={20} className="text-white" />
                    </div>
                    <div>
                        <h3 className="m-0 text-[15px] font-bold text-[#111827] dark:text-[#f3f4f6]">Position Calculator</h3>
                        <p className="text-[11px] text-[#6b7280] dark:text-[#9ca3af]">Calculate optimal lot size</p>
                    </div>
                </div>
                <div className="text-right">
                    <span className="text-[10px] text-[#6b7280] dark:text-[#9ca3af]">Account Balance</span>
                    <p className="text-sm font-bold text-[#111827] dark:text-[#f3f4f6]">${balance?.toLocaleString()}</p>
                </div>
            </div>

            {/* Pair Selector */}
            <div className="mb-5">
                <label className="block text-[11px] font-semibold text-[#6b7280] dark:text-[#9ca3af] mb-2 uppercase tracking-wider">Trading Pair</label>
                <div className="relative">
                    <select
                        value={pair}
                        onChange={(e) => setPair(e.target.value)}
                        className="w-full px-4 py-3 bg-[#f9fafb] dark:bg-[#262626] border border-[#e5e7eb] dark:border-[#374151] rounded-xl text-[13px] font-semibold text-[#1a1a1a] dark:text-[#f3f4f6] appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0066ff]/20 focus:border-[#0066ff] transition-all hover:bg-[#f3f4f6] dark:hover:bg-[#333]"
                    >
                        {pairs.map(p => (
                            <option key={p.value} value={p.value}>{p.label}</option>
                        ))}
                    </select>
                    <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9ca3af] pointer-events-none" />
                </div>
            </div>

            {/* Risk Presets */}
            <div className="mb-5">
                <label className="block text-[11px] font-medium text-[#6b7280] dark:text-[#9ca3af] mb-2">Risk Percentage</label>
                <div className="flex gap-2 mb-3">
                    {presetRisks.map(r => (
                        <button
                            key={r}
                            onClick={() => setRisk(r)}
                            className={`flex-1 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${risk === r
                                ? 'bg-[#0066ff] text-white shadow-lg shadow-[#0066ff]/25'
                                : 'bg-[#f3f4f6] dark:bg-[#262626] text-[#6b7280] dark:text-[#9ca3af] hover:bg-[#e5e7eb] dark:hover:bg-[#374151]'
                                }`}
                        >
                            {r}%
                        </button>
                    ))}
                </div>
                <input
                    type="range"
                    min="0.1"
                    max="5"
                    step="0.1"
                    value={risk}
                    onChange={(e) => setRisk(parseFloat(e.target.value))}
                    className="w-full h-2 bg-[#e5e7eb] dark:bg-[#374151] rounded-full appearance-none cursor-pointer accent-[#0066ff]"
                />
                <div className="flex justify-between mt-1 text-[10px] text-[#9ca3af]">
                    <span>Conservative</span>
                    <span className="font-bold text-[#0066ff]">{risk.toFixed(1)}%</span>
                    <span>Aggressive</span>
                </div>
            </div>

            {/* SL/TP Inputs */}
            <div className="grid grid-cols-2 gap-4 mb-5">
                <div>
                    <label className="block text-[11px] font-medium text-[#6b7280] dark:text-[#9ca3af] mb-2">Stop Loss (Pips)</label>
                    <div className="relative">
                        <input
                            type="number"
                            value={stopLoss}
                            onChange={(e) => setStopLoss(parseFloat(e.target.value) || 0)}
                            className="w-full px-4 py-3 bg-white dark:bg-[#262626] border border-[#e5e7eb] dark:border-[#374151] rounded-lg text-[13px] font-medium text-[#1a1a1a] dark:text-[#f3f4f6] focus:outline-none focus:ring-2 focus:ring-[#ef4444]/20 focus:border-[#ef4444] transition-all"
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#ef4444]" />
                    </div>
                </div>
                <div>
                    <label className="block text-[11px] font-medium text-[#6b7280] dark:text-[#9ca3af] mb-2">Take Profit (Pips)</label>
                    <div className="relative">
                        <input
                            type="number"
                            value={takeProfit}
                            onChange={(e) => setTakeProfit(parseFloat(e.target.value) || 0)}
                            className="w-full px-4 py-3 bg-white dark:bg-[#262626] border border-[#e5e7eb] dark:border-[#374151] rounded-lg text-[13px] font-medium text-[#1a1a1a] dark:text-[#f3f4f6] focus:outline-none focus:ring-2 focus:ring-[#10b981]/20 focus:border-[#10b981] transition-all"
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#10b981]" />
                    </div>
                </div>
            </div>

            {/* Results */}
            <div className="bg-gradient-to-r from-[#0066ff]/5 to-[#10b981]/5 dark:from-[#0066ff]/10 dark:to-[#10b981]/10 rounded-xl p-4 border border-[#0066ff]/10 dark:border-[#0066ff]/20">
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-3 bg-white/50 dark:bg-[#1a1a1a]/50 rounded-lg">
                        <div className="flex items-center justify-center gap-1 mb-1">
                            <DollarSign size={12} className="text-[#ef4444]" />
                            <span className="text-[10px] text-[#6b7280] dark:text-[#9ca3af]">Risk Amount</span>
                        </div>
                        <span className="text-lg font-bold text-[#ef4444]">${riskAmount.toFixed(2)}</span>
                    </div>
                    <div className="text-center p-3 bg-white/50 dark:bg-[#1a1a1a]/50 rounded-lg">
                        <div className="flex items-center justify-center gap-1 mb-1">
                            <TrendingUp size={12} className="text-[#10b981]" />
                            <span className="text-[10px] text-[#6b7280] dark:text-[#9ca3af]">Potential Profit</span>
                        </div>
                        <span className="text-lg font-bold text-[#10b981]">${potentialProfit.toFixed(2)}</span>
                    </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-[#0066ff]/10 dark:bg-[#0066ff]/20 rounded-lg">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-[#0066ff] flex items-center justify-center">
                            <Target size={16} className="text-white" />
                        </div>
                        <div>
                            <span className="text-[10px] text-[#6b7280] dark:text-[#9ca3af] block">Recommended Lot Size</span>
                            <span className="text-xl font-black text-[#0066ff]">{lotSize.toFixed(2)}</span>
                        </div>
                    </div>
                    <div className="text-right">
                        <span className="text-[10px] text-[#6b7280] dark:text-[#9ca3af] block">Risk:Reward</span>
                        <span className={`text-lg font-bold ${riskReward >= 2 ? 'text-[#10b981]' : riskReward >= 1 ? 'text-[#f59e0b]' : 'text-[#ef4444]'}`}>
                            1:{riskReward.toFixed(1)}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PositionCalculator;
