import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CategorySchema } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: CategorySchema[];

  getCategories(): Observable<Array<CategorySchema>> {
    return of(this.categories);
  }

  constructor(

  ) {
  }
}
