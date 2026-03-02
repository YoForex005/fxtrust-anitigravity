import React from 'react';
import { Zap, Clock, ShieldCheck } from 'lucide-react';

function PayoutFeatures() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Same Day Payouts */}
            <div className="bg-white dark:bg-[#141414] p-5 rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-transparent dark:border-[#333] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                    <Zap size={64} className="text-[#6b7280]" />
                </div>
                <div className="relative z-10">
                    <div className="w-10 h-10 bg-[#f9fafb] dark:bg-[#1a1a1a] rounded-lg flex items-center justify-center mb-3 text-[#6b7280] dark:text-[#9ca3af] border border-[#e5e7eb] dark:border-[#374151]">
                        <Zap size={20} />
                    </div>
                    <h3 className="font-semibold text-[#111827] dark:text-[#f3f4f6] mb-1 text-[13px]">Same-Day Payouts</h3>
                    <p className="text-[11px] text-[#6b7280] dark:text-[#9ca3af] leading-relaxed">
                        Request by 12PM ET, get paid by 6PM ET. Free for $10k+ accounts.
                    </p>
                </div>
            </div>

            {/* Flash Payout */}
            <div className="bg-white dark:bg-[#141414] p-5 rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-transparent dark:border-[#333] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                    <Clock size={64} className="text-[#6b7280]" />
                </div>
                <div className="relative z-10">
                    <div className="w-10 h-10 bg-[#f9fafb] dark:bg-[#1a1a1a] rounded-lg flex items-center justify-center mb-3 text-[#6b7280] dark:text-[#9ca3af] border border-[#e5e7eb] dark:border-[#374151]">
                        <Clock size={20} />
                    </div>
                    <h3 className="font-semibold text-[#111827] dark:text-[#f3f4f6] mb-1 text-[13px]">Flash Payout</h3>
                    <p className="text-[11px] text-[#6b7280] dark:text-[#9ca3af] leading-relaxed">
                        Emergency funds in 1 hour. Available 24/7/365. (2% fee)
                    </p>
                </div>
            </div>

            {/* Payout Guarantee */}
            <div className="bg-white dark:bg-[#141414] p-5 rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-transparent dark:border-[#333] relative overflow-hidden md:col-span-2">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                    <ShieldCheck size={80} className="text-[#6b7280]" />
                </div>
                <div className="relative z-10 flex flex-col md:flex-row gap-4 items-start md:items-center h-full">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 bg-[#f9fafb] dark:bg-[#1a1a1a] rounded-lg flex items-center justify-center text-[#6b7280] dark:text-[#9ca3af] border border-[#e5e7eb] dark:border-[#374151]">
                                <ShieldCheck size={18} />
                            </div>
                            <h3 className="font-semibold text-[#111827] dark:text-[#f3f4f6] text-[13px]">Payout Guarantee Policy</h3>
                        </div>
                        <p className="text-[11px] text-[#6b7280] dark:text-[#9ca3af] leading-relaxed mb-2">
                            We value your time. If your payout is delayed, we pay YOU.
                        </p>
                        <div className="flex gap-2 text-[11px] font-semibold">
                            <span className="bg-[#f9fafb] dark:bg-[#1a1a1a] text-[#6b7280] dark:text-[#9ca3af] px-2 py-1 rounded border border-[#e5e7eb] dark:border-[#374151]">
                                {'>'}24h Late = +$100 Bonus
                            </span>
                            <span className="bg-[#f9fafb] dark:bg-[#1a1a1a] text-[#6b7280] dark:text-[#9ca3af] px-2 py-1 rounded border border-[#e5e7eb] dark:border-[#374151]">
                                {'>'}48h Late = +$250 Bonus
                            </span>
                        </div>
                    </div>
                    <div className="bg-[#f9fafb] dark:bg-[#1a1a1a] p-3 rounded-lg border border-dashed border-[#e5e7eb] dark:border-[#374151] text-center min-w-[120px]">
                        <div className="text-[11px] uppercase tracking-wide text-[#9ca3af] mb-1">Next Payout</div>
                        <div className="text-[13px] font-bold text-[#111827] dark:text-[#f3f4f6]">Double Day</div>
                        <div className="text-[11px] text-[#6b7280] font-medium">This Friday</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PayoutFeatures;
