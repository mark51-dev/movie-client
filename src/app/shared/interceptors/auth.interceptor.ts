import { StorageAbstractClass } from 'src/app/shared/utils/StorageService.abstraction';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, switchMap, throwError } from 'rxjs';
import { StorageService } from '../services/storage.service';
import { AuthService } from './../../pages/auth/services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private readonly storageService: StorageAbstractClass,
    private readonly authService: AuthService
  ) {}

  private refresh = false;

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const clone = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.storageService.getValue('accessToken')}`,
      },
    });
    return next.handle(clone).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401 && !this.refresh) {
          console.log('qweqwe');
          this.refresh = true;
          return this.authService.refresh().pipe(
            switchMap((res: any) => {
              this.storageService.setValue('accessToken', res.accessToken);
              return next.handle(
                request.clone({
                  setHeaders: {
                    Authorization: `Bearer ${this.storageService.getValue(
                      'accessToken'
                    )}`,
                  },
                })
              );
            })
          );
        }
        return throwError(
          () => new Error(`Interceptor error ${err.status} - ${err.message}`)
        );
      })
    );
  }
}
