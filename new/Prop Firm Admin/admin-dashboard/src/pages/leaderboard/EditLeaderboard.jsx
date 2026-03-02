import React, { useState } from 'react';
import {
    HelpCircle,
    List,
    Eye,
    Trash2,
    Pencil,
    Plus,
    Minus,
    RotateCcw,
    Save
} from 'lucide-react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { cn } from '../../lib/utils';

const EditLeaderboard = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [searchParams] = useSearchParams();
    const isEdit = !!id;
    const type = searchParams.get('type') || 'accounts';

    const [formData, setFormData] = useState({
        title: isEdit ? 'lb' : '',
        maxLeaders: isEdit ? 10 : 10,
        sizes: '',
        isPublic: true
    });

    const handleIncrement = () => {
        setFormData(prev => ({ ...prev, maxLeaders: prev.maxLeaders + 1 }));
    };

    const handleDecrement = () => {
        setFormData(prev => ({ ...prev, maxLeaders: Math.max(1, prev.maxLeaders - 1) }));
    };

    const handleReset = () => {
        setFormData({
            title: '',
            maxLeaders: 10,
            sizes: '',
            isPublic: true
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitting:', formData);
        alert('Leaderboard saved successfully!');
        navigate(type === 'contests' ? '/leaderboard-setups/contests' : '/leaderboard-setups/accounts');
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
                <h1 className="text-2xl font-bold text-text-main">Leaderboards</h1>
                <a href="#" className="text-primary text-xs flex items-center gap-1 hover:underline ml-2">
                    Need Help? <HelpCircle className="w-3 h-3" />
                </a>
            </div>

            {/* Form Card */}
            <div className="glass-panel rounded-2xl border border-border overflow-hidden bg-surface">
                {/* Internal Header */}
                <div className="p-6 border-b border-border flex justify-between items-center">
                    <h2 className="text-lg font-medium text-text-main">{isEdit ? 'Edit' : 'Create'}</h2>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => navigate(type === 'contests' ? '/leaderboard-setups/contests' : '/leaderboard-setups/accounts')}
                            className="flex items-center gap-2 px-4 py-2 bg-[#5d6bb3] text-white rounded text-sm font-medium hover:bg-[#4d5999] transition-colors"
                        >
                            <List className="w-4 h-4" />
                            List
                        </button>
                        {isEdit && (
                            <>
                                <button className="flex items-center gap-2 px-4 py-2 bg-[#5d6bb3] text-white rounded text-sm font-medium hover:bg-[#4d5999] transition-colors">
                                    <Eye className="w-4 h-4" />
                                    View
                                </button>
                                <button className="flex items-center gap-2 px-4 py-2 bg-surface text-text-muted border border-border rounded text-sm font-medium hover:bg-surface-lighter transition-colors">
                                    <Trash2 className="w-4 h-4" />
                                    Delete
                                </button>
                            </>
                        )}
                    </div>
                </div>

                {/* Form Body */}
                <form onSubmit={handleSubmit} className="p-10 space-y-8 max-w-4xl mx-auto">
                    {/* Title */}
                    <div className="flex items-center gap-6">
                        <label className="w-32 text-right text-sm font-medium text-text-main">
                            <span className="text-danger mr-1">*</span> Title
                        </label>
                        <div className="flex-1 flex items-center">
                            <div className="h-10 w-10 flex items-center justify-center bg-surface border border-r-0 border-border rounded-l-lg text-text-muted">
                                <Pencil className="w-4 h-4" />
                            </div>
                            <input
                                required
                                type="text"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                placeholder="Title"
                                className="flex-1 h-10 bg-surface border border-border rounded-r-lg px-4 text-sm text-text-main focus:outline-none focus:border-primary transition-colors"
                            />
                        </div>
                    </div>

                    {/* Max Leaders */}
                    <div className="flex items-center gap-6">
                        <label className="w-32 text-right text-sm font-medium text-text-main">
                            <span className="text-danger mr-1">*</span> Max Leaders
                        </label>
                        <div className="flex-1 flex items-center">
                            <button
                                type="button"
                                onClick={handleDecrement}
                                className="h-10 w-10 flex items-center justify-center bg-surface border border-r-0 border-border rounded-l-lg text-text-muted hover:bg-surface-lighter"
                            >
                                <Minus className="w-4 h-4" />
                            </button>
                            <input
                                required
                                type="number"
                                value={formData.maxLeaders}
                                onChange={(e) => setFormData({ ...formData, maxLeaders: parseInt(e.target.value) || 0 })}
                                className="h-10 w-24 bg-surface border border-border px-4 text-sm text-text-main text-center focus:outline-none"
                            />
                            <button
                                type="button"
                                onClick={handleIncrement}
                                className="h-10 w-10 flex items-center justify-center bg-[#5d6bb3] border border-l-0 border-[#5d6bb3] rounded-r-lg text-white hover:bg-[#4d5999]"
                            >
                                <Plus className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Sizes */}
                    <div className="flex items-center gap-6">
                        <label className="w-32 text-right text-sm font-medium text-text-main">
                            Sizes
                        </label>
                        <div className="flex-1">
                            <select
                                value={formData.sizes}
                                onChange={(e) => setFormData({ ...formData, sizes: e.target.value })}
                                className="w-full h-10 bg-surface border border-border rounded-lg px-4 text-sm text-text-muted focus:outline-none focus:border-primary transition-colors appearance-none"
                            >
                                <option value="">Sizes</option>
                                <option value="1000">Deposit - 1000.00; Leverage - 100</option>
                            </select>
                        </div>
                    </div>

                    {/* Is Public */}
                    <div className="flex items-center gap-6">
                        <label className="w-32 text-right text-sm font-medium text-text-main">
                            Is Public
                        </label>
                        <div className="flex-1">
                            <ToggleSwitch
                                checked={formData.isPublic}
                                onChange={(checked) => setFormData({ ...formData, isPublic: checked })}
                            />
                        </div>
                    </div>
                </form>

                {/* Footer Actions */}
                <div className="p-6 border-t border-border flex justify-between items-center bg-surface/50">
                    <button
                        type="button"
                        onClick={handleReset}
                        className="flex items-center gap-2 px-4 py-2 bg-surface text-text-muted border border-border rounded text-sm font-medium hover:bg-surface-lighter transition-colors"
                    >
                        <RotateCcw className="w-4 h-4" />
                        Reset
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="flex items-center gap-2 px-6 py-2 bg-[#5d6bb3] text-white rounded text-sm font-bold hover:bg-[#4d5999] transition-colors shadow-lg shadow-primary/20"
                    >
                        <Save className="w-4 h-4" />
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditLeaderboard;
