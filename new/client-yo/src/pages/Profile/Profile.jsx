import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import {
    User, Mail, Phone, MapPin, 
    Edit2, CheckCircle, Smartphone,
    ChevronRight, X, RefreshCw
} from 'lucide-react';

function Profile() {
    const { user: authUser, updateProfile } = useAuth();
    const [activeTab, setActiveTab] = useState('personal');
    const [isEditing, setIsEditing] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [error, setError] = useState('');

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        name: '',
        email: '',
        phone: '',
        country: ''
    });

    const [loginHistory] = useState([
        { id: 1, device: 'Current Session', ip: '127.0.0.1', location: 'Local', time: 'Just now', status: 'Active' },
        { id: 2, device: 'Chrome on Windows', ip: '192.168.1.5', location: 'India', time: 'Yesterday', status: 'Success' },
    ]);

    useEffect(() => {
        if (authUser) {
            const names = (authUser.name || '').split(' ');
            setFormData({
                name: authUser.name || '',
                firstName: names[0] || '',
                lastName: names.slice(1).join(' ') || '',
                email: authUser.email || '',
                phone: authUser.phone || '',
                country: authUser.country || ''
            });
        }
    }, [authUser]);

    const handleSave = async () => {
        setError('');
        setSuccessMessage('');
        
        const fullName = `${formData.firstName} ${formData.lastName}`.trim();
        
        const result = await updateProfile({
            name: fullName,
            phone: formData.phone,
            country: formData.country
        });

        if (result.success) {
            setIsEditing(false);
            setSuccessMessage('Profile updated successfully!');
            setTimeout(() => setSuccessMessage(''), 3000);
        } else {
            setError(result.message);
        }
    };

    if (!authUser) {
        return <div className="min-h-screen bg-black flex items-center justify-center text-white">Loading profile...</div>;
    }

    return (
        <div className="min-h-screen bg-[#f3f4f6] dark:bg-[#0d0d0d] p-6 lg:p-10 font-sans text-[#1a1a1a] dark:text-[#f3f4f6]">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-1.5 mb-3 text-[11px] text-[#9ca3af] dark:text-[#6b7280]">
                <span>Dashboard</span>
                <span className="mx-1">/</span>
                <span className="text-[#4b5563] dark:text-[#9ca3af]">Profile</span>
            </div>

            {/* Page Header */}
            <div className="flex items-center mb-5">
                <div className="flex items-center gap-3">
                    <User size={20} className="text-[#6b7280]" />
                    <h1 className="text-xl font-semibold m-0 text-[#1a1a1a] dark:text-[#f3f4f6]">
                        Hello, {formData.firstName || 'Trader'}
                    </h1>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 mb-6">
                <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#1f2937] border border-[#e5e7eb] dark:border-[#374151] rounded text-[13px] font-medium text-[#374151] dark:text-[#e5e7eb] cursor-pointer shadow-sm hover:bg-[#f9fafb] dark:hover:bg-[#374151] transition-all duration-200"
                >
                    <Edit2 size={14} /> {isEditing ? 'Cancel Edit' : 'Edit Profile'}
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#1f2937] border border-[#e5e7eb] dark:border-[#374151] rounded text-[13px] font-medium text-[#374151] dark:text-[#e5e7eb] cursor-pointer shadow-sm hover:bg-[#f9fafb] dark:hover:bg-[#374151] transition-all duration-200">
                    <RefreshCw size={14} /> Refresh
                </button>
            </div>

            {/* Tab Switcher */}
            <div className="flex gap-4 mb-6 border-b border-[#e5e7eb] dark:border-[#374151]">
                {[
                    { id: 'personal', label: 'Personal Info' },
                    { id: 'security', label: 'Security & Login' },
                    { id: 'activity', label: 'Activity Log' }
                ].map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`pb-2 text-sm font-semibold transition-colors ${activeTab === tab.id ? 'text-[#0066ff] border-b-2 border-[#0066ff]' : 'text-[#6b7280] dark:text-[#9ca3af] hover:text-[#111827] dark:hover:text-[#f3f4f6]'}`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Messages */}
            {successMessage && (
                <div className="mb-6 bg-[#d1fae5] dark:bg-[#064e3b] border border-[#a7f3d0] dark:border-[#065f46] text-[#10b981] px-4 py-3 rounded-lg flex items-center gap-2 text-[13px] font-medium">
                    <CheckCircle size={16} />
                    {successMessage}
                </div>
            )}
            {error && (
                <div className="mb-6 bg-red-100 dark:bg-red-900/20 border border-red-200 dark:border-red-900/50 text-red-600 dark:text-red-400 px-4 py-3 rounded-lg flex items-center gap-2 text-[13px] font-medium">
                    <X size={16} />
                    {error}
                </div>
            )}

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-5">
                {/* Main Content */}
                <div className="space-y-5">
                    {activeTab === 'personal' && (
                        <>
                            {/* Basic Information */}
                            <div className="bg-white dark:bg-[#141414] rounded-lg p-5 shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-transparent dark:border-[#333]">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="m-0 text-[15px] font-semibold text-[#111827] dark:text-[#f3f4f6]">Basic Information</h3>
                                    <span className="text-[11px] text-[#9ca3af] bg-[#f3f4f6] dark:bg-[#262626] px-2 py-1 rounded">ID: {authUser.id.split('-')[0]}...</span>
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex justify-between py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px]">
                                        <span className="text-[#6b7280] dark:text-[#9ca3af]">First Name</span>
                                        {isEditing ? (
                                            <input 
                                                type="text" 
                                                value={formData.firstName} 
                                                onChange={e => setFormData({...formData, firstName: e.target.value})}
                                                className="bg-[#f9fafb] dark:bg-[#262626] border border-[#0066ff] rounded px-2 py-1 text-[13px] font-medium text-[#1a1a1a] dark:text-[#f3f4f6] outline-none w-40 text-right" 
                                            />
                                        ) : (
                                            <span className="font-medium text-[#1a1a1a] dark:text-[#f3f4f6]">{formData.firstName}</span>
                                        )}
                                    </div>
                                    <div className="flex justify-between py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px]">
                                        <span className="text-[#6b7280] dark:text-[#9ca3af]">Last Name</span>
                                        {isEditing ? (
                                            <input 
                                                type="text" 
                                                value={formData.lastName}
                                                onChange={e => setFormData({...formData, lastName: e.target.value})}
                                                className="bg-[#f9fafb] dark:bg-[#262626] border border-[#0066ff] rounded px-2 py-1 text-[13px] font-medium text-[#1a1a1a] dark:text-[#f3f4f6] outline-none w-40 text-right" 
                                            />
                                        ) : (
                                            <span className="font-medium text-[#1a1a1a] dark:text-[#f3f4f6]">{formData.lastName}</span>
                                        )}
                                    </div>
                                    <div className="flex justify-between py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px]">
                                        <span className="text-[#6b7280] dark:text-[#9ca3af]">Status</span>
                                        <span className="bg-[#10b981] text-white px-2 py-0.5 rounded text-[11px] font-semibold flex items-center gap-1">
                                            <CheckCircle size={10} /> Active
                                        </span>
                                    </div>
                                    <div className="flex justify-between py-3 text-[13px]">
                                        <span className="text-[#6b7280] dark:text-[#9ca3af]">Member Since</span>
                                        <span className="font-medium text-[#1a1a1a] dark:text-[#f3f4f6]">
                                            {new Date(authUser.createdAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Contact & Location */}
                            <div className="bg-white dark:bg-[#141414] rounded-lg p-5 shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-transparent dark:border-[#333]">
                                <h3 className="m-0 mb-4 text-[15px] font-semibold text-[#111827] dark:text-[#f3f4f6]">Contact & Location</h3>
                                <div className="flex flex-col">
                                    <div className="flex justify-between py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px]">
                                        <span className="text-[#6b7280] dark:text-[#9ca3af] flex items-center gap-1"><Mail size={12} /> Email</span>
                                        <span className="font-medium text-[#1a1a1a] dark:text-[#f3f4f6]">{formData.email}</span>
                                    </div>
                                    <div className="flex justify-between py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px]">
                                        <span className="text-[#6b7280] dark:text-[#9ca3af] flex items-center gap-1"><Phone size={12} /> Phone</span>
                                        {isEditing ? (
                                            <input 
                                                type="text" 
                                                value={formData.phone}
                                                onChange={e => setFormData({...formData, phone: e.target.value})}
                                                className="bg-[#f9fafb] dark:bg-[#262626] border border-[#0066ff] rounded px-2 py-1 text-[13px] font-medium text-[#1a1a1a] dark:text-[#f3f4f6] outline-none w-40 text-right" 
                                            />
                                        ) : (
                                            <span className="font-medium text-[#1a1a1a] dark:text-[#f3f4f6]">{formData.phone || 'Not set'}</span>
                                        )}
                                    </div>
                                    <div className="flex justify-between py-3 text-[13px]">
                                        <span className="text-[#6b7280] dark:text-[#9ca3af] flex items-center gap-1"><MapPin size={12} /> Country</span>
                                        {isEditing ? (
                                            <input 
                                                type="text" 
                                                value={formData.country}
                                                onChange={e => setFormData({...formData, country: e.target.value})}
                                                className="bg-[#f9fafb] dark:bg-[#262626] border border-[#0066ff] rounded px-2 py-1 text-[13px] font-medium text-[#1a1a1a] dark:text-[#f3f4f6] outline-none w-40 text-right" 
                                            />
                                        ) : (
                                            <span className="font-medium text-[#1a1a1a] dark:text-[#f3f4f6]">{formData.country || 'Not set'}</span>
                                        )}
                                    </div>
                                </div>

                                {isEditing && (
                                    <div className="flex justify-end gap-3 mt-4 pt-4 border-t border-[#f3f4f6] dark:border-[#374151]">
                                        <button onClick={() => setIsEditing(false)} className="px-4 py-2 border border-[#e5e7eb] dark:border-[#374151] rounded text-[13px] font-medium text-[#374151] dark:text-[#e5e7eb] hover:bg-[#f9fafb] dark:hover:bg-[#374151]">
                                            Cancel
                                        </button>
                                        <button onClick={handleSave} className="px-4 py-2 bg-[#1d1d1f] dark:bg-white text-white dark:text-[#1d1d1f] rounded text-[13px] font-semibold hover:opacity-90">
                                            Save Changes
                                        </button>
                                    </div>
                                )}
                            </div>
                        </>
                    )}

                    {activeTab === 'security' && (
                        <>
                            {/* Two-Factor Auth */}
                            <div className="bg-white dark:bg-[#141414] rounded-lg p-5 shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-transparent dark:border-[#333]">
                                <h3 className="m-0 mb-4 text-[15px] font-semibold text-[#111827] dark:text-[#f3f4f6]">Security Settings</h3>
                                <div className="flex flex-col">
                                    <div className="flex justify-between items-center py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px]">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-[#f3f4f6] dark:bg-[#262626] rounded">
                                                <Smartphone size={14} className="text-[#6b7280]" />
                                            </div>
                                            <div>
                                                <div className="font-medium text-[#111827] dark:text-[#f3f4f6]">Two-Factor Authentication</div>
                                                <div className="text-[11px] text-[#9ca3af]">Enhance account security</div>
                                            </div>
                                        </div>
                                        <button className="px-3 py-1.5 bg-[#f0f7ff] dark:bg-[#0066ff]/10 text-[#0066ff] rounded text-[11px] font-semibold hover:bg-[#e0efff]">
                                            To be implemented
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    {activeTab === 'activity' && (
                        <div className="bg-white dark:bg-[#141414] rounded-lg p-5 shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-transparent dark:border-[#333]">
                            <h3 className="m-0 mb-4 text-[15px] font-semibold text-[#111827] dark:text-[#f3f4f6]">Recent Login Activity</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse min-w-[500px]">
                                    <thead>
                                        <tr>
                                            <th className="text-left text-[11px] font-semibold text-[#6b7280] dark:text-[#9ca3af] pb-3 border-b border-[#f3f4f6] dark:border-[#374151]">Device</th>
                                            <th className="text-left text-[11px] font-semibold text-[#6b7280] dark:text-[#9ca3af] pb-3 border-b border-[#f3f4f6] dark:border-[#374151]">Location</th>
                                            <th className="text-left text-[11px] font-semibold text-[#6b7280] dark:text-[#9ca3af] pb-3 border-b border-[#f3f4f6] dark:border-[#374151]">Time</th>
                                            <th className="text-right text-[11px] font-semibold text-[#6b7280] dark:text-[#9ca3af] pb-3 border-b border-[#f3f4f6] dark:border-[#374151]">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {loginHistory.map(log => (
                                            <tr key={log.id}>
                                                <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px]">
                                                    <div className="font-medium text-[#111827] dark:text-[#f3f4f6]">{log.device}</div>
                                                    <div className="text-[11px] text-[#9ca3af] font-mono">{log.ip}</div>
                                                </td>
                                                <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] text-[#6b7280] dark:text-[#9ca3af]">{log.location}</td>
                                                <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] text-[#6b7280] dark:text-[#9ca3af]">{log.time}</td>
                                                <td className="py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px] text-right">
                                                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold ${log.status === 'Active' ? 'bg-[#d1fae5] dark:bg-[#064e3b] text-[#10b981]' : 'bg-[#f3f4f6] dark:bg-[#374151] text-[#6b7280]'}`}>
                                                        {log.status === 'Active' && <span className="w-1.5 h-1.5 bg-[#10b981] rounded-full animate-pulse"></span>}
                                                        {log.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>

                {/* Right Sidebar */}
                <div className="space-y-5">
                    {/* Account Summary */}
                    <div className="bg-white dark:bg-[#141414] rounded-lg p-5 shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-transparent dark:border-[#333]">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="m-0 text-[15px] font-semibold text-[#111827] dark:text-[#f3f4f6]">Account Summary</h3>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex justify-between py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px]">
                                <span className="text-[#6b7280] dark:text-[#9ca3af]">Account Status</span>
                                <span className="bg-[#10b981] text-white px-2 py-0.5 rounded text-[11px] font-semibold">Active</span>
                            </div>
                            <div className="flex justify-between py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px]">
                                <span className="text-[#6b7280] dark:text-[#9ca3af]">Yo Pips Points</span>
                                <span className="font-medium text-[#0066ff]">{authUser.yoPipsPoints || 0}</span>
                            </div>
                            <div className="flex justify-between py-3 border-b border-[#f3f4f6] dark:border-[#374151] text-[13px]">
                                <span className="text-[#6b7280] dark:text-[#9ca3af]">Connected Accounts</span>
                                <span className="font-medium text-[#f59e0b]">{authUser.accountCount || 0}</span>
                            </div>
                        </div>
                    </div>

                    {/* Support Card */}
                    <div className="bg-[#f9fafb] dark:bg-[#1a1a1a] rounded-lg p-5 border border-[#e5e7eb] dark:border-[#333]">
                        <h3 className="m-0 mb-2 text-[15px] font-semibold text-[#111827] dark:text-[#f3f4f6]">Need Help?</h3>
                        <p className="text-[13px] text-[#6b7280] dark:text-[#9ca3af] mb-4">
                            Contact support for sensitive account changes.
                        </p>
                        <a href="mailto:support@yopips.com" className="text-[13px] font-semibold text-[#0066ff] hover:underline flex items-center gap-1">
                            Contact Support <ChevronRight size={14} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="border-t border-[#e5e7eb] dark:border-[#374151] pt-8 text-center mt-12">
                <div className="mb-5 flex justify-center gap-5">
                    <a href="#" className="text-[#111827] dark:text-[#f3f4f6] underline text-xs font-semibold">Cookie settings</a>
                    <a href="#" className="text-[#111827] dark:text-[#f3f4f6] underline text-xs font-semibold">Privacy policy</a>
                    <a href="#" className="text-[#111827] dark:text-[#f3f4f6] underline text-xs font-semibold">Terms & Conditions</a>
                </div>
                <p className="text-[11px] text-[#9ca3af]">2026 © Copyright - YoPips.com</p>
            </div>
        </div>
    );
}

export default Profile;
