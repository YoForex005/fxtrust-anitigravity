import React, { useState } from 'react';
import {
    Users, Search, RefreshCw, Filter, TrendingUp,
    ArrowUpRight, MapPin, Globe, ChevronRight
} from 'lucide-react';

function YoPipsTraders() {
    const [searchQuery, setSearchQuery] = useState('');

    // Mock Traders Data
    const traders = [
        { id: 1, name: 'Arjun S.', country: 'India', winRate: '68%', profit: '$12,450', accountSize: '$100k', type: 'Evolution', avatar: 'AS' },
        { id: 2, name: 'Xiao W.', country: 'China', winRate: '72%', profit: '$8,920', accountSize: '$50k', type: 'Instant', avatar: 'XW' },
        { id: 3, name: 'Omar H.', country: 'UAE', winRate: '65%', profit: '$24,100', accountSize: '$200k', type: 'Express', avatar: 'OH' },
        { id: 4, name: 'Linh N.', country: 'Vietnam', winRate: '70%', profit: '$5,800', accountSize: '$25k', type: 'Evolution', avatar: 'LN' },
        { id: 5, name: 'Kwame A.', country: 'Ghana', winRate: '63%', profit: '$15,600', accountSize: '$100k', type: 'Instant', avatar: 'KA' },
        { id: 6, name: 'Priya K.', country: 'India', winRate: '75%', profit: '$3,450', accountSize: '$10k', type: 'Evolution', avatar: 'PK' },
    ];

    return (
        <div className="am-page">
            {/* Breadcrumbs */}
            <div className="am-breadcrumbs">
                <span>Community</span>
                <span className="mx-1">/</span>
                <span className="am-breadcrumbs-current">YoPips Traders</span>
            </div>

            {/* Page Header */}
            <div className="am-page-title">
                <Users size={20} className="text-[#6b7280]" />
                <h1>YoPips Traders</h1>
            </div>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex flex-wrap gap-3">
                    <button className="am-action-btn">
                        <TrendingUp size={14} /> Top Performers
                    </button>
                    <button className="am-action-btn">
                        <Globe size={14} /> Global Feed
                    </button>
                    <button className="am-action-btn">
                        <RefreshCw size={14} /> Refresh
                    </button>
                </div>

                {/* Search Bar */}
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9ca3af]" size={14} />
                    <input
                        type="text"
                        placeholder="Search traders..."
                        className="pl-9 pr-4 py-2 bg-white dark:bg-[#1f2937] border border-[#e5e7eb] dark:border-[#374151] rounded text-[13px] outline-none focus:border-[#0066ff] w-64 shadow-sm"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            {/* Market Overview Style Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="am-card flex items-center justify-between">
                    <div>
                        <div className="text-[11px] text-[#6b7280] dark:text-[#9ca3af] uppercase font-semibold mb-1">Total Payouts</div>
                        <div className="text-xl font-bold">$2,341,000+</div>
                    </div>
                    <div className="p-2 bg-[#d1fae5] dark:bg-[#064e3b] rounded">
                        <ArrowUpRight size={16} className="text-[#10b981]" />
                    </div>
                </div>
                <div className="am-card flex items-center justify-between">
                    <div>
                        <div className="text-[11px] text-[#6b7280] dark:text-[#9ca3af] uppercase font-semibold mb-1">Active Traders</div>
                        <div className="text-xl font-bold">12,438</div>
                    </div>
                    <div className="p-2 bg-[#eff6ff] dark:bg-[#1e3a8a] rounded">
                        <Users size={16} className="text-[#0066ff]" />
                    </div>
                </div>
                <div className="am-card flex items-center justify-between">
                    <div>
                        <div className="text-[11px] text-[#6b7280] dark:text-[#9ca3af] uppercase font-semibold mb-1">Win Rate Avg</div>
                        <div className="text-xl font-bold">64.2%</div>
                    </div>
                    <div className="p-2 bg-[#fef3c7] dark:bg-[#78350f] rounded">
                        <TrendingUp size={16} className="text-[#f59e0b]" />
                    </div>
                </div>
            </div>

            {/* Traders Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {traders.map(trader => (
                    <div key={trader.id} className="am-card hover:translate-y-[-2px] transition-all duration-300">
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0066ff] to-[#60a5fa] flex items-center justify-center text-white font-bold text-sm shadow-sm">
                                    {trader.avatar}
                                </div>
                                <div>
                                    <div className="text-[13px] font-semibold text-[#111827] dark:text-[#f3f4f6]">{trader.name}</div>
                                    <div className="text-[11px] text-[#9ca3af] flex items-center gap-1">
                                        <MapPin size={10} /> {trader.country}
                                    </div>
                                </div>
                            </div>
                            <span className={`am-badge ${trader.type === 'Instant' ? 'am-badge-dark' : 'am-badge-success'}`}>
                                {trader.type}
                            </span>
                        </div>

                        <div className="grid grid-cols-2 gap-3 mb-4">
                            <div className="p-2 bg-[#f9fafb] dark:bg-[#1c1c1c] rounded-md border border-[#f3f4f6] dark:border-[#333]">
                                <div className="text-[10px] text-[#9ca3af] uppercase mb-0.5">Win Rate</div>
                                <div className="text-[13px] font-bold text-[#10b981]">{trader.winRate}</div>
                            </div>
                            <div className="p-2 bg-[#f9fafb] dark:bg-[#1c1c1c] rounded-md border border-[#f3f4f6] dark:border-[#333]">
                                <div className="text-[10px] text-[#9ca3af] uppercase mb-0.5">Total Profit</div>
                                <div className="text-[13px] font-bold text-[#111827] dark:text-[#f3f4f6]">{trader.profit}</div>
                            </div>
                        </div>

                        <div className="am-list-row py-1.5 border-none">
                            <span className="am-list-label text-[11px]">Account Size</span>
                            <span className="am-list-value text-[11px]">{trader.accountSize}</span>
                        </div>

                        <button className="w-full mt-4 am-btn-secondary py-2 flex items-center justify-center gap-2 group">
                            View Profile <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <div className="am-footer mt-12">
                <div className="am-footer-links">
                    <a href="#" className="am-footer-link">Support</a>
                    <a href="#" className="am-footer-link">Rules</a>
                    <a href="#" className="am-footer-link">Funding</a>
                </div>
                <p className="am-footer-copyright">2026 © Copyright - YoPips.com</p>
            </div>
        </div>
    );
}

export default YoPipsTraders;
