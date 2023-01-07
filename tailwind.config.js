// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        gradient: "url('/src/images/BackgroundGradient.svg')",
        about_bg: "url('/src/images/AboutGradient.svg')",
        dark_bg: "url('/src/images/DarkGradient.jpg')",
      },
      fontFamily: {
        abel: ["Abel", "sans-serif"],
        comfortaa: ["Comfortaa", "cursive"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        silver: "#BDBDBD",
        black: "#000000",
        violet: "#675889",
      },
    },
    plugins: [require("flowbite/plugin")],
  },
};
