import { Component, OnInit, Inject } from '@angular/core';
import { ProductSchemaForm, FormDialogData } from 'src/app/shared/models';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-product-dialog-detail',
  templateUrl: './product-dialog-detail.component.html',
  styles: [`
    mat-dialog-content {
      display: flex;
      justify-content: center;
      flex-flow: row wrap;
    }
  `]
})

export class ProductDialogDetailComponent implements OnInit {
  product: any;

  constructor(
    public dialogRef: MatDialogRef<ProductDialogDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

  ) { }

  ngOnInit() {
    this.product = this.data;
  }
}
