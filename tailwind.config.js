const colors = require("tailwindcss/colors");

module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
      extend: {
        backgroundColor:{
          blurgreen: '#3DD5A273',
          

        },
        width: {
          120: '43.5rem'
        },
       
        fontFamily:{
            'titanOne' : ['Titan One', 'cursive'],
            'belleza': ['Belleza', 'sans-serif'],
            'inconsolota' : ['Inconsolota', 'monospace']
    
    
          },
          colors: {
            darkBlue: '#032147',
            lightGreen : '#49FEC1AB'
          }
      },
    },
    plugins: [],
  }