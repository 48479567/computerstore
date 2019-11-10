import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/core/services/schema/product.service';
import { FilterService } from 'src/app/core/services/filter/filter.service';

import { ProductSchemaForm, FilterToggle, CategorySchemaForm } from 'src/app/shared/models';
import { CategoryService } from 'src/app/core/services/schema/category.service';
import { ProductHttpService } from 'src/app/core/http/schema/product.http.service';
import { CategoryHttpService } from 'src/app/core/http/schema/category.http.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})

export class ResultComponent implements OnInit {
  products: ProductSchemaForm[];
  categories: CategorySchemaForm[];
  filtersSources: FilterToggle[];
  filtersCharts: FilterToggle[];
  ChartsLabel: string[];


  filterSourceList = [];

  viewChartData(schemaSelect) {
    console.log(this.filterSourceList);
    console.log(schemaSelect);
  }

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
    if (this.productService.items) {
      this.products = this.productService.items;
      this.filterSourceList.push({
        key: 'Products',
        value: {
          data: this.getChartData(this.products),
          labels: this.getChartLabel(this.products),
          items: this.products
        }
      });
      return;
    }
    this.productHttpService.getItems().subscribe(
      (products: ProductSchemaForm[]) => {
        this.products = products;
        this.filterSourceList.push({
          key: 'Products',
          value: {
            data: this.getChartData(this.products),
            labels: this.getChartLabel(this.products),
            items: this.products
          }
        });
      }
    );

  }

  getCategories(): any {
    if (this.categoryService.items) {
      this.categories = this.categoryService.items;
      this.filterSourceList.push({
        key: 'Categories',
        value: {
          data: this.getChartData(this.categories),
          labels: this.getChartLabel(this.categories),
          items: this.categories
        }
      });
      return;
    }
    this.categoryHttpService.getItems().subscribe(
      (categories: CategorySchemaForm[]) => {
        this.categories = categories;
        this.filterSourceList.push({
          key: 'Categories',
          value: {
            data: this.getChartData(this.categories),
            labels: this.getChartLabel(this.categories),
            items: this.categories
          }
        });
      }
    );
  }

  getChartData(resource: any[]): { data: number[], label: string }[] {
    return [
      { data: resource.map(r => r.investment), label: 'Investment' },
      { data: resource.map(r => r.sale), label: 'Sale'},
    ];
  }

  getChartLabel(resource: any[]): string[] {
    return resource.map(r => r.name);
  }

  getFiltersSources(): void {
    this.filterService.getFiltersSources().subscribe(
      (filtersSources: FilterToggle[]) => this.filtersSources = filtersSources);
  }

  getFiltersCharts(): void {
    this.filterService.getFiltersCharts().subscribe(
      (filtersCharts: FilterToggle[]) => this.filtersCharts = filtersCharts);
  }

  getColorChip(item: any): string {
    return item.sale - item.investment ? 'primary' : 'accent';
  }
}
