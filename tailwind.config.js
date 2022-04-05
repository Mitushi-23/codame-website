const colors = require("tailwindcss/colors");

module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
      extend: {
        fontFamily:{
            'titanOne' : ['Titan One', 'cursive'],
            'belleza': ['Belleza', 'sans-serif'],
            'inconsolota' : ['Inconsolota', 'sans-serif']
    
    
          },
          colors: {
            blueGray: colors.slate
          }
      },
    },
    plugins: [],
  }