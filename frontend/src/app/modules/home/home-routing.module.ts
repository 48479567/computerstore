import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent,
    children: [
      { path: 'product',
        loadChildren: () => import('./pages/product/product.module')
                              .then(mod => mod.ProductModule)
      },
      {
        path: 'result',
        loadChildren: () => import('./pages/result/result.module')
                              .then(mod => mod.ResultModule)
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }
