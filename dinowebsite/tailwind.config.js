/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dinoblack': '#191919',
        'dinogrey': '#e9e9e9',
        'dinocream': '#f6f2e7',
        'tmblue': '#009cab',
        'tmorange': '#f04c25',
        'tmgrey': '#575757',
      },
      rotate: {
        '9': '9deg',
      },
      fontFamily: {
        'sans': ['Roboto', defaultTheme.fontFamily.sans],
        'heading': ['Amaranth', defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        'glow': '0px 0px 11px 5px rgba(25,25,25,0.5)',
      },
    },
  },
  plugins: [],
}
