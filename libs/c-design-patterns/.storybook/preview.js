// import '@angular/localize/init';
import { setCompodocJson } from "@storybook/addon-docs/angular";
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import docJson from "../documentation.json";
setCompodocJson(docJson);



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
    moduleMetadata({
        providers: [ThemeModule.forRoot().providers]
      }),

    componentWrapperDecorator((story) => `<div class="ald-story-full-width ald-story-full-height u-p-6">${story}</div>`),
];
