/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['pages/*.{js,ts,jsx,tsx}', 'components/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        chivo: ['"Chivo"', 'sans-serif'],
        heading: ['"Taviraj"', 'serif'],
        body: ['"Didact Gothic"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
