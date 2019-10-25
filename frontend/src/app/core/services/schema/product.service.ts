import { Injectable } from '@angular/core';
import { ProductSchema } from 'src/app/shared/models';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: ProductSchema[];

  getProducts(): Observable<Array<ProductSchema>> {
    return of(this.products);
  }

  constructor() { }
}
