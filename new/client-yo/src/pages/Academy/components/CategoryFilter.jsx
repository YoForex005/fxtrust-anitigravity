import React from 'react';

const CategoryFilter = ({ categories, activeCategory, onChange }) => {
    return (
        <div className="flex flex-wrap items-center gap-2 mb-8">
            {categories.map((cat) => (
                <button
                    key={cat.id}
                    onClick={() => onChange(cat.id)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 border ${activeCategory === cat.id
                            ? 'bg-gray-900 dark:bg-white text-white dark:text-black border-gray-900 dark:border-white shadow-lg shadow-black/5 dark:shadow-white/10'
                            : 'bg-white dark:bg-[#141414] text-gray-600 dark:text-[#888] border-gray-200 dark:border-[#333] hover:bg-gray-50 dark:hover:bg-[#222]'
                        }`}
                >
                    {cat.label}
                </button>
            ))}
        </div>
    );
};

export default CategoryFilter;
