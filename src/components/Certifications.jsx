"use client";

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { certifications } from '../data/certifications'
import { LuAward } from 'react-icons/lu'

const Certifications = () => {
    const [isVisible, setIsVisible] = useState(false)
    const certificationsRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 }
        )

        if (certificationsRef.current) {
            observer.observe(certificationsRef.current)
        }

        return () => observer.disconnect()
    }, [])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }

    return (
        <section
            id="certifications"
            ref={certificationsRef}
            className="certifications-section py-20 sm:py-24 lg:py-32 bg-darker relative overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-float-slow"></div>
                <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/3 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '3s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-mesh opacity-5 rounded-full blur-3xl animate-rotate"></div>
            </div>

            <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    className="section-header text-center mb-16 sm:mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="section-icon w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-liquid"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                    >
                        <LuAward className="text-3xl text-dark" />
                    </motion.div>

                    <motion.h2
                        className="section-title text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-6 font-departure-mono"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ fontFamily: 'Departure Mono, JetBrains Mono, monospace', fontSize: '36px', lineHeight: '40px' }}
                    >
                        Certifications & Achievements
                    </motion.h2>

                    <motion.p
                        className="section-description text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed px-4 font-grotesk"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        A collection of professional certifications and achievements that validate my expertise across multiple domains.
                        From digital marketing to cybersecurity, each credential represents a commitment to continuous learning.
                    </motion.p>
                </motion.div>

                {/* Certifications Grid */}
                <motion.div
                    className="certifications-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                >
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            className="cert-item p-4 bg-white/3 rounded-lg border border-white/5 transition-all duration-300 hover:bg-white/5 hover:border-primary/30 group h-full flex flex-col"
                            variants={cardVariants}
                            whileHover={{ y: -4 }}
                        >
                            <div className="flex items-start gap-4 flex-1">
                                <div className="cert-icon mt-1 text-xl sm:text-2xl text-primary/80 group-hover:text-primary transition-colors">
                                    {cert.icon}
                                </div>
                                <div className="cert-details flex-1 min-w-0 flex flex-col h-full">
                                    <h3 className="text-text font-medium text-sm sm:text-base font-grotesk leading-tight mb-1 group-hover:text-primary transition-colors line-clamp-2">
                                        {cert.title}
                                    </h3>
                                    <div className="text-text-secondary text-xs sm:text-sm mb-auto">{cert.issuer}</div>
                                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-text-muted text-xs font-mono mt-2 pt-2 border-t border-white/5">
                                        <span>{cert.date}</span>
                                        {cert.credentialId && (
                                            <>
                                                <span className="hidden sm:inline">•</span>
                                                <span className="truncate w-full sm:w-auto">ID: {cert.credentialId}</span>
                                            </>
                                        )}
                                    </div>
                                    {cert.skills && (
                                        <div className="flex flex-wrap gap-1 mt-3">
                                            {cert.skills.slice(0, 3).map(skill => (
                                                <span key={skill} className="text-[10px] px-1.5 py-0.5 bg-primary/10 text-primary rounded border border-primary/20">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Certifications
