/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary1: "#495E57",
      primary2: "#F4CE14",
      secondary1: "#EE9972",
      secondary2: "#FBDABB",
      white: "#FFFFFF",
      gray: "#EDEFEE",
      darkGray: "#B0BEC5",
      darkerGray: "#455A64",
    },
    fontFamily: {
      sans: ["Markazi", "sans-serif"],
      serif: ["Karla", "serif"],
    },
    container: {
      center: true,
      padding: "16px",
    },
    extend: {},
  },
  plugins: [],
});

