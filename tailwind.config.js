const screens = require("./tailwindcss/screens");
const colors = require("./tailwindcss/colors");
const variants = require("./tailwindcss/variants");
const boxShadow = require("./tailwindcss/boxShadow");
const zIndex = require("./tailwindcss/zIndex");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/core/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors,
      zIndex,
    },
    container: {
      padding: {
        default: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
      },
      center: true,
    },
    screens,
    boxShadow,
  },
  variants,
  plugins: [],
};