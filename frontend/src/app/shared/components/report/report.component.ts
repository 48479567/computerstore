import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() barChartLabels: string[] = [];
  @Input() type: string;

  public barChartOptions = {
    scaleShowVerticalLines: true,
    responsive: true,

  };


  public barChartLegend = true;

  constructor() { }

  ngOnInit() {
    this.type = 'line';
    console.log('data in OnInit', this.data);
  }

}
