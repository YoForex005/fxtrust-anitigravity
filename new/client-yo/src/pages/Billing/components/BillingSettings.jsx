import React, { useState } from 'react';
import { Info } from 'lucide-react';

const BillingSettings = () => {
    const [address, setAddress] = useState({
        line1: '123 Trading St',
        city: 'New York',
        country: 'USA',
        zip: '10001'
    });

    return (
        <>
            <div className="flex items-center justify-between mb-4">
                <h3 className="m-0 text-[15px] font-semibold text-[#111827] dark:text-[#f3f4f6]">Billing Settings</h3>
            </div>

            <div className="flex flex-col">
                <div className="flex justify-between py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px]">
                    <span className="text-[#6b7280] dark:text-[#9ca3af] flex items-center gap-1">Billing Address <Info size={12} /></span>
                    <span className="font-medium text-[#1a1a1a] dark:text-[#f3f4f6] text-right">
                        {address.line1}, {address.city}
                    </span>
                </div>
                <div className="flex justify-between py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px]">
                    <span className="text-[#6b7280] dark:text-[#9ca3af]">Country</span>
                    <span className="font-medium text-[#1a1a1a] dark:text-[#f3f4f6]">{address.country}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px]">
                    <span className="text-[#6b7280] dark:text-[#9ca3af]">ZIP Code</span>
                    <span className="font-medium text-[#1a1a1a] dark:text-[#f3f4f6]">{address.zip}</span>
                </div>
                <div className="flex justify-between py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px]">
                    <span className="text-[#6b7280] dark:text-[#9ca3af]">Currency</span>
                    <span className="font-medium text-[#1a1a1a] dark:text-[#f3f4f6]">USD</span>
                </div>
                <div className="flex justify-between py-3 text-[13px]">
                    <span className="text-[#6b7280] dark:text-[#9ca3af]">Invoice Email</span>
                    <span className="bg-[#10b981] text-white px-2 py-0.5 rounded text-[11px] font-semibold">Enabled</span>
                </div>
            </div>

            <button className="mt-4 w-full py-2.5 border border-[#e5e7eb] dark:border-[#374151] bg-white dark:bg-[#1f2937] text-[#374151] dark:text-[#e5e7eb] font-medium rounded-lg text-[13px] hover:bg-[#f9fafb] dark:hover:bg-[#374151] transition-all">
                Edit Settings
            </button>
        </>
    );
};

export default BillingSettings;
