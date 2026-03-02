import React from 'react';
import { X, Play, CheckCircle, Lock, FileText } from 'lucide-react';

const CourseDetailModal = ({ course, onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white dark:bg-[#141414] w-full max-w-6xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-gray-200 dark:border-[#333]">

                {/* Left: Video Player */}
                <div className="flex-1 bg-black text-white flex flex-col relative group">
                    {/* Video Placeholder */}
                    <div className="flex-1 min-h-[400px] flex items-center justify-center bg-[#0a0a0a] relative">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />

                        {/* Fake Controls */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="h-1 bg-gray-600 rounded-full mb-4 cursor-pointer overflow-hidden">
                                <div className="h-full bg-blue-500 w-1/3 relative">
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow" />
                                </div>
                            </div>
                            <div className="flex justify-between items-center text-sm font-medium">
                                <div className="flex gap-4">
                                    <Play fill="currentColor" size={20} />
                                    <span>12:45 / 45:00</span>
                                </div>
                                <div className="flex gap-4">
                                    <span>Settings</span>
                                    <span>Fullscreen</span>
                                </div>
                            </div>
                        </div>

                        {/* Big Play Button */}
                        <button className="w-20 h-20 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-transform hover:scale-105">
                            <Play fill="white" size={32} className="ml-2" />
                        </button>
                    </div>
                </div>

                {/* Right: Content/Lessons */}
                <div className="w-full md:w-[400px] bg-white dark:bg-[#1a1a1a] flex flex-col border-l border-gray-200 dark:border-[#333]">
                    {/* Header */}
                    <div className="p-6 border-b border-gray-100 dark:border-[#333]">
                        <div className="flex justify-between items-start gap-4 mb-4">
                            <h2 className="text-xl font-bold dark:text-white leading-tight">{course.title}</h2>
                            <button onClick={onClose} className="p-1 hover:bg-gray-100 dark:hover:bg-[#333] rounded-lg transition-colors">
                                <X size={20} className="text-gray-500" />
                            </button>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <span className="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase">{course.level}</span>
                            <span>• {course.lessons} Lessons</span>
                        </div>
                    </div>

                    {/* Lesson Scroll */}
                    <div className="flex-1 overflow-y-auto p-0">
                        {Array.from({ length: course.lessons }).map((_, i) => {
                            const isCompleted = i < Math.floor(course.lessons * (course.progress / 100));
                            const isCurrent = i === Math.floor(course.lessons * (course.progress / 100));
                            const isLocked = i > Math.floor(course.lessons * (course.progress / 100));

                            return (
                                <button
                                    key={i}
                                    className={`w-full flex items-center gap-4 p-4 text-left border-b border-gray-50 dark:border-[#222] transition-colors ${isCurrent
                                            ? 'bg-blue-50 dark:bg-blue-900/10 border-l-4 border-l-blue-500'
                                            : 'hover:bg-gray-50 dark:hover:bg-[#222] border-l-4 border-l-transparent'
                                        }`}
                                >
                                    <div className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center border ${isCompleted ? 'bg-green-500 border-green-500 text-white' :
                                            isCurrent ? 'border-blue-500 text-blue-500' :
                                                'border-gray-300 dark:border-[#444] text-gray-400'
                                        }`}>
                                        {isCompleted ? <CheckCircle size={14} /> :
                                            isLocked ? <Lock size={12} /> :
                                                <Play size={10} fill="currentColor" />}
                                    </div>
                                    <div className="flex-1">
                                        <div className={`text-sm font-medium mb-0.5 ${isCurrent ? 'text-blue-600 dark:text-blue-400' : 'text-gray-900 dark:text-gray-200'}`}>
                                            Lesson {i + 1}: Introduction to Concepts
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-gray-400">
                                            <FileText size={10} />
                                            <span>15 min read</span>
                                        </div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Footer Button */}
                    <div className="p-4 border-t border-gray-100 dark:border-[#333]">
                        <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-colors">
                            Continue Lesson
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetailModal;
