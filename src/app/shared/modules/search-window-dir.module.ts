import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchWindowDirective} from "../directives/search-window.directive";



@NgModule({
  declarations: [SearchWindowDirective],
  imports: [
    CommonModule
  ],
  exports: [
    SearchWindowDirective
  ]
})
export class SearchWindowDirModule { }
