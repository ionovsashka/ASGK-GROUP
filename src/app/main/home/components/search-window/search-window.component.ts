import {Component, ComponentFactoryResolver, EventEmitter, HostListener, Output, ViewChild} from '@angular/core';
import {FilterWindowDirective} from "../../../../shared/directives/filter-window.directive";
import {Router} from "@angular/router";
import {FilterWindowComponent} from "../filter-window/filter-window.component";
import {ActiveField, ParamsRequest} from "../../../../shared/interfaces/main/home/home.interfaces";
import {Store} from "@ngrx/store";
import {clearToken} from "../../../../reducers/token";

@Component({
  selector: 'app-search-window',
  templateUrl: './search-window.component.html',
  styleUrls: ['./search-window.component.scss']
})
export class SearchWindowComponent {
  search!: string

  @ViewChild(FilterWindowDirective) filterDir!: FilterWindowDirective

  @Output() setSearch: EventEmitter<ParamsRequest> = new EventEmitter<ParamsRequest>()

  @HostListener('window:beforeunload')
  setFieldsAndParamsInLocal(){
    if(this.fields.length !== 0){
      this.convertingAnArrayOfFields()
    }
    this.setSearchString()
    localStorage.setItem('params', JSON.stringify(this.params))
  }
  params!: ParamsRequest
  fields!: Array<ActiveField>

  constructor(private resolver: ComponentFactoryResolver, private router: Router, private store: Store) {
  }

  ngOnInit(): void {
    this.search = ''
    this.fields = []
    if(localStorage.getItem('fields')){
      const arrayForLocal =localStorage.getItem('fields')!.split('@=+%^^')
      for(let field of arrayForLocal){
        this.fields.push(JSON.parse(field))
      }
    }
    localStorage.removeItem('fields')
  }

  viewFilter() {
    const filterWindowFactory = this.resolver.resolveComponentFactory(FilterWindowComponent)
    const filterWindowComponent = this.filterDir.filterWindowContainer.createComponent(filterWindowFactory)
    filterWindowComponent.instance.activeFields = this.fields
    filterWindowComponent.instance.close.subscribe(() => {
      this.hideFilter()
    })
    filterWindowComponent.instance.setField.subscribe((response) => {
      if(this.fields.find(elem => elem.id === response.id)){
        const index = this.fields.findIndex(elem => elem.id === response.id)
        this.fields.splice(index, 1)
      } else{
        this.fields.push(response)
      }
    })
  }

  convertingAnArrayOfFields(){
    const arrayForLocal = []
    for(let field of this.fields){
      arrayForLocal.push(JSON.stringify(field))
    }
    localStorage.setItem('fields', arrayForLocal.join('@=+%^^'))
  }

  hideFilter(){
    this.filterDir.filterWindowContainer.clear()
  }

  ngOnDestroy() {
    if(this.fields.length !== 0){
      this.convertingAnArrayOfFields()
    }
  }

  setSearchString(){
    let strSearch:Array<string> = []
    for(let field of this.fields){
      const param = `${field.id}` + '=' + `${field.value.trim()}`
      strSearch.push(param)
    }
    this.params.search = strSearch.join(',')
  }

  submit() {
    this.setSearchString()
    this.setSearch.emit(this.params)
  }

  resetFields() {
    this.fields = []
  }

  logout() {
    localStorage.clear()
    this.store.dispatch(clearToken())
    return this.router.navigate(['auth/login'])
  }
}
