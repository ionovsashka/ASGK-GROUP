import {Component, EventEmitter, OnInit, Output} from '@angular/core';

export interface ActiveField{
  id: string,
  value: string,
  placeholder: string
}

export interface Field{
  id: string,
  placeholder: string,
  checked: boolean
}

@Component({
  selector: 'app-filter-window',
  templateUrl: './filter-window.component.html',
  styleUrls: ['./filter-window.component.scss']
})

export class FilterWindowComponent implements OnInit{

  @Output() close: EventEmitter<any> = new EventEmitter<any>()
  @Output() setField : EventEmitter<ActiveField> = new EventEmitter<ActiveField>()

  fields!: Array<Field>
  activeFields: Array<ActiveField> = []

  constructor() {
  }

  ngOnInit() {
    this.fields = [
      {
        id: 'last_name',
        placeholder: 'Фамилия',
        checked: false
      },
      {
        id: 'first_name',
        placeholder: 'Имя',
        checked: false
      },
      {
        id: 'pat_name',
        placeholder: 'Отчество',
        checked: false
      },
      {
        id: 'email',
        placeholder: 'Email',
        checked: false
      },
      {
        id: 'gender',
        placeholder: 'Пол',
        checked: false
      },
      {
        id: 'user_id',
        placeholder: 'ID клиента',
        checked: false
      },
      {
        id: 'barcode',
        placeholder: 'Штрих-код',
        checked: false
      },
      {
        id: 'bonus',
        placeholder: 'Бонусы',
        checked: false
      },
      {
        id: 'link',
        placeholder: 'ID карты',
        checked: false
      },
      {
        id: 'loyalty_level',
        placeholder: 'Лояльность',
        checked: false
      },
    ]
    if(this.activeFields.length !== 0){
      for(let index in this.fields){
        if(this.activeFields.find(elem => elem.id === this.fields[index].id)){
          this.fields[index].checked = true
        }
      }
    }
  }

  closeFilter($event: MouseEvent) {
    $event.stopPropagation()
    const element = $event.target as HTMLElement
    if(element.closest('.filter-window')){
      return
    }
    this.close.emit()
  }

  selectParam(idx: number) {
    const objForField: ActiveField = {
      id: this.fields[idx].id,
      value: '',
      placeholder: this.fields[idx].placeholder
    }
    this.setField.emit(objForField)
  }
}
