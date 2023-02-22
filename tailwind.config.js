/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['pages/*.{js,ts,jsx,tsx}', 'components/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				display: ['"Avango"', 'serif'],
				heading: ['"Playfair Display"', 'sans-serif'],
				body: ['"Rasa"', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
