import React, { useState } from 'react';
import {
    HelpCircle,
    RefreshCw,
    Search,
    Filter,
    Eye,
    ChevronLeft,
    ChevronRight,
    Download,
    Calendar,
    CreditCard,
    User,
    ArrowUpDown
} from 'lucide-react';
import { cn } from '../lib/utils'; // Fixed import path to match project structure

const PaymentTransactions = () => {
    const [showFilters, setShowFilters] = useState(false);
    const [filterStatus, setFilterStatus] = useState('');
    const [filterGateway, setFilterGateway] = useState('');
    const [filterType, setFilterType] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    // Generate Mock Data to simulate the dense table in screenshot
    const generateMockData = (count) => {
        const statuses = ['Paid', 'Pending', 'Failed', 'Refunded'];
        const gateways = ['CoinPayments', 'BTC Pay', 'Stripe', 'Sqala', 'CoinGate'];
        const types = ['Purchase', 'Upgrade', 'Reset'];

        return Array.from({ length: count }, (_, i) => ({
            id: 1000 + i,
            user: {
                name: `User ${i + 1}`,
                email: `user${i + 1}@example.com`,
                avatar: `https://i.pravatar.cc/150?u=${i}`
            },
            gateway: gateways[i % gateways.length],
            amount: (Math.random() * 500 + 50).toFixed(2),
            currency: 'USD',
            transactionId: `TXN-${Math.random().toString(36).substring(2, 10).toUpperCase()}`,
            status: statuses[i % statuses.length],
            type: types[i % types.length],
            created: '2025-08-16 09:46:24',
            updated: '2025-08-16 10:00:00',
        }));
    };

    const [transactions] = useState(generateMockData(20));
    const [selectedRows, setSelectedRows] = useState([]);

    // Filter logic
    const filteredTransactions = transactions.filter(transaction => {
        const matchesStatus = filterStatus === '' || transaction.status === filterStatus;
        const matchesGateway = filterGateway === '' || transaction.gateway === filterGateway;
        const matchesType = filterType === '' || transaction.type === filterType;
        const matchesSearch = searchQuery === '' ||
            transaction.user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            transaction.user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            transaction.transactionId.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesStatus && matchesGateway && matchesType && matchesSearch;
    });

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedRows(filteredTransactions.map(t => t.id));
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

    const handleResetFilters = () => {
        setFilterStatus('');
        setFilterGateway('');
        setFilterType('');
        setSearchQuery('');
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'Paid': return 'bg-success/20 text-success border-success/20';
            case 'Pending': return 'bg-warning/20 text-warning border-warning/20';
            case 'Failed': return 'bg-danger/20 text-danger border-danger/20';
            case 'Refunded': return 'bg-primary/20 text-primary border-primary/20';
            default: return 'bg-surface-lighter text-text-muted';
        }
    };

    return (
        <div className="space-y-6 animate-in fade-in zoom-in duration-300">

            {/* Header */}
            <div>
                <div className="flex items-center gap-2 mb-1">
                    <h1 className="text-2xl font-bold text-text-main">Payment Transactions</h1>
                    <span className="text-text-muted text-sm border-l border-border pl-2">Payment Transactions List</span>
                    <a href="#" className="text-primary text-xs flex items-center gap-1 hover:underline ml-2">
                        Need Help? <HelpCircle className="w-3 h-3" />
                    </a>
                </div>
            </div>

            {/* Toolbar & Filters */}
            <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => window.location.reload()}
                        className="flex items-center gap-2 px-4 py-2 bg-surface border border-border text-text-muted font-medium rounded-lg hover:bg-surface-lighter transition-colors text-sm"
                    >
                        <RefreshCw className="w-4 h-4" />
                        Refresh
                    </button>
                    <button
                        onClick={() => setShowFilters(!showFilters)}
                        className={cn(
                            "flex items-center gap-2 px-4 py-2 border font-medium rounded-lg transition-colors text-sm",
                            showFilters
                                ? "bg-primary text-white border-primary"
                                : "bg-surface border-border text-text-muted hover:bg-surface-lighter"
                        )}
                    >
                        <Filter className="w-4 h-4" />
                        Filters
                    </button>
                </div>

                <div className="flex items-center gap-2">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search transactions..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="bg-surface border border-border rounded-lg pl-9 pr-4 py-2 text-sm text-text-main focus:ring-1 focus:ring-primary focus:border-primary w-64"
                        />
                        <Search className="w-4 h-4 text-text-muted absolute left-3 top-2.5" />
                    </div>
                </div>
            </div>

            {/* Filter Panel */}
            {showFilters && (
                <div className="glass-panel border border-border rounded-lg p-4 animate-in slide-in-from-top-2 duration-200">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {/* Status Filter */}
                        <div>
                            <label className="block text-sm font-medium text-text-main mb-2">Status</label>
                            <select
                                value={filterStatus}
                                onChange={(e) => setFilterStatus(e.target.value)}
                                className="w-full bg-background border border-border rounded px-3 py-2 text-sm text-text-main focus:outline-none focus:border-primary"
                            >
                                <option value="">All Statuses</option>
                                <option value="Paid">Paid</option>
                                <option value="Pending">Pending</option>
                                <option value="Failed">Failed</option>
                                <option value="Refunded">Refunded</option>
                            </select>
                        </div>

                        {/* Gateway Filter */}
                        <div>
                            <label className="block text-sm font-medium text-text-main mb-2">Gateway</label>
                            <select
                                value={filterGateway}
                                onChange={(e) => setFilterGateway(e.target.value)}
                                className="w-full bg-background border border-border rounded px-3 py-2 text-sm text-text-main focus:outline-none focus:border-primary"
                            >
                                <option value="">All Gateways</option>
                                <option value="CoinPayments">CoinPayments</option>
                                <option value="BTC Pay">BTC Pay</option>
                                <option value="Stripe">Stripe</option>
                                <option value="Sqala">Sqala</option>
                                <option value="CoinGate">CoinGate</option>
                            </select>
                        </div>

                        {/* Type Filter */}
                        <div>
                            <label className="block text-sm font-medium text-text-main mb-2">Type</label>
                            <select
                                value={filterType}
                                onChange={(e) => setFilterType(e.target.value)}
                                className="w-full bg-background border border-border rounded px-3 py-2 text-sm text-text-main focus:outline-none focus:border-primary"
                            >
                                <option value="">All Types</option>
                                <option value="Purchase">Purchase</option>
                                <option value="Upgrade">Upgrade</option>
                                <option value="Reset">Reset</option>
                            </select>
                        </div>

                        {/* Reset Button */}
                        <div className="flex items-end">
                            <button
                                onClick={handleResetFilters}
                                className="w-full px-4 py-2 bg-surface border border-border text-text-main rounded hover:bg-surface-lighter transition-colors text-sm font-medium"
                            >
                                Reset Filters
                            </button>
                        </div>
                    </div>
                </div>
            )}

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
                                        checked={transactions.length > 0 && selectedRows.length === transactions.length}
                                        onChange={handleSelectAll}
                                    />
                                </th>
                                <th className="p-4 font-medium whitespace-nowrap">Id</th>
                                <th className="p-4 font-medium whitespace-nowrap">User</th>
                                <th className="p-4 font-medium whitespace-nowrap">Gateway</th>
                                <th className="p-4 font-medium whitespace-nowrap">Amount</th>
                                <th className="p-4 font-medium whitespace-nowrap">Transaction Id</th>
                                <th className="p-4 font-medium whitespace-nowrap">Type</th>
                                <th className="p-4 font-medium whitespace-nowrap text-center">Status</th>
                                <th className="p-4 font-medium whitespace-nowrap">Created At</th>
                                <th className="p-4 font-medium whitespace-nowrap">Updated At</th>
                                <th className="p-4 font-medium whitespace-nowrap text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border text-xs">
                            {filteredTransactions.map((item) => (
                                <tr key={item.id} className="group hover:bg-surface/40 transition-colors">
                                    <td className="p-4 text-center">
                                        <input
                                            type="checkbox"
                                            className="rounded border-border bg-background focus:ring-primary text-primary"
                                            checked={selectedRows.includes(item.id)}
                                            onChange={() => handleSelectRow(item.id)}
                                        />
                                    </td>
                                    <td className="p-4 text-text-muted font-mono">{item.id}</td>
                                    <td className="p-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-surface-lighter overflow-hidden border border-border">
                                                <img src={item.user.avatar} alt="avatar" className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <div className="font-medium text-text-main">{item.user.name}</div>
                                                <div className="text-[10px] text-text-muted">{item.user.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4 text-text-main font-medium">
                                        <div className="flex items-center gap-2">
                                            <CreditCard className="w-3 h-3 text-text-muted" />
                                            {item.gateway}
                                        </div>
                                    </td>
                                    <td className="p-4 font-medium text-text-main">
                                        {item.amount} <span className="text-text-muted text-[10px]">{item.currency}</span>
                                    </td>
                                    <td className="p-4 text-text-muted font-mono text-[10px]">{item.transactionId}</td>
                                    <td className="p-4 text-text-muted">{item.type}</td>
                                    <td className="p-4 text-center">
                                        <span className={cn("px-2 py-1 rounded text-[10px] font-medium border", getStatusColor(item.status))}>
                                            {item.status.toUpperCase()}
                                        </span>
                                    </td>
                                    <td className="p-4 text-text-muted whitespace-nowrap">{item.created}</td>
                                    <td className="p-4 text-text-muted whitespace-nowrap">{item.updated}</td>
                                    <td className="p-4 text-center">
                                        <button className="text-text-muted hover:text-primary transition-colors p-1 rounded-md hover:bg-surface-lighter">
                                            <Eye className="w-4 h-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Footer / Pagination */}
                <div className="p-4 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-muted">
                    <div>
                        Showing <span className="font-medium text-text-main">1</span> to <span className="font-medium text-text-main">{filteredTransactions.length}</span> of <span className="font-medium text-text-main">{filteredTransactions.length}</span> entries
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

export default PaymentTransactions;
