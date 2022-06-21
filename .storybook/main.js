module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/builder-webpack5", "@storybook/manager-webpack5"
  ],
  "framework": "@storybook/react",
  core: {
    builder: 'webpack5'
  }
}