import { CommonModule } from '@angular/common';
import { Story, Meta, componentWrapperDecorator } from '@storybook/angular';
import { AldCommonModule } from './../ald-common.module';
import { AldButtonComponent } from './ald-button.component';

const modules = {
    declarations: [],
    imports: [CommonModule, AldCommonModule],
};

export default {
    title: 'Components/Button/Button',
    component: AldButtonComponent,
    // decorators: [
    //     componentWrapperDecorator((story) => `<div class="u-p-6">${story}</div>`),
    // ],
} as Meta<AldButtonComponent>;

const Template: Story<AldButtonComponent> = (args: AldButtonComponent) => ({
    component: AldButtonComponent,
    moduleMetadata: modules,
    props: args,
});

//
// Ghost
//
export const Ghost = Template.bind({});
Ghost.args = {
    label: 'Ghost',
    iconClass: 'material-icons',
    size: 'md',
    variant: 'ghost',
};


//
// Primary
//
export const Primary = Template.bind({});
Primary.args = {
    label: 'Primary',
    iconClass: 'material-icons',
    size: 'md',
    variant: 'primary',
};

//
// Secondary
//
export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Secondary',
    iconClass: 'material-icons',
    size: 'md',
    variant: 'secondary',
};

//
// Icon Only
//
export const IconOnly = Template.bind({});
IconOnly.args = {
    iconClass: 'material-icons',
    size: 'md',
    variant: 'secondary',
    icon: 'add',
};

