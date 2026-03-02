import React, { useState } from 'react';
import { Upload, X, List, RefreshCw, Plus, Minus, Maximize2, Minimize2 } from 'lucide-react';
import { cn } from '../../lib/utils';

const NewCertificateTemplateModal = ({ isOpen, onClose }) => {
    const [isMinimized, setIsMinimized] = useState(false);
    const [isMaximized, setIsMaximized] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        creator: 'Funded',
        author: 'Funded',
        subject: 'Funded',
        keywords: 'Funded',
        signature: '',
        qrCode: 'no',
        fontType: 'regular',
        fontName: 'helvetica',
        fontSize: 120,
        textColor: '',
        usernameX: 300,
        usernameY: 1150,
        usernameWidth: 2200
    });

    if (!isOpen) return null;

    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleSubmit = () => {
        console.log('Certificate template data:', formData);
        alert('Certificate template created!');
        onClose();
    };

    const handleReset = () => {
        setFormData({
            name: '',
            creator: 'Funded',
            author: 'Funded',
            subject: 'Funded',
            keywords: 'Funded',
            signature: '',
            qrCode: 'no',
            fontType: 'regular',
            fontName: 'helvetica',
            fontSize: 120,
            textColor: '',
            usernameX: 300,
            usernameY: 1150,
            usernameWidth: 2200
        });
    };

    return (
        <div className={cn(
            "fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-in fade-in duration-200",
            isMinimized && "pointer-events-none items-end justify-end p-6"
        )}>
            {/* Modal Container */}
            <div className={cn(
                "bg-surface border border-border shadow-2xl animate-in zoom-in-95 duration-200 transition-all overflow-hidden flex flex-col",
                isMaximized
                    ? "fixed inset-0 w-full max-w-none h-full rounded-none"
                    : "w-full max-w-6xl rounded-lg",
                isMinimized
                    ? "w-72 h-auto pointer-events-auto"
                    : "max-h-[90vh]"
            )}>

                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-surface sticky top-0 z-10">
                    <h2 className="text-lg font-medium text-text-main">New</h2>
                    <div className="flex items-center gap-4 text-text-muted">
                        <button
                            onClick={() => setIsMinimized(!isMinimized)}
                            className="hover:text-text-main transition-colors p-1 hover:bg-surface-lighter rounded"
                            title={isMinimized ? "Restore" : "Minimize"}
                        >
                            <Minus className="w-4 h-4" />
                        </button>
                        <button
                            onClick={() => {
                                setIsMaximized(!isMaximized);
                                setIsMinimized(false);
                            }}
                            className="hover:text-text-main transition-colors p-1 hover:bg-surface-lighter rounded"
                            title={isMaximized ? "Restore" : "Maximize"}
                        >
                            {isMaximized ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                        </button>
                        <button
                            onClick={onClose}
                            className="hover:text-text-main transition-colors p-1 hover:bg-surface-lighter rounded"
                            title="Close"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {!isMinimized && (
                    <>

                        {/* Body */}
                        <div className="p-6">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                                {/* Left Column - PNG Template File & Font Settings */}
                                <div className="space-y-6">
                                    {/* PNG Template File */}
                                    <div>
                                        <label className="block text-sm font-medium text-text-main mb-2">
                                            <span className="text-danger">*</span> Png Template File
                                        </label>
                                        <div className="border-2 border-dashed border-border rounded-lg p-8 text-center bg-background">
                                            <Upload className="w-12 h-12 text-text-muted mx-auto mb-3" />
                                            <button className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors text-sm font-medium mb-2">
                                                Browse
                                            </button>
                                            <p className="text-xs text-text-muted">or drag file here</p>
                                            <p className="text-xs text-orange-500 mt-2">
                                                ⚠ Dimensions: 3508x2480. To download demo template click
                                            </p>
                                        </div>
                                    </div>

                                    {/* Font Settings */}
                                    <div className="border border-border rounded-lg p-4 bg-surface/50">
                                        <h3 className="text-sm font-medium text-text-main mb-4">Font Settings</h3>

                                        <div className="space-y-3">
                                            {/* Font Size */}
                                            <div className="flex items-center justify-between">
                                                <label className="text-sm text-text-muted">Font Size</label>
                                                <div className="flex items-center gap-2">
                                                    <input
                                                        type="number"
                                                        value={formData.fontSize}
                                                        onChange={(e) => handleInputChange('fontSize', e.target.value)}
                                                        className="w-20 bg-background border border-border rounded px-2 py-1 text-sm text-text-main text-center focus:outline-none focus:border-primary"
                                                    />
                                                    <button className="p-1 bg-primary text-white rounded hover:bg-primary/90">
                                                        <Plus className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Text Color */}
                                            <div>
                                                <label className="block text-sm text-text-muted mb-1">Text Color</label>
                                                <input
                                                    type="text"
                                                    placeholder="Input text color"
                                                    value={formData.textColor}
                                                    onChange={(e) => handleInputChange('textColor', e.target.value)}
                                                    className="w-full bg-background border border-border rounded px-3 py-1.5 text-sm text-text-main focus:outline-none focus:border-primary"
                                                />
                                            </div>

                                            {/* Font Type */}
                                            <div>
                                                <label className="block text-sm text-text-muted mb-2">Font Type</label>
                                                <div className="space-y-2">
                                                    <label className="flex items-center gap-2">
                                                        <input
                                                            type="radio"
                                                            name="fontType"
                                                            value="regular"
                                                            checked={formData.fontType === 'regular'}
                                                            onChange={(e) => handleInputChange('fontType', e.target.value)}
                                                            className="text-primary focus:ring-primary"
                                                        />
                                                        <span className="text-sm text-text-main">Regular</span>
                                                    </label>
                                                    <label className="flex items-center gap-2">
                                                        <input
                                                            type="radio"
                                                            name="fontType"
                                                            value="custom"
                                                            checked={formData.fontType === 'custom'}
                                                            onChange={(e) => handleInputChange('fontType', e.target.value)}
                                                            className="text-primary focus:ring-primary"
                                                        />
                                                        <span className="text-sm text-text-main">Custom</span>
                                                    </label>
                                                </div>
                                            </div>

                                            {/* Font Name */}
                                            <div>
                                                <label className="block text-sm text-text-muted mb-1">Font Name</label>
                                                <input
                                                    type="text"
                                                    value={formData.fontName}
                                                    onChange={(e) => handleInputChange('fontName', e.target.value)}
                                                    className="w-full bg-background border border-border rounded px-3 py-1.5 text-sm text-text-main focus:outline-none focus:border-primary"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Middle Column - Document Properties, Signature, QR Code */}
                                <div className="space-y-6">
                                    {/* Document Properties */}
                                    <div className="border border-border rounded-lg p-4 bg-surface/50">
                                        <h3 className="text-sm font-medium text-text-main mb-4">Document Properties</h3>

                                        <div className="space-y-3">
                                            {/* Name */}
                                            <div className="grid grid-cols-[80px_1fr] items-center gap-2">
                                                <label className="text-sm text-text-main">
                                                    <span className="text-danger">*</span> Name
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Input name"
                                                    value={formData.name}
                                                    onChange={(e) => handleInputChange('name', e.target.value)}
                                                    className="bg-background border border-border rounded px-3 py-1.5 text-sm text-text-main focus:outline-none focus:border-primary"
                                                />
                                            </div>

                                            {/* Creator */}
                                            <div className="grid grid-cols-[80px_1fr] items-center gap-2">
                                                <label className="text-sm text-text-muted">Creator</label>
                                                <input
                                                    type="text"
                                                    value={formData.creator}
                                                    onChange={(e) => handleInputChange('creator', e.target.value)}
                                                    className="bg-background border border-border rounded px-3 py-1.5 text-sm text-text-main focus:outline-none focus:border-primary"
                                                />
                                            </div>

                                            {/* Author */}
                                            <div className="grid grid-cols-[80px_1fr] items-center gap-2">
                                                <label className="text-sm text-text-muted">Author</label>
                                                <input
                                                    type="text"
                                                    value={formData.author}
                                                    onChange={(e) => handleInputChange('author', e.target.value)}
                                                    className="bg-background border border-border rounded px-3 py-1.5 text-sm text-text-main focus:outline-none focus:border-primary"
                                                />
                                            </div>

                                            {/* Subject */}
                                            <div className="grid grid-cols-[80px_1fr] items-center gap-2">
                                                <label className="text-sm text-text-muted">Subject</label>
                                                <input
                                                    type="text"
                                                    value={formData.subject}
                                                    onChange={(e) => handleInputChange('subject', e.target.value)}
                                                    className="bg-background border border-border rounded px-3 py-1.5 text-sm text-text-main focus:outline-none focus:border-primary"
                                                />
                                            </div>

                                            {/* Keywords */}
                                            <div className="grid grid-cols-[80px_1fr] items-center gap-2">
                                                <label className="text-sm text-text-muted">Keywords</label>
                                                <input
                                                    type="text"
                                                    value={formData.keywords}
                                                    onChange={(e) => handleInputChange('keywords', e.target.value)}
                                                    className="bg-background border border-border rounded px-3 py-1.5 text-sm text-text-main focus:outline-none focus:border-primary"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Signature */}
                                    <div className="border border-border rounded-lg p-4 bg-surface/50">
                                        <h3 className="text-sm font-medium text-text-main mb-3">Signature</h3>
                                        <select
                                            value={formData.signature}
                                            onChange={(e) => handleInputChange('signature', e.target.value)}
                                            className="w-full bg-background border border-border rounded px-3 py-2 text-sm text-text-main focus:outline-none focus:border-primary"
                                        >
                                            <option value="">Signature</option>
                                            <option value="Steve loten">Steve loten</option>
                                            <option value="John Doe">John Doe</option>
                                        </select>
                                        <p className="text-xs text-text-muted mt-2">
                                            ⓘ Certificate Signature. To manage certificate signatures click
                                        </p>
                                    </div>

                                    {/* QR Code Settings */}
                                    <div className="border border-border rounded-lg p-4 bg-surface/50">
                                        <h3 className="text-sm font-medium text-text-main mb-3">QR Code Settings</h3>
                                        <div className="flex items-center gap-4">
                                            <label className="text-sm text-text-muted">QR Code?</label>
                                            <div className="flex items-center gap-3">
                                                <label className="flex items-center gap-2">
                                                    <input
                                                        type="radio"
                                                        name="qrCode"
                                                        value="no"
                                                        checked={formData.qrCode === 'no'}
                                                        onChange={(e) => handleInputChange('qrCode', e.target.value)}
                                                        className="text-primary focus:ring-primary"
                                                    />
                                                    <span className="text-sm text-text-main">No</span>
                                                </label>
                                                <label className="flex items-center gap-2">
                                                    <input
                                                        type="radio"
                                                        name="qrCode"
                                                        value="yes"
                                                        checked={formData.qrCode === 'yes'}
                                                        onChange={(e) => handleInputChange('qrCode', e.target.value)}
                                                        className="text-primary focus:ring-primary"
                                                    />
                                                    <span className="text-sm text-text-main">Yes</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column - User Name Position Settings */}
                                <div className="space-y-4">
                                    <div className="border border-border rounded-lg p-4 bg-surface/50">
                                        <h3 className="text-sm font-medium text-text-main mb-4">User Name Position Settings</h3>

                                        <div className="space-y-4">
                                            {/* Username X */}
                                            <div>
                                                <div className="flex items-center justify-between mb-2">
                                                    <label className="text-sm text-text-main">
                                                        <span className="text-danger">*</span> Username X
                                                    </label>
                                                    <div className="flex items-center gap-2">
                                                        <button className="p-1 bg-surface border border-border rounded hover:bg-surface-lighter">
                                                            <Minus className="w-3 h-3 text-text-muted" />
                                                        </button>
                                                        <input
                                                            type="number"
                                                            value={formData.usernameX}
                                                            onChange={(e) => handleInputChange('usernameX', e.target.value)}
                                                            className="w-20 bg-background border border-border rounded px-2 py-1 text-sm text-text-main text-center focus:outline-none focus:border-primary"
                                                        />
                                                        <button className="p-1 bg-primary text-white rounded hover:bg-primary/90">
                                                            <Plus className="w-3 h-3" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Username Y */}
                                            <div>
                                                <div className="flex items-center justify-between mb-2">
                                                    <label className="text-sm text-text-main">
                                                        <span className="text-danger">*</span> Username Y
                                                    </label>
                                                    <div className="flex items-center gap-2">
                                                        <button className="p-1 bg-surface border border-border rounded hover:bg-surface-lighter">
                                                            <Minus className="w-3 h-3 text-text-muted" />
                                                        </button>
                                                        <input
                                                            type="number"
                                                            value={formData.usernameY}
                                                            onChange={(e) => handleInputChange('usernameY', e.target.value)}
                                                            className="w-20 bg-background border border-border rounded px-2 py-1 text-sm text-text-main text-center focus:outline-none focus:border-primary"
                                                        />
                                                        <button className="p-1 bg-primary text-white rounded hover:bg-primary/90">
                                                            <Plus className="w-3 h-3" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Username Width */}
                                            <div>
                                                <div className="flex items-center justify-between mb-2">
                                                    <label className="text-sm text-text-main">
                                                        <span className="text-danger">*</span> Username Width
                                                    </label>
                                                    <div className="flex items-center gap-2">
                                                        <button className="p-1 bg-surface border border-border rounded hover:bg-surface-lighter">
                                                            <Minus className="w-3 h-3 text-text-muted" />
                                                        </button>
                                                        <input
                                                            type="number"
                                                            value={formData.usernameWidth}
                                                            onChange={(e) => handleInputChange('usernameWidth', e.target.value)}
                                                            className="w-20 bg-background border border-border rounded px-2 py-1 text-sm text-text-main text-center focus:outline-none focus:border-primary"
                                                        />
                                                        <button className="p-1 bg-primary text-white rounded hover:bg-primary/90">
                                                            <Plus className="w-3 h-3" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Generate Tree PDF Button */}
                                            <button className="w-full px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors text-sm font-medium mt-4">
                                                Generate Tree PDF
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-center gap-3 px-6 py-4 border-t border-border bg-surface sticky bottom-0">
                            <button
                                onClick={handleReset}
                                className="flex items-center gap-2 px-4 py-2 border border-border rounded text-text-main hover:bg-surface-lighter transition-colors text-sm font-medium"
                            >
                                <RefreshCw className="w-4 h-4" />
                                Reset
                            </button>
                            <button
                                onClick={handleSubmit}
                                className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors text-sm font-bold shadow-lg shadow-primary/20"
                            >
                                Submit
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default NewCertificateTemplateModal;
