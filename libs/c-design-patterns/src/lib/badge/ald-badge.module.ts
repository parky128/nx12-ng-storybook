import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AldCommonModule } from '../common';
import { AldFormsModule } from '../forms';

import * as manifest from './manifest';

@NgModule({
    imports: [
        CommonModule,
        AldCommonModule,
        AldFormsModule,
    ],
    declarations: [
        ...manifest.ALD_BADGE_COMPONENTS,
    ],
    exports: [
        ...manifest.ALD_BADGE_COMPONENTS,
    ]
})
export class AldBadgeModule {}
