import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginInterface} from "../../interfaces/login.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  host: string = 'https://api.asgk-group.ru'

  constructor(private http: HttpClient) { }

  login(loginObj: LoginInterface){
    return this.http.post(`${this.host}/test-auth-only`, loginObj)
  }
}
