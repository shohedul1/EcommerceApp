
'use client';
import useScrollProgress from '@/hook/useScrollProgress';
import { motion } from 'framer-motion'; // Import motion from 'framer-motion'

import React, { ReactNode } from 'react';
const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
}

interface TemplateProps {
    children: ReactNode;
}

const Template: React.FC<TemplateProps> = ({ children }) => {
    const completion = useScrollProgress();
    return (
        <>
            <motion.main
                variants={variants}
                initial='hidden'
                animate='enter'
                transition={{ type: 'linear', delay: 0.2, duration: 0.4 }}
            >
                {children}
            </motion.main>
            {completion !== undefined && (
                <span
                    style={{ transform: `translateY(${completion - 100}%)` }}
                    className='fixed z-50  bg-gradient-to-b from-red-600 via-lime-700 to-blue-500 w-2 h-full top-0 right-0 transition-all duration-700'
                ></span>
            )}
            {/* <div className='h-[3500px]'></div> */}
        </>
    );
};

export default Template;



