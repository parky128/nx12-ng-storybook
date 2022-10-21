import { AldOptionItem } from '../../common/types/al-common.types';
import { Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * Menu Component produces a simple list of AldOptionItems. Typically used in conjunction with the ald-dropdown component.
 */
@Component({
    selector: 'ald-menu',
    templateUrl: './ald-menu.component.html',
    styleUrls: ['./ald-menu.component.scss']
})
export class AldMenuComponent {

    /**
     * The array of AldOptionItems to render.
     */
    @Input() options: AldOptionItem[] = [];

    /** Setting checkable to true displays a selected state for the menu items. */
    @Input() checkable?: boolean = false;

    /**
     * Emits the selected item and its index in the array.
     */
    @Output() didSelect: EventEmitter<{option:AldOptionItem, index:number}> = new EventEmitter();

    /**
     * When the user selects an option, the selected options "selected" property is set to "true", and all others to "false". 
     * If the selcted the option is disabled, nothing happens.
     */
    selectedItem(item: AldOptionItem, index: number) {

        if (item.disabled) return;

        this.options.forEach((item: AldOptionItem) => item.selected = false);
        item.selected = true;
        this.didSelect.emit({option: item, index});
    }
}
