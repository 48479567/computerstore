import { Component, OnInit } from '@angular/core';
import { ProductSchema, ProductSchemaForm } from 'src/app/shared/models/schema/product/product.schema';
import { ProductService } from 'src/app/core/services/schema/product.service';
import { ProductHttpService } from 'src/app/core/http/schema/product/product.http.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
  products: ProductSchema[] = [];
  productCreate: ProductSchemaForm = new ProductSchemaForm('', 0, 0, 0, 0, '', 'https://i.imgur.com/AmTeDvt.jpg', null, null );

  constructor(
    private productService: ProductService,
    private productHttp: ProductHttpService
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): any {
    if (this.productService.products) {
      return this.products = this.productService.products;
    }

    this.productHttp.getProducts().subscribe(
      (products: ProductSchema[]) => {
        this.products = products;
      }
    );
  }



}
