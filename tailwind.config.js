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
      darkBrown: "#404040",
      cBorder: "#e0e0e0",
    },
  },
  plugins: [],
};
