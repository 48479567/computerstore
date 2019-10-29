import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ProductSchema } from 'src/app/shared/models';
import { URL } from '../../data.http';
import { ProductService } from 'src/app/core/services/schema/product.service';
import { LoggerService } from 'src/app/core/logger.service';

@Injectable({providedIn: 'root'})
export class ProductHttpService {
  constructor(
    private http: HttpClient,
    private productService: ProductService,
    private logger: LoggerService
  ) { }

  getProducts(): Observable<Array<ProductSchema>> {
    return this.http.get<Array<ProductSchema>>(`${URL}/products`)
      .pipe(
        tap((products: ProductSchema[]) => {
          this.productService.products = products;
          this.productService.getFormRefProducts(products);
          this.logger.log(`Inserted ${products.length} product(s)`);
        })
      );
  }

}

