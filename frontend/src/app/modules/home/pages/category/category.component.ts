import { Component, OnInit } from '@angular/core';
import { CategorySchemaForm, formatQuestionCategory } from 'src/app/shared/models/schema/category/category.schema';
import { CategoryHttpService } from 'src/app/core/http/schema/category/category.http.service';
import { CategoryService } from 'src/app/core/services/schema/category.service';
import { ObjectRefService } from 'src/app/core/services/schema/object-ref.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories: CategorySchemaForm[] = [];
  categoryCreate: CategorySchemaForm = new CategorySchemaForm();

  constructor(
    private categoryHttp: CategoryHttpService,
    private categoryService: CategoryService,
    private objectRefService: ObjectRefService
  ) { }

  ngOnInit() {
    this.getCategories();
    this.objectRefService.formatQuestion = formatQuestionCategory;

  }

  getCategories(): any {
    if (this.categoryService.categories) {
      return this.categories = this.categoryService.categories;
    }

    this.categoryHttp.getCategories().subscribe(
      (categories: CategorySchemaForm[]) => this.categories = categories
    );
  }

}
