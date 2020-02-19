import { Component, OnInit, ViewChild } from '@angular/core';
import { PurchaseDialogCreateComponent } from './purchase-dialog-create/purchase-dialog-create.component';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { PurchaseHttpService } from '../../../../core/http/schema/purchase.http.service';
import { PurchaseService } from '../../../../core/services/schema/purchase.service';
import { PurchaseSchemaForm } from '../../../../shared/models';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class PurchaseComponent implements OnInit {
  componentDialog = PurchaseDialogCreateComponent;

  columnsToDisplay = ['userid', 'createdat', 'products'];
  expandedElement: null;
  data: MatTableDataSource<any>;
  purchases: PurchaseSchemaForm[];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private purchaseHttp: PurchaseHttpService,
    private purchaseService: PurchaseService
  ) { }

  ngOnInit() {
    this.getPurchases();
  }

  getPurchases(): void {
    if (this.purchaseService.items) {
      this.purchaseService.getPurchases().subscribe(
        (purchases: PurchaseSchemaForm[]) => {
          this.purchases = purchases;
          this.data = new MatTableDataSource(this.purchases);
          this.data.paginator = this.paginator;
          this.data.sort = this.sort;
        }
    );
    } else {
      this.purchaseHttp.getItems().subscribe(
        (purchases: PurchaseSchemaForm[]) => {
          this.purchases = purchases;
          this.data = new MatTableDataSource(this.purchases);
          this.data.paginator = this.paginator;
          this.data.sort = this.sort;
        }
      );
    }
  }

  isObject(value: any): boolean {
    return typeof value === 'object' ? true : false;
  }

}
