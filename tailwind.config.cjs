
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'prada-black': '#000000',
        'prada-gold': '#d4af37',
        'prada-light': '#f8f9fa',
        'prada-dark': '#1a1a1a',
        'prada-gray': '#2c2c2c',
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}