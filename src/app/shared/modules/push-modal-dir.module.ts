import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ModalWindowDirective} from "../directives/modal-window.directive";



@NgModule({
  declarations: [ModalWindowDirective],
  imports: [
    CommonModule
  ],
  exports: [
    ModalWindowDirective
  ]
})
export class PushModalDirModule { }
