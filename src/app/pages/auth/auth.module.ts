import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AuthRoutingModule } from './auth-routing.module';
import { PageAuthComponent } from './components/page-auth/page-auth.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { AuthContainerComponent } from './components/auth-container/auth-container.component';
import { ContainerSlotComponent } from './components/container-slot/container-slot.component';

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
})
export class AuthModule {}
