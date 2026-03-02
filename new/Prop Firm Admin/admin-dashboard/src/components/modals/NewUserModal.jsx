import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Edit, List, RefreshCw, Save, Plus, Minus, X, Maximize2, Minimize2 } from 'lucide-react';
import { cn } from '../../lib/utils';

const NewUserModal = ({ isOpen, onClose }) => {
    const [isMinimized, setIsMinimized] = useState(false);
    const [isMaximized, setIsMaximized] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);
    const [maxChallenges, setMaxChallenges] = useState(0);
    const [maxAccounts, setMaxAccounts] = useState(1);
    const [sendNotification, setSendNotification] = useState(false);

    if (!isOpen) return null;

    return (
        <div className={cn(
            "fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-in fade-in duration-200",
            isMinimized && "pointer-events-none items-end justify-end p-6"
        )}>
            {/* Modal Container */}
            <div className={cn(
                "bg-surface border border-border shadow-2xl animate-in zoom-in-95 duration-200 transition-all overflow-hidden",
                isMaximized
                    ? "fixed inset-0 w-full max-w-none h-full rounded-none"
                    : "w-full max-w-3xl rounded-lg",
                isMinimized
                    ? "w-72 h-auto pointer-events-auto"
                    : "max-h-[90vh]"
            )}>

                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-surface sticky top-0 z-10">
                    <h2 className="text-lg font-medium text-text-main">New</h2>
                    <div className="flex items-center gap-4 text-text-muted">
                        <button
                            onClick={() => setIsMinimized(!isMinimized)}
                            className="hover:text-text-main transition-colors p-1 hover:bg-surface-lighter rounded"
                            title={isMinimized ? "Restore" : "Minimize"}
                        >
                            <Minus className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => {
                                setIsMaximized(!isMaximized);
                                setIsMinimized(false);
                            }}
                            className="hover:text-text-main transition-colors p-1 hover:bg-surface-lighter rounded"
                            title={isMaximized ? "Restore" : "Maximize"}
                        >
                            {isMaximized ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                        </button>
                        <button
                            onClick={onClose}
                            className="hover:text-text-main transition-colors p-1 hover:bg-surface-lighter rounded"
                            title="Close"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {!isMinimized && (
                    <>
                        {/* Body */}
                        <div className="p-8 space-y-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                            {/* Email Field */}
                            <div className="grid grid-cols-[150px_1fr] items-center gap-4">
                                <label className="text-right text-text-main text-sm">
                                    <span className="text-danger mr-1">*</span>Email
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                                    <input
                                        type="email"
                                        placeholder="Input email"
                                        className="w-full bg-background border border-border rounded pl-10 pr-3 py-2 text-text-main placeholder:text-text-muted focus:outline-none focus:border-primary"
                                    />
                                </div>
                            </div>

                            {/* Login Field */}
                            <div className="grid grid-cols-[150px_1fr] items-center gap-4">
                                <label className="text-right text-text-main text-sm">
                                    <span className="text-danger mr-1">*</span>Login
                                </label>
                                <div className="relative">
                                    <Edit className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                                    <input
                                        type="text"
                                        placeholder="Input Login"
                                        className="w-full bg-background border border-border rounded pl-10 pr-3 py-2 text-text-main placeholder:text-text-muted focus:outline-none focus:border-primary"
                                    />
                                </div>
                            </div>

                            {/* Name Field */}
                            <div className="grid grid-cols-[150px_1fr] items-center gap-4">
                                <label className="text-right text-text-main text-sm">
                                    <span className="text-danger mr-1">*</span>Name
                                </label>
                                <div className="relative">
                                    <Edit className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                                    <input
                                        type="text"
                                        placeholder="Input Name"
                                        className="w-full bg-background border border-border rounded pl-10 pr-3 py-2 text-text-main placeholder:text-text-muted focus:outline-none focus:border-primary"
                                    />
                                </div>
                            </div>

                            {/* API Token Field */}
                            <div className="grid grid-cols-[150px_1fr] items-center gap-4">
                                <label className="text-right text-text-main text-sm">API Token</label>
                                <div className="relative">
                                    <Edit className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                                    <input
                                        type="text"
                                        defaultValue="YoqtaFlaRoa"
                                        className="w-full bg-background border border-border rounded pl-10 pr-3 py-2 text-text-main focus:outline-none focus:border-primary"
                                    />
                                </div>
                            </div>

                            {/* Password Field */}
                            <div className="grid grid-cols-[150px_1fr] items-center gap-4">
                                <label className="text-right text-text-main text-sm">
                                    <span className="text-danger mr-1">*</span>Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Input password"
                                        className="w-full bg-background border border-border rounded px-3 py-2 pr-10 text-text-main placeholder:text-text-muted focus:outline-none focus:border-primary"
                                    />
                                    <button
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-main"
                                    >
                                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                    </button>
                                </div>
                            </div>

                            {/* Password Confirmation Field */}
                            <div className="grid grid-cols-[150px_1fr] items-center gap-4">
                                <label className="text-right text-text-main text-sm">Password Confirmation</label>
                                <div className="relative">
                                    <input
                                        type={showPasswordConfirmation ? "text" : "password"}
                                        placeholder="Input password confirmation"
                                        className="w-full bg-background border border-border rounded px-3 py-2 pr-10 text-text-main placeholder:text-text-muted focus:outline-none focus:border-primary"
                                    />
                                    <button
                                        onClick={() => setShowPasswordConfirmation(!showPasswordConfirmation)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-main"
                                    >
                                        {showPasswordConfirmation ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                    </button>
                                </div>
                            </div>

                            {/* Max Challenges Field */}
                            <div className="grid grid-cols-[150px_1fr] items-center gap-4">
                                <label className="text-right text-text-main text-sm">Max Challenges</label>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => setMaxChallenges(Math.max(0, maxChallenges - 1))}
                                        className="p-2 bg-background border border-border rounded hover:bg-surface transition-colors text-text-muted hover:text-text-main"
                                    >
                                        <Minus className="w-4 h-4" />
                                    </button>
                                    <input
                                        type="number"
                                        value={maxChallenges}
                                        onChange={(e) => setMaxChallenges(Math.max(0, parseInt(e.target.value) || 0))}
                                        className="w-20 bg-background border border-border rounded px-3 py-2 text-center text-text-main focus:outline-none focus:border-primary"
                                    />
                                    <button
                                        onClick={() => setMaxChallenges(maxChallenges + 1)}
                                        className="p-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors"
                                    >
                                        <Plus className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            {/* Max Accounts Field */}
                            <div className="grid grid-cols-[150px_1fr] items-center gap-4">
                                <label className="text-right text-text-main text-sm">Max Accounts</label>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => setMaxAccounts(Math.max(0, maxAccounts - 1))}
                                        className="p-2 bg-background border border-border rounded hover:bg-surface transition-colors text-text-muted hover:text-text-main"
                                    >
                                        <Minus className="w-4 h-4" />
                                    </button>
                                    <input
                                        type="number"
                                        value={maxAccounts}
                                        onChange={(e) => setMaxAccounts(Math.max(0, parseInt(e.target.value) || 0))}
                                        className="w-20 bg-background border border-border rounded px-3 py-2 text-center text-text-main focus:outline-none focus:border-primary"
                                    />
                                    <button
                                        onClick={() => setMaxAccounts(maxAccounts + 1)}
                                        className="p-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors"
                                    >
                                        <Plus className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            {/* Send Notification Toggle */}
                            <div className="grid grid-cols-[150px_1fr] items-center gap-4">
                                <label className="text-right text-text-main text-sm">Send Notification</label>
                                <button
                                    onClick={() => setSendNotification(!sendNotification)}
                                    className={`relative w-12 h-6 rounded-full transition-colors ${sendNotification ? 'bg-primary' : 'bg-border'
                                        }`}
                                >
                                    <span
                                        className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${sendNotification ? 'translate-x-6' : ''
                                            }`}
                                    />
                                </button>
                            </div>

                            {/* Tags Field */}
                            <div className="grid grid-cols-[150px_1fr] items-center gap-4">
                                <label className="text-right text-text-main text-sm">Tags</label>
                                <input
                                    type="text"
                                    placeholder="Tags"
                                    className="w-full bg-background border border-border rounded px-3 py-2 text-text-main placeholder:text-text-muted focus:outline-none focus:border-primary"
                                />
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-center gap-3 px-6 py-4 border-t border-border">
                            <button
                                onClick={onClose}
                                className="flex items-center gap-2 px-4 py-2 border border-border rounded text-text-main hover:bg-surface-lighter transition-colors text-sm font-medium"
                            >
                                <RefreshCw className="w-4 h-4" />
                                Reset
                            </button>
                            <button className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors text-sm font-bold shadow-lg shadow-primary/20">
                                <Save className="w-4 h-4" />
                                Submit
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default NewUserModal;
