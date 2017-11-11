import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'workingTime'})
export class WorkingTimePipe implements PipeTransform {
  transform(minutes: number): string {
    return (('0' + (Math.floor(minutes / 60)).toString()).slice(-2) + ':' + (('0' + (minutes % 60)).toString().slice(-2)));
  }
}
