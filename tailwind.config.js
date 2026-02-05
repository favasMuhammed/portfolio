/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#a7e22e',
        'primary-dark': '#8bc34a',
        secondary: '#ff6b6b',
        accent: '#4ecdc4',
        dark: '#0a0a0a',
        darker: '#000000',
        light: '#f8f9fa',
        text: '#ffffff',
        'text-secondary': '#a0a0a0',
        'text-muted': '#666666',
        // Enhanced color palette for 2025
        'glass': 'rgba(255, 255, 255, 0.1)',
        'glass-dark': 'rgba(0, 0, 0, 0.2)',
        'neon': '#00ff88',
        'cyber': '#ff0080',
        'cosmic': '#8b5cf6',
      },
      fontFamily: {
        'mono': ['Departure Mono', 'SF Mono', 'Monaco', 'Menlo', 'Ubuntu Mono', 'monospace'],
        'departure-mono': ['Departure Mono', 'SF Mono', 'Monaco', 'Menlo', 'Ubuntu Mono', 'monospace'],
        'primary': ['Departure Mono', 'SF Mono', 'Monaco', 'Menlo', 'Ubuntu Mono', 'monospace'],
        'grotesk': ['Space Grotesk', 'Inter', 'Arial', 'sans-serif'],
        'reading': ['Space Grotesk', 'Inter', 'Arial', 'sans-serif'],
        'mori': ['PP Mori', 'Georgia', 'serif'],
        'jetbrains-mono': ['JetBrains Mono', 'monospace'],
        'space-mono': ['Space Mono', 'monospace'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-left': 'fadeInLeft 0.6s ease-out forwards',
        'fade-in-right': 'fadeInRight 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'slide-top': 'slideInFromTop 0.6s ease-out forwards',
        'float': 'float 8s ease-in-out infinite',
        'pulse': 'pulse 3s ease-in-out infinite',
        'bounce': 'bounce 1.5s ease-in-out',
        'rotate': 'rotate 25s linear infinite',
        'wave': 'wave 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        // Enhanced animations for 2025
        'liquid': 'liquid 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'morph': 'morph 6s ease-in-out infinite',
        'float-slow': 'floatSlow 12s ease-in-out infinite',
        'breathe': 'breathe 4s ease-in-out infinite',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'slide-down': 'slideDown 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'scale-bounce': 'scaleBounce 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        slideInFromTop: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-15px) rotate(3deg)' },
          '66%': { transform: 'translateY(8px) rotate(-3deg)' }
        },
        pulse: {
          '0%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.05)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '0.8' }
        },
        bounce: {
          '0%, 20%, 53%, 80%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '40%, 43%': { transform: 'translate3d(0, -15px, 0)' },
          '70%': { transform: 'translate3d(0, -8px, 0)' },
          '90%': { transform: 'translate3d(0, -2px, 0)' }
        },
        rotate: {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' }
        },
        wave: {
          '0%, 60%, 100%': { transform: 'translateY(0)' },
          '30%': { transform: 'translateY(-8px)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        // Enhanced keyframes for 2025
        liquid: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' }
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(167, 226, 46, 0.5)' },
          '100%': { boxShadow: '0 0 40px rgba(167, 226, 46, 0.8), 0 0 60px rgba(167, 226, 46, 0.3)' }
        },
        morph: {
          '0%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
          '100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-20px) rotate(2deg)' },
          '66%': { transform: 'translateY(10px) rotate(-2deg)' }
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        scaleBounce: {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        }
      },
      spacing: {
        'xs': '0.5rem',
        'sm': '1rem',
        'md': '1.5rem',
        'lg': '2rem',
        'xl': '3rem',
        'xxl': '4rem',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        '3xl': '40px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'neon': '0 0 20px rgba(0, 255, 136, 0.5)',
        'cyber': '0 0 20px rgba(255, 0, 128, 0.5)',
        'cosmic': '0 0 20px rgba(139, 92, 246, 0.5)',
        'liquid': '0 8px 32px 0 rgba(167, 226, 46, 0.2)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(45deg, #a7e22e, #4ecdc4, #ff6b6b, #8b5cf6)',
      }
    },
  },
  plugins: [],
}
