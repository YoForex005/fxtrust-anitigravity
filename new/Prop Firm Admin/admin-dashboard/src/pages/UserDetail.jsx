import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
    HelpCircle,
    RefreshCw,
    List,
    Info,
    ChevronLeft,
    ChevronRight,
    Pencil,
    Trash2,
    UserCircle
} from 'lucide-react';
import { fetchUserDetail, deleteUser } from '../services/api';
import Header from '../components/layout/Header';

const UserDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this user? This action cannot be undone.')) {
            try {
                await deleteUser(id);
                navigate('/users');
            } catch (err) {
                alert('Failed to delete user: ' + err.message);
            }
        }
    };

    useEffect(() => {
        const loadUser = async () => {
            try {
                // console.log(`Fetching user details for ID: ${id}`);
                const data = await fetchUserDetail(id);
                // console.log('User data received:', data);
                setUser(data);
            } catch (err) {
                console.error("Failed to load user:", err);
                setError(err.message || "Failed to load user");
            } finally {
                setLoading(false);
            }
        };
        loadUser();
    }, [id]);

    if (loading) return (
        <div className="flex justify-center items-center h-screen bg-background text-text-muted">
            <RefreshCw className="animate-spin w-6 h-6 mr-2" />
            Loading user details...
        </div>
    );

    if (error) return (
        <div className="flex justify-center items-center h-screen bg-background text-danger">
            Error: {error}
        </div>
    );

    if (!user) return (
        <div className="flex justify-center items-center h-screen bg-background text-text-muted">
            User not found.
        </div>
    );

    const userData = {
        id: user.id,
        login: user.challenges?.[0]?.serverLogin || 'N/A',
        name: user.name,
        email: user.email,
        apiToken: user.apiToken || 'N/A',
        maxChallenges: user.stats?.maxChallenges || 3,
        max: user.stats?.maxFunded || 1,
        createdAt: user.createdAt ? new Date(user.createdAt).toLocaleString() : 'N/A',
        updatedAt: user.updatedAt ? new Date(user.updatedAt).toLocaleString() : 'N/A'
    };

    return (
        <div className="flex h-screen bg-background font-sans text-text-main">
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header title="Users" />

                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-background p-6">
                    <div className="max-w-6xl mx-auto space-y-6 animate-in fade-in zoom-in duration-300">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <div className="flex items-center gap-2">
                                    <h1 className="text-2xl font-bold text-text-main">User Details</h1>
                                    <span className="text-text-muted text-sm border-l border-border pl-2">ID: {userData.id}</span>
                                </div>
                            </div>
                        </div>

                        {/* Detail Card */}
                        <div className="glass-panel rounded-2xl overflow-hidden border border-border">
                            <div className="border-b border-border bg-surface/50 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
                                <h2 className="text-lg font-medium text-text-main">Overview</h2>
                                <div className="flex items-center flex-wrap gap-2">
                                    <button
                                        onClick={() => navigate('/users')}
                                        className="flex items-center gap-2 px-4 py-2 bg-surface border border-border text-text-muted hover:text-text-main rounded-lg transition-colors text-xs font-medium"
                                    >
                                        <List className="w-3.5 h-3.5" />
                                        Back to List
                                    </button>
                                    <button
                                        onClick={() => navigate(`/users/${id}/edit`)}
                                        className="flex items-center gap-2 px-4 py-2 bg-[#4A86C6] text-white rounded-lg hover:bg-[#3A76B6] transition-colors text-xs font-medium"
                                    >
                                        <Pencil className="w-3.5 h-3.5" />
                                        Edit User
                                    </button>
                                    <button
                                        onClick={handleDelete}
                                        className="flex items-center gap-2 px-4 py-2 bg-surface border border-border text-text-muted hover:text-danger rounded-lg transition-colors text-xs font-medium"
                                    >
                                        <Trash2 className="w-3.5 h-3.5" />
                                        Delete
                                    </button>
                                </div>
                            </div>

                            <div className="p-8 space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-[140px_1fr] items-center gap-4">
                                            <label className="text-sm font-medium text-text-muted text-right">Name</label>
                                            <div className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-text-main text-sm font-medium">
                                                {userData.name}
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-[140px_1fr] items-center gap-4">
                                            <label className="text-sm font-medium text-text-muted text-right">Email</label>
                                            <div className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-text-main text-sm">
                                                {userData.email}
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-[140px_1fr] items-center gap-4">
                                            <label className="text-sm font-medium text-text-muted text-right">Login</label>
                                            <div className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-text-main text-sm font-mono">
                                                {userData.login}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-[140px_1fr] items-center gap-4">
                                            <label className="text-sm font-medium text-text-muted text-right">API Token</label>
                                            <div className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-text-muted text-xs font-mono break-all">
                                                {userData.apiToken}
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-[140px_1fr] items-center gap-4">
                                            <label className="text-sm font-medium text-text-muted text-right">Registered</label>
                                            <div className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-text-main text-sm">
                                                {userData.createdAt}
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-[140px_1fr] items-center gap-4">
                                            <label className="text-sm font-medium text-text-muted text-right">Last Update</label>
                                            <div className="w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-text-main text-sm">
                                                {userData.updatedAt}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Accounts Card */}
                        <div className="glass-panel rounded-2xl overflow-hidden border border-border">
                            <div className="border-b border-border bg-surface/50 px-6 py-4 flex items-center justify-between">
                                <h2 className="text-lg font-medium text-text-main">Accounts & Challenges</h2>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-surface/50 text-text-muted text-[10px] uppercase font-bold border-b border-border">
                                            <th className="p-3">ID</th>
                                            <th className="p-3">Plan</th>
                                            <th className="p-3">Type</th>
                                            <th className="p-3">Balance</th>
                                            <th className="p-3">Status</th>
                                            <th className="p-3">Phase</th>
                                            <th className="p-3">Created</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border text-xs">
                                        {user.challenges && user.challenges.length > 0 ? (
                                            user.challenges.map(challenge => (
                                                <tr key={challenge.id} className="hover:bg-surface/30">
                                                    <td className="p-3 font-mono">{challenge.id}</td>
                                                    <td className="p-3">{challenge.planType}</td>
                                                    <td className="p-3">{challenge.accountType}</td>
                                                    <td className="p-3 font-mono">${challenge.initialBalance?.toLocaleString()}</td>
                                                    <td className="p-3">
                                                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${challenge.status === 'ACTIVE' ? 'bg-emerald-500/10 text-emerald-500' :
                                                            challenge.status === 'FAILED' ? 'bg-red-500/10 text-red-500' :
                                                                'bg-blue-500/10 text-blue-500'
                                                            }`}>
                                                            {challenge.status}
                                                        </span>
                                                    </td>
                                                    <td className="p-3">{challenge.phase}</td>
                                                    <td className="p-3 text-text-muted">{new Date(challenge.createdAt).toLocaleDateString()}</td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="7" className="p-8 text-center text-text-muted italic">
                                                    <div className="flex items-center gap-2 justify-center opacity-70">
                                                        <Info className="w-4 h-4" />
                                                        No accounts found.
                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default UserDetail;
