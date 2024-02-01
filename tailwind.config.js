/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,ts}'],
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#ebffff',
					100: '#cefdff',
					200: '#a2f8ff',
					300: '#63f0fd',
					400: '#1cdef4',
					500: '#00bcd4',
					600: '#039ab7',
					700: '#0a7a94',
					800: '#126278',
					900: '#145265',
					950: '#063646',
				},
			},
		},
	},
	plugins: [],
};
