import React from 'react';
import {
    Award, Download, Search, RefreshCw,
    FileCheck, ExternalLink, Calendar,
    ChevronRight, Medal, Share2
} from 'lucide-react';

function Certificates() {
    // Mock Certificates Data
    const certificates = [
        { id: 1, title: 'Evaluation Passed', type: 'Evolution Program', date: 'Dec 15, 2025', size: '100k', status: 'Verified', color: 'bg-blue-600' },
        { id: 2, title: 'Verification Success', type: 'Evolution Program', date: 'Jan 05, 2026', size: '100k', status: 'Verified', color: 'bg-emerald-600' },
        { id: 3, title: 'Funded Trader', type: 'YoPips Partner', date: 'Jan 08, 2026', size: '100k', status: 'Active', color: 'bg-[#1d1d1f]' },
        { id: 4, title: 'First Payout', type: 'Profit Achievement', date: 'Pending', size: 'Any', status: 'Locked', color: 'bg-gray-400' },
    ];

    return (
        <div className="am-page">
            {/* Breadcrumbs */}
            <div className="am-breadcrumbs">
                <span>Traders</span>
                <span className="mx-1">/</span>
                <span className="am-breadcrumbs-current">Certificates</span>
            </div>

            {/* Page Header */}
            <div className="am-page-title">
                <Award size={20} className="text-[#6b7280]" />
                <h1>Your Certificates</h1>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex gap-3">
                    <button className="am-action-btn">
                        <Download size={14} /> Download All (PDF)
                    </button>
                    <button className="am-action-btn">
                        <RefreshCw size={14} /> Sync Data
                    </button>
                </div>

                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9ca3af]" size={12} />
                    <input
                        type="text"
                        placeholder="Search awards..."
                        className="pl-8 pr-3 py-1.5 bg-white dark:bg-[#1f2937] border border-[#e5e7eb] dark:border-[#374151] rounded text-[11px] outline-none focus:border-[#0066ff] w-48 shadow-sm"
                    />
                </div>
            </div>

            {/* Main Certificate Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificates.map(cert => (
                    <div key={cert.id} className={`am-card group hover:scale-[1.01] transition-all duration-300 ${cert.status === 'Locked' ? 'grayscale opacity-60' : ''}`}>
                        {/* Certificate Preview Mockup */}
                        <div className={`h-40 ${cert.color} rounded-t-lg -mx-5 -mt-5 mb-4 relative flex items-center justify-center overflow-hidden`}>
                            {/* Decorative Elements */}
                            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                                <Award className="w-full h-full absolute -right-10' -bottom-10" />
                            </div>
                            <div className="absolute top-2 left-2 text-[8px] text-white font-bold opacity-30 uppercase tracking-widest">Official Document</div>

                            <div className="relative z-10 flex flex-col items-center">
                                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white mb-2 border border-white/30">
                                    <Award size={24} />
                                </div>
                                <div className="text-[11px] font-bold text-white/90 uppercase tracking-widest">YoPips.com</div>
                            </div>
                        </div>

                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <h3 className="text-[15px] font-bold text-[#111827] dark:text-[#f3f4f6] m-0">{cert.title}</h3>
                                <div className="text-[11px] text-[#6b7280] dark:text-[#9ca3af]">{cert.type}</div>
                            </div>
                            {cert.status === 'Locked' ? (
                                <FileCheck size={18} className="text-[#9ca3af]" />
                            ) : (
                                <span className="am-badge am-badge-success">Earned</span>
                            )}
                        </div>

                        <div className="flex flex-col gap-2 mb-4">
                            <div className="flex justify-between text-[11px] py-1 border-b border-[#f3f4f6] dark:border-[#374151]">
                                <span className="text-[#9ca3af] flex items-center gap-1"><Calendar size={10} /> Date Received</span>
                                <span className="text-[#111827] dark:text-[#f3f4f6] font-medium">{cert.date}</span>
                            </div>
                            <div className="flex justify-between text-[11px]">
                                <span className="text-[#9ca3af] flex items-center gap-1"><Medal size={10} /> Reward Size</span>
                                <span className="text-[#111827] dark:text-[#f3f4f6] font-medium">{cert.size}</span>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <button className="flex-1 am-btn-primary py-2 text-[11px]" disabled={cert.status === 'Locked'}>
                                <Download size={14} /> Download
                            </button>
                            <button className="p-2 am-btn-secondary" disabled={cert.status === 'Locked'}>
                                <Share2 size={14} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Achievement Summary Section */}
            <div className="mt-10 am-card">
                <h3 className="am-card-title">Achievement Statistics</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4">
                        <div className="text-2xl font-bold text-[#111827] dark:text-[#f3f4f6]">3</div>
                        <div className="text-[11px] text-[#9ca3af] uppercase font-bold tracking-wider">Total Awards</div>
                    </div>
                    <div className="text-center p-4 border-l border-[#f3f4f6] dark:border-[#374151]">
                        <div className="text-2xl font-bold text-[#10b981]">100%</div>
                        <div className="text-[11px] text-[#9ca3af] uppercase font-bold tracking-wider">Completion</div>
                    </div>
                    <div className="text-center p-4 border-l border-[#f3f4f6] dark:border-[#374151]">
                        <div className="text-2xl font-bold text-[#0066ff]">Level 2</div>
                        <div className="text-[11px] text-[#9ca3af] uppercase font-bold tracking-wider">Rank Level</div>
                    </div>
                    <div className="text-center p-4 border-l border-[#f3f4f6] dark:border-[#374151]">
                        <div className="text-2xl font-bold text-[#f59e0b]">Top 5%</div>
                        <div className="text-[11px] text-[#9ca3af] uppercase font-bold tracking-wider">Global Standing</div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="am-footer">
                <p className="am-footer-copyright">2026 © Copyright - YoPips.com</p>
            </div>
        </div>
    );
}

export default Certificates;
