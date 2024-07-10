/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "custom-cyan": "#3c8067",
        "custom-cream":"#f2ebe3",
        "custom-dark-blue": "#1c232b",
        "custom-greyish-blue":"#6c7289"
      },

      fontFamily:{
        "paragraph":['"Montserrat"', 'sans-serif'],
        "heading": ['"Fraunces"', 'serif']
      },
      screens:{
        "xxxs":{"min" : "0px", "max" : "575px"},
        "xxs":{"min" : "575px"},
      }
    },
  },
  plugins: [],
}

