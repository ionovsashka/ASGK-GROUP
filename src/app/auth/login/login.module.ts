import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login.component";
import {FormModule} from "../../shared/modules/form.module";
import {InputModule} from "../../components/input/input.module";

const routes: Routes = [
  {path: '', component: LoginComponent}
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormModule,
    InputModule,
    RouterModule.forChild(routes)
  ]
})
export class LoginModule { }
