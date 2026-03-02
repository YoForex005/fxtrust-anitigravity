import React, { useState, useEffect } from 'react';
import { flexyService } from '../../services/flexyService';
import PayoutDashboard from './components/PayoutDashboard';
import ProfitSplitCalculator from './components/ProfitSplitCalculator';
import BillingHistory from './components/BillingHistory';
import PaymentMethods from './components/PaymentMethods';
import BillingSettings from './components/BillingSettings';
import SavingsCalculator from '../../components/Dashboard/SavingsCalculator';
import PlanComparison from '../../components/Dashboard/PlanComparison';
import { Loader2, CreditCard, RefreshCw, Download, Phone } from 'lucide-react';

function Billing() {
    const [loading, setLoading] = useState(true);
    const [walletData, setWalletData] = useState(null);
    const [challenges, setChallenges] = useState([]);
    const [activeLogin, setActiveLogin] = useState(null);
    const [activeTab, setActiveTab] = useState('overview');

    const loadData = async () => {
        try {
            const accounts = await flexyService.getAccounts();
            if (accounts && accounts.length > 0) {
                const login = accounts[0].login || accounts[0].Login;
                setActiveLogin(login);

                const [walletRes, challengesRes] = await Promise.all([
                    flexyService.getWalletHistory(login).catch(err => ({ balance: 0, transactions: [] })),
                    flexyService.apiCall && flexyService.apiCall(`/challenges/by-account/${login}`).catch(() => ({ challenges: [] }))
                ]);

                setWalletData(walletRes);
            }
        } catch (err) {
            console.error('Failed to load billing data', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#f3f4f6] dark:bg-[#0d0d0d]">
                <Loader2 className="animate-spin text-[#1d1d1f] dark:text-white" size={32} />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f3f4f6] dark:bg-[#0d0d0d] p-6 lg:p-10 font-sans text-[#1a1a1a] dark:text-[#f3f4f6]">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-1.5 mb-3 text-[11px] text-[#9ca3af] dark:text-[#6b7280]">
                <span>Dashboard</span>
                <span className="mx-1">/</span>
                <span className="text-[#4b5563] dark:text-[#9ca3af]">Billing & Payouts</span>
            </div>

            {/* Page Header */}
            <div className="flex items-center mb-5">
                <div className="flex items-center gap-3">
                    <CreditCard size={20} className="text-[#6b7280]" />
                    <h1 className="text-xl font-semibold m-0 text-[#1a1a1a] dark:text-[#f3f4f6]">Billing & Payouts</h1>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 mb-6">
                <button
                    className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#1f2937] border border-[#e5e7eb] dark:border-[#374151] rounded text-[13px] font-medium text-[#374151] dark:text-[#e5e7eb] cursor-pointer shadow-sm hover:bg-[#f9fafb] dark:hover:bg-[#374151] transition-all duration-200"
                    onClick={() => loadData()}
                >
                    <RefreshCw size={14} /> Refresh
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#1f2937] border border-[#e5e7eb] dark:border-[#374151] rounded text-[13px] font-medium text-[#374151] dark:text-[#e5e7eb] cursor-pointer shadow-sm hover:bg-[#f9fafb] dark:hover:bg-[#374151] transition-all duration-200">
                    <Download size={14} /> Export
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#1f2937] border border-[#e5e7eb] dark:border-[#374151] rounded text-[13px] font-medium text-[#374151] dark:text-[#e5e7eb] cursor-pointer shadow-sm hover:bg-[#f9fafb] dark:hover:bg-[#374151] transition-all duration-200">
                    <Phone size={14} /> Support
                </button>
            </div>

            {/* Tab Switcher */}
            <div className="flex gap-4 mb-6 border-b border-[#e5e7eb] dark:border-[#374151]">
                <button
                    className={`pb-2 text-sm font-semibold transition-colors ${activeTab === 'overview' ? 'text-[#0066ff] border-b-2 border-[#0066ff]' : 'text-[#6b7280] dark:text-[#9ca3af] hover:text-[#111827] dark:hover:text-[#f3f4f6]'}`}
                    onClick={() => setActiveTab('overview')}
                >
                    Overview
                </button>
                <button
                    className={`pb-2 text-sm font-semibold transition-colors ${activeTab === 'history' ? 'text-[#0066ff] border-b-2 border-[#0066ff]' : 'text-[#6b7280] dark:text-[#9ca3af] hover:text-[#111827] dark:hover:text-[#f3f4f6]'}`}
                    onClick={() => setActiveTab('history')}
                >
                    Transaction History
                </button>
                <button
                    className={`pb-2 text-sm font-semibold transition-colors ${activeTab === 'settings' ? 'text-[#0066ff] border-b-2 border-[#0066ff]' : 'text-[#6b7280] dark:text-[#9ca3af] hover:text-[#111827] dark:hover:text-[#f3f4f6]'}`}
                    onClick={() => setActiveTab('settings')}
                >
                    Settings
                </button>
            </div>

            {activeTab === 'overview' && (
                <>
                    {/* Payout Dashboard */}
                    <PayoutDashboard walletData={walletData} onPayoutRequested={loadData} />

                    {/* Payment Methods & Billing Settings */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8 mb-8">
                        <div className="bg-white dark:bg-[#141414] rounded-lg p-5 shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-transparent dark:border-[#333]">
                            <PaymentMethods />
                        </div>
                        <div className="bg-white dark:bg-[#141414] rounded-lg p-5 shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-transparent dark:border-[#333]">
                            <BillingSettings />
                        </div>
                    </div>

                    {/* Profit Split Calculator */}
                    <div className="mb-8">
                        <ProfitSplitCalculator />
                    </div>

                    {/* Plan Comparison Section */}
                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mb-8">
                        <div className="xl:col-span-1">
                            <SavingsCalculator />
                        </div>
                        <div className="xl:col-span-2">
                            <PlanComparison />
                        </div>
                    </div>
                </>
            )}

            {activeTab === 'history' && (
                <div className="bg-white dark:bg-[#141414] rounded-lg p-5 shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-transparent dark:border-[#333]">
                    <BillingHistory walletData={walletData} challenges={challenges} />
                </div>
            )}

            {activeTab === 'settings' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div className="bg-white dark:bg-[#141414] rounded-lg p-5 shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-transparent dark:border-[#333]">
                        <PaymentMethods />
                    </div>
                    <div className="bg-white dark:bg-[#141414] rounded-lg p-5 shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-transparent dark:border-[#333]">
                        <BillingSettings />
                    </div>
                </div>
            )}

            {/* Footer */}
            <div className="border-t border-[#e5e7eb] dark:border-[#374151] pt-8 text-center mt-12">
                <div className="mb-5 flex justify-center gap-5">
                    <a href="#" className="text-[#111827] dark:text-[#f3f4f6] underline text-xs font-semibold">Cookie settings</a>
                    <a href="#" className="text-[#111827] dark:text-[#f3f4f6] underline text-xs font-semibold">Privacy policy</a>
                    <a href="#" className="text-[#111827] dark:text-[#f3f4f6] underline text-xs font-semibold">Terms & Conditions</a>
                </div>
                <p className="text-[10px] text-[#6b7280] dark:text-[#9ca3af] leading-relaxed mb-5 max-w-2xl mx-auto">
                    Yo Pips provides simulated trading services. All accounts are demo accounts with virtual funds.
                    Performance on simulated accounts does not guarantee real-world results. Payouts are based on simulated profit performance.
                </p>
                <p className="text-[11px] text-[#9ca3af]">2026 © Copyright - YoPips.com</p>
            </div>
        </div>
    );
}

export default Billing;
