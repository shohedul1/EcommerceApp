'use client';

import { useEffect, useState } from "react";

const useScrollProgress = () => {
    const [completion, setCompletion] = useState<number | undefined>(undefined);

    useEffect(() => {
        const updateScrollCompletion = () => {
            const currentProgress = window.scrollY;
            const scrollHeight = document.body.scrollHeight - window.innerHeight;

            if (scrollHeight) {
                const progress = (currentProgress / scrollHeight) * 100;
                setCompletion(parseFloat(progress.toFixed(2))); // Convert the string to a number
            }
        };

        window.addEventListener("scroll", updateScrollCompletion);

        return () => {
            window.removeEventListener("scroll", updateScrollCompletion);
        };
    }, []);

    return completion;
};

export default useScrollProgress;