import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fecha'
})
export class FechaPipe implements PipeTransform {

  transform(value: Date): string {
    let dat = new Date(value).toLocaleString();
    return dat;
  }

}
