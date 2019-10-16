import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/core/services/schema/product.service';
import { SetService } from 'src/app/core/services/schema/set.service';
import { FilterService } from 'src/app/core/services/filter/filter.service';

import { ProductSchema, SetSchema, FilterToggle } from 'src/app/shared/models';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})

export class ResultComponent implements OnInit {
  products: ProductSchema[];
  sets: SetSchema[];
  filtersSources: FilterToggle[];
  filtersCharts: FilterToggle[];

  constructor(
    private productService: ProductService,
    private setService: SetService,
    private filterService: FilterService
  ) { }

  ngOnInit() {
    this.getProducts();
    this.getSets();
    this.getFiltersSources();
    this.getFiltersCharts();
   }

  getProducts(): void {
    this.productService.getProducts().subscribe(
      (products: ProductSchema[]) => this.products = products
    );
  }
  getSets(): void {
    this.setService.getSets().subscribe(
      (sets: SetSchema[]) => { this.sets = sets; console.log(this.sets); },
      (error) => console.error(error)
    );
  }

  getFiltersSources(): void {
    this.filterService.getFiltersSources().subscribe(
      (filtersSources: FilterToggle[]) => this.filtersSources = filtersSources);
  }
  getFiltersCharts(): void {
    this.filterService.getFiltersCharts().subscribe(
      (filtersCharts: FilterToggle[]) => this.filtersCharts = filtersCharts);
  }
}
