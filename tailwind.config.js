/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      //cursive: ['Darumadrop One', ...defaultTheme.fontFamily.cursive],
      sans: ['Quicksand', ...defaultTheme.fontFamily.sans],
      serif: ['Wix Madefor Display', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
}

