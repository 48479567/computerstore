import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SetSchema } from 'src/app/shared/models';
import { sets } from '../../mocks/data';

@Injectable({
  providedIn: 'root'
})
export class SetService {
  getSets(): Observable<Array<SetSchema>> {
    return of(sets);
  }

  constructor(

  ) {
  }
}
