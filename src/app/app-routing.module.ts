import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ErrorComponent} from "./error/error.component";
import {AuthGuard} from "./shared/services/auth/auth.guard";

const routes: Routes = [
  {path: '', canActivate:[AuthGuard], loadChildren: () => import('./main/main.module').then(m => m.MainModule)},
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path: 'error', component: ErrorComponent},
  {path: '**' , redirectTo: 'error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
