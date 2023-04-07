import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from "@angular/forms";
import {HeaderTableComponent} from "../components/header-table/header-table.component";
import { SearchWindowComponent } from './search-window/search-window.component';
import {SearchWindowDirective} from "../shared/directives/search-window.directive";
import {FilterWindowDirective} from "../shared/directives/filter-window.directive";
import { FilterWindowComponent } from './filter-window/filter-window.component';
import {FooterTableComponent} from "../components/footer-table/footer-table.component";
import {ModalWindowDirective} from "../shared/directives/modal-window.directive";
import {AuthGuard} from "../shared/services/auth/auth.guard";
import {TableComponent} from "../components/table/table.component";
import { HomeTableComponent } from './home/components/home-table/home-table.component';
import { HomeHeaderComponent } from './home/components/home-header/home-header.component';
import { HomeFooterComponent } from './home/components/home-footer/home-footer.component';
import { PushModalComponent } from './home/components/push-modal/push-modal.component';

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
    HeaderTableComponent,
    SearchWindowComponent,
    SearchWindowDirective,
    FilterWindowDirective,
    FilterWindowComponent,
    FooterTableComponent,
    ModalWindowDirective,
    TableComponent,
    HomeTableComponent,
    HomeHeaderComponent,
    HomeFooterComponent,
    PushModalComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule
  ]
})
export class MainModule { }
