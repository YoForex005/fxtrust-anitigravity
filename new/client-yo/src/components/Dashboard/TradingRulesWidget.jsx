import React from 'react';

function TradingRulesWidget({ accountType }) {
    let rules = {
        dailyLoss: '4%',
        maxDrawdown: '8%',
        minDays: '0',
        target: '8%'
    };

    if (accountType === 'instant') {
        rules = { dailyLoss: '3%', maxDrawdown: '6% (Static)', minDays: '0', target: 'None' };
    } else if (accountType === 'evolution') {
        rules = { dailyLoss: '4%', maxDrawdown: '8%', minDays: '3', target: '6% / 4%' };
    }

    return (
        <div className="bg-white dark:bg-[#141414] rounded-lg p-5 shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-transparent dark:border-[#333] h-full">
            <h3 className="m-0 mb-4 text-[11px] font-semibold text-[#6b7280] dark:text-[#9ca3af] uppercase tracking-wide">
                Trading Rules
            </h3>

            <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-[#f9fafb] dark:bg-[#1a1a1a] rounded-lg border border-[#e5e7eb] dark:border-[#374151]">
                    <span className="text-[11px] text-[#6b7280] dark:text-[#9ca3af] uppercase tracking-wide block mb-1.5">Max Daily Loss</span>
                    <div className="text-lg font-bold text-[#111827] dark:text-[#f3f4f6]">{rules.dailyLoss}</div>
                </div>

                <div className="p-3 bg-[#f9fafb] dark:bg-[#1a1a1a] rounded-lg border border-[#e5e7eb] dark:border-[#374151]">
                    <span className="text-[11px] text-[#6b7280] dark:text-[#9ca3af] uppercase tracking-wide block mb-1.5">Max Drawdown</span>
                    <div className="text-lg font-bold text-[#111827] dark:text-[#f3f4f6]">{rules.maxDrawdown}</div>
                </div>

                <div className="p-3 bg-[#f9fafb] dark:bg-[#1a1a1a] rounded-lg border border-[#e5e7eb] dark:border-[#374151]">
                    <span className="text-[11px] text-[#6b7280] dark:text-[#9ca3af] uppercase tracking-wide block mb-1.5">Min Days</span>
                    <div className="text-lg font-bold text-[#111827] dark:text-[#f3f4f6]">{rules.minDays}</div>
                </div>

                <div className="p-3 bg-[#f9fafb] dark:bg-[#1a1a1a] rounded-lg border border-[#e5e7eb] dark:border-[#374151]">
                    <span className="text-[11px] text-[#6b7280] dark:text-[#9ca3af] uppercase tracking-wide block mb-1.5">Target</span>
                    <div className="text-lg font-bold text-[#111827] dark:text-[#f3f4f6]">{rules.target}</div>
                </div>
            </div>
        </div>
    );
}

export default TradingRulesWidget;
