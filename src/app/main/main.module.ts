import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from "@angular/forms";
import {SearchWindowDirective} from "../shared/directives/search-window.directive";
import {FilterWindowDirective} from "../shared/directives/filter-window.directive";
import {ModalWindowDirective} from "../shared/directives/modal-window.directive";
import {AuthGuard} from "../shared/services/auth/auth.guard";
import { HomeTableComponent } from './home/components/home-table/home-table.component';
import { HomeHeaderComponent } from './home/components/home-header/home-header.component';
import { HomeFooterComponent } from './home/components/home-footer/home-footer.component';
import { PushModalComponent } from './home/components/push-modal/push-modal.component';
import {FormModule} from "../shared/modules/form.module";
import {SearchWindowComponent} from "./home/components/search-window/search-window.component";
import {FilterWindowComponent} from "./home/components/filter-window/filter-window.component";

const routes: Routes = [
  {path: '', component: MainLayoutComponent, canActivateChild:[AuthGuard], children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: HomeComponent},
    ]}
];

@NgModule({
  declarations: [
    MainLayoutComponent,
    HomeComponent,
    SearchWindowDirective,
    FilterWindowDirective,
    ModalWindowDirective,
    HomeTableComponent,
    HomeHeaderComponent,
    HomeFooterComponent,
    PushModalComponent,
    SearchWindowComponent,
    FilterWindowComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormModule
  ]
})
export class MainModule { }
