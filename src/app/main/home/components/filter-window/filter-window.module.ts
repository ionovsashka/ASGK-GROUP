import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FilterWindowComponent} from "./filter-window.component";



@NgModule({
  declarations: [FilterWindowComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FilterWindowComponent
  ]
})
export class FilterWindowModule { }
