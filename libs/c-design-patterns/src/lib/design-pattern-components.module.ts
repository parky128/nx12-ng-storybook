import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OverlayModule } from '@angular/cdk/overlay';

import * as manifest from './manifest';

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        RouterModule,
        OverlayModule,
        ...manifest.ALD_MODULES
    ],
    providers: [

    ],
    exports: [
        ...manifest.ALD_MODULES
    ]
})

export class DesignPatternComponentsModule { }
