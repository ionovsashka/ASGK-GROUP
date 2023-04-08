import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { MainLayoutComponent } from './main-layout/main-layout.component';
import {AuthGuard} from "../shared/services/auth/auth.guard";

const routes: Routes = [
  {path: '', component: MainLayoutComponent, canActivateChild:[AuthGuard], children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
    ]}
];

@NgModule({
  declarations: [
    MainLayoutComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class MainModule { }
