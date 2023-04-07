import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-footer-table',
  templateUrl: './footer-table.component.html',
  styleUrls: ['./footer-table.component.scss']
})
export class FooterTableComponent implements OnInit{

  @Input() usersCheckedIds!: Array<string>
  @Output() onViewPushModal: EventEmitter<void> = new EventEmitter<void>()

  numberForA!: Array<string>
  numberForOv!: Array<string>

  ngOnInit(): void {
    this.numberForA = ['2', '3', '4',]
    this.numberForOv = ['5', '6', '7', '8', '9', '0']
  }

  get stateForOne():boolean{
    return (this.usersCheckedIds.length.toString().at(-1) == '1' && this.usersCheckedIds.length.toString().at(-2) !== '1')
  }

  get stateForA(): boolean{
    return (this.numberForA.includes(<string>this.usersCheckedIds.length.toString().at(-1)) && this.usersCheckedIds.length.toString()?.at(-2) !== '1')
  }

  get stateForOv(): boolean{
    return (this.numberForOv.includes(<string>this.usersCheckedIds.length.toString().at(-1)) || (this.usersCheckedIds.length.toString().length > 1 && this.usersCheckedIds.length.toString().at(-2) == '1' && (this.numberForA.includes(<string>this.usersCheckedIds.length.toString().at(-1)) || this.usersCheckedIds.length.toString().at(-1) == '1')))
  }

  openModal() {
    this.onViewPushModal.emit()
  }
}
