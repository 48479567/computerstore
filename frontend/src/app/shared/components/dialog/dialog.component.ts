import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormDialogData } from '../../models/dialog/dialog.model';
import { QuestionControlService } from 'src/app/core/services/form/question-control.service';
import { FormGroup } from '@angular/forms';
import { ObjectRefService } from 'src/app/core/services/schema/object-ref.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog-create-resource.component.html',
  styleUrls: ['./dialog.component.scss']
})

export class DialogCreateResourceComponent implements OnInit {
  questions: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FormDialogData,
    private questionControlService: QuestionControlService,
    private objectRef: ObjectRefService
  ) { }

  ngOnInit() {
    this.getQuestions();
    console.log(this.data);
  }

  getQuestions(): void {
    this.questions = this.questionControlService.toFormGroup(this.data.content.getQuestions(this.objectRef.objectRef));
    console.log(this.questions);
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
  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FormDialogData,
  ) { }

  ngOnInit() {
  }


  onClose(): void {
    this.dialogRef.close();
  }

  update(value: any): void {
    console.log(value);
  }

}
