import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { throwIfAlreadyLoaded } from './module-import-guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { NavBarComponent } from '../navbar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
    imports: [FormsModule,
        CommonModule,
        ReactiveFormsModule,
        RouterModule
    ],
    exports: [
        // ADD ALL EXPORTED APP LEVEL COMPONENTS HERE
        NavBarComponent,
        FooterComponent
    ],
    declarations: [
        // ADD ALL APP LEVEL COMPONENTS HERE
        NavBarComponent,
        FooterComponent
    ],
    providers: [
        // ADD ALL COMMON SERVICES HERE
    ],
})

/**
 * Core Module - Used to import reusable component's at the application level
 * eg. NavBar, Auth Guards, Footer , Login
 * import core module in corresponding module and use the component
 */
export class CoreModule {
    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
