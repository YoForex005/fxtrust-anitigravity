import React, { useState } from 'react';
import { X, Minus, Maximize2, Minimize2, Edit2, Plus, RefreshCw, Save } from 'lucide-react';
import { cn } from '../../lib/utils';

const NewAccountSizeModal = ({ isOpen, onClose }) => {
    const [isMinimized, setIsMinimized] = useState(false);
    const [isMaximized, setIsMaximized] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        balance: 0,
        leverage: 100,
        enabled: true
    });

    if (!isOpen) return null;

    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleReset = () => {
        setFormData({
            title: '',
            balance: 0,
            leverage: 100,
            enabled: true
        });
    };

    const handleSubmit = () => {
        console.log('Account Size Data:', formData);
        alert('Account Size Created!');
        onClose();
    };

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
                        <div className="p-8 space-y-8 overflow-y-auto">
                            {/* Title Field */}
                            <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] items-center gap-4">
                                <label className="text-right text-text-main text-sm font-medium">
                                    <span className="text-danger mr-1">*</span>Title
                                </label>
                                <div className="relative flex items-center">
                                    <div className="absolute left-4 text-text-muted">
                                        <Edit2 className="w-4 h-4" />
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Input Title"
                                        value={formData.title}
                                        onChange={(e) => handleInputChange('title', e.target.value)}
                                        className="w-full bg-surface border border-border rounded-lg pl-12 pr-4 py-2.5 text-sm text-text-main focus:outline-none focus:border-primary transition-colors placeholder:text-text-muted/50"
                                    />
                                </div>
                            </div>

                            {/* Balance Field */}
                            <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] items-center gap-4">
                                <label className="text-right text-text-main text-sm font-medium">
                                    <span className="text-danger mr-1">*</span>Balance
                                </label>
                                <div className="flex items-center max-w-[200px]">
                                    <button
                                        onClick={() => handleInputChange('balance', Math.max(0, formData.balance - 1))}
                                        className="p-2.5 bg-surface border border-border rounded-l-lg text-text-muted hover:text-text-main transition-colors"
                                    >
                                        <Minus className="w-4 h-4" />
                                    </button>
                                    <input
                                        type="number"
                                        value={formData.balance}
                                        onChange={(e) => handleInputChange('balance', parseInt(e.target.value) || 0)}
                                        className="flex-1 bg-background border-y border-border px-4 py-2 text-center text-sm text-text-main focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                    />
                                    <button
                                        onClick={() => handleInputChange('balance', formData.balance + 1)}
                                        className="p-2.5 bg-[#5B7DBD] text-white border border-[#5B7DBD] rounded-r-lg hover:bg-[#4A6BA8] transition-colors"
                                    >
                                        <Plus className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            {/* Leverage Field */}
                            <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] items-center gap-4">
                                <label className="text-right text-text-main text-sm font-medium">
                                    <span className="text-danger mr-1">*</span>Leverage
                                </label>
                                <div className="flex items-center max-w-[200px]">
                                    <button
                                        onClick={() => handleInputChange('leverage', Math.max(0, formData.leverage - 1))}
                                        className="p-2.5 bg-surface border border-border rounded-l-lg text-text-muted hover:text-text-main transition-colors"
                                    >
                                        <Minus className="w-4 h-4" />
                                    </button>
                                    <input
                                        type="number"
                                        value={formData.leverage}
                                        onChange={(e) => handleInputChange('leverage', parseInt(e.target.value) || 0)}
                                        className="flex-1 bg-background border-y border-border px-4 py-2 text-center text-sm text-text-main focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                    />
                                    <button
                                        onClick={() => handleInputChange('leverage', formData.leverage + 1)}
                                        className="p-2.5 bg-[#5B7DBD] text-white border border-[#5B7DBD] rounded-r-lg hover:bg-[#4A6BA8] transition-colors"
                                    >
                                        <Plus className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            {/* Enabled Field */}
                            <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] items-center gap-4">
                                <label className="text-right text-text-main text-sm font-medium">
                                    Enabled
                                </label>
                                <div
                                    className={cn(
                                        "w-12 h-6 rounded-full relative cursor-pointer transition-colors duration-200 ease-in-out shadow-inner",
                                        formData.enabled ? "bg-[#5B7DBD]" : "bg-slate-300 dark:bg-slate-700"
                                    )}
                                    onClick={() => handleInputChange('enabled', !formData.enabled)}
                                >
                                    <div
                                        className={cn(
                                            "absolute top-1 left-1 w-4 h-4 rounded-full bg-white shadow-md transition-transform duration-200 ease-in-out",
                                            formData.enabled ? "translate-x-6" : "translate-x-0"
                                        )}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-end gap-3 px-6 py-6 border-t border-border bg-surface/30 mt-auto">
                            <button
                                onClick={handleSubmit}
                                className="flex items-center gap-2 px-8 py-2.5 bg-[#5B7DBD] text-white rounded hover:bg-[#4A6BA8] transition-all font-bold shadow-lg shadow-[#5B7DBD]/20"
                            >
                                <Save className="w-4 h-4" />
                                Submit
                            </button>
                            <button
                                onClick={handleReset}
                                className="flex items-center gap-2 px-6 py-2 bg-white dark:bg-surface border border-border rounded text-text-main hover:bg-surface-lighter transition-colors text-sm font-medium"
                            >
                                <RefreshCw className="w-4 h-4" />
                                Reset
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default NewAccountSizeModal;
