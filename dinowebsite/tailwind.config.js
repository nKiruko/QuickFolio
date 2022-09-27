/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dinoblack': '#191919',
        'dinowhite': '#f5f5f5',
        'dinocream': '#f6f2e7',
        'dinogreen': '#134f43',
        'dinobiege': '#d2a575',
        'dinobrown': '#8c5636',
      },
    },
  },
  plugins: [],
}
