import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

function PayoutCalculator() {
    const [balance, setBalance] = useState(100000);
    const [profitPercent, setProfitPercent] = useState(5);
    const [plan, setPlan] = useState('evolution');

    const getSplit = (p) => {
        if (p === 'express') return 0.80;
        if (p === 'evolution') return 0.85;
        if (p === 'instant') return 0.70; // conservative base
        return 0.80;
    };

    const profitAmount = balance * (profitPercent / 100);
    const split = getSplit(plan);
    const yourPayout = profitAmount * split;

    return (
        <div className="bg-white dark:bg-[#1f2937] rounded-xl border border-gray-100 dark:border-[#374151] p-6 h-full">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Calculator className="text-blue-500" size={20} />
                Payout Calculator
            </h3>

            <div className="space-y-4 mb-6">
                <div>
                    <label className="text-xs font-semibold text-gray-500 mb-1 block">Plan</label>
                    <div className="flex bg-gray-100 dark:bg-[#262626] p-1 rounded-lg">
                        {['express', 'evolution', 'instant'].map(p => (
                            <button
                                key={p}
                                onClick={() => setPlan(p)}
                                className={`flex-1 text-xs font-bold py-1.5 rounded-md capitalize transition-all ${plan === p ? 'bg-white dark:bg-[#374151] text-blue-600 shadow-sm' : 'text-gray-500'
                                    }`}
                            >
                                {p}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="text-xs font-semibold text-gray-500 mb-1 block">Account Balance: ${balance.toLocaleString()}</label>
                    <input
                        type="range" min="5000" max="200000" step="5000"
                        value={balance} onChange={(e) => setBalance(Number(e.target.value))}
                        className="w-full accent-blue-600 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                </div>

                <div>
                    <label className="text-xs font-semibold text-gray-500 mb-1 block">Monthly Profit: {profitPercent}% (${profitAmount.toLocaleString()})</label>
                    <input
                        type="range" min="1" max="20" step="0.5"
                        value={profitPercent} onChange={(e) => setProfitPercent(Number(e.target.value))}
                        className="w-full accent-green-500 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                </div>
            </div>

            <div className="bg-blue-600 rounded-xl p-4 text-white text-center shadow-lg shadow-blue-500/30">
                <div className="text-xs font-medium opacity-80 mb-1">Your Estimated Payout</div>
                <div className="text-2xl font-bold">${yourPayout.toLocaleString(undefined, { maximumFractionDigits: 0 })}</div>
                <div className="text-[10px] opacity-60 mt-1">Based on {(split * 100)}% profit split</div>
            </div>
        </div>
    );
}

export default PayoutCalculator;
