import { Injectable } from '@angular/core';
import { StorageAbstractClass } from '../utils/StorageService.abstraction';

@Injectable()
export class StorageService extends StorageAbstractClass {
  getValue(storageKey: string): any {
    try {
      return localStorage.getItem(storageKey);
    } catch (error) {
      console.log('Local storage get value error');
    }
  }

  setValue(storageKey: string, storageValue: string): void {
    try {
      localStorage.setItem(storageKey, storageValue);
    } catch (error) {
      console.log('Local storage setItem error');
    }
  }

  removeItem(storageKey: string): void {
    try {
      localStorage.removeItem(storageKey);
    } catch (error) {
      console.log('Local storage remove item error');
    }
  }
}
