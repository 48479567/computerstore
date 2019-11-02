import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { ProductSchemaForm } from 'src/app/shared/models';
import { URL } from '../../data.http';
import { ProductService } from 'src/app/core/services/schema/product.service';
import { LoggerService } from 'src/app/core/logger.service';
import { ObjectRefService } from 'src/app/core/services/schema/object-ref.service';

@Injectable({providedIn: 'root'})
export class ProductHttpService {
  constructor(
    private http: HttpClient,
    private productService: ProductService,
    private logger: LoggerService,
    private objRefService: ObjectRefService
  ) { }

  getProducts(): Observable<Array<ProductSchemaForm>> {
    return this.http.get<Array<ProductSchemaForm>>(`${URL}/product`)
      .pipe(
        map((products: ProductSchemaForm[]) => {
          this.objRefService.getObjectRef(products, 'productid');
          return this.productService.products = products;
        }),
        tap((p: ProductSchemaForm[]) => {
          this.logger.log(`Inserted ${p.length} products(s)`, 'bg-primary');
        })
      );
  }

  createItem(product: any): Observable<ProductSchemaForm> {
    return this.http.post<ProductSchemaForm>(`${URL}/product`, product)
      .pipe(
        tap((newProduct: any) => {
          this.productService.products.push(newProduct);
          this.objRefService.objectRef.productid.push({ key: newProduct.name, value: newProduct._id });
          this.logger.log(`Insert product with _id: ${newProduct._id}.`, 'bg-success');
        })
      );
  }

  updateItem(id: string, data: any, index: number): Observable<ProductSchemaForm> {
    return this.http.put<ProductSchemaForm>(`${URL}/product`, data)
      .pipe(
        tap((product: any) => {
          this.productService.products[index] = product;
          this.logger.log(`Updated product with _id: ${product._id}.`);
        })
      );
  }

}

