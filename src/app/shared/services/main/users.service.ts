import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  host: string = 'https://api.asgk-group.ru/v1'

  constructor(private http: HttpClient) { }

  getUsers(token: string | null){
    return this.http.get(`${this.host}/${token}/passes`, {
      params:{
        limit: 1000,
        offset: 0
      }
    })
  }
}
