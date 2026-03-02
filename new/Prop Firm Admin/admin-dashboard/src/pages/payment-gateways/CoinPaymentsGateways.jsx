import React, { useState } from 'react';
import {
    HelpCircle,
    Plus,
    RefreshCw,
    Pencil,
    Trash2,
    ChevronLeft,
    ChevronRight,
    Wallet
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../lib/utils';

const CoinPaymentsGateways = () => {
    const navigate = useNavigate();
    // Mock Data based on screenshot
    const initialGateWays = [
        {
            id: 1,
            name: 'Coinpayments',
            enabled: true,
            created: '2 years ago',
            createdAt: '2023-09-26 20:34:11',
            publicKey: 'f32284ccfb71b409b6d32fe196b53de10ed9514bd006da3d28fca41b86fb1145',
            privateKey: 'b55d28a5c4d3f6e1a9c8b7v65d4e3f2g1h0j9k8l7m6n5b4v3c2x1z'
        },
        {
            id: 2,
            name: 'Ajay morris',
            enabled: true,
            created: '5 months ago',
            createdAt: '2025-07-20 19:23:07',
            publicKey: '0x3ehbu66jnjbgj7646yb',
            privateKey: '0x3c2v1b5n6m7j8k9l0p-oq9w8e7r6t5y4u3i2o1p'
        }
    ];

    const [gateWays, setGateWays] = useState(initialGateWays);
    const [isEnablePay, setIsEnablePay] = useState(true);
    const [selectedRows, setSelectedRows] = useState([]);

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedRows(gateWays.map(w => w.id));
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

    const handleToggleWay = (id) => {
        setGateWays(gateWays.map(way =>
            way.id === id ? { ...way, enabled: !way.enabled } : way
        ));
    };

    // Toggle Switch Component
    const ToggleSwitch = ({ checked, onChange }) => (
        <div
            className={cn(
                "w-11 h-6 rounded-full relative cursor-pointer transition-colors duration-200 ease-in-out",
                checked ? "bg-[#5B7DBD]" : "bg-slate-300 dark:bg-slate-700 shadow-inner"
            )}
            onClick={() => onChange(!checked)}
        >
            <div
                className={cn(
                    "absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-200 ease-in-out",
                    checked ? "translate-x-5" : "translate-x-0"
                )}
            />
        </div>
    );

    return (
        <div className="space-y-6 animate-in fade-in zoom-in duration-300">

            {/* Header */}
            <div>
                <div className="flex items-center gap-2 mb-1">
                    <h1 className="text-2xl font-bold text-text-main">CoinPayments Payment Gateways</h1>
                    <span className="text-text-muted text-sm border-l border-border pl-2">CoinPayments Payment Gateways</span>
                    <a href="#" className="text-primary text-xs flex items-center gap-1 hover:underline ml-2">
                        Need Help? <HelpCircle className="w-3 h-3" />
                    </a>
                </div>
            </div>

            {/* Toggle Options */}
            <div className="glass-panel p-6 rounded-2xl border border-border">
                <div className="flex items-center justify-between">
                    <div className="space-y-1">
                        <h3 className="text-sm font-bold text-text-main">Toggle Options</h3>
                        <p className="text-xs text-text-muted">Quick access to gateway settings</p>
                    </div>
                </div>
                <div className="mt-6 flex items-center gap-8">
                    <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-text-main">Enable CoinPayments</span>
                        <ToggleSwitch checked={isEnablePay} onChange={setIsEnablePay} />
                    </div>
                </div>
            </div>

            {/* Toolbar */}
            <div className="flex justify-between items-center">
                <button
                    onClick={() => window.location.reload()}
                    className="flex items-center gap-2 px-4 py-2 bg-surface dark:bg-surface border border-border text-text-muted font-medium rounded-lg hover:bg-surface-lighter transition-colors text-sm"
                >
                    <RefreshCw className="w-4 h-4" />
                    Refresh
                </button>

                <button
                    onClick={() => navigate('/payment-gateways/coinpayments/new')}
                    className="flex items-center gap-2 px-4 py-2 bg-[#5B7DBD] text-white font-bold rounded-lg hover:bg-[#4d5999] transition-colors text-sm shadow-lg shadow-primary/20"
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
                                        checked={gateWays.length > 0 && selectedRows.length === gateWays.length}
                                        onChange={handleSelectAll}
                                    />
                                </th>
                                <th className="p-4 font-medium whitespace-nowrap">Icon</th>
                                <th className="p-4 font-medium whitespace-nowrap">Name</th>
                                <th className="p-4 font-medium whitespace-nowrap">Enabled</th>
                                <th className="p-4 font-medium whitespace-nowrap">Created</th>
                                <th className="p-4 font-medium whitespace-nowrap">Created At</th>
                                <th className="p-4 font-medium whitespace-nowrap">Public Key</th>
                                <th className="p-4 font-medium whitespace-nowrap">Private Key</th>
                                <th className="p-4 font-medium whitespace-nowrap text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border text-sm">
                            {gateWays.map((item) => (
                                <tr key={item.id} className="group hover:bg-surface/40 transition-colors">
                                    <td className="p-4 text-center">
                                        <input
                                            type="checkbox"
                                            className="rounded border-border bg-background focus:ring-primary text-primary"
                                            checked={selectedRows.includes(item.id)}
                                            onChange={() => handleSelectRow(item.id)}
                                        />
                                    </td>
                                    <td className="p-4">
                                        <div className="w-24 h-24 bg-surface-lighter/50 rounded-lg flex items-center justify-center p-2">
                                            {/* Simulated CoinPayment Wallet Icon */}
                                            <div className="w-full h-full relative">
                                                <Wallet className="w-full h-full text-blue-500 transform -rotate-12 opactiy-80" strokeWidth={1.5} />
                                                <div className="absolute top-2 right-2 w-4 h-4 bg-blue-400 rounded-sm opacity-50"></div>
                                                <div className="absolute bottom-4 left-4 w-2 h-2 bg-white rounded-full"></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4 text-text-main font-medium">{item.name}</td>
                                    <td className="p-4">
                                        <ToggleSwitch checked={item.enabled} onChange={() => handleToggleWay(item.id)} />
                                    </td>
                                    <td className="p-4 text-text-muted">{item.created}</td>
                                    <td className="p-4 text-text-muted break-words w-24">{item.createdAt.split(' ').join(' ')}</td>
                                    <td className="p-4 text-text-muted truncate max-w-[200px] font-mono text-xs">{item.publicKey}</td>
                                    <td className="p-4 text-text-muted font-mono text-xs">{item.privateKey}</td>
                                    <td className="p-4 text-center">
                                        <div className="flex items-center justify-center gap-2 text-text-muted">
                                            <button className="hover:text-primary transition-colors" title="Edit">
                                                <Pencil className="w-3 h-3" />
                                            </button>
                                            <button className="hover:text-danger transition-colors" title="Delete">
                                                <Trash2 className="w-3 h-3" />
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
                        Showing <span className="font-medium text-text-main">1</span> to <span className="font-medium text-text-main">{gateWays.length}</span> of <span className="font-medium text-text-main">{gateWays.length}</span> entries
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

export default CoinPaymentsGateways;
