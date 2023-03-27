/** @type {import('tailwindcss').Config} */

const colors = require("./node_modules/bwad-react-designsystem/colors");
module.exports = {
  content: [
    "./src/**/*.{js,tx,jsx,tsx}",
    "node_modules/bwad-react-designsystem/dist/**/*.{js,tx,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      ring: {
        ...colors,
      },
      fill: {
        ...colors,
        "yellow-star": "#F3A939",
      },
      fontFamily: {
        sans: ["Poppins"],
      },
    },
  },
  plugins: [],
};
