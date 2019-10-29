import { Injectable } from '@angular/core';
import { SelectOption } from 'src/app/shared/models/form/question-base';

@Injectable({ providedIn: 'root' })
export class ObjectRefService {
  objectRef: SelectOption[];
}
