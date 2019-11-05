import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';
// import { ProductByCategoryComponent } from './product-by-category/product-by-category.component';

const routes: Routes = [
  { path: '', component: ProductComponent },
  // { path: 'category/:id', component: ProductByCategoryComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class ProductRoutingModule { }
