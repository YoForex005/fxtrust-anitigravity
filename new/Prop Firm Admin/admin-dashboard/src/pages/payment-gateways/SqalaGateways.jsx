import React, { useState } from 'react';
import {
    HelpCircle,
    Plus,
    RefreshCw,
    Search,
    RotateCcw,
    ChevronLeft,
    ChevronRight,
    Info
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../lib/utils';

const SqalaGateways = () => {
    const navigate = useNavigate();
    // Mock Data - Empty array to match screenshot "No data" state
    const gateWays = [];

    return (
        <div className="space-y-6 animate-in fade-in zoom-in duration-300">

            {/* Header */}
            <div>
                <div className="flex items-center gap-2 mb-1">
                    <h1 className="text-2xl font-bold text-text-main">Sqala Payment Gateways</h1>
                    <span className="text-text-muted text-sm border-l border-border pl-2">Sqala Payment Gateways</span>
                    <a href="#" className="text-primary text-xs flex items-center gap-1 hover:underline ml-2">
                        Need Help? <HelpCircle className="w-3 h-3" />
                    </a>
                </div>
            </div>

            {/* Toolbar */}
            <div className="flex justify-between items-center">
                <button
                    onClick={() => window.location.reload()}
                    className="flex items-center gap-2 px-4 py-2 bg-surface border border-border text-text-muted font-medium rounded-lg hover:bg-surface-lighter transition-colors text-sm"
                >
                    <RefreshCw className="w-4 h-4" />
                    Refresh
                </button>

                <button
                    onClick={() => navigate('/payment-gateways/sqala/new')}
                    className="flex items-center gap-2 px-4 py-2 bg-[#5d6bb3] text-white font-bold rounded-lg hover:bg-[#4d5999] transition-colors text-sm shadow-lg shadow-primary/20"
                >
                    <Plus className="w-4 h-4" />
                    New
                </button>
            </div>

            {/* Main Content Card */}
            <div className="glass-panel rounded-2xl overflow-hidden border border-border">

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-surface/50 text-text-muted text-xs font-medium border-b border-border">
                                <th className="p-4 w-12 text-center">
                                    <input
                                        type="checkbox"
                                        className="rounded border-border bg-background focus:ring-primary text-primary"
                                        disabled
                                    />
                                </th>
                                <th className="p-4 font-medium whitespace-nowrap">Icon</th>
                                <th className="p-4 font-medium whitespace-nowrap">Name</th>
                                <th className="p-4 font-medium whitespace-nowrap">Enabled</th>
                                <th className="p-4 font-medium whitespace-nowrap">Created</th>
                                <th className="p-4 font-medium whitespace-nowrap">Created At</th>
                                <th className="p-4 font-medium whitespace-nowrap">App Id</th>
                                <th className="p-4 font-medium whitespace-nowrap">App Secret</th>
                                <th className="p-4 font-medium whitespace-nowrap">Refresh Token</th>
                                <th className="p-4 font-medium whitespace-nowrap text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border text-sm">
                            {gateWays.length === 0 ? (
                                <tr>
                                    <td colSpan="10" className="p-8 text-center text-text-muted bg-white/5">
                                        <div className="flex items-center gap-2 p-4">
                                            <Info className="w-4 h-4" />
                                            <span>No data.</span>
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                gateWays.map((item) => (
                                    // Map rows here when data is available
                                    <tr key={item.id}><td colSpan="10"></td></tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Footer / Pagination */}
                <div className="p-4 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-muted">
                    <div>
                        Showing <span className="font-medium text-text-main">0</span> to <span className="font-medium text-text-main">0</span> of <span className="font-medium text-text-main">0</span> entries
                    </div>

                    <div className="flex items-center gap-2">
                        <select className="bg-surface border border-border rounded p-1 text-text-main focus:outline-none focus:border-primary">
                            <option>100</option>
                            <option>50</option>
                            <option>25</option>
                        </select>
                        <div className="flex items-center rounded-lg border border-border overflow-hidden opacity-50 cursor-not-allowed">
                            <button className="p-2 bg-surface transition-colors border-r border-border" disabled><ChevronLeft className="w-4 h-4" /></button>
                            <button className="px-3 py-2 bg-primary text-background font-bold">1</button>
                            <button className="p-2 bg-surface transition-colors border-l border-border" disabled><ChevronRight className="w-4 h-4" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SqalaGateways;
