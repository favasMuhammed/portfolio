"use client";

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Newsletter from './Newsletter'
import { thoughtsList } from '../data/thoughtsList'

const ThoughtsListing = () => {
    const [isVisible, setIsVisible] = useState(false)
    const thoughtsRef = useRef(null)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    }

    return (
        <section
            ref={thoughtsRef}
            className="thoughts-page relative min-h-screen bg-dark text-text font-mono py-16 sm:py-20 lg:py-24"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <motion.div
                    className="thoughts-header text-center mb-12 sm:mb-16 lg:mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h1
                        className="section-title text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-departure-mono"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Thoughts
                    </motion.h1>

                    <motion.p
                        className="section-description text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed font-grotesk"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Random musings about code, design, and the occasional existential crisis.
                        Written like I'm talking to a friend over coffee, because corporate blog voice makes my soul hurt.
                    </motion.p>
                </motion.div>

                {/* Thoughts Grid */}
                <motion.div
                    className="thoughts-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {thoughtsList.map((thought) => (
                        <motion.article
                            key={thought.id}
                            className="thought-card group bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 sm:p-8 transition-all duration-300 hover:bg-white/10 hover:border-primary/30 hover:-translate-y-2 hover:shadow-xl"
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                        >
                            {/* Category & Date */}
                            <div className="thought-meta flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2">
                                <span className="thought-category text-primary text-xs font-semibold uppercase tracking-wider px-3 py-1 bg-primary/10 rounded-full border border-primary/20 w-fit">
                                    {thought.category}
                                </span>
                                <span className="thought-date text-text-muted text-xs sm:text-sm font-mono">
                                    {thought.date}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="thought-title text-white text-lg sm:text-xl font-bold mb-3 sm:mb-4 leading-tight group-hover:text-primary transition-colors duration-300 font-departure-mono">
                                <Link href={`/thoughts/${thought.slug}`} className="no-underline">
                                    {thought.title}
                                </Link>
                            </h3>

                            {/* Preview */}
                            <p className="thought-preview text-text-secondary text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 font-grotesk">
                                {thought.preview}
                            </p>

                            {/* Read More */}
                            <div className="thought-footer flex justify-between items-center">
                                <span className="read-time text-text-muted text-xs font-mono">
                                    {thought.readTime}
                                </span>
                                <Link
                                    href={`/thoughts/${thought.slug}`}
                                    className="read-more text-primary text-sm font-semibold no-underline transition-all duration-300 hover:text-primary-dark hover:translate-x-1 font-grotesk"
                                >
                                    Read more →
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>

                {/* Newsletter Signup */}
                <motion.div
                    className="newsletter-section mt-16 sm:mt-20 lg:mt-24 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <Newsletter />
                </motion.div>

            </div>
        </section>
    )
}

export default ThoughtsListing
