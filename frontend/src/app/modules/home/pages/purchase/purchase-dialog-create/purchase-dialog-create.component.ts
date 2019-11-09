import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatTableDataSource, MatDialog } from '@angular/material';
import { ProductSchemaForm, PurchaseSchemaForm } from 'src/app/shared/models';
import { ProductService } from 'src/app/core/services/schema/product.service';
import { ProductHttpService } from 'src/app/core/http/schema/product.http.service';
import { ProductDialogDetailComponent } from '../product-dialog-detail/product-dialog-detail.component';

@Component({
  selector: 'app-purchase-dialog-create',
  templateUrl: './purchase-dialog-create.component.html',
  styleUrls: ['./purchase-dialog-create.component.scss']
})

export class PurchaseDialogCreateComponent implements OnInit {
  displayedColumns: string[] = [
    'index', 'product', 'stock', 'price', 'quantity', 'purchase', 'total', 'actions'
  ];

  selectedProducts: any[] = [];
  dataSource: MatTableDataSource<any>;

  indexSelectProducts: number[] = [];

  dateNow = Date.now();
  productsSource: ProductSchemaForm[] = [];


  constructor(
    public dialogRef: MatDialogRef<PurchaseDialogCreateComponent>,
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
    if (this.indexSelectProducts.includes(index)) {
      return;
    }

    const selProduct: ProductSchemaForm = this.productsSource[index];

    this.dataSource.data.push({
      index,
      product: selProduct.name,
      stock: selProduct.quantity,
      price: selProduct.price ? selProduct.price : 0,
      quantity: 0,
      purchase: selProduct.price,
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

  registerPurchase() {
    const purchases: any = {
      userid : '5dc36b934967ed31cc076620'
    };
    purchases.products = this.dataSource.data.map(ds => ({
      productid: ds.actions._id, quantity: ds.quantity, purchaseprice: ds.price * ds.quantity
    }));
    console.log(purchases);
  }
}
