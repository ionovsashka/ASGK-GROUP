import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

export type AlertType = 'success' | 'error'

export interface Alert{
  type: AlertType
  text: string
}

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  alert$: Subject<Alert> = new Subject<Alert>()

  constructor() { }

  success(text: string){
    this.alert$.next({
      type: "success",
      text: text
    })
  }

  error(text: string){
    this.alert$.next({
      type: "error",
      text: text
    })
  }
}
