/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: {
          50: '#fff5f7',
          100: '#ffe4e9',
          200: '#fecdd6',
          300: '#fca5b7',
          400: '#fb7185',
          500: '#f43f72',
          600: '#e11d48',
          700: '#be123c',
        },
        rose: {
          gold: '#b76e79',
          light: '#f7d6dc',
          deep: '#8b3a4a',
        },
        cream: '#fffdfa',
        parchment: '#fdfbf7',
        parchmentBorder: '#ebd9ca',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        cursive: ['"Great Vibes"', 'cursive'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'romantic': '0 10px 30px -5px rgba(244, 63, 114, 0.15), 0 4px 6px -2px rgba(244, 63, 114, 0.05)',
        'romantic-lg': '0 20px 40px -10px rgba(244, 63, 114, 0.25)',
        'polaroid': '0 12px 32px rgba(183, 110, 121, 0.2), 0 2px 6px rgba(0,0,0,0.06)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
