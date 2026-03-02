import React, { useState } from 'react';
import { X, Lock, Check, AlertCircle, RefreshCw, Key } from 'lucide-react';
import { flexyService } from '../../services/flexyService';

function ResetPasswordModal({ onClose, login, onSuccess }) {
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [newPassword, setNewPassword] = useState('');

    const generatePassword = () => {
        const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789!@#$';
        let pass = '';
        for (let i = 0; i < 10; i++) {
            pass += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        // Ensure complexity requirements
        pass += 'A1@'; 
        setPassword(pass);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            // Using the service we confirmed exists
            const resultPwd = await flexyService.resetPassword(login, password || null);
            setSuccess(true);
            setNewPassword(resultPwd.password);
            if (onSuccess) onSuccess(resultPwd);
        } catch (err) {
            setError(err.message || 'Failed to reset password');
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[10000] animate-[fadeIn_0.2s_ease-in]" onClick={onClose}>
                <div className="bg-white dark:bg-[#1f2937] rounded-xl w-[90%] max-w-[450px] shadow-2xl p-6 text-center animate-[scaleIn_0.2s_ease-out]" onClick={e => e.stopPropagation()}>
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600 dark:text-green-400">
                        <Check size={32} />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Password Changed!</h2>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">Your MT5 account password has been successfully reset.</p>
                    
                    <div className="bg-gray-50 dark:bg-[#111827] border border-gray-200 dark:border-gray-700 rounded-lg p-4 mb-6">
                        <span className="text-xs text-gray-500 uppercase tracking-wide font-semibold">New Password</span>
                        <div className="text-xl font-mono font-bold text-gray-900 dark:text-white mt-1 break-all select-all">
                            {newPassword}
                        </div>
                    </div>

                    <button 
                        onClick={onClose}
                        className="w-full bg-[#1d1d1f] dark:bg-white text-white dark:text-[#1d1d1f] py-2.5 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                    >
                        Done
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[10000] animate-[fadeIn_0.2s_ease-in]" onClick={onClose}>
            <div className="bg-white dark:bg-[#1f2937] rounded-xl w-[90%] max-w-[450px] shadow-2xl animate-[slideUp_0.3s_ease-out]" onClick={e => e.stopPropagation()}>
                {/* Header */}
                <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 dark:border-gray-700">
                    <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <Lock size={18} className="text-blue-600" />
                        Reset Password
                    </h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
                        <X size={20} />
                    </button>
                </div>

                {/* Body */}
                <form onSubmit={handleSubmit} className="p-6">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                        This will change the main password for account <span className="font-bold text-gray-900 dark:text-white">{login}</span>. 
                        You will need to update your login credentials in MT5.
                    </p>

                    {error && (
                        <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800 text-red-600 dark:text-red-400 text-sm rounded-lg flex items-start gap-2">
                            <AlertCircle size={16} className="mt-0.5 shrink-0" />
                            <span>{error}</span>
                        </div>
                    )}

                    <div className="mb-6">
                        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wide">
                            New Password (Optional)
                        </label>
                        <div className="flex gap-2">
                            <input 
                                type="text" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Auto-generated if empty"
                                className="flex-1 bg-white dark:bg-[#111827] border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2.5 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-gray-400"
                            />
                            <button 
                                type="button"
                                onClick={generatePassword}
                                className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                                title="Generate Password"
                            >
                                <RefreshCw size={18} />
                            </button>
                        </div>
                        <p className="text-xs text-gray-400 mt-2">
                            Leave empty to have the system generate a strong password for you.
                        </p>
                    </div>

                    <div className="flex gap-3">
                        <button 
                            type="button" 
                            onClick={onClose}
                            className="flex-1 px-4 py-2.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                        >
                            Cancel
                        </button>
                        <button 
                            type="submit" 
                            disabled={loading}
                            className="flex-1 bg-blue-600 text-white font-semibold rounded-lg px-4 py-2.5 hover:bg-blue-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {loading ? <RefreshCw size={18} className="animate-spin" /> : <Key size={18} />}
                            {loading ? 'Resetting...' : 'Reset Password'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ResetPasswordModal;
