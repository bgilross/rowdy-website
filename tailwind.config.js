/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        carnivale: ["CarnivaleeFreakshow", "serif"],
        bronco: ["BroncoPersonalUse", "serif"],
      },
      backgroundImage: {
        background: "url('images/rowdy-pic-cropped1.png')",
        secondary:
          "url('https://images.unsplash.com/photo-1655183806422-e40565e79e5c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      },
    },
  },
  plugins: [],
};
