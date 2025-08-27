import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'

const ThoughtsPage = () => {
  const [isVisible, setIsVisible] = useState(false)
  const thoughtsRef = useRef(null)

  useEffect(() => {
    setIsVisible(true)
    // Scroll to top when page loads
    window.scrollTo(0, 0)
  }, [])

  const thoughts = [
    {
      id: 1,
      slug: "robots-that-code-better-than-me",
      date: "Jan 15, 2025",
      title: "Robots That Code Better Than Me",
      preview: "AI just wrote my entire authentication system in 10 minutes. I'm not even mad, I'm impressed. Here's what I learned about working alongside our new robot overlords.",
      readTime: "3 min read",
      category: "AI & Development"
    },
    {
      id: 2,
      slug: "what-i-got-wrong-this-year",
      date: "Dec 28, 2024",
      title: "What I Got Wrong This Year", 
      preview: "Spoiler alert: Almost everything. From thinking CSS-in-JS was the future to believing I could ship without testing. My biggest failures and what they taught me.",
      readTime: "5 min read",
      category: "Reflection"
    },
    {
      id: 3,
      slug: "why-every-icon-strategy-fails",
      date: "Nov 12, 2024",
      title: "Why Every Icon Strategy Fails",
      preview: "We spend weeks debating icon libraries, only to end up with a Frankenstein's monster of SVGs, font icons, and random PNGs. The real problem isn't technical.",
      readTime: "4 min read",
      category: "Design Systems"
    },
    {
      id: 4,
      slug: "breaking-things-to-learn-them",
      date: "Oct 25, 2024",
      title: "Breaking Things to Learn Them",
      preview: "The best way to understand how something works? Break it. Systematically. On purpose. Here's my guide to productive destruction in development.",
      readTime: "6 min read",
      category: "Learning"
    },
    {
      id: 5,
      slug: "teaching-spreadsheet-people-to-dream",
      date: "Sep 18, 2024",
      title: "Teaching Spreadsheet People to Dream",
      preview: "How do you convince someone who lives in Excel that they can build apps? It starts with showing them that code is just another kind of formula.",
      readTime: "4 min read",
      category: "Leadership"
    },
    {
      id: 6,
      slug: "the-internets-best-kept-ai-secrets",
      date: "Aug 14, 2024",
      title: "The Internet's Best Kept AI Secrets",
      preview: "While everyone argues about ChatGPT, there are dozens of AI tools quietly revolutionizing how we work. Here are the ones actually worth your time.",
      readTime: "7 min read",
      category: "AI & Tools"
    },
    {
      id: 7,
      slug: "how-i-built-nothing-and-called-it-content",
      date: "Jul 20, 2024",
      title: "How I Built Nothing and Called It Content",
      preview: "Six months of 'content strategy' later, I realized I was just procrastinating with extra steps. Sometimes the best content is no content at all.",
      readTime: "3 min read",
      category: "Content Strategy"
    },
    {
      id: 8,
      slug: "click-here-to-edit-reality",
      date: "Jun 8, 2024",
      title: "Click Here to Edit Reality",
      preview: "The moment I realized I could change anything on any website with developer tools was the moment I understood real power. Also, the moment I broke everything.",
      readTime: "5 min read",
      category: "Web Development"
    },
    {
      id: 9,
      slug: "why-great-feels-impossible",
      date: "May 15, 2024",
      title: "Why Great Feels Impossible",
      preview: "Good is easy. Great is terrifying. It requires admitting that everything you've built so far is just practice. Here's how I learned to embrace the terror.",
      readTime: "6 min read",
      category: "Mindset"
    },
    {
      id: 10,
      slug: "hiring-designers-who-actually-design",
      date: "Apr 22, 2024",
      title: "Hiring Designers Who Actually Design",
      preview: "Too many 'designers' can't design. They can pixel-push and color-match, but ask them to solve a problem and they freeze. Here's how to spot the real ones.",
      readTime: "4 min read",
      category: "Hiring & Teams"
    },
    {
      id: 11,
      slug: "from-bio-science-to-bug-fixes",
      date: "Mar 30, 2024",
      title: "From Bio Science to Bug Fixes",
      preview: "How studying cell mitosis prepared me for debugging React components. Plot twist: both involve things dividing when they shouldn't.",
      readTime: "5 min read",
      category: "Career Journey"
    },
    {
      id: 12,
      slug: "talks-that-nobody-remembers",
      date: "Feb 14, 2024",
      title: "Talks That Nobody Remembers",
      preview: "I've given 47 presentations in my career. People remember exactly zero of them. Here's what I learned about actually connecting with an audience.",
      readTime: "4 min read",
      category: "Communication"
    }
  ]

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
    <div className="min-h-screen bg-dark text-text font-mono">
      <Navbar />
      
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
            {thoughts.map((thought) => (
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
                  <Link to={`/thoughts/${thought.slug}`} className="no-underline">
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
                    to={`/thoughts/${thought.slug}`}
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
      
      <Footer />
    </div>
  )
}

export default ThoughtsPage
