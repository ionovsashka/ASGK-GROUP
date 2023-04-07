import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-home-table',
  templateUrl: './home-table.component.html',
  styleUrls: ['./home-table.component.scss']
})
export class HomeTableComponent {
  @Input() users!: Array<any>
  usersCheckedIds!: Array<string>

  @Output() onUpdateUsers: EventEmitter<Array<any>> = new EventEmitter<Array<any>>()
  @Output() onUpdateUsersCheckedIds: EventEmitter<Array<string>> = new EventEmitter<Array<string>>()

  masterSelected!: boolean // Переменная, которая отвечает за выбор всех пользователей на странице

  constructor() {
  }

  ngOnInit(): void {
  }

  checkUncheckAll(){
    for (let i = 0; i < this.users.length; i++){
      this.users[i].isSelected = this.masterSelected
    }
    this.getCheckedItemList()
  }

  isAllSelected(){
    this.masterSelected = this.users.every((item: any) => {
      return item.isSelected == true
    })
    this.getCheckedItemList()
  }

  getCheckedItemList(){
    this.usersCheckedIds = []
    for (let i = 0; i < this.users.length; i++){
      if (this.users[i].isSelected) this.usersCheckedIds.push(this.users[i].user_id)
    }
    this.onUpdateUsers.emit(this.users)
    this.onUpdateUsersCheckedIds.emit(this.usersCheckedIds)
  }
}
