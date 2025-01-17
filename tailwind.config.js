/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
      'Causten':['Causten','sans-serif'],
      'Core-Sans-C45':['Core-Sans-C45','sans-serif'],
      'Core-Sans-C55':['Core-Sans-C55','sans-serif'],
      'Core-Sans-C65':['Core-Sans-C65','sans-serif'],
      'Core-Sans-C75':['Core-Sans-C75','sans-serif'],
      'Core-Sans-C85':['Core-Sans-C85','sans-serif'],
      'Manrope':['Manrope','sans-serif'],
      'Poppins':['Poppins','sans-serif'],
      'Roboto':['Roboto','sans-serif'],
      'Mintaka':['Mintaka','sans-serif'],
      'Marcellus':['Marcellus','sans-serif']
      },
      colors:{
        'ed':'#EDEEF2',
        '3c':'#3C4242',
        '80':'#807D7E',
        'f6':'#F6F6F6',
        'be':'#BEBCBD',
        '8a':'#8A33FD',
        '46':'#464E4E',
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}

