import { Injectable } from '@angular/core';
import { ProductSchemaForm } from 'src/app/shared/models';
import { of, Observable } from 'rxjs';
import { SelectOption } from 'src/app/shared/models/form/question-base';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  items: ProductSchemaForm[];
  objectRefProduct: SelectOption[];

  getProducts(): Observable<Array<ProductSchemaForm>> {
    return of(this.items);
  }

  constructor(
  ) { }
}
