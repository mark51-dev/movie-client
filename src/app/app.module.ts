import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthPageGuard } from './pages/auth/guards/auth-page.guard';
import { AuthService } from './pages/auth/services/auth.service';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { ToastItemComponent } from './shared/components/toast/toast-item/toast-item.component';
import { ToastComponent } from './shared/components/toast/toast.component';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';
import { StorageService } from './shared/services/storage.service';
import { StorageAbstractClass } from './shared/utils/StorageService.abstraction';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ToastComponent,
    ToastItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
    AuthPageGuard,
    {
      provide: StorageAbstractClass,
      useClass: StorageService,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
