"use client";

import { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import Philosophy from '../components/Philosophy'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Contact from '../components/Contact'
import Certifications from '../components/Certifications'

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    // Handle hash scrolling when page loads
    const scrollToHashSection = () => {
      const hash = window.location.hash.substring(1) // Remove the '#'
      if (hash) {
        // Small delay to ensure components are rendered
        setTimeout(() => {
          const element = document.getElementById(hash)
          if (element) {
            const offsetTop = element.offsetTop - 80
            window.scrollTo({ top: offsetTop, behavior: 'smooth' })
          }
        }, 100)
      }
    }

    scrollToHashSection()

    // Listen for hash changes
    window.addEventListener('hashchange', scrollToHashSection)

    return () => {
      window.removeEventListener('hashchange', scrollToHashSection)
    }
  }, [])

  return (
    <div className={`${isLoaded ? 'loaded' : ''}`}>
      <main>
        <Hero />
        <Philosophy />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
    </div>
  )
}

export default HomePage
