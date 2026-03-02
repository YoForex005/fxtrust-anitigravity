import React, { useState } from 'react';
import {
    RefreshCw,
    Filter,
    Plus,
    Eye,
    Trash2,
    X,
    RotateCcw,
    MoreHorizontal,
    Search,
    ChevronLeft,
    ChevronRight,
    HelpCircle
} from 'lucide-react';
import { cn } from '../lib/utils';
import { useNavigate } from 'react-router-dom';
import NewChallengeModal from '../components/modals/NewChallengeModal';
import DeleteConfirmModal from '../components/modals/DeleteConfirmModal';

const Challenges = () => {
    const navigate = useNavigate();
    const [selectedRows, setSelectedRows] = useState([]);
    const [isNewChallengeModalOpen, setIsNewChallengeModalOpen] = useState(false);
    const [showFilters, setShowFilters] = useState(false);
    const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
    const [challengeToDelete, setChallengeToDelete] = useState(null);

    // Initial Data
    const initialChallenges = [
        {
            id: 2283,
            user: 'Mahdi',
            email: 'kljhgfdfghjd@gmail.com',
            plan: '10K Cypher Evaluation',
            phase: 1,
            status: 'Error',
            updated: '2 months ago',
            actions: ['cancel', 'retry']
        },
        {
            id: 2284,
            user: 'Mahdi',
            email: 'kljhgfdfghjd@gmail.com',
            plan: 'Test100k',
            phase: 1,
            status: 'Cancelled',
            updated: '1 month ago',
            actions: []
        },
        {
            id: 2285,
            user: 'Mahdi',
            email: 'kljhgfdfghjd@gmail.com',
            plan: 'Test100k',
            phase: 1,
            status: 'Error',
            updated: '3 months ago',
            actions: ['cancel', 'retry']
        },
    ];

    const [challenges, setChallenges] = useState(initialChallenges);
    const [activeStatusTab, setActiveStatusTab] = useState('all'); // 'all', 'cancelled', 'error'

    // Filter challenges based on active status tab
    const filteredChallenges = activeStatusTab === 'all'
        ? challenges
        : challenges.filter(c => c.status.toLowerCase() === activeStatusTab);

    // Get counts for tabs
    const cancelledCount = challenges.filter(c => c.status === 'Cancelled').length;
    const errorCount = challenges.filter(c => c.status === 'Error').length;

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedRows(challenges.map(c => c.id));
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

    // Action Handlers
    const handleView = (challenge) => {
        navigate(`/challenges/${challenge.id}`);
    };

    const handleDelete = (challenge) => {
        setChallengeToDelete(challenge);
        setDeleteConfirmOpen(true);
    };

    const confirmDelete = () => {
        if (challengeToDelete) {
            setChallenges(challenges.filter(c => c.id !== challengeToDelete.id));
            setSelectedRows(selectedRows.filter(id => id !== challengeToDelete.id));
        }
        setDeleteConfirmOpen(false);
        setChallengeToDelete(null);
    };

    const handleCancelChallenge = (id) => {
        if (window.confirm('Are you sure you want to cancel this challenge?')) {
            setChallenges(challenges.map(c =>
                c.id === id ? { ...c, status: 'Cancelled', actions: [] } : c
            ));
        }
    };

    const handleRetryChallenge = (id) => {
        alert(`Retrying order generation for challenge #${id}...`);
        // In a real app, this would trigger an API call and maybe change status back to 'Pending'
    };

    return (
        <div className="space-y-6 animate-in fade-in zoom-in duration-300">

            <NewChallengeModal isOpen={isNewChallengeModalOpen} onClose={() => setIsNewChallengeModalOpen(false)} />

            <DeleteConfirmModal
                isOpen={deleteConfirmOpen}
                onConfirm={confirmDelete}
                onCancel={() => setDeleteConfirmOpen(false)}
                itemId={challengeToDelete?.id}
                itemName={challengeToDelete?.user}
            />

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <div className="flex items-center gap-2">
                        <h1 className="text-2xl font-bold text-text-main">Challenges</h1>
                        <span className="text-text-muted text-sm">Challenge Orders</span>
                        <a href="#" className="text-primary text-xs flex items-center gap-1 hover:underline">
                            Need Help? <HelpCircle className="w-3 h-3" />
                        </a>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    {/* To match screenshot layout of buttons */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => window.location.reload()}
                            className="flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-lg text-text-muted hover:text-text-main transition-colors text-sm font-medium"
                        >
                            <RefreshCw className="w-4 h-4" />
                            Refresh
                        </button>
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className={cn(
                                "flex items-center gap-2 px-4 py-2 border rounded-lg transition-colors text-sm font-medium",
                                showFilters
                                    ? "bg-primary/10 border-primary text-primary"
                                    : "bg-surface border border-border text-text-muted hover:text-text-main"
                            )}
                        >
                            <Filter className="w-4 h-4" />
                            Filter
                        </button>
                    </div>
                    <button
                        onClick={() => setIsNewChallengeModalOpen(true)}
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-background font-bold rounded-lg hover:bg-primary/90 transition-colors text-sm shadow-glow-primary"
                    >
                        <Plus className="w-4 h-4" />
                        New
                    </button>
                </div>
            </div>

            {/* Filter Panel */}
            {showFilters && (
                <div className="bg-surface glass-panel p-6 rounded-2xl border border-border animate-in slide-in-from-top-2 duration-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {/* Plan Filter */}
                        <div className="flex items-center">
                            <label className="w-24 text-sm font-bold text-text-main">Plan</label>
                            <div className="flex-1">
                                <select className="w-full bg-background border border-border rounded px-3 py-2 text-text-muted focus:outline-none focus:border-primary appearance-none">
                                    <option>Choose</option>
                                    <option>10K Cypher Evaluation</option>
                                    <option>Test100k</option>
                                </select>
                            </div>
                        </div>

                        {/* User Filter */}
                        <div className="flex items-center">
                            <label className="w-24 text-sm font-bold text-text-main">User</label>
                            <div className="flex-1">
                                <select className="w-full bg-background border border-border rounded px-3 py-2 text-text-muted focus:outline-none focus:border-primary appearance-none">
                                    <option>Choose</option>
                                    <option>Mahdi</option>
                                    <option>John Doe</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors text-sm font-medium shadow-lg shadow-primary/20">
                            <Search className="w-4 h-4" />
                            Search
                        </button>
                        <button className="flex items-center gap-2 px-6 py-2 border border-border rounded text-text-main hover:bg-surface-lighter transition-colors text-sm font-medium">
                            <RefreshCw className="w-4 h-4" />
                            Reset
                        </button>
                    </div>
                </div>
            )}

            {/* Main Content Card */}
            <div className="glass-panel rounded-2xl overflow-hidden border border-border">

                {/* Tabs/Filter Bar */}
                <div className="border-b border-border bg-surface/50 px-6 py-3 flex items-center gap-6 text-sm">
                    <button
                        onClick={() => setActiveStatusTab('all')}
                        className={cn(
                            "font-medium pb-3 border-b-2 transition-colors uppercase tracking-wider text-xs",
                            activeStatusTab === 'all'
                                ? "text-primary border-primary font-bold"
                                : "text-text-muted border-transparent hover:text-text-main hover:border-text-muted"
                        )}
                    >
                        status
                    </button>
                    <button
                        onClick={() => setActiveStatusTab('cancelled')}
                        className={cn(
                            "font-medium pb-3 border-b-2 transition-colors",
                            activeStatusTab === 'cancelled'
                                ? "text-primary border-primary font-bold"
                                : "text-text-muted border-transparent hover:text-text-main hover:border-text-muted"
                        )}
                    >
                        Cancelled ({cancelledCount})
                    </button>
                    <button
                        onClick={() => setActiveStatusTab('error')}
                        className={cn(
                            "font-medium pb-3 border-b-2 transition-colors",
                            activeStatusTab === 'error'
                                ? "text-primary border-primary font-bold"
                                : "text-text-muted border-transparent hover:text-text-main hover:border-text-muted"
                        )}
                    >
                        Error ({errorCount})
                    </button>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-border bg-surface/30 text-text-muted text-xs uppercase tracking-wider">
                                <th className="p-4 w-12 text-center">
                                    <input
                                        type="checkbox"
                                        className="rounded border-border bg-background focus:ring-primary text-primary"
                                        checked={selectedRows.length === filteredChallenges.length && filteredChallenges.length > 0}
                                        onChange={handleSelectAll}
                                    />
                                </th>
                                <th className="p-4 font-medium">Id</th>
                                <th className="p-4 font-medium">User</th>
                                <th className="p-4 font-medium">Email</th>
                                <th className="p-4 font-medium">Plan</th>
                                <th className="p-4 font-medium">Phase</th>
                                <th className="p-4 font-medium">Status</th>
                                <th className="p-4 font-medium">Updated</th>
                                <th className="p-4 font-medium">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border text-sm">
                            {filteredChallenges.map((item) => (
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
                                    <td className="p-4 font-medium text-primary hover:underline cursor-pointer">{item.user}</td>
                                    <td className="p-4 text-text-muted">{item.email}</td>
                                    <td className="p-4 text-text-muted">{item.plan}</td>
                                    <td className="p-4 text-text-muted">Phase {item.phase}</td>
                                    <td className="p-4">
                                        <div className="flex items-center gap-2">
                                            {item.status === 'Error' ? (
                                                <div className="flex items-center gap-1 text-danger bg-danger/10 px-2 py-1 rounded text-xs border border-danger/20">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-danger"></span>
                                                    Error
                                                    <HelpCircle className="w-3 h-3 ml-1 opacity-70" />
                                                </div>
                                            ) : (
                                                <div className="flex items-center gap-1 text-text-muted bg-surface px-2 py-1 rounded text-xs border border-border">
                                                    <X className="w-3 h-3" />
                                                    Cancelled
                                                </div>
                                            )}
                                        </div>
                                    </td>
                                    <td className="p-4 text-text-muted">{item.updated}</td>
                                    <td className="p-4">
                                        <div className="flex flex-col gap-1 items-start">
                                            <div className="flex items-center gap-2 mb-1">
                                                <button
                                                    onClick={() => handleView(item)}
                                                    className="p-1 hover:text-primary transition-colors"
                                                    title="View"
                                                >
                                                    <Eye className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(item)}
                                                    className="p-1 hover:text-danger transition-colors"
                                                    title="Delete"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                            {item.status === 'Error' && (
                                                <div className="flex items-center gap-3 text-xs text-text-muted">
                                                    <button
                                                        onClick={() => handleCancelChallenge(item.id)}
                                                        className="hover:text-text-main flex items-center gap-1 transition-colors"
                                                    >
                                                        <X className="w-3 h-3" /> Cancel
                                                    </button>
                                                    <button
                                                        onClick={() => handleRetryChallenge(item.id)}
                                                        className="hover:text-primary flex items-center gap-1 transition-colors"
                                                    >
                                                        <RotateCcw className="w-3 h-3" /> Retry
                                                    </button>
                                                </div>
                                            )}
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
                        Showing <span className="font-medium text-text-main">1</span> to <span className="font-medium text-text-main">{challenges.length}</span> of <span className="font-medium text-text-main">{challenges.length}</span> entries
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

export default Challenges;
