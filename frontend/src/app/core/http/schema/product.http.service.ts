import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { ProductSchemaForm } from 'src/app/shared/models';
import { URL } from '../data.http';
import { ProductService } from 'src/app/core/services/schema/product.service';
import { LoggerService } from 'src/app/core/logger.service';
import { ObjectRefService } from 'src/app/core/services/schema/object-ref.service';
import { HandleErrorService } from 'src/app/core/handle-error.service';

@Injectable({ providedIn: 'root' })
export class ProductHttpService {
  constructor(
    private http: HttpClient,
    private productService: ProductService,
    private logger: LoggerService,
    private objRefService: ObjectRefService,
    private handleErrorService: HandleErrorService
  ) { }

  getItems(): Observable<Array<ProductSchemaForm>> {
    return this.http.get<Array<ProductSchemaForm>>(`${URL}/product`)
      .pipe(
        tap((products: ProductSchemaForm[]) => {
          this.objRefService.getObjectRef(products, 'productid');
          this.productService.items = products;
          this.logger.log(`Inserted ${products.length} products(s)`, 'bg-primary');
        }),
        catchError(this.handleErrorService.handleError<ProductSchemaForm[]>(
          'Get Products', [], this.logger)
        )
      );
  }

  createItem(product: any): Observable<ProductSchemaForm> {
    return this.http.post<ProductSchemaForm>(`${URL}/product`, product)
      .pipe(
        tap((newProduct: any) => {
          this.productService.items.push(newProduct);
          this.objRefService.objectRef.productid.push({ key: newProduct.name, value: newProduct._id });
          this.logger.log(`Insert product with _id: ${newProduct._id}.`, 'bg-success');
        }),
        catchError(this.handleErrorService.handleError<ProductSchemaForm>(
          'Create Product', {}, this.logger)
        )
      );
  }

  updateItem(id: string, data: any): Observable<ProductSchemaForm> {
    return this.http.put<ProductSchemaForm>(`${URL}/product/${id}`, data)
      .pipe(
        tap((product: any) => {
          this.logger.log(`Updated product with _id: ${product._id}.`);
        }),
        catchError(this.handleErrorService.handleError<ProductSchemaForm>(
          'Update Product', data, this.logger)
        )
      );
  }

}

