import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeName'
})

export class ChangeNamePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return value.split('\\').joing('/');
  }
}
