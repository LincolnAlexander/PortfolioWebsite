// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        gradient: "url('/src/images/BackgroundGradient.svg')",
      },
      fontFamily: {
        abel: ["Abel", "sans-serif"],
        comfortaa: ["Comfortaa", "cursive"],
      },
      colors: {
        silver: "#BDBDBD",
        black: "#000000",
      },
    },
    plugins: [require("flowbite/plugin")],
  },
};
