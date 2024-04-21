/** @type {import('tailwindcss').Config} */

const { url } = require("inspector");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: false,

    extend: {
      colors: {
        primrycolor: "#0E2333",
        orangecolor: "#DF543F",
        secondrycolor: "#3BD39D",
        sectioncolor: "#FAF8F5",
        blackcolor: "#20211C",
      },

      backgroundImage: {
        herohomebg: "url('/src/assests/img/home/home-bg.png')",
        herokatabg: "url('/src/assests/img/kata/kata-bg.png')",
        smkatapattern: "url('/src/assests/img/kata/kata-pattren.svg')",
        mdkatapattern: "url('/src/assests/img/kata/kata-mdpattren.svg')",
        katasecbg: "url('/src/assests/img/kata/kata-sec-mbl.png')",
        katasecbgdes: "url('/src/assests/img/kata/bg-kata-des.webp')",
        findus: "url('/src/assests/img/about/find-us.svg')",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },

    // screens: {
    //   sm: "480px",
    //   md: "768px",
    //   lg: "976px",
    //   xl: "1440px",
    // },
  },
  plugins: [],
};
