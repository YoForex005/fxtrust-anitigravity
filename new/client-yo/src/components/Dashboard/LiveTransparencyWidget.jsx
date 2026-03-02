import React, { useState, useEffect } from 'react';
import { Globe, Users, DollarSign, TrendingUp } from 'lucide-react';

function LiveTransparencyWidget() {
    const [stats, setStats] = useState({
        payoutsThisWeek: 47250,
        averagePayoutTime: 18,
        activeTraders: 12437,
        fundedTotal: 2341000
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setStats(prev => ({
                ...prev,
                activeTraders: prev.activeTraders + Math.floor(Math.random() * 2),
                fundedTotal: prev.fundedTotal + Math.floor(Math.random() * 50)
            }));
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard icon={DollarSign} label="Payouts This Week" value={`$${stats.payoutsThisWeek.toLocaleString()}`} />
            <StatCard icon={TrendingUp} label="Avg Payout Time" value={`${stats.averagePayoutTime} Hours`} />
            <StatCard icon={Users} label="Active Traders" value={stats.activeTraders.toLocaleString()} />
            <StatCard icon={Globe} label="Total Funded" value={`$${(stats.fundedTotal / 1000000).toFixed(2)}M+`} />
        </div>
    );
}

const StatCard = ({ icon: Icon, label, value }) => (
    <div className="bg-white dark:bg-[#141414] p-4 rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-transparent dark:border-[#333] flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-[#f9fafb] dark:bg-[#1a1a1a] flex items-center justify-center border border-[#e5e7eb] dark:border-[#374151]">
            <Icon className="text-[#6b7280] dark:text-[#9ca3af]" size={18} />
        </div>
        <div>
            <div className="text-[11px] text-[#6b7280] dark:text-[#9ca3af] uppercase tracking-wide">{label}</div>
            <div className="text-lg font-bold text-[#111827] dark:text-[#f3f4f6]">{value}</div>
        </div>
    </div>
);

export default LiveTransparencyWidget;
