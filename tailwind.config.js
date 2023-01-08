// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        gradient: "url('/src/images/BackgroundGradient.svg')",
        about_bg: "url('/src/images/AboutGradient.svg')",
        dark_bg: "url('/src/images/DarkGradient.jpg')",
        contact_bg: "url('/src/images/ContactManagerImage.PNG')",
        cinema_bg: "url('/src/images/CinemaGuesserImage12.PNG')",
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
        black_1: "#0A0A0A",
      },
      spacing: {
        128: "44rem",
      },
    },
    plugins: [require("flowbite/plugin")],
  },
};
