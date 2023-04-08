import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchWindowComponent} from "./search-window.component";
import {FormModule} from "../../../../shared/modules/form.module";
import {FilterWindowModule} from "../filter-window/filter-window.module";
import {FilterDirModule} from "../../../../shared/modules/filter-dir.module";



@NgModule({
  declarations: [SearchWindowComponent],
  imports: [
    CommonModule,
    FormModule,
    FilterDirModule
  ],
  exports: [
    SearchWindowComponent
  ]
})
export class SearchWindowModule { }
