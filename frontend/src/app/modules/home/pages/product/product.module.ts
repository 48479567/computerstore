import { NgModule } from '@angular/core';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';

@NgModule({
  imports: [ProductRoutingModule],
  exports: [],
  declarations: [ProductComponent],
  providers: [],
})
export class ProductModule { }
