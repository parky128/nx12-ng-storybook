import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { A11yModule } from '@angular/cdk/a11y';

import { AldCommonModule } from '../common';

import * as manifest from './manifest';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        OverlayModule,
        A11yModule,
        AldCommonModule,
    ],
    declarations: [
        ...manifest.ALD_FORM_COMPONENTS
    ],
    exports: [
        ...manifest.ALD_FORM_COMPONENTS
    ],
})
export class AldFormsModule {}
