import React from 'react';
import { GraduationCap, Trophy, Target, Book } from 'lucide-react';

const AcademyHero = () => {
    return (
        <div className="relative overflow-hidden rounded-3xl bg-black dark:bg-[#111] text-white p-8 md:p-12 mb-10 border border-gray-800 dark:border-[#333]">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4" />

            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-bold border border-white/10">
                        <GraduationCap size={14} className="text-blue-400" />
                        <span>Yo Pips Academy</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Master the Markets <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                            One Pip at a Time
                        </span>
                    </h1>

                    <p className="text-gray-400 max-w-lg text-lg">
                        Comprehensive trading education to take you from beginner to funded trader.
                        Start your journey today.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button className="px-6 py-3 bg-white text-black rounded-xl font-bold hover:bg-gray-100 transition-colors">
                            Resume Learning
                        </button>
                        <button className="px-6 py-3 bg-white/5 border border-white/10 text-white rounded-xl font-bold hover:bg-white/10 transition-colors">
                            Browse Catalog
                        </button>
                    </div>
                </div>

                {/* Stats / Progress Mock */}
                <div className="hidden md:block">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-sm">
                            <Trophy className="text-yellow-400 mb-3" size={32} />
                            <div className="text-2xl font-bold">12</div>
                            <div className="text-sm text-gray-500">Courses Completed</div>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-sm">
                            <Target className="text-green-400 mb-3" size={32} />
                            <div className="text-2xl font-bold">85%</div>
                            <div className="text-sm text-gray-500">Average Quiz Score</div>
                        </div>
                        <div className="col-span-2 bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-white/10 p-5 rounded-2xl backdrop-blur-sm flex items-center gap-4">
                            <div className="p-3 bg-blue-500/20 rounded-xl">
                                <Book size={24} className="text-blue-400" />
                            </div>
                            <div className="flex-1">
                                <div className="text-xs text-blue-300 font-bold uppercase mb-1">Current Course</div>
                                <div className="font-bold mb-2">Advanced Price Action Patterns</div>
                                <div className="w-full h-1.5 bg-black/40 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-400 w-2/3" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AcademyHero;
