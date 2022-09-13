import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from 'src/app/shared/interceptors/auth.interceptor';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthContainerComponent } from './components/auth-container/auth-container.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { ContainerSlotComponent } from './components/container-slot/container-slot.component';
import { PageAuthComponent } from './components/page-auth/page-auth.component';
import { RegistrationComponent } from './components/registration/registration.component';

@NgModule({
  declarations: [
    PageAuthComponent,
    RegistrationComponent,
    AuthorizationComponent,
    AuthContainerComponent,
    ContainerSlotComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
})
export class AuthModule {}
