import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CategorySchema } from 'src/app/shared/models';
import { categories } from '../../mocks/data';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  getCategories(): Observable<Array<CategorySchema>> {
    return of(categories);
  }

  constructor(

  ) {
  }
}
