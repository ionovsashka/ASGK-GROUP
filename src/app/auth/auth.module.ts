import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { LoginComponent } from './login/login.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import {InputComponent} from "../components/input/input.component";
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {path: '', component: AuthLayoutComponent, children: [
      {path: '', redirectTo: '/auth/login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent},
  ]}
];

@NgModule({
  declarations: [
    LoginComponent,
    AuthLayoutComponent,
    InputComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class AuthModule { }
