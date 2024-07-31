/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        carnivale: ['CarnivaleeFreakshow', 'serif'],
        bronco: ['BroncoPersonalUse', 'serif'],
      },
      backgroundImage: {
        background: "url('images/rowdy-pic-1.png')",
      },
    },
  },
  plugins: [],
}
