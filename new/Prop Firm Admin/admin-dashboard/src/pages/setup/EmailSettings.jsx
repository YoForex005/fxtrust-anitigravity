import React, { useState } from 'react';
import {
    HelpCircle,
    Pencil,
    Minus,
    Plus,
    RefreshCw,
    Save
} from 'lucide-react';
import { cn } from '../../lib/utils';

const EmailSettings = () => {
    const [port, setPort] = useState(25);
    const [tempDisabled, setTempDisabled] = useState(false);

    // Reusable Input Component
    const FormInput = ({ label, value, icon: Icon, type = "text", placeholder }) => (
        <div className="flex flex-col md:flex-row md:items-center gap-4 py-4 border-b border-border/50 last:border-0">
            <div className="w-full md:w-1/4 text-xs font-bold text-text-muted text-right uppercase tracking-wider">
                <span className="text-danger mr-1">*</span>
                {label}
            </div>
            <div className="flex-1 relative max-w-2xl">
                {Icon && (
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">
                        <Icon className="w-4 h-4" />
                    </div>
                )}
                <input
                    type={type}
                    defaultValue={value}
                    placeholder={placeholder}
                    className={cn(
                        "w-full bg-surface border border-border rounded px-4 py-2 text-sm text-text-main focus:outline-none focus:border-primary transition-colors",
                        Icon && "pl-10"
                    )}
                />
            </div>
        </div>
    );

    // Reusable Select Component
    const FormSelect = ({ label, options, defaultValue }) => (
        <div className="flex flex-col md:flex-row md:items-center gap-4 py-4 border-b border-border/50 last:border-0">
            <div className="w-full md:w-1/4 text-xs font-bold text-text-muted text-right uppercase tracking-wider">
                <span className="text-danger mr-1">*</span>
                {label}
            </div>
            <div className="flex-1 max-w-2xl">
                <select
                    defaultValue={defaultValue}
                    className="w-full bg-surface border border-border rounded px-4 py-2 text-sm text-text-main focus:outline-none focus:border-primary transition-colors appearance-none"
                    style={{ backgroundImage: 'none' }} // Removing default arrow to match custom style if needed, or keeping standard. Screenshot shows standard arrow.
                >
                    {options.map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                    ))}
                </select>
                {/* Custom arrow could be added here if appearance-none is used */}
            </div>
        </div>
    );

    // Toggle Component
    const ToggleSwitch = ({ checked, onChange }) => (
        <div
            className={cn(
                "w-12 h-6 rounded-full relative cursor-pointer transition-colors duration-200 ease-in-out border border-border",
                checked ? "bg-primary" : "bg-surface-lighter"
            )}
            onClick={() => onChange(!checked)}
        >
            <div
                className={cn(
                    "absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-transform duration-200 ease-in-out",
                    checked ? "translate-x-6" : "translate-x-0"
                )}
            />
        </div>
    );

    return (
        <div className="space-y-6 animate-in fade-in zoom-in duration-300">

            {/* Header */}
            <div>
                <div className="flex items-center gap-2 mb-6">
                    <h1 className="text-2xl font-bold text-text-main">Mail Settings</h1>
                    <a href="#" className="text-primary text-xs flex items-center gap-1 hover:underline ml-2">
                        Need Help? <HelpCircle className="w-3 h-3" />
                    </a>
                </div>
            </div>

            {/* Main Card */}
            <div className="glass-panel rounded-2xl overflow-hidden border border-border">
                <div className="p-6 border-b border-border">
                    <h2 className="text-lg font-medium text-text-main">Edit</h2>
                </div>

                <div className="p-8 space-y-2">
                    {/* Temporary Disabled */}
                    <div className="flex flex-col md:flex-row md:items-center gap-4 py-4 border-b border-border/50">
                        <div className="w-full md:w-1/4 text-xs font-bold text-text-muted text-right uppercase tracking-wider">
                            Temporary Disabled
                        </div>
                        <div className="flex-1">
                            <ToggleSwitch checked={tempDisabled} onChange={setTempDisabled} />
                        </div>
                    </div>

                    {/* Transport */}
                    <FormSelect label="Transport" options={['mailgun', 'smtp', 'sendgrid']} defaultValue="mailgun" />

                    {/* SMTP Host */}
                    <FormInput label="SMTP Host" value="mail.dev4traders.com" icon={Pencil} />

                    {/* SMTP Port */}
                    <div className="flex flex-col md:flex-row md:items-center gap-4 py-4 border-b border-border/50">
                        <div className="w-full md:w-1/4 text-xs font-bold text-text-muted text-right uppercase tracking-wider">
                            <span className="text-danger mr-1">*</span>
                            SMTP Port
                        </div>
                        <div className="flex-1 flex items-center gap-0">
                            <button
                                onClick={() => setPort(p => p - 1)}
                                className="bg-surface border border-border rounded-l px-3 py-2 text-text-muted hover:bg-surface-lighter hover:text-white transition-colors"
                            >
                                <Minus className="w-3 h-3" />
                            </button>
                            <input
                                type="text"
                                value={port}
                                onChange={(e) => setPort(parseInt(e.target.value) || 0)}
                                className="w-20 bg-surface border-y border-border px-2 py-2 text-sm text-center text-text-main focus:outline-none focus:border-primary"
                            />
                            <button
                                onClick={() => setPort(p => p + 1)}
                                className="bg-secondary border border-secondary rounded-r px-3 py-2 text-white hover:bg-secondary/90 transition-colors"
                            >
                                <Plus className="w-3 h-3" />
                            </button>
                        </div>
                    </div>

                    {/* Encryption */}
                    <FormSelect label="Encryption" options={['ssl', 'tls', 'none']} defaultValue="ssl" />

                    {/* SMTP User */}
                    <FormInput label="SMTP User" value="dev4traders/funded" icon={Pencil} />

                    {/* SMTP Password */}
                    <FormInput label="SMTP Password" value="EcBJEwvI3mkAiXoaUKhkZKUn" icon={Pencil} type="password" />

                    {/* Department */}
                    <FormSelect label="Department" options={['funded@dev4traders.com']} defaultValue="funded@dev4traders.com" />

                    {/* Helper Link */}
                    <div className="flex flex-col md:flex-row gap-4 pt-1 pb-4">
                        <div className="w-full md:w-1/4"></div>
                        <div className="flex-1">
                            <div className="text-xs text-text-muted flex items-center gap-1">
                                <HelpCircle className="w-3 h-3" />
                                To manage Email Departments <a href="#" className="text-primary hover:underline">click</a>
                            </div>
                        </div>
                    </div>

                    {/* Send Test Email Button */}
                    <div className="flex flex-col md:flex-row gap-4 pt-2">
                        <div className="w-full md:w-1/4"></div>
                        <div className="flex-1">
                            <button className="bg-accent hover:bg-accent/90 text-white px-6 py-2 rounded text-sm font-medium transition-colors shadow-lg shadow-accent/20">
                                Send Test Email
                            </button>
                            <p className="mt-4 text-xs text-text-muted">
                                Test Email will be sent to <span className="font-bold text-text-main">funded@dev4traders.com</span>. To change <a href="#" className="text-primary hover:underline">click here</a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer Action Bar */}
                <div className="border-t border-border bg-surface/30 p-4 flex justify-between items-center">
                    <button
                        onClick={() => window.location.reload()}
                        className="flex items-center gap-2 px-6 py-2 bg-surface border border-border rounded text-text-muted hover:text-text-main transition-colors text-sm font-medium hover:bg-surface-lighter"
                    >
                        <RefreshCw className="w-4 h-4" />
                        Reset
                    </button>

                    <button className="flex items-center gap-2 px-8 py-2 bg-accent text-white rounded text-sm font-medium hover:bg-accent/90 transition-colors shadow-lg shadow-accent/20">
                        <Save className="w-4 h-4" />
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EmailSettings;
