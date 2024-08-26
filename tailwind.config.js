/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode using a class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00FFFF',
        accent: '#9A00FF',
        background: '#1A1A1A',
        textLight: '#E0E0E0',
      },
    },
  },
  plugins: [],
}
