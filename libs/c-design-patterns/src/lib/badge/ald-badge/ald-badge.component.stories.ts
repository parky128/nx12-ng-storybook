import { CommonModule } from '@angular/common';
import { Story, Meta } from '@storybook/angular';

import { AldBadgeComponent } from './ald-badge.component';

const modules = {
    imports: [CommonModule],
};

export default {
    title: 'Components/Badge',
    component: AldBadgeComponent,
} as Meta<AldBadgeComponent>;

const Template: Story<AldBadgeComponent> = (args: AldBadgeComponent) => ({
    component: AldBadgeComponent,
    moduleMetadata: modules,
    props: args,
});


// Default Badge
export const Default = Template.bind({});
Default.args = {
    label: 'Badge',
};

// Badge with icon
export const WithIcon = Template.bind({});
WithIcon.args = {
    label: 'Badge with icon',
    variant: 'essentials',
    icon: 'host',
    iconClass: 'al',
};

// Rounded Badge
export const LowContrast = Template.bind({});
LowContrast.args = {
    label: 'Very Good',
    icon: 'check',
    variant: 'success',
    lowContrast: true
};

// Beta Badge
export const BetaBadge = Template.bind({});
BetaBadge.args = {
    label: 'BETA',
    icon: 'science',
    iconClass: 'material-icons-outlined',
    variant: 'info',
    size: 'xs',
    lowContrast: true
};

// Beta Icon Badge
export const BetaIconBadge = Template.bind({});
BetaIconBadge.args = {
    icon: 'science',
    iconClass: 'material-icons-outlined',
    variant: 'info',
    size: 'xs',
    title: 'Beta feature',
    lowContrast: true
};

// Rounded Badge
export const Rounded = Template.bind({});
Rounded.args = {
    label: '42',
    variant: 'danger',
    rounded: true
};

// A Chip
export const Chip = Template.bind({});
Chip.args = {
    label: 'Done',
    variant: 'success',
    actionIcon: 'close',
};

// A Chip with dropdown menu
export const ChipWithDropdown = Template.bind({});
ChipWithDropdown.args = {
    label: 'Danger',
    variant: 'danger',
    icon: 'whatshot',
    actionIcon: 'more_vert',
    actionOptions: [
        {label: 'Action One', value: 'one'},
        {label: 'Action Two', value: 'two'},
        {label: 'Action Three', value: 'three'}
    ]
};


