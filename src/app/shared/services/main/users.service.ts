import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ParamsRequest, UserResponse} from "../../../main/home/home.component";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  host: string = 'https://api.asgk-group.ru/v1'

  constructor(private http: HttpClient) { }

  getUsers(token: string, identifier: string, params: ParamsRequest){
    return this.http.get<UserResponse>(`${this.host}/${token}/passes`, {
      headers:{
        'Content-Type': 'application/json',
        'Authorization': token
      },
      params: {
        search: params.search,
        limit: params.limit,
        offset: params.offset
      }
    })
  }
}
