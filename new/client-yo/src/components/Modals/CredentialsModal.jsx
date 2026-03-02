import React, { useState } from 'react';
import { X, Copy, Eye, EyeOff, Info, Smartphone, Monitor, Globe, RefreshCw, Check, AlertCircle } from 'lucide-react';
import { flexyService } from '../../services/flexyService';

function CredentialsModal({ onClose, credentials, onPasswordChanged }) {
    const [showMasterPassword, setShowMasterPassword] = useState(true);
    const [showReadOnlyPassword, setShowReadOnlyPassword] = useState(false);
    const [copyToast, setCopyToast] = useState('');
    
    // Password change state
    const [changingPassword, setChangingPassword] = useState(null); // 'main' or 'investor' or null
    const [newPassword, setNewPassword] = useState('');
    const [passwordLoading, setPasswordLoading] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const [passwordSuccess, setPasswordSuccess] = useState('');

    const copyToClipboard = async (text, field) => {
        if (!text) return;
        
        try {
            // Primary method: Clipboard API (works on HTTPS/Localhost)
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(text);
                setCopyToast(`${field} copied!`);
            } else {
                // Fallback method: textarea hack (works on HTTP/LAN)
                const textArea = document.createElement("textarea");
                textArea.value = text;
                textArea.style.position = "fixed";
                textArea.style.left = "-9999px";
                textArea.style.top = "0";
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                
                try {
                    const successful = document.execCommand('copy');
                    if (successful) {
                        setCopyToast(`${field} copied!`);
                    } else {
                        setCopyToast('Copy failed');
                    }
                } catch (err) {
                    console.error('Fallback copy failed', err);
                    setCopyToast('Copy failed');
                }
                
                document.body.removeChild(textArea);
            }
        } catch (err) {
            console.error('Copy failed', err);
            setCopyToast('Failed to copy');
        }
        
        setTimeout(() => setCopyToast(''), 2000);
    };

    const handleChangePassword = async (type) => {
        const login = credentials?.login || credentials?.Login;
        if (!login) {
            setPasswordError('Login not found');
            return;
        }

        setPasswordLoading(true);
        setPasswordError('');
        setPasswordSuccess('');

        try {
            const result = await flexyService.resetPassword(login, newPassword || null, type);
            
            setPasswordSuccess(`Password changed successfully! New password: ${result.password}`);
            setNewPassword('');
            setChangingPassword(null);
            
            // Copy new password to clipboard
            navigator.clipboard.writeText(result.password);
            setCopyToast('New password copied!');
            setTimeout(() => setCopyToast(''), 3000);
            
            // Notify parent component if callback exists
            if (onPasswordChanged) {
                onPasswordChanged(type, result.password);
            }
        } catch (error) {
            setPasswordError(error.message || 'Failed to change password');
        } finally {
            setPasswordLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[10000] animate-[fadeIn_0.2s_ease-in]" onClick={onClose}>
            <div className="bg-white dark:bg-[#1f2937] rounded-xl w-[90%] max-w-[650px] max-h-[90vh] overflow-y-auto shadow-[0_20px_60px_rgba(0,0,0,0.3)] animate-[slideUp_0.3s_ease-out]" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center px-8 py-6 border-b border-[#e5e7eb] dark:border-[#374151]">
                    <h2 className="text-xl font-bold text-[#1a1a1a] dark:text-[#f3f4f6] m-0">Login Credentials</h2>
                    <button className="bg-transparent border-none text-[#666] dark:text-[#9ca3af] cursor-pointer p-1 flex items-center justify-center hover:text-[#1a1a1a] dark:hover:text-[#f3f4f6] transition-colors" onClick={onClose}>
                        <X size={20} />
                    </button>
                </div>

                <div className="p-8">
                    {/* Success/Error Messages */}
                    {passwordSuccess && (
                        <div className="mb-4 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center gap-2 text-green-700 dark:text-green-400 text-sm">
                            <Check size={16} />
                            {passwordSuccess}
                        </div>
                    )}
                    {passwordError && (
                        <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center gap-2 text-red-700 dark:text-red-400 text-sm">
                            <AlertCircle size={16} />
                            {passwordError}
                        </div>
                    )}

                    {/* Login */}
                    <div className="mb-6">
                        <label className="flex items-center gap-1.5 text-sm font-medium text-[#666] dark:text-[#9ca3af] mb-2">Login:</label>
                        <div className="flex items-center gap-2 flex-wrap">
                            <span className="flex-1 min-w-[200px] text-base font-medium text-[#1a1a1a] dark:text-[#f3f4f6]">{credentials?.login || credentials?.Login || ''}</span>
                            <button
                                className="bg-transparent border-none text-[#666] dark:text-[#9ca3af] cursor-pointer flex items-center gap-1 text-[13px] px-3 py-1.5 rounded hover:bg-[#f3f4f6] dark:hover:bg-[#374151] hover:text-[#1a1a1a] dark:hover:text-[#f3f4f6] transition-colors"
                                onClick={() => copyToClipboard(credentials?.login || credentials?.Login || '', 'Login')}
                            >
                                <Copy size={16} />
                                <span>Copy</span>
                            </button>
                        </div>
                    </div>

                    {/* Master Password */}
                    <div className="mb-6">
                        <label className="flex items-center gap-1.5 text-sm font-medium text-[#666] dark:text-[#9ca3af] mb-2">
                            Master password:
                            <Info size={14} className="text-[#999] dark:text-[#6b7280]" />
                        </label>
                        <div className="flex items-center gap-2 flex-wrap">
                            <span className="flex-1 min-w-[200px] text-base font-medium text-[#1a1a1a] dark:text-[#f3f4f6]">
                                {showMasterPassword ? (credentials?.password || credentials?.masterPassword || '') : '••••••••••'}
                            </span>
                            <button
                                className="bg-transparent border-none text-[#666] dark:text-[#9ca3af] cursor-pointer flex items-center gap-1 text-[13px] p-1.5 rounded hover:bg-[#f3f4f6] dark:hover:bg-[#374151] hover:text-[#1a1a1a] dark:hover:text-[#f3f4f6] transition-colors"
                                onClick={() => setShowMasterPassword(!showMasterPassword)}
                            >
                                {showMasterPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                            </button>
                            <button
                                className="bg-transparent border-none text-[#666] dark:text-[#9ca3af] cursor-pointer flex items-center gap-1 text-[13px] px-3 py-1.5 rounded hover:bg-[#f3f4f6] dark:hover:bg-[#374151] hover:text-[#1a1a1a] dark:hover:text-[#f3f4f6] transition-colors"
                                onClick={() => copyToClipboard(credentials?.password || credentials?.masterPassword || '', 'Master password')}
                            >
                                <Copy size={16} />
                                <span>Copy</span>
                            </button>
                            <button 
                                className="bg-blue-500 hover:bg-blue-600 text-white cursor-pointer flex items-center gap-1 text-[13px] px-3 py-1.5 rounded transition-colors disabled:opacity-50"
                                onClick={() => setChangingPassword('main')}
                                disabled={passwordLoading}
                            >
                                <RefreshCw size={14} className={passwordLoading && changingPassword === 'main' ? 'animate-spin' : ''} />
                                Change
                            </button>
                        </div>
                        
                        {/* Change Password Form for Master */}
                        {changingPassword === 'main' && (
                            <div className="mt-3 p-4 bg-gray-50 dark:bg-[#1f1f1f] rounded-lg border border-gray-200 dark:border-gray-700">
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                    Enter a new password or leave empty to auto-generate:
                                </p>
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        placeholder="New password (optional)"
                                        className="flex-1 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#2a2a2a] text-gray-900 dark:text-white text-sm"
                                    />
                                    <button
                                        onClick={() => handleChangePassword('main')}
                                        disabled={passwordLoading}
                                        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium disabled:opacity-50 flex items-center gap-2"
                                    >
                                        {passwordLoading ? <RefreshCw size={14} className="animate-spin" /> : <Check size={14} />}
                                        Confirm
                                    </button>
                                    <button
                                        onClick={() => {setChangingPassword(null); setNewPassword(''); setPasswordError('');}}
                                        className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Read-only Password */}
                    <div className="mb-6">
                        <label className="flex items-center gap-1.5 text-sm font-medium text-[#666] dark:text-[#9ca3af] mb-2">
                            Read-only password:
                            <Info size={14} className="text-[#999] dark:text-[#6b7280]" />
                        </label>
                        <div className="flex items-center gap-2 flex-wrap">
                            <span className="flex-1 min-w-[200px] text-base font-medium text-[#1a1a1a] dark:text-[#f3f4f6]">
                                {showReadOnlyPassword ? (credentials?.investor_password || credentials?.investorPassword || credentials?.readOnlyPassword || '') : '••••••••••'}
                            </span>
                            <button
                                className="bg-transparent border-none text-[#666] dark:text-[#9ca3af] cursor-pointer flex items-center gap-1 text-[13px] px-3 py-1.5 rounded hover:bg-[#f3f4f6] dark:hover:bg-[#374151] hover:text-[#1a1a1a] dark:hover:text-[#f3f4f6] transition-colors"
                                onClick={() => copyToClipboard(credentials?.investor_password || credentials?.investorPassword || credentials?.readOnlyPassword || '', 'Read-only password')}
                            >
                                <Copy size={16} />
                                <span>Copy</span>
                            </button>
                            <button 
                                className="bg-blue-500 hover:bg-blue-600 text-white cursor-pointer flex items-center gap-1 text-[13px] px-3 py-1.5 rounded transition-colors disabled:opacity-50"
                                onClick={() => setChangingPassword('investor')}
                                disabled={passwordLoading}
                            >
                                <RefreshCw size={14} className={passwordLoading && changingPassword === 'investor' ? 'animate-spin' : ''} />
                                Change
                            </button>
                        </div>
                        
                        {/* Change Password Form for Investor */}
                        {changingPassword === 'investor' && (
                            <div className="mt-3 p-4 bg-gray-50 dark:bg-[#1f1f1f] rounded-lg border border-gray-200 dark:border-gray-700">
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                    Enter a new password or leave empty to auto-generate:
                                </p>
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        placeholder="New password (optional)"
                                        className="flex-1 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#2a2a2a] text-gray-900 dark:text-white text-sm"
                                    />
                                    <button
                                        onClick={() => handleChangePassword('investor')}
                                        disabled={passwordLoading}
                                        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium disabled:opacity-50 flex items-center gap-2"
                                    >
                                        {passwordLoading ? <RefreshCw size={14} className="animate-spin" /> : <Check size={14} />}
                                        Confirm
                                    </button>
                                    <button
                                        onClick={() => {setChangingPassword(null); setNewPassword(''); setPasswordError('');}}
                                        className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Server */}
                    <div className="mb-6">
                        <label className="flex items-center gap-1.5 text-sm font-medium text-[#666] dark:text-[#9ca3af] mb-2">Server:</label>
                        <div className="flex items-center gap-2 flex-wrap">
                            <span className="flex-1 min-w-[200px] text-base font-medium text-[#1a1a1a] dark:text-[#f3f4f6]">{credentials?.server || 'ALFX-Trade'}</span>
                            <button
                                className="bg-transparent border-none text-[#666] dark:text-[#9ca3af] cursor-pointer flex items-center gap-1 text-[13px] px-3 py-1.5 rounded hover:bg-[#f3f4f6] dark:hover:bg-[#374151] hover:text-[#1a1a1a] dark:hover:text-[#f3f4f6] transition-colors"
                                onClick={() => copyToClipboard(credentials?.server || 'ALFX-Trade', 'Server')}
                            >
                                <Copy size={16} />
                                <span>Copy</span>
                            </button>
                        </div>
                    </div>

                    {/* Platform Section */}
                    <div className="mt-8 pt-6 border-t border-[#e5e7eb] dark:border-[#374151]">
                        <h3 className="text-base font-semibold text-[#1a1a1a] dark:text-[#f3f4f6] m-0 mb-5">Platform: MT5</h3>

                        <div className="mb-5">
                            <h4 className="text-sm font-semibold text-[#666] dark:text-[#9ca3af] m-0 mb-3">Mobile</h4>
                            <div className="flex flex-col gap-2">
                                <a
                                    href="https://play.google.com/store/apps/details?id=net.metaquotes.metatrader5&hl=en"
                                    className="flex items-center gap-2.5 text-[#1a1a1a] dark:text-[#f3f4f6] underline text-sm py-2 hover:text-[#0072ff] transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Smartphone size={20} className="text-[#666] dark:text-[#9ca3af]" />
                                    <span>Download for Android</span>
                                </a>
                                <a
                                    href="https://apps.apple.com/us/app/metatrader-5/id413251709"
                                    className="flex items-center gap-2.5 text-[#1a1a1a] dark:text-[#f3f4f6] underline text-sm py-2 hover:text-[#0072ff] transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Smartphone size={20} className="text-[#666] dark:text-[#9ca3af]" />
                                    <span>Download for iOS</span>
                                </a>
                            </div>
                        </div>

                        <div className="mb-5">
                            <h4 className="text-sm font-semibold text-[#666] dark:text-[#9ca3af] m-0 mb-3">Desktop</h4>
                            <div className="flex flex-col gap-2">
                                <a
                                    href="https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/mt5setup.exe"
                                    className="flex items-center gap-2.5 text-[#1a1a1a] dark:text-[#f3f4f6] underline text-sm py-2 hover:text-[#0072ff] transition-colors"
                                    download
                                >
                                    <Monitor size={20} className="text-[#666] dark:text-[#9ca3af]" />
                                    <span>Download for Windows</span>
                                </a>
                                <a
                                    href="https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/MetaTrader5.zip"
                                    className="flex items-center gap-2.5 text-[#1a1a1a] dark:text-[#f3f4f6] underline text-sm py-2 hover:text-[#0072ff] transition-colors"
                                    download
                                >
                                    <Monitor size={20} className="text-[#666] dark:text-[#9ca3af]" />
                                    <span>Download for MacOS</span>
                                </a>
                            </div>
                        </div>

                        <div className="mb-0">
                            <h4 className="text-sm font-semibold text-[#666] dark:text-[#9ca3af] m-0 mb-3">Web</h4>
                            <div className="flex flex-col gap-2">
                                <a href="#" className="flex items-center gap-2.5 text-[#1a1a1a] dark:text-[#f3f4f6] underline text-sm py-2 hover:text-[#0072ff] transition-colors">
                                    <Globe size={20} className="text-[#666] dark:text-[#9ca3af]" />
                                    <span>Open Web</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Info Notice */}
                    <div className="bg-[#e0f7fa] dark:bg-[#064e3b]/20 border border-[#b2ebf2] dark:border-[#065f46] rounded-md p-3 px-4 flex items-start gap-3 mt-6">
                        <Info size={16} className="text-[#00838f] dark:text-[#2dd4bf] shrink-0 mt-0.5" />
                        <span className="text-[13px] text-[#00838f] dark:text-[#2dd4bf] leading-[1.5]">We recommend using the desktop platform as the webtrader does not store history.</span>
                    </div>

                    {/* Copy Toast */}
                    {copyToast && (
                        <div className="fixed bottom-8 right-8 bg-[#1a1a1a] dark:bg-white text-white dark:text-[#1a1a1a] px-5 py-3 rounded-lg text-sm font-medium shadow-lg z-[10001] animate-[slideInUp_0.3s_ease-out]">
                            {copyToast}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CredentialsModal;
