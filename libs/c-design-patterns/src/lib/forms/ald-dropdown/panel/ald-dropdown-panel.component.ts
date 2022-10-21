import { Component, Input } from '@angular/core';

@Component({
    selector: 'ald-dropdown-panel',
    templateUrl: './ald-dropdown-panel.component.html',
    styleUrls: ['./ald-dropdown-panel.component.scss']
})
export class AldDropdownPanelComponent {
    @Input() width?: 'sm' | 'md' | 'lg' | 'xl' | 'auto' | string = 'auto';
}
