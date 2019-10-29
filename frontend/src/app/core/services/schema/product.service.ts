import { Injectable } from '@angular/core';
import { ProductSchema } from 'src/app/shared/models';
import { of, Observable } from 'rxjs';
import { SelectOption } from 'src/app/shared/models/form/question-base';
import { ObjectRefService } from './object-ref.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: ProductSchema[];
  objectRefProduct: SelectOption[];

  getProducts(): Observable<Array<ProductSchema>> {
    return of(this.products);
  }

  getFormRefProducts(productsHttp: ProductSchema[]) {
    this.objectRefProduct = productsHttp.map((phttp: ProductSchema) => {
      return { key: phttp.name, value: phttp.name };
    });
    this.objectRef.objectRef = this.objectRefProduct;

  }

  constructor(
    private objectRef: ObjectRefService
  ) { }
}
