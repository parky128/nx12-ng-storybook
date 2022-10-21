import { Story, Meta, componentWrapperDecorator } from '@storybook/angular';
import { AldIconComponent } from './ald-icon.component';

export default {
    title: 'Components/Icon',
    component: AldIconComponent,
    decorators: [
        componentWrapperDecorator((story) => `<div class="u-p-6">${story}</div>`),
    ],
} as Meta<AldIconComponent>;

const Template: Story<AldIconComponent> = (args: AldIconComponent) => ({
    component: AldIconComponent,
    props: args,
});

//
// Edit icon
//
export const AlertLogicHost = Template.bind({});
AlertLogicHost.args = {
    icon: 'host',
    iconClass: 'al',
    size: 'md',
};

//
// Material icon with color
//
export const MaterialBuildColor = Template.bind({});
MaterialBuildColor.args = {
    icon: 'build',
    iconClass: 'material-icons',
    size: 'lg',
    color: 'u-text-danger',
};
