'use client';

import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false); // Ensure this runs only on the client side
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Set mounted to true once the component has mounted on the client
    useEffect(() => {
        setMounted(true);
    }, []);

    // Prevent rendering if not mounted to avoid hydration mismatch
    if (!mounted) return null;

    const toggleTheme = () => {
        setIsDarkMode((prev) => !prev); // Toggle local state
        setTheme(isDarkMode ? 'light' : 'dark'); // Toggle theme globally
    };

    return (
        <>
            <div>
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 dark:text-white transition duration-200"
                    aria-label="Toggle dark mode"
                >
                    {theme === 'dark' ? '🌙' : '☀️'} {/* Show moon for dark mode, sun for light mode */}
                </button>
                {/* Dark Mode Content */}
            </div>
            {isDarkMode && (
                <div className="fixed top-0 translate-y-[70px] -translate-x-10">
                    <div className="flex flex-col justify-center gap-2 px-5 py-4 rounded-xl bg-white w-[150px] text-white dark:text-black dark:bg-green-400">
                        <div className='w-full hover:bg-red-100 rounded-full px-5 '>
                            <button
                                onClick={() => {
                                    setTheme('dark');
                                    setIsDarkMode(false);
                                }}
                            >
                                🌙  Dark
                            </button>
                        </div>
                        <div className='w-full hover:bg-red-100 rounded-full px-5'>
                            <button
                                onClick={() => {
                                    setTheme('night');
                                    setIsDarkMode(false);
                                }}
                            >
                                ☀️ Night
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ThemeToggle;