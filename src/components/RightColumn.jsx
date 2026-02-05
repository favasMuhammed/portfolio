import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

const RightColumn = () => {
  const [isVisible, setIsVisible] = useState(false)
  const columnRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (columnRef.current) {
      observer.observe(columnRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <motion.div
      ref={columnRef}
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {/* Thoughts Section */}
      <motion.div
        className="thoughts-section mb-8 sm:mb-12 bg-white/2 p-4 sm:p-6 lg:p-8 rounded-lg border border-white/5 backdrop-blur-10"
        variants={itemVariants}
      >
        <h2 className="section-title text-text text-lg sm:text-xl font-semibold mb-4 sm:mb-6 font-departure-mono tracking-tight">Recent Thoughts</h2>
        <div className="thoughts-list flex flex-col gap-2 sm:gap-4">
          {/* ... items ... */}
          {/* Replace this manual list with data map later if desired, but user just wants migration for now */}
          <div className="thought-item flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 sm:p-4 bg-white/3 rounded-md border border-white/5 transition-all duration-300 hover:bg-white/5 hover:border-primary/30 hover:translate-x-1">
            <span className="thought-date text-text-muted text-xs sm:text-sm font-mono mb-1 sm:mb-0">Jan 15</span>
            <span className="thought-title text-text-secondary font-medium transition-all duration-300 text-sm sm:text-base leading-tight font-grotesk">Robots That Code Better Than Me</span>
          </div>
          <div className="thought-item flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 sm:p-4 bg-white/3 rounded-md border border-white/5 transition-all duration-300 hover:bg-white/5 hover:border-primary/30 hover:translate-x-1">
            <span className="thought-date text-text-muted text-xs sm:text-sm font-mono mb-1 sm:mb-0">Dec 28</span>
            <span className="thought-title text-text-secondary font-medium transition-all duration-300 text-sm sm:text-base leading-tight font-grotesk">What I Got Wrong This Year</span>
          </div>
          <div className="thought-item flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 sm:p-4 bg-white/3 rounded-md border border-white/5 transition-all duration-300 hover:bg-white/5 hover:border-primary/30 hover:translate-x-1">
            <span className="thought-date text-text-muted text-xs sm:text-sm font-mono mb-1 sm:mb-0">Nov 12</span>
            <span className="thought-title text-text-secondary font-medium transition-all duration-300 text-sm sm:text-base leading-tight font-grotesk">Why Every Icon Strategy Fails</span>
          </div>
          <div className="thought-item flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 sm:p-4 bg-white/3 rounded-md border border-white/5 transition-all duration-300 hover:bg-white/5 hover:border-primary/30 hover:translate-x-1">
            <span className="thought-date text-text-muted text-xs sm:text-sm font-mono mb-1 sm:mb-0">Oct 25</span>
            <span className="thought-title text-text-secondary font-medium transition-all duration-300 text-sm sm:text-base leading-tight font-grotesk">Breaking Things to Learn Them</span>
          </div>
          <div className="thought-item flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 sm:p-4 bg-white/3 rounded-md border border-white/5 transition-all duration-300 hover:bg-white/5 hover:border-primary/30 hover:translate-x-1">
            <span className="thought-date text-text-muted text-xs sm:text-sm font-mono mb-1 sm:mb-0">Sep 18</span>
            <span className="thought-title text-text-secondary font-medium transition-all duration-300 text-sm sm:text-base leading-tight font-grotesk">Teaching Spreadsheet People to Dream</span>
          </div>
        </div>
        <div className="thoughts-more mt-4 sm:mt-6 text-center">
          <Link href="/thoughts" className="more-link text-primary no-underline font-medium transition-all duration-300 hover:text-primary-dark hover:translate-x-1 text-sm sm:text-base font-grotesk">More thoughts →</Link>
        </div>
      </motion.div>

      {/* Education Section */}
      <motion.div
        className="education-section mb-8 sm:mb-12 bg-white/2 p-4 sm:p-6 lg:p-8 rounded-lg border border-white/5 backdrop-blur-10"
        variants={itemVariants}
      >
        <h2 className="section-title text-text text-lg sm:text-xl font-semibold mb-4 sm:mb-6 font-departure-mono tracking-tight">Education</h2>
        <div className="edu-list flex flex-col gap-4">
          <div className="edu-item p-3 bg-white/3 rounded-md border border-white/5 transition-all duration-300 hover:bg-white/5 hover:border-primary/30">
            <div className="text-primary font-medium text-sm sm:text-base font-grotesk">B.Tech Computer Science and Engineering</div>
            <div className="text-text-secondary text-xs sm:text-sm mt-1">APJ Abdul Kalam Technological University</div>
            <div className="text-text-muted text-xs font-mono mt-1">May 2025</div>
          </div>
          <div className="edu-item p-3 bg-white/3 rounded-md border border-white/5 transition-all duration-300 hover:bg-white/5 hover:border-primary/30">
            <div className="text-primary font-medium text-sm sm:text-base font-grotesk">C-Tech Graphic Design</div>
            <div className="text-text-secondary text-xs sm:text-sm mt-1">Image Institute of Multimedia Arts</div>
            <div className="text-text-muted text-xs font-mono mt-1">Nov 2021</div>
          </div>
        </div>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        className="skills-section mb-8 sm:mb-12 bg-white/2 p-4 sm:p-6 lg:p-8 rounded-lg border border-white/5 backdrop-blur-10"
        variants={itemVariants}
      >
        <h2 className="section-title text-text text-lg sm:text-xl font-semibold mb-4 sm:mb-6 font-departure-mono tracking-tight">Top Skills</h2>
        <div className="skills-list flex flex-wrap gap-2 sm:gap-3">
          <span className="skill-tag py-1.5 sm:py-2 px-3 sm:px-4 bg-primary/10 text-primary border border-primary/30 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 hover:bg-primary/20 hover:border-primary hover:-translate-y-1 font-grotesk">React.js</span>
          <span className="skill-tag py-1.5 sm:py-2 px-3 sm:px-4 bg-primary/10 text-primary border border-primary/30 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 hover:bg-primary/20 hover:border-primary hover:-translate-y-1 font-grotesk">Django</span>
          <span className="skill-tag py-1.5 sm:py-2 px-3 sm:px-4 bg-primary/10 text-primary border border-primary/30 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 hover:bg-primary/20 hover:border-primary hover:-translate-y-1 font-grotesk">Tailwind CSS</span>
          <span className="skill-tag py-1.5 sm:py-2 px-3 sm:px-4 bg-primary/10 text-primary border border-primary/30 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 hover:bg-primary/20 hover:border-primary hover:-translate-y-1 font-grotesk">Project Management</span>
          <span className="skill-tag py-1.5 sm:py-2 px-3 sm:px-4 bg-primary/10 text-primary border border-primary/30 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 hover:bg-primary/20 hover:border-primary hover:-translate-y-1 font-grotesk">UI/UX Design</span>
          <span className="skill-tag py-1.5 sm:py-2 px-3 sm:px-4 bg-primary/10 text-primary border border-primary/30 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 hover:bg-primary/20 hover:border-primary hover:-translate-y-1 font-grotesk">Problem Solving</span>
        </div>
      </motion.div>

      {/* Languages Section */}
      <motion.div
        className="languages-section mb-8 sm:mb-12 bg-white/2 p-4 sm:p-6 lg:p-8 rounded-lg border border-white/5 backdrop-blur-10"
        variants={itemVariants}
      >
        <h2 className="section-title text-text text-lg sm:text-xl font-semibold mb-4 sm:mb-6 font-departure-mono tracking-tight">Languages</h2>
        <div className="language-list flex flex-col gap-2 sm:gap-3">
          <div className="language-item flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 bg-white/3 rounded-md border border-white/5">
            <span className="language-name text-text font-medium text-sm sm:text-base font-grotesk">English</span>
            <span className="language-level text-text-muted text-xs sm:text-sm font-mono mt-1 sm:mt-0">Proficient (C2)</span>
          </div>
          <div className="language-item flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 bg-white/3 rounded-md border border-white/5">
            <span className="language-name text-text font-medium text-sm sm:text-base font-grotesk">Malayalam</span>
            <span className="language-level text-text-muted text-xs sm:text-sm font-mono mt-1 sm:mt-0">Native</span>
          </div>
          <div className="language-item flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 bg-white/3 rounded-md border border-white/5">
            <span className="language-name text-text font-medium text-sm sm:text-base font-grotesk">Hindi</span>
            <span className="language-level text-text-muted text-xs sm:text-sm font-mono mt-1 sm:mt-0">Elementary (A2)</span>
          </div>
          <div className="language-item flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 bg-white/3 rounded-md border border-white/5">
            <span className="language-name text-text font-medium text-sm sm:text-base font-grotesk">Tamil</span>
            <span className="language-level text-text-muted text-xs sm:text-sm font-mono mt-1 sm:mt-0">Elementary (A2)</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default RightColumn
