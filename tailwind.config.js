/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,ts}'],
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#ecfffe',
					100: '#bdfdff',
					200: '#7bfaff',
					300: '#31f5ff',
					400: '#00fcff',
					500: '#00ede9',
					600: '#00bdbf',
					700: '#009497',
					800: '#007277',
					900: '#006064',
					950: '#00383d',
				},
			},
		},
	},
	plugins: [],
};
