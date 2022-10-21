import { CommonModule } from '@angular/common';
import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { AldStackComponent } from '../../common/ald-stack/ald-stack.component';
import { AldMenuComponent } from './ald-menu.component';

const modules = {
    declarations: [AldMenuComponent, AldStackComponent],
    imports: [CommonModule],
};

export default {
    title: 'Components/Menu',
    component: AldMenuComponent,
    decorators: [
        moduleMetadata({
            imports: [],
        }),
    ],
} as Meta<AldMenuComponent>;

const Template: Story<AldMenuComponent> = (args: AldMenuComponent) => ({
    component: AldMenuComponent,
    moduleMetadata: modules,
    props: args,
});

//
// Default Menu
//
export const SampleMenu = Template.bind({});
SampleMenu.args = {
    options: [
        {
            label: 'Option 1',
            value: 'Option 1',
        },
        {
            label: 'Option 2',
            value: 'Option 2',
        },
        {
            label: 'Option 3',
            value: 'Option 3',
        },
        {
            label: 'Option 4',
            value: 'Option 4',
            disabled: true
        },
    ],
};
