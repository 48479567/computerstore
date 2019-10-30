import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { CategorySchemaForm } from 'src/app/shared/models';
import { URL } from '../../data.http';
import { CategoryService } from 'src/app/core/services/schema/category.service';
import { LoggerService } from 'src/app/core/logger.service';
import { ObjectRefService } from 'src/app/core/services/schema/object-ref.service';

@Injectable({providedIn: 'root'})
export class ItemHttpService {
  constructor(
    private http: HttpClient,
    private categoryService: CategoryService,
    private logger: LoggerService,
    private objRefService: ObjectRefService
  ) { }


  getCategories(): Observable<Array<CategorySchemaForm>> {
    return this.http.get<Array<CategorySchemaForm>>(`${URL}/category`)
      .pipe(
        tap((categories: CategorySchemaForm[]) => {
          this.logger.log(`Insert ${categories.length} categories.`);
          this.objRefService.getObjectRef(categories, 'categoryid');
          this.categoryService.categories = categories;
        }),
      );
  }
}

