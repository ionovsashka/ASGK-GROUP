import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {ErrorComponent} from "./error/error.component";
import {AuthGuard} from "./shared/services/auth/auth.guard";

const routes: Routes = [
  {path: '', canActivate:[AuthGuard], loadChildren: () => import('./main/main.module').then(m => m.MainModule)},
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path: 'error', loadChildren: () => import('./error/error.module').then(m => m.ErrorModule)},
  {path: '**' , redirectTo: 'error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
