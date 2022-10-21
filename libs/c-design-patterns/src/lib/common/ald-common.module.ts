import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OverlayModule } from '@angular/cdk/overlay';

import * as manifest from './manifest';

@NgModule({
    declarations: [
        ...manifest.ALD_COMMON_COMPONENTS
    ],
    imports: [
        CommonModule,
        RouterModule,
        OverlayModule
    ],
    providers: [
    ],
    exports: [
        ...manifest.ALD_COMMON_COMPONENTS,
    ]
})

export class AldCommonModule { }
