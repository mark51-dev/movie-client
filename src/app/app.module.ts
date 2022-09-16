import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthPageGuard } from './pages/auth/guards/auth-page.guard';
import { AuthGuard } from './pages/auth/guards/auth.guard';
import { AuthService } from './pages/auth/services/auth.service';
import { StorageService } from './shared/services/storage.service';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { ToastItemComponent } from './shared/components/toast/toast-item/toast-item.component';
import { ToastComponent } from './shared/components/toast/toast.component';
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';

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
    StorageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: (authService: AuthService) => {
        authService.refresh().subscribe();
        return null;
      },
      deps: [AuthService],
    },
    AuthGuard,
    AuthPageGuard,
  ],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
