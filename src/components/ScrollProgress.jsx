"use client";

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const ScrollProgress = () => {
    const [scrollProgress, setScrollProgress] = useState(0)

    useEffect(() => {
        const updateScrollProgress = () => {
            const scrollPx = document.documentElement.scrollTop
            const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight
            const scrolled = (scrollPx / winHeightPx) * 100

            setScrollProgress(scrolled)
        }

        window.addEventListener('scroll', updateScrollProgress, { passive: true })
        return () => window.removeEventListener('scroll', updateScrollProgress)
    }, [])

    return (
        <>
            {/* Progress bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-cyan-400 origin-left z-[100]"
                style={{
                    scaleX: scrollProgress / 100,
                    transformOrigin: '0%'
                }}
                initial={{ scaleX: 0 }}
                transition={{ duration: 0.1 }}
            />

            {/* Glow effect */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 via-accent/50 to-cyan-400/50 blur-sm origin-left z-[99]"
                style={{
                    scaleX: scrollProgress / 100,
                    transformOrigin: '0%'
                }}
                initial={{ scaleX: 0 }}
                transition={{ duration: 0.1 }}
            />
        </>
    )
}

export default ScrollProgress
