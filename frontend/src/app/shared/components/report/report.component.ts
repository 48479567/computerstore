import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() barChartLabels: string[] = [];

  @Input() set type(externalType: string) {
    if (externalType === 'bubble' || externalType === 'scatter') {
      this.data[0].data = this.data[0].extraData;
    } else {
      this.data[0].data = this.data[0].mainData;
    }
    this.internalType = externalType;
  }

  get type(): string {
    return this.internalType;
  }

  internalType: string;

  public barChartOptions: ChartOptions = {
    showLines: true,
    responsive: true,
  };

  public barChartLegend = true;

  constructor() { }

  ngOnInit() {
    this.type = 'line';
  }

}
