import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  statusCodeNotFound = 404;

  constructor(private router: Router, private toastrService: ToastrService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || { token: null };

    if (currentUser.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.token}`
        }
      });
    }

    return next.handle(request).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        // do stuff with response if you want
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          console.log('[INTERCEPPOR] - Loggin');
          this.router.navigateByUrl('authentication/login');
          // redirect to the login route
          // or show a modal
        } else {
          if (err.status === this.statusCodeNotFound) {
            this.toastrService.warning(err.error, 'Não Encontrado');
          }
          else {
            this.toastrService.error(err.error, 'Erro de Comunicação');
          }
        }
      } else {
        this.toastrService.error('Houve um erro na consulta !', 'Erro de Comunicação');
      }
    });
  }
}
