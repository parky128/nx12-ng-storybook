// import '@angular/localize/init';
import { setCompodocJson } from "@storybook/addon-docs/angular";
import { componentWrapperDecorator } from '@storybook/angular';
import docJson from "../documentation.json";
setCompodocJson(docJson);
import '!style-loader!css-loader!sass-loader!../src/styles/global.scss';
import '!style-loader!css-loader!sass-loader!../../ui-css-kit/scss/index.scss';
import '!style-loader!css-loader!sass-loader!../../ui-css-kit/scss/5-global/_body.scss';
import '!style-loader!css-loader!sass-loader!../../ui-css-kit/scss/5-global/_h-p-elements.scss';
import '!style-loader!css-loader!sass-loader!../../ui-css-kit/scss/5-global/_list.scss';


export const parameters = {

    backgrounds: {
        disable: true, // disable the background option
        grid: {
            disable: true,
        },
    },
    /** The layout property defines basic styles added to the preview body where the story is rendered. If you pass 'none', no styles are applied. */
    layout: 'fullscreen', // 'centered' | 'fullscreen' | 'padded' | 'none';
};


export const decorators = [
    componentWrapperDecorator((story) => `<div class="ald-story-full-width ald-story-full-height u-p-6">${story}</div>`),
];
