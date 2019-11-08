import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatTableDataSource } from '@angular/material';
import { ProductSchemaForm } from 'src/app/shared/models';
import { ProductService } from 'src/app/core/services/schema/product.service';

@Component({
  selector: 'app-sale-dialog-create',
  templateUrl: './sale-dialog-create.component.html',
  styleUrls: ['./sale-dialog-create.component.scss']
})

export class SaleDialogCreateComponent implements OnInit {
  displayedColumns: string[] = [
    'detail', 'product', 'stock', 'price', 'quantity', 'sale', 'total', 'actions'
  ];

  selectedProducts: any[] = [];
  dataSource: MatTableDataSource<any>;

  indexSelectProducts: number[] = [];

  dateNow = Date.now();
  productsSource: ProductSchemaForm[] = [];


  constructor(
    public dialogRef: MatDialogRef<SaleDialogCreateComponent>,
    private productService: ProductService
  ) {
    this.dataSource = new MatTableDataSource(this.selectedProducts);
  }

  ngOnInit() {
    this.productService.getProducts().subscribe(
      (products: ProductSchemaForm[]) => {
        this.productsSource = products;
      }
    );
  }

  addControl(index: number): void {
    if (this.indexSelectProducts.includes(index) || this.productsSource[index].quantity === 0) {
      return;
    }

    const selProduct: ProductSchemaForm = this.productsSource[index];

    this.dataSource.data.push({
      detail: selProduct,
      product: selProduct.name,
      stock: selProduct.quantity,
      price: selProduct.price ? selProduct.price : 0,
      quantity: 0,
      sale: selProduct.price,
      total: 0,
      actions: index
    });
    this.indexSelectProducts.push(index);
    console.log(this.dataSource.data);
    this.dataSource.filter = '';
  }

  openProductDetail(product: ProductSchemaForm): void {

  }
}
