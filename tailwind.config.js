// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        gradient: "url('images/PortfolioBg.jpg')",
      },
      fontFamily: {
        abel: ["Abel", "sans-serif"],
        comfortaa: ["Comfortaa", "cursive"],
      },
    },
    plugins: [require("flowbite/plugin")],
  },
};
