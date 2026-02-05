'use client';

import { useState, useEffect } from 'react';
import CustomCursor from '../components/CustomCursor';

export default function ClientLayout({ children }) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div className={`min-h-screen bg-dark text-text font-mono cursor-none ${isLoaded ? 'loaded' : ''}`}>
            <CustomCursor />
            {children}
        </div>
    );
}
