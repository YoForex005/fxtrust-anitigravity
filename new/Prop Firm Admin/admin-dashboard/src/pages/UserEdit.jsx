import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchUserDetail, updateUser } from '../services/api';
import Header from '../components/layout/Header';
import { Save, ArrowLeft, RefreshCw, Trash2, Eye, EyeOff } from 'lucide-react';

const UserEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    const [userData, setUserData] = useState({
        login: '',
        name: '',
        email: '',
        apiToken: '',
        password: '',
        passwordConfirmation: '',
        maxChallenges: 1,
        maxAccounts: 1,
        sendNotification: false,
        tags: 'red' // Default or fetched
    });

    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        const loadUser = async () => {
            try {
                const data = await fetchUserDetail(id);
                // Transform API data to form state
                setUserData({
                    ...data,
                    // If backend doesn't return these, set defaults or empty
                    password: '',
                    passwordConfirmation: '',
                    tags: data.tags || 'red',
                    // Use challenges to mock apiToken/login if missing on user object
                    login: data.challenges?.[0]?.serverLogin || 'N/A',
                    apiToken: data.apiToken || 'C2IV8ee53VSr' // Placeholder or real
                });
            } catch (err) {
                setError('Failed to load user data');
            } finally {
                setLoading(false);
            }
        };
        loadUser();
    }, [id]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setUserData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setError(null);
        setSuccessMessage('');

        if (userData.password && userData.password !== userData.passwordConfirmation) {
            setError("Passwords do not match");
            setSubmitting(false);
            return;
        }

        try {
            await updateUser(id, {
                name: userData.name,
                email: userData.email,
                password: userData.password, // Optional
                tags: userData.tags
            });
            setSuccessMessage('User updated successfully!');
            // Optional: Redirect after delay
            setTimeout(() => {
                navigate('/users');
            }, 1500);
        } catch (err) {
            setError(err.message || 'Failed to update user');
        } finally {
            setSubmitting(false);
        }
    };

    if (loading) return (
        <div className="flex justify-center items-center h-screen bg-background">
            <RefreshCw className="animate-spin text-primary w-8 h-8" />
        </div>
    );

    return (
        <div className="flex h-screen bg-background font-sans text-text-main">
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header title="Users" />

                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-background p-6">
                    <div className="max-w-5xl mx-auto space-y-6">

                        {/* Breadcrumb / Title */}
                        <div className="flex items-center gap-2 mb-4">
                            <h1 className="text-2xl font-bold flex items-center gap-2">
                                Users <span className="text-sm font-normal text-text-muted mt-1">Need Help?</span>
                            </h1>
                        </div>

                        {/* Card */}
                        <div className="bg-surface rounded-lg border border-border overflow-hidden shadow-sm">
                            <div className="border-b border-border p-4 px-6 flex justify-between items-center bg-surface-lighter/30">
                                <h2 className="text-lg font-semibold">Edit</h2>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => navigate('/users')}
                                        className="px-3 py-1.5 bg-[#4f46e5] text-white rounded text-sm font-medium hover:bg-[#4338ca] flex items-center gap-1"
                                    >
                                        <ArrowLeft size={14} /> List
                                    </button>
                                    <button
                                        onClick={() => navigate(`/users/${id}`)}
                                        className="px-3 py-1.5 bg-[#4f46e5]/90 text-white rounded text-sm font-medium hover:bg-[#4f46e5] flex items-center gap-1"
                                    >
                                        <Eye size={14} /> View
                                    </button>
                                    <button
                                        onClick={() => {/* Implement Delete if needed or redirect back */ }}
                                        className="px-3 py-1.5 bg-white border border-border text-text-main rounded text-sm font-medium hover:bg-gray-50 flex items-center gap-1"
                                    >
                                        <Trash2 size={14} /> Delete
                                    </button>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="p-8 px-10 space-y-6">

                                {error && <div className="p-3 bg-red-100 text-red-700 rounded border border-red-200">{error}</div>}
                                {successMessage && <div className="p-3 bg-green-100 text-green-700 rounded border border-green-200">{successMessage}</div>}

                                {/* ID (Read Only) */}
                                <div className="grid grid-cols-[200px_1fr] items-center gap-4">
                                    <label className="text-sm font-medium text-text-muted text-right">ID</label>
                                    <input
                                        type="text"
                                        value={id}
                                        disabled
                                        className="w-full p-2.5 rounded border border-border bg-gray-50 text-text-muted focus:outline-none"
                                    />
                                </div>

                                {/* Email */}
                                <div className="grid grid-cols-[200px_1fr] items-center gap-4">
                                    <label className="text-sm font-medium text-text-muted text-right">
                                        <span className="text-red-500 mr-1">*</span>Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={userData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-2.5 rounded border border-border bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none text-text-main"
                                    />
                                </div>

                                {/* Login (Read Only for now) */}
                                <div className="grid grid-cols-[200px_1fr] items-center gap-4">
                                    <label className="text-sm font-medium text-text-muted text-right">
                                        <span className="text-red-500 mr-1">*</span>Login
                                    </label>
                                    <input
                                        type="text"
                                        name="login"
                                        value={userData.login}
                                        disabled
                                        className="w-full p-2.5 rounded border border-border bg-gray-50 text-text-muted focus:outline-none"
                                    />
                                </div>

                                {/* Name */}
                                <div className="grid grid-cols-[200px_1fr] items-center gap-4">
                                    <label className="text-sm font-medium text-text-muted text-right">
                                        <span className="text-red-500 mr-1">*</span>Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={userData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full p-2.5 rounded border border-border bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none text-text-main"
                                    />
                                </div>

                                {/* API Token (Read Only) */}
                                <div className="grid grid-cols-[200px_1fr] items-center gap-4">
                                    <label className="text-sm font-medium text-text-muted text-right">
                                        API Token
                                    </label>
                                    <input
                                        type="text"
                                        value={userData.apiToken}
                                        disabled
                                        className="w-full p-2.5 rounded border border-border bg-gray-50 text-text-muted focus:outline-none"
                                    />
                                </div>

                                {/* Password */}
                                <div className="grid grid-cols-[200px_1fr] items-center gap-4">
                                    <label className="text-sm font-medium text-text-muted text-right">
                                        Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            value={userData.password}
                                            onChange={handleChange}
                                            placeholder="Leave blank to keep current"
                                            className="w-full p-2.5 rounded border border-border bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none text-text-main"
                                        />
                                        <button
                                            type="button"
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-main"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                        </button>
                                    </div>
                                </div>

                                {/* Password Confirmation */}
                                <div className="grid grid-cols-[200px_1fr] items-center gap-4">
                                    <label className="text-sm font-medium text-text-muted text-right">
                                        Password Confirmation
                                    </label>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="passwordConfirmation"
                                        value={userData.passwordConfirmation}
                                        onChange={handleChange}
                                        placeholder="Confirm new password"
                                        className="w-full p-2.5 rounded border border-border bg-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none text-text-main"
                                    />
                                </div>

                                {/* Max Challenges */}
                                <div className="grid grid-cols-[200px_1fr] items-center gap-4">
                                    <label className="text-sm font-medium text-text-muted text-right">
                                        Max Challenges
                                    </label>
                                    <div className="flex">
                                        <button type="button" className="px-3 py-2 border border-border rounded-l bg-gray-50">-</button>
                                        <input
                                            type="number"
                                            name="maxChallenges"
                                            value={userData.maxChallenges}
                                            onChange={handleChange}
                                            className="w-20 text-center border-y border-border p-2 focus:outline-none"
                                        />
                                        <button type="button" className="px-3 py-2 border border-border rounded-r bg-[#4f46e5] text-white">+</button>
                                    </div>
                                </div>

                                {/* Max Accounts */}
                                <div className="grid grid-cols-[200px_1fr] items-center gap-4">
                                    <label className="text-sm font-medium text-text-muted text-right">
                                        Max Accounts
                                    </label>
                                    <div className="flex">
                                        <button type="button" className="px-3 py-2 border border-border rounded-l bg-gray-50">-</button>
                                        <input
                                            type="number"
                                            name="maxAccounts"
                                            value={userData.maxAccounts}
                                            onChange={handleChange}
                                            className="w-20 text-center border-y border-border p-2 focus:outline-none"
                                        />
                                        <button type="button" className="px-3 py-2 border border-border rounded-r bg-[#4f46e5] text-white">+</button>
                                    </div>
                                </div>

                                {/* Notification Toggle */}
                                <div className="grid grid-cols-[200px_1fr] items-center gap-4">
                                    <label className="text-sm font-medium text-text-muted text-right">
                                        Send Notification
                                    </label>
                                    <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                                        <input
                                            type="checkbox"
                                            name="sendNotification"
                                            id="toggle"
                                            checked={userData.sendNotification}
                                            onChange={handleChange}
                                            className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                                            style={{ right: userData.sendNotification ? '0' : 'auto', left: userData.sendNotification ? 'auto' : '0', borderColor: userData.sendNotification ? '#4f46e5' : '#ccc' }}
                                        />
                                        <label
                                            htmlFor="toggle"
                                            className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer ${userData.sendNotification ? 'bg-[#4f46e5]' : 'bg-gray-300'}`}
                                        ></label>
                                    </div>
                                </div>

                                {/* Tags - Red Chip */}
                                <div className="grid grid-cols-[200px_1fr] items-center gap-4">
                                    <label className="text-sm font-medium text-text-muted text-right">
                                        Tags
                                    </label>
                                    <div className="w-full p-2.5 rounded border border-border bg-surface flex items-center justify-between">
                                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">پرداخت نشده</span> {/* Hardcoded Persian tag from screenshot for visual match */}
                                        <span className="text-gray-400 cursor-pointer text-xs">x</span>
                                    </div>
                                </div>

                                {/* Timestamps */}
                                <div className="grid grid-cols-[200px_1fr] items-center gap-4">
                                    <label className="text-sm font-medium text-text-muted text-right">
                                        Created At
                                    </label>
                                    <div className="text-sm text-text-muted">
                                        {new Date(userData.createdAt || Date.now()).toLocaleString()}
                                    </div>
                                </div>
                                <div className="grid grid-cols-[200px_1fr] items-center gap-4">
                                    <label className="text-sm font-medium text-text-muted text-right">
                                        Updated At
                                    </label>
                                    <div className="text-sm text-text-muted">
                                        {new Date(userData.updatedAt || Date.now()).toLocaleString()}
                                    </div>
                                </div>

                                {/* Buttons */}
                                <div className="flex justify-between pt-8 border-t border-border mt-4">
                                    <button
                                        type="button"
                                        onClick={() => loadUser()} // Reset
                                        className="px-4 py-2 border border-border rounded text-sm font-medium hover:bg-gray-50 flex items-center gap-2"
                                    >
                                        <RefreshCw size={16} /> Reset
                                    </button>

                                    <button
                                        type="submit"
                                        disabled={submitting}
                                        className="px-6 py-2 bg-[#4f46e5] text-white rounded text-sm font-bold shadow-lg shadow-indigo-500/30 hover:bg-[#4338ca] flex items-center gap-2 transition-all disabled:opacity-50"
                                    >
                                        {submitting ? 'Saving...' : <><Save size={16} /> Submit</>}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default UserEdit;
