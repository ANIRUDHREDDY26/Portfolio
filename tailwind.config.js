/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#030712',
          900: '#060d1f',
          850: '#0a1329',
          800: '#0f1b36',
          700: '#162447',
        },
        electric: {
          400: '#38bdf8',
          500: '#0284c7',
          600: '#0369a1',
        },
        cyber: {
          purple: '#8b5cf6',
          neon: '#a855f7',
          blue: '#3b82f6',
          cyan: '#06b6d4',
          emerald: '#10b981',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cyber-gradient': 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 50%, #06b6d4 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%': { filter: 'drop-shadow(0 0 15px rgba(139, 92, 246, 0.4))' },
          '100%': { filter: 'drop-shadow(0 0 30px rgba(6, 182, 212, 0.6))' },
        }
      }
    },
  },
  plugins: [],
}
