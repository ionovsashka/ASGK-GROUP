import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../shared/services/auth/auth.service";
import {Subject, takeUntil} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  loginForm!: FormGroup
  showPassword!: boolean
  submittingAForm!: boolean
  error!: Error
  destroy$ = new Subject()

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.submittingAForm = false
    this.showPassword = false
    this.loginForm = new FormGroup({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  login() {
    this.submittingAForm = true
    if(this.loginForm.invalid){
      return
    }
    this.authService.login(this.loginForm.value).pipe(
      takeUntil(this.destroy$)
    )
      .subscribe({
      next: (response:any) => {
        localStorage.setItem('token', response.auth_token)
        return this.router.navigate([''])
      },
      error: (error) => {
        this.error = error.error
      }
    })
  }

  ngOnDestroy(){
    this.destroy$.next(true)
    this.destroy$.complete()
  }
}
