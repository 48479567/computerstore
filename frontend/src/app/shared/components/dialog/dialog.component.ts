import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DialogData, QuestionBase } from '../../models';
import { FormDialogData } from '../../models/dialog/dialog.model';
import { QuestionService } from 'src/app/core/services/form/question.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})

export class DialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit() { }

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
