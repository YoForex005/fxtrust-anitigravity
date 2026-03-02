import React from 'react';
import { Check, X } from 'lucide-react';

function PlanComparison() {
    return (
        <div className="bg-white dark:bg-[#141414] rounded-lg p-5 shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-transparent dark:border-[#333] h-full">
            <h3 className="m-0 mb-4 text-[15px] font-semibold text-[#111827] dark:text-[#f3f4f6]">Compare Plans</h3>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse min-w-[500px]">
                    <thead>
                        <tr>
                            <th className="text-left text-[11px] font-semibold text-[#6b7280] dark:text-[#9ca3af] pb-3 border-b border-[#f3f4f6] dark:border-[#374151]">Feature</th>
                            <th className="text-left text-[11px] font-semibold text-[#6b7280] dark:text-[#9ca3af] pb-3 border-b border-[#f3f4f6] dark:border-[#374151]">Evolution</th>
                            <th className="text-left text-[11px] font-semibold text-[#6b7280] dark:text-[#9ca3af] pb-3 border-b border-[#f3f4f6] dark:border-[#374151]">Express</th>
                            <th className="text-left text-[11px] font-semibold text-[#6b7280] dark:text-[#9ca3af] pb-3 border-b border-[#f3f4f6] dark:border-[#374151]">Instant</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] text-[#0066ff] dark:text-[#60a5fa]">Profit Split</td>
                            <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] font-medium text-[#10b981]">90%</td>
                            <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] text-[#1a1a1a] dark:text-[#f3f4f6]">85%</td>
                            <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] text-[#6b7280] dark:text-[#9ca3af]">75-85%</td>
                        </tr>
                        <tr>
                            <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] text-[#0066ff] dark:text-[#60a5fa]">Max Drawdown</td>
                            <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] text-[#1a1a1a] dark:text-[#f3f4f6]">10% (EOD)</td>
                            <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] text-[#1a1a1a] dark:text-[#f3f4f6]">10% (EOD)</td>
                            <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] text-[#6b7280] dark:text-[#9ca3af]">6% (Static)</td>
                        </tr>
                        <tr>
                            <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] text-[#0066ff] dark:text-[#60a5fa]">Daily Loss</td>
                            <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] text-[#1a1a1a] dark:text-[#f3f4f6]">5%</td>
                            <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] text-[#1a1a1a] dark:text-[#f3f4f6]">5%</td>
                            <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] text-[#1a1a1a] dark:text-[#f3f4f6]">3%</td>
                        </tr>
                        <tr>
                            <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] text-[#0066ff] dark:text-[#60a5fa]">First Payout</td>
                            <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] font-medium text-[#10b981]">2 Days</td>
                            <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] text-[#1a1a1a] dark:text-[#f3f4f6]">3 Days</td>
                            <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] text-[#1a1a1a] dark:text-[#f3f4f6]">7 Days</td>
                        </tr>
                        <tr>
                            <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] text-[#0066ff] dark:text-[#60a5fa]">Fee Refund</td>
                            <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] text-right">
                                <div className="inline-flex p-1 rounded bg-[#d1fae5] dark:bg-[#064e3b] text-[#10b981] dark:text-[#34d399]"><Check size={12} /></div>
                            </td>
                            <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] text-right">
                                <div className="inline-flex p-1 rounded bg-[#d1fae5] dark:bg-[#064e3b] text-[#10b981] dark:text-[#34d399]"><Check size={12} /></div>
                            </td>
                            <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] text-[#6b7280] dark:text-[#9ca3af]">50%</td>
                        </tr>
                        <tr>
                            <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] text-[#0066ff] dark:text-[#60a5fa]">Free Reset</td>
                            <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] text-right">
                                <div className="inline-flex p-1 rounded bg-[#d1fae5] dark:bg-[#064e3b] text-[#10b981] dark:text-[#34d399]"><Check size={12} /></div>
                            </td>
                            <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] text-right">
                                <div className="inline-flex p-1 rounded bg-[#fee2e2] dark:bg-[#7f1d1d] text-[#ef4444] dark:text-[#f87171]"><X size={12} /></div>
                            </td>
                            <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] text-right">
                                <div className="inline-flex p-1 rounded bg-[#fee2e2] dark:bg-[#7f1d1d] text-[#ef4444] dark:text-[#f87171]"><X size={12} /></div>
                            </td>
                        </tr>
                        <tr>
                            <td className="py-3 text-[13px] text-[#0066ff] dark:text-[#60a5fa]">Time Limit</td>
                            <td className="py-3 text-[13px] font-medium text-[#0066ff] dark:text-[#60a5fa]">Unlimited</td>
                            <td className="py-3 text-[13px] font-medium text-[#0066ff] dark:text-[#60a5fa]">Unlimited</td>
                            <td className="py-3 text-[13px] font-medium text-[#0066ff] dark:text-[#60a5fa]">Unlimited</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default PlanComparison;
