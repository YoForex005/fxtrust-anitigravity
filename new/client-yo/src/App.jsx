import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import ProtectedRoute from './components/ProtectedRoute';

import Sidebar from './components/Sidebar/Sidebar';
import ChatBot from './components/ChatBot/ChatBot';
import ImpersonationBanner from './components/ImpersonationBanner';

import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

import Dashboard from './pages/Dashboard/Dashboard';
import Academy from './pages/Academy/Academy';
import NewChallenge from './pages/NewChallenge/NewChallenge';
import Accounts from './pages/Accounts/Accounts';
import Rewards from './pages/Rewards/Rewards';
import Competitions from './pages/Competitions/Competitions';
import Leaderboard from './pages/Leaderboard/Leaderboard';
import Certificates from './pages/Certificates/Certificates';
import Calendar from './pages/Calendar/Calendar';
import Affiliate from './pages/Affiliate/Affiliate';
import Payouts from './pages/Payouts/Payouts';
import RequestReward from './pages/RequestReward/RequestReward';
import Profile from './pages/Profile/Profile';
import YoPipsTraders from './pages/YoPipsTraders/YoPipsTraders';
import GoogleAuthMock from './pages/GoogleAuth/GoogleAuthMock';
import CompetitionDetails from './pages/Competitions/CompetitionDetails';
import Downloads from './pages/Downloads/Downloads';
import AccountMetrix from './pages/AccountMetrix/AccountMetrix';
import Support from './pages/Support/Support';
import FreeTrial from './pages/FreeTrial/FreeTrial';
import Billing from './pages/Billing/Billing';
import Journal from './pages/Journal/Journal';
import SymbolsTickets from './pages/SymbolsTickets/SymbolsTickets';
import Ticker from './pages/Ticker/Ticker';

const DashboardLayout = () => {
    const { darkMode, toggleTheme } = useTheme();
    const [bannerVisible, setBannerVisible] = useState(true);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const isImpersonated = localStorage.getItem('isImpersonated') === 'true';

    return (
        <div className={`flex min-h-screen max-md:flex-col ${isImpersonated ? 'pt-10' : ''}`}>
            {isImpersonated && <ImpersonationBanner />}
            <Sidebar
                darkMode={darkMode}
                toggleTheme={toggleTheme}
                openChat={() => setIsChatOpen(true)}
            />
            <div className="flex-1 flex flex-col overflow-y-auto">
                {bannerVisible && (
                    <div className="bg-[#ff8c00] text-white flex justify-center items-center py-3 px-6 relative text-sm font-semibold">
                        <div className="flex items-center gap-2">
                            <span>🎉 Special Deal! $100,000 Yo Pips Challenge for €430 <span className="bg-white text-[#ff8c00] px-2 py-0.5 rounded-xl text-xs font-bold ml-2">Save €100</span></span>
                        </div>
                        <button className="absolute right-6 bg-transparent border-none text-white text-lg cursor-pointer" onClick={() => setBannerVisible(false)}>✕</button>
                    </div>
                )}
                <div className="px-[40px] pb-[32px] pl-[24px]">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/academy" element={<Academy />} />
                        <Route path="/new-challenge" element={<NewChallenge />} />
                        <Route path="/accounts" element={<Accounts />} />
                        <Route path="/account-metrix/:id" element={<AccountMetrix />} />
                        <Route path="/payouts" element={<Payouts />} />
                        <Route path="/request-reward" element={<RequestReward />} />
                        <Route path="/rewards" element={<Rewards />} />
                        <Route path="/competitions" element={<Competitions />} />
                        <Route path="/competitions/:id" element={<CompetitionDetails />} />
                        <Route path="/leaderboard" element={<Leaderboard />} />
                        <Route path="/certificates" element={<Certificates />} />
                        <Route path="/downloads" element={<Downloads />} />
                        <Route path="/calendar" element={<Calendar />} />
                        <Route path="/affiliate" element={<Affiliate />} />
                        <Route path="/yopips-traders" element={<YoPipsTraders />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/support" element={<Support />} />
                        <Route path="/support/send-message" element={<Support />} />
                        <Route path="/billing" element={<Billing />} />
                        <Route path="/journal" element={<Journal />} />
                        <Route path="/symbols-tickets" element={<SymbolsTickets />} />
                        <Route path="/ticker" element={<Ticker />} />
                        <Route path="/free-trial" element={<FreeTrial />} />
                    </Routes>
                    <ChatBot
                        isOpen={isChatOpen}
                        toggleChat={() => setIsChatOpen(!isChatOpen)}
                    />
                </div>
            </div>
        </div>
    );
};

function App() {
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const token = params.get('token');
        const impersonated = params.get('impersonated');

        if (token && impersonated === 'true') {
            localStorage.setItem('token', token);
            localStorage.setItem('isImpersonated', 'true');

            // Clean up the URL
            window.history.replaceState({}, document.title, window.location.pathname);

            // Refresh to ensure all contexts pick up the new token
            window.location.reload();
        }
    }, []);

    return (
        <AuthProvider>
            <ThemeProvider>
                <Router>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/signup" element={<Navigate to="/register" replace />} />
                        <Route path="/google-auth" element={<GoogleAuthMock />} />

                        <Route element={<ProtectedRoute />}>
                            <Route path="/*" element={<DashboardLayout />} />
                        </Route>
                    </Routes>
                </Router>
            </ThemeProvider>
        </AuthProvider>
    );
}

export default App;
