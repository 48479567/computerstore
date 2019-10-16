import { Component, OnInit, Input } from '@angular/core';
import { FilterToggle } from '../../models';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Input() filtersSources: FilterToggle[];
  @Input() filtersCharts: FilterToggle[];

  ngOnInit() {
    console.log('filtersSources', this.filtersSources);
    console.log('filtersCharts', this.filtersCharts);

  }

}

