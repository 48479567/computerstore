import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleComponent } from './sale.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SaleRoutingModule } from './sale-routing.module';

@NgModule({
  declarations: [SaleComponent],
  imports: [
    CommonModule,
    SharedModule,
    SaleRoutingModule,
  ]
})
export class SaleModule { }
