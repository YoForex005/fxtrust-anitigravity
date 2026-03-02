import React from 'react';
import { cn } from '../../lib/utils';
import { TrendingUp, TrendingDown } from 'lucide-react';

const StatCard = ({ title, value, trend, trendValue, icon: Icon, color = "primary", onClick }) => {
    const isPositive = trend === 'up';

    return (
        <div
            onClick={onClick}
            className={cn(
                "glass-panel p-6 rounded-2xl relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group border border-border",
                onClick && "cursor-pointer"
            )}
        >
            <div className="flex justify-between items-start mb-6">
                <div className={cn(
                    "p-3.5 rounded-2xl shadow-lg",
                    color === 'primary' ? "bg-primary text-white" :
                        color === 'secondary' ? "bg-secondary text-white" :
                            color === 'accent' ? "bg-accent text-white" : "bg-warning text-white"
                )}>
                    <Icon className="w-6 h-6" />
                </div>
                {trendValue && (
                    <div className={cn(
                        "flex items-center text-xs font-bold px-3 py-1 rounded-full border shadow-sm",
                        isPositive
                            ? "bg-success/10 text-success border-success/20"
                            : "bg-danger/10 text-danger border-danger/20"
                    )}>
                        {isPositive ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                        {trendValue}
                    </div>
                )}
            </div>

            <div>
                <h3 className="text-text-muted text-sm font-semibold mb-1 uppercase tracking-wider">{title}</h3>
                <p className="text-3xl font-black text-text-main tracking-tight">{value}</p>
            </div>
        </div>
    );
};

export default StatCard;
