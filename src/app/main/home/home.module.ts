import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home.component";
import {FilterWindowModule} from "./components/filter-window/filter-window.module";
import {HomeFooterModule} from "./components/home-footer/home-footer.module";
import {HomeHeaderModule} from "./components/home-header/home-header.module";
import {HomeTableModule} from "./components/home-table/home-table.module";
import {PushModalModule} from "./components/push-modal/push-modal.module";
import {SearchWindowModule} from "./components/search-window/search-window.module";
import {PushModalDirModule} from "../../shared/modules/push-modal-dir.module";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', component: HomeComponent}
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FilterWindowModule,
    HomeFooterModule,
    HomeHeaderModule,
    HomeTableModule,
    PushModalModule,
    SearchWindowModule,
    PushModalDirModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
