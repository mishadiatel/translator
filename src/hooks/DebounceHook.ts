import React, { useEffect, useRef } from 'react';

type CallbackFunction = () => void;

export const  useDebounce = (callback: CallbackFunction, delay: number): void => {
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        // Clear the previous timeout on every render
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        // Set a new timeout with the specified delay
        timeoutRef.current = setTimeout(() => {
            callback();
        }, delay);

        // Clean up the timeout on component unmount
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [callback, delay]);
}