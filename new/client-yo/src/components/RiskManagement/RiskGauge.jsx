import React from 'react';
import { AlertTriangle, TrendingUp, TrendingDown, Shield } from 'lucide-react';

const RiskGauge = ({ value, max, label, subLabel, color = '#10b981', warningThreshold = 0.8, type = 'currency', icon = 'shield' }) => {
    // Calculate percentage
    const percent = Math.min(Math.max((value / max) * 100, 0), 100);
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percent / 100) * circumference;

    // Determine color based on threshold with gradient support
    const isWarning = percent > (warningThreshold * 100);
    const isCritical = percent > 95;

    const getStatusColor = () => {
        if (isCritical) return { main: '#dc2626', glow: 'rgba(220, 38, 38, 0.4)' };
        if (isWarning) return { main: '#f59e0b', glow: 'rgba(245, 158, 11, 0.3)' };
        return { main: color, glow: `${color}33` };
    };

    const statusColor = getStatusColor();

    const formatValue = (val) => {
        if (type === 'currency') {
            const num = Number(val);
            if (Math.abs(num) >= 1000) {
                return `$${(num / 1000).toFixed(1)}k`;
            }
            return `$${num.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
        }
        return `${Number(val).toFixed(1)}%`;
    };

    const getIcon = () => {
        switch (icon) {
            case 'up': return <TrendingUp size={14} />;
            case 'down': return <TrendingDown size={14} />;
            case 'warning': return <AlertTriangle size={14} />;
            default: return <Shield size={14} />;
        }
    };

    return (
        <div className="relative flex flex-col items-center justify-center p-6 bg-white dark:bg-gradient-to-br dark:from-[#1a1a1a] dark:to-[#0f0f0f] rounded-xl border border-transparent dark:border-[#2a2a2a] shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 group overflow-hidden">
            {/* Decorative background gradient */}
            <div
                className="absolute inset-0 opacity-5 dark:opacity-10 transition-opacity duration-500 group-hover:opacity-10"
                style={{
                    background: `radial-gradient(circle at 50% 0%, ${statusColor.main}, transparent 70%)`
                }}
            />

            {/* Status indicator dot */}
            <div className="absolute top-4 right-4 flex items-center gap-1.5">
                <div
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{ backgroundColor: statusColor.main, boxShadow: `0 0 8px ${statusColor.glow}` }}
                />
                <span className="text-[10px] font-medium text-[#6b7280] dark:text-[#9ca3af]">
                    {isCritical ? 'CRITICAL' : isWarning ? 'WARNING' : 'OK'}
                </span>
            </div>

            <div className="relative w-36 h-36 flex items-center justify-center mb-3">
                {/* Glow effect behind gauge */}
                <div
                    className="absolute inset-2 rounded-full blur-xl opacity-30 transition-all duration-500"
                    style={{ backgroundColor: statusColor.main }}
                />

                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 128 128">
                    {/* Outer decorative ring */}
                    <circle
                        cx="64"
                        cy="64"
                        r="58"
                        stroke="currentColor"
                        strokeWidth="1"
                        fill="transparent"
                        className="text-[#e5e7eb] dark:text-[#333]"
                    />

                    {/* Background Circle with gradient */}
                    <circle
                        cx="64"
                        cy="64"
                        r={radius}
                        stroke="currentColor"
                        strokeWidth="10"
                        fill="transparent"
                        className="text-[#f3f4f6] dark:text-[#262626]"
                    />

                    {/* Progress Circle with glow */}
                    <circle
                        cx="64"
                        cy="64"
                        r={radius}
                        stroke={statusColor.main}
                        strokeWidth="10"
                        fill="transparent"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                        className="transition-all duration-1000 ease-out drop-shadow-lg"
                        style={{
                            filter: `drop-shadow(0 0 6px ${statusColor.glow})`
                        }}
                    />

                    {/* Tick marks */}
                    {[...Array(12)].map((_, i) => (
                        <line
                            key={i}
                            x1="64"
                            y1="8"
                            x2="64"
                            y2="12"
                            stroke="currentColor"
                            strokeWidth="1"
                            className="text-[#d1d5db] dark:text-[#4b5563]"
                            transform={`rotate(${i * 30} 64 64)`}
                        />
                    ))}
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span
                        className="text-2xl font-bold transition-colors duration-300"
                        style={{ color: statusColor.main }}
                    >
                        {percent.toFixed(0)}%
                    </span>
                    <span className="text-[10px] text-[#6b7280] dark:text-[#9ca3af] mt-0.5">
                        {formatValue(value)} / {formatValue(max)}
                    </span>
                </div>
            </div>

            <div className="flex items-center gap-2 mb-1">
                <div
                    className="w-6 h-6 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${statusColor.main}20`, color: statusColor.main }}
                >
                    {getIcon()}
                </div>
                <h4 className="text-sm font-bold text-[#111827] dark:text-[#f3f4f6]">{label}</h4>
            </div>
            {subLabel && <p className="text-[11px] text-[#6b7280] dark:text-[#9ca3af]">{subLabel}</p>}

            {/* Progress bar at bottom */}
            <div className="w-full mt-4 h-1.5 bg-[#f3f4f6] dark:bg-[#262626] rounded-full overflow-hidden">
                <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{
                        width: `${percent}%`,
                        backgroundColor: statusColor.main,
                        boxShadow: `0 0 8px ${statusColor.glow}`
                    }}
                />
            </div>
        </div>
    );
};

export default RiskGauge;
