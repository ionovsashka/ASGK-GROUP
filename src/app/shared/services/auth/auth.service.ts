import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginForm, TokenResponse} from "../../interfaces/auth/auth.interface";
import {filter, first, map, Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {tokenSelector} from "../../../reducers/token";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  host: string = 'https://api.asgk-group.ru'

  constructor(private http: HttpClient, private store: Store) { }

  isAuth$ = this.store.pipe(
    select(tokenSelector),
    map(authData => !!authData)
  )

  login(loginObj: LoginForm){
    return this.http.post(`${this.host}/test-auth-only`, loginObj)
  }

  getToken(token: string){
    return this.http.get<TokenResponse>(`${this.host}/v1/authorization`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    })
      .pipe(
      map((response:TokenResponse) => {
        return response.tokens.filter(item => item.token === token)[0]
      })
    )
  }

}
