import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceComponent } from './invoice.component';

export const routes: Routes = [
    {
        path: '',
        component: InvoiceComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
