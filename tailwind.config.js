
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens: {
        extrasmall:{
          max:"420px"
        },
        vsmall: {
          max: "750px",
        },
        midsmall:{
          max:"950px"
        },
        small: {
          max: "1200px",
        },

      },
      colors:{
        line: "rgb(204 204 204)",
        trans:'rgba(0, 0, 0, 0.5)',
        babypink:'#f87171',
        footgray:'#e7e7e7'
      },
      fontFamily:{
        'myfont':'"Delius", cursive'
      }
    },
  },
  plugins: [],
};
