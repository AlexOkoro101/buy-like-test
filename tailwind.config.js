const {  spacing } = require('tailwindcss/defaultTheme')
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    spacing: {
      23: '23%',
      74: '18.75rem',
      ...spacing,
    },
  },
  variants: {
    extend: {},
    opacity: ({ after }) => after(['disabled'])
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/line-clamp'),
  ],
}
