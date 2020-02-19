import { Injectable } from '@angular/core';
import { ObjectRef } from '../../../shared/models/schema/objectref/objectref.schema';

@Injectable({ providedIn: 'root' })
export class ObjectRefService {
  objectRef: ObjectRef = {
    categoryid: [],
    productid: [],
    userid: []
  };
  formatQuestion: any;
  selectSchema: any = {
    http: null,
    service: null,
  };
  items: any;

  getObjectRef(resource: any[], selector: string) {
    this.objectRef[selector] = resource.map(r => ({ key: r.name, value: r._id }));
  }

}
