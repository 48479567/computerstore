import { Component, OnInit } from '@angular/core';
import { ProductSchema } from 'src/app/shared/models/schema/product/product.schema';
import { ProductService } from 'src/app/core/services/schema/product.service';
import { ProductHttpService } from 'src/app/core/http/schema/product/product.http';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
  products: ProductSchema[] = [];

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
      (products: ProductSchema[]) => this.products = products
    );
  }


}
