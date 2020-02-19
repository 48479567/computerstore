import { Injectable } from '@angular/core';
import { SaleSchemaForm } from '../../../shared/models';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SaleService {

  items: SaleSchemaForm[];

  constructor() { }

  getSales(): Observable<Array<SaleSchemaForm>> {
    return of(this.items);
  }
}
