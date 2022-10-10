import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, debounceTime, Observable, tap, throwError } from 'rxjs';
import { StorageService } from 'src/app/shared/services/storage.service';
import { environment } from 'src/environments/environment.prod';

@Injectable()
export class AuthService {
  constructor(
    private readonly http: HttpClient,
    private readonly storageService: StorageService,
    private readonly router: Router
  ) {}
  registration(formData: any): Observable<any> {
    return this.http
      .post(`${environment.baseUrlApi}/auth/registration`, formData, {
        withCredentials: true,
      })
      .pipe(debounceTime(300));
  }

  login(formData: any): Observable<any> {
    return this.http
      .post(`${environment.baseUrlApi}/auth/login`, formData, {
        withCredentials: true,
      })
      .pipe(debounceTime(300));
  }

  refresh(): Observable<any> {
    return this.http
      .post(
        `${environment.baseUrlApi}/auth/refresh`,
        {},
        { withCredentials: true }
      )
      .pipe(debounceTime(300));
  }

  logout(): Observable<any> {
    return this.http
      .post(
        `${environment.baseUrlApi}/auth/logout`,
        {},
        { withCredentials: true }
      )
      .pipe(
        debounceTime(300),
        tap((res: any) => {
          if (res.logout) {
            this.storageService.removeItem('accessToken');
            this.router.navigate(['/auth']);
          }
        }),
        catchError((err) => {
          return throwError(
            () => `Logout error ${err.status} - ${err.message}`
          );
        })
      );
  }
}
