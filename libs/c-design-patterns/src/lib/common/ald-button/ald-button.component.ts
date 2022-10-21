import type { IconClass, IconSize, IconPosition, ButtonVariant, ButtonSize } from './../types';
import { HostBinding, Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'ald-button',
    templateUrl: './ald-button.component.html',
    styleUrls: ['./ald-button.component.scss'],
})
export class AldButtonComponent implements OnInit {

    /* Removes the space between inline-block elements */
    @HostBinding('class') class = 'u-flex';

    /**
     * The button label.
     *
     */
    @Input() label: string;

    /**
     * The button element type.
     */
    @Input() type?: 'button' | 'submit' | 'reset' = 'button';

    /**
     * The button variant and style.
     */
     @Input() variant?: ButtonVariant = 'secondary';

    /**
     * Optionally give it an icon - use the icon name/class.
     */
    @Input() icon?: string;

    /**
     * Specify the icon class to use. Default is "material-icons".
     */
    @Input() iconClass?: IconClass = 'material-icons';

    /**
     * Specify the icon position. Default is "left".
     */
    @Input() iconPosition?: IconPosition = 'left';

    /**
     * Specify a button size. Default is medium: "md".
     */
    @Input() size?: ButtonSize = 'md';

    /**
     * Sets the button state to disabled.
     */
    @Input() disabled?: boolean;

    /**
     * Fits to the full width of their container
     */
    @Input() fullwidth?: boolean;

    /**
     * Sets the button state to selected. This is used in button groups with toggle.
     */
    @Input() selected?: boolean = false;

    /**
     * Sets the button to a loading state - with spinning hedgehogs.
     */
    @Input() loading?: boolean;

    /**
     * Icon size is calculated based on the button size and presence of the label.
     */
    iconSize?: IconSize = 'sm';

    ngOnInit() {

        // Force 'default' if no variant given.
        if (!this.variant) {
            this.variant = 'secondary';
        }

        if (this.size === 'lg') {
            this.iconSize = 'md';
        }

        if (!this.label && (this.size === 'md' || this.size === 'lg')) {
            this.iconSize = 'md';
        }
    }
}
