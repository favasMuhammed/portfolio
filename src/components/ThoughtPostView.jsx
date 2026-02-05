"use client";

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { thoughtContent } from '../data/thoughtContent'

const ThoughtPostView = ({ slug }) => {
    const [post, setPost] = useState(null)

    useEffect(() => {
        const foundPost = thoughtContent[slug]
        if (foundPost) {
            setPost(foundPost)
        }
        // No need for window.scrollTo(0, 0) as Next.js handles it
    }, [slug])

    if (!post) {
        // Ideally we should handle this in the page.tsx or with a 404
        // But for Client Component state approach:
        return (
            <div className="min-h-screen bg-dark text-text font-mono">
                <div className="container mx-auto px-4 py-24 text-center">
                    <h1 className="text-4xl font-bold text-white mb-4 font-departure-mono">Post Not Found</h1>
                    <p className="text-gray-400 mb-8 font-grotesk">The thought you're looking for doesn't exist.</p>
                    <Link
                        href="/thoughts"
                        className="text-primary hover:text-primary-dark font-grotesk no-underline"
                    >
                        ← Back to all thoughts
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-dark text-text font-mono">

            <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
                {/* Back Link */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8"
                >
                    <Link
                        href="/thoughts"
                        className="text-primary hover:text-primary-dark font-grotesk text-sm no-underline inline-flex items-center transition-colors duration-300"
                    >
                        ← Back to all thoughts
                    </Link>
                </motion.div>

                {/* Article Header */}
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12 text-center max-w-4xl mx-auto"
                >
                    <div className="flex items-center justify-center gap-4 mb-6 text-sm">
                        <span className="text-primary text-xs font-semibold uppercase tracking-wider px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
                            {post.category}
                        </span>
                        <span className="text-text-muted font-mono">{post.date}</span>
                        <span className="text-text-muted font-mono">{post.readTime}</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight font-departure-mono">
                        {post.title}
                    </h1>
                </motion.header>

                {/* Article Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="prose prose-lg prose-invert max-w-4xl mx-auto"
                >
                    <div
                        className="thought-content text-gray-300 leading-relaxed font-grotesk"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </motion.div>

                {/* Article Footer */}
                <motion.footer
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-16 pt-8 border-t border-white/10 text-center"
                >
                    <div className="max-w-2xl mx-auto">
                        <h3 className="text-xl font-bold text-white mb-4 font-departure-mono">
                            Enjoyed this thought?
                        </h3>
                        <p className="text-gray-400 mb-6 font-grotesk">
                            More random musings about code, design, and the occasional existential crisis.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/thoughts"
                                className="px-6 py-3 bg-primary text-dark font-semibold rounded-lg transition-all duration-300 hover:bg-primary-dark hover:-translate-y-1 font-grotesk no-underline"
                            >
                                Read more thoughts
                            </Link>
                            <a
                                href="#contact"
                                className="px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-dark font-semibold rounded-lg transition-all duration-300 hover:-translate-y-1 font-grotesk no-underline"
                            >
                                Get in touch
                            </a>
                        </div>
                    </div>
                </motion.footer>
            </article>

        </div>
    )
}

export default ThoughtPostView
