import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appFilterWindow]'
})
export class FilterWindowDirective {

  constructor(public filterWindowContainer: ViewContainerRef) { }

}
