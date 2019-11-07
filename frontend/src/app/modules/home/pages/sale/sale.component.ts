import { Component, OnInit } from '@angular/core';
import { SaleSchemaForm } from 'src/app/shared/models';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})

export class SaleComponent implements OnInit {
  createSale: SaleSchemaForm = new SaleSchemaForm();
  componentDialog = '';

  constructor() { }

  ngOnInit() { }

}
