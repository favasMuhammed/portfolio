import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorType, setCursorType] = useState('default');
  const [trails, setTrails] = useState([]);
  const [isGlitching, setIsGlitching] = useState(false);
  const [cursorSpeed, setCursorSpeed] = useState(0);
  const [magneticOffset, setMagneticOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let timeoutId;
    
    // Check if device supports hover (desktop)
    const isHoverSupported = window.matchMedia('(hover: hover)').matches;
    
    // Don't show custom cursor on touch devices
    if (!isHoverSupported) {
      return;
    }
    
    const updatePosition = (e) => {
      const newX = e.clientX;
      const newY = e.clientY;
      
      // Calculate cursor speed for dynamic effects
      const deltaX = newX - position.x;
      const deltaY = newY - position.y;
      const speed = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      setCursorSpeed(speed);
      
      setPosition({ x: newX, y: newY });
      setIsVisible(true);
      
      // Create cursor trail effect with speed-based opacity
      const newTrail = {
        id: Date.now(),
        x: newX,
        y: newY,
        speed: speed,
      };
      
      setTrails(prev => [...prev, newTrail]);
      
      // Remove old trails
      setTimeout(() => {
        setTrails(prev => prev.filter(trail => trail.id !== newTrail.id));
      }, 600);
      
      // Hide cursor after inactivity
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsVisible(false), 3000);
    };

    const handleMouseDown = () => {
      setIsClicking(true);
      // Trigger glitch effect on click
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 300);
    };
    const handleMouseUp = () => setIsClicking(false);
    
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Add event listeners
    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

          // Add hover detection for different elements
      const addHoverDetection = () => {
        // Links
        document.querySelectorAll('a, button, [role="button"]').forEach(el => {
          el.addEventListener('mouseenter', () => {
            setIsHovering(true);
            setCursorType('button');
          });
          el.addEventListener('mouseleave', () => {
            setIsHovering(false);
            setCursorType('default');
          });
        });

        // Text inputs and textareas
        document.querySelectorAll('input[type="text"], input[type="email"], input[type="password"], textarea').forEach(el => {
          el.addEventListener('mouseenter', () => {
            setCursorType('text');
          });
          el.addEventListener('mouseleave', () => {
            setCursorType('default');
          });
        });

        // Code elements
        document.querySelectorAll('code, pre, .code-block').forEach(el => {
          el.addEventListener('mouseenter', () => {
            setCursorType('code');
          });
          el.addEventListener('mouseleave', () => {
            setCursorType('default');
          });
        });

        // Links specifically
        document.querySelectorAll('a').forEach(el => {
          el.addEventListener('mouseenter', () => {
            setCursorType('link');
          });
          el.addEventListener('mouseleave', () => {
            setCursorType('default');
          });
        });

        // Developer-specific elements
        document.querySelectorAll('.skill-item, .project-card, .timeline-item').forEach(el => {
          el.addEventListener('mouseenter', () => {
            setCursorType('api');
            // Add magnetic effect
            const rect = el.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const offsetX = (centerX - position.x) * 0.1;
            const offsetY = (centerY - position.y) * 0.1;
            setMagneticOffset({ x: offsetX, y: offsetY });
          });
          el.addEventListener('mouseleave', () => {
            setCursorType('default');
            setMagneticOffset({ x: 0, y: 0 });
          });
        });

        // Terminal/code blocks
        document.querySelectorAll('.terminal, .code-block, pre').forEach(el => {
          el.addEventListener('mouseenter', () => {
            setCursorType('terminal');
          });
          el.addEventListener('mouseleave', () => {
            setCursorType('default');
          });
        });

        // Database/backend elements
        document.querySelectorAll('.database-item, .backend-item, .api-item').forEach(el => {
          el.addEventListener('mouseenter', () => {
            setCursorType('database');
          });
          el.addEventListener('mouseleave', () => {
            setCursorType('default');
          });
        });

        // Git/version control elements
        document.querySelectorAll('.git-item, .version-control, .repository').forEach(el => {
          el.addEventListener('mouseenter', () => {
            setCursorType('git');
          });
          el.addEventListener('mouseleave', () => {
            setCursorType('default');
          });
        });
      };

    // Initialize hover detection after a short delay
    setTimeout(addHoverDetection, 1000);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timeoutId);
    };
  }, []);

  // Don't render custom cursor on touch devices
  if (!window.matchMedia('(hover: hover)').matches) return null;
  
  if (!isVisible) return null;

  return (
    <>
      {/* Cursor trails */}
      {trails.map(trail => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{
            left: trail.x,
            top: trail.y,
            opacity: Math.min(trail.speed / 10, 0.8),
            transform: `scale(${Math.min(trail.speed / 20, 1.5)})`,
          }}
        />
      ))}
      
      {/* Main cursor dot */}
      <div
        className={`cursor-dot ${isHovering ? 'hover' : ''} ${isClicking ? 'click' : ''} ${cursorType !== 'default' ? cursorType : ''} ${isGlitching ? 'glitch' : ''}`}
        style={{
          left: position.x - 4 + magneticOffset.x,
          top: position.y - 4 + magneticOffset.y,
        }}
      />
      
      {/* Cursor ring */}
      <div
        className={`cursor-ring ${isHovering ? 'hover' : ''} ${isClicking ? 'click' : ''} ${cursorType !== 'default' ? cursorType : ''}`}
        style={{
          left: position.x - 20 + magneticOffset.x,
          top: position.y - 20 + magneticOffset.y,
        }}
      />
      
      {/* Cursor text label */}
      <div
        className={`cursor-text ${isHovering ? 'hover' : ''}`}
          style={{
          left: position.x + 20,
          top: position.y - 10,
        }}
      >
        {cursorType === 'button' && 'Click'}
        {cursorType === 'link' && 'Link'}
        {cursorType === 'text' && 'Type'}
        {cursorType === 'code' && 'Code'}
        {cursorType === 'terminal' && 'Terminal'}
        {cursorType === 'git' && 'Git'}
        {cursorType === 'database' && 'Database'}
        {cursorType === 'api' && 'API'}
        {cursorType === 'default' && 'Dev'}
      </div>
    </>
  );
};

export default CustomCursor;
