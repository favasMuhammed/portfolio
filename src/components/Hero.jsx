import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import InteractiveTimeline from './InteractiveTimeline'
import RightColumn from './RightColumn'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [heroHeight, setHeroHeight] = useState(0)
  const heroRef = useRef(null)
  const rafRef = useRef(null)

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

    // Check if mobile for background attachment
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    // Handle scroll for parallax effect with RAF optimization
    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
      
      rafRef.current = requestAnimationFrame(() => {
        const currentScrollY = window.scrollY
        setScrollY(currentScrollY)
        
        // Update hero height for calculations
        if (heroRef.current) {
          setHeroHeight(heroRef.current.offsetHeight)
        }
      })
    }
    
    checkMobile()
    handleScroll() // Initial call
    
    window.addEventListener('resize', checkMobile)
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', checkMobile)
      window.removeEventListener('scroll', handleScroll)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
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

  // Smooth easing functions for better animations
  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3)
  const easeInOutQuart = (t) => t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2
  const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4)
  
  // Calculate scroll-based transforms with smooth easing
  const rawProgress = Math.min(scrollY / (heroHeight || 1), 1)
  const scrollProgress = easeOutCubic(rawProgress)
  const scaleProgress = easeInOutQuart(rawProgress)
  const opacityProgress = easeOutQuart(rawProgress)
  
  const imageTranslateY = isMobile 
    ? Math.max(80 - (scrollProgress * 100), -20) // Mobile: smoother start/end
    : Math.max(40 - (scrollProgress * 60), -20)  // Desktop: more refined
  
  const imageScale = isMobile 
    ? Math.min(1 + (scaleProgress * 0.08), 1.08)   // Mobile: subtler scaling
    : Math.min(1.04 + (scaleProgress * 0.04), 1.08) // Desktop: refined scaling
    
  const imageOpacity = Math.min(0.4 + (opacityProgress * 0.6), 1)

  return (
    <section 
      ref={heroRef}
      id="home"
      className="hero-section relative min-h-screen bg-dark text-text font-mono pt-8 sm:pt-12 lg:pt-16 overflow-hidden"
    >
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat creative-bg"
          style={{
            backgroundImage: 'url(./image.webp)',
            backgroundPosition: isMobile ? 'center top' : 'center center',
            backgroundAttachment: 'scroll', // Always scroll for the reveal effect
            backgroundSize: 'cover',
            transform: `translateY(${imageTranslateY}%) scale(${imageScale})`,
            opacity: imageOpacity,
            transition: scrollY === 0 ? 'all 0.8s ease-out' : 'none', // Smooth only on initial load
            willChange: 'transform, opacity' // Optimize for animations
          }}
        />
        {/* Adaptive overlay system with smooth scroll-based opacity */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-[0.5px]"
          style={{
            opacity: Math.min(0.45 + (opacityProgress * 0.25), 0.7),
            transition: 'backdrop-filter 0.3s ease-out'
          }}
        />
        {/* Creative gradient overlays with smooth transitions */}
        <div 
          className={`absolute inset-0 ${isMobile 
            ? 'bg-gradient-to-b from-black/70 via-black/40 to-black/80' 
            : 'bg-gradient-to-br from-black/60 via-transparent to-black/70'
          }`}
          style={{
            opacity: Math.max(1 - (scrollProgress * 0.15), 0.85)
          }}
        />
        {/* Smooth spotlight effect with natural movement */}
        <div 
          className={`absolute ${isMobile 
            ? 'top-0 left-0 w-full h-1/2' 
            : 'top-1/4 right-0 w-1/2 h-3/4'
          } bg-gradient-radial from-transparent via-black/15 to-black/50`}
          style={{
            transform: `translateY(${easeInOutQuart(rawProgress) * 15}%)`,
            opacity: Math.max(1 - (scrollProgress * 0.4), 0.4)
          }}
        />
      </div>
      {/* Creative Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-10">
        {/* Smooth floating elements with natural parallax */}
        <div 
          className={`absolute ${isMobile 
            ? 'top-10 left-5 w-32 h-32' 
            : 'top-20 left-10 w-48 h-48 lg:w-72 lg:h-72'
          } bg-primary/8 rounded-full blur-3xl animate-float-slow`}
          style={{
            transform: `translateY(${easeOutCubic(rawProgress) * -25}px) scale(${1 + scrollProgress * 0.05})`,
            opacity: Math.max(0.8 - (opacityProgress * 0.25), 0.55),
            filter: `blur(${24 + scrollProgress * 8}px)`
          }}
        ></div>
        
        <div 
          className={`absolute ${isMobile 
            ? 'top-32 right-5 w-40 h-40' 
            : 'top-40 right-20 w-64 h-64 lg:w-96 lg:h-96'
          } bg-accent/6 rounded-full blur-3xl animate-float-slow`} 
          style={{ 
            animationDelay: '2s',
            transform: `translateY(${easeInOutQuart(rawProgress) * -18}px) scale(${1 + scrollProgress * 0.03})`,
            opacity: Math.max(0.6 - (opacityProgress * 0.15), 0.45),
            filter: `blur(${24 + scrollProgress * 6}px)`
          }}
        ></div>
        
        <div 
          className={`absolute ${isMobile 
            ? 'bottom-10 left-1/3 w-36 h-36' 
            : 'bottom-20 left-1/4 w-56 h-56 lg:w-80 lg:h-80'
          } bg-cyber/7 rounded-full blur-3xl animate-float-slow`} 
          style={{ 
            animationDelay: '4s',
            transform: `translateY(${easeOutQuart(rawProgress) * -12}px) scale(${1 + scrollProgress * 0.04})`,
            opacity: Math.max(0.7 - (opacityProgress * 0.2), 0.5),
            filter: `blur(${24 + scrollProgress * 4}px)`
          }}
        ></div>
        
        {/* Additional creative elements for desktop */}
        {!isMobile && (
          <>
            <div className="absolute top-1/3 left-1/2 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-1/3 right-1/3 w-32 h-32 bg-neon/5 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '6s' }}></div>
          </>
        )}
      </div>

      {/* Top Section - Hero Content (Full Width) */}
      <motion.div 
        className="hero-content relative z-20 w-full mb-12 sm:mb-16 lg:mb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 sm:mt-24 lg:mt-28"
        variants={itemVariants}
      >
        <motion.div 
          className="hero-title text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Clean Professional Header */}
          <div className="max-w-4xl mx-auto">
            {/* Name & Title */}
            <motion.h1 
              className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 font-mono"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="text-gray-400 text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-light block mb-2 font-mono">Hello, I'm</span>
              <span className="bg-gradient-to-r from-primary via-primary to-emerald-400 bg-clip-text text-transparent font-mono">
                Muhammed Favas T P
          </span>
        </motion.h1>
        
            {/* Professional Subtitle */}
        <motion.p 
              className="text-lg sm:text-2xl md:text-3xl text-gray-300 font-light mb-6 sm:mb-8 font-mono"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Project Coordinator & Full-Stack Developer
        </motion.p>
            
            {/* Professional Description */}
            <motion.div 
              className="max-w-3xl mx-auto mb-8 sm:mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <p className="text-gray-400 text-lg sm:text-xl leading-relaxed font-grotesk">
                Transforming complex challenges into elegant digital solutions through innovative engineering and strategic project leadership.
              </p>
              <div className="flex items-center justify-center gap-4 mt-4 text-gray-500 text-sm font-grotesk">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  Available for projects
                </span>
                <span>•</span>
                <span>Manjeri, Kerala, India</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Enhanced Professional Actions */}
        <motion.div 
          className="social-links flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.a 
            href="https://github.com/favasMuhammed" 
            target="_blank"
            rel="noopener noreferrer"
            className="social-link group relative overflow-hidden bg-gradient-to-r from-gray-900/60 to-gray-800/60 backdrop-blur-lg border border-gray-600/40 rounded-xl px-6 py-4 transition-all duration-300 hover:border-primary/60 hover:from-primary/10 hover:to-primary/5 no-underline shadow-lg"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-primary font-semibold text-sm uppercase tracking-wider mb-1">
                  Source Code
                </div>
                <div className="text-gray-300 text-sm font-grotesk">
                  Explore my projects
                </div>
              </div>
              <div className="text-primary text-2xl ml-4 group-hover:scale-110 transition-transform duration-300">
                <i className="fab fa-github"></i>
              </div>
            </div>
          </motion.a>
          
          <motion.a 
            href="https://www.linkedin.com/in/muhammed-favas-t-p" 
            target="_blank"
            rel="noopener noreferrer"
            className="social-link group relative overflow-hidden bg-gradient-to-r from-gray-900/60 to-gray-800/60 backdrop-blur-lg border border-gray-600/40 rounded-xl px-6 py-4 transition-all duration-300 hover:border-blue-400/60 hover:from-blue-400/10 hover:to-blue-500/5 no-underline shadow-lg"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-1">
                  Professional Network
                </div>
                <div className="text-gray-300 text-sm font-grotesk">
                  Let's connect
                </div>
              </div>
              <div className="text-blue-400 text-2xl ml-4 group-hover:scale-110 transition-transform duration-300">
                <i className="fab fa-linkedin"></i>
              </div>
            </div>
          </motion.a>
          
          <motion.a 
            href="#contact" 
            className="social-link group relative overflow-hidden bg-gradient-to-r from-gray-900/60 to-gray-800/60 backdrop-blur-lg border border-gray-600/40 rounded-xl px-6 py-4 transition-all duration-300 hover:border-cyan-400/60 hover:from-cyan-400/10 hover:to-cyan-500/5 no-underline shadow-lg"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-1">
                  Start Project
                </div>
                <div className="text-gray-300 text-sm font-grotesk">
                  Get in touch
                </div>
              </div>
              <div className="text-cyan-400 text-2xl ml-4 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-envelope"></i>
              </div>
            </div>
          </motion.a>
        </motion.div>
      </motion.div>
      
      {/* Bottom Section - Two Columns Layout */}
      <motion.div 
        className="hero-layout relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-start"
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

      
    </section>
  )
}

export default Hero
