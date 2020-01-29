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
  total = {
    product: { investment: 0, sale: 0 },
    category: { investmenet: 0, sale: 0 }
  };

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
          data: this.getChartData(this.products, 'product'),
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
            data: this.getChartData(this.products, 'product'),
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
          data: this.getChartData(this.categories, 'category'),
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
            data: this.getChartData(this.categories, 'category'),
            labels: this.getChartLabel(this.categories),
            items: this.categories
          }
        });
      }
    );
  }

  getChartData(resource: any[], item: string): {
    mainData: any[],
    data: any[],
    extraData: any[],
    backgroundColor: string[],
    label: string }[] {
    return [{
        mainData: resource.map(r => {
          this.total[item].sale += r.sale;
          this.total[item].investment += r.investment;
          return r.sale - r.investment;
        }),
        data: [],
        extraData: resource.map((r: any, index: number) => ({
          x: index + 1,
          y: r.sale - r.investment,
          r: 10
        })),
        backgroundColor: resource.map((r, index) => this.getColorHex(index)),
        label: 'Gain'
      }
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

  getColorHex(numberInsert: number): string {
    return `#${(Math.floor(16777215 / (numberInsert + 1.000015))).toString(16)}`;
  }

}
