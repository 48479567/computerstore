import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormDialogData } from '../../models/dialog/dialog.model';
import { QuestionBase } from '../../models';
import { ObjectRefService } from 'src/app/core/services/schema/object-ref.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog-create-resource.component.html',
  styleUrls: ['./dialog.component.scss']
})

export class DialogCreateResourceComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FormDialogData,
  ) { }
  ngOnInit() {
    this.getQuestions();
  }
  getQuestions(): void {
  }
  create(value: any): void {
    console.log(value);
  }
}

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class FormDialogComponent implements OnInit {
  questions: QuestionBase<any>[];

  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FormDialogData,
    private ors: ObjectRefService
  ) { }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions() {
    this.questions = this.ors.formatQuestion(this.data.content, this.ors.objectRef);
  }

  onClose(): void {
    this.dialogRef.close();
  }

  update(value: any): void {
    console.log(value);
  }

}
