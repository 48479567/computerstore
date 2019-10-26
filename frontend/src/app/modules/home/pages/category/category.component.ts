import { Component, OnInit } from '@angular/core';
import { CategorySchema, CategorySchemaForm } from 'src/app/shared/models/schema/category/category.schema';
import { CategoryHttpService } from 'src/app/core/http/schema/category/category.http';
import { CategoryService } from 'src/app/core/services/schema/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories: CategorySchema[];

  constructor(
    private categoryHttp: CategoryHttpService,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(): any {
    if (this.categoryService.categories) {
      return this.categories = this.categoryService.categories;
    }

    this.categoryHttp.getCategories().subscribe(
      (categories: CategorySchema[]) => this.categories = categories
    );
  }

}
