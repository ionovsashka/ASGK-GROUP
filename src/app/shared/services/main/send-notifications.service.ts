import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PushNotification} from "../../../components/push-window/push-window.component";

@Injectable({
  providedIn: 'root'
})
export class SendNotificationsService {

  host: string = 'https://api.asgk-group.ru/v1'

  constructor(private http: HttpClient) { }

  sendPush(token: string, push: PushNotification){
    return this.http.post(`${this.host}/${token}/message/push`, push, {
      headers:{
        'Content-Type': 'application/json',
        'Authorization': token
      }
    })
  }
}
