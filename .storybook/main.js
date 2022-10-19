module.exports = {
  stories: [
    "../libs/core-components/**/*.stories.mdx",
    "../libs/core-components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-scss",
    'storybook-theme-toggle',
    'storybook-dark-mode'
  ],
  core: {
    builder: "webpack5"
  }
};