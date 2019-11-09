import { Injectable } from '@angular/core';
import { PurchaseSchemaForm } from 'src/app/shared/models';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PurchaseService {

  items: PurchaseSchemaForm[];

  constructor() { }

  getPurchases(): Observable<Array<PurchaseSchemaForm>> {
    return of(this.items);
  }
}
