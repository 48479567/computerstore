import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '',
    component: HomeComponent,
    children: [
      {
        path: 'category',
        loadChildren: () => import('./pages/category/category.module')
                              .then(mod => mod.CategoryModule)
      },
      { path: 'product',
        loadChildren: () => import('./pages/product/product.module')
                              .then(mod => mod.ProductModule)
      },
      {
        path: 'sale',
        loadChildren: () => import('./pages/sale/sale.module')
                              .then(mod => mod.SaleModule)
      },
      {
        path: 'purchase',
        loadChildren: () => import('./pages/purchase/purchase.module')
                              .then(mod => mod.PurchaseModule)
      },
      {
        path: 'result',
        loadChildren: () => import('./pages/result/result.module')
                              .then(mod => mod.ResultModule)
      },
      {
        path: 'test',
        loadChildren: () => import('./pages/test/test.module')
                              .then(mod => mod.TestModule)
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }
