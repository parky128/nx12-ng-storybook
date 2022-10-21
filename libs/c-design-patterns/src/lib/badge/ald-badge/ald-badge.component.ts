import { AldOptionItem } from '../../common/types/al-common.types';
import type {IconClass}  from '../../common/types/al-common.types';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import type { BadgeVariant } from '../types';

/**
 * Badges add metadata or indicate status of items.
 * Providing an actionIcon renders a button making the badge actionable, aka a "chip".
 */
@Component({
    selector: 'ald-badge',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './ald-badge.component.html',
    styleUrls: ['./ald-badge.component.scss'],
})
export class AldBadgeComponent implements OnChanges {

    /** Text to show inside the badge (optional, but should have a label or an icon).*/
    @Input() label?: string | number;

    /** Displays the badge title when hovered over.*/
    @Input() title?: string = '';

    /**
     * The icon to show inside the badge (optional, but should have a label or an icon).
     * If used with a label, the icon is positioned left of the label.
     */
    @Input() icon?: string;

    /** Icon class for the icon. Defaults to the ald-icon default (material-icons). */
    @Input() iconClass?: IconClass;

    /** The Badge style variant, defaults to "default". */
    @Input() variant?: BadgeVariant = 'default';

    /** The Badge size, defaults to "md" (optional). */
    @Input() size?: 'xs' | 'sm' | 'md' = 'md';

    /** Low Contrast reduces the tone of the badge, where less emphasis is required, defaults to false. */
    @Input() lowContrast?: boolean = false;

    /** Adds the full rounded style to the badge, defaults to false, but with minor rounded corners. */
    @Input() rounded?: boolean = false;

    /** Adding an action icon to the badge renders a button, making it an actionable badge, AKA; a "chip". */
    @Input() actionIcon?: string;

    /** Icon class for the action icon. Defaults to the default ald-icon class. */
    @Input() actionIconClass?: IconClass;

    /** In addition to the action icon, passing an array of options to the badge will render a dropdown menu instead of a button. */
    @Input() actionOptions?: AldOptionItem[] = [];

    /** This will fire the event on action button or dropdown menu item click, returning void, or the selected item and index.  */
    @Output() didAction: EventEmitter<void | {option: AldOptionItem, index: number}> = new EventEmitter<void | {option: AldOptionItem, index: number}>();

    badgeStyles: string = '';
    sizeStyles: string = '';
    roundedStyles: string = 'u-rounded-sm';

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['variant'] || changes['lowContrast']) {
            this.badgeStyles = this.setBadgeStyles();
        }

        if (changes['size'] || changes['icon'] || changes['label']) {
            this.sizeStyles = this.setSizeStyles();
        }

        if (changes['rounded'] || changes['actionIcon']) {
            this.roundedStyles = this.setRoundedStyles();
        }
    }

    private setBadgeStyles(): string {
        switch (this.variant) {
            case 'info':
                return this.lowContrast ? 'ald-badge--info-low' : 'ald-badge--info';
            case 'success':
                return this.lowContrast ? 'ald-badge--success-low' : 'ald-badge--success';
            case 'warning':
                return this.lowContrast ? 'ald-badge--warning-low' : 'ald-badge--warning';
            case 'danger':
                return this.lowContrast ? 'ald-badge--danger-low' : 'ald-badge--danger';
            case 'essentials':
                return 'ald-badge--essentials';
            case 'professional':
                return 'ald-badge--professional';
            case 'enterprise':
                return 'ald-badge--enterprise';
            case 'aws':
                return 'ald-badge--aws';
            case 'azure':
                return 'ald-badge--azure';
            case 'datacenter':
                return 'ald-badge--datacenter';
            case 'default':
            default:
                return this.lowContrast ? 'ald-badge--default-low' : 'ald-badge--default';
        }
    }

    private setSizeStyles(): string {
        switch (this.size) {
            case 'xs':
                return (this.icon && !this.label) ? 'ald-badge-icon--xs' : 'ald-badge--xs';
            case 'sm':
                return (this.icon && !this.label) ? 'ald-badge-icon--sm' : 'ald-badge--sm';
            case 'md':
            default:
                return (this.icon && !this.label) ? 'ald-badge-icon--md' : 'ald-badge--md';
        }
    }

    private setRoundedStyles(): string {

        if (this.actionIcon) {
            return 'u-rounded-full';
        }

        return this.rounded ? 'u-rounded-full' : 'u-rounded-sm';
    }
}
