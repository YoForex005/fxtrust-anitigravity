import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/api';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const data = await login(email, password);
            if (data.user.role !== 'ADMIN') {
                setError('Access denied. Admin only.');
                localStorage.removeItem('token');
            } else {
                navigate('/');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white">
            <div className="w-full max-w-md p-8 bg-[#1a1a1a] rounded-lg border border-[#333] shadow-xl animate-in fade-in zoom-in duration-300">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-[#4A86C6]">Admin Portal</h1>
                    <p className="text-gray-400 mt-2">Sign in to manage your prop firm</p>
                </div>

                {error && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-3 rounded mb-4 text-sm">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-[#0a0a0a] border border-[#333] rounded p-3 text-white focus:outline-none focus:border-[#4A86C6]"
                            placeholder="admin@propfirm.com"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-[#0a0a0a] border border-[#333] rounded p-3 text-white focus:outline-none focus:border-[#4A86C6]"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#4A86C6] hover:bg-[#3a6ea3] text-white font-bold py-3 rounded transition-colors disabled:opacity-50"
                    >
                        {loading ? 'Signing in...' : 'Sign In'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
