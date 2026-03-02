import React, { useState } from 'react';
import {
    HelpCircle,
    List,
    Upload,
    Plus,
    Minus,
    RotateCcw,
    Save,
    Pencil,
    FileText
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../lib/utils';

const CreateCertificateTemplate = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        creator: 'Funded',
        author: 'Funded',
        subject: 'Funded',
        keywords: 'Funded',
        fontSize: 120,
        textColor: '',
        fontType: 'Regular', // Regular or Custom
        fontName: 'helvetica',
        signature: '',
        qrCode: 'No',
        usernameX: 900,
        usernameY: 1150,
        usernameWidth: 2200
    });

    const handleIncrement = (field) => {
        setFormData(prev => ({ ...prev, [field]: prev[field] + 1 }));
    };

    const handleDecrement = (field) => {
        setFormData(prev => ({ ...prev, [field]: Math.max(0, prev[field] - 1) }));
    };

    const handleReset = () => {
        setFormData({
            name: '',
            creator: 'Funded',
            author: 'Funded',
            subject: 'Funded',
            keywords: 'Funded',
            fontSize: 120,
            textColor: '',
            fontType: 'Regular',
            fontName: 'helvetica',
            signature: '',
            qrCode: 'No',
            usernameX: 900,
            usernameY: 1150,
            usernameWidth: 2200
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitting:', formData);
        alert('Certificate template created successfully!');
        navigate('/certificate-templates/general');
    };

    return (
        <div className="space-y-6 animate-in fade-in zoom-in duration-300">
            {/* Header */}
            <div className="flex items-center gap-2 mb-6">
                <h1 className="text-2xl font-bold text-text-main">General Certificate Templates</h1>
                <a href="#" className="text-primary text-xs flex items-center gap-1 hover:underline ml-2">
                    Need Help? <HelpCircle className="w-3 h-3" />
                </a>
            </div>

            {/* Form Card */}
            <div className="glass-panel rounded-2xl border border-border overflow-hidden bg-surface">
                {/* Internal Header */}
                <div className="p-4 border-b border-border flex justify-between items-center bg-surface/50">
                    <h2 className="text-sm font-medium text-text-main">Create</h2>
                    <button
                        onClick={() => navigate('/certificate-templates/general')}
                        className="flex items-center gap-2 px-4 py-1.5 bg-[#5d6bb3] text-white rounded text-xs font-medium hover:bg-[#4d5999] transition-colors"
                    >
                        <List className="w-3 h-3" />
                        List
                    </button>
                </div>

                {/* Form Body */}
                <form onSubmit={handleSubmit} className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                        {/* Left Column - Template & Font */}
                        <div className="lg:col-span-3 space-y-8">
                            <div>
                                <label className="text-xs font-medium text-text-main mb-4 block">
                                    <span className="text-danger mr-1">*</span> Png Template File
                                </label>
                                <div className="border-2 border-dashed border-border rounded-xl p-8 flex flex-col items-center justify-center gap-4 bg-surface-lighter/10 hover:bg-surface-lighter/20 transition-colors cursor-pointer group">
                                    <div className="w-12 h-12 rounded-full bg-surface-lighter flex items-center justify-center text-text-muted group-hover:text-primary transition-colors">
                                        <Upload className="w-6 h-6" />
                                    </div>
                                    <button type="button" className="px-6 py-2 bg-[#5d6bb3] text-white rounded text-xs font-bold hover:bg-[#4d5999] transition-colors shadow-lg">
                                        Browse
                                    </button>
                                    <p className="text-[10px] text-text-muted">Or drag file here</p>
                                </div>
                                <p className="text-[10px] text-text-muted mt-4 leading-relaxed">
                                    <HelpCircle className="w-3 h-3 inline mr-1" />
                                    Dimensions: 3508x2480, to download demo template <a href="#" className="text-primary hover:underline">click</a>
                                </p>
                            </div>

                            <div className="pt-4">
                                <h3 className="text-xs font-bold text-text-muted uppercase tracking-wider mb-6 text-center">Font Settings</h3>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <label className="w-20 text-right text-[11px] text-text-muted leading-tight">Font Size</label>
                                        <div className="flex-1 flex items-center h-9">
                                            <button type="button" onClick={() => handleDecrement('fontSize')} className="h-full w-9 flex items-center justify-center border border-border rounded-l-lg bg-surface hover:bg-surface-lighter text-text-muted">
                                                <Minus className="w-3 h-3" />
                                            </button>
                                            <input type="number" value={formData.fontSize} className="flex-1 h-full border-t border-b border-border bg-surface text-center text-xs text-text-main focus:outline-none" />
                                            <button type="button" onClick={() => handleIncrement('fontSize')} className="h-full w-9 flex items-center justify-center bg-[#5d6bb3] text-white rounded-r-lg hover:bg-[#4d5999]">
                                                <Plus className="w-3 h-3" />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <label className="w-20 text-right text-[11px] text-text-muted leading-tight">Text Color</label>
                                        <div className="flex-1">
                                            <input type="text" placeholder="Input text color" className="w-full h-9 bg-surface border border-border rounded-lg px-3 text-xs text-text-main focus:outline-none focus:border-primary" />
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <label className="w-20 text-right text-[11px] text-text-muted leading-tight">Font Type</label>
                                        <div className="flex-1 flex items-center gap-6">
                                            <label className="flex items-center gap-2 cursor-pointer">
                                                <input type="radio" name="fontType" checked={formData.fontType === 'Regular'} onChange={() => setFormData({ ...formData, fontType: 'Regular' })} className="sr-only" />
                                                <div className={cn("w-4 h-4 rounded-full border-2 border-border flex items-center justify-center", formData.fontType === 'Regular' && "border-[#5d6bb3]")}>
                                                    {formData.fontType === 'Regular' && <div className="w-2 h-2 rounded-full bg-[#5d6bb3]"></div>}
                                                </div>
                                                <span className="text-[11px] text-text-main">Regular</span>
                                            </label>
                                            <label className="flex items-center gap-2 cursor-pointer">
                                                <input type="radio" name="fontType" checked={formData.fontType === 'Custom'} onChange={() => setFormData({ ...formData, fontType: 'Custom' })} className="sr-only" />
                                                <div className={cn("w-4 h-4 rounded-full border-2 border-border flex items-center justify-center", formData.fontType === 'Custom' && "border-[#5d6bb3]")}>
                                                    {formData.fontType === 'Custom' && <div className="w-2 h-2 rounded-full bg-[#5d6bb3]"></div>}
                                                </div>
                                                <span className="text-[11px] text-text-main">Custom</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <label className="w-20 text-right text-[11px] text-text-muted leading-tight">Font Name</label>
                                        <div className="flex-1 flex items-center h-9">
                                            <div className="h-full w-9 flex items-center justify-center border border-r-0 border-border rounded-l-lg bg-surface text-text-muted">
                                                <Pencil className="w-3.5 h-3.5" />
                                            </div>
                                            <input type="text" value={formData.fontName} readOnly className="flex-1 h-full border border-border rounded-r-lg bg-surface px-3 text-xs text-text-main" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Middle Column - Properties & Security */}
                        <div className="lg:col-span-4 space-y-10 border-x border-border/50 px-8">
                            <div>
                                <h3 className="text-xs font-bold text-text-muted uppercase tracking-wider mb-8 text-center">Document Properties</h3>
                                <div className="space-y-6">
                                    {[
                                        { label: 'Name', key: 'name', placeholder: 'Input name', required: true },
                                        { label: 'Creator', key: 'creator' },
                                        { label: 'Author', key: 'author' },
                                        { label: 'Subject', key: 'subject' },
                                        { label: 'Keywords', key: 'keywords' }
                                    ].map((field) => (
                                        <div key={field.key} className="flex items-center gap-4">
                                            <label className="w-20 text-right text-[11px] text-text-muted leading-tight">
                                                {field.required && <span className="text-danger mr-1">*</span>}
                                                {field.label}
                                            </label>
                                            <div className="flex-1 flex items-center h-9">
                                                <div className="h-full w-9 flex items-center justify-center border border-r-0 border-border rounded-l-lg bg-surface text-text-muted">
                                                    <Pencil className="w-3.5 h-3.5" />
                                                </div>
                                                <input
                                                    type="text"
                                                    value={formData[field.key]}
                                                    onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                                                    placeholder={field.placeholder || ''}
                                                    className="flex-1 h-full border border-border rounded-r-lg bg-surface px-3 text-xs text-text-main focus:outline-none focus:border-primary transition-colors placeholder:text-text-muted/50"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-4">
                                <h3 className="text-xs font-bold text-text-muted uppercase tracking-wider mb-8 text-center">Signature</h3>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <label className="w-20 text-right text-[11px] text-text-muted leading-tight">Signature</label>
                                        <div className="flex-1 space-y-2">
                                            <select className="w-full h-10 bg-surface border border-border rounded-lg px-4 text-xs text-text-muted focus:outline-none focus:border-primary appearance-none">
                                                <option>Signature</option>
                                            </select>
                                            <p className="text-[10px] text-text-muted leading-relaxed">
                                                <HelpCircle className="w-3.5 h-3.5 inline mr-1" />
                                                Certificate Signature. To manage certificate signatures <a href="#" className="text-primary hover:underline">click</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4">
                                <h3 className="text-xs font-bold text-text-muted uppercase tracking-wider mb-8 text-center">QR Code Settings</h3>
                                <div className="flex items-center gap-4">
                                    <label className="w-20 text-right text-[11px] text-text-muted leading-tight">QR Code?</label>
                                    <div className="flex items-center gap-6">
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input type="radio" name="qrCode" checked={formData.qrCode === 'No'} onChange={() => setFormData({ ...formData, qrCode: 'No' })} className="sr-only" />
                                            <div className={cn("w-4 h-4 rounded-full border-2 border-border flex items-center justify-center", formData.qrCode === 'No' && "border-[#5d6bb3]")}>
                                                {formData.qrCode === 'No' && <div className="w-2 h-2 rounded-full bg-[#5d6bb3]"></div>}
                                            </div>
                                            <span className="text-[11px] text-text-main">No</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input type="radio" name="qrCode" checked={formData.qrCode === 'Yes'} onChange={() => setFormData({ ...formData, qrCode: 'Yes' })} className="sr-only" />
                                            <div className={cn("w-4 h-4 rounded-full border-2 border-border flex items-center justify-center", formData.qrCode === 'Yes' && "border-[#5d6bb3]")}>
                                                {formData.qrCode === 'Yes' && <div className="w-2 h-2 rounded-full bg-[#5d6bb3]"></div>}
                                            </div>
                                            <span className="text-[11px] text-text-main">Yes</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Positioning */}
                        <div className="lg:col-span-5 space-y-10 pl-4">
                            <div>
                                <h3 className="text-xs font-bold text-text-muted uppercase tracking-wider mb-8 text-center">User Name Position Settings</h3>
                                <div className="space-y-6">
                                    {[
                                        { label: 'Username X', key: 'usernameX' },
                                        { label: 'Username Y', key: 'usernameY' },
                                        { label: 'Username Width', key: 'usernameWidth', last: true }
                                    ].map((field) => (
                                        <div key={field.key} className="flex items-center gap-4">
                                            <label className="w-16 text-right text-[11px] text-text-muted leading-tight">
                                                <span className="text-danger mr-1">*</span>
                                                {field.label}
                                            </label>
                                            <div className="flex-1 flex items-center h-9 max-w-[300px]">
                                                <button type="button" onClick={() => handleDecrement(field.key)} className="h-full w-10 flex items-center justify-center border border-border rounded-l-lg bg-surface hover:bg-surface-lighter text-text-muted transition-colors">
                                                    <Minus className="w-3.5 h-3.5" />
                                                </button>
                                                <input
                                                    type="number"
                                                    value={formData[field.key]}
                                                    onChange={(e) => setFormData({ ...formData, [field.key]: parseInt(e.target.value) || 0 })}
                                                    className="flex-1 h-full border-t border-b border-border bg-surface text-center text-xs text-text-main focus:outline-none"
                                                />
                                                <button type="button" onClick={() => handleIncrement(field.key)} className="h-full w-10 flex items-center justify-center bg-[#5d6bb3] border border-[#5d6bb3] rounded-r-lg text-white hover:bg-[#4d5999] transition-colors">
                                                    <Plus className="w-3.5 h-3.5" />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-12 flex justify-center lg:justify-start lg:pl-20">
                                    <button type="button" className="flex items-center gap-2 px-6 py-2.5 bg-[#5d6bb3] text-white rounded text-xs font-bold hover:bg-[#4d5999] transition-all shadow-lg shadow-primary/20">
                                        <FileText className="w-4 h-4" />
                                        Generate Test PDF
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

                {/* Footer Actions */}
                <div className="p-6 border-t border-border flex justify-between items-center bg-surface/50">
                    <button
                        type="button"
                        onClick={handleReset}
                        className="flex items-center gap-2 px-6 py-2 bg-surface text-text-muted border border-border rounded text-xs font-bold hover:bg-surface-lighter transition-colors"
                    >
                        <RotateCcw className="w-4 h-4" />
                        Reset
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="flex items-center gap-2 px-10 py-2.5 bg-[#5d6bb3] text-white rounded text-xs font-bold hover:bg-[#4d5999] transition-all shadow-lg shadow-primary/30"
                    >
                        <Save className="w-4 h-4" />
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateCertificateTemplate;
