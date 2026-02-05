import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer bg-darker py-12 sm:py-16 pt-12 sm:pt-16 border-t border-white/5 mt-16 relative">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="footer-content grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-6 sm:mb-8">
          <div className="footer-brand">
            <h3 className="footer-logo text-primary font-jetbrains-mono text-xl sm:text-2xl mb-3 sm:mb-4">favastp.dev</h3>
            <p className="text-text-secondary text-sm sm:text-base">Building the future, one line of code at a time.</p>
          </div>

          <div className="footer-links grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
            <div className="footer-section">
              <h4 className="text-primary mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
              <div className="flex flex-col gap-1.5 sm:gap-2">
                <Link href="/#about" className="text-text-secondary no-underline transition-all duration-300 hover:text-primary hover:translate-x-1 text-xs sm:text-sm">About</Link>
                <Link href="/#projects" className="text-text-secondary no-underline transition-all duration-300 hover:text-primary hover:translate-x-1 text-xs sm:text-sm">Projects</Link>
                <Link href="/#contact" className="text-text-secondary no-underline transition-all duration-300 hover:text-primary hover:translate-x-1 text-xs sm:text-sm">Contact</Link>
              </div>
            </div>

            <div className="footer-section">
              <h4 className="text-primary mb-3 sm:mb-4 text-sm sm:text-base">Connect</h4>
              <div className="flex flex-col gap-1.5 sm:gap-2">
                <a
                  href="https://www.linkedin.com/in/muhammed-favas-t-p"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary no-underline transition-all duration-300 hover:text-primary hover:translate-x-1 text-xs sm:text-sm"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary no-underline transition-all duration-300 hover:text-primary hover:translate-x-1 text-xs sm:text-sm"
                >
                  GitHub
                </a>
                <a
                  href="mailto:favastp2@gmail.com"
                  className="text-text-secondary no-underline transition-all duration-300 hover:text-primary hover:translate-x-1 text-xs sm:text-sm"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom text-center pt-6 sm:pt-8 border-t border-white/10 text-text-secondary">
          <p className="mb-2 text-xs sm:text-sm">&copy; 2025 Muhammed Favas T P. All rights reserved.</p>
          <p className="flex items-center justify-center gap-2 text-xs sm:text-sm">
            Made with
            <span className="text-secondary animate-pulse">❤️</span>
            and lots of ☕
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
