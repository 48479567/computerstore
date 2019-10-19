import { Component, OnInit, Input } from '@angular/core';
import { FilterToggle } from '../../models';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Input() filtersSources: FilterToggle[] = [];
  @Input() filtersCharts: FilterToggle[] = [];
  value: string;

  ngOnInit() {

  }

  log(value: string) {
    this.value = value;
  }

}

