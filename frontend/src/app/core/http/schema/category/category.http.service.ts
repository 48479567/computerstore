import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { CategorySchema } from 'src/app/shared/models';
import { URL } from '../../data.http';
import { CategoryService } from 'src/app/core/services/schema/category.service';
import { LoggerService } from 'src/app/core/logger.service';

@Injectable({providedIn: 'root'})
export class CategoryHttpService {
  constructor(
    private http: HttpClient,
    private categoryService: CategoryService,
    private logger: LoggerService,
  ) { }


  getCategories(): Observable<Array<CategorySchema>> {
    return this.http.get<Array<CategorySchema>>(`${URL}/categories`)
      .pipe(
        tap((categories: CategorySchema[]) => {
          this.logger.log(`Insert ${categories.length} categories.`);
          this.categoryService.categories = categories;
        }),
      );
  }
}

