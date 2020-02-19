import { Component, OnInit } from '@angular/core';
import { CategorySchemaForm, formatQuestionCategory } from '../../../../shared/models';
import { CategoryHttpService } from '../../../../core/http/schema/category.http.service';
import { CategoryService } from '../../../../core/services/schema/category.service';
import { ObjectRefService } from '../../../../core/services/schema/object-ref.service';

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
    this.objectRefService.selectSchema.http = this.categoryHttp;
    this.objectRefService.selectSchema.service = this.categoryService;

  }

  getCategories(): any {
    if (this.categoryService.items) {
      return this.categories = this.categoryService.items;
    }

    this.categoryHttp.getItems().subscribe(
      (categories: CategorySchemaForm[]) => {
        this.categories = categories;
      });
  }

}
