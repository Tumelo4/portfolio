/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#f5f5f5',
          secondary: '#333333',
        },
        dark: {
          primary: '#0c1022',
          secondary: '#CCCCCC',
        }
      },
      keyframes: {
        backspin: {
          from: {
            transform: 'rotate(0deg)',
          },
          to : {
            transform: 'rotate(-360deg)',
          }
        },

      },
      animation: {
        backspin: 'backspin 4s linear infinite',
        'spin-slow': 'spin 4s linear infinite',
        'bounce-slow': 'bounce 6s infinite;'
      }
    },
  },
  plugins: [],
}
