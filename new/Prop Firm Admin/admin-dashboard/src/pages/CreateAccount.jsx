import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    HelpCircle,
    List,
    ChevronDown,
    Edit2,
    RotateCcw,
    Save,
    Plus,
    Minus,
    X
} from 'lucide-react';
import { cn } from '../lib/utils';

const CreateAccount = () => {
    const navigate = useNavigate();
    const [accountSource, setAccountSource] = useState('existing'); // 'existing' or 'new'
    const [accountNumber, setAccountNumber] = useState(0);

    return (
        <div className="space-y-6 animate-in fade-in zoom-in duration-300">
            {/* Header */}
            <div className="flex items-center gap-2 mb-6">
                <h1 className="text-2xl font-bold text-text-main">Accounts</h1>
                <a href="#" className="text-primary text-xs flex items-center gap-1 hover:underline ml-2">
                    Need Help? <HelpCircle className="w-3 h-3" />
                </a>
            </div>

            {/* Form Card */}
            <div className="glass-panel rounded-2xl overflow-hidden border border-border">
                {/* Card Title Bar */}
                <div className="border-b border-border bg-surface/50 px-6 py-4 flex justify-between items-center">
                    <span className="text-text-main font-medium">Create</span>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => navigate('/accounts')}
                            className="flex items-center gap-2 px-3 py-1.5 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-xs font-medium"
                        >
                            <List className="w-3.5 h-3.5" />
                            List
                        </button>
                        <button
                            onClick={() => navigate('/accounts')}
                            className="p-1.5 text-text-muted hover:text-text-main hover:bg-surface-lighter rounded-lg transition-colors border border-border"
                            title="Close"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Form Body */}
                <div className="p-8 max-w-4xl mx-auto space-y-8">

                    {/* User Field */}
                    <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] items-center gap-4">
                        <label className="text-right text-text-main text-sm font-medium">
                            <span className="text-danger mr-1">*</span>User
                        </label>
                        <div className="relative">
                            <select className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-text-muted focus:outline-none focus:border-primary appearance-none transition-colors">
                                <option>User</option>
                                <option>Mahdi</option>
                                <option>John Doe</option>
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
                                    <option>Standard</option>
                                    <option>Raw Spread</option>
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

                    {/* Existing/New Toggle */}
                    <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] items-center gap-4">
                        <label className="text-right text-text-main text-sm font-medium">
                            Existing/New
                        </label>
                        <div className="flex items-center gap-6">
                            <label className="flex items-center gap-2 cursor-pointer group">
                                <div className="relative flex items-center justify-center">
                                    <input
                                        type="radio"
                                        name="source"
                                        className="sr-only"
                                        checked={accountSource === 'existing'}
                                        onChange={() => setAccountSource('existing')}
                                    />
                                    <div className={cn(
                                        "w-5 h-5 rounded-full border-2 transition-all",
                                        accountSource === 'existing' ? "border-primary" : "border-border group-hover:border-text-muted"
                                    )}></div>
                                    {accountSource === 'existing' && <div className="absolute w-2.5 h-2.5 bg-primary rounded-full"></div>}
                                </div>
                                <span className="text-sm text-text-main">Add Existing</span>
                            </label>

                            <label className="flex items-center gap-2 cursor-pointer group">
                                <div className="relative flex items-center justify-center">
                                    <input
                                        type="radio"
                                        name="source"
                                        className="sr-only"
                                        checked={accountSource === 'new'}
                                        onChange={() => setAccountSource('new')}
                                    />
                                    <div className={cn(
                                        "w-5 h-5 rounded-full border-2 transition-all",
                                        accountSource === 'new' ? "border-primary" : "border-border group-hover:border-text-muted"
                                    )}></div>
                                    {accountSource === 'new' && <div className="absolute w-2.5 h-2.5 bg-primary rounded-full"></div>}
                                </div>
                                <span className="text-sm text-text-main">Generate New</span>
                            </label>
                        </div>
                    </div>

                    {/* Account Number Field */}
                    <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] items-center gap-4">
                        <label className="text-right text-text-main text-sm font-medium">
                            Account Number
                        </label>
                        <div className="flex items-center max-w-[200px]">
                            <button
                                onClick={() => setAccountNumber(Math.max(0, accountNumber - 1))}
                                className="p-2.5 bg-surface border border-border rounded-l-lg text-text-muted hover:text-text-main transition-colors"
                            >
                                <Minus className="w-4 h-4" />
                            </button>
                            <input
                                type="text"
                                value={accountNumber}
                                onChange={(e) => setAccountNumber(parseInt(e.target.value) || 0)}
                                className="flex-1 bg-background border-y border-border px-4 py-2 text-center text-sm text-text-main focus:outline-none"
                            />
                            <button
                                onClick={() => setAccountNumber(accountNumber + 1)}
                                className="p-2.5 bg-primary text-white border border-primary rounded-r-lg hover:bg-primary/90 transition-colors"
                            >
                                <Plus className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Password Field */}
                    <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] items-center gap-4">
                        <label className="text-right text-text-main text-sm font-medium">
                            Password
                        </label>
                        <div className="relative flex items-center">
                            <div className="absolute left-4 text-text-muted">
                                <Edit2 className="w-4 h-4" />
                            </div>
                            <input
                                type="text"
                                placeholder="Input Password"
                                className="w-full bg-surface border border-border rounded-lg pl-12 pr-4 py-2.5 text-sm text-text-main focus:outline-none focus:border-primary transition-colors placeholder:text-text-muted/50"
                            />
                        </div>
                    </div>

                    {/* Investor Password Field */}
                    <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] items-center gap-4">
                        <label className="text-right text-text-main text-sm font-medium">
                            Investor Password
                        </label>
                        <div className="relative flex items-center">
                            <div className="absolute left-4 text-text-muted">
                                <Edit2 className="w-4 h-4" />
                            </div>
                            <input
                                type="text"
                                placeholder="Input Investor Password"
                                className="w-full bg-surface border border-border rounded-lg pl-12 pr-4 py-2.5 text-sm text-text-main focus:outline-none focus:border-primary transition-colors placeholder:text-text-muted/50"
                            />
                        </div>
                    </div>

                    {/* Objectives Plan Field */}
                    <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] items-center gap-4">
                        <label className="text-right text-text-main text-sm font-medium">
                            <span className="text-danger mr-1">*</span>Objectives Plan
                        </label>
                        <div className="relative">
                            <select className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-text-main focus:outline-none focus:border-primary appearance-none transition-colors">
                                <option>Dont Check Objectives</option>
                                <option>Cypher Evaluation 10K</option>
                                <option>Cypher Evaluation 25K</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                                <X className="w-4 h-4 text-text-muted cursor-pointer hover:text-danger transition-colors" />
                                <ChevronDown className="w-4 h-4 text-text-muted pointer-events-none" />
                            </div>
                        </div>
                    </div>

                    {/* Title Field */}
                    <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] items-center gap-4">
                        <label className="text-right text-text-main text-sm font-medium">
                            Title
                        </label>
                        <div className="relative flex items-center">
                            <div className="absolute left-4 text-text-muted">
                                <Edit2 className="w-4 h-4" />
                            </div>
                            <input
                                type="text"
                                placeholder="Input Title"
                                className="w-full bg-surface border border-border rounded-lg pl-12 pr-4 py-2.5 text-sm text-text-main focus:outline-none focus:border-primary transition-colors placeholder:text-text-muted/50"
                            />
                        </div>
                    </div>

                    {/* Suffix Field */}
                    <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] items-center gap-4">
                        <label className="text-right text-text-main text-sm font-medium">
                            Suffix
                        </label>
                        <div className="relative flex items-center">
                            <div className="absolute left-4 text-text-muted">
                                <Edit2 className="w-4 h-4" />
                            </div>
                            <input
                                type="text"
                                placeholder="Input Suffix"
                                className="w-full bg-surface border border-border rounded-lg pl-12 pr-4 py-2.5 text-sm text-text-main focus:outline-none focus:border-primary transition-colors placeholder:text-text-muted/50"
                            />
                        </div>
                    </div>

                    {/* Tags Field */}
                    <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] items-center gap-4">
                        <label className="text-right text-text-main text-sm font-medium">
                            Tags
                        </label>
                        <input
                            type="text"
                            placeholder="tags"
                            className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-sm text-text-main focus:outline-none focus:border-primary transition-colors placeholder:text-text-muted/50"
                        />
                    </div>
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

export default CreateAccount;
