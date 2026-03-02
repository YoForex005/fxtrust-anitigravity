import React, { useState } from 'react';
import { Info } from 'lucide-react';

const ProfitSplitCalculator = () => {
    const [profit, setProfit] = useState(10000);
    const traderShare = 80;
    const firmShare = 20;

    const traderAmount = (profit * traderShare) / 100;
    const firmAmount = (profit * firmShare) / 100;

    return (
        <div className="bg-white dark:bg-[#141414] rounded-lg p-5 shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-transparent dark:border-[#333]">
            <h3 className="m-0 mb-4 text-[15px] font-semibold text-[#111827] dark:text-[#f3f4f6]">Profit Split Calculator</h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {/* Input Section */}
                <div>
                    <div className="mb-5">
                        <div className="flex justify-between text-sm mb-2 font-medium">
                            <span className="text-[#6b7280] dark:text-[#9ca3af]">Total Profit Generated</span>
                            <span className="text-[#111827] dark:text-[#f3f4f6] font-semibold">${profit.toLocaleString()}</span>
                        </div>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6b7280] font-medium">$</span>
                            <input
                                type="number"
                                value={profit}
                                onChange={(e) => setProfit(Number(e.target.value))}
                                className="w-full pl-7 pr-4 py-3 bg-[#f9fafb] dark:bg-[#262626] border border-[#e5e7eb] dark:border-[#374151] rounded-lg text-[15px] font-medium outline-none text-[#1a1a1a] dark:text-[#f3f4f6] focus:border-[#0066ff] transition-all"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between items-end mb-3">
                            <span className="text-[11px] text-[#6b7280] dark:text-[#9ca3af]">Adjust Profit</span>
                        </div>
                        <input
                            type="range"
                            min="0"
                            max="100000"
                            step="1000"
                            value={profit}
                            onChange={(e) => setProfit(Number(e.target.value))}
                            className="w-full h-2 bg-[#e5e7eb] dark:bg-[#374151] rounded-full appearance-none cursor-pointer"
                            style={{
                                background: `linear-gradient(to right, #1d1d1f 0%, #1d1d1f ${profit / 1000}%, #e5e7eb ${profit / 1000}%, #e5e7eb 100%)`
                            }}
                        />
                        <div className="flex justify-between text-[10px] text-[#9ca3af] mt-2">
                            <span>$0</span>
                            <span>$50,000</span>
                            <span>$100,000</span>
                        </div>
                    </div>
                </div>

                {/* Results Section */}
                <div className="bg-[#f9fafb] dark:bg-[#111827] rounded-lg p-5 border border-[#e5e7eb] dark:border-[#374151]">
                    <div className="flex flex-col">
                        <div className="flex justify-between py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px]">
                            <span className="text-[#6b7280] dark:text-[#9ca3af] flex items-center gap-1">Your Share ({traderShare}%) <Info size={12} /></span>
                            <span className="font-bold text-[#10b981] text-lg">${traderAmount.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px]">
                            <span className="text-[#6b7280] dark:text-[#9ca3af]">Firm Share ({firmShare}%)</span>
                            <span className="font-medium text-[#1a1a1a] dark:text-[#f3f4f6]">${firmAmount.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between py-3 text-[13px]">
                            <span className="text-[#6b7280] dark:text-[#9ca3af]">Split Ratio</span>
                            <span className="bg-[#1d1d1f] dark:bg-white text-white dark:text-[#1d1d1f] px-2 py-0.5 rounded text-[11px] font-semibold">{traderShare}/{firmShare}</span>
                        </div>
                    </div>

                    {/* Visual Bar */}
                    <div className="h-3 w-full bg-[#e5e7eb] dark:bg-[#374151] rounded-full overflow-hidden flex mt-4">
                        <div
                            className="h-full bg-[#1d1d1f] dark:bg-white rounded-full transition-all duration-300"
                            style={{ width: `${traderShare}%` }}
                        />
                    </div>
                    <div className="flex justify-between text-[10px] text-[#9ca3af] mt-2">
                        <span>You: ${traderAmount.toLocaleString()}</span>
                        <span>Firm: ${firmAmount.toLocaleString()}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfitSplitCalculator;
