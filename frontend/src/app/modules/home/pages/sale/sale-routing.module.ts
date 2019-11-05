import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { SaleComponent } from './sale.component';

const routes: Route[] = [
  { path: '', component: SaleComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class SaleRoutingModule { }
