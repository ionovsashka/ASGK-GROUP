import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../shared/services/auth/auth.service";
import {Subject, takeUntil} from "rxjs";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {setToken} from "../../reducers/token";

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

  constructor(private authService: AuthService, private router: Router, private store: Store) { }

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
        if(response.auth_token){
          const token = response.auth_token as string
          this.authService.getToken(token).subscribe({
            next: (response) => {
              this.store.dispatch(setToken({token: response.token}))
              return this.router.navigate(['/'])
            }
          })
        }
        return
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
