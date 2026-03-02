import React, { useState } from 'react';
import {
    HelpCircle,
    List,
    Pencil,
    RotateCcw,
    Save,
    Trash2,
    Search
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../lib/utils';

const CreateSqalaGateway = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        enabled: true,
        appId: '',
        appSecret: '',
        refreshToken: ''
    });

    const handleReset = () => {
        setFormData({
            name: '',
            enabled: true,
            appId: '',
            appSecret: '',
            refreshToken: ''
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitting:', formData);
        alert('Sqala Gateway created successfully!');
        navigate('/payment-gateways/sqala');
    };

    // Toggle Switch Component
    const ToggleSwitch = ({ checked, onChange }) => (
        <div
            className={cn(
                "w-11 h-6 rounded-full relative cursor-pointer transition-colors duration-200 ease-in-out",
                checked ? "bg-[#5d6bb3]" : "bg-surface-lighter border border-border"
            )}
            onClick={() => onChange(!checked)}
        >
            <div
                className={cn(
                    "absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-transform duration-200 ease-in-out",
                    checked ? "translate-x-5" : "translate-x-0"
                )}
            />
        </div>
    );

    return (
        <div className="space-y-6 animate-in fade-in zoom-in duration-300">
            {/* Header */}
            <div className="flex items-center gap-2 mb-6">
                <h1 className="text-2xl font-bold text-text-main">Sqala Payment Gateways</h1>
                <a href="#" className="text-primary text-xs flex items-center gap-1 hover:underline ml-2">
                    Need Help? <HelpCircle className="w-3 h-3" />
                </a>
            </div>

            {/* Form Card */}
            <div className="glass-panel rounded-2xl border border-border overflow-hidden bg-surface">
                {/* Internal Header */}
                <div className="p-4 border-b border-border flex justify-between items-center bg-surface/50">
                    <h2 className="text-sm font-medium text-text-main">Create</h2>
                    <button
                        onClick={() => navigate('/payment-gateways/sqala')}
                        className="flex items-center gap-2 px-4 py-1.5 bg-[#5d6bb3] text-white rounded text-xs font-medium hover:bg-[#4d5999] transition-colors"
                    >
                        <List className="w-3 h-3" />
                        List
                    </button>
                </div>

                {/* Form Body */}
                <form onSubmit={handleSubmit} className="p-10 space-y-8 max-w-4xl mx-auto">
                    {/* Name */}
                    <div className="flex items-center gap-6">
                        <label className="w-24 text-right text-xs font-medium text-text-muted">
                            <span className="text-danger mr-1">*</span> Name
                        </label>
                        <div className="flex-1 flex items-center h-10">
                            <div className="h-full w-10 flex items-center justify-center bg-surface border border-r-0 border-border rounded-l-lg text-text-muted">
                                <Pencil className="w-3.5 h-3.5" />
                            </div>
                            <input
                                required
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="Input name"
                                className="flex-1 h-full bg-surface border border-border rounded-r-lg px-4 text-xs text-text-main focus:outline-none focus:border-primary transition-colors"
                            />
                        </div>
                    </div>

                    {/* Icon Preview */}
                    <div className="flex items-start gap-6">
                        <label className="w-24 text-right text-xs font-medium text-text-muted mt-2">
                            Icon
                        </label>
                        <div className="flex-1">
                            <div className="w-48 h-56 bg-surface border border-border rounded-lg relative flex flex-col items-center justify-center p-4">
                                <div className="flex-1 flex items-center justify-center">
                                    <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center">
                                        <img
                                            src="https://sqala.tech/wp-content/uploads/2023/06/Logo-Sqala-01.png"
                                            alt="sqala"
                                            className="w-12 h-12 opacity-60 grayscale object-contain"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.parentElement.innerHTML = '<div class="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center gap-1"><div class="w-2 h-2 bg-blue-500 rounded-full"></div><div class="w-2 h-2 bg-blue-500 rounded-full"></div></div>';
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="text-[10px] text-text-muted mb-4 font-mono">sqala.png</div>
                                <div className="flex items-center gap-4 w-full justify-start pl-2 mb-2">
                                    <button type="button" className="text-danger hover:text-danger/80">
                                        <Trash2 className="w-3.5 h-3.5" />
                                    </button>
                                    <button type="button" className="text-text-muted hover:text-primary">
                                        <Search className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Enabled */}
                    <div className="flex items-center gap-6">
                        <label className="w-24 text-right text-xs font-medium text-text-muted">
                            Enabled
                        </label>
                        <div className="flex-1 flex items-center h-10">
                            <ToggleSwitch
                                checked={formData.enabled}
                                onChange={(checked) => setFormData({ ...formData, enabled: checked })}
                            />
                        </div>
                    </div>

                    {/* App Id */}
                    <div className="flex items-center gap-6">
                        <label className="w-24 text-right text-xs font-medium text-text-muted">
                            <span className="text-danger mr-1">*</span> App Id
                        </label>
                        <div className="flex-1 flex items-center h-10">
                            <div className="h-full w-10 flex items-center justify-center bg-surface border border-r-0 border-border rounded-l-lg text-text-muted">
                                <Pencil className="w-3.5 h-3.5" />
                            </div>
                            <input
                                required
                                type="text"
                                value={formData.appId}
                                onChange={(e) => setFormData({ ...formData, appId: e.target.value })}
                                placeholder="Input app id"
                                className="flex-1 h-full bg-surface border border-border rounded-r-lg px-4 text-xs text-text-main focus:outline-none focus:border-primary transition-colors"
                            />
                        </div>
                    </div>

                    {/* App Secret */}
                    <div className="flex items-center gap-6">
                        <label className="w-24 text-right text-xs font-medium text-text-muted">
                            <span className="text-danger mr-1">*</span> App Secret
                        </label>
                        <div className="flex-1 flex items-center h-10">
                            <div className="h-full w-10 flex items-center justify-center bg-surface border border-r-0 border-border rounded-l-lg text-text-muted">
                                <Pencil className="w-3.5 h-3.5" />
                            </div>
                            <input
                                required
                                type="text"
                                value={formData.appSecret}
                                onChange={(e) => setFormData({ ...formData, appSecret: e.target.value })}
                                placeholder="Input app secret"
                                className="flex-1 h-full bg-surface border border-border rounded-r-lg px-4 text-xs text-text-main focus:outline-none focus:border-primary transition-colors"
                            />
                        </div>
                    </div>

                    {/* Refresh Token */}
                    <div className="flex items-center gap-6">
                        <label className="w-24 text-right text-xs font-medium text-text-muted">
                            <span className="text-danger mr-1">*</span> Refresh Token
                        </label>
                        <div className="flex-1 flex items-center h-10">
                            <div className="h-full w-10 flex items-center justify-center bg-surface border border-r-0 border-border rounded-l-lg text-text-muted">
                                <Pencil className="w-3.5 h-3.5" />
                            </div>
                            <input
                                required
                                type="text"
                                value={formData.refreshToken}
                                onChange={(e) => setFormData({ ...formData, refreshToken: e.target.value })}
                                placeholder="Input refresh token"
                                className="flex-1 h-full bg-surface border border-border rounded-r-lg px-4 text-xs text-text-main focus:outline-none focus:border-primary transition-colors"
                            />
                        </div>
                    </div>
                </form>

                {/* Footer Actions */}
                <div className="p-6 border-t border-border flex justify-between items-center bg-surface/50">
                    <button
                        type="button"
                        onClick={handleReset}
                        className="flex items-center gap-2 px-6 py-2 bg-surface text-text-muted border border-border rounded text-xs font-bold hover:bg-surface-lighter transition-colors"
                    >
                        <RotateCcw className="w-4 h-4" />
                        Reset
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="flex items-center gap-2 px-10 py-2.5 bg-[#5d6bb3] text-white rounded text-xs font-bold hover:bg-[#4d5999] transition-all shadow-lg shadow-primary/30"
                    >
                        <Save className="w-4 h-4" />
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateSqalaGateway;
