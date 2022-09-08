import { AuthService } from './../../pages/auth/services/auth.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpClient,
} from '@angular/common/http';
import { Observable, catchError, throwError, switchMap, tap } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private readonly authService: AuthService,
    private readonly http: HttpClient
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let refresh = false;
    const clone = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authService.getValue('accessToken')}`,
      },
    });
    return next.handle(clone).pipe(
      catchError((err: HttpErrorResponse) => {
        console.log(err.status);

        if ((err.status === 401 || err.status === 403) && !refresh) {
          refresh = true;
          return this.http
            .post(
              'http://localhost:3000/api/auth/refresh',
              {},
              { withCredentials: true }
            )
            .pipe(
              switchMap((res: any) => {
                this.authService.setValue('accessToken', res.accessToken);
                return next.handle(
                  request.clone({
                    setHeaders: {
                      Authorization: `Bearer ${this.authService.getValue(
                        'accessToken'
                      )}`,
                    },
                  })
                );
              })
            );
        }
        return throwError(() => null);
      })
    );
  }
}
