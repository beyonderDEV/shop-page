import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandFilterPipe } from './brandFilter.pipe'
import { CpuFilterPipe } from './cpuFilter.pipe'
import { RamFilterPipe } from './ramFilter.pipe'
import { screenSizeFilterPipe } from './screenSizeFilter.pipe'
import { PaginationPipe } from './pagination.pipe'


@NgModule({
  declarations: [
    BrandFilterPipe, CpuFilterPipe, RamFilterPipe, PaginationPipe, screenSizeFilterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BrandFilterPipe, CpuFilterPipe, RamFilterPipe, PaginationPipe, screenSizeFilterPipe
  ]
})
export class PipesModule { }
