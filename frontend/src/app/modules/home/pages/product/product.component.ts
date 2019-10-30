import { Component, OnInit } from '@angular/core';
import { ProductSchemaForm, formatQuestionProduct } from 'src/app/shared/models/schema/product/product.schema';
import { ProductService } from 'src/app/core/services/schema/product.service';
import { ProductHttpService } from 'src/app/core/http/schema/product/product.http.service';
import { ObjectRefService } from 'src/app/core/services/schema/object-ref.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
  products: ProductSchemaForm[] = [];
  productCreate: ProductSchemaForm = new ProductSchemaForm();

  constructor(
    private productService: ProductService,
    private productHttp: ProductHttpService,
    private objectRefService: ObjectRefService
  ) { }

  ngOnInit() {
    this.getProducts();
    this.objectRefService.formatQuestion = formatQuestionProduct;
    this.objectRefService.selectSchema.http = this.productHttp;
    this.objectRefService.selectSchema.service = this.productService;
  }

  getProducts(): any {
    if (this.productService.products) {
      return this.products = this.productService.products;
    }

    this.productHttp.getProducts().subscribe(
      (products: ProductSchemaForm[]) => this.products = products);
  }

}
