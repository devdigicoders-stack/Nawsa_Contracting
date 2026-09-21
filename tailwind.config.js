/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#B20D17', // Main NCFM Red
          dark: '#9A0B14',
        },
        charcoal: {
          DEFAULT: '#4A4B50',
          dark: '#303033',
        },
        black: {
          DEFAULT: '#111111',
          soft: '#1A1A1A',
        },
        gray: {
          soft: '#F5F5F5',
          border: '#D9D9D9',
          text: '#666666',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 10px 30px rgba(0, 0, 0, 0.08)',
        'premium-hover': '0 20px 40px rgba(178, 13, 23, 0.15)',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-in-up-delay-1': 'fadeInUp 0.8s ease-out 0.2s forwards',
        'fade-in-up-delay-2': 'fadeInUp 0.8s ease-out 0.4s forwards',
      }
    },
  },
  plugins: [],
}
