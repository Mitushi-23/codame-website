const colors = require("tailwindcss/colors");

module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
      extend: {
        backgroundColor:{
          blurgreen: '#3DD5A273',
          

        },
        fontFamily:{
            'titanOne' : ['Titan One', 'cursive'],
            'belleza': ['Belleza', 'sans-serif'],
            'inconsolota' : ['Inconsolota', 'monospace']
    
    
          },
          colors: {
            darkBlue: '#032147'
          }
      },
    },
    plugins: [],
  }