/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        themeBlue: "#0401F6",
        themegray : '#7A7D9C',
        themeOrange : '#FA7100',
        themeGreen : '#75B617',
        themePurple : '#2700F5',
        themeLightGray : '#FCFCFF',
        'blue-rgba' : 'rgba(2, 1, 58, 0.05)'
      },
    },
  },
  plugins: [],
};
