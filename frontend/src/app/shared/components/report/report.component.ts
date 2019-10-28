import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  @Input() data: any[];
  @Input() type: string;

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,

  };

  public barChartLabels = [
    '2015', '2016', '2017', '2018', '2019'
  ];

  public barChartLegend = true;

  constructor() { }

  ngOnInit() {
    this.type = 'bar';
  }

}
