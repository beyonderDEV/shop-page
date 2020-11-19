import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'ramFilter',
    pure: false
  })
  export class RamFilterPipe implements PipeTransform {
    transform(items: any[], itemRAM: any): any {
      if (!itemRAM || itemRAM.length === 0) return items;
      return items.filter(item => itemRAM.includes(item.ram));
    }
}