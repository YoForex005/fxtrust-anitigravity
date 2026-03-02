import React, { useState } from 'react';
import { Upload, Eye, EyeOff, RefreshCw } from 'lucide-react';

const Profile = () => {
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);

    return (
        <div className="space-y-6 animate-in fade-in zoom-in duration-300">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-text-main">User Setting</h1>
            </div>

            {/* Main Content Card */}
            <div className="glass-panel rounded-2xl border border-border bg-surface">
                {/* Edit Tab */}
                <div className="border-b border-border px-6 py-3">
                    <button className="text-text-main font-medium text-sm">Edit</button>
                </div>

                <div className="p-8">
                    <div className="max-w-2xl space-y-6">
                        {/* Username (Read-only) */}
                        <div className="grid grid-cols-[150px_1fr] items-center gap-4">
                            <label className="text-sm font-medium text-text-main">Username</label>
                            <input
                                type="text"
                                value="funded"
                                readOnly
                                className="bg-background border border-border rounded px-3 py-2 text-text-main focus:outline-none"
                            />
                        </div>

                        {/* Name */}
                        <div className="grid grid-cols-[150px_1fr] items-center gap-4">
                            <label className="text-sm font-medium text-text-main">
                                <span className="text-danger mr-1">*</span>Name
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    defaultValue="Manager"
                                    className="w-full bg-background border border-border rounded px-3 py-2 pr-10 text-text-main focus:outline-none focus:border-primary"
                                />
                                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-main">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="grid grid-cols-[150px_1fr] items-center gap-4">
                            <label className="text-sm font-medium text-text-main">
                                <span className="text-danger mr-1">*</span>Email
                            </label>
                            <div className="relative">
                                <input
                                    type="email"
                                    defaultValue="funded@dev4traders.com"
                                    className="w-full bg-background border border-border rounded px-3 py-2 pr-10 text-text-main focus:outline-none focus:border-primary"
                                />
                                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-main">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Avatar Upload */}
                        <div className="grid grid-cols-[150px_1fr] items-start gap-4">
                            <label className="text-sm font-medium text-text-main pt-2">Avatar</label>
                            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center bg-background/50">
                                <div className="flex flex-col items-center gap-4">
                                    <Upload className="w-12 h-12 text-text-muted" />
                                    <button className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors text-sm font-medium">
                                        <Upload className="w-4 h-4" />
                                        Browse
                                    </button>
                                    <p className="text-sm text-text-muted">Or drag file here</p>
                                </div>
                            </div>
                        </div>

                        {/* Old Password */}
                        <div className="grid grid-cols-[150px_1fr] items-center gap-4">
                            <label className="text-sm font-medium text-text-main">Old Password</label>
                            <div className="relative">
                                <input
                                    type={showOldPassword ? "text" : "password"}
                                    placeholder="Input Old password"
                                    className="w-full bg-background border border-border rounded px-3 py-2 pr-10 text-text-main placeholder:text-text-muted focus:outline-none focus:border-primary"
                                />
                                <button
                                    onClick={() => setShowOldPassword(!showOldPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-main"
                                >
                                    {showOldPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>

                        {/* Password */}
                        <div className="grid grid-cols-[150px_1fr] items-center gap-4">
                            <label className="text-sm font-medium text-text-main">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Input Password"
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

                        {/* Password Confirmation */}
                        <div className="grid grid-cols-[150px_1fr] items-center gap-4">
                            <label className="text-sm font-medium text-text-main">Password Confirmation</label>
                            <div className="relative">
                                <input
                                    type={showPasswordConfirmation ? "text" : "password"}
                                    placeholder="Input Password confirmation"
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

                        {/* Action Buttons */}
                        <div className="flex items-center gap-3 pt-4">
                            <button
                                onClick={() => window.location.reload()}
                                className="flex items-center gap-2 px-4 py-2 border border-border rounded text-text-main hover:bg-surface-lighter transition-colors text-sm font-medium"
                            >
                                <RefreshCw className="w-4 h-4" />
                                Reset
                            </button>
                            <button className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors text-sm font-bold shadow-lg shadow-primary/20">
                                <Upload className="w-4 h-4" />
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
