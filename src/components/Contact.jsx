"use client";

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import ReCAPTCHA from 'react-google-recaptcha'
import { LuMail, LuMapPin } from 'react-icons/lu'
import { FaWhatsapp, FaLinkedin, FaGithub, FaSpinner } from 'react-icons/fa'

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [recaptchaToken, setRecaptchaToken] = useState('')
  const contactRef = useRef(null)
  const recaptchaRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (contactRef.current) {
      observer.observe(contactRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.trim().length < 2 ? 'Name must be at least 2 characters' : ''
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return !emailRegex.test(value) ? 'Please enter a valid email' : ''
      case 'subject':
        return value.trim().length < 3 ? 'Subject must be at least 3 characters' : ''
      case 'message':
        return value.trim().length < 10 ? 'Message must be at least 10 characters' : ''
      default:
        return ''
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    // Real-time validation
    if (touched[name]) {
      const error = validateField(name, value)
      setErrors(prev => ({
        ...prev,
        [name]: error
      }))
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouched(prev => ({
      ...prev,
      [name]: true
    }))

    const error = validateField(name, value)
    setErrors(prev => ({
      ...prev,
      [name]: error
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // reCAPTCHA validation
    if (!recaptchaToken) {
      alert('Please verify that you are not a robot')
      return
    }

    setIsSubmitting(true)

    // Prepare WhatsApp message with proper formatting
    const whatsappMessage = `*New Portfolio Contact Message*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Subject:* ${formData.subject}
*Message:* ${formData.message}

---
Sent from favastp.dev portfolio`

    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappUrl = `https://wa.me/971566764636?text=${encodedMessage}`

    // Simulate form submission delay
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Use different approach for mobile vs desktop
      setTimeout(() => {
        try {
          // Detect if it's mobile
          const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

          if (isMobile) {
            // For mobile, use direct navigation to ensure app opening
            window.location.href = whatsappUrl
          } else {
            // For desktop, try window.open first, fallback to location
            const newWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
            if (!newWindow || newWindow.closed || typeof newWindow.closed == 'undefined') {
              // Popup blocked, use direct navigation
              window.location.href = whatsappUrl
            }
          }
        } catch (error) {
          console.error('Error opening WhatsApp:', error)
          // Fallback: try direct navigation
          window.location.href = whatsappUrl
        }

        // Reset form after successful redirect
        setTimeout(() => {
          setFormData({ name: '', email: '', subject: '', message: '' })
          setRecaptchaToken('')
          if (recaptchaRef.current) {
            recaptchaRef.current.reset()
          }
          setIsSubmitted(false)
        }, 2000)
      }, 1000)
    }, 1500)
  }

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token)
  }



  const contactInfo = [
    {
      icon: <LuMail />,
      title: "Email",
      value: "favastp2@gmail.com",
      link: "mailto:favastp2@gmail.com"
    },
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      value: "+971 56 676 4636",
      link: "https://wa.me/971566764636"
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "muhammed-favas-t-p",
      link: "https://www.linkedin.com/in/muhammed-favas-t-p"
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "github.com/favasMuhammed",
      link: "https://github.com/favasMuhammed"
    },
    {
      icon: <LuMapPin />,
      title: "Location",
      value: "Dubai, UAE (Home: Kerala, India)",
      link: null
    }
  ]

  return (
    <section
      ref={contactRef}
      id="contact"
      className="contact py-20 sm:py-24 lg:py-32 bg-darker relative overflow-hidden"
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header text-center mb-16">
          <motion.h2
            className="section-title text-4xl sm:text-5xl font-bold text-text mb-6 font-departure-mono"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontFamily: 'Departure Mono, JetBrains Mono, monospace', fontSize: '36px', lineHeight: '40px' }}
          >
            Get In Touch
          </motion.h2>
          <div className="title-line w-25 h-1 bg-gradient-to-r from-primary to-primary-dark rounded mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-primary/80 to-transparent animate-shimmer"></div>
          </div>
        </div>

        <div className="contact-content grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16">
          {/* Contact Info */}
          <div className="contact-info flex flex-col gap-4 sm:gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={info.title}
                className="contact-item flex items-center gap-4 sm:gap-6 p-4 sm:p-6 bg-gray-900/60 rounded-lg border border-gray-700/30 transition-all duration-300 backdrop-blur-10 hover:bg-gray-800/80 hover:translate-x-1"
              >
                <div className="contact-icon w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-primary to-primary-dark rounded-full flex items-center justify-center text-text text-lg sm:text-xl flex-shrink-0">
                  {info.icon}
                </div>
                <div className="contact-details min-w-0 flex-1">
                  <h4 className="text-primary mb-1 sm:mb-2 font-semibold text-sm sm:text-base">{info.title}</h4>
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.title === "LinkedIn" || info.title === "GitHub" || info.title === "WhatsApp" ? "_blank" : undefined}
                      rel={info.title === "LinkedIn" || info.title === "GitHub" || info.title === "WhatsApp" ? "noopener noreferrer" : undefined}
                      className="text-text-secondary no-underline transition-all duration-300 hover:text-primary text-xs sm:text-sm break-all font-grotesk"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <span className="text-text-secondary text-xs sm:text-sm font-grotesk">{info.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <form className="form space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
              <motion.div className="form-group relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={`form-input w-full p-3 sm:p-4 bg-gray-900/80 border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-all duration-300 backdrop-blur-10 text-sm sm:text-base font-grotesk ${errors.name && touched.name ? 'border-red-500 focus:border-red-400' : 'border-gray-700/50 focus:border-primary'
                    }`}
                  placeholder="Your Name"
                  required
                />
                {errors.name && touched.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-400 text-xs mt-1 flex items-center gap-1"
                  >
                    <span>⚠</span> {errors.name}
                  </motion.p>
                )}
              </motion.div>
              <motion.div className="form-group relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={`form-input w-full p-3 sm:p-4 bg-gray-900/80 border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-all duration-300 backdrop-blur-10 text-sm sm:text-base font-grotesk ${errors.email && touched.email ? 'border-red-500 focus:border-red-400' : 'border-gray-700/50 focus:border-primary'
                    }`}
                  placeholder="Your Email"
                  required
                />
                {errors.email && touched.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-400 text-xs mt-1 flex items-center gap-1"
                  >
                    <span>⚠</span> {errors.email}
                  </motion.p>
                )}
              </motion.div>
              <motion.div className="form-group relative">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={`form-input w-full p-3 sm:p-4 bg-gray-900/80 border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-all duration-300 backdrop-blur-10 text-sm sm:text-base font-grotesk ${errors.subject && touched.subject ? 'border-red-500 focus:border-red-400' : 'border-gray-700/50 focus:border-primary'
                    }`}
                  placeholder="Subject"
                  required
                />
                {errors.subject && touched.subject && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-400 text-xs mt-1 flex items-center gap-1"
                  >
                    <span>⚠</span> {errors.subject}
                  </motion.p>
                )}
              </motion.div>
              <motion.div className="form-group relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={`form-textarea w-full p-3 sm:p-4 bg-gray-900/80 border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-all duration-300 backdrop-blur-10 resize-none text-sm sm:text-base ${errors.message && touched.message ? 'border-red-500 focus:border-red-400' : 'border-gray-700/50 focus:border-primary'
                    }`}
                  placeholder="Your Message"
                  rows="4"
                  required
                />
                {errors.message && touched.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-400 text-xs mt-1 flex items-center gap-1"
                  >
                    <span>⚠</span> {errors.message}
                  </motion.p>
                )}
              </motion.div>

              {/* reCAPTCHA */}
              <div className="flex justify-center">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '6LdWwbQrAAAAALATgchrnKw5PbXvfvygSF8GnER5'}
                  onChange={handleRecaptchaChange}
                  theme="dark"
                />
              </div>

              <button type="submit" className="btn btn-primary w-full py-3 sm:py-4 px-6 sm:px-8 bg-gradient-to-r from-primary to-primary-dark rounded-md text-dark no-underline font-semibold transition-all duration-300 hover:from-primary-dark hover:to-primary hover:-translate-y-1 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base" disabled={isSubmitting || !recaptchaToken}>
                {isSubmitting ? (
                  <span className="flex items-center gap-2 justify-center">
                    <FaSpinner className="animate-spin" />
                    <span className="hidden sm:inline">Sending...</span>
                    <span className="sm:hidden">Sending</span>
                  </span>
                ) : isSubmitted ? (
                  <span className="flex items-center gap-2 justify-center">
                    <FaWhatsapp />
                    <span className="hidden sm:inline">Redirecting to WhatsApp...</span>
                    <span className="sm:hidden">Redirecting...</span>
                  </span>
                ) : (
                  <span className="flex items-center gap-2 justify-center">
                    <FaWhatsapp />
                    <span className="hidden sm:inline">Send via WhatsApp</span>
                    <span className="sm:hidden">WhatsApp</span>
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
