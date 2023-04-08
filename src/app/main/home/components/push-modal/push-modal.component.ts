import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SendNotificationsService} from "../../../../shared/services/main/send-notifications.service";
import {AlertService} from "../../../../components/alert/alert.service";
import {Store} from "@ngrx/store";
import {tokenSelector} from "../../../../reducers/token";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-push-modal',
  templateUrl: './push-modal.component.html',
  styleUrls: ['./push-modal.component.scss']
})
export class PushModalComponent implements OnInit, OnDestroy{
  @Output() onClose:EventEmitter<void> = new EventEmitter<void>()
  pushForm!: FormGroup
  submittinAForm!: boolean
  user_ids: Array<string> = []
  token: string = ''

  constructor(private sendNotifications: SendNotificationsService, private alertService: AlertService, private store: Store) {
  }

  token$ = this.store.select(tokenSelector)
  destroy$ = new Subject()

  ngOnInit(): void {
    this.submittinAForm = false
    this.pushForm = new FormGroup({
      user_id: new FormControl(this.user_ids.join(',')),
      push_message: new FormControl('', Validators.required),
      date_start: new FormControl('')
    })
    this.token$.subscribe((response) => {
      this.token = response
    })
  }

  submitPushMessage(){
    this.submittinAForm = true
    if(!this.pushForm.invalid){
      this.sendNotifications.sendPush(this.token, this.pushForm.value).pipe(
        takeUntil(this.destroy$)
      ).subscribe({
        next: () => {
          this.alertService.success('Уведомление успешно отправлено')
          this.onClose.emit()
        },
        error: (error: any) => {
          this.alertService.error(error.error)
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

  ngOnDestroy() {
    this.destroy$.next(true)
    this.destroy$.complete()
  }
}
