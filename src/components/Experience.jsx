"use client";

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { LuBriefcase } from 'react-icons/lu'

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false)
  const experienceRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (experienceRef.current) {
      observer.observe(experienceRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const experiences = [
    {
      id: 1,
      title: "Freelance Full-stack web developer",
      company: "Nayrix - Remote",
      duration: "Oct 2025 - Present",
      description: "Delivered and deployed 5+ scalable, production-ready web applications, including ecommerce and business platforms. Implemented responsive frontend interfaces and robust backend services, serving 500+ monthly users.",
      achievements: ["Full-Stack Architecture", "Ecommerce", "PostgreSQL Optimization", "Client Collaboration"]
    },
    {
      id: 2,
      title: "Project Coordinator",
      company: "Tegrand Infotech",
      duration: "Sep 2024 - Sep 2025",
      description: "Coordinated 4-6 concurrent software projects, ensuring consistent on-time delivery. Worked closely with developers and designers to translate requirements into technical tasks and supported sprint planning.",
      achievements: ["Project Management", "Sprint Planning", "Team Leadership", "Agile Methodologies"]
    },
    {
      id: 5,
      title: "CSE Association Secretary",
      company: "MGM Group of Institutions",
      duration: "Aug 2024 - May 2025",
      description: "Organizing tech talks, workshops, seminars, and leading Code Fest including AI expo, debugging, quiz, and logo design contests.",
      achievements: ["Event Management", "Tech Leadership", "Workshop Organization", "Student Development"]
    },
    {
      id: 7,
      title: "Project Management Intern",
      company: "Urban Trash",
      duration: "Nov 2023 - Apr 2024",
      description: "Contributing to waste management and sustainability projects, assisting in event planning and project execution.",
      achievements: ["Sustainability", "Event Planning", "Project Execution", "Environmental Impact"]
    },
    {
      id: 3,
      title: "Junior Fullstack Developer",
      company: "Tegrand Infotech",
      duration: "Sep 2023 - Aug 2024",
      description: "Engineered and handled multiple full-stack web applications using Django REST Framework and React.js. Architected secure REST APIs and managed PostgreSQL databases for optimal performance.",
      achievements: ["Django REST Framework", "React.js", "API Integration", "Database Optimization"]
    },
    {
      id: 4,
      title: "Full Stack Web Developer Intern",
      company: "Tegrand Infotech",
      duration: "May 2023 - Aug 2023",
      description: "Built 3+ web applications using HTML, CSS, JavaScript, React, Django, and PostgreSQL. Created frontend components and backend API endpoints for real-world projects and contributed to an e-commerce platform.",
      achievements: ["Web Development", "React & Django", "Code Reviews", "System Design"]
    },
    {
      id: 8,
      title: "IEDC Executive Member",
      company: "MGM Group of Institutions",
      duration: "Oct 2022 - Mar 2024",
      description: "Chief Creative Officer of IEDC, managing creative direction for innovation workshops and events.",
      achievements: ["Creative Direction", "Innovation Management", "Event Planning", "Leadership"]
    },
    {
      id: 6,
      title: "Graphic Designer",
      company: "Freelance",
      duration: "Jan 2022 - June 2024",
      description: "Delivering designs for UAE-based companies, specializing in Adobe Creative Suite, digital branding, and marketing assets.",
      achievements: ["Adobe Creative Suite", "Digital Branding", "Marketing Assets", "Visual Storytelling"]
    }
  ]

  return (
    <section
      ref={experienceRef}
      id="experience"
      className="experience-section py-20 sm:py-24 lg:py-32 bg-dark relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-80 h-80 bg-accent/3 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary/3 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="section-header text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="section-icon w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-liquid"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >


            <LuBriefcase className="text-3xl text-dark" />
          </motion.div>

          <motion.h2
            className="section-title text-4xl sm:text-5xl font-bold text-text mb-6 font-departure-mono"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontFamily: 'Departure Mono, JetBrains Mono, monospace', fontSize: '36px', lineHeight: '40px' }}
          >
            Professional Journey
          </motion.h2>

          <motion.p
            className="section-description text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A timeline of my professional growth, showcasing the evolution from developer to project leader.
            Each role has shaped my approach to creating impactful digital solutions.
          </motion.p>
        </motion.div>

        <motion.div
          className="timeline relative max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-neon to-accent transform -translate-x-1/2 hidden md:block" />

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              className="timeline-item relative mb-16 transition-all duration-600"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              {/* Timeline Marker */}
              <motion.div
                className="timeline-marker absolute left-1/2 top-0 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-primary to-neon rounded-full transform -translate-x-1/2 border-2 sm:border-4 border-dark z-10 shadow-liquid"
                initial={{ scale: 0, opacity: 0 }}
                animate={isVisible ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.3 + 0.2 }}
                whileHover={{ scale: 1.2, boxShadow: "0 0 30px rgba(167, 226, 46, 0.6)" }}
              />

              {/* Timeline Content */}
              <motion.div
                className={`timeline-content bg-glass backdrop-blur-xl p-4 sm:p-6 lg:p-8 rounded-2xl border border-white/10 relative transition-all duration-300 shadow-glass hover:shadow-liquid ${index % 2 === 1 ? 'ml-0 mr-0 md:mr-[60%]' : 'ml-0 mr-0 md:ml-[60%]'
                  }`}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Content Header */}
                <div className="timeline-header mb-4 sm:mb-6">
                  <h3 className="job-title text-primary text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3 font-semibold leading-tight font-departure-mono">
                    {experience.title}
                  </h3>

                  <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
                    <span className="company text-accent font-medium text-base sm:text-lg">{experience.company}</span>
                    <span className="duration text-text-secondary text-xs sm:text-sm whitespace-nowrap bg-white/5 px-2 sm:px-3 py-1 rounded-full border border-white/10">
                      {experience.duration}
                    </span>
                  </div>
                </div>

                {/* Job Description */}
                <p className="job-description text-text-secondary mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base font-grotesk">
                  {experience.description}
                </p>

                {/* Achievements */}
                <div className="job-achievements flex gap-2 sm:gap-3 flex-wrap">
                  {experience.achievements.map((achievement, achievementIndex) => (
                    <span
                      key={achievementIndex}
                      className="achievement py-1.5 sm:py-2 px-3 sm:px-4 bg-gradient-to-r from-primary/10 to-neon/10 text-primary rounded-full text-xs sm:text-sm font-medium whitespace-nowrap border border-primary/20 backdrop-blur-sm"
                    >
                      {achievement}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
