/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    listStyleType: {
      square: "square",
    },

    colors: {
      Baggrundsfarve: "#F3EFE4",
      Minblaa: "#327DFF",
      Minpink: "#FF5EA0",
    },
    extend: {
      height: {
        projekt: "32rem",
      },

      width: {
        pbredde: "30rem",
      },

      fontFamily: {
        Righteous: "'Righteous', cursive",
        Roboto: "'Roboto Slab', serif",
        GrafiskRS: "'Rock Salt', cursive",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
    require("@tailwindcss/forms"),
  ],
};
