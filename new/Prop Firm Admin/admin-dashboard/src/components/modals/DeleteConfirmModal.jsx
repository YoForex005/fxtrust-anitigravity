import React from 'react';
import { HelpCircle } from 'lucide-react';

const DeleteConfirmModal = ({ isOpen, onConfirm, onCancel, itemId, itemName }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-in fade-in duration-200">
            {/* Modal Container */}
            <div className="w-full max-w-md bg-white rounded-lg shadow-2xl animate-in zoom-in-95 duration-200">

                {/* Icon */}
                <div className="flex justify-center pt-8 pb-4">
                    <div className="w-20 h-20 rounded-full border-4 border-gray-300 flex items-center justify-center">
                        <HelpCircle className="w-12 h-12 text-gray-400" strokeWidth={1.5} />
                    </div>
                </div>

                {/* Content */}
                <div className="px-6 pb-6 text-center">
                    <h3 className="text-xl text-gray-800 mb-3">
                        Are you sure to delete this item ?
                    </h3>
                    <p className="text-gray-600 text-sm mb-6">
                        ID - {itemId}
                    </p>

                    {/* Buttons */}
                    <div className="flex justify-center gap-3">
                        <button
                            onClick={onConfirm}
                            className="px-6 py-2 bg-[#5B7DBD] text-white rounded hover:bg-[#4A6BA8] transition-colors font-medium"
                        >
                            Confirm
                        </button>
                        <button
                            onClick={onCancel}
                            className="px-6 py-2 bg-white border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors font-medium"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;
