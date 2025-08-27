import { useState, useEffect, useRef } from 'react'

const InteractiveTimeline = () => {
  const [currentYear, setCurrentYear] = useState(2002)
  const [isDragging, setIsDragging] = useState(false)
  const [timelinePosition, setTimelinePosition] = useState(0)
  
  const timelineScrubberRef = useRef(null)
  const timelineTrackRef = useRef(null)
  const timelineHandleRef = useRef(null)

  // Timeline data with fun and casual content
  const timelineData = {
    2002: "Born. Made the world slightly more interesting.",
    2008: "Started school. Mastered daydreaming professionally.",
    2014: "Teenage years. Knew everything. I was wrong.",
    2018: "High school done. Chose Bio Science.",
    2020: "COVID happened. Discovered graphic design.",
    2021: "Started CSE. From DNA to databases.",
    2022: "Freelancing design + coding. Still figuring it out.",
    2023: "Became Full-Stack Developer. Getting paid to puzzle.",
    2024: "Project Coordinator. Leading teams somehow.",
    2025: "College done. Building my own company now."
  }

  const years = Object.keys(timelineData).map(Number).sort((a, b) => a - b)
  const markPositions = [0, 11.11, 22.22, 33.33, 44.44, 55.55, 66.66, 77.77, 88.88, 100]

  const updateTimeline = (percentage) => {
    setTimelinePosition(percentage)
    
    // Calculate current year based on percentage and actual mark positions
    let closestIndex = 0
    let minDistance = Math.abs(percentage - markPositions[0])
    
    for (let i = 1; i < markPositions.length; i++) {
      const distance = Math.abs(percentage - markPositions[i])
      if (distance < minDistance) {
        minDistance = distance
        closestIndex = i
      }
    }
    
    const newYear = years[closestIndex]
    if (newYear !== currentYear) {
      setCurrentYear(newYear)
    }
  }

  const jumpToYear = (year) => {
    if (timelineData[year]) {
      setCurrentYear(year)
      const yearIndex = years.indexOf(year)
      if (yearIndex !== -1) {
        const position = markPositions[yearIndex]
        setTimelinePosition(position)
      }
    }
  }

  const handleMouseDown = (e) => {
    setIsDragging(true)
    document.body.style.userSelect = 'none'
    updateTimelineFromEvent(e)
  }

  const handleMouseMove = (e) => {
    if (isDragging) {
      e.preventDefault()
      updateTimelineFromEvent(e)
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    document.body.style.userSelect = ''
  }

  const updateTimelineFromEvent = (e) => {
    if (!timelineScrubberRef.current) return
    
    const rect = timelineScrubberRef.current.getBoundingClientRect()
    const clientX = e.touches ? e.touches[0].clientX : e.clientX
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    
    updateTimeline(percentage)
  }

  const handleClick = (e) => {
    updateTimelineFromEvent(e)
  }

  // Handle keyboard navigation for accessibility
  const handleKeyDown = (e, year) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      jumpToYear(year)
      
      // Add visual feedback
      const label = e.target
      label.style.transform = 'translateX(-50%) scale(1.2)'
      setTimeout(() => {
        label.style.transform = 'translateX(-50%) scale(1.1)'
      }, 200)
    }
  }

  // Add visual feedback on click
  const handleMarkClick = (year) => {
    jumpToYear(year)
    
    // Add visual feedback
    const mark = document.querySelector(`[data-year="${year}"]`)
    if (mark) {
      mark.style.transform = 'translateX(-50%) scaleY(1.4)'
      setTimeout(() => {
        mark.style.transform = 'translateX(-50%) scaleY(1.2)'
      }, 200)
    }
  }

  const handleLabelClick = (year) => {
    jumpToYear(year)
    
    // Add visual feedback
    const label = document.querySelector(`[data-year="${year}"]`)
    if (label) {
      label.style.transform = 'translateX(-50%) scale(1.2)'
      setTimeout(() => {
        label.style.transform = 'translateX(-50%) scale(1.1)'
      }, 200)
    }
  }

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('touchmove', handleMouseMove, { passive: false })
    document.addEventListener('touchend', handleMouseUp)
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('touchmove', handleMouseMove)
      document.removeEventListener('touchend', handleMouseUp)
    }
  }, [isDragging])

  useEffect(() => {
    // Initialize at year 2002
    setCurrentYear(2002)
    setTimelinePosition(0)
  }, [])

  return (
    <div className="about-content-panel bg-zinc-900 rounded-none p-3 sm:p-6 md:p-8 lg:p-12 py-6 sm:py-10 md:py-12 lg:py-16 relative min-h-[350px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[600px] flex flex-col items-center justify-between w-full">
      <div 
        className="timeline-text-box relative top-auto left-auto transform-none bg-transparent border-none rounded-none py-3 sm:py-4 md:py-6 lg:py-8 min-w-auto max-w-[280px] sm:max-w-[400px] md:max-w-[550px] lg:max-w-[700px] text-center z-20 backdrop-filter-none text-gray-200 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed font-mono transition-all duration-500 ease-out opacity-100 whitespace-pre-wrap font-normal shadow-none outline-none m-auto flex-1 flex items-center justify-center px-2 sm:px-4"
      >
        {timelineData[currentYear]}
      </div>
      
      <div 
        ref={timelineScrubberRef}
        className="timeline-scrubber relative w-[85%] sm:w-4/5 h-0.5 sm:h-1 bg-gray-600 rounded-none my-6 sm:my-8 md:my-10 lg:my-16 mx-auto cursor-pointer overflow-visible self-center touch-none"
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
        onClick={handleClick}
      >
        <div 
          ref={timelineTrackRef}
          className="timeline-track absolute top-0 left-0 h-full bg-primary rounded-none transition-all duration-400 ease-out shadow-lg overflow-hidden"
          style={{ width: `${timelinePosition}%` }}
        />
        <div 
          ref={timelineHandleRef}
          className="timeline-handle absolute top-1/2 w-4 h-4 sm:w-3.5 sm:h-3.5 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2 cursor-grab active:cursor-grabbing transition-all duration-500 ease-out shadow-lg border-none z-10 hover:scale-110 active:scale-95"
          style={{ 
            left: `${timelinePosition}%`,
            animation: currentYear !== 2002 ? 'pulse 0.6s ease-in-out' : 'none'
          }}
        />
        
        <div className="timeline-marks absolute -top-5 w-full h-10">
          {years.map((year, index) => (
            <div
              key={year}
              className={`timeline-mark ${currentYear === year ? 'active' : ''}`}
              data-year={year}
              onClick={() => handleMarkClick(year)}
              style={{ left: `${markPositions[index]}%` }}
            />
          ))}
        </div>
        
        <div className="timeline-labels absolute top-9 w-full h-6">
          {years.map((year, index) => (
            <div
              key={year}
              className={`timeline-label ${currentYear === year ? 'active' : ''}`}
              data-year={year}
              onClick={() => handleLabelClick(year)}
              onKeyDown={(e) => handleKeyDown(e, year)}
              style={{ left: `${markPositions[index]}%` }}
              tabIndex={0}
              role="button"
              aria-label={`Go to year ${year}`}
            >
              {year}
            </div>
          ))}
        </div>
      </div>
      
      <div className="timeline-instruction text-center text-gray-500 text-xs sm:text-sm font-mono mt-4 sm:mt-5 md:mt-6 font-normal tracking-wider transition-all duration-500 ease-out cursor-default select-none uppercase self-center hover:text-text hover:scale-105 hover:opacity-100 px-2 opacity-0 md:hidden">
        .
      </div>
    </div>
  )
}

export default InteractiveTimeline
