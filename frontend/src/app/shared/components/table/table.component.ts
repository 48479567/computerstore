import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() dataSource: any;
  data: MatTableDataSource<any>;
  dataRelevant: any[];

  @Input() displayedColumns: string[] = [];
  internalDisplayedColumns: string[] = [];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor() {
  }

  ngOnInit() {
    this.data = new MatTableDataSource(this.dataSource);
    this.data.paginator = this.paginator;
    this.internalDisplayedColumns = ['order', ...this.displayedColumns];
    this.data.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.data.filter = filterValue.trim().toLowerCase();
    if (this.data.paginator) {
      this.data.paginator.firstPage();
    }
  }

}
