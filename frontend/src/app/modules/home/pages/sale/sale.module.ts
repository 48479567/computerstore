import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleComponent } from './sale.component';
import { SharedModule } from '../../../../shared/shared.module';
import { SaleRoutingModule } from './sale-routing.module';
import { SaleDialogCreateComponent } from './sale-dialog-create/sale-dialog-create.component';
import { ProductDialogDetailComponent } from './product-dialog-detail/product-dialog-detail.component';

@NgModule({
  declarations: [SaleComponent, SaleDialogCreateComponent, ProductDialogDetailComponent],
  entryComponents: [SaleDialogCreateComponent, ProductDialogDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    SaleRoutingModule,
  ]
})
export class SaleModule { }
