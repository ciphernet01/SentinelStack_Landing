/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Orbitron', 'sans-serif'],
      },
      colors: {
        neon: {
          DEFAULT: '#39ff14', // Cyberpunk Green
          dim: '#2cb812',
          glow: 'rgba(57, 255, 20, 0.5)'
        },
        slate: {
          850: '#151f32',
          950: '#020617',
        }
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #111 1px, transparent 1px), linear-gradient(to bottom, #111 1px, transparent 1px)",
      },
      keyframes: {
        'neon-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(57, 255, 20, 0.5)' },
          '50%': { boxShadow: '0 0 50px rgba(57, 255, 20, 0.9)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
      }
    },
  },
  plugins: [],
}