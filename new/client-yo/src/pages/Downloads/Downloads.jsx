import React from 'react';
import {
    Download, Monitor, Terminal, Calculator,
    FileText, Image as ImageIcon, ExternalLink,
    Apple, Smartphone, Globe, ChevronRight
} from 'lucide-react';

// --- SVG Icons Components ---
const WindowsLogo = () => (
    <svg viewBox="0 0 88 88" className="w-3.5 h-3.5 fill-current">
        <path d="M0 12.402l35.687-4.86.016 34.423-35.67.203L0 12.402zm35.67 33.529l.028 34.253L.028 75.028l-.028-29.08 35.67-.017zm4.326-38.643L88 0v41.938l-48.004.16V7.288zm0 38.83l48.004.238V88L40.024 80.3l-.028-34.182z" />
    </svg>
);

const MT4Logo = () => (
    <div className="w-10 h-10 rounded-lg bg-[#f3f4f6] dark:bg-[#1a1a1a] flex items-center justify-center border border-[#e5e7eb] dark:border-[#374151]">
        <div className="text-[11px] font-bold text-[#111827] dark:text-[#f3f4f6]">MT4</div>
    </div>
);

const MT5Logo = () => (
    <div className="w-10 h-10 rounded-lg bg-[#f3f4f6] dark:bg-[#1a1a1a] flex items-center justify-center border border-[#e5e7eb] dark:border-[#374151]">
        <div className="text-[11px] font-bold text-[#111827] dark:text-[#f3f4f6]">MT5</div>
    </div>
);

const CTraderLogo = () => (
    <div className="w-10 h-10 rounded-lg bg-[#f3f4f6] dark:bg-[#1a1a1a] flex items-center justify-center border border-[#e5e7eb] dark:border-[#374151]">
        <div className="text-[11px] font-bold text-[#111827] dark:text-[#f3f4f6]">CT</div>
    </div>
);

function Downloads() {
    return (
        <div className="am-page">
            {/* Breadcrumbs */}
            <div className="am-breadcrumbs">
                <span>Resources</span>
                <span className="mx-1">/</span>
                <span className="am-breadcrumbs-current">Downloads</span>
            </div>

            {/* Page Header */}
            <div className="am-page-title">
                <Download size={20} className="text-[#6b7280]" />
                <h1>Downloads Center</h1>
            </div>

            {/* Section: Trading Platforms */}
            <div className="mb-8">
                <h3 className="text-[11px] font-bold text-[#6b7280] dark:text-[#9ca3af] uppercase tracking-wide mb-4 flex items-center gap-2">
                    <Monitor size={14} /> Trading Platforms
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {/* MetaTrader 4 */}
                    <div className="am-card flex flex-col">
                        <div className="flex justify-between items-start mb-4">
                            <MT4Logo />
                            <span className="am-badge am-badge-success">Classic</span>
                        </div>
                        <h4 className="text-[15px] font-bold text-[#111827] dark:text-[#f3f4f6] mb-1">MetaTrader 4</h4>
                        <p className="text-[11px] text-[#6b7280] dark:text-[#9ca3af] mb-6 flex-grow">
                            The world's most popular trading platform for forex and CFDs.
                        </p>
                        <div className="space-y-2">
                            <button className="w-full am-btn-secondary py-2 flex items-center justify-center gap-2 text-[11px]">
                                <WindowsLogo /> Windows
                            </button>
                            <button className="w-full am-btn-secondary py-2 flex items-center justify-center gap-2 text-[11px]">
                                <Apple size={14} /> macOS
                            </button>
                        </div>
                    </div>

                    {/* MetaTrader 5 */}
                    <div className="am-card flex flex-col border-[#0066ff]/20">
                        <div className="flex justify-between items-start mb-4">
                            <MT5Logo />
                            <span className="am-badge am-badge-primary">Recommended</span>
                        </div>
                        <h4 className="text-[15px] font-bold text-[#111827] dark:text-[#f3f4f6] mb-1">MetaTrader 5</h4>
                        <p className="text-[11px] text-[#6b7280] dark:text-[#9ca3af] mb-6 flex-grow">
                            Next-generation multi-asset platform with advanced analysis tools.
                        </p>
                        <div className="space-y-2">
                            <button className="w-full am-btn-primary py-2 flex items-center justify-center gap-2 text-[11px]">
                                <WindowsLogo /> Windows
                            </button>
                            <button className="w-full am-btn-secondary py-2 flex items-center justify-center gap-2 text-[11px]">
                                <Apple size={14} /> macOS
                            </button>
                        </div>
                    </div>

                    {/* cTrader */}
                    <div className="am-card flex flex-col">
                        <div className="flex justify-between items-start mb-4">
                            <CTraderLogo />
                            <span className="am-badge am-badge-dark">Modern</span>
                        </div>
                        <h4 className="text-[15px] font-bold text-[#111827] dark:text-[#f3f4f6] mb-1">cTrader</h4>
                        <p className="text-[11px] text-[#6b7280] dark:text-[#9ca3af] mb-6 flex-grow">
                            Intuitive interface with advanced order types and fast execution.
                        </p>
                        <div className="space-y-2">
                            <button className="w-full am-btn-secondary py-2 flex items-center justify-center gap-2 text-[11px]">
                                <WindowsLogo /> Windows
                            </button>
                            <button className="w-full am-btn-secondary py-2 flex items-center justify-center gap-2 text-[11px]">
                                <Globe size={14} /> Web Trader
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Apps Promo */}
            <div className="am-card bg-[#111827] dark:bg-[#1a1a1a] text-white border-none mb-10 p-8 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#0066ff]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">Trade on the go</h3>
                        <p className="text-[#9ca3af] text-[13px] mb-6 max-w-md">
                            Never miss a trade with our powerful mobile apps. Available for iOS and Android devices with full functionality.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <button className="flex items-center gap-2 bg-white text-[#111827] px-4 py-2 rounded font-bold text-[11px] hover:bg-gray-100 transition-colors">
                                <Apple size={16} fill="currentColor" /> App Store
                            </button>
                            <button className="flex items-center gap-2 bg-transparent border border-[#374151] text-white px-4 py-2 rounded font-bold text-[11px] hover:bg-white/5 transition-colors">
                                <Smartphone size={16} /> Google Play
                            </button>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <Smartphone size={120} className="text-[#374151] opacity-50" />
                    </div>
                </div>
            </div>

            {/* Tools Grid */}
            <div className="mb-8">
                <h3 className="text-[11px] font-bold text-[#6b7280] dark:text-[#9ca3af] uppercase tracking-wide mb-4 flex items-center gap-2">
                    <Terminal size={14} /> Essential Tools
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="am-card p-4 text-center hover:border-[#0066ff] transition-colors cursor-pointer group">
                        <div className="w-10 h-10 bg-[#f9fafb] dark:bg-[#1c1c1c] text-[#0066ff] rounded-lg flex items-center justify-center mx-auto mb-3 border border-[#f3f4f6] dark:border-[#333]">
                            <Calculator size={18} />
                        </div>
                        <div className="text-[13px] font-bold text-[#111827] dark:text-[#f3f4f6] mb-0.5">Risk Calc</div>
                        <div className="text-[10px] text-[#9ca3af]">Lot size helper</div>
                    </div>

                    <div className="am-card p-4 text-center hover:border-[#0066ff] transition-colors cursor-pointer group">
                        <div className="w-10 h-10 bg-[#f9fafb] dark:bg-[#1c1c1c] text-[#10b981] rounded-lg flex items-center justify-center mx-auto mb-3 border border-[#f3f4f6] dark:border-[#333]">
                            <FileText size={18} />
                        </div>
                        <div className="text-[13px] font-bold text-[#111827] dark:text-[#f3f4f6] mb-0.5">Journal</div>
                        <div className="text-[10px] text-[#9ca3af]">Excel template</div>
                    </div>

                    <div className="am-card p-4 text-center hover:border-[#0066ff] transition-colors cursor-pointer group">
                        <div className="w-10 h-10 bg-[#f9fafb] dark:bg-[#1c1c1c] text-[#f59e0b] rounded-lg flex items-center justify-center mx-auto mb-3 border border-[#f3f4f6] dark:border-[#333]">
                            <ImageIcon size={18} />
                        </div>
                        <div className="text-[13px] font-bold text-[#111827] dark:text-[#f3f4f6] mb-0.5">Wallpapers</div>
                        <div className="text-[10px] text-[#9ca3af]">HD Graphics</div>
                    </div>

                    <div className="am-card p-4 text-center hover:border-[#0066ff] transition-colors cursor-pointer group">
                        <div className="w-10 h-10 bg-[#f9fafb] dark:bg-[#1c1c1c] text-[#ef4444] rounded-lg flex items-center justify-center mx-auto mb-3 border border-[#f3f4f6] dark:border-[#333]">
                            <Terminal size={18} />
                        </div>
                        <div className="text-[13px] font-bold text-[#111827] dark:text-[#f3f4f6] mb-0.5">Magic Keys</div>
                        <div className="text-[10px] text-[#9ca3af]">On-screen tool</div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="am-footer">
                <div className="am-footer-links">
                    <a href="#" className="am-footer-link">MT4 Help</a>
                    <a href="#" className="am-footer-link">MT5 Help</a>
                    <a href="#" className="am-footer-link">Setup Guide</a>
                </div>
                <p className="am-footer-copyright">2026 © Copyright - YoPips.com</p>
            </div>
        </div>
    );
}

export default Downloads;
