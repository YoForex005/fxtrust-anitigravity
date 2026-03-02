import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Plus,
    Search,
    Eye,
    Pencil,
    Trash2,
    HelpCircle,
    ChevronLeft,
    ChevronRight,
    ChevronsRight
} from 'lucide-react';
import { cn } from '../lib/utils';

const ContestPrograms = () => {
    const navigate = useNavigate();
    const [selectedRows, setSelectedRows] = useState([]);

    // Convert to state so we can delete items
    const [contests, setContests] = useState([
        {
            id: 12,
            title: 'asff',
            price: '$0',
            public: true,
            conditions: 0
        },
        {
            id: 14,
            title: 'sfhdgththjtyrtjhrj',
            price: '$450',
            public: true,
            conditions: 0
        },
    ]);

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedRows(contests.map(c => c.id));
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

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this contest program?')) {
            setContests(contests.filter(c => c.id !== id));
            setSelectedRows(selectedRows.filter(rowId => rowId !== id));
        }
    };

    const togglePublic = (id) => {
        setContests(contests.map(c =>
            c.id === id ? { ...c, public: !c.public } : c
        ));
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

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <div className="flex items-center gap-2">
                        <h1 className="text-2xl font-bold text-text-main">Contest Programs</h1>
                        <span className="text-text-muted text-sm border-l border-border pl-2">Contest Programs and Conditions</span>
                        <a href="#" className="text-primary text-xs flex items-center gap-1 hover:underline ml-2">
                            Need Help? <HelpCircle className="w-3 h-3" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Toolbar */}
            <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full bg-surface border border-border rounded-full pl-10 pr-4 py-2 text-sm text-text-main focus:outline-none focus:border-primary transition-colors"
                    />
                </div>

                <div className="flex items-center gap-2">
                    <button
                        onClick={() => navigate('/contests/new')}
                        className="flex items-center gap-2 px-4 py-2 bg-surface border border-primary/30 text-primary font-bold rounded-lg hover:bg-primary/10 transition-colors text-sm"
                    >
                        <Plus className="w-4 h-4" />
                        New
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
                                        checked={selectedRows.length === contests.length && contests.length > 0}
                                        onChange={handleSelectAll}
                                    />
                                </th>
                                <th className="p-4 font-medium">Id</th>
                                <th className="p-4 font-medium">Title</th>
                                <th className="p-4 font-medium">Price</th>
                                <th className="p-4 font-medium">Public?</th>
                                <th className="p-4 font-medium">Conditions</th>
                                <th className="p-4 font-medium text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border text-sm">
                            {contests.map((item) => (
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
                                    <td className="p-4 text-text-main">{item.price}</td>

                                    {/* Public Toggle */}
                                    <td className="p-4">
                                        <ToggleSwitch checked={item.public} onChange={() => togglePublic(item.id)} />
                                    </td>

                                    {/* Conditions Count */}
                                    <td className="p-4">
                                        <div className="flex items-center gap-1 text-secondary font-medium">
                                            <ChevronsRight className="w-3 h-3" />
                                            {item.conditions}
                                        </div>
                                    </td>

                                    <td className="p-4 text-center">
                                        <div className="flex items-center justify-center gap-3 text-text-muted">
                                            <button
                                                onClick={() => navigate(`/contests/${item.id}`)}
                                                className="hover:text-primary transition-colors"
                                                title="View"
                                            >
                                                <Eye className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => navigate(`/contests/new?id=${item.id}`)} // Reusing create as edit placeholder
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
                        Showing <span className="font-medium text-text-main">1</span> to <span className="font-medium text-text-main">2</span> of <span className="font-medium text-text-main">2</span> entries
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

export default ContestPrograms;
