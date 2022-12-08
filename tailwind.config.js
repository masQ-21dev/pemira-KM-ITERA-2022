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
        'normal-desktop' : '24px',
        'normal-tablet': '20px',
        'normal-mobile': '12px',
        'big-desktop' : '48px',
        'Medium-desktop': '30px', 
        'big-mobile': '28px',
        'medium-mobile': '24px', 
      },
      borderRadius: {
        'big-desktop': '30px',
        'normal-decktop': '25px',
        'small-decktop': '20 px',
        'normal-mobile' : '15 px',
        'big-mobile' : '25 px',
        'small-mobile' : '8 px',
      }
    },
  },
  plugins: [],
};
