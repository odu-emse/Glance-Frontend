/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		screens: {
			xxs: '320px',
			xs: '414px',
			...defaultTheme.screens,
		},
		fontSize: {
			sm: '10pt',
			DEFAULT: '12pt',
		},
		colors: {
			black: {
				DEFAULT: '#0A192D' /* Midnight Blue */,
			},
			white: {
				DEFAULT:
					'#FFFBFB' /* Vanilla Icecream White (Lightly warmed for ease on eyes) */,
			},
			carrier: '#404A5A' /* Carrier Gray */,
			royalblue: '#204498' /* Royal Blue */,
			monarchblue: '#003057' /* Monarch Blue */,
			wgray: '#D6D5DA' /* USS Wisconsin Grey */,
			barryblue: '#7B9CCF' /* Barry Blue */,
		},
		fontFamily: {
			serif: ['Lora', 'serif'],
		},
		extend: {
			borderRadius: {
				DEFAULT: '1px',
			},
			scale: {
				'-1': '-1',
			},
		},
	},
	plugins: [require('flowbite/plugin')],
}
