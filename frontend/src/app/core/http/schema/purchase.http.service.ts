import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { PurchaseSchemaForm } from 'src/app/shared/models';
import { URL } from '../data.http';
import { PurchaseService } from 'src/app/core/services/schema/purchase.service';
import { LoggerService } from 'src/app/core/logger.service';
import { ObjectRefService } from 'src/app/core/services/schema/object-ref.service';
import { HandleErrorService } from 'src/app/core/handle-error.service';

@Injectable({ providedIn: 'root' })
export class PurchaseHttpService {
  constructor(
    private http: HttpClient,
    private purchaseService: PurchaseService,
    private logger: LoggerService,
    private objRefService: ObjectRefService,
    private handleErrorService: HandleErrorService
  ) { }

  getItems(): Observable<Array<PurchaseSchemaForm>> {
    return this.http.get<Array<PurchaseSchemaForm>>(`${URL}/purchase`)
      .pipe(
        tap((purchases: PurchaseSchemaForm[]) => {
          this.objRefService.getObjectRef(purchases, 'purchaseid');
          this.purchaseService.items = purchases;
          this.logger.log(`Inserted ${purchases.length} purchases(s)`, 'bg-primary');
        }),
        catchError(this.handleErrorService.handleError<PurchaseSchemaForm[]>(
          'Get Purchases', [], this.logger)
        )
      );
  }

  createItem(purchase: any): Observable<PurchaseSchemaForm> {
    return this.http.post<PurchaseSchemaForm>(`${URL}/purchase`, purchase)
      .pipe(
        tap((newPurchase: any) => {
          this.purchaseService.items.push(newPurchase);
          this.logger.log(`Insert purchase with _id: ${newPurchase._id}.`, 'bg-success');
        }),
        catchError(this.handleErrorService.handleError<PurchaseSchemaForm>(
          'Create Purchase', null , this.logger)
        )
      );
  }

  updateItem(id: string, data: any): Observable<PurchaseSchemaForm> {
    return this.http.put<PurchaseSchemaForm>(`${URL}/purchase/${id}`, data)
      .pipe(
        tap((purchase: any) => {
          this.logger.log(`Updated purchase with _id: ${purchase._id}.`);
        }),
        catchError(this.handleErrorService.handleError<PurchaseSchemaForm>(
          'Update Purchase', data, this.logger)
        )
      );
  }

}
