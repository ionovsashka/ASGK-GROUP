import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appModalWindow]'
})
export class ModalWindowDirective {

  constructor(public modalWindowContainer: ViewContainerRef) { }

}
