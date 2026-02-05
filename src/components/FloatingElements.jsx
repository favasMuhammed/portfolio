"use client";

import { useEffect, useRef } from 'react'

const FloatingElements = () => {
  const elementsRef = useRef([])

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset

      elementsRef.current.forEach((element, index) => {
        if (element) {
          const speed = element.dataset.speed
          const yPos = -(scrolled * speed) / 10
          element.style.transform = `translateY(${yPos}px) rotate(${yPos * 0.1}deg)`
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle hover interactions for each floating element
  const handleElementHover = (element) => {
    if (element) {
      element.style.animationPlayState = 'paused'
      element.style.transform = 'scale(1.2) rotate(10deg)'
    }
  }

  const handleElementLeave = (element) => {
    if (element) {
      element.style.animationPlayState = 'running'
      element.style.transform = 'scale(1) rotate(0deg)'
    }
  }

  return (
    <div className="hero-background absolute top-0 left-0 w-full h-full pointer-events-none z-10">
      <div className="floating-elements absolute w-full h-full pointer-events-none">
        <div
          ref={el => elementsRef.current[0] = el}
          data-speed="2"
          className="floating-element absolute text-primary text-2xl opacity-15 animate-float transition-all duration-300 font-departure-mono cursor-pointer"
          style={{ top: '15%', left: '8%', animationDelay: '0s' }}
          onMouseEnter={() => handleElementHover(elementsRef.current[0])}
          onMouseLeave={() => handleElementLeave(elementsRef.current[0])}
        >
          &lt;/&gt;
        </div>
        <div
          ref={el => elementsRef.current[1] = el}
          data-speed="1.5"
          className="floating-element absolute text-primary text-2xl opacity-15 animate-float transition-all duration-300 font-departure-mono cursor-pointer"
          style={{ top: '55%', left: '85%', animationDelay: '1.5s' }}
          onMouseEnter={() => handleElementHover(elementsRef.current[1])}
          onMouseLeave={() => handleElementLeave(elementsRef.current[1])}
        >
          {`{ }`}
        </div>
        <div
          ref={el => elementsRef.current[2] = el}
          data-speed="3"
          className="floating-element absolute text-primary text-2xl opacity-15 animate-float transition-all duration-300 font-departure-mono cursor-pointer"
          style={{ top: '75%', left: '15%', animationDelay: '3s' }}
          onMouseEnter={() => handleElementHover(elementsRef.current[2])}
          onMouseLeave={() => handleElementLeave(elementsRef.current[2])}
        >
          [ ]
        </div>
        <div
          ref={el => elementsRef.current[3] = el}
          data-speed="2.5"
          className="floating-element absolute text-primary text-2xl opacity-15 animate-float transition-all duration-300 font-departure-mono cursor-pointer"
          style={{ top: '25%', left: '75%', animationDelay: '4.5s' }}
          onMouseEnter={() => handleElementHover(elementsRef.current[3])}
          onMouseLeave={() => handleElementLeave(elementsRef.current[3])}
        >
          &lt;/&gt;
        </div>
        <div
          ref={el => elementsRef.current[4] = el}
          data-speed="1"
          className="floating-element absolute text-primary text-2xl opacity-15 animate-float transition-all duration-300 font-departure-mono cursor-pointer"
          style={{ top: '65%', left: '12%', animationDelay: '6s' }}
          onMouseEnter={() => handleElementHover(elementsRef.current[4])}
          onMouseLeave={() => handleElementLeave(elementsRef.current[4])}
        >
          ( )
        </div>
      </div>
    </div>
  )
}

export default FloatingElements
