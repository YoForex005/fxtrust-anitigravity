import React, { useState } from 'react';
import { ChevronRight, RefreshCw, Save, CircleDot, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ReorderPhases = () => {
    const navigate = useNavigate();

    const [plans, setPlans] = useState([
        { id: 140, title: '10K Cypher Evaluation', expanded: false },
        { id: 143, title: 'Test100k', expanded: false },
        { id: 144, title: '150k', expanded: false }
    ]);

    const [draggedItem, setDraggedItem] = useState(null);

    const handleExpandAll = () => {
        setPlans(plans.map(plan => ({ ...plan, expanded: true })));
    };

    const handleCollapseAll = () => {
        setPlans(plans.map(plan => ({ ...plan, expanded: false })));
    };

    const toggleExpand = (id) => {
        setPlans(plans.map(plan =>
            plan.id === id ? { ...plan, expanded: !plan.expanded } : plan
        ));
    };

    const handleSave = () => {
        console.log('Saving order:', plans);
        alert('Phase order saved successfully!');
    };

    const handleRefresh = () => {
        window.location.reload();
    };

    const handleBackToPlans = () => {
        navigate('/plans');
    };

    // Drag and drop handlers
    const handleDragStart = (e, index) => {
        setDraggedItem(index);
        e.dataTransfer.effectAllowed = 'move';
    };

    const handleDragOver = (e, index) => {
        e.preventDefault();

        if (draggedItem === null || draggedItem === index) return;

        const newPlans = [...plans];
        const draggedPlan = newPlans[draggedItem];

        newPlans.splice(draggedItem, 1);
        newPlans.splice(index, 0, draggedPlan);

        setDraggedItem(index);
        setPlans(newPlans);
    };

    const handleDragEnd = () => {
        setDraggedItem(null);
    };

    return (
        <div className="space-y-6 animate-in fade-in zoom-in duration-300">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-text-main mb-6">Reorder Phases</h1>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 mb-6">
                    <button
                        onClick={handleExpandAll}
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors text-sm font-medium"
                    >
                        <ChevronRight className="w-4 h-4" />
                        Expand
                    </button>
                    <button
                        onClick={handleCollapseAll}
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors text-sm font-medium"
                    >
                        <ChevronDown className="w-4 h-4" />
                        Collapse
                    </button>
                    <button
                        onClick={handleSave}
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors text-sm font-medium"
                    >
                        <Save className="w-4 h-4" />
                        Save
                    </button>
                    <button
                        onClick={handleRefresh}
                        className="flex items-center gap-2 px-4 py-2 bg-surface border border-border text-text-muted rounded hover:text-text-main transition-colors text-sm font-medium"
                    >
                        <RefreshCw className="w-4 h-4" />
                        Refresh
                    </button>
                    <button
                        onClick={handleBackToPlans}
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors text-sm font-medium"
                    >
                        <CircleDot className="w-4 h-4" />
                        Plans
                    </button>
                </div>
            </div>

            {/* Plans List */}
            <div className="glass-panel rounded-2xl border border-border overflow-hidden">
                <div className="divide-y divide-border">
                    {plans.map((plan, index) => (
                        <div
                            key={plan.id}
                            className={`bg-surface transition-colors ${draggedItem === index ? 'opacity-50' : 'opacity-100'
                                }`}
                            draggable
                            onDragStart={(e) => handleDragStart(e, index)}
                            onDragOver={(e) => handleDragOver(e, index)}
                            onDragEnd={handleDragEnd}
                        >
                            <div className="p-4 hover:bg-surface-lighter transition-colors cursor-move">
                                <div className="flex items-center gap-3">
                                    {/* Drag Handle */}
                                    <div className="text-text-muted">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z"></path>
                                        </svg>
                                    </div>

                                    {/* Expand/Collapse Icon */}
                                    <button
                                        onClick={() => toggleExpand(plan.id)}
                                        className="text-text-muted hover:text-primary transition-colors"
                                    >
                                        {plan.expanded ? (
                                            <ChevronDown className="w-4 h-4" />
                                        ) : (
                                            <ChevronRight className="w-4 h-4" />
                                        )}
                                    </button>

                                    {/* Plan Title */}
                                    <span className="text-text-main text-sm flex-1">{plan.title}</span>

                                    {/* Order Number */}
                                    <span className="text-xs text-text-muted">#{index + 1}</span>
                                </div>
                            </div>

                            {/* Expanded Content (Placeholder) */}
                            {plan.expanded && (
                                <div className="px-4 pb-4 text-sm text-text-muted bg-background/50">
                                    <div className="p-4 border border-border rounded">
                                        <p>Phase details for "{plan.title}" would appear here.</p>
                                        <p className="mt-2 text-xs">ID: {plan.id}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Instructions */}
            <div className="text-sm text-text-muted bg-surface/50 border border-border rounded-lg p-4">
                <p className="font-medium text-text-main mb-2">Instructions:</p>
                <ul className="list-disc list-inside space-y-1">
                    <li>Drag and drop plans to reorder them</li>
                    <li>Click the arrow icon to expand/collapse plan details</li>
                    <li>Use "Expand" to open all plans at once</li>
                    <li>Use "Collapse" to close all plans</li>
                    <li>Click "Save" to persist the new order</li>
                </ul>
            </div>
        </div>
    );
};

export default ReorderPhases;
