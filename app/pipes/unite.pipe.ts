import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unite'
})
export class UnitePipe implements PipeTransform {

  transform(value: any, unite:any): any {
    return value +" "+ unite;
    console.log(unite)
  }

}
