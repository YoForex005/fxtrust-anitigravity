import React from 'react';
import { Play, Clock, BookOpen, Award } from 'lucide-react';

const CourseCard = ({ course }) => {
    const { title, description, level, duration, lessons, progress, category, image } = course;

    return (
        <div className="group flex flex-col bg-white dark:bg-[#141414] border border-gray-200 dark:border-[#333] rounded-2xl overflow-hidden hover:shadow-xl dark:hover:shadow-black/50 transition-all duration-300 hover:-translate-y-1">
            {/* Thumbnail */}
            <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-[#222]">
                {image ? (
                    <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${getGradient(category)} opacity-80`} />
                )}

                {/* Overlay Badge */}
                <div className="absolute top-3 left-3 px-2 py-1 bg-black/50 backdrop-blur-md rounded-lg text-[10px] font-bold text-white uppercase tracking-wider border border-white/10">
                    {category}
                </div>

                {/* Level Badge */}
                <div className="absolute top-3 right-3 px-2 py-1 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-lg text-[10px] font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                    {level}
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-xl transform scale-75 group-hover:scale-100 transition-transform">
                        <Play size={20} fill="currentColor" className="ml-1" />
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-5 flex flex-col">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-[#9ca3af] mb-4 line-clamp-2 flex-1">
                    {description}
                </p>

                {/* Progress Bar (if started) */}
                {progress > 0 && (
                    <div className="mb-4">
                        <div className="flex justify-between text-xs mb-1.5">
                            <span className="font-medium text-gray-700 dark:text-gray-300">{progress}% Complete</span>
                        </div>
                        <div className="h-1.5 w-full bg-gray-100 dark:bg-[#333] rounded-full overflow-hidden">
                            <div className="h-full bg-blue-600 rounded-full" style={{ width: `${progress}%` }} />
                        </div>
                    </div>
                )}

                {/* Meta Info */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-[#333] mt-auto">
                    <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-[#888] font-medium">
                        <div className="flex items-center gap-1.5">
                            <Clock size={14} />
                            {duration}
                        </div>
                        <div className="flex items-center gap-1.5">
                            <BookOpen size={14} />
                            {lessons} Lessons
                        </div>
                    </div>

                    {progress === 100 && (
                        <div className="flex items-center gap-1 text-green-600 dark:text-green-500 text-xs font-bold">
                            <Award size={14} />
                            Completed
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

// Helper for random gradients based on category
const getGradient = (cat) => {
    switch (cat?.toLowerCase()) {
        case 'basics': return 'from-blue-500 to-cyan-400';
        case 'technical': return 'from-purple-500 to-pink-500';
        case 'psychology': return 'from-amber-500 to-orange-500';
        case 'strategy': return 'from-emerald-500 to-teal-500';
        default: return 'from-gray-700 to-gray-600';
    }
};

export default CourseCard;
