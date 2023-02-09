/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './Components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      'xs': '360px',
      'xxl': '1536px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        Template: {
         
        }
      }
    },
  },
  plugins: [],
  important: true
}
