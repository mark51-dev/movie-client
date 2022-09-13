import { Router } from '@angular/router';
import { StorageService } from 'src/app/shared/services/storage.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  debounceTime,
  Observable,
  tap,
  catchError,
  throwError,
} from 'rxjs';

@Injectable()
export class AuthService {
  private subject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  loggedInFlag: Observable<boolean> = this.subject.asObservable();
  constructor(
    private readonly http: HttpClient,
    private readonly storageService: StorageService,
    private readonly router: Router
  ) {}

  loggedIn(): void {
    this.subject.next(true);
  }

  loggedOut(): void {
    this.subject.next(false);
  }

  get logStatus(): boolean {
    return this.subject.value;
  }

  registration(formData: any): Observable<any> {
    return this.http
      .post(`http://localhost:3000/api/auth/registration`, formData, {
        withCredentials: true,
      })
      .pipe(debounceTime(300));
  }

  login(formData: any): Observable<any> {
    return this.http
      .post(`http://localhost:3000/api/auth/login`, formData, {
        withCredentials: true,
      })
      .pipe(debounceTime(300));
  }

  refresh(): Observable<any> {
    return this.http
      .post(
        'http://localhost:3000/api/auth/refresh',
        {},
        { withCredentials: true }
      )
      .pipe(debounceTime(300));
  }

  logout(): Observable<any> {
    return this.http
      .post(
        'http://localhost:3000/api/auth/logout',
        {},
        { withCredentials: true }
      )
      .pipe(
        debounceTime(300),
        tap((res: any) => {
          if (res.logout) {
            this.loggedOut();
            this.storageService.removeItem('accessToken');
            this.router.navigate(['/auth']);
          }
        }),
        catchError((err) => {
          this.loggedIn();
          return throwError(
            () => `Logout error ${err.status} - ${err.message}`
          );
        })
      );
  }
}
