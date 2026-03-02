import React, { useState } from 'react';
import { Download, ArrowUpRight, ArrowDownLeft, Clock, CheckCircle2, XCircle, Search, ChevronDown } from 'lucide-react';

const BillingHistory = ({ walletData, challenges = [] }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const purchasetxs = challenges.map(c => ({
        id: c.id,
        type: 'purchase',
        amount: c.initial_balance ? (c.initial_balance / 1000) * 5 : 430,
        description: `${c.challenge_type} Challenge (${c.initial_balance ? c.initial_balance / 1000 : 0}k)`,
        status: 'paid',
        date: c.created_at,
        currency: 'USD'
    }));

    const walletTxs = walletData?.transactions || [];
    const allTransactions = [...purchasetxs, ...walletTxs].sort((a, b) => new Date(b.date) - new Date(a.date));

    const filteredTransactions = allTransactions.filter(tx =>
        tx.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tx.id?.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getStatusBadge = (status) => {
        const styles = {
            paid: 'bg-[#d1fae5] dark:bg-[#064e3b] text-[#10b981] dark:text-[#34d399]',
            processed: 'bg-[#d1fae5] dark:bg-[#064e3b] text-[#10b981] dark:text-[#34d399]',
            pending: 'bg-[#fef3c7] dark:bg-[#78350f] text-[#f59e0b] dark:text-[#fbbf24]',
            failed: 'bg-[#fee2e2] dark:bg-[#7f1d1d] text-[#ef4444] dark:text-[#f87171]',
            refunded: 'bg-[#f3f4f6] dark:bg-[#374151] text-[#6b7280] dark:text-[#9ca3af]'
        };
        const icons = {
            paid: <CheckCircle2 size={12} />,
            processed: <CheckCircle2 size={12} />,
            pending: <Clock size={12} />,
            failed: <XCircle size={12} />,
            refunded: <ArrowDownLeft size={12} />
        };

        const s = status?.toLowerCase() || 'pending';
        return (
            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold capitalize ${styles[s] || styles.pending}`}>
                {icons[s]} {s}
            </span>
        );
    };

    return (
        <>
            <div className="flex items-center justify-between mb-4">
                <h3 className="m-0 text-[15px] font-semibold text-[#111827] dark:text-[#f3f4f6]">Transaction History</h3>
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9ca3af]" size={14} />
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-9 pr-4 py-2 bg-[#f9fafb] dark:bg-[#262626] border border-[#e5e7eb] dark:border-[#374151] rounded text-[13px] focus:outline-none focus:border-[#0066ff] text-[#1a1a1a] dark:text-[#f3f4f6] w-48"
                        />
                    </div>
                    <button className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-[#1f2937] border border-[#e5e7eb] dark:border-[#374151] rounded text-[13px] font-medium text-[#374151] dark:text-[#e5e7eb] hover:bg-[#f9fafb] dark:hover:bg-[#374151]">
                        <Download size={14} /> Export
                    </button>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse min-w-[600px]">
                    <thead>
                        <tr>
                            <th className="text-left text-[11px] font-semibold text-[#6b7280] dark:text-[#9ca3af] pb-3 border-b border-[#f3f4f6] dark:border-[#374151]">Description</th>
                            <th className="text-left text-[11px] font-semibold text-[#6b7280] dark:text-[#9ca3af] pb-3 border-b border-[#f3f4f6] dark:border-[#374151]">Date</th>
                            <th className="text-left text-[11px] font-semibold text-[#6b7280] dark:text-[#9ca3af] pb-3 border-b border-[#f3f4f6] dark:border-[#374151]">Type</th>
                            <th className="text-right text-[11px] font-semibold text-[#6b7280] dark:text-[#9ca3af] pb-3 border-b border-[#f3f4f6] dark:border-[#374151]">Amount</th>
                            <th className="text-center text-[11px] font-semibold text-[#6b7280] dark:text-[#9ca3af] pb-3 border-b border-[#f3f4f6] dark:border-[#374151]">Status</th>
                            <th className="pb-3 border-b border-[#f3f4f6] dark:border-[#374151]"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredTransactions.length === 0 ? (
                            <tr>
                                <td colSpan="6" className="py-8 text-center text-[#9ca3af] text-[13px]">
                                    No transactions found
                                </td>
                            </tr>
                        ) : (
                            filteredTransactions.map((tx, i) => (
                                <tr key={tx.id || i}>
                                    <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] align-middle">
                                        <div className="flex items-center gap-3">
                                            <div className={`p-2 rounded ${tx.type === 'debit' ? 'bg-[#f0fdf4] dark:bg-[#064e3b]' : 'bg-[#f3f4f6] dark:bg-[#374151]'}`}>
                                                {tx.type === 'debit' ? <ArrowUpRight size={14} className="text-[#10b981]" /> : <ArrowDownLeft size={14} className="text-[#6b7280]" />}
                                            </div>
                                            <div>
                                                <div className="font-medium text-[#111827] dark:text-[#f3f4f6]">{tx.description || tx.id}</div>
                                                <div className="text-[11px] text-[#9ca3af]">ID: {tx.id}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] align-middle text-[#374151] dark:text-[#9ca3af]">
                                        <div>{new Date(tx.date).toLocaleDateString()}</div>
                                        <div className="text-[11px] text-[#9ca3af]">{new Date(tx.date).toLocaleTimeString()}</div>
                                    </td>
                                    <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] align-middle">
                                        <span className="text-[11px] font-medium px-2 py-1 rounded bg-[#f3f4f6] dark:bg-[#374151] text-[#6b7280] dark:text-[#9ca3af] capitalize">
                                            {tx.type}
                                        </span>
                                    </td>
                                    <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] align-middle text-right font-semibold text-[#111827] dark:text-[#f3f4f6]">
                                        {tx.type === 'debit' ? '-' : '+'}${Math.abs(tx.amount).toFixed(2)}
                                    </td>
                                    <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] align-middle text-center">
                                        {getStatusBadge(tx.status)}
                                    </td>
                                    <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] align-middle">
                                        <button className="p-1.5 rounded hover:bg-[#f3f4f6] dark:hover:bg-[#374151] text-[#9ca3af]">
                                            <ChevronDown size={14} />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            <div className="pt-4 border-t border-[#f3f4f6] dark:border-[#374151] flex items-center justify-between text-[11px] text-[#9ca3af] mt-4">
                <span>Showing {filteredTransactions.length} results</span>
                <div className="flex gap-2">
                    <button className="px-3 py-1 rounded border border-[#e5e7eb] dark:border-[#374151] hover:bg-[#f9fafb] dark:hover:bg-[#374151] disabled:opacity-50" disabled>Previous</button>
                    <button className="px-3 py-1 rounded border border-[#e5e7eb] dark:border-[#374151] hover:bg-[#f9fafb] dark:hover:bg-[#374151] disabled:opacity-50" disabled>Next</button>
                </div>
            </div>
        </>
    );
};

export default BillingHistory;
