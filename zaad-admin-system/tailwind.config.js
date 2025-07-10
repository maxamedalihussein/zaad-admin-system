/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        zaad: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        islamic: {
          gold: '#D4AF37',
          green: '#228B22',
          cream: '#F5F5DC',
          teal: '#008B8B',
        }
      },
      fontFamily: {
        'inter': ['Inter', 'system-ui', 'sans-serif'],
        'arabic': ['Amiri', 'serif'],
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-out forwards',
        'slideIn': 'slideIn 0.3s ease-out forwards',
        'slideUp': 'slideUp 0.4s ease-out forwards',
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 1.5s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(10px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)' 
          },
        },
        slideIn: {
          '0%': { 
            opacity: '0', 
            transform: 'translateX(-20px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateX(0)' 
          },
        },
        slideUp: {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(20px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)' 
          },
        },
        float: {
          '0%, 100%': { 
            transform: 'translateY(0px)' 
          },
          '50%': { 
            transform: 'translateY(-10px)' 
          },
        },
        shimmer: {
          '0%': { 
            backgroundPosition: '-468px 0' 
          },
          '100%': { 
            backgroundPosition: '468px 0' 
          },
        },
        glow: {
          '0%': { 
            boxShadow: '0 0 5px rgba(34, 197, 94, 0.2), 0 0 10px rgba(34, 197, 94, 0.2), 0 0 15px rgba(34, 197, 94, 0.2)' 
          },
          '100%': { 
            boxShadow: '0 0 10px rgba(34, 197, 94, 0.4), 0 0 20px rgba(34, 197, 94, 0.4), 0 0 30px rgba(34, 197, 94, 0.4)' 
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'islamic-pattern': 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%2316a34a\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M30 30c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12zm12-12c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        'islamic': '0 8px 32px rgba(34, 197, 94, 0.15)',
        'glow-green': '0 0 20px rgba(34, 197, 94, 0.3)',
      },
      backdropBlur: {
        xs: '2px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
}