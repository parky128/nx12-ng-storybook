import { CommonModule } from '@angular/common';
import { Story, Meta, componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { AldFormsModule } from './../ald-forms.module';
import { AldDropdownComponent } from './ald-dropdown.component';
import { SampleMenu } from './../ald-menu/ald-menu.component.stories';

export default {
    title: 'Components/Dropdown',
    component: AldDropdownComponent,
    decorators: [
        componentWrapperDecorator((story) => `<div class="u-p-6">${story}</div>`),
        moduleMetadata({
            imports: [CommonModule, AldFormsModule],
        })
    ],
} as Meta;


const Template: Story = args => ({
    props: {
        ...args,
        options: SampleMenu.args.options
    },
    template: `<ald-dropdown [label]="label">
        <ald-menu [options]="options"></ald-menu>
    </ald-dropdown>`,
});

export const Default = Template.bind({});
Default.args = {
    label: 'Default'
}
