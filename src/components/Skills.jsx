import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import {
  SiReact, SiTailwindcss, SiHtml5, SiBootstrap, SiPwa,
  SiDjango, SiPython, SiPostgresql,
  SiGit, SiWordpress, SiShopify, SiSanity
} from 'react-icons/si'
import {
  LuLayoutTemplate, LuServer, LuWrench, LuZap,
  LuSmartphone, LuGlobe, LuShieldCheck, LuPlug,
  LuListTodo, LuSearch
} from 'react-icons/lu'

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)
  const skillsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (skillsRef.current) {
      observer.observe(skillsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <LuLayoutTemplate />,
      skills: [
        { name: "React.js", level: 95, icon: <SiReact /> },
        { name: "Tailwind CSS", level: 92, icon: <SiTailwindcss /> },
        { name: "HTML5 / CSS3", level: 95, icon: <SiHtml5 /> },
        { name: "Bootstrap", level: 88, icon: <SiBootstrap /> },
        { name: "Responsive Design", level: 90, icon: <LuSmartphone /> },
        { name: "PWA", level: 80, icon: <SiPwa /> }
      ]
    },
    {
      title: "Backend Frameworks",
      icon: <LuServer />,
      skills: [
        { name: "Django REST Framework", level: 90, icon: <SiDjango /> },
        { name: "Python", level: 92, icon: <SiPython /> },
        { name: "PostgreSQL / SQL", level: 85, icon: <SiPostgresql /> },
        { name: "REST API Design", level: 88, icon: <LuGlobe /> },
        { name: "Security Practices", level: 82, icon: <LuShieldCheck /> },
        { name: "API Integration", level: 88, icon: <LuPlug /> }
      ]
    },
    {
      title: "Platforms & Tools",
      icon: <LuWrench />,
      skills: [
        { name: "Git / Version Control", level: 88, icon: <SiGit /> },
        { name: "WordPress", level: 85, icon: <SiWordpress /> },
        { name: "Shopify", level: 80, icon: <SiShopify /> },
        { name: "Sanity", level: 78, icon: <SiSanity /> },
        { name: "Agile Management", level: 85, icon: <LuListTodo /> },
        { name: "SEO Optimization", level: 82, icon: <LuSearch /> }
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const categoryVariants = {
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

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section
      id="skills"
      ref={skillsRef}
      className="skills-section py-32 bg-dark relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/3 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-mesh opacity-5 rounded-full blur-3xl animate-rotate"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="section-header text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="section-icon w-20 h-20 bg-gradient-to-r from-primary to-neon rounded-full flex items-center justify-center mx-auto mb-6 shadow-liquid"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <LuZap className="text-3xl text-dark" />
          </motion.div>

          <motion.h2
            className="section-title text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-6 font-departure-mono"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontFamily: 'Departure Mono, JetBrains Mono, monospace', fontSize: '36px', lineHeight: '40px' }}
          >
            Skills & Technologies
          </motion.h2>

          <motion.p
            className="section-description text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed px-4 font-grotesk"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A comprehensive toolkit of modern technologies and frameworks that power my creative vision.
            From pixel-perfect interfaces to robust backend systems, I bring ideas to life with precision and style.
          </motion.p>
        </motion.div>

        <motion.div
          className="skills-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skill-category bg-glass backdrop-blur-xl rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/10 transition-all duration-500 shadow-glass hover:shadow-liquid group h-full relative overflow-hidden"
              variants={categoryVariants}
              whileHover={{ y: -6, scale: 1.01 }}
            >
              {/* Category Header */}
              <div className="text-center mb-4 sm:mb-6 lg:mb-8">
                <motion.div
                  className="category-icon w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg text-dark text-2xl sm:text-3xl"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {category.icon}
                </motion.div>
                <h3 className="category-title text-primary text-base sm:text-lg lg:text-xl font-semibold font-departure-mono">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="skill-items flex flex-col gap-2 sm:gap-3 lg:gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item flex items-center gap-2 sm:gap-3 lg:gap-4 p-2 sm:p-3 lg:p-4 bg-white/5 rounded-xl transition-all duration-300 border border-white/5 hover:bg-white/10 hover:border-primary/30 group/item"
                    variants={skillVariants}
                    whileHover={{ x: 6, scale: 1.01 }}
                  >
                    <div className="skill-icon text-lg sm:text-xl lg:text-2xl min-w-6 sm:min-w-8 lg:min-w-10 text-primary flex items-center justify-center">
                      {skill.icon}
                    </div>
                    <div className="skill-info flex-1 min-w-0">
                      <span className="skill-name text-text font-medium text-xs sm:text-sm block truncate font-grotesk">{skill.name}</span>
                      <div className="skill-level relative h-1.5 sm:h-2 bg-white/10 rounded-full overflow-hidden mt-1.5 sm:mt-2">
                        <motion.div
                          className="skill-bar h-full bg-gradient-to-r from-primary to-neon rounded-full transition-all duration-2000 ease-out relative"
                          data-level={skill.level}
                          initial={{ width: 0 }}
                          animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 2, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
