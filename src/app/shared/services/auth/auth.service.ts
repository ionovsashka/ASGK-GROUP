import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginForm, TokenResponse} from "../../interfaces/auth/auth.interface";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  host: string = 'https://api.asgk-group.ru'

  constructor(private http: HttpClient) { }

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

  checkAuth():boolean{
    return !!localStorage.getItem('token')
  }
}
