import { Component, OnInit, ViewChild } from '@angular/core';
import { SaleDialogCreateComponent } from './sale-dialog-create/sale-dialog-create.component';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { SaleHttpService } from 'src/app/core/http/schema/sale.http.service';
import { SaleService } from 'src/app/core/services/schema/sale.service';
import { SaleSchemaForm } from 'src/app/shared/models';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class SaleComponent implements OnInit {
  componentDialog = SaleDialogCreateComponent;

  columnsToDisplay = ['userid', 'createdat', 'products'];
  expandedElement: null;
  data: MatTableDataSource<any>;
  sales: SaleSchemaForm[];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private saleHttp: SaleHttpService,
    private saleService: SaleService
  ) { }

  ngOnInit() {
    this.getSales();
  }

  getSales(): void {
    if (this.saleService.items) {
      this.saleService.getSales().subscribe(
        (sales: SaleSchemaForm[]) => {
          this.sales = sales;
          this.data = new MatTableDataSource(this.sales);
          this.data.paginator = this.paginator;
          this.data.sort = this.sort;
        }
    );
    } else {
      this.saleHttp.getItems().subscribe(
        (sales: SaleSchemaForm[]) => {
          this.sales = sales;
          this.data = new MatTableDataSource(this.sales);
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
