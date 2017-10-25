import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routing } from './invoice.routes';
import { InvoiceComponent } from './invoice.component'
import { OrderDetailsModule } from 'angular-atomic-library';

console.log('`Cart Summary` bundle loaded asynchronously');

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    InvoiceComponent
  ],
  exports: [
    InvoiceComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    OrderDetailsModule,
    routing
  ]
})
export class InvoiceModule {
}
