import React, { useState } from 'react';
import {
    HelpCircle,
    Plus,
    Search,
    Eye,
    Pencil,
    Trash2,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../lib/utils';

const AccountsLeaderboard = () => {
    const navigate = useNavigate();
    const [selectedRows, setSelectedRows] = useState([]);

    const [searchTerm, setSearchTerm] = useState('');
    const [leaderboards, setLeaderboards] = useState([
        {
            id: 8,
            title: 'lb',
            link: 'https://app.funded.dev4traders.com/leaderboard/f27f3f5f-cb3e-4a49-b983-adcb294e9c87',
            maxLeaders: 10,
            isPublic: true,
            sizes: []
        },
        {
            id: 13,
            title: 'demo',
            link: 'https://app.funded.dev4traders.com/leaderboard/88c02121-17e8-4e5a-8455-2aeb1e207029',
            maxLeaders: 2,
            isPublic: true,
            sizes: ['Deposit - 1000.00; Leverage - 100']
        },
        {
            id: 15,
            title: 'Top Funded Traders of March',
            link: 'https://app.funded.dev4traders.com/leaderboard/91151091-45f5-4e43-bdcc-47c8810ddb5c',
            maxLeaders: 10,
            isPublic: true,
            sizes: []
        },
    ]);

    const handleTogglePublic = (id) => {
        setLeaderboards(prev => prev.map(item =>
            item.id === id ? { ...item, isPublic: !item.isPublic } : item
        ));
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this leaderboard?')) {
            setLeaderboards(prev => prev.filter(item => item.id !== id));
        }
    };

    const filteredLeaderboards = leaderboards.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.link.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedRows(leaderboards.map(l => l.id));
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
            <div>
                <div className="flex items-center gap-2 mb-6">
                    <h1 className="text-2xl font-bold text-text-main">Leaderboards</h1>
                    <span className="text-text-muted text-sm border-l border-border pl-2">Leaderboards and Account Sizes</span>
                    <a href="#" className="text-primary text-xs flex items-center gap-1 hover:underline ml-2">
                        Need Help? <HelpCircle className="w-3 h-3" />
                    </a>
                </div>
            </div>

            {/* Toolbar */}
            <div className="flex justify-between items-center">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="bg-surface border border-border rounded-full pl-10 pr-4 py-2 text-sm text-text-main focus:outline-none focus:border-primary w-64"
                    />
                </div>

                <button
                    onClick={() => navigate('/leaderboard-setups/new?type=accounts')}
                    className="flex items-center gap-2 px-4 py-2 bg-[#5d6bb3] text-white font-bold rounded-lg hover:bg-[#4d5999] transition-colors text-sm shadow-lg shadow-primary/20"
                >
                    <Plus className="w-4 h-4" />
                    New
                </button>
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
                                        checked={selectedRows.length === leaderboards.length && leaderboards.length > 0}
                                        onChange={handleSelectAll}
                                    />
                                </th>
                                <th className="p-4 font-medium">Id</th>
                                <th className="p-4 font-medium">Title</th>
                                <th className="p-4 font-medium w-1/3">
                                    <div className="flex items-center gap-1">
                                        Widget Link
                                        <HelpCircle className="w-3 h-3 text-text-muted" />
                                    </div>
                                </th>
                                <th className="p-4 font-medium">Max Leaders</th>
                                <th className="p-4 font-medium">Is Public</th>
                                <th className="p-4 font-medium">Sizes</th>
                                <th className="p-4 font-medium text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border text-sm">
                            {filteredLeaderboards.map((item) => (
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
                                    <td className="p-4">
                                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline decoration-dotted truncate block max-w-xs">
                                            {item.link}
                                        </a>
                                    </td>
                                    <td className="p-4 text-text-main">{item.maxLeaders}</td>
                                    <td className="p-4">
                                        <ToggleSwitch checked={item.isPublic} onChange={() => handleTogglePublic(item.id)} />
                                    </td>
                                    <td className="p-4">
                                        <div className="flex flex-wrap gap-1">
                                            {item.sizes.map((size, idx) => (
                                                <span key={idx} className="bg-primary text-white text-[10px] px-3 py-2 rounded-lg font-medium shadow-lg shadow-primary/20">
                                                    {size}
                                                </span>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="p-4 text-center">
                                        <div className="flex items-center justify-center gap-2 text-text-muted">
                                            <button className="hover:text-primary transition-colors border border-border p-1.5 rounded hover:bg-surface bg-background" title="View">
                                                <Eye className="w-3.5 h-3.5" />
                                            </button>
                                            <button
                                                onClick={() => navigate(`/leaderboard-setups/${item.id}/edit?type=accounts`)}
                                                className="hover:text-primary transition-colors p-1.5"
                                                title="Edit"
                                            >
                                                <Pencil className="w-3.5 h-3.5" />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(item.id)}
                                                className="hover:text-danger transition-colors p-1.5"
                                                title="Delete"
                                            >
                                                <Trash2 className="w-3.5 h-3.5" />
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
                        Showing <span className="font-medium text-text-main">1</span> to <span className="font-medium text-text-main">{leaderboards.length}</span> of <span className="font-medium text-text-main">{leaderboards.length}</span> entries
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

export default AccountsLeaderboard;
