/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        'main': "#E6E7BA",
        'second': "#FEFFEF",
        'footer': "#291120", 
        'button-color': "#899443",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        typey : ["typey", "serif"],
        typeyItalic : ["typey-italic", "italic"],
      },
      fontSize: {
        'normal-desktop': '24 px',
        'normal-tablet': '20 px',
        'normal-mobile': '12 px',
        'big-desktop' : '48 px',
        'Medium-desktop': '30 px',
        'big-mobile': '28 px',
        'medium-mobile': '24 px',
      },
      borderRadius: {
        'big-desktop': '35 px',
        'normal-decktop': '25 px',
        'small-decktop': '20 px',

        'normal-mobile' : '15 px',
        'big-mobile' : '25 px',
        'small-mobile' : '8 px',
      }
    },
  },
  plugins: [],
};
