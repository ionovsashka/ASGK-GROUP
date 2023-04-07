
import {NgModule, Provider} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { PushWindowComponent } from './components/push-window/push-window.component';
import {ReactiveFormsModule} from "@angular/forms";
import { LoaderComponent } from './components/loader/loader.component';
import {LoaderInterceptor} from "./shared/services/loader/loader.interceptor";
import { AlertComponent } from './components/alert/alert.component';

const LOADER_INTERCEPTOR: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: LoaderInterceptor,
  multi: true
}

@NgModule({
  declarations: [
    AppComponent,
    PushWindowComponent,
    LoaderComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [LOADER_INTERCEPTOR],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
