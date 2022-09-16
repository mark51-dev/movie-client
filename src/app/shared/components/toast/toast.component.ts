import {
  Component,
  ComponentRef,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ToastItemComponent } from './toast-item/toast-item.component';
import { ToastService } from './toast.service';

export interface IToast {
  type: 'success' | 'error';
  message: string;
}

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit, OnDestroy {
  @ViewChild('toastContainer', { read: ViewContainerRef })
  toastContainer!: ViewContainerRef;
  sub!: Subscription;
  constructor(
    private readonly toastSerive: ToastService,
    private readonly viewContainerRef: ViewContainerRef
  ) {}

  private timeToDestroy: number = 4000;

  ngOnInit(): void {
    this.sub = this.toastSerive.data$.subscribe((toast: IToast[]) => {
      this.showToastItem(toast);
    });
  }

  showToastItem(toasts: IToast[]): void {
    toasts.forEach((toast) => {
      const component: ComponentRef<ToastItemComponent> =
        this.viewContainerRef.createComponent(ToastItemComponent);
      component.instance.message = toast.message;
      component.instance.type = toast.type;
      this.toastContainer.insert(component.hostView);
      this.removeToast(component);
    });
  }

  removeToast(component: ComponentRef<ToastItemComponent>) {
    setTimeout(() => component.destroy(), this.timeToDestroy);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
