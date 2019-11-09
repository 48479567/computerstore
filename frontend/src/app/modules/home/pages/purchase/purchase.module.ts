import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseRoutingModule } from './purchase-routing.module';
import { PurchaseComponent } from './purchase.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PurchaseDialogCreateComponent } from './purchase-dialog-create/purchase-dialog-create.component';
import { ProductDialogDetailComponent } from './product-dialog-detail/product-dialog-detail.component';


@NgModule({
  declarations: [PurchaseComponent, PurchaseDialogCreateComponent, ProductDialogDetailComponent],
  entryComponents: [PurchaseDialogCreateComponent, ProductDialogDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    PurchaseRoutingModule
  ]
})
export class PurchaseModule { }
