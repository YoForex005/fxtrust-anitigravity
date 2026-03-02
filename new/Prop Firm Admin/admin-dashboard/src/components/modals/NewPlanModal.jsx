import React, { useState } from 'react';
import { Edit, Upload, RefreshCw, Save, List, X, Minus, Maximize2, Minimize2 } from 'lucide-react';
import { cn } from '../../lib/utils';

const NewPlanModal = ({ isOpen, onClose }) => {
    const [isMinimized, setIsMinimized] = useState(false);
    const [isMaximized, setIsMaximized] = useState(false);
    const [activeTab, setActiveTab] = useState('base');
    const [enabled, setEnabled] = useState(true);
    const [isPublic, setIsPublic] = useState(true);
    const [verification, setVerification] = useState(false);

    if (!isOpen) return null;

    return (
        <div className={cn(
            "fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-in fade-in duration-200",
            isMinimized && "pointer-events-none items-end justify-end p-6"
        )}>
            {/* Modal Container */}
            <div className={cn(
                "bg-surface border border-border shadow-2xl animate-in zoom-in-95 duration-200 transition-all overflow-hidden flex flex-col",
                isMaximized
                    ? "fixed inset-0 w-full max-w-none h-full rounded-none"
                    : "w-full max-w-4xl rounded-lg",
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

                        {/* Tabs */}
                        <div className="border-b border-border bg-surface/50 px-6">
                            <div className="flex gap-8 text-sm">
                                <button
                                    onClick={() => setActiveTab('base')}
                                    className={cn(
                                        "pb-3 pt-3 border-b-2 transition-colors font-medium",
                                        activeTab === 'base'
                                            ? "border-primary text-primary"
                                            : "border-transparent text-text-muted hover:text-text-main"
                                    )}
                                >
                                    Base
                                </button>
                                <button
                                    onClick={() => setActiveTab('features')}
                                    className={cn(
                                        "pb-3 pt-3 border-b-2 transition-colors font-medium",
                                        activeTab === 'features'
                                            ? "border-primary text-primary"
                                            : "border-transparent text-text-muted hover:text-text-main"
                                    )}
                                >
                                    Features
                                </button>
                                <button
                                    onClick={() => setActiveTab('phases')}
                                    className={cn(
                                        "pb-3 pt-3 border-b-2 transition-colors font-medium",
                                        activeTab === 'phases'
                                            ? "border-primary text-primary"
                                            : "border-transparent text-text-muted hover:text-text-main"
                                    )}
                                >
                                    Phases
                                </button>
                                <button
                                    onClick={() => setActiveTab('certificate')}
                                    className={cn(
                                        "pb-3 pt-3 border-b-2 transition-colors font-medium",
                                        activeTab === 'certificate'
                                            ? "border-primary text-primary"
                                            : "border-transparent text-text-muted hover:text-text-main"
                                    )}
                                >
                                    Certificate
                                </button>
                            </div>
                        </div>

                        {/* Body */}
                        <div className="p-8">
                            {activeTab === 'base' && (
                                <div className="space-y-6">
                                    {/* Title Field */}
                                    <div className="grid grid-cols-[150px_1fr] items-center gap-4">
                                        <label className="text-right text-text-main text-sm">
                                            <span className="text-danger mr-1">*</span>Title
                                        </label>
                                        <div className="relative">
                                            <Edit className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                                            <input
                                                type="text"
                                                placeholder="Input Title"
                                                className="w-full bg-background border border-border rounded pl-10 pr-3 py-2 text-text-main placeholder:text-text-muted focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                    </div>

                                    {/* Description Field */}
                                    <div className="grid grid-cols-[150px_1fr] items-start gap-4">
                                        <label className="text-right text-text-main text-sm pt-2">
                                            <span className="text-danger mr-1">*</span>Description
                                        </label>
                                        <textarea
                                            placeholder="Input description"
                                            rows="4"
                                            className="w-full bg-background border border-border rounded px-3 py-2 text-text-main placeholder:text-text-muted focus:outline-none focus:border-primary resize-none"
                                        />
                                    </div>

                                    {/* Price Field */}
                                    <div className="grid grid-cols-[150px_1fr] items-center gap-4">
                                        <label className="text-right text-text-main text-sm">
                                            <span className="text-danger mr-1">*</span>Price
                                        </label>
                                        <div className="relative">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted">$</span>
                                            <input
                                                type="number"
                                                placeholder="Input Price"
                                                className="w-full bg-background border border-border rounded pl-8 pr-3 py-2 text-text-main placeholder:text-text-muted focus:outline-none focus:border-primary"
                                            />
                                        </div>
                                    </div>

                                    {/* Currency Field */}
                                    <div className="grid grid-cols-[150px_1fr] items-center gap-4">
                                        <label className="text-right text-text-main text-sm">
                                            <span className="text-danger mr-1">*</span>Currency
                                        </label>
                                        <div className="relative">
                                            <select className="w-full bg-background border border-border rounded px-3 py-2 text-text-main focus:outline-none focus:border-primary appearance-none">
                                                <option value="$">$</option>
                                                <option value="€">€</option>
                                                <option value="£">£</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Help Post Field */}
                                    <div className="grid grid-cols-[150px_1fr] items-center gap-4">
                                        <label className="text-right text-text-main text-sm">Help Post</label>
                                        <div className="flex items-center gap-2">
                                            <select className="flex-1 bg-background border border-border rounded px-3 py-2 text-text-muted focus:outline-none focus:border-primary appearance-none">
                                                <option>Choose Help Post</option>
                                            </select>
                                            <button className="p-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors">
                                                <Upload className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Enabled Toggle */}
                                    <div className="grid grid-cols-[150px_1fr] items-center gap-4">
                                        <label className="text-right text-text-main text-sm">Enabled?</label>
                                        <button
                                            onClick={() => setEnabled(!enabled)}
                                            className={`relative w-12 h-6 rounded-full transition-colors ${enabled ? 'bg-primary' : 'bg-border'
                                                }`}
                                        >
                                            <span
                                                className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${enabled ? 'translate-x-6' : ''
                                                    }`}
                                            />
                                        </button>
                                    </div>

                                    {/* Public Toggle */}
                                    <div className="grid grid-cols-[150px_1fr] items-center gap-4">
                                        <label className="text-right text-text-main text-sm">Public?</label>
                                        <button
                                            onClick={() => setIsPublic(!isPublic)}
                                            className={`relative w-12 h-6 rounded-full transition-colors ${isPublic ? 'bg-primary' : 'bg-border'
                                                }`}
                                        >
                                            <span
                                                className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${isPublic ? 'translate-x-6' : ''
                                                    }`}
                                            />
                                        </button>
                                    </div>

                                    {/* Verification Toggle */}
                                    <div className="grid grid-cols-[150px_1fr] items-start gap-4">
                                        <label className="text-right text-text-main text-sm pt-2">Verification</label>
                                        <div className="space-y-2">
                                            <button
                                                onClick={() => setVerification(!verification)}
                                                className={`relative w-12 h-6 rounded-full transition-colors ${verification ? 'bg-primary' : 'bg-border'
                                                    }`}
                                            >
                                                <span
                                                    className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${verification ? 'translate-x-6' : ''
                                                        }`}
                                                />
                                            </button>
                                            <p className="text-xs text-orange-500 flex items-center gap-1">
                                                <span className="text-orange-500">⚠</span>
                                                Manual verification is required for the Passed Challenge
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'features' && (
                                <div className="text-center py-12 text-text-muted">
                                    Features configuration will be available here
                                </div>
                            )}

                            {activeTab === 'phases' && (
                                <div className="text-center py-12 text-text-muted">
                                    Phases configuration will be available here
                                </div>
                            )}

                            {activeTab === 'certificate' && (
                                <div className="text-center py-12 text-text-muted">
                                    Certificate configuration will be available here
                                </div>
                            )}
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

export default NewPlanModal;
