import { Injectable } from '@angular/core';
import { AuthorizationAbstractClass } from '../../utils/auth.abstraction';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends AuthorizationAbstractClass {
  getValue(storageKey: string): any {
    try {
      return localStorage.getItem(storageKey);
    } catch (error) {
      console.log('Local storage key error');
    }
  }

  setValue(storageKey: string, storageValue: string): void {
    try {
      localStorage.setItem(storageKey, storageValue);
    } catch (error) {
      console.log('Local storage key error');
    }
  }
}
