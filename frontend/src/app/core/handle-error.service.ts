import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LoggerService } from './logger.service';

@Injectable({ providedIn: 'root' })

export class HandleErrorService {
  handleError<T>(operation = 'operation', result?: T, logger?: LoggerService) {
    return (error: any): Observable<T> => {
      console.error(error);
      if (logger) {
        logger.log(`${operation} failed: ${error.message}`, 'bg-danger');
      }
      return of(result as T);
    };
  }
}
