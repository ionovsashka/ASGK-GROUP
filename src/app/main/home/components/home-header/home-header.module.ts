import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeHeaderComponent} from "./home-header.component";
import {SearchWindowDirModule} from "../../../../shared/modules/search-window-dir.module";



@NgModule({
  declarations: [HomeHeaderComponent],
  imports: [
    CommonModule,
    SearchWindowDirModule
  ],
  exports:[
    HomeHeaderComponent
  ]
})
export class HomeHeaderModule { }
