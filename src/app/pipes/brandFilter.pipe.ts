import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'brandFilter',
    pure: false
  })
  export class BrandFilterPipe implements PipeTransform {
    transform(items: any[], itemBrands: any): any {
      if (!itemBrands || itemBrands.length === 0) return items;
      return items.filter(item => itemBrands.includes(item.manufacturer));
    }
  }