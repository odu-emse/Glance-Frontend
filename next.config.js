/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	tsconfigPath: 'tsconfig.build.json',
	swcMinify: true,
	images: {
		domains: ['images.unsplash.com', 'lh3.googleusercontent.com'],
	},
	i18n: {
		locales: ['en'],
		defaultLocale: 'en',
	},
}

module.exports = nextConfig
