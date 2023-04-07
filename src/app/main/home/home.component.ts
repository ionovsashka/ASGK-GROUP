import {Component, ComponentFactoryResolver, HostListener, OnInit, ViewChild} from '@angular/core';
import {UsersService} from "../../shared/services/main/users.service";
import {Router} from "@angular/router";
import {ModalWindowDirective} from "../../shared/directives/modal-window.directive";
import {PushWindowComponent} from "../../components/push-window/push-window.component";
import {AlertService} from "../../components/alert/alert.service";

export interface UserResponse {
  meta: Object,
  passes: Array<any>
}

export interface ParamsRequest {
  limit: number
  offset: number
  search: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild(ModalWindowDirective) modalDir!: ModalWindowDirective

  token!: string
  identifier!: string
  users!: Array<any>
  usersCheckedIds!: Array<string> // Массив, в который будут заноситься логины выбраных пользователей
  masterSelected!: boolean // Переменная, которая отвечает за выбор всех пользователей на странице
  params!: ParamsRequest

  constructor(private usersService: UsersService, private resolver: ComponentFactoryResolver, private alertService: AlertService) { }

  ngOnInit(): void {
    if(localStorage.getItem('params')){
      this.params = JSON.parse(localStorage.getItem('params') as string)
      // localStorage.removeItem('params')
    } else{
      this.params = {
        search: '',
        limit: 100,
        offset: 0
      }
    }
    this.token = <string>localStorage.getItem('token')
    this.identifier = <string>localStorage.getItem('identifier')
    this.users = []
    this.masterSelected = false
    this.usersCheckedIds= []
    this.getUsers(this.token, this.identifier, this.params)
  }

  getUsers(token: string, identifier: string, params: ParamsRequest){
    this.users = []
    this.usersService.getUsers(token, identifier, params).subscribe({
      next: (response:UserResponse) => {
        if(response.passes.length !== 0){
          for(let user of response.passes){
            if (this.usersCheckedIds.find(elem => elem === user.user_id)) {
              user = {...user, isSelected: true}
              this.users.push(user)
            } else {
              user = {...user, isSelected: false}
              this.users.push(user)
            }
          }
          console.log(this.users)
        }

      },
      error: (error: Error) => {
      }
    })
  }

  search(params: ParamsRequest) {
    this.params = params
    console.log(this.params)
    this.getUsers(this.token, this.identifier, params)
  }

  viewPushModal() {
    if(this.usersCheckedIds.length === 0){
      this.alertService.error('Для отправки уведомлений, выберите хотя бы одного клиента')
      return
    }
    const pushModalFactory = this.resolver.resolveComponentFactory(PushWindowComponent)
    const pushModalComponent = this.modalDir.modalWindowContainer.createComponent(pushModalFactory)
    pushModalComponent.instance.user_ids = this.usersCheckedIds
    pushModalComponent.instance.onClose.subscribe(() => {
      this.modalDir.modalWindowContainer.clear()
    })
  }

  updateUsers($event: Array<any>) {
    this.users = $event
  }

  updateUsersChecked($event: Array<string>) {
    this.usersCheckedIds = $event
  }
}
