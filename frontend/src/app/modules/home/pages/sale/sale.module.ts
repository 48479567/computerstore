import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleComponent } from './sale.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SaleRoutingModule } from './sale-routing.module';
import { SaleDialogCreateComponent } from './sale-dialog-create/sale-dialog-create.component';

@NgModule({
  declarations: [SaleComponent, SaleDialogCreateComponent],
  entryComponents: [SaleDialogCreateComponent],
  imports: [
    CommonModule,
    SharedModule,
    SaleRoutingModule,
  ]
})
export class SaleModule { }
