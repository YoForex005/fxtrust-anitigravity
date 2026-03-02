import React from 'react';
import { AlertTriangle, LogOut } from 'lucide-react';

const ImpersonationBanner = () => {
    const handleEndSession = () => {
        // Clear tokens and metadata
        localStorage.removeItem('token');
        localStorage.removeItem('isImpersonated');

        // Close the window (industrial best practice for impersonation hand-off)
        // Note: window.close() only works on windows opened via script (window.open)
        // If it fails, we redirect to login or a "Session Ended" page.
        try {
            window.close();
            // Fallback for some browsers
            window.location.href = '/login';
        } catch (e) {
            window.location.href = '/login';
        }
    };

    return (
        <div className="fixed top-0 left-0 right-0 z-[9999] bg-[#f59e0b] text-[#78350f] border-b border-[#d97706] px-4 py-2 shadow-lg">
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 font-bold text-sm">
                    <AlertTriangle className="w-5 h-5 animate-pulse" />
                    <span>ADMIN IMPERSONATION MODE</span>
                    <span className="hidden md:inline font-normal opacity-90 mx-2">|</span>
                    <span className="hidden md:inline font-normal">
                        You are viewing this dashboard as a user. Actions will affect their live data.
                    </span>
                </div>

                <button
                    onClick={handleEndSession}
                    className="flex items-center gap-2 bg-[#78350f] text-white px-3 py-1 rounded-md text-xs font-bold hover:bg-[#451a03] transition-colors"
                >
                    <LogOut className="w-3 h-3" />
                    END SESSION
                </button>
            </div>
        </div>
    );
};

export default ImpersonationBanner;
