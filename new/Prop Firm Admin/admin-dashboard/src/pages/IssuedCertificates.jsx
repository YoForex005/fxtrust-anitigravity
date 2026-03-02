import React, { useState } from 'react';
import {
    HelpCircle,
    Plus,
    Search,
    RotateCcw,
    ChevronLeft,
    ChevronRight,
    Info,
    Edit2,
    List,
    ArrowUp,
    Save
} from 'lucide-react';
import { cn } from '../lib/utils';

const IssuedCertificates = () => {
    const [isCreating, setIsCreating] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        recipient: '',
        template: '',
        visible: true
    });

    // Mock Data - Empty array to match screenshot "No data" state initially
    const certificates = [];

    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleReset = () => {
        setFormData({
            title: '',
            recipient: '',
            template: '',
            visible: true
        });
    };

    const handleSubmit = () => {
        console.log('Certificate Data:', formData);
        alert('Certificate Created Successfully!');
        setIsCreating(false);
    };

    return (
        <div className="space-y-6 animate-in fade-in zoom-in duration-300">

            {/* Header */}
            <div className="flex justify-between items-start">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <h1 className="text-2xl font-bold text-text-main">Issued User Certificates</h1>
                        <span className="text-text-muted text-sm border-l border-border pl-2">The list of certificates already generated for users.</span>
                        <a href="#" className="text-primary text-xs flex items-center gap-1 hover:underline ml-2">
                            Need Help? <HelpCircle className="w-3 h-3" />
                        </a>
                    </div>
                </div>
                {!isCreating && (
                    <button
                        onClick={() => setIsCreating(true)}
                        className="flex items-center gap-2 px-4 py-2 bg-surface border border-primary/30 text-primary font-bold rounded-lg hover:bg-primary/10 transition-colors text-sm"
                    >
                        <Plus className="w-4 h-4" />
                        New
                    </button>
                )}
            </div>

            {isCreating ? (
                <div className="glass-panel rounded-2xl border border-border overflow-hidden">
                    {/* Create Header */}
                    <div className="flex justify-between items-center px-8 py-4 border-b border-border bg-surface/50">
                        <h2 className="text-lg font-bold text-text-main">Create</h2>
                        <button
                            onClick={() => setIsCreating(false)}
                            className="flex items-center gap-2 px-4 py-1.5 bg-[#5B7DBD] text-white rounded hover:bg-[#4A6BA8] transition-colors text-sm font-medium"
                        >
                            <List className="w-4 h-4" />
                            List
                        </button>
                    </div>

                    {/* Form Body */}
                    <div className="p-12 space-y-8">
                        {/* Title Field */}
                        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-4">
                            <label className="text-left md:text-right text-text-main text-sm font-medium">
                                <span className="text-danger mr-1">*</span>Title
                            </label>
                            <div className="relative flex items-center max-w-2xl w-full">
                                <div className="absolute left-4 text-text-muted pointer-events-none">
                                    <Edit2 className="w-4 h-4" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Input title"
                                    value={formData.title}
                                    onChange={(e) => handleInputChange('title', e.target.value)}
                                    className="w-full bg-background border border-border rounded pl-12 pr-4 py-2.5 text-sm text-text-main focus:outline-none focus:border-primary transition-colors placeholder:text-text-muted/50"
                                />
                            </div>
                        </div>

                        {/* Recipient Field */}
                        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-4">
                            <label className="text-left md:text-right text-text-main text-sm font-medium">
                                <span className="text-danger mr-1">*</span>Recipient
                            </label>
                            <div className="relative flex items-center max-w-2xl w-full">
                                <select
                                    value={formData.recipient}
                                    onChange={(e) => handleInputChange('recipient', e.target.value)}
                                    className="w-full bg-background border border-border rounded px-4 py-2.5 text-sm text-text-main focus:outline-none focus:border-primary transition-colors appearance-none"
                                >
                                    <option value="">Recipient</option>
                                    <option value="user1">User One (user1@example.com)</option>
                                    <option value="user2">User Two (user2@example.com)</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                </div>
                            </div>
                        </div>

                        {/* Template Field */}
                        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-start gap-4">
                            <label className="text-left md:text-right text-text-main text-sm font-medium pt-2">
                                Template
                            </label>
                            <div className="flex flex-col gap-2 max-w-2xl w-full">
                                <div className="flex items-center gap-0">
                                    <input
                                        type="text"
                                        placeholder="Choose Template"
                                        value={formData.template}
                                        onChange={(e) => handleInputChange('template', e.target.value)}
                                        className="flex-1 bg-background border border-border rounded-l px-4 py-2.5 text-sm text-text-main focus:outline-none focus:border-primary transition-colors placeholder:text-text-muted/50"
                                    />
                                    <button className="px-4 py-2.5 bg-[#5B7DBD] text-white rounded-r hover:bg-[#4A6BA8] transition-colors border border-[#5B7DBD]">
                                        <ArrowUp className="w-4 h-4" />
                                    </button>
                                </div>
                                <p className="text-xs text-text-muted flex items-center gap-1">
                                    <span className="w-4 h-4 rounded-full border border-text-muted flex items-center justify-center text-[10px]">?</span>
                                    To manage Certificate Templates <a href="#" className="text-primary hover:underline ml-1">click</a>
                                </p>
                            </div>
                        </div>

                        {/* Visible Field */}
                        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-4">
                            <label className="text-left md:text-right text-text-main text-sm font-medium">
                                Visible
                            </label>
                            <div
                                className={cn(
                                    "w-12 h-6 rounded-full relative cursor-pointer transition-colors duration-200 ease-in-out shadow-inner",
                                    formData.visible ? "bg-[#5B7DBD]" : "bg-slate-300 dark:bg-slate-700"
                                )}
                                onClick={() => handleInputChange('visible', !formData.visible)}
                            >
                                <div
                                    className={cn(
                                        "absolute top-1 left-1 w-4 h-4 rounded-full bg-white shadow-md transition-transform duration-200 ease-in-out",
                                        formData.visible ? "translate-x-6" : "translate-x-0"
                                    )}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Form Footer */}
                    <div className="flex items-center justify-between px-8 py-6 border-t border-border bg-surface/30">
                        <button
                            onClick={handleReset}
                            className="flex items-center gap-2 px-6 py-2 bg-white dark:bg-surface border border-border rounded text-text-main hover:bg-surface-lighter transition-colors text-sm font-medium shadow-sm"
                        >
                            <RotateCcw className="w-4 h-4 rotate-180" />
                            Reset
                        </button>
                        <button
                            onClick={handleSubmit}
                            className="flex items-center gap-2 px-8 py-2.5 bg-[#5B7DBD] text-white rounded hover:bg-[#4A6BA8] transition-all font-bold shadow-lg shadow-[#5B7DBD]/20"
                        >
                            <Save className="w-4 h-4" />
                            Submit
                        </button>
                    </div>
                </div>
            ) : (
                <>
                    {/* Filter Panel */}
                    <div className="glass-panel p-6 rounded-2xl border border-border space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Recipient Filter */}
                            <div className="flex items-center">
                                <div className="w-24 text-xs font-bold text-text-muted uppercase tracking-wider border-y border-l border-border rounded-l bg-surface-lighter/30 py-2.5 px-3 flex items-center">
                                    Recipient
                                </div>
                                <div className="flex-1 relative">
                                    <select className="appearance-none w-full bg-surface border border-border rounded-r py-2 px-4 text-sm text-text-muted focus:outline-none focus:border-primary transition-colors h-[38px] cursor-pointer">
                                        <option>Choose</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                        <svg className="w-4 h-4 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </div>
                                </div>
                            </div>

                            {/* Issuer Id Filter */}
                            <div className="flex items-center">
                                <div className="w-24 text-xs font-bold text-text-muted uppercase tracking-wider border-y border-l border-border rounded-l bg-surface-lighter/30 py-2.5 px-3 flex items-center">
                                    Issuer Id
                                </div>
                                <div className="flex-1 relative">
                                    <select className="appearance-none w-full bg-surface border border-border rounded-r py-2 px-4 text-sm text-text-muted focus:outline-none focus:border-primary transition-colors h-[38px] cursor-pointer">
                                        <option>Choose</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                        <svg className="w-4 h-4 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <button className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded hover:bg-primary-dark transition-colors text-sm font-medium shadow-lg shadow-primary/20">
                                <Search className="w-4 h-4" />
                                Search
                            </button>
                            <button className="flex items-center gap-2 px-6 py-2 bg-white text-slate-800 rounded hover:bg-gray-100 transition-colors text-sm font-medium">
                                <RotateCcw className="w-4 h-4" />
                                Reset
                            </button>
                        </div>
                    </div>

                    {/* Main Content Card */}
                    <div className="glass-panel rounded-2xl overflow-hidden border border-border">

                        {/* Table */}
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-surface/50 text-text-muted text-xs font-medium border-b border-border">
                                        <th className="p-4 w-12 text-center">
                                            <input
                                                type="checkbox"
                                                className="rounded border-border bg-background focus:ring-primary text-primary"
                                                disabled
                                            />
                                        </th>
                                        <th className="p-4 font-medium whitespace-nowrap">Id</th>
                                        <th className="p-4 font-medium whitespace-nowrap">Title</th>
                                        <th className="p-4 font-medium whitespace-nowrap">Issuer</th>
                                        <th className="p-4 font-medium whitespace-nowrap">Email</th>
                                        <th className="p-4 font-medium whitespace-nowrap">Recipient Name</th>
                                        <th className="p-4 font-medium whitespace-nowrap">Thumbnail File</th>
                                        <th className="p-4 font-medium whitespace-nowrap">PNG</th>
                                        <th className="p-4 font-medium whitespace-nowrap">PDF</th>
                                        <th className="p-4 font-medium whitespace-nowrap">Template</th>
                                        <th className="p-4 font-medium whitespace-nowrap">Issued</th>
                                        <th className="p-4 font-medium whitespace-nowrap">Issued At</th>
                                        <th className="p-4 font-medium whitespace-nowrap">Visible</th>
                                        <th className="p-4 font-medium whitespace-nowrap">Signed</th>
                                        <th className="p-4 font-medium whitespace-nowrap text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border text-sm">
                                    {certificates.length === 0 ? (
                                        <tr>
                                            <td colSpan="15" className="p-8 text-center text-text-muted bg-white/5">
                                                <div className="flex items-center gap-2 p-4">
                                                    <Info className="w-4 h-4" />
                                                    <span>No data.</span>
                                                </div>
                                            </td>
                                        </tr>
                                    ) : (
                                        certificates.map((item) => (
                                            // Map rows here when data is available
                                            <tr key={item.id}><td colSpan="15"></td></tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>

                        {/* Footer / Pagination */}
                        <div className="p-4 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-muted">
                            <div>
                                Showing <span className="font-medium text-text-main">0</span> to <span className="font-medium text-text-main">0</span> of <span className="font-medium text-text-main">0</span> entries
                            </div>

                            <div className="flex items-center gap-2">
                                <select className="bg-surface border border-border rounded p-1 text-text-main focus:outline-none focus:border-primary">
                                    <option>100</option>
                                    <option>50</option>
                                    <option>25</option>
                                </select>
                                <div className="flex items-center rounded-lg border border-border overflow-hidden opacity-50 cursor-not-allowed">
                                    <button className="p-2 bg-surface transition-colors border-r border-border" disabled><ChevronLeft className="w-4 h-4" /></button>
                                    <button className="px-3 py-2 bg-primary text-background font-bold">1</button>
                                    <button className="p-2 bg-surface transition-colors border-l border-border" disabled><ChevronRight className="w-4 h-4" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default IssuedCertificates;
