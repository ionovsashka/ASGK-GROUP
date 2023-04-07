import {Component, Input, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {AlertService} from "./alert.service";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit{
  @Input() delay = 3000

  text!: string
  type!: string

  destroy$ = new Subject()

  constructor(private alertService: AlertService) {
  }

  ngOnInit() {
    this.alertService.alert$.subscribe(alert => {
      this.text = alert.text
      this.type = alert.type
      const timeout = setTimeout(() => {
        clearTimeout(timeout)
        this.text = ''
      }, this.delay)
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next(true)
    this.destroy$.complete()
  }

}
