import { Component, OnInit } from '@angular/core';
import { ProductCard, ProductSchema } from 'src/app/shared/models/schema/product/product.schema';
import { ProductService } from 'src/app/core/services/schema/product.service';
import { MatDialog } from '@angular/material';
import { FormDialogComponent } from 'src/app/shared/components';
import { FormDialogData } from 'src/app/shared/models/dialog/dialog.model';
import { TextboxQuestion, DropdownQuestion, FilterToggleIcon } from 'src/app/shared/models';
import { FilterService } from 'src/app/core/services/filter/filter.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
  filtersIcon: FilterToggleIcon[];

  products: ProductSchema[] = [];

  constructor(
    private productService: ProductService,
    public dialog: MatDialog,
    private filterService: FilterService
  ) { }

  ngOnInit() {
    this.getProducts();
    this.getFiltersIcon();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(
      (products: ProductSchema[]) => this.products = products
    );
  }

  getFiltersIcon(): void {
    this.filterService.getFiltersIcon().subscribe(
      (filtersIcon: FilterToggleIcon[]) => this.filtersIcon = filtersIcon,
      (error) => console.error(error)
    );
  }

  openFormDialog(selectedProduct: ProductCard): void {
    const formDialogRef = this.dialog.open(FormDialogComponent, {
      data: { title: 'Product Dialog', questions: [
        new TextboxQuestion({
          key: 'productname',
          label: 'Product Name',
          value: selectedProduct.name,
          required: true,
          type: 'text',
        }),
        new TextboxQuestion({
          key: 'idproduct',
          label: 'ID Product',
          value: '',
          required: true,
          type: 'text'
        }),
        new TextboxQuestion({
          key: 'quantity',
          label: 'Quantity',
          value: selectedProduct.quantity,
          required: true,
          type: 'number'
        }),
        new TextboxQuestion({
          key: 'customer',
          label: 'Customer',
          value: '',
          required: true,
          type: 'text'
        }),
        new DropdownQuestion({
          key: 'type',
          label: 'Types',
          options: [
            { key: 'Value 1', value: 'value1' },
            { key: 'Value 2', value: 'value2' },
            { key: 'Value 3', value: 'value3' },
          ]
        }),
        new TextboxQuestion({
          key: 'idphonecustomer',
          label: 'ID / Phone Number Customer',
          value: '',
          required: true,
          type: 'text'
        }),
      ], content: selectedProduct } as FormDialogData
    } );
  }
}
