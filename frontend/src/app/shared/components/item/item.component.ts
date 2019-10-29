import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormDialogComponent } from '../dialog/dialog.component';
import { QuestionService } from 'src/app/core/services/form/question.service';
import { QuestionBase } from '../../models';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item: any;
  @Input() showActions = true;

  questions: QuestionBase<any>[];

  // itemArray: [string, string][];

  constructor(
    public dialog: MatDialog,
    private questionService: QuestionService
  ) { }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions(): void {
    this.questionService.getSchemaQuestions(this.item)
      .subscribe(
        (questions: QuestionBase<any>[]) => this.questions = questions);
  }

  openFormDialog(): void {
    // this.itemArray = Object.entries(this.item);

    const formDialogRef = this.dialog.open(FormDialogComponent, {
      data: { content: this.item, questions: this.questions}
    });
  }
}
