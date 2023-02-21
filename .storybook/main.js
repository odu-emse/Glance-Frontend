const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
	addons: ['@storybook/addon-essentials'],
	babel: async (options) => ({
		// Update your babel configuration here
		...options,
	}),
	framework: '@storybook/react',
	stories: ['../components/**/*.stories.@(js|jsx|ts|tsx)'],
	webpackFinal: async (config, { configType }) => {
		config.resolve.plugins = [new TsconfigPathsPlugin()]
		return config
	},
}
