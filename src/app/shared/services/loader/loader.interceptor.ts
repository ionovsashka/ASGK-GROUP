import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {finalize, Observable} from 'rxjs';
import {LoaderService} from "./loader.service";

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  totalRequests = 0
  completedRequests = 0

  constructor(private loaderService: LoaderService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    this.loaderService.showLoader()
    this.totalRequests++

    return next.handle(request).pipe(
      finalize(() => {
        this.completedRequests++

        if (this.completedRequests === this.totalRequests) {
          this.loaderService.hideLoader()
          this.totalRequests = 0
          this.completedRequests = 0
        }
      })
    );
  }
}
