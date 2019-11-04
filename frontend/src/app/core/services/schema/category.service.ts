import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CategorySchemaForm } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  items: CategorySchemaForm[];

  getCategories(): Observable<Array<CategorySchemaForm>> {
    return of(this.items);
  }

  constructor(

  ) {
  }
}
