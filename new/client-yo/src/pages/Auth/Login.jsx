import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { useNavigate, Link } from 'react-router-dom';
import { Loader2, Mail, Lock, ArrowRight, CheckCircle2, XCircle, Sun, Moon } from 'lucide-react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    
    const { login } = useAuth();
    const { darkMode, toggleTheme } = useTheme();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        const result = await login(email, password);
        
        if (result.success) {
            navigate('/dashboard');
        } else {
            setError(result.message);
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-[#f3f4f6] dark:bg-[#0d0d0d] flex items-center justify-center p-6 font-sans relative transition-colors duration-300">
            {/* Theme Toggle */}
            <button
                onClick={toggleTheme}
                className="absolute top-6 right-6 p-2 rounded-xl bg-white dark:bg-[#1f1f1f] text-[#6b7280] hover:text-[#0066ff] dark:text-[#9ca3af] dark:hover:text-[#0066ff] shadow-sm border border-[#e5e7eb] dark:border-[#333] transition-all hover:scale-105"
            >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <div className="w-full max-w-[500px]">
                {/* Logo Section */}
                <div className="flex justify-center mb-8">
                   <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#0066ff] rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                            <svg fill="#ffffff" width="24px" height="24px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm0 30C8.268 30 2 23.732 2 16S8.268 2 16 2s14 6.268 14 14-6.268 14-14 14z" />
                                <path d="M12 9h9v3h-6v4h6v3h-6v6h-3V9z" />
                            </svg>
                        </div>
                        <span className="text-2xl font-bold text-[#1a1a1a] dark:text-white tracking-tight">Yo Pips</span>
                    </div>
                </div>

                <div className="bg-white dark:bg-[#141414] rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] border border-[#e5e7eb] dark:border-[#333] p-8 md:p-10">
                    <div className="mb-8 text-center">
                        <h1 className="text-2xl font-bold text-[#1a1a1a] dark:text-white mb-2">Welcome back</h1>
                        <p className="text-[#6b7280] dark:text-[#9ca3af] text-sm">Enter your credentials to access your account</p>
                    </div>

                    {error && (
                        <div className="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-100 dark:border-red-500/20 flex items-start gap-3">
                            <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                            <p className="text-sm text-red-600 dark:text-red-400 font-medium">{error}</p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-1.5">
                            <label className="text-[13px] font-semibold text-[#374151] dark:text-[#d1d5db] ml-1">Email Address</label>
                            <div className="relative group">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9ca3af] group-focus-within:text-[#0066ff] transition-colors">
                                    <Mail size={18} />
                                </div>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-[#f9fafb] dark:bg-[#1f1f1f] border border-[#e5e7eb] dark:border-[#333] rounded-xl pl-11 pr-4 py-3.5 text-sm outline-none focus:border-[#0066ff] focus:ring-4 focus:ring-blue-500/10 transition-all text-[#1a1a1a] dark:text-white placeholder:text-[#9ca3af]"
                                    placeholder="name@example.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <div className="flex justify-between items-center ml-1">
                                <label className="text-[13px] font-semibold text-[#374151] dark:text-[#d1d5db]">Password</label>
                                <a href="#" className="text-[13px] font-medium text-[#0066ff] hover:text-[#0052cc] transition-colors">Forgot password?</a>
                            </div>
                            <div className="relative group">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9ca3af] group-focus-within:text-[#0066ff] transition-colors">
                                    <Lock size={18} />
                                </div>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-[#f9fafb] dark:bg-[#1f1f1f] border border-[#e5e7eb] dark:border-[#333] rounded-xl pl-11 pr-4 py-3.5 text-sm outline-none focus:border-[#0066ff] focus:ring-4 focus:ring-blue-500/10 transition-all text-[#1a1a1a] dark:text-white placeholder:text-[#9ca3af]"
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>
                        </div>

             
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full bg-[#0066ff] hover:bg-[#0052cc] text-white font-semibold py-3.5 rounded-xl transition-all shadow-[0_4px_14px_rgba(0,102,255,0.3)] hover:shadow-[0_6px_20px_rgba(0,102,255,0.4)] hover:-translate-y-0.5 flex items-center justify-center gap-2 ${loading ? 'opacity-70 cursor-not-allowed transform-none' : ''}`}
                        >
                            {loading ? (
                                <>
                                    <Loader2 size={20} className="animate-spin" />
                                    <span>Signing in...</span>
                                </>
                            ) : (
                                <>
                                    <span>Sign In</span>
                                    <ArrowRight size={18} />
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-8 pt-6 border-t border-[#f3f4f6] dark:border-[#262626] text-center">
                        <p className="text-[#6b7280] dark:text-[#9ca3af] text-sm">
                            Don't have an account?{' '}
                            <Link to="/register" className="text-[#0066ff] font-semibold hover:text-[#0052cc] transition-colors ml-1">
                                Create Account
                            </Link>
                        </p>
                    </div>
                </div>
                
                {/* Footer simple links */}
                <div className="mt-8 flex justify-center gap-6 text-xs text-[#9ca3af]">
                    <a href="#" className="hover:text-[#6b7280] transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-[#6b7280] transition-colors">Terms of Service</a>
                    <a href="#" className="hover:text-[#6b7280] transition-colors">Help Center</a>
                </div>
            </div>
        </div>
    );
};

export default Login;
