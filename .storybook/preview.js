import '!style-loader!css-loader!sass-loader!../libs/ui-css-kit/scss/index.scss';
import '!style-loader!css-loader!sass-loader!../libs/ui-css-kit/scss/5-global/_body.scss';
import '!style-loader!css-loader!sass-loader!../libs/ui-css-kit/scss/5-global/_h-p-elements.scss';
import '!style-loader!css-loader!sass-loader!../libs/ui-css-kit/scss/5-global/_list.scss';


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}