import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ProductSchema } from 'src/app/shared/models';
import { URL } from '../../data.http';
import { ProductService } from 'src/app/core/services/schema/product.service';

@Injectable({providedIn: 'root'})
export class ProductHttpService {
  constructor(
    private http: HttpClient,
    private productService: ProductService
  ) { }

  getProducts(): Observable<Array<ProductSchema>> {
    return this.http.get<Array<ProductSchema>>(`${URL}/products`)
      .pipe(
        tap((products: ProductSchema[]) => this.productService.products = products)
      );
  }
}

