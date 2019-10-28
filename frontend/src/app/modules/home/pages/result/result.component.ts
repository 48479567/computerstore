import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/core/services/schema/product.service';
import { FilterService } from 'src/app/core/services/filter/filter.service';

import { ProductSchema, FilterToggle, CategorySchema } from 'src/app/shared/models';
import { CategoryService } from 'src/app/core/services/schema/category.service';
import { ProductHttpService } from 'src/app/core/http/schema/product/product.http.service';
import { CategoryHttpService } from 'src/app/core/http/schema/category/category.http.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})

export class ResultComponent implements OnInit {
  products: ProductSchema[];
  categories: CategorySchema[];
  filtersSources: FilterToggle[];
  filtersCharts: FilterToggle[];
  categoryChart: { data: number[], label: string }[];
  productChart: { data: number[], label: string }[];

  constructor(
    private productService: ProductService,
    private productHttpService: ProductHttpService,
    private categoryService: CategoryService,
    private categoryHttpService: CategoryHttpService,
    private filterService: FilterService
  ) { }

  ngOnInit() {
    this.getFiltersCharts();
    this.getCategories();
    this.getProducts();
   }

  getProducts(): any {
    if (this.productService.products) {
      this.products = this.productService.products;
      this.productChart = this.getChartData(this.products);
      return;
    }
    this.productHttpService.getProducts().subscribe(
      (products: ProductSchema[]) => {
        this.products = products;
        this.productChart = this.getChartData(products);
      }
    );

  }
  getCategories(): any {
    if (this.categoryService.categories) {
      this.categories = this.categoryService.categories;
      this.categoryChart = this.getChartData(this.categories);
      return;
    }
    this.categoryHttpService.getCategories().subscribe(
      (categories: CategorySchema[]) => {
        this.categories = categories;
        this.categoryChart = this.getChartData(categories);
      }
    );
  }

  getChartData(resource: any[]): { data: number[], label: string }[] {
    return [
      { data: resource.map(r => r.investment), label: 'Investment'},
      { data: resource.map(r => r.sale), label: 'Sale'},
    ];
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
