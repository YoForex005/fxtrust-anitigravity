import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { List, Pencil, Trash2, HelpCircle } from 'lucide-react';

const PlanDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Mock plan data - in real app, fetch by ID
    const planData = {
        140: {
            id: 140,
            title: '10K Cypher Evaluation',
            price: 89,
            currency: '$',
            description: 'In house 2 step 10K evaluation - Highest place will receive a completed assessment.',
            pngTemplateFile: '',
            phases: [],
            features: []
        },
        143: {
            id: 143,
            title: 'Test100k',
            price: 450,
            currency: '$',
            description: 'Comprehensive 100K evaluation plan with advanced trading objectives.',
            pngTemplateFile: '',
            phases: [],
            features: []
        },
        144: {
            id: 144,
            title: '150k',
            price: 159,
            currency: '€',
            description: 'Premium 150K evaluation plan designed for professional traders.',
            pngTemplateFile: '',
            phases: [],
            features: []
        }
    };

    const plan = planData[id] || planData[140];

    const handleEdit = () => {
        alert(`Edit plan: ${plan.title}`);
    };

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this plan?')) {
            navigate('/plans');
        }
    };

    return (
        <div className="space-y-6 animate-in fade-in zoom-in duration-300">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-bold text-text-main">Plans</h1>
                    <a href="#" className="text-primary text-xs flex items-center gap-1 hover:underline">
                        Need Help? <HelpCircle className="w-3 h-3" />
                    </a>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => navigate('/plans')}
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors text-sm font-medium"
                    >
                        <List className="w-4 h-4" />
                        List
                    </button>
                    <button
                        onClick={handleEdit}
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors text-sm font-medium"
                    >
                        <Pencil className="w-4 h-4" />
                        Edit
                    </button>
                    <button
                        onClick={handleDelete}
                        className="flex items-center gap-2 px-4 py-2 bg-danger text-white rounded hover:bg-danger/90 transition-colors text-sm font-medium"
                    >
                        <Trash2 className="w-4 h-4" />
                        Delete
                    </button>
                </div>
            </div>

            {/* Detail Section */}
            <div className="glass-panel rounded-2xl border border-border overflow-hidden">
                <div className="px-6 py-3 border-b border-border bg-surface/50">
                    <h2 className="text-sm font-medium text-text-main">Detail</h2>
                </div>

                {/* Plan Info */}
                <div className="p-6">
                    <h3 className="text-sm font-medium text-text-muted mb-4">Plan</h3>

                    <div className="space-y-4">
                        {/* Title */}
                        <div className="grid grid-cols-[150px_1fr] items-center gap-4">
                            <label className="text-right text-text-muted text-sm">Title</label>
                            <div className="bg-background border border-border rounded px-3 py-2 text-text-main text-sm">
                                {plan.title}
                            </div>
                        </div>

                        {/* Price */}
                        <div className="grid grid-cols-[150px_1fr] items-center gap-4">
                            <label className="text-right text-text-muted text-sm">Price</label>
                            <div className="bg-background border border-border rounded px-3 py-2 text-text-main text-sm">
                                {plan.price}
                            </div>
                        </div>

                        {/* Description */}
                        <div className="grid grid-cols-[150px_1fr] items-start gap-4">
                            <label className="text-right text-text-muted text-sm pt-2">Description</label>
                            <div className="bg-background border border-border rounded px-3 py-2 text-text-main text-sm min-h-[60px]">
                                {plan.description}
                            </div>
                        </div>

                        {/* Png Template File */}
                        <div className="grid grid-cols-[150px_1fr] items-center gap-4">
                            <label className="text-right text-text-muted text-sm">Png Template File</label>
                            <div className="bg-background border border-border rounded px-3 py-2 text-text-muted text-sm">
                                {plan.pngTemplateFile || ''}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Phases Section */}
            <div className="glass-panel rounded-2xl border border-border overflow-hidden">
                <div className="px-6 py-3 border-b border-border bg-surface/50">
                    <h2 className="text-sm font-medium text-text-main">Phases</h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-surface/50 text-text-muted text-xs font-medium border-b border-border">
                                <th className="p-3">Title</th>
                                <th className="p-3">Broker Type</th>
                                <th className="p-3">Server</th>
                                <th className="p-3">Group</th>
                                <th className="p-3">Leverage</th>
                                <th className="p-3">Balance</th>
                                <th className="p-3">Loss Max Loss</th>
                                <th className="p-3">Trading Days Min</th>
                                <th className="p-3">Trading Days Max</th>
                                <th className="p-3">Daily Loss</th>
                                <th className="p-3">Profit</th>
                                <th className="p-3">Is Stoploss Required</th>
                            </tr>
                        </thead>
                        <tbody>
                            {plan.phases.length === 0 ? (
                                <tr>
                                    <td colSpan="12" className="p-6 text-center text-text-muted text-sm">
                                        <div className="flex items-center justify-center gap-2">
                                            <span className="text-text-muted">⊘</span>
                                            No data.
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                plan.phases.map((phase, idx) => (
                                    <tr key={idx} className="border-b border-border">
                                        <td className="p-3 text-text-main text-sm">{phase.title}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                <div className="px-6 py-3 text-xs text-text-muted border-t border-border">
                    Showing 0 to 0 of 0 entries
                </div>
            </div>

            {/* Features Section */}
            <div className="glass-panel rounded-2xl border border-border overflow-hidden">
                <div className="px-6 py-3 border-b border-border bg-surface/50">
                    <h2 className="text-sm font-medium text-text-main">Features</h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-surface/50 text-text-muted text-xs font-medium border-b border-border">
                                <th className="p-3">Feature</th>
                            </tr>
                        </thead>
                        <tbody>
                            {plan.features.length === 0 ? (
                                <tr>
                                    <td className="p-6 text-center text-text-muted text-sm">
                                        <div className="flex items-center justify-center gap-2">
                                            <span className="text-text-muted">⊘</span>
                                            No data.
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                plan.features.map((feature, idx) => (
                                    <tr key={idx} className="border-b border-border">
                                        <td className="p-3 text-text-main text-sm">{feature}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                <div className="px-6 py-3 text-xs text-text-muted border-t border-border">
                    Showing 0 to 0 of 0 entries
                </div>
            </div>
        </div>
    );
};

export default PlanDetail;
