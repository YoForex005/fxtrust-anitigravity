import React, { useState } from 'react';
import { CreditCard, Plus, Trash2, Wallet } from 'lucide-react';

const PaymentMethods = () => {
    const [methods, setMethods] = useState([
        { id: 1, type: 'card', last4: '4242', brand: 'Visa', expiry: '12/28', isDefault: true },
        { id: 2, type: 'crypto', name: 'USDT Wallet', address: '0x123...abc', isDefault: false }
    ]);
    const [showAddModal, setShowAddModal] = useState(false);

    const handleDelete = (id) => {
        setMethods(methods.filter(m => m.id !== id));
    };

    return (
        <>
            <div className="flex items-center justify-between mb-4">
                <h3 className="m-0 text-[15px] font-semibold text-[#111827] dark:text-[#f3f4f6]">Payment Methods</h3>
                <button
                    onClick={() => setShowAddModal(true)}
                    className="flex items-center gap-2 px-3 py-1.5 border border-[#e5e7eb] dark:border-[#4b5563] bg-white dark:bg-[#1f2937] rounded text-[13px] font-medium text-[#374151] dark:text-[#e5e7eb] hover:bg-[#f9fafb] dark:hover:bg-[#374151]"
                >
                    <Plus size={14} /> Add
                </button>
            </div>

            <div className="flex flex-col">
                {methods.map((method) => (
                    <div key={method.id} className="group flex justify-between py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px]">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-[#f3f4f6] dark:bg-[#374151] rounded">
                                {method.type === 'card' ? <CreditCard size={14} className="text-[#6b7280]" /> : <Wallet size={14} className="text-[#6b7280]" />}
                            </div>
                            <div>
                                <div className="font-medium text-[#111827] dark:text-[#f3f4f6] flex items-center gap-2">
                                    {method.type === 'card' ? `${method.brand} •••• ${method.last4}` : method.name}
                                    {method.isDefault && (
                                        <span className="bg-[#1d1d1f] dark:bg-white text-white dark:text-[#1d1d1f] px-1.5 py-0.5 rounded text-[9px] font-bold uppercase">Default</span>
                                    )}
                                </div>
                                <div className="text-[11px] text-[#9ca3af]">
                                    {method.type === 'card' ? `Expires ${method.expiry}` : method.address}
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => handleDelete(method.id)}
                            className="opacity-0 group-hover:opacity-100 p-1.5 text-[#ef4444] hover:bg-[#fee2e2] dark:hover:bg-[#7f1d1d] rounded transition-all"
                        >
                            <Trash2 size={14} />
                        </button>
                    </div>
                ))}

                {methods.length === 0 && (
                    <div className="py-8 text-center text-[#9ca3af] text-[13px]">
                        No payment methods added.
                    </div>
                )}
            </div>

            {showAddModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                    <div className="bg-white dark:bg-[#141414] w-full max-w-sm rounded-lg p-6 shadow-xl border border-[#e5e7eb] dark:border-[#333]">
                        <h3 className="text-[15px] font-semibold text-[#111827] dark:text-[#f3f4f6] mb-3">Add New Method</h3>
                        <p className="text-[13px] text-[#6b7280] dark:text-[#9ca3af] mb-5">This feature is coming soon.</p>
                        <button
                            onClick={() => setShowAddModal(false)}
                            className="w-full py-2.5 bg-[#1d1d1f] dark:bg-white text-white dark:text-[#1d1d1f] font-semibold rounded-lg text-[13px]"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default PaymentMethods;
