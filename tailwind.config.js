/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
          950: '#3b0764',
        },
        'crazy-dark': '#0a0a0a',
        'crazy-darker': '#050505',
        'crazy-darkest': '#000000',
        'crazy': '#1a1a1a',
        'crazy-light': '#333333',
        'crazy-lighter': '#444444',
        'crazy-muted': '#888888',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'crazy-border-glow': 'crazyBorderGlow 4s ease-in-out infinite alternate',
        'crazy-text-glow': 'crazyTextGlow 3s ease-in-out infinite alternate',
        'crazy-loading': 'crazyLoading 2s ease-in-out infinite',
        'float-crazy': 'floatCrazy 6s ease-in-out infinite',
        'float-crazy-reverse': 'floatCrazyReverse 8s ease-in-out infinite',
        'crazy-bg-move': 'crazyBgMove 20s ease-in-out infinite',
        'horizontal-float': 'horizontalFloat 20s ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(139, 92, 246, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.8)' },
        },
        crazyBorderGlow: {
          '0%': { opacity: '0.3', transform: 'scale(1) rotate(0deg)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05) rotate(180deg)' },
          '100%': { opacity: '1', transform: 'scale(1.02) rotate(360deg)' },
        },
        crazyTextGlow: {
          '0%': { filter: 'drop-shadow(0 0 10px rgba(139, 92, 246, 0.5))' },
          '50%': { filter: 'drop-shadow(0 0 30px rgba(139, 92, 246, 0.8))' },
          '100%': { filter: 'drop-shadow(0 0 50px rgba(139, 92, 246, 1))' },
        },
        crazyLoading: {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '25%': { transform: 'rotate(90deg) scale(1.2)' },
          '50%': { transform: 'rotate(180deg) scale(0.8)' },
          '75%': { transform: 'rotate(270deg) scale(1.1)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
        floatCrazy: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-20px) rotate(5deg)' },
          '50%': { transform: 'translateY(-10px) rotate(-5deg)' },
          '75%': { transform: 'translateY(-15px) rotate(3deg)' },
        },
        floatCrazyReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(15px) rotate(-3deg)' },
          '50%': { transform: 'translateY(25px) rotate(5deg)' },
          '75%': { transform: 'translateY(10px) rotate(-2deg)' },
        },
        crazyBgMove: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(-10px, -10px) scale(1.1)' },
          '50%': { transform: 'translate(10px, -5px) scale(0.9)' },
          '75%': { transform: 'translate(-5px, 10px) scale(1.05)' },
        },
        horizontalFloat: {
          '0%, 100%': { 
            transform: 'translateX(0px) translateY(0px)',
          },
          '25%': { 
            transform: 'translateX(50px) translateY(-30px)',
          },
          '50%': { 
            transform: 'translateX(-30px) translateY(20px)',
          },
          '75%': { 
            transform: 'translateX(40px) translateY(-10px)',
          },
        },
      },
    },
  },
  plugins: [],
}
