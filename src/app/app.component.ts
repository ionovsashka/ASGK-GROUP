import {AfterViewChecked, ChangeDetectorRef, Component, HostListener, OnInit} from '@angular/core';
import {first, Observable} from "rxjs";
import {LoaderService} from "./shared/services/loader/loader.service";
import {Store} from "@ngrx/store";
import {setToken, tokenSelector} from "./reducers/token";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewChecked{

  @HostListener('window:beforeunload')
  onSaveToken(){
    this.token$.pipe(first()).subscribe((response) => {
      localStorage.setItem('token', response)
    })
  }

  loading$: Observable<boolean> = this.loaderService.loading$

  constructor(private loaderService: LoaderService, private changeDetector: ChangeDetectorRef, private store: Store) {
  }

  token$ = this.store.select(tokenSelector)

  ngOnInit(): void {
    if(localStorage.getItem('token')){
      this.store.dispatch(setToken({token: <string>localStorage.getItem('token')}))
    }
    localStorage.removeItem('token')
  }

  ngAfterViewChecked() {
    this.changeDetector.detectChanges()
  }
}
