const rootMain = require('../../../.storybook/main');
const path = require('path');

module.exports = {
    ...rootMain,

    core: { ...rootMain.core },

    stories: [
        '../src/lib/**/*.stories.mdx',
        '../src/lib/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    webpackFinal: async (config, { configType }) => {
        if (rootMain.webpackFinal) {
            config = await rootMain.webpackFinal(config, { configType });
        }
        config.module.rules.push({
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
            include: path.resolve(__dirname, '../'),
          });
        return config;
    },
};
