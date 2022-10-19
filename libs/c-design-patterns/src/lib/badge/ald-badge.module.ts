import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import * as manifest from './manifest';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ...manifest.ALD_BADGE_COMPONENTS,
    ],
    exports: [
        ...manifest.ALD_BADGE_COMPONENTS,
    ]
})
export class AldBadgeModule {}
