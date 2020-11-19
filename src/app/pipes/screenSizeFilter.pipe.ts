import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'screenSizeFilter',
    pure: false
  })
  export class screenSizeFilterPipe implements PipeTransform {
    transform(items: any[], itemScreenSize: any): any {
      if (!itemScreenSize || itemScreenSize.length === 0) return items;
      return items.filter(item => itemScreenSize.includes(item.screenSize));
    }
}