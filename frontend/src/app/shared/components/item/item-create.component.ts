import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogCreateResourceComponent } from '../dialog/dialog.component';
import { QuestionBase } from '../../models';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemCreateComponent implements OnInit {
  @Input() item: any;
  @Input() showActions = true;
  questions: QuestionBase<any>[];

  // itemArray: [string, string][];

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

  openFormDialog(): void {
    // this.itemArray = Object.entries(this.item);

    const formDialogRef = this.dialog.open(DialogCreateResourceComponent, {
      data: { content: this.item }
    });
  }
}
