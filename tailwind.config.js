/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary : ['Cardo', 'serif'],
        secondary : ['Inter','sans-serif'],
        accent : ['Lexend', 'sans-serif'],
      },
      colors: {
        primary: '#1B3764',
        secondary: '#FFCA42',
        active: '#679E37',
        muted:'#B4C7E7',
        borderGray : '#DBE1E9',
        steelGray : '#969AA0',
        lightGray : '#D0D0D0',
        softBlue : '#F4F8FF'

      },
     
      
        

    },
  },
  plugins: [],
}

