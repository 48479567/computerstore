import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatTableDataSource, MatDialog } from '@angular/material';
import { ProductSchemaForm, SaleSchemaForm } from '../../../../../shared/models';
import { ProductService } from '../../../../../core/services/schema/product.service';
import { ProductHttpService } from '../../../../../core/http/schema/product.http.service';
import { ProductDialogDetailComponent } from '../product-dialog-detail/product-dialog-detail.component';
import { SaleHttpService } from '../../../../../core/http/schema/sale.http.service';

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
    private saleHttp: SaleHttpService,
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
  }

  registerSale() {
    const sales: SaleSchemaForm = {
      userid : '5dc36b934967ed31cc076620'
    };
    sales.products = this.dataSource.data.map(ds => ({
      productindex: ds.index,
      productid: ds.actions._id,
      quantity: ds.quantity,
      saleprice: ds.price * ds.quantity,
      productname: ds.actions.name
    }));
    this.saleHttp.createItem(sales).subscribe(
      () => {
        this.dialogRef.close();
        this.dataSource.filter = '';
      }
    );
  }
}
