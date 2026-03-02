import React from 'react';

function ChallengeProgress({ metrics, accountType }) {
    const { balance, equity, initialBalance } = metrics;

    let targetPercent = 0.08;
    if (accountType === 'evolution') targetPercent = 0.06;
    if (accountType === 'instant') targetPercent = 0;

    const profit = equity - initialBalance;
    const profitPercent = (profit / initialBalance) * 100;
    const targetAmount = initialBalance * targetPercent;

    let progress = 0;
    if (targetAmount > 0) {
        progress = Math.min(100, Math.max(0, (profit / targetAmount) * 100));
    } else {
        progress = 100;
    }

    const isInstant = accountType === 'instant';

    return (
        <div className="bg-white dark:bg-[#141414] rounded-lg p-5 shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-transparent dark:border-[#333] h-full">
            <h3 className="m-0 mb-4 text-[11px] font-semibold text-[#6b7280] dark:text-[#9ca3af] uppercase tracking-wide">
                Challenge Progress
            </h3>

            {isInstant ? (
                <div className="bg-[#f9fafb] dark:bg-[#1a1a1a] rounded-lg p-5 text-center border border-[#e5e7eb] dark:border-[#374151]">
                    <h4 className="text-[15px] font-semibold text-[#111827] dark:text-[#f3f4f6] mb-2">You are Funded</h4>
                    <p className="text-[11px] text-[#6b7280] dark:text-[#9ca3af]">
                        Trade responsibly and earn your payouts. Next payout in 30 days.
                    </p>
                </div>
            ) : (
                <>
                    <div className="mb-5">
                        <div className="flex justify-between text-[13px] mb-3">
                            <span className="text-[#6b7280] dark:text-[#9ca3af]">Profit Target</span>
                            <span className="text-[#111827] dark:text-[#f3f4f6] font-medium">${targetAmount.toLocaleString()} ({targetPercent * 100}%)</span>
                        </div>
                        <div className="h-1.5 bg-[#e5e7eb] dark:bg-[#374151] rounded-full overflow-hidden">
                            <div
                                className="h-full bg-[#1d1d1f] dark:bg-white transition-all duration-1000 ease-out rounded-full"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                        <div className="mt-2 text-right text-[11px] text-[#9ca3af]">
                            {progress.toFixed(1)}% Completed
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 bg-[#f9fafb] dark:bg-[#1a1a1a] rounded-lg border border-[#e5e7eb] dark:border-[#374151]">
                            <span className="text-[11px] text-[#6b7280] dark:text-[#9ca3af] block mb-1">Current Profit</span>
                            <span className={`text-lg font-bold ${profit >= 0 ? 'text-[#10b981]' : 'text-[#ef4444]'}`}>
                                ${profit.toLocaleString()}
                            </span>
                        </div>
                        <div className="p-3 bg-[#f9fafb] dark:bg-[#1a1a1a] rounded-lg border border-[#e5e7eb] dark:border-[#374151]">
                            <span className="text-[11px] text-[#6b7280] dark:text-[#9ca3af] block mb-1">To Go</span>
                            <span className="text-lg font-bold text-[#111827] dark:text-[#f3f4f6]">
                                ${Math.max(0, targetAmount - profit).toLocaleString()}
                            </span>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default ChallengeProgress;
