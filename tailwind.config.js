/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./node_modules/emse-ui/**/*/*.js',
	],
	theme: {
		screens: {
			xxs: '320px',
			xs: '414px',
			...defaultTheme.screens,
		},
		fontSize: {
			xxs: '0.5rem',
			xs: '0.75rem',
			...defaultTheme.fontSize,
		},
	},
	plugins: [require('flowbite/plugin')],
}
