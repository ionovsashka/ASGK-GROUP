import {Component, ComponentFactoryResolver, EventEmitter, HostListener, Input, Output, ViewChild} from '@angular/core';
import {ParamsRequest} from "../../home.component";
import {SearchWindowDirective} from "../../../../shared/directives/search-window.directive";
import {SearchWindowComponent} from "../../../search-window/search-window.component";

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent {
  @Input() params!: ParamsRequest
  @Output() onSearch: EventEmitter<ParamsRequest> = new EventEmitter<ParamsRequest>()

  @ViewChild(SearchWindowDirective) searchDir!: SearchWindowDirective

  @HostListener('window:click', ['$event'])
  closeSearchWhenClickWindow(event: MouseEvent){
    const element = event.target as HTMLElement
    if(element.closest('.search-window')){
      return
    }
    this.hideSearchWindow()
  }

  viewSearch!: boolean

  constructor(private resolver: ComponentFactoryResolver) {
  }

  ngOnInit(): void {
    this.viewSearch = false
  }



  viewSearchWindow(event: MouseEvent) {
    event.stopPropagation()
    if(this.viewSearch){
      this.hideSearchWindow()
    } else{
      const searchWindowFactory = this.resolver.resolveComponentFactory(SearchWindowComponent)
      const searchWindowComponent = this.searchDir.searchWindowContainer.createComponent(searchWindowFactory)
      searchWindowComponent.instance.params = this.params
      searchWindowComponent.instance.setSearch.subscribe((params) => {
        this.onSearch.emit(params)
        this.hideSearchWindow()
      })
      this.viewSearch = true
    }
  }

  hideSearchWindow(){
    this.searchDir.searchWindowContainer.clear()
    this.viewSearch = false
  }

  onLogout() {

  }
}
