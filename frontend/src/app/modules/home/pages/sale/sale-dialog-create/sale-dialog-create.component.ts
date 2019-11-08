import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatTableDataSource, MatDialog } from '@angular/material';
import { ProductSchemaForm } from 'src/app/shared/models';
import { ProductService } from 'src/app/core/services/schema/product.service';
import { ProductHttpService } from 'src/app/core/http/schema/product/product.http.service';
import { ProductDialogDetailComponent } from '../product-dialog-detail/product-dialog-detail.component';

@Component({
  selector: 'app-sale-dialog-create',
  templateUrl: './sale-dialog-create.component.html',
  styleUrls: ['./sale-dialog-create.component.scss']
})

export class SaleDialogCreateComponent implements OnInit {
  displayedColumns: string[] = [
    'index', 'product', 'stock', 'price', 'quantity', 'sale', 'total', 'actions'
  ];

  selectedProducts: any[] = [];
  dataSource: MatTableDataSource<any>;

  indexSelectProducts: number[] = [];

  dateNow = Date.now();
  productsSource: ProductSchemaForm[] = [];


  constructor(
    public dialogRef: MatDialogRef<SaleDialogCreateComponent>,
    private productService: ProductService,
    private productHttp: ProductHttpService,
    public dialog: MatDialog,
  ) {
    this.dataSource = new MatTableDataSource(this.selectedProducts);
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    if (this.productService.items) {
      this.productService.getProducts().subscribe(
        (products: ProductSchemaForm[]) => {
          this.productsSource = products;
        }
      );
    } else {
      this.productHttp.getItems().subscribe(
        (products: ProductSchemaForm[]) => {
          this.productsSource = products;
        }
      );

    }
  }

  addControl(index: number): void {
    if (this.indexSelectProducts.includes(index) || this.productsSource[index].quantity === 0) {
      return;
    }

    const selProduct: ProductSchemaForm = this.productsSource[index];

    this.dataSource.data.push({
      index,
      product: selProduct.name,
      stock: selProduct.quantity,
      price: selProduct.price ? selProduct.price : 0,
      quantity: 0,
      sale: selProduct.price,
      total: 0,
      actions: selProduct
    });
    this.indexSelectProducts.push(index);
    console.log(this.dataSource.data);
    this.dataSource.filter = '';
  }

  openProductDetail(product: ProductSchemaForm): void {
    const formDialogRef = this.dialog.open(ProductDialogDetailComponent, {
      data: product
    });
  }

  deleteProduct(index: number, elementIndex: number): void {
    this.indexSelectProducts.splice(this.indexSelectProducts.indexOf(elementIndex), 1);
    this.dataSource.data.splice(index, 1);
    this.dataSource.filter = '';
    console.log('index', index);
    console.log('elementIndex', elementIndex);
  }
}
