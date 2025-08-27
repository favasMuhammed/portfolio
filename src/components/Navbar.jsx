import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hoveredLink, setHoveredLink] = useState(null)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    // If we're not on the homepage, navigate to homepage first
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`)
      return
    }
    
    // If we're on homepage, scroll to section
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({ top: offsetTop, behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { id: 'thoughts', label: 'Thoughts', isExternal: true, path: '/thoughts' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 sm:top-4 left-0 sm:left-1/2 sm:-translate-x-1/2 z-50 transition-all duration-700 w-full sm:w-auto
        ${isScrolled
          ? 'backdrop-blur-2xl bg-white/30 dark:bg-black/40 shadow-xl border-b border-white/20 sm:border sm:rounded-2xl'
          : 'backdrop-blur-lg bg-white/10 dark:bg-black/20 shadow-md border-b border-white/10 sm:border sm:rounded-2xl'
        }
        px-4 sm:px-6 lg:px-8 py-3 sm:py-3 lg:py-4 flex items-center justify-between sm:justify-start gap-3 sm:gap-6 lg:gap-8`}
    >

      {/* Brand / Logo */}
      <motion.button
        onClick={() => {
          if (location.pathname !== '/') {
            navigate('/')
          } else {
            scrollToSection('home')
          }
        }}
        className="relative font-mono text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-100 group"
        whileHover={{ scale: 1.05, rotate: 2 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="relative z-10">favastp &gt;</span>
        <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/10 via-pink-500/5 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm -z-10" />
        <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 -z-20" />
      </motion.button>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-6 lg:gap-8">
        {navItems.map((item) => (
          item.isExternal ? (
            <motion.div
              key={item.id}
              onHoverStart={() => setHoveredLink(item.id)}
              onHoverEnd={() => setHoveredLink(null)}
              className="relative"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={item.path}
                className="relative text-gray-700 dark:text-gray-300 text-sm font-medium py-2 px-3 rounded-lg group transition-colors no-underline block"
              >
                <span className="relative z-10">{item.label}</span>

                {/* Liquid Underlay */}
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/5 to-cyan-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10" />

                {/* Animated Underline */}
                <motion.span
                  className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: hoveredLink === item.id ? '100%' : 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                />

                {/* Glow Effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-700 -z-20 blur-sm" />
              </Link>
            </motion.div>
          ) : (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              onHoverStart={() => setHoveredLink(item.id)}
              onHoverEnd={() => setHoveredLink(null)}
              className="relative text-gray-700 dark:text-gray-300 text-sm font-medium py-2 px-3 rounded-lg group transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">{item.label}</span>

              {/* Liquid Underlay */}
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/5 to-cyan-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10" />

              {/* Animated Underline */}
              <motion.span
                className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: hoveredLink === item.id ? '100%' : 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              />

              {/* Glow Effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-700 -z-20 blur-sm" />
            </motion.button>
          )
        ))}
      </div>

      {/* Mobile Menu Button */}
      <motion.button
        className="md:hidden p-2 rounded-lg relative group text-gray-700 dark:text-gray-300"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg className="w-6 h-6 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
        <span className="absolute inset-0 rounded-lg bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm -z-10" />
      </motion.button>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="absolute top-full left-0 right-0 mt-0 sm:mt-2 bg-white/90 dark:bg-black/90 backdrop-blur-2xl border-b border-white/20 sm:border sm:rounded-2xl shadow-2xl overflow-hidden w-full sm:w-auto"
          >
            <div className="p-4 flex flex-col gap-2">
              {navItems.map((item) => (
                item.isExternal ? (
                  <motion.div
                    key={item.id}
                    className="relative"
                    whileHover={{ x: 4, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="relative text-gray-700 dark:text-gray-300 text-base py-3 px-4 rounded-lg group text-left w-full no-underline block"
                    >
                      <span className="relative z-10">{item.label}</span>
                      <span className="absolute inset-0 bg-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10" />
                    </Link>
                  </motion.div>
                ) : (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="relative text-gray-700 dark:text-gray-300 text-base py-3 px-4 rounded-lg group text-left w-full"
                    whileHover={{ x: 4, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">{item.label}</span>
                    <span className="absolute inset-0 bg-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10" />
                  </motion.button>
                )
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
