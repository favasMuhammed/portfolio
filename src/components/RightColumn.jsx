const RightColumn = () => {
  return (
    <>
      {/* Thoughts Section */}
      <div className="thoughts-section mb-8 sm:mb-12 bg-white/2 p-4 sm:p-6 lg:p-8 rounded-lg border border-white/5 backdrop-blur-10">
        <h2 className="section-title text-text text-lg sm:text-xl font-semibold mb-4 sm:mb-6 font-departure-mono tracking-tight">Recent Thoughts</h2>
        <div className="thoughts-list flex flex-col gap-2 sm:gap-4">
          <div className="thought-item flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 sm:p-4 bg-white/3 rounded-md border border-white/5 transition-all duration-300 hover:bg-white/5 hover:border-primary/30 hover:translate-x-1">
            <span className="thought-date text-text-muted text-xs sm:text-sm font-mono mb-1 sm:mb-0">8/15/2025</span>
            <span className="thought-title text-text-secondary font-medium transition-all duration-300 text-sm sm:text-base leading-tight">Thoughts On Agentic Coding</span>
          </div>
          <div className="thought-item flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 sm:p-4 bg-white/3 rounded-md border border-white/5 transition-all duration-300 hover:bg-white/5 hover:border-primary/30 hover:translate-x-1">
            <span className="thought-date text-text-muted text-xs sm:text-sm font-mono mb-1 sm:mb-0">1/06/2024</span>
            <span className="thought-title text-text-secondary font-medium transition-all duration-300 text-sm sm:text-base leading-tight">Learning to walk without a crutch</span>
          </div>
          <div className="thought-item flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 sm:p-4 bg-white/3 rounded-md border border-white/5 transition-all duration-300 hover:bg-white/5 hover:border-primary/30 hover:translate-x-1">
            <span className="thought-date text-text-muted text-xs sm:text-sm font-mono mb-1 sm:mb-0">12/28/2023</span>
            <span className="thought-title text-text-secondary font-medium transition-all duration-300 text-sm sm:text-base leading-tight">2024</span>
          </div>
          <div className="thought-item flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 sm:p-4 bg-white/3 rounded-md border border-white/5 transition-all duration-300 hover:bg-white/5 hover:border-primary/30 hover:translate-x-1">
            <span className="thought-date text-text-muted text-xs sm:text-sm font-mono mb-1 sm:mb-0">10/4/2022</span>
            <span className="thought-title text-text-secondary font-medium transition-all duration-300 text-sm sm:text-base leading-tight">Interesting AI Articles & Links</span>
          </div>
          <div className="thought-item flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 sm:p-4 bg-white/3 rounded-md border border-white/5 transition-all duration-300 hover:bg-white/5 hover:border-primary/30 hover:translate-x-1">
            <span className="thought-date text-text-muted text-xs sm:text-sm font-mono mb-1 sm:mb-0">1/29/2022</span>
            <span className="thought-title text-text-secondary font-medium transition-all duration-300 text-sm sm:text-base leading-tight">The "best" way to manage icons in React.js</span>
          </div>
        </div>
        <div className="thoughts-more mt-4 sm:mt-6 text-center">
          <a href="#" className="more-link text-primary no-underline font-medium transition-all duration-300 hover:text-primary-dark hover:translate-x-1 text-sm sm:text-base">More →</a>
        </div>
      </div>
      
      {/* Contact Section */}
      <div className="contact-section mb-8 sm:mb-12 bg-white/2 p-4 sm:p-6 lg:p-8 rounded-lg border border-white/5 backdrop-blur-10">
        <h2 className="section-title text-text text-lg sm:text-xl font-semibold mb-4 sm:mb-6 font-departure-mono tracking-tight">Contact</h2>
        <div className="contact-info-mini flex flex-col gap-3 sm:gap-4">
          <div className="contact-item-mini flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 bg-white/3 rounded-md border border-white/5 transition-all duration-300 hover:bg-white/5 hover:border-primary/30">
            <span className="contact-label text-text-muted text-xs sm:text-sm font-mono mb-1 sm:mb-0">Email:</span>
            <a href="mailto:favastp2@gmail.com" className="contact-value text-primary no-underline font-medium transition-all duration-300 hover:text-primary-dark text-sm sm:text-base break-all">favastp2@gmail.com</a>
          </div>
          <div className="contact-item-mini flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 bg-white/3 rounded-md border border-white/5 transition-all duration-300 hover:bg-white/5 hover:border-primary/30">
            <span className="contact-label text-text-muted text-xs sm:text-sm font-mono mb-1 sm:mb-0">LinkedIn:</span>
                            <a href="https://www.linkedin.com/in/muhammed-favas-t-p" target="_blank" rel="noopener noreferrer" className="contact-value text-primary no-underline font-medium transition-all duration-300 hover:text-primary-dark text-sm sm:text-base break-all">muhammed-favas-t-p</a>
          </div>
        </div>
      </div>
      
      {/* Skills Section */}
      <div className="skills-section mb-8 sm:mb-12 bg-white/2 p-4 sm:p-6 lg:p-8 rounded-lg border border-white/5 backdrop-blur-10">
        <h2 className="section-title text-text text-lg sm:text-xl font-semibold mb-4 sm:mb-6 font-departure-mono tracking-tight">Top Skills</h2>
        <div className="skills-list flex flex-wrap gap-2 sm:gap-3">
          <span className="skill-tag py-1.5 sm:py-2 px-3 sm:px-4 bg-primary/10 text-primary border border-primary/30 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 hover:bg-primary/20 hover:border-primary hover:-translate-y-1">React.js</span>
          <span className="skill-tag py-1.5 sm:py-2 px-3 sm:px-4 bg-primary/10 text-primary border border-primary/30 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 hover:bg-primary/20 hover:border-primary hover:-translate-y-1">Django</span>
          <span className="skill-tag py-1.5 sm:py-2 px-3 sm:px-4 bg-primary/10 text-primary border border-primary/30 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 hover:bg-primary/20 hover:border-primary hover:-translate-y-1">Tailwind CSS</span>
          <span className="skill-tag py-1.5 sm:py-2 px-3 sm:px-4 bg-primary/10 text-primary border border-primary/30 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 hover:bg-primary/20 hover:border-primary hover:-translate-y-1">Project Management</span>
          <span className="skill-tag py-1.5 sm:py-2 px-3 sm:px-4 bg-primary/10 text-primary border border-primary/30 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 hover:bg-primary/20 hover:border-primary hover:-translate-y-1">UI/UX Design</span>
          <span className="skill-tag py-1.5 sm:py-2 px-3 sm:px-4 bg-primary/10 text-primary border border-primary/30 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 hover:bg-primary/20 hover:border-primary hover:-translate-y-1">Problem Solving</span>
        </div>
      </div>
      
      {/* Languages Section */}
      <div className="languages-section mb-8 sm:mb-12 bg-white/2 p-4 sm:p-6 lg:p-8 rounded-lg border border-white/5 backdrop-blur-10">
        <h2 className="section-title text-text text-lg sm:text-xl font-semibold mb-4 sm:mb-6 font-departure-mono tracking-tight">Languages</h2>
        <div className="language-list flex flex-col gap-2 sm:gap-3">
          <div className="language-item flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 bg-white/3 rounded-md border border-white/5">
            <span className="language-name text-text font-medium text-sm sm:text-base">English</span>
            <span className="language-level text-text-muted text-xs sm:text-sm font-mono mt-1 sm:mt-0">(Professional Working)</span>
          </div>
          <div className="language-item flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 bg-white/3 rounded-md border border-white/5">
            <span className="language-name text-text font-medium text-sm sm:text-base">Tamil</span>
            <span className="language-level text-text-muted text-xs sm:text-sm font-mono mt-1 sm:mt-0">(Limited Working)</span>
          </div>
          <div className="language-item flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 bg-white/3 rounded-md border border-white/5">
            <span className="language-name text-text font-medium text-sm sm:text-base">Malayalam</span>
            <span className="language-level text-text-muted text-xs sm:text-sm font-mono mt-1 sm:mt-0">(Native or Bilingual)</span>
          </div>
        </div>
      </div>
      
      {/* Certifications Section */}
      <div className="certifications-section mb-8 sm:mb-12 bg-white/2 p-4 sm:p-6 lg:p-8 rounded-lg border border-white/5 backdrop-blur-10">
        <h2 className="section-title text-text text-lg sm:text-xl font-semibold mb-4 sm:mb-6 font-departure-mono tracking-tight">Certifications</h2>
        <div className="cert-list flex flex-col gap-2 sm:gap-3">
          <div className="cert-item p-3 bg-white/3 rounded-md border border-white/5 text-text-secondary transition-all duration-300 hover:bg-white/5 hover:border-primary/30 hover:text-text text-sm sm:text-base">Tech for Everyone</div>
          <div className="cert-item p-3 bg-white/3 rounded-md border border-white/5 text-text-secondary transition-all duration-300 hover:bg-white/5 hover:border-primary/30 hover:text-text text-sm sm:text-base">Introduction to SQL</div>
          <div className="cert-item p-3 bg-white/3 rounded-md border border-white/5 text-text-secondary transition-all duration-300 hover:bg-white/5 hover:border-primary/30 hover:text-text text-sm sm:text-base">Introduction To Cybersecurity</div>
        </div>
      </div>
      
      {/* Workshop Section */}
      <div className="workshop-section mb-8 sm:mb-12 bg-white/2 p-4 sm:p-6 lg:p-8 rounded-lg border border-white/5 backdrop-blur-10">
        <h2 className="section-title text-text text-lg sm:text-xl font-semibold mb-4 sm:mb-6 font-departure-mono tracking-tight">Workshop</h2>
        <div className="workshop-list flex flex-col gap-2 sm:gap-3">
          <div className="workshop-item p-3 bg-white/3 rounded-md border border-white/5 text-text-secondary transition-all duration-300 hover:bg-white/5 hover:border-primary/30 hover:text-text text-sm sm:text-base">Advanced Cybersecurity Workshop</div>
        </div>
      </div>
    </>
  )
}

export default RightColumn
