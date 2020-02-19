import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { map, tap, last, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UploadService {


  upload(file: File) {
    if (!file) { return; }

    const req = new HttpRequest('POST', 'src/assets/uploads', file, {
      reportProgress: true
    })

    return this.http.request(req).pipe(
      map((event: HttpEvent<any>) => this.getEventMessage(event, file)),
      tap((message: string) => this.showProgress(message)),
      last(),
      catchError(this.handleError(file))
    )
  }


  private getEventMessage(event: HttpEvent<any>, file: File) {
    switch (event.type) {
      case HttpEventType.Sent:
        return `Upload file "${file.name}" of size ${file.size}`;
      case HttpEventType.UploadProgress:
        const percentDone = Math.round(100 * event.loaded / event.total);
        return `File "${file.name}" is ${percentDone}% uploaded.`;
      case HttpEventType.Response:
        return `File "${file.name}" was completely uploaded!`;
      default:
        return `File "${file.name}" surprising uploaded event: ${event.type}.`
    }
  }

  private handleError(file: File) {
    const userMessage = `${file.name} uploaded failed.`;

    return (error: HttpErrorResponse) => {
      const message = (error.error instanceof Error) ?
        error.error.message :
        `Server returned code ${error.status} with body "${error.error}"`;

      //loggerservice
      return of(userMessage);
    }
  }

  private showProgress(message: string) {
    //loggerservice
  }


  constructor(
    private http: HttpClient
  ) { }

}
