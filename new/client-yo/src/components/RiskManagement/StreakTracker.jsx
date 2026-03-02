import React from 'react';
import { Flame, Snowflake, TrendingUp, TrendingDown, Award } from 'lucide-react';

const StreakTracker = ({ winStreak = 0, loseStreak = 0, bestStreak = 0, consecutiveDays = 0 }) => {
    const currentStreak = winStreak > 0 ? winStreak : -loseStreak;
    const isWinning = currentStreak > 0;
    const isLosing = currentStreak < 0;

    const getStreakEmoji = (streak) => {
        if (streak >= 5) return '🔥';
        if (streak >= 3) return '⚡';
        if (streak >= 1) return '✨';
        return '💤';
    };

    return (
        <div className="bg-white dark:bg-gradient-to-br dark:from-[#1a1a1a] dark:to-[#0f0f0f] rounded-xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-lg border border-transparent dark:border-[#2a2a2a]">
            <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-lg ${isWinning ? 'bg-gradient-to-br from-[#10b981] to-[#059669]' :
                    isLosing ? 'bg-gradient-to-br from-[#ef4444] to-[#dc2626]' :
                        'bg-gradient-to-br from-[#6b7280] to-[#4b5563]'
                    }`}>
                    {isWinning ? <Flame size={20} className="text-white" /> :
                        isLosing ? <Snowflake size={20} className="text-white" /> :
                            <TrendingUp size={20} className="text-white" />}
                </div>
                <div>
                    <h3 className="m-0 text-[15px] font-bold text-[#111827] dark:text-[#f3f4f6]">Streak Tracker</h3>
                    <p className="text-[11px] text-[#6b7280] dark:text-[#9ca3af]">Track your trading momentum</p>
                </div>
            </div>

            {/* Current Streak Display */}
            <div className={`relative p-5 rounded-xl mb-4 overflow-hidden ${isWinning ? 'bg-gradient-to-br from-[#10b981]/10 to-[#059669]/5 border border-[#10b981]/20' :
                isLosing ? 'bg-gradient-to-br from-[#ef4444]/10 to-[#dc2626]/5 border border-[#ef4444]/20' :
                    'bg-gradient-to-br from-[#f3f4f6] to-[#e5e7eb] dark:from-[#262626] dark:to-[#1f1f1f] border border-[#e5e7eb] dark:border-[#333]'
                }`}>
                {/* Background decoration */}
                <div className="absolute -right-4 -top-4 text-6xl opacity-10">
                    {getStreakEmoji(Math.abs(currentStreak))}
                </div>

                <div className="text-center relative">
                    <span className="text-[11px] font-medium text-[#6b7280] dark:text-[#9ca3af] block mb-1">
                        Current {isWinning ? 'Win' : isLosing ? 'Lose' : ''} Streak
                    </span>
                    <div className="flex items-center justify-center gap-2">
                        <span className={`text-4xl font-black ${isWinning ? 'text-[#10b981]' : isLosing ? 'text-[#ef4444]' : 'text-[#6b7280]'
                            }`}>
                            {Math.abs(currentStreak)}
                        </span>
                        <span className="text-2xl">{getStreakEmoji(Math.abs(currentStreak))}</span>
                    </div>
                    <span className="text-[10px] text-[#9ca3af] mt-1 block">
                        {isWinning ? 'Consecutive wins' : isLosing ? 'Consecutive losses' : 'No active streak'}
                    </span>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-3">
                <div className="bg-[#f9fafb] dark:bg-[#1f1f1f] rounded-lg p-3 text-center border border-[#e5e7eb] dark:border-[#333]">
                    <div className="w-7 h-7 rounded-lg bg-[#10b981]/10 flex items-center justify-center mx-auto mb-2">
                        <TrendingUp size={14} className="text-[#10b981]" />
                    </div>
                    <span className="text-lg font-bold text-[#10b981] block">{winStreak}</span>
                    <span className="text-[10px] text-[#9ca3af]">Best Win</span>
                </div>

                <div className="bg-[#f9fafb] dark:bg-[#1f1f1f] rounded-lg p-3 text-center border border-[#e5e7eb] dark:border-[#333]">
                    <div className="w-7 h-7 rounded-lg bg-[#ef4444]/10 flex items-center justify-center mx-auto mb-2">
                        <TrendingDown size={14} className="text-[#ef4444]" />
                    </div>
                    <span className="text-lg font-bold text-[#ef4444] block">{loseStreak}</span>
                    <span className="text-[10px] text-[#9ca3af]">Worst Lose</span>
                </div>

                <div className="bg-[#f9fafb] dark:bg-[#1f1f1f] rounded-lg p-3 text-center border border-[#e5e7eb] dark:border-[#333]">
                    <div className="w-7 h-7 rounded-lg bg-[#f59e0b]/10 flex items-center justify-center mx-auto mb-2">
                        <Award size={14} className="text-[#f59e0b]" />
                    </div>
                    <span className="text-lg font-bold text-[#f59e0b] block">{consecutiveDays}</span>
                    <span className="text-[10px] text-[#9ca3af]">Green Days</span>
                </div>
            </div>

            {/* Motivation message */}
            <div className="mt-4 p-3 bg-gradient-to-r from-[#0066ff]/5 to-[#8b5cf6]/5 dark:from-[#0066ff]/10 dark:to-[#8b5cf6]/10 rounded-lg text-center">
                <p className="text-[11px] text-[#6b7280] dark:text-[#9ca3af]">
                    {isWinning && currentStreak >= 3
                        ? "🔥 You're on fire! Stay disciplined and protect your gains."
                        : isLosing && Math.abs(currentStreak) >= 3
                            ? "💪 Take a break. Review your trades and come back stronger."
                            : "📊 Keep tracking your performance consistently."}
                </p>
            </div>
        </div>
    );
};

export default StreakTracker;
