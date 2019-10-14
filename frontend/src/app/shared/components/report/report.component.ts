import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  @Input() data: any[];

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };

  public barChartLabels = [
    '2015', '2016', '2017', '2018', '2019'
  ];

  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [];

  constructor() { }

  ngOnInit() {
    this.barChartData = [
      { data: this.data.map(d => d.quantity) , label: 'Stock' },
      { data: this.data.map(d => d.sales), label: 'Sale' }
    ];
  }

}
