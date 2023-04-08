import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FilterWindowDirective} from "../directives/filter-window.directive";



@NgModule({
  declarations: [FilterWindowDirective],
  imports: [
    CommonModule
  ],
  exports: [
    FilterWindowDirective
  ]
})
export class FilterDirModule { }
