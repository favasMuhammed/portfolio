"use client";

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import ReCAPTCHA from 'react-google-recaptcha'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('') // 'loading', 'success', 'error'
  const [message, setMessage] = useState('')
  const [recaptchaToken, setRecaptchaToken] = useState('')
  const recaptchaRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setStatus('error')
      setMessage('Please enter a valid email address')
      return
    }

    // reCAPTCHA validation
    if (!recaptchaToken) {
      setStatus('error')
      setMessage('Please verify that you are not a robot')
      return
    }

    setStatus('loading')
    setMessage('')

    try {
      // EmailJS configuration with enhanced data
      const templateParams = {
        user_email: email,
        to_name: 'Favas',
        from_name: email.split('@')[0],
        current_date: new Date().toLocaleDateString(),
        current_time: new Date().toLocaleTimeString(),
        message: `🎉 New newsletter subscription!
        
Email: ${email}
Source: Portfolio website (favastp.dev)
Page: /thoughts
Timestamp: ${new Date().toLocaleString()}
Status: ACTIVE
        
The subscriber is interested in your thoughts on building digital experiences and development insights.`
      }

      // EmailJS credentials
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_dnfvngv',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_zneqdh4',
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '_dOXFXApqN2b9IZT7'
      )

      setStatus('success')
      setMessage('Thanks for subscribing! You\'ll hear from me soon.')
      setEmail('')
      setRecaptchaToken('')
      if (recaptchaRef.current) {
        recaptchaRef.current.reset()
      }

      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus('')
        setMessage('')
      }, 5000)

    } catch (error) {
      console.error('Newsletter subscription error:', error)
      setStatus('error')
      setMessage('Something went wrong. Please try again.')

      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus('')
        setMessage('')
      }, 5000)
    }
  }

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="newsletter-section bg-darker/50 border border-white/10 rounded-2xl p-8 backdrop-blur-sm"
    >
      <div className="text-center max-w-md mx-auto">
        <h3 className="text-xl font-bold text-white mb-3 font-departure-mono">
          More Thoughts?
        </h3>
        <p className="text-gray-400 mb-6 font-grotesk">
          Get my latest thoughts delivered to your inbox. No spam, just honest takes on building stuff.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full px-4 py-3 bg-dark/50 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 font-grotesk"
              disabled={status === 'loading'}
            />
          </div>

          {/* reCAPTCHA */}
          <div className="flex justify-center">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '6LdWwbQrAAAAALATgchrnKw5PbXvfvygSF8GnER5'}
              onChange={handleRecaptchaChange}
              theme="dark"
              size="compact"
            />
          </div>

          <motion.button
            type="submit"
            disabled={status === 'loading' || !email || !recaptchaToken}
            className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 font-grotesk ${status === 'loading' || !email || !recaptchaToken
              ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
              : 'bg-primary text-dark hover:bg-primary-dark hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/25'
              }`}
            whileHover={status !== 'loading' && email && recaptchaToken ? { scale: 1.02 } : {}}
            whileTap={status !== 'loading' && email && recaptchaToken ? { scale: 0.98 } : {}}
          >
            {status === 'loading' ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                Subscribing...
              </div>
            ) : (
              'Subscribe'
            )}
          </motion.button>
        </form>

        {/* Status Messages */}
        {message && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-4 p-3 rounded-lg text-sm font-grotesk ${status === 'success'
              ? 'bg-green-500/20 text-green-400 border border-green-500/30'
              : status === 'error'
                ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                : ''
              }`}
          >
            {message}
          </motion.div>
        )}

        <p className="text-xs text-gray-500 mt-4 font-grotesk">
          No spam, unsubscribe anytime. I respect your inbox.
        </p>
      </div>
    </motion.div>
  )
}

export default Newsletter
