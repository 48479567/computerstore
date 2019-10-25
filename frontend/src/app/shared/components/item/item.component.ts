import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormDialogComponent } from '../dialog/dialog.component';
import { TextboxQuestion, DropdownQuestion, CategorySchemaForm } from '../../models';
import { FormDialogData } from '../../models/dialog/dialog.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item: any;
  other: CategorySchemaForm[] = [ new CategorySchemaForm('1'), new CategorySchemaForm('1')];

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    console.log('item: ', typeof this.item);
    console.log('other: ', typeof this.other);
    console.log(this.other);
    console.log(Object.entries(this.item));
  }

  openFormDialog(item: any): void {
    const questions = [];

    const formDialogRef = this.dialog.open(FormDialogComponent, {
      data: { title: 'Product Dialog', questions: [
        new TextboxQuestion({
          key: 'productname',
          label: 'Product Name',
          value: item.name,
          required: true,
          type: 'text',
        }),
        new TextboxQuestion({
          key: 'idproduct',
          label: 'ID Product',
          value: '',
          required: true,
          type: 'text'
        }),
        new TextboxQuestion({
          key: 'quantity',
          label: 'Quantity',
          value: item.quantity,
          required: true,
          type: 'number'
        }),
        new TextboxQuestion({
          key: 'customer',
          label: 'Customer',
          value: '',
          required: true,
          type: 'text'
        }),
        new DropdownQuestion({
          key: 'type',
          label: 'Types',
          options: [
            { key: 'Value 1', value: 'value1' },
            { key: 'Value 2', value: 'value2' },
            { key: 'Value 3', value: 'value3' },
          ]
        }),
        new TextboxQuestion({
          key: 'idphonecustomer',
          label: 'ID / Phone Number Customer',
          value: '',
          required: true,
          type: 'text'
        }),
      ], content: item } as FormDialogData
    } );
  }
}
