import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ErrorComponent} from "./error.component";

const routes: Routes = [
  {path: '', component: ErrorComponent}
];

@NgModule({
  declarations: [ErrorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ErrorComponent
  ]
})
export class ErrorModule { }
