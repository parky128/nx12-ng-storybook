import { Component, Input, HostBinding, Output, EventEmitter } from '@angular/core';
import type { IconClass, IconPosition, ButtonVariant, ButtonSize } from '../../common/types';

@Component({
    selector: 'ald-dropdown',
    templateUrl: './ald-dropdown.component.html'
})
export class AldDropdownComponent {
    @HostBinding('class') class = 'ald-dropdown';

    @Input() variant?: ButtonVariant = 'secondary';
    @Input() size?: ButtonSize = 'md';
    @Input() label?: string;
    @Input() icon?: string = 'expand_more';
    @Input() iconPosition?: IconPosition = 'right';
    @Input() iconClass?: IconClass = 'material-icons';
    @Input() disabled?: boolean;
    @Input() selected?: boolean;
    @Input() width?: 'sm' | 'md' | 'lg' | 'xl' | 'auto' | string = 'auto';

    @Output() didOpen: EventEmitter<void> = new EventEmitter();

    isOpen = false;

    open() {
        this.isOpen = !this.isOpen;
        this.didOpen.emit();
    }

    close() {
        this.isOpen = false;
    }
}
