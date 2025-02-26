"use client";


import React, { useState, useCallback } from 'react';
import ThemeToggle from '../ThemeToggle';

const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Memoize the toggle functions to avoid unnecessary re-renders
    const toggleMenu = useCallback(() => {
        setIsMenuOpen((prev) => !prev);
    }, []);





    return (
        <>
            <div className="relative flex items-center space-x-5">
                {/* Dark Mode Toggle */}

                <ThemeToggle />
                {/* Menu Button */}
                <button
                    className="md:hidden flex cursor-pointer bg-green-300 p-2 rounded-md"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    Menu
                </button>

                {/* Full-Screen Popup */}
                {isMenuOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="w-64 bg-red-300 dark:bg-gray-800 dark:text-white flex flex-col items-center justify-center rounded-lg shadow-lg relative p-6">
                            <button
                                className="absolute top-4 right-4 text-white bg-gray-800 px-3 py-1 rounded-full"
                                onClick={toggleMenu}
                                aria-label="Close menu"
                            >
                                ✖
                            </button>
                            <div className="py-2 px-4 cursor-pointer hover:bg-gray-700">Login</div>
                            <div className="py-2 px-4 cursor-pointer hover:bg-gray-700">Signup</div>
                        </div>
                    </div>
                )}

                {/* Desktop Signup Button */}
                <button
                    onClick={toggleMenu}

                    className="hidden md:flex cursor-pointer bg-green-300 p-2 rounded-md"
                    aria-label="Signup"
                >
                    Signup
                </button>

            </div>


        </>
    );
};

export default Menu;
