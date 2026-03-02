import React from 'react';
import { AlertTriangle, Bell, XCircle, Clock, TrendingDown } from 'lucide-react';

const RiskAlertBanner = ({ alerts = [], onDismiss }) => {
    if (!alerts || alerts.length === 0) return null;

    const getAlertStyle = (severity) => {
        switch (severity) {
            case 'critical':
                return {
                    bg: 'bg-red-50 dark:bg-gradient-to-r dark:from-red-500/20 dark:to-red-600/10',
                    border: 'border-red-100 dark:border-red-500/30',
                    icon: 'text-red-500',
                    iconBg: 'bg-red-100 dark:bg-red-500/20',
                    text: 'text-red-700 dark:text-red-400',
                    badge: 'bg-red-500 text-white'
                };
            case 'warning':
                return {
                    bg: 'bg-amber-50 dark:bg-gradient-to-r dark:from-amber-500/20 dark:to-amber-600/10',
                    border: 'border-amber-100 dark:border-amber-500/30',
                    icon: 'text-amber-500',
                    iconBg: 'bg-amber-100 dark:bg-amber-500/20',
                    text: 'text-amber-700 dark:text-amber-400',
                    badge: 'bg-amber-500 text-white'
                };
            default:
                return {
                    bg: 'bg-blue-50 dark:bg-gradient-to-r dark:from-blue-500/20 dark:to-blue-600/10',
                    border: 'border-blue-100 dark:border-blue-500/30',
                    icon: 'text-blue-500',
                    iconBg: 'bg-blue-100 dark:bg-blue-500/20',
                    text: 'text-blue-700 dark:text-blue-400',
                    badge: 'bg-blue-500 text-white'
                };
        }
    };

    const getIcon = (type) => {
        switch (type) {
            case 'drawdown': return <TrendingDown size={16} />;
            case 'cooldown': return <Clock size={16} />;
            default: return <AlertTriangle size={16} />;
        }
    };

    return (
        <div className="space-y-3">
            {alerts.map((alert, idx) => {
                const style = getAlertStyle(alert.severity);
                return (
                    <div
                        key={idx}
                        className={`${style.bg} ${style.border} border rounded-xl p-4 flex items-center gap-4 animate-pulse-slow relative overflow-hidden group`}
                    >
                        {/* Animated background gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                        {/* Icon */}
                        <div className={`${style.iconBg} w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0`}>
                            <span className={style.icon}>{getIcon(alert.type)}</span>
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                                <span className={`${style.badge} text-[10px] font-bold px-2 py-0.5 rounded-full uppercase`}>
                                    {alert.severity}
                                </span>
                                <h4 className={`${style.text} text-sm font-bold truncate`}>{alert.title}</h4>
                            </div>
                            <p className="text-[12px] text-[#6b7280] dark:text-[#9ca3af] line-clamp-2">{alert.message}</p>
                        </div>

                        {/* Value */}
                        {alert.value && (
                            <div className="text-right flex-shrink-0">
                                <span className={`${style.text} text-lg font-black`}>{alert.value}</span>
                                {alert.limit && (
                                    <span className="block text-[10px] text-[#9ca3af]">of {alert.limit}</span>
                                )}
                            </div>
                        )}

                        {/* Dismiss button */}
                        {onDismiss && (
                            <button
                                onClick={() => onDismiss(idx)}
                                className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/50 dark:bg-black/20 flex items-center justify-center text-[#9ca3af] hover:text-[#6b7280] hover:bg-white dark:hover:bg-black/40 transition-all"
                            >
                                <XCircle size={16} />
                            </button>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default RiskAlertBanner;
