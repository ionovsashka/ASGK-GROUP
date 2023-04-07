import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SendNotificationsService} from "../../shared/services/main/send-notifications.service";
import {AlertService} from "../alert/alert.service";

export interface PushNotification {
  "user_id": string
  "date_start": string
  "push_message": string
}

@Component({
  selector: 'app-push-window',
  templateUrl: './push-window.component.html',
  styleUrls: ['./push-window.component.scss']
})

export class PushWindowComponent implements OnInit{

  @Output() onClose:EventEmitter<void> = new EventEmitter<void>()
  pushForm!: FormGroup
  submittinAForm!: boolean
  user_ids: Array<string> = []

  constructor(private sendNotifications: SendNotificationsService, private alertService: AlertService) {
  }

  ngOnInit(): void {
    this.submittinAForm = false
    this.pushForm = new FormGroup({
      user_id: new FormControl(this.user_ids.join(',')),
      push_message: new FormControl('', Validators.required),
      date_start: new FormControl('')
    })
  }

  submitPushMessage(){
    this.submittinAForm = true
    const token = <string>localStorage.getItem('token')
    if(!this.pushForm.invalid){
      this.sendNotifications.sendPush(token, this.pushForm.value).subscribe({
        next: () => {
          this.alertService.success('Уведомление успешно отправлено')
          this.onClose.emit()
        },
        error: () => {
          this.alertService.success('Ошибка связи с сервером')
        }
      })
      this.submittinAForm = false
    }
  }

  clickOverlay($event: MouseEvent) {
    const element = $event.target as HTMLElement
    if(element.closest('.modal-push')){
      return
    } else{
      this.onClose.emit()
    }
  }

  cancel() {
    this.onClose.emit()
  }
}
