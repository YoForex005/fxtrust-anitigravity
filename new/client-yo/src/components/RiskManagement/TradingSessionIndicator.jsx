import React from 'react';
import { Clock, Globe, Sun, Moon, Sunset } from 'lucide-react';

const TradingSessionIndicator = () => {
    const now = new Date();
    const utcHour = now.getUTCHours();

    // Trading sessions (UTC times)
    const sessions = [
        { name: 'Sydney', start: 21, end: 6, color: '#8b5cf6', icon: Moon },
        { name: 'Tokyo', start: 0, end: 9, color: '#f43f5e', icon: Sunset },
        { name: 'London', start: 7, end: 16, color: '#0ea5e9', icon: Sun },
        { name: 'New York', start: 12, end: 21, color: '#10b981', icon: Globe },
    ];

    const isSessionActive = (session) => {
        if (session.start < session.end) {
            return utcHour >= session.start && utcHour < session.end;
        }
        return utcHour >= session.start || utcHour < session.end;
    };

    const getSessionProgress = (session) => {
        if (!isSessionActive(session)) return 0;
        let duration, elapsed;
        if (session.start < session.end) {
            duration = session.end - session.start;
            elapsed = utcHour - session.start;
        } else {
            duration = (24 - session.start) + session.end;
            elapsed = utcHour >= session.start ? utcHour - session.start : utcHour + (24 - session.start);
        }
        return (elapsed / duration) * 100;
    };

    const activeSessions = sessions.filter(isSessionActive);

    return (
        <div className="bg-white dark:bg-gradient-to-br dark:from-[#1a1a1a] dark:to-[#0f0f0f] rounded-xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-lg border border-transparent dark:border-[#2a2a2a]">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#8b5cf6] to-[#6366f1] flex items-center justify-center shadow-lg">
                        <Clock size={20} className="text-white" />
                    </div>
                    <div>
                        <h3 className="m-0 text-[15px] font-bold text-[#111827] dark:text-[#f3f4f6]">Trading Sessions</h3>
                        <p className="text-[11px] text-[#6b7280] dark:text-[#9ca3af]">
                            {activeSessions.length} session{activeSessions.length !== 1 ? 's' : ''} active
                        </p>
                    </div>
                </div>
                <div className="text-right">
                    <span className="text-[10px] text-[#6b7280] dark:text-[#9ca3af]">UTC Time</span>
                    <p className="text-sm font-bold text-[#111827] dark:text-[#f3f4f6] font-mono">
                        {String(utcHour).padStart(2, '0')}:{String(now.getUTCMinutes()).padStart(2, '0')}
                    </p>
                </div>
            </div>

            <div className="space-y-3">
                {sessions.map((session) => {
                    const active = isSessionActive(session);
                    const progress = getSessionProgress(session);
                    const Icon = session.icon;

                    return (
                        <div
                            key={session.name}
                            className={`relative p-3 rounded-lg border transition-all duration-300 ${active
                                ? 'bg-white dark:bg-[#1f1f1f] border-[#e5e7eb] dark:border-[#333] shadow-sm'
                                : 'bg-[#f9fafb] dark:bg-[#141414] border-transparent opacity-50'
                                }`}
                        >
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                    <div
                                        className="w-7 h-7 rounded-lg flex items-center justify-center"
                                        style={{ backgroundColor: `${session.color}20`, color: session.color }}
                                    >
                                        <Icon size={14} />
                                    </div>
                                    <div>
                                        <span className="text-[13px] font-semibold text-[#111827] dark:text-[#f3f4f6]">{session.name}</span>
                                        <span className="block text-[10px] text-[#9ca3af]">
                                            {String(session.start).padStart(2, '0')}:00 - {String(session.end).padStart(2, '0')}:00 UTC
                                        </span>
                                    </div>
                                </div>
                                {active && (
                                    <div className="flex items-center gap-1.5">
                                        <div
                                            className="w-2 h-2 rounded-full animate-pulse"
                                            style={{ backgroundColor: session.color }}
                                        />
                                        <span className="text-[10px] font-bold" style={{ color: session.color }}>ACTIVE</span>
                                    </div>
                                )}
                            </div>

                            {/* Progress bar */}
                            <div className="h-1.5 bg-[#f3f4f6] dark:bg-[#262626] rounded-full overflow-hidden">
                                <div
                                    className="h-full rounded-full transition-all duration-1000"
                                    style={{
                                        width: `${progress}%`,
                                        backgroundColor: session.color,
                                        opacity: active ? 1 : 0.3
                                    }}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Session overlap indicator */}
            {activeSessions.length > 1 && (
                <div className="mt-4 p-3 bg-gradient-to-r from-[#10b981]/10 to-[#0ea5e9]/10 dark:from-[#10b981]/20 dark:to-[#0ea5e9]/20 rounded-lg border border-[#10b981]/20">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#10b981]/20 flex items-center justify-center">
                            <Globe size={12} className="text-[#10b981]" />
                        </div>
                        <div>
                            <span className="text-[11px] font-bold text-[#10b981]">High Volatility Period</span>
                            <p className="text-[10px] text-[#6b7280] dark:text-[#9ca3af]">
                                {activeSessions.map(s => s.name).join(' & ')} overlap
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TradingSessionIndicator;
