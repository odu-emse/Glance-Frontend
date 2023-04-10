const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
module.exports = {
  addons: ['@storybook/addon-essentials', '@storybook/addon-mdx-gfm'],
  babel: async options => ({
    // Update your babel configuration here
    ...options
  }),
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  stories: ['../components/**/*.stories.@(js|jsx|ts|tsx)'],
  webpackFinal: async (config, {
    configType
  }) => {
    config.resolve.plugins = [new TsconfigPathsPlugin()];
    return config;
  },
  docs: {
    autodocs: true
  }
};