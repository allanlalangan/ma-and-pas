/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["pages/*.{js,ts,jsx,tsx}", "components/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        chivo: ['"Playfair Display"', "sans-serif"],
        heading: ['"Roboto Mono"', "sans-serif"],
        body: ['"Rasa"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
