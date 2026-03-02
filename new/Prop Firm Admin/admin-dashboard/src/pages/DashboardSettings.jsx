import React, { useState, useRef } from 'react';
import { HelpCircle, Edit2, RefreshCw, Trash2, Upload } from 'lucide-react';
import { cn } from '../lib/utils';

const DashboardSettings = () => {
    const [activeTab, setActiveTab] = useState('basic');
    const [isSaving, setIsSaving] = useState(false);
    const [formData, setFormData] = useState({
        poweredByText: 'https://docfirms.com/cloudlingers.com/ip',
        picName: 'yu9cd',
        siteTitle: 'iyu9cd',
        topMenu: false,
        contactUsEnabled: true,
        darkMode: true,
        contactUsLink: 'main.Contact.Us.Link',
        wordPressHost: 'Your WordPress Host',
        wordPressClientId: 'gPundROjXQ, 7vHPsmJ1Mp0pP7t1ufo/Rand',
        wordPressClientSecret: 'u8vKDQLj8DuC+ppg0FocZDck6v4yUOEzLq',
        menuStyle: 'dark',
        loginPageLayout: 'primary',
        baseColor: 'default',
        topBarColor: 'primary',
        language: 'english',
        itemsPerPage: 100,
        allowRegistration: false,
        registrationActivation: false,
        allowResetPassword: false,
        recaptchaEnabled: false,
        recaptchaSite: 'YOURGOOGLECAPTCHAsitekeyHERE',
        recaptchaSecret: 'YOURGOOGLECAPTCHAsecretHERE',
        logoUploaded: true,
        logoId: '6b5819e76b7328dd49607...',
        logoData: null, // Store actual file data as base64
        logoFileName: 'default_logo.png', // Store original filename

        logoMiniUploaded: false,
        logoMiniData: null,
        logoMiniFileName: '',

        loginBgUploaded: false,
        loginBgData: null,
        loginBgFileName: '',

        icon32Uploaded: false,
        icon32Data: null,
        icon32FileName: '',

        loginImageUploaded: false,
        loginImageData: null,
        loginImageFileName: '',

        icon192Uploaded: false,
        icon192Data: null,
        icon192FileName: '',

        webhooksEnabled: false,
        webhookUrl: '',
        webhookToken: ''
    });

    // File input refs
    const logoFileRef = useRef(null);
    const logoMiniFileRef = useRef(null);
    const loginBgFileRef = useRef(null);
    const icon32FileRef = useRef(null);
    const loginImageFileRef = useRef(null);
    const icon192FileRef = useRef(null);

    const tabs = [
        { id: 'basic', label: 'Basic' },
        { id: 'login', label: 'Login And Registration' },
        { id: 'logos', label: 'Logos And Favicons' },
        { id: 'style', label: 'Custom Style' },
        { id: 'webhooks', label: 'External Webhooks' }
    ];

    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleFileSelect = (e, fileType) => {
        const file = e.target.files[0];
        if (file) {
            console.log(`${fileType} file selected:`, file.name);

            const reader = new FileReader();
            reader.onload = (event) => {
                const typeMap = {
                    'Logo': 'logo',
                    'Logo Mini': 'logoMini',
                    'Login Background': 'loginBg',
                    'Icon 32x32': 'icon32',
                    'Login Image': 'loginImage',
                    'Icon 192x192': 'icon192'
                };

                const prefix = typeMap[fileType];
                if (prefix) {
                    setFormData(prev => ({
                        ...prev,
                        [`${prefix}Uploaded`]: true,
                        [`${prefix}Data`]: event.target.result,
                        [`${prefix}FileName`]: file.name,
                        // Maintain compatibility with existing logoId if needed
                        ...(prefix === 'logo' ? { logoId: Math.random().toString(36).substring(2, 15) + '...' } : {})
                    }));
                }
            };
            reader.readAsDataURL(file);
        }
        // Reset the input so the same file can be selected again
        e.target.value = '';
    };

    const triggerFileInput = (ref) => {
        ref.current?.click();
    };

    // Generic file delete handler
    const handleDeleteFile = (prefix) => {
        if (window.confirm(`Are you sure you want to delete this ${prefix.replace(/([A-Z])/g, ' $1').toLowerCase()}?`)) {
            setFormData(prev => ({
                ...prev,
                [`${prefix}Uploaded`]: false,
                [`${prefix}Data`]: null,
                [`${prefix}FileName`]: '',
                ...(prefix === 'logo' ? { logoId: '' } : {})
            }));
        }
    };

    // Generic file download handler
    const handleDownloadFile = (prefix) => {
        const data = formData[`${prefix}Data`];
        const fileName = formData[`${prefix}FileName`];

        if (data) {
            const link = document.createElement('a');
            link.href = data;
            link.download = fileName || `${prefix}.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            alert('No file uploaded for this slot.');
        }
    };

    // Helper component for file upload slots
    const FileSlot = ({ label, prefix, fileRef, fileType }) => {
        const isUploaded = formData[`${prefix}Uploaded`];
        const fileName = formData[`${prefix}FileName`];
        const fileData = formData[`${prefix}Data`];
        const logoId = prefix === 'logo' ? formData.logoId : null;

        return (
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-start gap-4">
                <label className="text-left md:text-right text-text-main text-sm font-medium pt-2">
                    {label}
                </label>
                <div className="max-w-md w-full">
                    {isUploaded ? (
                        <div className="border border-border rounded-lg p-4 bg-background">
                            <div className="flex items-center gap-4">
                                {fileData ? (
                                    <img
                                        src={fileData}
                                        alt={label}
                                        className="w-16 h-16 rounded-xl object-cover bg-surface-lighter"
                                    />
                                ) : (
                                    <div className="w-16 h-16 bg-amber-500 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                                        🪙
                                    </div>
                                )}
                                <div className="flex-1 min-w-0">
                                    <p className="text-xs text-text-muted font-mono truncate">
                                        {fileName || logoId}
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => handleDeleteFile(prefix)}
                                        className="p-2 text-danger hover:bg-danger/10 rounded transition-colors"
                                        title="Delete"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => handleDownloadFile(prefix)}
                                        className="p-2 text-text-muted hover:bg-surface-lighter rounded transition-colors"
                                        title="Download"
                                    >
                                        <Upload className="w-4 h-4 rotate-180" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div
                            className="border-2 border-dashed border-border rounded-lg p-8 text-center bg-background hover:bg-surface/30 transition-colors cursor-pointer"
                            onClick={() => triggerFileInput(fileRef)}
                        >
                            <div className="flex flex-col items-center gap-3">
                                <Upload className="w-10 h-10 text-text-muted/40" />
                                <button
                                    onClick={(e) => { e.stopPropagation(); triggerFileInput(fileRef); }}
                                    className="px-6 py-2 bg-[#5B7DBD] text-white rounded hover:bg-[#4A6BA8] transition-colors font-medium shadow-md text-sm"
                                >
                                    Browse
                                </button>
                                <p className="text-text-muted text-sm">Or drag file here</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    };

    const handleReset = () => {
        setFormData({
            poweredByText: 'https://docfirms.com/cloudlingers.com/ip',
            picName: 'yu9cd',
            siteTitle: 'iyu9cd',
            topMenu: false,
            contactUsEnabled: true,
            darkMode: true,
            contactUsLink: 'main.Contact.Us.Link',
            wordPressHost: 'Your WordPress Host',
            wordPressClientId: 'gPundROjXQ, 7vHPsmJ1Mp0pP7t1ufo/Rand',
            wordPressClientSecret: 'u8vKDQLj8DuC+ppg0FocZDck6v4yUOEzLq',
            menuStyle: 'dark',
            loginPageLayout: 'primary',
            baseColor: 'default',
            topBarColor: 'primary',
            language: 'english',
            itemsPerPage: 100,
            allowRegistration: false,
            registrationActivation: false,
            allowResetPassword: false,
            recaptchaEnabled: false,
            recaptchaSite: 'YOURGOOGLECAPTCHAsitekeyHERE',
            recaptchaSecret: 'YOURGOOGLECAPTCHAsecretHERE',
            logoUploaded: true,
            logoId: '6b5819e76b7328dd49607...',
            logoData: null,
            logoFileName: 'default_logo.png',
            logoMiniUploaded: false,
            logoMiniData: null,
            logoMiniFileName: '',
            loginBgUploaded: false,
            loginBgData: null,
            loginBgFileName: '',
            icon32Uploaded: false,
            icon32Data: null,
            icon32FileName: '',
            loginImageUploaded: false,
            loginImageData: null,
            loginImageFileName: '',
            icon192Uploaded: false,
            icon192Data: null,
            icon192FileName: '',
            webhooksEnabled: false,
            webhookUrl: '',
            webhookToken: ''
        });
    };

    const handleSetItemsPerPage = () => {
        alert(`Items per page set to: ${formData.itemsPerPage}`);
    };

    const handleSubmit = () => {
        setIsSaving(true);
        console.log('Settings Data:', formData);

        // Simulate API call
        setTimeout(() => {
            setIsSaving(false);
            alert('Settings Saved Successfully!');
        }, 800);
    };

    // Toggle Component
    const Toggle = ({ checked, onChange }) => (
        <div
            className={cn(
                "w-12 h-6 rounded-full relative cursor-pointer transition-colors duration-200 ease-in-out shadow-inner",
                checked ? "bg-[#5B7DBD]" : "bg-slate-300 dark:bg-slate-700"
            )}
            onClick={() => onChange(!checked)}
        >
            <div
                className={cn(
                    "absolute top-1 left-1 w-4 h-4 rounded-full bg-white shadow-md transition-transform duration-200 ease-in-out",
                    checked ? "translate-x-6" : "translate-x-0"
                )}
            />
        </div>
    );

    return (
        <div className="space-y-6 animate-in fade-in zoom-in duration-300">
            {/* Hidden file inputs */}
            <input
                ref={logoFileRef}
                type="file"
                accept="image/*"
                onChange={(e) => handleFileSelect(e, 'Logo')}
                className="hidden"
            />
            <input
                ref={logoMiniFileRef}
                type="file"
                accept="image/*"
                onChange={(e) => handleFileSelect(e, 'Logo Mini')}
                className="hidden"
            />
            <input
                ref={loginBgFileRef}
                type="file"
                accept="image/*"
                onChange={(e) => handleFileSelect(e, 'Login Background')}
                className="hidden"
            />
            <input
                ref={icon32FileRef}
                type="file"
                accept="image/*"
                onChange={(e) => handleFileSelect(e, 'Icon 32x32')}
                className="hidden"
            />
            <input
                ref={loginImageFileRef}
                type="file"
                accept="image/*"
                onChange={(e) => handleFileSelect(e, 'Login Image')}
                className="hidden"
            />
            <input
                ref={icon192FileRef}
                type="file"
                accept="image/*"
                onChange={(e) => handleFileSelect(e, 'Icon 192x192')}
                className="hidden"
            />

            {/* Header */}
            <div>
                <div className="flex items-center gap-2 mb-1">
                    <h1 className="text-2xl font-bold text-text-main">Dashboard Settings</h1>
                    <span className="text-text-muted text-sm border-l border-border pl-2">Dashboard Settings</span>
                    <a href="#" className="text-primary text-xs flex items-center gap-1 hover:underline ml-2">
                        Need Help? <HelpCircle className="w-3 h-3" />
                    </a>
                </div>
            </div>

            {/* Main Content Card */}
            <div className="glass-panel rounded-2xl border border-border overflow-hidden">
                {/* Tabs */}
                <div className="border-b border-border bg-surface/50">
                    <div className="flex overflow-x-auto">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={cn(
                                    "px-6 py-4 text-sm font-medium whitespace-nowrap transition-all border-b-2",
                                    activeTab === tab.id
                                        ? "text-[#5B7DBD] border-[#5B7DBD] bg-surface/50"
                                        : "text-text-muted border-transparent hover:text-text-main hover:bg-surface/30"
                                )}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab Content */}
                <div className="p-8">
                    {activeTab === 'basic' && (
                        <div className="space-y-6">
                            {/* Powered By Text */}
                            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-4">
                                <label className="text-left md:text-right text-text-main text-sm font-medium">
                                    Powered By Text
                                </label>
                                <div className="relative flex items-center max-w-2xl">
                                    <div className="absolute left-4 text-text-muted pointer-events-none">
                                        <Edit2 className="w-4 h-4" />
                                    </div>
                                    <input
                                        type="text"
                                        value={formData.poweredByText}
                                        onChange={(e) => handleInputChange('poweredByText', e.target.value)}
                                        className="w-full bg-background border border-border rounded pl-12 pr-4 py-2.5 text-sm text-text-main focus:outline-none focus:border-primary transition-colors"
                                    />
                                </div>
                            </div>

                            {/* Pic Name */}
                            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-4">
                                <label className="text-left md:text-right text-text-main text-sm font-medium">
                                    Pic Name
                                </label>
                                <div className="relative flex items-center max-w-2xl">
                                    <div className="absolute left-4 text-text-muted pointer-events-none">
                                        <Edit2 className="w-4 h-4" />
                                    </div>
                                    <input
                                        type="text"
                                        value={formData.picName}
                                        onChange={(e) => handleInputChange('picName', e.target.value)}
                                        className="w-full bg-background border border-border rounded pl-12 pr-4 py-2.5 text-sm text-text-main focus:outline-none focus:border-primary transition-colors"
                                    />
                                </div>
                            </div>

                            {/* Site Title */}
                            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-4">
                                <label className="text-left md:text-right text-text-main text-sm font-medium">
                                    Site Title
                                </label>
                                <div className="relative flex items-center max-w-2xl">
                                    <div className="absolute left-4 text-text-muted pointer-events-none">
                                        <Edit2 className="w-4 h-4" />
                                    </div>
                                    <input
                                        type="text"
                                        value={formData.siteTitle}
                                        onChange={(e) => handleInputChange('siteTitle', e.target.value)}
                                        className="w-full bg-background border border-border rounded pl-12 pr-4 py-2.5 text-sm text-text-main focus:outline-none focus:border-primary transition-colors"
                                    />
                                </div>
                            </div>

                            {/* Top Menu */}
                            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-4">
                                <label className="text-left md:text-right text-text-main text-sm font-medium">
                                    Top Menu
                                </label>
                                <Toggle checked={formData.topMenu} onChange={(val) => handleInputChange('topMenu', val)} />
                            </div>

                            {/* Contact Us Enabled */}
                            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-4">
                                <label className="text-left md:text-right text-text-main text-sm font-medium">
                                    Contact Us Enabled
                                </label>
                                <Toggle checked={formData.contactUsEnabled} onChange={(val) => handleInputChange('contactUsEnabled', val)} />
                            </div>

                            {/* Dark Mode Switch */}
                            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-4">
                                <label className="text-left md:text-right text-text-main text-sm font-medium">
                                    Dark Mode Switch
                                </label>
                                <Toggle checked={formData.darkMode} onChange={(val) => handleInputChange('darkMode', val)} />
                            </div>

                            {/* Contact Us Link */}
                            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-4">
                                <label className="text-left md:text-right text-text-main text-sm font-medium">
                                    Contact Us Link
                                </label>
                                <div className="relative flex items-center max-w-2xl">
                                    <div className="absolute left-4 text-text-muted pointer-events-none">
                                        <Edit2 className="w-4 h-4" />
                                    </div>
                                    <input
                                        type="text"
                                        value={formData.contactUsLink}
                                        onChange={(e) => handleInputChange('contactUsLink', e.target.value)}
                                        className="w-full bg-background border border-border rounded pl-12 pr-4 py-2.5 text-sm text-text-main focus:outline-none focus:border-primary transition-colors"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'login' && (
                        <div className="space-y-6">
                            {/* Allow Registration */}
                            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-4">
                                <label className="text-left md:text-right text-text-main text-sm font-medium">
                                    Allow Registration
                                </label>
                                <Toggle checked={formData.allowRegistration} onChange={(val) => handleInputChange('allowRegistration', val)} />
                            </div>

                            {/* Registration Activation Required */}
                            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-4">
                                <label className="text-left md:text-right text-text-main text-sm font-medium">
                                    Registration Activation Required
                                </label>
                                <Toggle checked={formData.registrationActivation} onChange={(val) => handleInputChange('registrationActivation', val)} />
                            </div>

                            {/* Allow Reset Password */}
                            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-4">
                                <label className="text-left md:text-right text-text-main text-sm font-medium">
                                    Allow Reset Password
                                </label>
                                <Toggle checked={formData.allowResetPassword} onChange={(val) => handleInputChange('allowResetPassword', val)} />
                            </div>

                            {/* ReCaptchaV2 Enabled */}
                            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-start gap-4">
                                <label className="text-left md:text-right text-text-main text-sm font-medium pt-1">
                                    ReCaptchaV2 Enabled
                                </label>
                                <div className="flex flex-col gap-2">
                                    <Toggle checked={formData.recaptchaEnabled} onChange={(val) => handleInputChange('recaptchaEnabled', val)} />
                                    <p className="text-xs text-text-muted flex items-center gap-1">
                                        <span className="w-4 h-4 rounded-full border border-text-muted flex items-center justify-center text-[10px]">ℹ</span>
                                        Applicable only during registration
                                    </p>
                                </div>
                            </div>

                            {/* ReCaptchaV2 Site */}
                            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-4">
                                <label className="text-left md:text-right text-text-main text-sm font-medium">
                                    ReCaptchaV2 Site
                                </label>
                                <div className="relative flex items-center max-w-2xl">
                                    <div className="absolute left-4 text-text-muted pointer-events-none">
                                        <Edit2 className="w-4 h-4" />
                                    </div>
                                    <input
                                        type="text"
                                        value={formData.recaptchaSite}
                                        onChange={(e) => handleInputChange('recaptchaSite', e.target.value)}
                                        className="w-full bg-background border border-border rounded pl-12 pr-4 py-2.5 text-sm text-text-main focus:outline-none focus:border-primary transition-colors"
                                    />
                                </div>
                            </div>

                            {/* ReCaptchaV2 Secret */}
                            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-4">
                                <label className="text-left md:text-right text-text-main text-sm font-medium">
                                    ReCaptchaV2 Secret
                                </label>
                                <div className="relative flex items-center max-w-2xl">
                                    <div className="absolute left-4 text-text-muted pointer-events-none">
                                        <Edit2 className="w-4 h-4" />
                                    </div>
                                    <input
                                        type="text"
                                        value={formData.recaptchaSecret}
                                        onChange={(e) => handleInputChange('recaptchaSecret', e.target.value)}
                                        className="w-full bg-background border border-border rounded pl-12 pr-4 py-2.5 text-sm text-text-main focus:outline-none focus:border-primary transition-colors"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'logos' && (
                        <div className="space-y-8">
                            <FileSlot label="Logo" prefix="logo" fileRef={logoFileRef} fileType="Logo" />
                            <FileSlot label="Logo Mini" prefix="logoMini" fileRef={logoMiniFileRef} fileType="Logo Mini" />

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <FileSlot label="Login Background Image" prefix="loginBg" fileRef={loginBgFileRef} fileType="Login Background" />
                                <FileSlot label="Icon Size Of 32x32" prefix="icon32" fileRef={icon32FileRef} fileType="Icon 32x32" />
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <FileSlot label="Login Image" prefix="loginImage" fileRef={loginImageFileRef} fileType="Login Image" />
                                <FileSlot label="Icon Size Of 192x192" prefix="icon192" fileRef={icon192FileRef} fileType="Icon 192x192" />
                            </div>
                        </div>
                    )}

                    {activeTab === 'style' && (
                        <div className="space-y-6">
                            {/* WordPress Host */}
                            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-4">
                                <label className="text-left md:text-right text-text-main text-sm font-medium">
                                    WordPress Host
                                </label>
                                <div className="relative flex items-center max-w-2xl">
                                    <div className="absolute left-4 text-text-muted pointer-events-none">
                                        <Edit2 className="w-4 h-4" />
                                    </div>
                                    <input
                                        type="text"
                                        value={formData.wordPressHost}
                                        onChange={(e) => handleInputChange('wordPressHost', e.target.value)}
                                        className="w-full bg-background border border-border rounded pl-12 pr-4 py-2.5 text-sm text-text-main focus:outline-none focus:border-primary transition-colors"
                                    />
                                </div>
                            </div>

                            {/* WordPress Client ID */}
                            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-4">
                                <label className="text-left md:text-right text-text-main text-sm font-medium">
                                    WordPress Client ID
                                </label>
                                <div className="relative flex items-center max-w-2xl">
                                    <div className="absolute left-4 text-text-muted pointer-events-none">
                                        <Edit2 className="w-4 h-4" />
                                    </div>
                                    <input
                                        type="text"
                                        value={formData.wordPressClientId}
                                        onChange={(e) => handleInputChange('wordPressClientId', e.target.value)}
                                        className="w-full bg-background border border-border rounded pl-12 pr-4 py-2.5 text-sm text-text-main focus:outline-none focus:border-primary transition-colors"
                                    />
                                </div>
                            </div>

                            {/* WordPress Client Secret */}
                            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-4">
                                <label className="text-left md:text-right text-text-main text-sm font-medium">
                                    WordPress Client Secret
                                </label>
                                <div className="relative flex items-center max-w-2xl">
                                    <div className="absolute left-4 text-text-muted pointer-events-none">
                                        <Edit2 className="w-4 h-4" />
                                    </div>
                                    <input
                                        type="text"
                                        value={formData.wordPressClientSecret}
                                        onChange={(e) => handleInputChange('wordPressClientSecret', e.target.value)}
                                        className="w-full bg-background border border-border rounded pl-12 pr-4 py-2.5 text-sm text-text-main focus:outline-none focus:border-primary transition-colors"
                                    />
                                </div>
                            </div>

                            {/* Menu Style */}
                            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-start gap-4">
                                <label className="text-left md:text-right text-text-main text-sm font-medium pt-2">
                                    Menu Style
                                </label>
                                <div className="flex gap-4">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="menuStyle"
                                            value="light"
                                            checked={formData.menuStyle === 'light'}
                                            onChange={(e) => handleInputChange('menuStyle', e.target.value)}
                                            className="w-4 h-4 text-[#5B7DBD] focus:ring-[#5B7DBD]"
                                        />
                                        <span className="text-sm text-text-main">Light</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="menuStyle"
                                            value="dark"
                                            checked={formData.menuStyle === 'dark'}
                                            onChange={(e) => handleInputChange('menuStyle', e.target.value)}
                                            className="w-4 h-4 text-[#5B7DBD] focus:ring-[#5B7DBD]"
                                        />
                                        <span className="text-sm text-text-main">Dark</span>
                                    </label>
                                </div>
                            </div>

                            {/* Login Page Layout */}
                            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-start gap-4">
                                <label className="text-left md:text-right text-text-main text-sm font-medium pt-2">
                                    Login Page Layout
                                </label>
                                <div className="flex gap-4">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="loginPageLayout"
                                            value="primary"
                                            checked={formData.loginPageLayout === 'primary'}
                                            onChange={(e) => handleInputChange('loginPageLayout', e.target.value)}
                                            className="w-4 h-4 text-[#5B7DBD] focus:ring-[#5B7DBD]"
                                        />
                                        <span className="text-sm text-text-main">Primary</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="loginPageLayout"
                                            value="left"
                                            checked={formData.loginPageLayout === 'left'}
                                            onChange={(e) => handleInputChange('loginPageLayout', e.target.value)}
                                            className="w-4 h-4 text-[#5B7DBD] focus:ring-[#5B7DBD]"
                                        />
                                        <span className="text-sm text-text-main">Left Aligned</span>
                                    </label>
                                </div>
                            </div>

                            {/* Base Color */}
                            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-start gap-4">
                                <label className="text-left md:text-right text-text-main text-sm font-medium pt-2">
                                    Base Color
                                </label>
                                <div className="flex flex-wrap gap-3">
                                    {['default', 'blue', 'light-blue', 'dark-blue', 'green', 'yellow', 'brown'].map((color) => (
                                        <label key={color} className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="baseColor"
                                                value={color}
                                                checked={formData.baseColor === color}
                                                onChange={(e) => handleInputChange('baseColor', e.target.value)}
                                                className="w-4 h-4 text-[#5B7DBD] focus:ring-[#5B7DBD]"
                                            />
                                            <span className="text-sm text-text-main capitalize">{color.replace('-', ' ')}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Top bar Color */}
                            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-start gap-4">
                                <label className="text-left md:text-right text-text-main text-sm font-medium pt-2">
                                    Top bar Color
                                </label>
                                <div className="flex flex-wrap gap-3">
                                    {['default', 'primary', 'blue', 'orange', 'green', 'dark'].map((color) => (
                                        <label key={color} className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="topBarColor"
                                                value={color}
                                                checked={formData.topBarColor === color}
                                                onChange={(e) => handleInputChange('topBarColor', e.target.value)}
                                                className="w-4 h-4 text-[#5B7DBD] focus:ring-[#5B7DBD]"
                                            />
                                            <span className="text-sm text-text-main capitalize">{color}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Language */}
                            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-start gap-4">
                                <label className="text-left md:text-right text-text-main text-sm font-medium pt-2">
                                    Language
                                </label>
                                <div className="flex flex-wrap gap-3">
                                    {['english', 'español', 'português', 'japanese'].map((lang) => (
                                        <label key={lang} className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="language"
                                                value={lang}
                                                checked={formData.language === lang}
                                                onChange={(e) => handleInputChange('language', e.target.value)}
                                                className="w-4 h-4 text-[#5B7DBD] focus:ring-[#5B7DBD]"
                                            />
                                            <span className="text-sm text-text-main capitalize">{lang}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Number of items per page */}
                            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-4">
                                <label className="text-left md:text-right text-text-main text-sm font-medium">
                                    Number Of Items Per Page
                                </label>
                                <div className="flex items-center gap-3">
                                    <input
                                        type="number"
                                        value={formData.itemsPerPage}
                                        onChange={(e) => handleInputChange('itemsPerPage', parseInt(e.target.value) || 0)}
                                        className="w-32 bg-background border border-border rounded px-4 py-2 text-sm text-text-main focus:outline-none focus:border-primary transition-colors"
                                    />
                                    <button
                                        onClick={handleSetItemsPerPage}
                                        className="px-4 py-2 bg-[#5B7DBD] text-white rounded hover:bg-[#4A6BA8] transition-colors text-sm font-medium"
                                    >
                                        Set
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'webhooks' && (
                        <div className="space-y-6">
                            {/* Enable External Webhooks */}
                            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-4">
                                <label className="text-left md:text-right text-text-main text-sm font-medium">
                                    Enable External Webhooks
                                </label>
                                <Toggle checked={formData.webhooksEnabled} onChange={(val) => handleInputChange('webhooksEnabled', val)} />
                            </div>

                            {/* Webhook URL */}
                            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-center gap-4">
                                <label className="text-left md:text-right text-text-main text-sm font-medium">
                                    Webhook URL
                                </label>
                                <div className="relative flex items-center max-w-2xl">
                                    <div className="absolute left-4 text-text-muted pointer-events-none">
                                        <Edit2 className="w-4 h-4" />
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Input Webhook URL"
                                        value={formData.webhookUrl}
                                        onChange={(e) => handleInputChange('webhookUrl', e.target.value)}
                                        className="w-full bg-background border border-border rounded pl-12 pr-4 py-2.5 text-sm text-text-main focus:outline-none focus:border-primary transition-colors placeholder:text-text-muted/50"
                                    />
                                </div>
                            </div>

                            {/* Webhook Token */}
                            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] items-start gap-4">
                                <label className="text-left md:text-right text-text-main text-sm font-medium pt-2">
                                    Webhook Token
                                </label>
                                <div className="flex flex-col gap-2 max-w-2xl">
                                    <div className="relative flex items-center">
                                        <div className="absolute left-4 text-text-muted pointer-events-none">
                                            <Edit2 className="w-4 h-4" />
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Input Webhook Token"
                                            value={formData.webhookToken}
                                            onChange={(e) => handleInputChange('webhookToken', e.target.value)}
                                            className="w-full bg-background border border-border rounded pl-12 pr-4 py-2.5 text-sm text-text-main focus:outline-none focus:border-primary transition-colors placeholder:text-text-muted/50"
                                        />
                                    </div>
                                    <p className="text-xs text-text-muted flex items-center gap-1">
                                        <span className="w-4 h-4 rounded-full border border-text-muted flex items-center justify-center text-[10px]">ℹ</span>
                                        Will be sent in Header. Format: "Bearer 'token'"
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-start gap-3 px-8 py-6 border-t border-border bg-surface/30">
                    <button
                        onClick={handleReset}
                        className="flex items-center gap-2 px-6 py-2 bg-white dark:bg-surface border border-border rounded text-text-main hover:bg-surface-lighter transition-colors text-sm font-medium"
                    >
                        <RefreshCw className="w-4 h-4" />
                        Reset
                    </button>
                    <button
                        onClick={handleSubmit}
                        disabled={isSaving}
                        className={cn(
                            "flex items-center gap-2 px-8 py-2.5 bg-[#5B7DBD] text-white rounded hover:bg-[#4A6BA8] transition-all font-bold shadow-lg shadow-[#5B7DBD]/20 disabled:opacity-70 disabled:cursor-not-allowed",
                            isSaving && "animate-pulse"
                        )}
                    >
                        {isSaving ? (
                            <>
                                <RefreshCw className="w-4 h-4 animate-spin" />
                                Saving...
                            </>
                        ) : (
                            'Submit'
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DashboardSettings;
