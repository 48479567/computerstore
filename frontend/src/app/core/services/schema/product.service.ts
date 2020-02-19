import { Injectable } from '@angular/core';
import { ProductSchemaForm } from '../../../shared/models';
import { of, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductService {
  items: ProductSchemaForm[];

  getProducts(): Observable<Array<ProductSchemaForm>> {
    return of(this.items);
  }

  constructor(
  ) { }
}
