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
import {FormModule} from "../shared/modules/form.module";
import {HomeModule} from "./home/home.module";

const routes: Routes = [
  {path: '', component: MainLayoutComponent, canActivateChild:[AuthGuard], children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
    ]}
];

@NgModule({
  declarations: [
    MainLayoutComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormModule,
    HomeModule
  ]
})
export class MainModule { }
