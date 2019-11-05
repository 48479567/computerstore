import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseRoutingModule } from './purchase-routing.module';
import { PurchaseComponent } from './purchase.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [PurchaseComponent],
  imports: [
    CommonModule,
    SharedModule,
    PurchaseRoutingModule
  ]
})
export class PurchaseModule { }
