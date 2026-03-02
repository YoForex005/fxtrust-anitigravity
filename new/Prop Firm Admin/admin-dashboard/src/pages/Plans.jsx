import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Plus,
    Search,
    List,
    Eye,
    Pencil,
    Trash2,
    HelpCircle,
    ChevronLeft,
    ChevronRight,
    ChevronsRight,
    ChevronDown
} from 'lucide-react';
import { cn } from '../lib/utils';
import NewPlanModal from '../components/modals/NewPlanModal';
import DeleteConfirmModal from '../components/modals/DeleteConfirmModal';

const Plans = () => {
    const navigate = useNavigate();
    const [selectedRows, setSelectedRows] = useState([]);
    const [isNewPlanModalOpen, setIsNewPlanModalOpen] = useState(false);
    const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
    const [planToDelete, setPlanToDelete] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    // Mock Data based on screenshot - using state to make it mutable
    const [plans, setPlans] = useState([
        {
            id: 140,
            title: '10K Cypher Evaluation',
            currency: '$',
            price: 89,
            enabled: true,
            public: true,
            phasesCount: 0
        },
        {
            id: 143,
            title: 'Test100k',
            currency: '$',
            price: 450,
            enabled: true,
            public: true,
            phasesCount: 0
        },
        {
            id: 144,
            title: '150k',
            currency: '€',
            price: 159,
            enabled: true,
            public: true,
            phasesCount: 0
        },
    ]);

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedRows(filteredPlans.map(p => p.id));
        } else {
            setSelectedRows([]);
        }
    };

    const handleSelectRow = (id) => {
        if (selectedRows.includes(id)) {
            setSelectedRows(selectedRows.filter(rowId => rowId !== id));
        } else {
            setSelectedRows([...selectedRows, id]);
        }
    };

    // Filter plans based on search query
    const filteredPlans = plans.filter(plan => {
        if (searchQuery === '') return true;

        const query = searchQuery.toLowerCase();
        return (
            plan.title.toLowerCase().includes(query) ||
            plan.id.toString().includes(query) ||
            plan.currency.toLowerCase().includes(query) ||
            plan.price.toString().includes(query)
        );
    });

    // Toggle Enabled status
    const handleToggleEnabled = (id) => {
        setPlans(plans.map(plan =>
            plan.id === id ? { ...plan, enabled: !plan.enabled } : plan
        ));
    };

    // Toggle Public status
    const handleTogglePublic = (id) => {
        setPlans(plans.map(plan =>
            plan.id === id ? { ...plan, public: !plan.public } : plan
        ));
    };

    // Change currency
    const handleCurrencyChange = (id, currency) => {
        setPlans(plans.map(plan =>
            plan.id === id ? { ...plan, currency } : plan
        ));
    };

    // Action handlers
    const handleView = (plan) => {
        navigate(`/plans/${plan.id}`);
    };

    const handleEdit = (plan) => {
        navigate(`/plans/${plan.id}/edit`);
    };

    const handleDelete = (id) => {
        const plan = plans.find(p => p.id === id);
        setPlanToDelete(plan);
        setDeleteConfirmOpen(true);
    };

    const confirmDelete = () => {
        if (planToDelete) {
            setPlans(plans.filter(plan => plan.id !== planToDelete.id));
            setSelectedRows(selectedRows.filter(rowId => rowId !== planToDelete.id));
        }
        setDeleteConfirmOpen(false);
        setPlanToDelete(null);
    };

    const cancelDelete = () => {
        setDeleteConfirmOpen(false);
        setPlanToDelete(null);
    };

    // Bulk delete handler
    const handleBulkDelete = () => {
        if (window.confirm(`Are you sure you want to delete ${selectedRows.length} selected plan(s)?`)) {
            setPlans(plans.filter(plan => !selectedRows.includes(plan.id)));
            setSelectedRows([]);
        }
    };

    // Toggle Switch Component
    const ToggleSwitch = ({ checked, onChange }) => (
        <div
            className={cn(
                "w-11 h-6 rounded-full relative cursor-pointer transition-colors duration-200 ease-in-out",
                checked ? "bg-primary" : "bg-surface-lighter border border-border"
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

            <NewPlanModal isOpen={isNewPlanModalOpen} onClose={() => setIsNewPlanModalOpen(false)} />
            <DeleteConfirmModal
                isOpen={deleteConfirmOpen}
                onConfirm={confirmDelete}
                onCancel={cancelDelete}
                itemId={planToDelete?.id}
                itemName={planToDelete?.title}
            />

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <div className="flex items-center gap-2">
                        <h1 className="text-2xl font-bold text-text-main">Plans</h1>
                        <span className="text-text-muted text-sm border-l border-border pl-2">Trading Plans and Phases</span>
                        <a href="#" className="text-primary text-xs flex items-center gap-1 hover:underline ml-2">
                            Need Help? <HelpCircle className="w-3 h-3" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Toolbar */}
            <div className="flex flex-col md:flex-row justify-between gap-4">
                {/* Left side - Selected items dropdown or Search */}
                {selectedRows.length > 0 ? (
                    <div className="flex items-center gap-2">
                        <div className="relative">
                            <select className="bg-surface border border-border rounded-lg px-4 py-2 pr-8 text-sm text-text-main focus:outline-none focus:border-primary appearance-none cursor-pointer">
                                <option>{selectedRows.length} items selected</option>
                            </select>
                            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
                        </div>
                        <button
                            onClick={handleBulkDelete}
                            className="flex items-center gap-2 px-4 py-2 bg-danger/10 border border-danger/30 text-danger rounded-lg hover:bg-danger/20 transition-colors text-sm font-medium"
                        >
                            <Trash2 className="w-4 h-4" />
                            Delete Selected
                        </button>
                    </div>
                ) : (
                    <div className="relative flex-1 max-w-sm">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-surface border border-border rounded-full pl-10 pr-4 py-2 text-sm text-text-main focus:outline-none focus:border-primary transition-colors"
                        />
                    </div>
                )}

                {/* Right side - Action buttons */}

                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setIsNewPlanModalOpen(true)}
                        className="flex items-center gap-2 px-4 py-2 bg-surface border border-primary/30 text-primary font-bold rounded-lg hover:bg-primary/10 transition-colors text-sm"
                    >
                        <Plus className="w-4 h-4" />
                        New
                    </button>
                    <button
                        onClick={() => navigate('/reorder-phases')}
                        className="flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-lg text-text-muted hover:text-text-main transition-colors text-sm font-medium"
                    >
                        <List className="w-4 h-4" />
                        Reorder Phases
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
                                        checked={selectedRows.length === plans.length && plans.length > 0}
                                        onChange={handleSelectAll}
                                    />
                                </th>
                                <th className="p-4 font-medium">Id</th>
                                <th className="p-4 font-medium">Title</th>
                                <th className="p-4 font-medium">Currency</th>
                                <th className="p-4 font-medium">Price</th>
                                <th className="p-4 font-medium">Enabled?</th>
                                <th className="p-4 font-medium">Public?</th>
                                <th className="p-4 font-medium">Phases Count</th>
                                <th className="p-4 font-medium text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border text-sm">
                            {filteredPlans.map((item) => (
                                <tr key={item.id} className="group hover:bg-surface/40 transition-colors">
                                    <td className="p-4 text-center">
                                        <input
                                            type="checkbox"
                                            className="rounded border-border bg-background focus:ring-primary text-primary"
                                            checked={selectedRows.includes(item.id)}
                                            onChange={() => handleSelectRow(item.id)}
                                        />
                                    </td>
                                    <td className="p-4 text-text-muted">{item.id}</td>
                                    <td className="p-4 text-text-main font-medium">{item.title}</td>

                                    {/* Currency Dropdown */}
                                    <td className="p-4">
                                        <select
                                            value={item.currency}
                                            onChange={(e) => handleCurrencyChange(item.id, e.target.value)}
                                            className="bg-surface border border-border rounded px-2 py-1 text-text-main focus:outline-none focus:border-primary text-xs appearance-none min-w-[60px] cursor-pointer hover:border-primary/50 transition-colors"
                                        >
                                            <option value="$">$</option>
                                            <option value="€">€</option>
                                            <option value="£">£</option>
                                            <option value="BTC">BTC</option>
                                            <option value="BRL">BRL</option>
                                            <option value="¥">¥</option>
                                            <option value="₹">₹</option>
                                        </select>
                                    </td>

                                    <td className="p-4 text-text-main">{item.price}</td>

                                    {/* Enabled Toggle */}
                                    <td className="p-4">
                                        <ToggleSwitch checked={item.enabled} onChange={() => handleToggleEnabled(item.id)} />
                                    </td>

                                    {/* Public Toggle */}
                                    <td className="p-4">
                                        <ToggleSwitch checked={item.public} onChange={() => handleTogglePublic(item.id)} />
                                    </td>

                                    {/* Phases Count */}
                                    <td className="p-4">
                                        <div className="flex items-center gap-1 text-secondary font-medium">
                                            <ChevronsRight className="w-3 h-3" />
                                            {item.phasesCount}
                                        </div>
                                    </td>

                                    <td className="p-4 text-center">
                                        <div className="flex items-center justify-center gap-3 text-text-muted">
                                            <button
                                                onClick={() => handleView(item)}
                                                className="hover:text-primary transition-colors"
                                                title="View"
                                            >
                                                <Eye className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => handleEdit(item)}
                                                className="hover:text-secondary transition-colors"
                                                title="Edit"
                                            >
                                                <Pencil className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(item.id)}
                                                className="hover:text-danger transition-colors"
                                                title="Delete"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Footer / Pagination */}
                <div className="p-4 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-muted">
                    <div>
                        Showing <span className="font-medium text-text-main">1</span> to <span className="font-medium text-text-main">3</span> of <span className="font-medium text-text-main">3</span> entries
                    </div>

                    <div className="flex items-center gap-2">
                        <select className="bg-surface border border-border rounded p-1 text-text-main focus:outline-none focus:border-primary">
                            <option>100</option>
                            <option>50</option>
                            <option>25</option>
                        </select>
                        <div className="flex items-center rounded-lg border border-border overflow-hidden">
                            <button className="p-2 hover:bg-surface transition-colors border-r border-border"><ChevronLeft className="w-4 h-4" /></button>
                            <button className="px-3 py-2 bg-primary text-background font-bold">1</button>
                            <button className="p-2 hover:bg-surface transition-colors border-l border-border"><ChevronRight className="w-4 h-4" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Plans;
