import React, { useState } from 'react';
import { Info } from 'lucide-react';

function SavingsCalculator() {
    const [size, setSize] = useState(50000);

    const marketRates = {
        2000: { market: 25, yopips: 19 },
        5000: { market: 40, yopips: 29 },
        10000: { market: 70, yopips: 49 },
        15000: { market: 105, yopips: 69 },
        25000: { market: 150, yopips: 99 },
        50000: { market: 280, yopips: 169 },
        100000: { market: 540, yopips: 329 },
        200000: { market: 995, yopips: 599 }
    };

    const current = marketRates[size] || marketRates[50000];
    const savings = current.market - current.yopips;
    const savingsPercent = Math.round((savings / current.market) * 100);

    return (
        <div className="bg-white dark:bg-[#141414] rounded-lg p-5 shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-transparent dark:border-[#333] h-full">
            <h3 className="m-0 mb-4 text-[15px] font-semibold text-[#111827] dark:text-[#f3f4f6]">Price Comparison</h3>

            <div className="mb-5">
                <div className="text-[11px] text-[#6b7280] dark:text-[#9ca3af] mb-2 flex items-center gap-1">Select Account Size <Info size={12} /></div>
                <select
                    value={size}
                    onChange={(e) => setSize(Number(e.target.value))}
                    className="w-full bg-[#f9fafb] dark:bg-[#262626] border border-[#e5e7eb] dark:border-[#374151] rounded-lg px-4 py-3 text-[13px] font-medium outline-none focus:border-[#0066ff] transition-colors text-[#1a1a1a] dark:text-[#f3f4f6]"
                >
                    {Object.keys(marketRates).map(s => <option key={s} value={s}>${Number(s).toLocaleString()}</option>)}
                </select>
            </div>

            <div className="flex flex-col">
                <div className="flex justify-between py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px]">
                    <span className="text-[#6b7280] dark:text-[#9ca3af]">Avg. Market Rate</span>
                    <span className="font-medium text-[#9ca3af] line-through">${current.market}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px]">
                    <span className="text-[#6b7280] dark:text-[#9ca3af]">Yo Pips Price</span>
                    <span className="font-bold text-[#10b981]">${current.yopips}</span>
                </div>
                <div className="flex justify-between py-3 text-[13px]">
                    <span className="text-[#6b7280] dark:text-[#9ca3af]">You Save</span>
                    <span className="font-bold text-[#10b981] flex items-center gap-2">
                        ${savings}
                        <span className="bg-[#d1fae5] dark:bg-[#064e3b] px-1.5 py-0.5 rounded text-[10px]">-{savingsPercent}%</span>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default SavingsCalculator;
