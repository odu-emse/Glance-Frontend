
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,mdx}", './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      'xxs': '320px',
      'xs': '414px',
      ...defaultTheme.screens
    },
    fontSize: {
      'xxs': '0.5rem',
      'xs': '0.75rem',
      ...defaultTheme.fontSize
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
