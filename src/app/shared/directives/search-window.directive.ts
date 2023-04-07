import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appSearchWindow]'
})
export class SearchWindowDirective {

  constructor(public searchWindowContainer: ViewContainerRef) { }

}
