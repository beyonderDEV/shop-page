import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'cpuFilter',
    pure: false
  })
  export class CpuFilterPipe implements PipeTransform {
    transform(items: any[], itemCPUs: any): any {
      if (!itemCPUs || itemCPUs.length === 0) return items;
      return items.filter(item => itemCPUs.includes(item.cpu));
    }
  }