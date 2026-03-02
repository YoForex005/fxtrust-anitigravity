import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
    HelpCircle,
    List,
    ChevronDown,
    Edit2,
    RotateCcw,
    Save,
    Plus,
    Minus,
    X,
    FolderPlus
} from 'lucide-react';
import { cn } from '../lib/utils';

const CreateContest = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const contestId = searchParams.get('id');
    const isEdit = !!contestId;

    const [activeTab, setActiveTab] = useState('base'); // 'base' or 'conditions'
    const [accountSource, setAccountSource] = useState('existing');
    const [accountNumber, setAccountNumber] = useState(0);

    return (
        <div className="space-y-6 animate-in fade-in zoom-in duration-300">
            {/* Header */}
            <div className="flex items-center gap-2 mb-6">
                <h1 className="text-2xl font-bold text-text-main">Contest Programs</h1>
                <a href="#" className="text-primary text-xs flex items-center gap-1 hover:underline ml-2">
                    Need Help? <HelpCircle className="w-3 h-3" />
                </a>
            </div>

            {/* Form Card */}
            <div className="glass-panel rounded-2xl overflow-hidden border border-border">
                {/* Card Title Bar */}
                <div className="border-b border-border bg-surface/50 px-6 py-4 flex justify-between items-center">
                    <span className="text-text-main font-medium">{isEdit ? 'Edit' : 'Create'}</span>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => navigate('/contests')}
                            className="flex items-center gap-2 px-3 py-1.5 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-xs font-medium"
                        >
                            <List className="w-3.5 h-3.5" />
                            List
                        </button>
                        <button
                            onClick={() => navigate('/contests')}
                            className="p-1.5 text-text-muted hover:text-text-main hover:bg-surface-lighter rounded-lg transition-colors border border-border"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Tabs Wrapper */}
                <div className="border-b border-border bg-surface/30 px-6">
                    <div className="flex items-center gap-8">
                        <button
                            onClick={() => setActiveTab('base')}
                            className={cn(
                                "py-4 text-sm font-bold transition-all border-b-2 relative",
                                activeTab === 'base'
                                    ? "text-primary border-primary"
                                    : "text-text-muted border-transparent hover:text-text-main"
                            )}
                        >
                            Base
                        </button>
                        <button
                            onClick={() => setActiveTab('conditions')}
                            className={cn(
                                "py-4 text-sm font-bold transition-all border-b-2 relative",
                                activeTab === 'conditions'
                                    ? "text-primary border-primary"
                                    : "text-text-muted border-transparent hover:text-text-main"
                            )}
                        >
                            Conditions
                        </button>
                    </div>
                </div>

                {/* Form Body */}
                <div className="p-8 max-w-4xl mx-auto min-h-[400px]">
                    {activeTab === 'base' ? (
                        <div className="space-y-8 animate-in fade-in slide-in-from-left-4 duration-300">
                            {/* Base Tab Content (Same fields as Create Account based on reference) */}
                            {/* User Field */}
                            <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] items-center gap-4">
                                <label className="text-right text-text-main text-sm font-medium">
                                    <span className="text-danger mr-1">*</span>User
                                </label>
                                <div className="relative">
                                    <select className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-text-muted focus:outline-none focus:border-primary appearance-none transition-colors">
                                        <option>User</option>
                                        <option>Mahdi</option>
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
                                </div>
                            </div>

                            {/* Server Group Field */}
                            <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] items-start gap-4">
                                <label className="text-right text-text-main text-sm font-medium pt-3">
                                    <span className="text-danger mr-1">*</span>Server Group
                                </label>
                                <div className="space-y-2">
                                    <div className="relative">
                                        <select className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-text-muted focus:outline-none focus:border-primary appearance-none transition-colors">
                                            <option>Server Group</option>
                                        </select>
                                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
                                    </div>
                                    <div className="flex items-center gap-1 text-xs text-text-muted">
                                        <HelpCircle className="w-3.5 h-3.5" />
                                        <span>To manage Broker Servers</span>
                                        <a href="#" className="text-primary hover:underline">click</a>
                                    </div>
                                </div>
                            </div>

                            {/* Toggle */}
                            <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] items-center gap-4">
                                <label className="text-right text-text-main text-sm font-medium">
                                    Existing/New
                                </label>
                                <div className="flex items-center gap-6">
                                    <label className="flex items-center gap-2 cursor-pointer group">
                                        <input
                                            type="radio"
                                            className="sr-only"
                                            checked={accountSource === 'existing'}
                                            onChange={() => setAccountSource('existing')}
                                        />
                                        <div className={cn(
                                            "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all",
                                            accountSource === 'existing' ? "border-primary" : "border-border group-hover:border-text-muted"
                                        )}>
                                            {accountSource === 'existing' && <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>}
                                        </div>
                                        <span className="text-sm text-text-main">Add Existing</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer group">
                                        <input
                                            type="radio"
                                            className="sr-only"
                                            checked={accountSource === 'new'}
                                            onChange={() => setAccountSource('new')}
                                        />
                                        <div className={cn(
                                            "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all",
                                            accountSource === 'new' ? "border-primary" : "border-border group-hover:border-text-muted"
                                        )}>
                                            {accountSource === 'new' && <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>}
                                        </div>
                                        <span className="text-sm text-text-main">Generate New</span>
                                    </label>
                                </div>
                            </div>

                            {/* Account Number */}
                            <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] items-center gap-4">
                                <label className="text-right text-text-main text-sm font-medium">
                                    Account Number
                                </label>
                                <div className="flex items-center max-w-[200px]">
                                    <button
                                        onClick={() => setAccountNumber(Math.max(0, accountNumber - 1))}
                                        className="p-2.5 bg-surface border border-border rounded-l-lg text-text-muted hover:text-text-main"
                                    >
                                        <Minus className="w-4 h-4" />
                                    </button>
                                    <input
                                        type="text"
                                        value={accountNumber}
                                        className="flex-1 bg-background border-y border-border px-4 py-2 text-center text-sm text-text-main focus:outline-none"
                                        readOnly
                                    />
                                    <button
                                        onClick={() => setAccountNumber(accountNumber + 1)}
                                        className="p-2.5 bg-primary text-white border border-primary rounded-r-lg"
                                    >
                                        <Plus className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            {/* Passwords */}
                            <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] items-center gap-4">
                                <label className="text-right text-text-main text-sm font-medium">Password</label>
                                <div className="relative">
                                    <Edit2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                                    <input type="password" placeholder="Input Password" className="w-full bg-surface border border-border rounded-lg pl-12 pr-4 py-2.5 text-sm text-text-main focus:outline-none focus:border-primary transition-colors" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] items-center gap-4">
                                <label className="text-right text-text-main text-sm font-medium">Investor Password</label>
                                <div className="relative">
                                    <Edit2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                                    <input type="password" placeholder="Input Investor Password" className="w-full bg-surface border border-border rounded-lg pl-12 pr-4 py-2.5 text-sm text-text-main focus:outline-none focus:border-primary transition-colors" />
                                </div>
                            </div>

                            {/* Objectives Plan */}
                            <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] items-center gap-4">
                                <label className="text-right text-text-main text-sm font-medium">
                                    <span className="text-danger mr-1">*</span>Objectives Plan
                                </label>
                                <div className="relative">
                                    <select className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-text-main focus:outline-none focus:border-primary appearance-none transition-colors">
                                        <option>Dont Check Objectives</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                                        <X className="w-3 h-3 text-text-muted cursor-pointer" />
                                        <ChevronDown className="w-4 h-4 text-text-muted pointer-events-none border-l border-border pl-1" />
                                    </div>
                                </div>
                            </div>

                            {/* Title & Suffix */}
                            <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] items-center gap-4">
                                <label className="text-right text-text-main text-sm font-medium">Title</label>
                                <div className="relative">
                                    <Edit2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                                    <input type="text" placeholder="Input Title" className="w-full bg-surface border border-border rounded-lg pl-12 pr-4 py-2.5 text-sm text-text-main focus:outline-none focus:border-primary transition-colors" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] items-center gap-4">
                                <label className="text-right text-text-main text-sm font-medium">Suffix</label>
                                <div className="relative">
                                    <Edit2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                                    <input type="text" placeholder="Input Suffix" className="w-full bg-surface border border-border rounded-lg pl-12 pr-4 py-2.5 text-sm text-text-main focus:outline-none focus:border-primary transition-colors" />
                                </div>
                            </div>

                            {/* Tags */}
                            <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] items-center gap-4">
                                <label className="text-right text-text-main text-sm font-medium">Tags</label>
                                <input type="text" placeholder="tags" className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-sm text-text-main focus:outline-none focus:border-primary transition-colors" />
                            </div>
                        </div>
                    ) : (
                        <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                            {/* Conditions Tab */}
                            <div className="border-b border-border pb-4 mb-8">
                                <h3 className="text-lg font-medium text-text-main">Conditions</h3>
                            </div>
                            <div className="flex justify-center py-10">
                                <button className="flex items-center gap-2 px-6 py-2 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors font-bold text-sm">
                                    <Plus className="w-4 h-4" />
                                    New
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer Actions */}
                <div className="border-t border-border bg-surface/30 px-6 py-6 flex justify-between items-center">
                    <button className="flex items-center gap-2 px-6 py-2 border border-border rounded-lg text-text-main hover:bg-surface-lighter transition-colors text-sm font-medium">
                        <RotateCcw className="w-4 h-4" />
                        Reset
                    </button>
                    <button className="flex items-center gap-2 px-8 py-2.5 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all font-bold shadow-lg shadow-primary/20">
                        <Save className="w-4 h-4" />
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateContest;
