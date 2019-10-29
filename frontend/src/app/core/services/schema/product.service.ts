import { Injectable } from '@angular/core';
import { ProductSchemaForm } from 'src/app/shared/models';
import { of, Observable } from 'rxjs';
import { SelectOption } from 'src/app/shared/models/form/question-base';
import { ObjectRefService } from './object-ref.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: ProductSchemaForm[];
  objectRefProduct: SelectOption[];

  getProducts(): Observable<Array<ProductSchemaForm>> {
    return of(this.products);
  }

  constructor(
  ) { }
}
