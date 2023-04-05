import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../shared/services/main/users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  token!: string | null

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    // this.token = localStorage.getItem('token')
    // this.usersService.getUsers(this.token).subscribe({
    //   next: (response) => {
    //     console.log(response)}
    // })
  }

  logout() {
    // localStorage.removeItem('token')
    // return this.router.navigate(['auth'])
  }
}
