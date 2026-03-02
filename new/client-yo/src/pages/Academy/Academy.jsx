import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import AcademyHero from './components/AcademyHero';
import CategoryFilter from './components/CategoryFilter';
import CourseCard from './components/CourseCard';
import CourseDetailModal from './components/CourseDetailModal';

// Comprehensive Mock Data
const COURSES = [
    {
        id: 1,
        title: "Forex Trading Bootcamp: Zero to Hero",
        description: "The complete guide to starting your forex journey. Learn terminology, chart reading, and basic analysis.",
        category: "basics",
        level: "Beginner",
        duration: "4h 30m",
        lessons: 24,
        progress: 100,
        image: null
    },
    {
        id: 2,
        title: "Advanced Price Action Patterns",
        description: "Master the art of reading raw price action. Identify valid order blocks, liquidity sweeps, and precise entries.",
        category: "technical",
        level: "Advanced",
        duration: "6h 15m",
        lessons: 32,
        progress: 65,
        image: null
    },
    {
        id: 3,
        title: "Trading Psychology & Mindset",
        description: "Control your emotions, eliminate FOMO, and build the discipline required for consistent profitability.",
        category: "psychology",
        level: "All Levels",
        duration: "3h 00m",
        lessons: 18,
        progress: 10,
        image: null
    },
    {
        id: 4,
        title: "Risk Management Mastery",
        description: "The most important skill in trading. Learn position sizing, R-multiples, and portfolio protection.",
        category: "strategy",
        level: "Intermediate",
        duration: "2h 45m",
        lessons: 14,
        progress: 0,
        image: null
    },
    {
        id: 5,
        title: "Scalping the 1-Minute Chart",
        description: "High-intensity strategy for quick profits. Learn to execute fast with precision on lower timeframes.",
        category: "strategy",
        level: "Expert",
        duration: "5h 20m",
        lessons: 28,
        progress: 0,
        image: null
    },
    {
        id: 6,
        title: "Fundamental Analysis: News Trading",
        description: "How to trade NFP, CPI, and interest rate decisions without getting wrecked by slippage.",
        category: "technical",
        level: "Advanced",
        duration: "3h 30m",
        lessons: 16,
        progress: 0,
        image: null
    }
];

const CATEGORIES = [
    { id: 'all', label: 'All Courses' },
    { id: 'basics', label: 'Basics' },
    { id: 'technical', label: 'Technical Analysis' },
    { id: 'psychology', label: 'Psychology' },
    { id: 'strategy', label: 'Strategies' }
];

const Academy = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [selectedCourse, setSelectedCourse] = useState(null);

    const filteredCourses = activeCategory === 'all'
        ? COURSES
        : COURSES.filter(c => c.category === activeCategory);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-white transition-colors duration-200">
            <Header title="Yo Pips Academy" />

            <div className="max-w-7xl mx-auto px-4 lg:px-6 pb-20 pt-6 lg:pt-8">
                {/* Hero Section */}
                <AcademyHero />

                {/* Filters */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 mb-4 md:mb-0">
                        Course Library
                    </h2>
                    <CategoryFilter
                        categories={CATEGORIES}
                        activeCategory={activeCategory}
                        onChange={setActiveCategory}
                    />
                </div>

                {/* Course Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {filteredCourses.map(course => (
                        <div key={course.id} onClick={() => setSelectedCourse(course)} className="cursor-pointer">
                            <CourseCard course={course} />
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredCourses.length === 0 && (
                    <div className="text-center py-20">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-[#1a1a1a] mb-4">
                            <span className="text-2xl">🔍</span>
                        </div>
                        <h3 className="text-lg font-bold mb-2">No courses found</h3>
                        <p className="text-gray-500">Try selecting a different category.</p>
                    </div>
                )}
            </div>

            {/* Course Player Modal */}
            {selectedCourse && (
                <CourseDetailModal
                    course={selectedCourse}
                    onClose={() => setSelectedCourse(null)}
                />
            )}

            {/* Footer Attribution (Optional, matching original style) */}
            <div className="max-w-7xl mx-auto px-6 mt-20 border-t border-gray-200 dark:border-[#333] pt-8 pb-12">
                <p className="text-xs text-gray-400 dark:text-[#666] leading-relaxed">
                    All Academy content is for educational purposes only. Trading involves risk.
                </p>
            </div>
        </div>
    );
};

export default Academy;
