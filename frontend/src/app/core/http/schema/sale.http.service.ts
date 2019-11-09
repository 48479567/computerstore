import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { SaleSchemaForm } from 'src/app/shared/models';
import { URL } from '../data.http';
import { SaleService } from 'src/app/core/services/schema/sale.service';
import { LoggerService } from 'src/app/core/logger.service';
import { ObjectRefService } from 'src/app/core/services/schema/object-ref.service';
import { HandleErrorService } from 'src/app/core/handle-error.service';

@Injectable({ providedIn: 'root' })
export class SaleHttpService {
  constructor(
    private http: HttpClient,
    private saleService: SaleService,
    private logger: LoggerService,
    private objRefService: ObjectRefService,
    private handleErrorService: HandleErrorService
  ) { }

  getItems(): Observable<Array<SaleSchemaForm>> {
    return this.http.get<Array<SaleSchemaForm>>(`${URL}/sale`)
      .pipe(
        tap((sales: SaleSchemaForm[]) => {
          this.objRefService.getObjectRef(sales, 'saleid');
          this.saleService.items = sales;
          this.logger.log(`Inserted ${sales.length} sales(s)`, 'bg-primary');
        }),
        catchError(this.handleErrorService.handleError<SaleSchemaForm[]>(
          'Get Sales', [], this.logger)
        )
      );
  }

  createItem(sale: any): Observable<SaleSchemaForm> {
    return this.http.post<SaleSchemaForm>(`${URL}/sale`, sale)
      .pipe(
        tap((newSale: any) => {
          this.saleService.items.push(newSale);
          this.logger.log(`Insert sale with _id: ${newSale._id}.`, 'bg-success');
        }),
        catchError(this.handleErrorService.handleError<SaleSchemaForm>(
          'Create Sale', null, this.logger)
        )
      );
  }

  updateItem(id: string, data: any): Observable<SaleSchemaForm> {
    return this.http.put<SaleSchemaForm>(`${URL}/sale/${id}`, data)
      .pipe(
        tap((sale: any) => {
          this.logger.log(`Updated sale with _id: ${sale._id}.`);
        }),
        catchError(this.handleErrorService.handleError<SaleSchemaForm>(
          'Update Sale', data, this.logger)
        )
      );
  }

}
