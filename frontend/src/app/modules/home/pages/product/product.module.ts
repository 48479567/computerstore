import { NgModule } from '@angular/core';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
// import { ProductByCategoryComponent } from './product-by-category/product-by-category.component';

@NgModule({
  imports: [ProductRoutingModule, CommonModule, SharedModule],
  exports: [],
  declarations: [ProductComponent,
    // ProductByCategoryComponent
  ],
  providers: [],
})
export class ProductModule { }
