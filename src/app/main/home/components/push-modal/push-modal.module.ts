import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PushModalComponent} from "./push-modal.component";
import {FormModule} from "../../../../shared/modules/form.module";



@NgModule({
  declarations: [PushModalComponent],
  imports: [
    CommonModule,
    FormModule
  ],
  exports: [
    PushModalComponent
  ]
})
export class PushModalModule { }
