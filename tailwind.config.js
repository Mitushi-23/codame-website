const colors = require("tailwindcss/colors");

module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
      extend: {
        display: ["group-hover"],
        backgroundColor:{
          blurgreen: '#3DD5A273',
          

        },
        width: {
          120: '49.5rem',
          130: '60rem'
        },
       
        fontFamily:{
            'titanOne' : ['Titan One', 'cursive'],
            'belleza': ['Belleza', 'sans-serif'],
            'inconsolota' : ['Inconsolota', 'monospace'],
            'encodeSans' : ['Encode Sans', 'sans-serif'],
            'poppins': ['Poppins', 'sans-serif'],
            'fredoka' : ['Fredoka One', 'cursive']
    
    
          },
          colors: {
            darkBlue: '#032147',
            lightGreen : '#49FEC1AB'
          }
      },
    },
    variants: {
      extend: {
          display: ["group-hover"],
      },
  },
    plugins: [],
  }