const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryPurple: "#4B1979",
        softPurple: "#E2D4F0",
        textGrey: "#8A8A8A",
        borderGrey: "#D0D0D0",
        darkgrey: "#3C3C3C",
        textPurple: "#7126B5",
        lightPurple: "#A06ECE",
        veryLightPurple: "#D0B7E6",
        lightGreen: "#73CA5C",
        lightGray: "#F2F2F2",
        primaryRed: "#FF0000",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
});
