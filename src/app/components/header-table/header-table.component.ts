import {
  Component,
  ComponentFactoryResolver,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {SearchWindowComponent} from "../../main/search-window/search-window.component";
import {SearchWindowDirective} from "../../shared/directives/search-window.directive";
import {ParamsRequest} from "../../main/home/home.component";

@Component({
  selector: 'app-header-table',
  templateUrl: './header-table.component.html',
  styleUrls: ['./header-table.component.scss']
})
export class HeaderTableComponent implements OnInit{

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
