import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormDialogData, SaleSchemaForm, SelectOption, ProductSchema, ProductSchemaForm } from 'src/app/shared/models';
import { FormGroup } from '@angular/forms';
import { ObjectRefService } from 'src/app/core/services/schema/object-ref.service';
import { ProductService } from 'src/app/core/services/schema/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sale-dialog-create',
  templateUrl: './sale-dialog-create.component.html'
})

export class SaleDialogCreateComponent implements OnInit {
  form: FormGroup;
  dateNow = Date.now();
  createSale: SaleSchemaForm = new SaleSchemaForm();
  productsSource$: Observable<any[]> = this.productService.getProducts();


  constructor(
    public dialogRef: MatDialogRef<SaleDialogCreateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FormDialogData,
    private objectRef: ObjectRefService,
    private productService: ProductService
  ) { }

  ngOnInit() { }

  addControl(productValue: string): void {
    console.log(productValue);
  }
}
