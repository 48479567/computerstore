import { Component, OnInit } from '@angular/core';
import { SaleSchemaForm } from 'src/app/shared/models';
import { SaleDialogCreateComponent } from './sale-dialog-create/sale-dialog-create.component';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})

export class SaleComponent implements OnInit {
  createSale: SaleSchemaForm = new SaleSchemaForm();
  componentDialog = SaleDialogCreateComponent;

  constructor() { }

  ngOnInit() { }

}
