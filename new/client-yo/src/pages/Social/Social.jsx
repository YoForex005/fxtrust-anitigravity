import React from 'react';

const Social = () => {
    const socialLinks = [
        {
            name: 'Discord',
            description: 'Join our trading community, chat with other traders, and get live updates.',
            url: 'https://discord.gg/yopips', // Placeholder
            color: '#5865F2',
            icon: (
                <svg viewBox="0 0 127.14 96.36" fill="currentColor" className="w-12 h-12">
                    <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.11,77.11,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.89,105.89,0,0,0,126.6,80.22c.63-23.28-1.24-45.66-18.9-72.15ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
                </svg>
            )
        },
        {
            name: 'Twitter',
            description: 'Follow us for the latest news, announcements, and market insights.',
            url: 'https://twitter.com/yopips', // Placeholder
            color: '#000000', // X black
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            )
        },
        {
            name: 'Instagram',
            description: 'Check out our daily stories, trading setups, and behind-the-scenes content.',
            url: 'https://instagram.com/yopips', // Placeholder
            color: '#E4405F',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
            )
        },
        {
            name: 'Telegram',
            description: 'Get instant alerts and join our large community of traders.',
            url: 'https://t.me/yopips', // Placeholder
            color: '#0088cc',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 11.944 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
            )
        },
        {
            name: 'YouTube',
            description: 'Watch educational videos, market breakdowns, and tutorials.',
            url: 'https://youtube.com/@yopips', // Placeholder
            color: '#FF0000',
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
            )
        }
    ];

    return (
        <div className="flex-1 min-h-screen bg-gray-50 dark:bg-[#1a1c23] p-6 lg:p-12 transition-colors duration-200">
            <div className="max-w-7xl mx-auto space-y-10">
                {/* Header Section */}
                <div className="text-center space-y-4">
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-[#bea14c] tracking-tight">
                        Stay Connected
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Join our fast-growing community on your favorite platforms. updates, market insights, and exclusive content await you!
                    </p>
                </div>

                {/* Social Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {socialLinks.map((social) => (
                        <div
                            key={social.name}
                            className="group relative bg-white dark:bg-[#252830] rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 hover:-translate-y-1 flex flex-col items-center text-center overflow-hidden"
                        >
                            {/* Hover Gradient Overlay */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                                style={{ backgroundColor: social.color }}
                            />

                            {/* Icon */}
                            <div className={`mb-6 p-4 rounded-full bg-gray-50 dark:bg-[#1a1c23] text-gray-700 dark:text-white group-hover:scale-110 transition-transform duration-300`}
                                style={{ color: social.color }}
                            >
                                {social.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                                {social.name}
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
                                {social.description}
                            </p>

                            {/* Button */}
                            <a
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-auto inline-flex items-center justify-center px-8 py-3 rounded-xl font-semibold text-white shadow-lg transform transition-all duration-200 hover:shadow-xl hover:scale-105 active:scale-95 w-full"
                                style={{ backgroundColor: social.color }}
                            >
                                Follow on {social.name}
                            </a>
                        </div>
                    ))}
                </div>

                {/* Footer Note */}
                <div className="text-center pt-8">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Need help? Contact our <a href="/support" className="text-[#bea14c] hover:underline font-medium">Support Team</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Social;
