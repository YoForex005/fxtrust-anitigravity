import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jan', value: 4000 },
    { name: 'Feb', value: 3000 },
    { name: 'Mar', value: 2000 },
    { name: 'Apr', value: 2780 },
    { name: 'May', value: 1890 },
    { name: 'Jun', value: 2390 },
    { name: 'Jul', value: 3490 },
    { name: 'Aug', value: 4200 },
    { name: 'Sep', value: 5100 },
    { name: 'Oct', value: 6500 },
    { name: 'Nov', value: 7200 },
    { name: 'Dec', value: 8500 },
];

const PerformanceChart = () => {
    return (
        <div className="glass-panel p-6 rounded-lg h-[400px] border border-border">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold text-text-main">Equity Curve</h2>
                <select className="bg-surface border border-border text-xs rounded-lg px-3 py-1 text-text-muted focus:outline-none">
                    <option>Last 12 Months</option>
                    <option>Last 30 Days</option>
                    <option>Custom</option>
                </select>
            </div>

            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={data}
                        margin={{
                            top: 10,
                            right: 10,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <defs>
                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#00C896" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#00C896" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#22262B" vertical={false} />
                        <XAxis dataKey="name" stroke="#64748B" fontSize={12} tickLine={false} axisLine={false} />
                        <YAxis stroke="#64748B" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
                        <Tooltip
                            contentStyle={{ backgroundColor: '#101214', borderColor: '#22262B', borderRadius: '8px', color: '#fff' }}
                            itemStyle={{ color: '#00C896' }}
                        />
                        <Area type="monotone" dataKey="value" stroke="#00C896" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default PerformanceChart;
