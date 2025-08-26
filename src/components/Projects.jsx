import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')
  const projectsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (projectsRef.current) {
      observer.observe(projectsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      id: 1,
      title: "TeacherSync Platform",
      description: "A comprehensive educational management system that revolutionizes how teachers and students interact. Features real-time collaboration, automated grading, and intelligent analytics.",
      category: "web",
      technologies: ["React", "TypeScript", "Node.js"],
      features: ["Real-time Sync", "AI Grading", "Analytics"],
      icon: "fas fa-chalkboard-teacher",
      githubUrl: "https://github.com/favasMuhammed/TeacherSync",
      liveUrl: "#",
      image: "/api/placeholder/400/300"
    },
    {
      id: 2,
      title: "EduManage System",
      description: "An intelligent educational administration platform that streamlines school operations. Includes student management, course scheduling, and performance tracking.",
      category: "web",
      technologies: ["TypeScript", "React", "Express"],
      features: ["Student Portal", "Course Management", "Reports"],
      icon: "fas fa-graduation-cap",
      githubUrl: "https://github.com/favasMuhammed/EduManage",
      liveUrl: "#",
      image: "/api/placeholder/400/300"
    },
    {
      id: 3,
      title: "Gourmet Delight Restaurant",
      description: "A modern, responsive restaurant website with interactive menu, reservation system, and staff dashboard. Built with cutting-edge web technologies.",
      category: "web",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      features: ["Interactive Menu", "Reservations", "Dashboard"],
      icon: "fas fa-utensils",
      githubUrl: "https://github.com/favasMuhammed/gourmet-delight-restaurant",
      liveUrl: "#",
      image: "/api/placeholder/400/300"
    },
    {
      id: 4,
      title: "Speech Emotion Recognition",
      description: "Advanced AI system that analyzes speech patterns to detect emotional states. Uses machine learning algorithms for real-time emotion classification.",
      category: "ai",
      technologies: ["Python", "TensorFlow", "OpenCV"],
      features: ["Real-time Analysis", "ML Models", "API"],
      icon: "fas fa-microphone",
      githubUrl: "https://github.com/favasMuhammed/SpeechEmotionRecognition2025",
      liveUrl: "#",
      image: "/api/placeholder/400/300"
    },
    {
      id: 5,
      title: "AI Exam System",
      description: "Intelligent examination platform with automated question generation, adaptive testing, and comprehensive analytics for educational institutions.",
      category: "ai",
      technologies: ["Django", "Python", "PostgreSQL"],
      features: ["Auto Questions", "Adaptive Tests", "Analytics"],
      icon: "fas fa-brain",
      githubUrl: "https://github.com/favasMuhammed/AiExam-django",
      liveUrl: "#",
      image: "/api/placeholder/400/300"
    },
    {
      id: 6,
      title: "E-commerce Solution",
      description: "Full-featured online shopping platform with product management, user authentication, payment integration, and order tracking system.",
      category: "web",
      technologies: ["Django", "JavaScript", "Tailwind CSS"],
      features: ["Product Catalog", "Payment Gateway", "Order Tracking"],
      icon: "fas fa-shopping-cart",
      githubUrl: "https://github.com/favasMuhammed/DECOM",
      liveUrl: "#",
      image: "/api/placeholder/400/300"
    }
  ]

  const categories = [
    { id: 'all', name: 'All Projects', icon: 'fas fa-th-large' },
    { id: 'web', name: 'Web Apps', icon: 'fas fa-globe' },
    { id: 'ai', name: 'AI/ML', icon: 'fas fa-brain' },
    { id: 'mobile', name: 'Mobile', icon: 'fas fa-mobile-alt' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

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

  const projectVariants = {
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

  const filterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section ref={projectsRef} className="projects-section py-32 bg-darker relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyber/3 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '3s' }}></div>
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
            <i className="fas fa-rocket text-3xl text-dark"></i>
          </motion.div>
          
          <motion.h2 
            className="section-title text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-6 font-departure-mono"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontFamily: 'Departure Mono, JetBrains Mono, monospace', fontSize: '36px', lineHeight: '40px' }}
          >
            Featured Projects
          </motion.h2>
          
          <motion.p 
            className="section-description text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A curated collection of innovative projects that showcase my expertise in modern web technologies, 
            artificial intelligence, and user experience design. Each project represents a unique challenge and creative solution.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="filter-buttons flex flex-wrap justify-center gap-4 mb-16 px-4"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`filter-btn px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 text-sm sm:text-base ${
                activeFilter === category.id
                  ? 'bg-primary text-dark shadow-liquid'
                  : 'bg-glass text-text-secondary hover:text-primary hover:bg-white/10 border border-white/10'
              }`}
              variants={filterVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className={category.icon}></i>
              <span className="hidden sm:inline">{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        <motion.div 
          className="projects-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="project-card group bg-glass backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 transition-all duration-500 shadow-glass hover:shadow-liquid h-full flex flex-col"
              variants={projectVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              layout
            >
              {/* Project Header - Clean and Minimal */}
              <div className="project-header h-24 sm:h-32 bg-gradient-to-br from-dark/80 to-dark/60 relative flex items-center justify-center overflow-hidden flex-shrink-0 border-b border-white/10">
                <div className="project-overlay absolute inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <div className="project-links flex gap-4">
                    <motion.a 
                      href={project.liveUrl} 
                      className="project-link w-12 h-12 bg-primary/90 backdrop-blur-md rounded-full flex items-center justify-center text-dark no-underline transition-all duration-300 transform scale-0 group-hover:scale-100 hover:bg-primary hover:scale-110 shadow-lg"
                      title="Live Demo"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </motion.a>
                    <motion.a 
                      href={project.githubUrl} 
                      className="project-link w-12 h-12 bg-primary/90 backdrop-blur-md rounded-full flex items-center justify-center text-dark no-underline transition-all duration-300 transform scale-0 group-hover:scale-100 hover:bg-primary hover:scale-110 shadow-lg"
                      title="View Code" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <i className="fab fa-github"></i>
                    </motion.a>
                  </div>
                </div>
                
                {/* Technology Tags */}
                <div className="project-tech absolute top-3 right-3 flex gap-2">
                  {project.technologies.slice(0, 2).map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag py-1 px-2 bg-black/80 text-text rounded-full text-xs font-medium whitespace-nowrap backdrop-blur-md border border-white/20">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Project Icon */}
                <div className="project-icon text-2xl sm:text-3xl lg:text-4xl text-primary/80 group-hover:text-primary transition-colors duration-300">
                  <i className={project.icon}></i>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="project-content p-3 sm:p-4 lg:p-6 flex-1 flex flex-col">
                <h3 className="project-title text-primary mb-2 sm:mb-3 text-base sm:text-lg lg:text-xl font-semibold leading-tight font-departure-mono">{project.title}</h3>
                <p className="project-description text-text-secondary mb-3 sm:mb-4 leading-relaxed text-xs sm:text-sm flex-1">
                  {project.description}
                </p>
                <div className="project-features flex gap-1.5 sm:gap-2 flex-wrap mt-auto">
                  {project.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className="feature py-0.5 sm:py-1 px-2 sm:px-3 bg-primary/10 text-primary rounded-full text-xs font-medium whitespace-nowrap border border-primary/20">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-16 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href="https://github.com/favasMuhammed?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="view-all-btn inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-primary text-dark font-semibold rounded-lg no-underline transition-all duration-300 hover:bg-neon hover:-translate-y-1 hover:shadow-liquid shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fab fa-github text-lg sm:text-xl"></i>
            <span className="text-sm sm:text-base">View All Projects</span>
            <i className="fas fa-arrow-right text-sm sm:text-base"></i>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
