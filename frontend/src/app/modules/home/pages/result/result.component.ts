import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/schema/product.service';
import { SetService } from 'src/app/core/services/schema/set.service';
import { ProductSchema, SetSchema } from 'src/app/shared/models';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})

export class ResultComponent implements OnInit {
  products: ProductSchema[];
  sets: SetSchema[];

  constructor(
    private productService: ProductService,
    private setService: SetService,
  ) { }

  ngOnInit() {
    this.getProducts();
    this.getSets();
   }

  getProducts() {
    this.productService.getProducts().subscribe(
      (products: ProductSchema[]) => this.products = products
    );
  }
  getSets() {
    this.setService.getSets().subscribe(
      (sets: SetSchema[]) => { this.sets = sets; console.log(this.sets); },
      (error) => console.error(error)
    );
  }
}
