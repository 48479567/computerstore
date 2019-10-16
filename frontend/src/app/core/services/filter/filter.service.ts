import { Injectable } from '@angular/core';
import { FilterToggle } from 'src/app/shared/models';
import {
  filtersSources,
  filtersCharts
} from '../../../../assets/data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(

  ) { }

  getFiltersSources(): Observable<Array<FilterToggle>> {
    return of(filtersSources);
  }
  getFiltersCharts(): Observable<Array<FilterToggle>> {
    return of(filtersCharts);
  }
}

