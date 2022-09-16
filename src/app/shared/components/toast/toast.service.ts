import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IToast } from './toast.component';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  subject = new BehaviorSubject<IToast[]>([]);
  data$: Observable<any> = this.subject.asObservable();
  constructor() {}

  showToast(
    message: string = 'default message',
    type: 'success' | 'error' = 'success'
  ) {
    const toastArray: IToast[] = [{ message, type }];
    this.subject.next([...toastArray]);
  }

  clearToastsArray() {
    this.subject.next([]);
  }
}
