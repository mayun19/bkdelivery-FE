/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        FlameSans: ["FlameSans", "sans-serif"],
        FlameBold: ["FlameBold", "sans-serif"],
        FlameRegular: ["FlameRegular", "sans-serif"],
      },
    },
    colors: {
      yellowBk: "#FAAF18",
      orange: "#ED7801",
      darkGrey: "#2D2D2D",
      whiteBk: "#FFFF",
      brownBk:"#8B542F",
      darkBrown: "#404040",
      border: "#E0E0E0",
    },
  },
  plugins: [],
};
