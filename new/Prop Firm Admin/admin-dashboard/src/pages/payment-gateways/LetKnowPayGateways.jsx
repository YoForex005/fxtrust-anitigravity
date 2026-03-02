import React, { useState } from 'react';
import {
    HelpCircle,
    RefreshCw,
    Plus,
    ChevronLeft,
    ChevronRight,
    Info,
    Search
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../lib/utils';

const LetKnowPayGateways = () => {
    const navigate = useNavigate();
    // Mock Data - Empty array to match screenshot "No data" state
    const gateWays = [];

    return (
        <div className="space-y-6 animate-in fade-in zoom-in duration-300">

            {/* Header */}
            <div className="flex items-center gap-2 mb-6">
                <h1 className="text-2xl font-bold text-text-main">LetKnowPay Payment Gateways</h1>
                <span className="text-[#848fac] text-sm pl-2">LetKnowPay Payment Gateways</span>
                <a href="#" className="text-primary text-xs flex items-center gap-1 hover:underline ml-2">
                    Need Help? <HelpCircle className="w-3 h-3" />
                </a>
            </div>

            {/* Toolbar */}
            <div className="flex justify-between items-center mb-4">
                <button
                    onClick={() => window.location.reload()}
                    className="flex items-center gap-2 px-6 py-2 bg-white/5 border border-border text-[#a4adcb] font-medium rounded-lg hover:bg-white/10 transition-colors text-sm shadow-sm"
                >
                    <RefreshCw className="w-4 h-4" />
                    Refresh
                </button>

                <button
                    onClick={() => navigate('/payment-gateways/letknowpay/new')}
                    className="flex items-center gap-2 px-6 py-2 bg-[#5d6bb3] text-white font-medium rounded-lg hover:bg-[#4d5999] transition-colors text-sm shadow-md shadow-[#5d6bb3]/20"
                >
                    <Plus className="w-4 h-4" />
                    New
                </button>
            </div>

            {/* Main Content Card */}
            <div className="bg-white rounded-xl shadow-sm border border-[#e5e7eb] overflow-hidden">

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-[#f3f4f6] text-[#4b5563] text-sm font-medium border-b border-[#e5e7eb]">
                                <th className="p-4 w-12 text-center">
                                    <input
                                        type="checkbox"
                                        className="w-4 h-4 rounded border-[#d1d5db] bg-white focus:ring-primary text-primary"
                                        disabled
                                    />
                                </th>
                                <th className="p-4 font-medium whitespace-nowrap">Icon</th>
                                <th className="p-4 font-medium whitespace-nowrap">Name</th>
                                <th className="p-4 font-medium whitespace-nowrap">Enabled</th>
                                <th className="p-4 font-medium whitespace-nowrap">Created</th>
                                <th className="p-4 font-medium whitespace-nowrap">Created At</th>
                                <th className="p-4 font-medium whitespace-nowrap">Shop Id</th>
                                <th className="p-4 font-medium whitespace-nowrap">Shop Key</th>
                                <th className="p-4 font-medium whitespace-nowrap">Asset Type</th>
                                <th className="p-4 font-medium whitespace-nowrap">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {gateWays.length === 0 ? (
                                <tr>
                                    <td colSpan="10" className="p-10 text-center">
                                        <div className="flex items-center justify-center gap-2 text-[#6b7280]">
                                            <Info className="w-4 h-4" />
                                            <span className="text-sm">No data.</span>
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                gateWays.map((item) => (
                                    <tr key={item.id} className="border-b border-[#e5e7eb]">
                                        {/* Row data would go here */}
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Footer / Pagination */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-6">
                <div className="text-sm text-[#6b7280]">
                    Showing to of <span className="font-bold text-[#374151]">0</span> entries
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex items-center border border-[#e5e7eb] rounded px-2 bg-white">
                        <select className="bg-transparent py-1.5 text-sm text-[#374151] focus:outline-none appearance-none pr-6 font-medium">
                            <option value="100">100</option>
                            <option value="50">50</option>
                            <option value="25">25</option>
                        </select>
                        <ChevronLeft className="w-3 h-3 text-[#6b7280] -ml-4 pointer-events-none rotate-90" />
                    </div>

                    <div className="flex items-center gap-2">
                        <button className="p-1 text-[#6b7280] hover:text-[#374151] disabled:opacity-30" disabled>
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button className="w-8 h-8 rounded-full bg-[#5d6bb3] text-white flex items-center justify-center text-sm font-bold shadow-sm">
                            1
                        </button>
                        <button className="p-1 text-[#6b7280] hover:text-[#374151] disabled:opacity-30" disabled>
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LetKnowPayGateways;

