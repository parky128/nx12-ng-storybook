import type { IconClass, IconSize } from './../types/al-common.types';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'ald-icon',
    templateUrl: './ald-icon.component.html',
    styleUrls: ['./ald-icon.component.scss'],
})
export class AldIconComponent {
    @Input() icon = 'whatshot';
    @Input() iconClass?: IconClass = 'material-icons';
    @Input() size?: IconSize = 'md';
    @Input() color?: string;
    @Input() opacity?: number;
}
