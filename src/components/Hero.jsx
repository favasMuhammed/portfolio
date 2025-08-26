import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import InteractiveTimeline from './InteractiveTimeline'
import RightColumn from './RightColumn'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section 
      ref={heroRef}
      id="home"
      className="hero-section relative min-h-screen bg-dark text-text font-inter pt-8 sm:pt-12 lg:pt-16 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary/5 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-40 right-20 w-64 sm:w-96 h-64 sm:h-96 bg-accent/5 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-56 sm:w-80 h-56 sm:h-80 bg-cyber/5 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Top Section - Hero Content (Full Width) */}
      <motion.div 
        className="hero-content w-full mb-12 sm:mb-16 lg:mb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 sm:mt-24 lg:mt-28"
        variants={itemVariants}
      >
        <motion.h1 
          className="hero-title mb-6 sm:mb-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="title-main block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 sm:mb-6 text-primary font-departure-mono tracking-tight leading-tight" style={{ fontFamily: 'Departure Mono, JetBrains Mono, monospace', fontSize: 'clamp(24px, 5vw, 36px)', lineHeight: 'clamp(28px, 6vw, 40px)' }}>
            Crafting Digital
            <br />
            <span className="text-neon bg-gradient-to-r from-primary via-neon to-cyber bg-clip-text text-transparent">
              Experiences
            </span>
            <br />
            That Matter
          </span>
        </motion.h1>
        
        <motion.p 
          className="hero-description text-sm sm:text-base lg:text-lg xl:text-xl text-text-secondary mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed font-normal font-inter tracking-wide text-center"
          variants={itemVariants}
        >
          I'm <span className="text-primary font-semibold">Muhammed Favas T P</span>, a <span className="text-neon font-semibold">Project Coordinator • Full-Stack Developer • Graphic Designer</span> crafting innovative solutions that bridge the gap between imagination and reality. Based in the tech hub of Manjeri, Kerala.
        </motion.p>
        
        <motion.div 
          className="social-links flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 flex-wrap mt-4 justify-center"
          variants={itemVariants}
        >
          <motion.a 
            href="https://github.com/favasMuhammed" 
            target="_blank"
            rel="noopener noreferrer"
            className="social-link text-text-secondary no-underline font-inter text-sm sm:text-base font-medium transition-all duration-300 tracking-wide py-2 sm:py-3 px-4 sm:px-6 border border-primary/30 rounded-lg bg-glass backdrop-blur-md hover:text-primary hover:bg-primary/10 hover:border-primary hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-liquid text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fab fa-github mr-2"></i>
            GitHub
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/muhammed-favas-t-p" 
            target="_blank"
            rel="noopener noreferrer"
            className="social-link text-text-secondary no-underline font-inter text-sm sm:text-base font-medium transition-all duration-300 tracking-wide py-2 sm:py-3 px-4 sm:px-6 border border-primary/30 rounded-lg bg-glass backdrop-blur-md hover:text-primary hover:bg-primary/10 hover:border-primary hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-liquid text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fab fa-linkedin mr-2"></i>
            LinkedIn
          </motion.a>
          <motion.a 
            href="#contact" 
            className="social-link text-text-secondary no-underline font-inter text-sm sm:text-base font-medium transition-all duration-300 tracking-wide py-2 sm:py-3 px-4 sm:px-6 border border-primary/30 rounded-lg bg-glass backdrop-blur-md hover:text-primary hover:bg-primary/10 hover:border-primary hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-liquid text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-envelope mr-2"></i>
            Contact
          </motion.a>
        </motion.div>
      </motion.div>
      
      {/* Bottom Section - Two Columns Layout */}
      <motion.div 
        className="hero-layout grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-start"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Left Column - My Journey */}
        <motion.div 
          className="about-section w-full order-2 lg:order-1"
          variants={itemVariants}
        >
          <motion.h2 
            className="about-title text-gray-600 text-xs sm:text-sm lg:text-base font-normal font-mono mb-3 sm:mb-4 uppercase tracking-wider relative"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            My Journey
            <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-primary to-transparent"></span>
          </motion.h2>
          
          <InteractiveTimeline />
        </motion.div>
        
        {/* Right Column - Recent Thoughts, Skills, etc. */}
        <motion.div 
          className="flex flex-col gap-4 sm:gap-6 order-1 lg:order-2"
          variants={itemVariants}
        >
          <RightColumn />
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.div 
          className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-primary/30 rounded-full flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div 
            className="w-1 h-2 sm:h-3 bg-primary rounded-full mt-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
