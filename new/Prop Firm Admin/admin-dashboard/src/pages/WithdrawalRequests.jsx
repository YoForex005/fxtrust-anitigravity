import React from 'react';
import {
    HelpCircle,
    Info,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';

const WithdrawalRequests = () => {
    return (
        <div className="space-y-6 animate-in fade-in zoom-in duration-300">

            {/* Header */}
            <div>
                <div className="flex items-center gap-2 mb-6">
                    <h1 className="text-2xl font-bold text-text-main">Withdrawal Requests</h1>
                    <span className="text-text-muted text-sm border-l border-border pl-2">User Withdrawal Requests</span>
                    <a href="#" className="text-primary text-xs flex items-center gap-1 hover:underline ml-2">
                        Need Help? <HelpCircle className="w-3 h-3" />
                    </a>
                </div>
            </div>

            {/* Main Content Card */}
            <div className="glass-panel rounded-2xl overflow-hidden border border-border">

                {/* Table */}
                <div className="overflow-x-auto min-h-[200px]">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-surface/50 text-text-muted text-xs font-medium border-b border-border">
                                <th className="p-4 font-medium pl-6">Id</th>
                                <th className="p-4 font-medium">User Name</th>
                                <th className="p-4 font-medium">Account Number</th>
                                <th className="p-4 font-medium">Profit</th>
                                <th className="p-4 font-medium">Profit Withdrawable</th>
                                <th className="p-4 font-medium">Comment</th>
                                <th className="p-4 font-medium">Amount</th>
                                <th className="p-4 font-medium">Status</th>
                                <th className="p-4 font-medium">Created At</th>
                                <th className="p-4 font-medium">Updated At</th>
                                <th className="p-4 font-medium text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border text-sm">
                            <tr>
                                <td colSpan="11" className="p-8 text-center text-text-muted italic">
                                    <div className="flex items-center gap-2 justify-center opacity-70">
                                        <Info className="w-4 h-4" />
                                        No data.
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Footer / Pagination */}
                <div className="p-4 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-muted">
                    <div>
                        Showing to of <span className="font-medium text-text-main">0</span> entries
                    </div>

                    <div className="flex items-center gap-2">
                        <select className="bg-surface border border-border rounded p-1 text-text-main focus:outline-none focus:border-primary">
                            <option>100</option>
                            <option>50</option>
                            <option>25</option>
                        </select>
                        <div className="flex items-center rounded-lg border border-border overflow-hidden opacity-50">
                            <button className="p-2 bg-surface cursor-not-allowed border-r border-border"><ChevronLeft className="w-4 h-4" /></button>
                            <button className="px-3 py-2 bg-primary text-background font-bold">1</button>
                            <button className="p-2 bg-surface cursor-not-allowed border-l border-border"><ChevronRight className="w-4 h-4" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WithdrawalRequests;
