import React, { useState } from 'react';
import { X, Minus, Maximize2, HelpCircle, Minimize2 } from 'lucide-react';
import { cn } from '../../lib/utils';

const NewChallengeModal = ({ isOpen, onClose }) => {
    const [isMinimized, setIsMinimized] = useState(false);
    const [isMaximized, setIsMaximized] = useState(false);

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
                    : "w-full max-w-2xl rounded-lg",
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
                            {/* User Field */}
                            <div className="grid grid-cols-[100px_1fr] items-center gap-4">
                                <label className="text-right text-text-main text-sm">
                                    <span className="text-danger mr-1">*</span>User
                                </label>
                                <div className="relative">
                                    <select className="w-full bg-background border border-border rounded px-3 py-2 text-text-muted focus:outline-none focus:border-primary appearance-none">
                                        <option>User</option>
                                        <option>Mahdi</option>
                                        <option>John Doe</option>
                                    </select>
                                    {/* Custom Arrow for select if needed, usually browser default is fine but can be styled */}
                                </div>
                            </div>

                            {/* Plan Field */}
                            <div className="grid grid-cols-[100px_1fr] items-center gap-4">
                                <label className="text-right text-text-main text-sm">
                                    <span className="text-danger mr-1">*</span>Plan
                                </label>
                                <div className="relative">
                                    <select className="w-full bg-background border border-border rounded px-3 py-2 text-text-muted focus:outline-none focus:border-primary appearance-none">
                                        <option>Plan</option>
                                        <option>10K Cypher Evaluation</option>
                                        <option>Test100k</option>
                                    </select>
                                </div>
                            </div>

                            {/* Helper Text */}
                            <div className="grid grid-cols-[100px_1fr] items-center gap-4">
                                <div></div>
                                <div className="flex items-center gap-1 text-sm text-text-muted">
                                    <HelpCircle className="w-4 h-4" />
                                    <span>To manage Plans</span>
                                    <a href="/plans" className="text-primary hover:underline">click</a>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-border">
                            <button
                                onClick={onClose}
                                className="px-4 py-2 border border-border rounded text-text-main hover:bg-surface-lighter transition-colors text-sm font-medium"
                            >
                                Reset
                            </button>
                            <button className="px-6 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors text-sm font-bold shadow-lg shadow-primary/20">
                                Submit
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default NewChallengeModal;
