import React, { useState, useRef, useEffect } from 'react';
import {
    RefreshCw,
    Filter,
    Plus,
    Eye,
    Pencil,
    Trash2,
    Search,
    Download,
    LayoutGrid,
    HelpCircle,
    Copy,
    ChevronLeft,
    ChevronRight,
    ChevronsRight,
    ChevronDown
} from 'lucide-react';
import { cn } from '../lib/utils';
import { useNavigate } from 'react-router-dom';
import NewUserModal from '../components/modals/NewUserModal';
import { fetchUsers, deleteUser } from '../services/api';

const Users = () => {
    const navigate = useNavigate();
    const [selectedRows, setSelectedRows] = useState([]);
    const [showFilters, setShowFilters] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterEmail, setFilterEmail] = useState('');
    const [filterName, setFilterName] = useState('');
    const [filterTags, setFilterTags] = useState('');
    const [isNewUserModalOpen, setIsNewUserModalOpen] = useState(false);
    const [showExportDropdown, setShowExportDropdown] = useState(false);
    const exportDropdownRef = useRef(null);
    const [showColumnsDropdown, setShowColumnsDropdown] = useState(false);
    const columnsDropdownRef = useRef(null);
    const [visibleColumns, setVisibleColumns] = useState({
        all: true,
        id: true,
        login: true,
        name: true,
        email: true,
        accounts: true,
        maxChallenges: true,
        imp: true,
        tags: true,
        createdAt: true,
        updatedAt: false
    });

    // Close export dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (exportDropdownRef.current && !exportDropdownRef.current.contains(event.target)) {
                setShowExportDropdown(false);
            }
            if (columnsDropdownRef.current && !columnsDropdownRef.current.contains(event.target)) {
                setShowColumnsDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const loadUsers = async () => {
            try {
                const data = await fetchUsers();
                setUsers(data);
            } catch (error) {
                console.error("Failed to load users:", error);
                // Fallback or alert
            }
        };
        loadUsers();
    }, []);

    // Mock Data based on screenshot (REMOVED) -> uses 'users' state now

    // Filter users based on all criteria
    const filteredUsers = users.filter(user => {
        // Main search bar (name OR email)
        const matchesSearch = searchQuery === '' ||
            user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.email.toLowerCase().includes(searchQuery.toLowerCase());

        // Filter panel - Email
        const matchesFilterEmail = filterEmail === '' ||
            user.email.toLowerCase().includes(filterEmail.toLowerCase());

        // Filter panel - Name
        const matchesFilterName = filterName === '' ||
            user.name.toLowerCase().includes(filterName.toLowerCase());

        // Filter panel - Tags
        const matchesFilterTags = filterTags === '' ||
            (filterTags === 'red' && user.tags === 'red') ||
            (filterTags === 'none' && user.tags === null);

        return matchesSearch && matchesFilterEmail && matchesFilterName && matchesFilterTags;
    });

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedRows(filteredUsers.map(u => u.id));
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

    const handleRefresh = () => {
        setSearchQuery('');
        setFilterEmail('');
        setFilterName('');
        setFilterTags('');
        setShowFilters(false);
        window.location.reload();
    };

    const handleResetFilters = () => {
        setFilterEmail('');
        setFilterName('');
        setFilterTags('');
    };

    const handleAction = async (action, id) => {
        if (action === 'view') {
            navigate(`/users/${id}`);
        } else if (action === 'edit') {
            navigate(`/users/${id}/edit`);
        } else if (action === 'delete') {
            if (window.confirm('Are you sure you want to delete this user? This action cannot be undone.')) {
                try {
                    await deleteUser(id);
                    setUsers(users.filter(u => u.id !== id));
                    // Also remove from selected if present
                    setSelectedRows(prev => prev.filter(rowId => rowId !== id));
                } catch (error) {
                    alert('Failed to delete user: ' + error.message);
                }
            }
        }
    };

    const handleCopyEmail = (email) => {
        navigator.clipboard.writeText(email);
        // Optional: you could add a toast notification here
        alert(`Email copied: ${email}`);
    };

    // Export functionality
    const exportToCSV = (data, filename) => {
        if (data.length === 0) {
            alert('No data to export');
            return;
        }

        // CSV Headers
        const headers = ['ID', 'Login', 'Name', 'Email', 'Accounts (Cur)', 'Accounts (Max)', 'Challenges (Cur)', 'Challenges (Max)', 'Imp', 'Tags'];

        // Convert data to CSV rows
        const csvRows = [
            headers.join(','),
            ...data.map(user => [
                user.id,
                user.login,
                user.name,
                user.email,
                user.accounts.cur,
                user.accounts.max,
                user.challenges.cur,
                user.challenges.max,
                user.imp,
                user.tags || ''
            ].join(','))
        ];

        // Create CSV string
        const csvString = csvRows.join('\n');

        // Create blob and download
        const blob = new Blob([csvString], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    };

    const handleExportAll = () => {
        exportToCSV(users, 'users_all.csv');
        setShowExportDropdown(false);
    };

    const handleExportCurrentPage = () => {
        exportToCSV(filteredUsers, 'users_current_page.csv');
        setShowExportDropdown(false);
    };

    const handleExportSelectedRows = () => {
        const selectedUsersData = users.filter(user => selectedRows.includes(user.id));
        if (selectedUsersData.length === 0) {
            alert('No rows selected. Please select rows to export.');
            setShowExportDropdown(false);
            return;
        }
        exportToCSV(selectedUsersData, 'users_selected.csv');
        setShowExportDropdown(false);
    };

    return (
        <div className="space-y-6 animate-in fade-in zoom-in duration-300">

            <NewUserModal isOpen={isNewUserModalOpen} onClose={() => setIsNewUserModalOpen(false)} />

            {/* Header */}
            <div>
                <div className="flex items-center gap-2 mb-6">
                    <h1 className="text-2xl font-bold text-text-main">Users</h1>
                    <span className="text-text-muted text-sm border-l border-border pl-2">Manage Users</span>
                    <a href="#" className="text-primary text-xs flex items-center gap-1 hover:underline ml-2">
                        Need Help? <HelpCircle className="w-3 h-3" />
                    </a>
                </div>

                {/* Stat Cards */}
                <div className="flex gap-4 mb-6">
                    <div className="w-48 h-24 rounded-lg bg-[#4A86C6] relative overflow-hidden p-4 shadow-lg text-white">
                        <div className="absolute right-0 bottom-0 opacity-20 transform translate-y-1/2 translate-x-1/4">
                            <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor">
                                <path d="M0 100 C 20 0 50 0 100 100 Z" />
                            </svg>
                        </div>
                        <div className="text-3xl font-bold">3</div>
                        <div className="text-sm opacity-90 font-medium mt-1">Total</div>
                    </div>
                    <div className="w-48 h-24 rounded-lg bg-[#4A86C6] relative overflow-hidden p-4 shadow-lg text-white">
                        <div className="absolute right-0 bottom-0 opacity-20 transform translate-y-1/2 translate-x-1/4">
                            <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor">
                                <path d="M0 100 C 20 0 50 0 100 100 Z" />
                            </svg>
                        </div>
                        <div className="text-3xl font-bold">1</div>
                        <div className="text-sm opacity-90 font-medium mt-1">Online</div>
                    </div>
                </div>

                {/* Toolbar */}
                <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
                    <div className="flex items-center gap-2 flex-1">
                        <button
                            onClick={handleRefresh}
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
                                    : "bg-surface border-border text-text-muted hover:text-text-main"
                            )}
                        >
                            <Filter className="w-4 h-4" />
                            Filter
                        </button>
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
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="relative" ref={columnsDropdownRef}>
                            <button
                                onClick={() => setShowColumnsDropdown(!showColumnsDropdown)}
                                className="flex items-center gap-1 p-2 bg-surface border border-border rounded-lg text-text-muted hover:text-text-main transition-colors"
                            >
                                <LayoutGrid className="w-4 h-4" />
                                <ChevronDown className="w-3 h-3" />
                            </button>

                            {/* Columns Visibility Dropdown */}
                            {showColumnsDropdown && (
                                <div className="absolute right-0 mt-2 w-56 bg-surface border border-border rounded-lg shadow-2xl py-2 animate-in fade-in slide-in-from-top-2 duration-200 z-10">
                                    <button
                                        onClick={() => {
                                            const newValue = !visibleColumns.all;
                                            setVisibleColumns({
                                                all: newValue,
                                                id: newValue,
                                                login: newValue,
                                                name: newValue,
                                                email: newValue,
                                                accounts: newValue,
                                                maxChallenges: newValue,
                                                imp: newValue,
                                                tags: newValue,
                                                createdAt: newValue,
                                                updatedAt: newValue
                                            });
                                        }}
                                        className="w-full flex items-center gap-2 px-4 py-2 text-sm text-text-main hover:bg-surface-lighter transition-colors"
                                    >
                                        <input
                                            type="checkbox"
                                            checked={visibleColumns.all}
                                            onChange={() => { }}
                                            className="rounded border-border bg-background focus:ring-primary text-primary"
                                        />
                                        All
                                    </button>
                                    <button
                                        onClick={() => setVisibleColumns({ ...visibleColumns, id: !visibleColumns.id })}
                                        className="w-full flex items-center gap-2 px-4 py-2 text-sm text-text-main hover:bg-surface-lighter transition-colors"
                                    >
                                        <input
                                            type="checkbox"
                                            checked={visibleColumns.id}
                                            onChange={() => { }}
                                            className="rounded border-border bg-background focus:ring-primary text-primary"
                                        />
                                        id
                                    </button>
                                    <button
                                        onClick={() => setVisibleColumns({ ...visibleColumns, login: !visibleColumns.login })}
                                        className="w-full flex items-center gap-2 px-4 py-2 text-sm text-text-main hover:bg-surface-lighter transition-colors"
                                    >
                                        <input
                                            type="checkbox"
                                            checked={visibleColumns.login}
                                            onChange={() => { }}
                                            className="rounded border-border bg-background focus:ring-primary text-primary"
                                        />
                                        Login
                                    </button>
                                    <button
                                        onClick={() => setVisibleColumns({ ...visibleColumns, name: !visibleColumns.name })}
                                        className="w-full flex items-center gap-2 px-4 py-2 text-sm text-text-main hover:bg-surface-lighter transition-colors"
                                    >
                                        <input
                                            type="checkbox"
                                            checked={visibleColumns.name}
                                            onChange={() => { }}
                                            className="rounded border-border bg-background focus:ring-primary text-primary"
                                        />
                                        Name
                                    </button>
                                    <button
                                        onClick={() => setVisibleColumns({ ...visibleColumns, email: !visibleColumns.email })}
                                        className="w-full flex items-center gap-2 px-4 py-2 text-sm text-text-main hover:bg-surface-lighter transition-colors"
                                    >
                                        <input
                                            type="checkbox"
                                            checked={visibleColumns.email}
                                            onChange={() => { }}
                                            className="rounded border-border bg-background focus:ring-primary text-primary"
                                        />
                                        email
                                    </button>
                                    <button
                                        onClick={() => setVisibleColumns({ ...visibleColumns, accounts: !visibleColumns.accounts })}
                                        className="w-full flex items-center gap-2 px-4 py-2 text-sm text-text-main hover:bg-surface-lighter transition-colors"
                                    >
                                        <input
                                            type="checkbox"
                                            checked={visibleColumns.accounts}
                                            onChange={() => { }}
                                            className="rounded border-border bg-background focus:ring-primary text-primary"
                                        />
                                        Accounts
                                    </button>
                                    <button
                                        onClick={() => setVisibleColumns({ ...visibleColumns, maxChallenges: !visibleColumns.maxChallenges })}
                                        className="w-full flex items-center gap-2 px-4 py-2 text-sm text-text-main hover:bg-surface-lighter transition-colors"
                                    >
                                        <input
                                            type="checkbox"
                                            checked={visibleColumns.maxChallenges}
                                            onChange={() => { }}
                                            className="rounded border-border bg-background focus:ring-primary text-primary"
                                        />
                                        Max Challenges
                                    </button>
                                    <button
                                        onClick={() => setVisibleColumns({ ...visibleColumns, imp: !visibleColumns.imp })}
                                        className="w-full flex items-center gap-2 px-4 py-2 text-sm text-text-main hover:bg-surface-lighter transition-colors"
                                    >
                                        <input
                                            type="checkbox"
                                            checked={visibleColumns.imp}
                                            onChange={() => { }}
                                            className="rounded border-border bg-background focus:ring-primary text-primary"
                                        />
                                        Imp
                                    </button>
                                    <button
                                        onClick={() => setVisibleColumns({ ...visibleColumns, tags: !visibleColumns.tags })}
                                        className="w-full flex items-center gap-2 px-4 py-2 text-sm text-text-main hover:bg-surface-lighter transition-colors"
                                    >
                                        <input
                                            type="checkbox"
                                            checked={visibleColumns.tags}
                                            onChange={() => { }}
                                            className="rounded border-border bg-background focus:ring-primary text-primary"
                                        />
                                        Tags
                                    </button>
                                    <button
                                        onClick={() => setVisibleColumns({ ...visibleColumns, createdAt: !visibleColumns.createdAt })}
                                        className="w-full flex items-center gap-2 px-4 py-2 text-sm text-text-main hover:bg-surface-lighter transition-colors"
                                    >
                                        <input
                                            type="checkbox"
                                            checked={visibleColumns.createdAt}
                                            onChange={() => { }}
                                            className="rounded border-border bg-background focus:ring-primary text-primary"
                                        />
                                        Created At
                                    </button>
                                    <button
                                        onClick={() => setVisibleColumns({ ...visibleColumns, updatedAt: !visibleColumns.updatedAt })}
                                        className="w-full flex items-center gap-2 px-4 py-2 text-sm text-text-main hover:bg-surface-lighter transition-colors"
                                    >
                                        <input
                                            type="checkbox"
                                            checked={visibleColumns.updatedAt}
                                            onChange={() => { }}
                                            className="rounded border-border bg-background focus:ring-primary text-primary"
                                        />
                                        Updated At
                                    </button>
                                </div>
                            )}
                        </div>
                        <button
                            onClick={() => setIsNewUserModalOpen(true)}
                            className="flex items-center gap-2 px-4 py-2 bg-surface text-primary border border-primary/30 font-bold rounded-lg hover:bg-primary/10 transition-colors text-sm"
                        >
                            <Plus className="w-4 h-4" />
                            New
                        </button>
                        <div className="relative" ref={exportDropdownRef}>
                            <button
                                onClick={() => setShowExportDropdown(!showExportDropdown)}
                                className="flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-lg text-text-muted hover:text-text-main transition-colors text-sm font-medium"
                            >
                                <Download className="w-4 h-4" />
                                Export
                                <ChevronDown className="w-4 h-4" />
                            </button>

                            {/* Export Dropdown */}
                            {showExportDropdown && (
                                <div className="absolute right-0 mt-2 w-48 bg-surface border border-border rounded-lg shadow-2xl py-2 animate-in fade-in slide-in-from-top-2 duration-200 z-10">
                                    <button
                                        onClick={handleExportAll}
                                        className="w-full text-left px-4 py-2 text-sm text-text-main hover:bg-surface-lighter transition-colors"
                                    >
                                        All
                                    </button>
                                    <button
                                        onClick={handleExportCurrentPage}
                                        className="w-full text-left px-4 py-2 text-sm text-text-main hover:bg-surface-lighter transition-colors"
                                    >
                                        Current page
                                    </button>
                                    <button
                                        onClick={handleExportSelectedRows}
                                        className="w-full text-left px-4 py-2 text-sm text-text-main hover:bg-surface-lighter transition-colors"
                                    >
                                        Selected rows
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Filter Panel */}
                {showFilters && (
                    <div className="bg-surface glass-panel p-6 rounded-2xl border border-border mb-4 animate-in slide-in-from-top-2 duration-200">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                            {/* Email Filter */}
                            <div className="flex items-center">
                                <label className="w-20 text-sm font-bold text-text-main">Email</label>
                                <div className="flex-1">
                                    <input
                                        type="text"
                                        placeholder="email"
                                        value={filterEmail}
                                        onChange={(e) => setFilterEmail(e.target.value)}
                                        className="w-full bg-background border border-border rounded px-3 py-2 text-text-muted placeholder:text-text-muted focus:outline-none focus:border-primary"
                                    />
                                </div>
                            </div>

                            {/* Name Filter */}
                            <div className="flex items-center">
                                <label className="w-20 text-sm font-bold text-text-main">Name</label>
                                <div className="flex-1">
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        value={filterName}
                                        onChange={(e) => setFilterName(e.target.value)}
                                        className="w-full bg-background border border-border rounded px-3 py-2 text-text-muted placeholder:text-text-muted focus:outline-none focus:border-primary"
                                    />
                                </div>
                            </div>

                            {/* Tags Filter */}
                            <div className="flex items-center">
                                <label className="w-20 text-sm font-bold text-text-main">Tags</label>
                                <div className="flex-1">
                                    <select
                                        value={filterTags}
                                        onChange={(e) => setFilterTags(e.target.value)}
                                        className="w-full bg-background border border-border rounded px-3 py-2 text-text-muted focus:outline-none focus:border-primary appearance-none"
                                    >
                                        <option value="">Choose</option>
                                        <option value="red">Red</option>
                                        <option value="none">No Tags</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <button className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors text-sm font-medium shadow-lg shadow-primary/20">
                                <Search className="w-4 h-4" />
                                Search
                            </button>
                            <button
                                onClick={handleResetFilters}
                                className="flex items-center gap-2 px-6 py-2 border border-border rounded text-text-main hover:bg-surface-lighter transition-colors text-sm font-medium"
                            >
                                <RefreshCw className="w-4 h-4" />
                                Reset
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Main Content Card */}
            <div className="glass-panel rounded-2xl overflow-hidden border border-border">
                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-surface/50 text-text-muted text-xs font-medium border-b border-border">
                                <th className="p-3 w-10 text-center border-r border-border/50" rowSpan="2">
                                    <input
                                        type="checkbox"
                                        className="rounded border-border bg-background focus:ring-primary text-primary"
                                        checked={selectedRows.length === filteredUsers.length && filteredUsers.length > 0}
                                        onChange={handleSelectAll}
                                    />
                                </th>
                                <th className="p-3 border-r border-border/50" rowSpan="2">Id</th>
                                <th className="p-3 border-r border-border/50" rowSpan="2">Login</th>
                                <th className="p-3 border-r border-border/50" rowSpan="2">Name</th>
                                <th className="p-3 border-r border-border/50" rowSpan="2">Email</th>

                                {/* Grouped Headers */}
                                <th className="p-2 text-center border-r border-border/50 border-b border-border/50 bg-surface/70" colSpan="2">Accounts</th>
                                <th className="p-2 text-center border-r border-border/50 border-b border-border/50 bg-surface/70" colSpan="2">Max Challenges</th>

                                <th className="p-3 border-r border-border/50" rowSpan="2">Imp <HelpCircle className="w-3 h-3 inline ml-1" /></th>
                                <th className="p-3 border-r border-border/50" rowSpan="2">Tags</th>
                                <th className="p-3 text-center" rowSpan="2">Action</th>
                            </tr>
                            <tr className="bg-surface/50 text-text-muted text-xs font-medium border-b border-border">
                                <th className="p-2 text-center border-r border-border/50">Cur</th>
                                <th className="p-2 text-center border-r border-border/50">Max</th>
                                <th className="p-2 text-center border-r border-border/50">Cur</th>
                                <th className="p-2 text-center border-r border-border/50">Max Challenges</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border text-sm">
                            {filteredUsers.map((item) => (
                                <tr key={item.id} className="group hover:bg-surface/40 transition-colors">
                                    <td className="p-3 text-center border-r border-border/50">
                                        <input
                                            type="checkbox"
                                            className="rounded border-border bg-background focus:ring-primary text-primary"
                                            checked={selectedRows.includes(item.id)}
                                            onChange={() => handleSelectRow(item.id)}
                                        />
                                    </td>
                                    <td className="p-3 text-text-muted border-r border-border/50">{item.id}</td>
                                    <td className="p-3 text-text-muted border-r border-border/50">{item.login}</td>
                                    <td
                                        onClick={() => navigate(`/users/${item.id}`)}
                                        className="p-3 text-primary hover:underline cursor-pointer border-r border-border/50 text-secondary font-medium"
                                    >
                                        {item.name}
                                    </td>
                                    <td className="p-3 text-secondary border-r border-border/50">
                                        <div className="flex items-center gap-2">
                                            <Copy
                                                className="w-3 h-3 cursor-pointer hover:text-text-main transition-colors"
                                                onClick={() => handleCopyEmail(item.email)}
                                                title="Copy Email"
                                            />
                                            {item.email}
                                        </div>
                                    </td>

                                    {/* Accounts */}
                                    <td className="p-3 text-center border-r border-border/50">
                                        <div className="flex items-center justify-center gap-1 text-secondary font-medium">
                                            <ChevronsRight className="w-3 h-3" />
                                            {item.accounts?.cur || 0}
                                        </div>
                                    </td>
                                    <td className="p-3 text-center border-r border-border/50">
                                        {item.accounts?.max || 0}
                                    </td>

                                    {/* Challenges */}
                                    <td className="p-3 text-center border-r border-border/50">
                                        <div className="flex items-center justify-center gap-1 text-secondary font-medium">
                                            <ChevronsRight className="w-3 h-3" />
                                            {item.challenges?.cur || 0}
                                        </div>
                                    </td>
                                    <td className="p-3 text-center border-r border-border/50">
                                        {item.challenges?.max || 0}
                                    </td>

                                    <td className="p-3 text-secondary hover:underline cursor-pointer border-r border-border/50">{item.imp}</td>
                                    <td className="p-3 text-center border-r border-border/50">
                                        {item.tags === 'red' && (
                                            <div className="w-5 h-5 bg-danger rounded-sm mx-auto"></div>
                                        )}
                                    </td>

                                    <td className="p-3">
                                        <div className="flex items-center justify-center gap-2">
                                            <button
                                                onClick={() => handleAction('view', item.id)}
                                                className="p-1 text-primary hover:bg-primary/10 rounded"
                                                title="View"
                                            >
                                                <Eye className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => handleAction('edit', item.id)}
                                                className="p-1 text-secondary hover:bg-secondary/10 rounded"
                                                title="Edit"
                                            >
                                                <Pencil className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => handleAction('delete', item.id)}
                                                className="p-1 text-danger hover:bg-danger/10 rounded"
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
                        Showing <span className="font-medium text-text-main">1</span> to <span className="font-medium text-text-main">{filteredUsers.length}</span> of <span className="font-medium text-text-main">{filteredUsers.length}</span> entries
                    </div>

                    <div className="flex items-center gap-2">
                        <select className="bg-surface border border-border rounded p-1 text-text-main focus:outline-none focus:border-primary">
                            <option>100</option>
                            <option>50</option>
                            <option>25</option>
                        </select>
                        <div className="flex items-center rounded-lg border border-border overflow-hidden">
                            <button className="p-2 hover:bg-surface transition-colors border-r border-border"><ChevronLeft className="w-4 h-4" /></button>
                            <button className="px-3 py-2 bg-[#4A86C6] text-white font-bold">1</button>
                            <button className="p-2 hover:bg-surface transition-colors border-l border-border"><ChevronRight className="w-4 h-4" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Users;
