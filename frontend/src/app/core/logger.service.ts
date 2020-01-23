import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({providedIn: 'root'})
export class LoggerService {

  constructor(
    private snackbar: MatSnackBar
  ) { }

  log(msg: string, pclass?: string): void {
    this.snackbar.open(msg, '✔️', {
      duration: 5000,
      panelClass: [pclass ? pclass : 'bg-dark']
    });
  }
}

