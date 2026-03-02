import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';
import { useState, useRef, useEffect } from 'react';

const VisitorStatistics = () => {
    const [selectedRange, setSelectedRange] = useState('Last 24 hours');
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const timeRanges = [
        'Last 24 hours',
        'Last 3 days',
        'Last 7 days',
        'Last 30 days',
        'Last 90 Days'
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    // Mock Data for Bar Chart
    const browsingStats = [
        { time: '12:00', value: 0 }, { time: '13:00', value: 0 }, { time: '14:00', value: 0 },
        { time: '15:00', value: 0 }, { time: '16:00', value: 0 }, { time: '17:00', value: 0 },
        { time: '18:00', value: 0 }, { time: '19:00', value: 0 }, { time: '20:00', value: 0 },
        { time: '21:00', value: 0 }, { time: '22:00', value: 0 }, { time: '23:00', value: 0 },
        { time: '00:00', value: 0 }, { time: '01:00', value: 0 }, { time: '02:00', value: 0 },
        { time: '03:00', value: 0 }, { time: '04:00', value: 0 }, { time: '05:00', value: 0 },
        { time: '06:00', value: 0 }, { time: '07:00', value: 0 }, { time: '08:00', value: 0 },
        { time: '09:00', value: 4 }, { time: '10:00', value: 2 }, { time: '11:00', value: 1 },
    ];

    // Sub-component for Ranking Tables
    const RankingTable = ({ title, items, headers = [] }) => (
        <div className="glass-panel border border-border rounded-lg overflow-hidden h-full">
            <div className="bg-surface/50 border-b border-border p-4">
                <h3 className="text-text-main font-medium text-sm">{title}</h3>
            </div>
            <div className="p-4">
                <table className="w-full text-sm">
                    <tbody>
                        {items.map((item, idx) => (
                            <tr key={idx} className="border-b border-border/50 last:border-0 hover:bg-surface-lighter/10 transition-colors">
                                <td className="py-2 text-primary">{item.label}</td>
                                <td className="py-2 text-right text-text-muted">{item.value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    // Sub-component for Grid Cards
    const StatCard = ({ title, items }) => (
        <div className="glass-panel border border-border rounded-lg overflow-hidden">
            <div className="bg-surface/50 border-b border-border p-4">
                <h3 className="text-text-main font-medium text-sm">{title}</h3>
            </div>
            <div className="p-4">
                <table className="w-full text-sm">
                    <tbody>
                        {items.map((item, idx) => (
                            <tr key={idx} className="border-b border-border/50 last:border-0">
                                <td className="py-2 text-text-muted">{item.label}</td>
                                <td className="py-2 text-right text-text-main font-medium">{item.value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    return (
        <div className="space-y-6 animate-in fade-in zoom-in duration-300">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-text-main mb-6">Access Statistics</h1>
            </div>

            {/* Main Stats Container */}
            <div className="bg-surface glass-panel rounded-2xl border border-border p-6 space-y-8">

                {/* Website Data Statistics Header */}
                <div className="flex justify-between items-center mb-4 relative z-50">
                    <h2 className="text-lg text-text-main font-medium">Website data statistics</h2>

                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="bg-white border border-[#5d6bb3] rounded px-4 py-2 text-sm text-[#333] hover:bg-gray-50 transition-colors flex items-center gap-2 min-w-[160px] justify-between h-[38px]"
                        >
                            {selectedRange}
                            <ChevronDown className={cn("w-4 h-4 transition-transform", isOpen && "rotate-180")} />
                        </button>

                        {isOpen && (
                            <div className="absolute right-0 mt-1 w-full bg-white border border-[#5d6bb3] rounded shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-1 duration-200">
                                {timeRanges.map((range) => (
                                    <button
                                        key={range}
                                        onClick={() => {
                                            setSelectedRange(range);
                                            setIsOpen(false);
                                        }}
                                        className={cn(
                                            "w-full text-left px-4 py-2.5 text-sm transition-colors",
                                            selectedRange === range
                                                ? "bg-[#2563eb] text-white"
                                                : "text-[#333] hover:bg-gray-100"
                                        )}
                                    >
                                        {range}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Browsing Statistics Chart */}
                <div>
                    <h3 className="text-text-muted text-sm mb-4">Browsing statistics</h3>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={browsingStats} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
                                <XAxis
                                    dataKey="time"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fill: '#64748b', fontSize: 10 }}
                                    interval={0}
                                />
                                <YAxis
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fill: '#64748b', fontSize: 10 }}
                                    domain={[0, 4]}
                                    ticks={[0, 1, 2, 3, 4]}
                                />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', color: '#f8fafc' }}
                                    cursor={{ fill: '#1e293b', opacity: 0.4 }}
                                />
                                <Bar dataKey="value" fill="#3b82f6" barSize={10} radius={[2, 2, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Rankings Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <RankingTable
                        title="Page Visit Rank"
                        items={[
                            { label: '/system-dashboard', value: 4 },
                            { label: '/', value: 3 }
                        ]}
                    />
                    <RankingTable
                        title="Source Domain Ranking"
                        items={[
                            { label: 'https://app.funded.dev4traders.com/auth/login', value: 4 },
                            { label: 'https://copier.dev4traders.com/auth/login', value: 2 },
                            { label: 'Unknown', value: 1 }
                        ]}
                    />
                </div>

                {/* Rankings Row 2 - 4 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <StatCard
                        title="Browser"
                        items={[
                            { label: 'Chrome', value: 5 },
                            { label: 'Edge', value: 1 }
                        ]}
                    />
                    <StatCard
                        title="Operating System"
                        items={[
                            { label: 'Windows', value: 6 }
                        ]}
                    />
                    <StatCard
                        title="Device"
                        items={[
                            { label: 'WebKit', value: 6 }
                        ]}
                    />
                    <StatCard
                        title="Resolution"
                        items={[
                            { label: '1920x1080', value: 3 },
                            { label: '1440x900', value: 3 }
                        ]}
                    />
                </div>

                {/* Map Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 glass-panel border border-border rounded-lg p-6 relative min-h-[400px]">
                        <h3 className="text-text-main font-medium text-sm mb-4">Visitors Regional Statistics</h3>

                        {/* Map Placeholder - SVG World Map Representation */}
                        <div className="w-full h-full flex items-center justify-center opacity-60">
                            <svg viewBox="0 0 800 400" className="w-full h-auto text-primary">
                                <path fill="currentColor" fillOpacity="0.1" d="M150,150 Q180,120 200,150 T250,180 T300,150 T350,180 T400,150 T450,180 T500,150 T550,180 T600,150 T650,180" />
                                <text x="400" y="200" textAnchor="middle" fill="currentColor" fontSize="20" className="opacity-50">Interactive Map Visualization</text>
                                {/* Simple visual cue for map data */}
                                <circle cx="580" cy="180" r="5" className="fill-warning animate-pulse" /> {/* India approx */}
                            </svg>
                            {/* Legend */}
                            <div className="absolute bottom-4 left-4 flex flex-col gap-1 items-start text-xs text-text-muted">
                                <div className="h-20 w-4 bg-gradient-to-t from-yellow-100 to-red-600 rounded-sm relative">
                                    <span className="absolute -right-6 top-0">100</span>
                                    <span className="absolute -right-6 bottom-0">0</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <RankingTable
                            title="Country and Territory Access Ranking"
                            items={[
                                { label: 'India', value: 6 }
                            ]}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default VisitorStatistics;
