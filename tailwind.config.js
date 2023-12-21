/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cardoFont : ['Cardo', 'serif'],
        interFont : ['Inter','sans-serif'],
        lexendFont : ['Lexend', 'sans-serif'],
      },
      colors: {
        calalinaBlue: '#1B3764',
        sunGlow: '#FFCA42',
      }
    },
  },
  plugins: [],
}

