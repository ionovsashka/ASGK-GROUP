import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeTableComponent} from "./home-table.component";
import {FormModule} from "../../../../shared/modules/form.module";



@NgModule({
  declarations: [
    HomeTableComponent
  ],
  imports: [
    CommonModule,
    FormModule
  ],
  exports: [
    HomeTableComponent
  ]

})
export class HomeTableModule { }
