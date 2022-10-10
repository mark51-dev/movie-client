import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoaderModule } from './../../shared/components/loader/loader.module';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'src/app/shared/interceptors/auth.interceptor';
import { MainPlayerModule } from '../../shared/components/main-player/main-player.module';
import { TabsModule } from '../../shared/components/UI/tabs/tabs.module';
import { SafePipe } from '../../shared/pipes/safe.pipe';
import { MovieDetailContainerComponent } from './components/movie-detail-container/movie-detail-container.component';
import { MovieDetailRoutingModule } from './movie-detail-routing.module';

@NgModule({
  declarations: [MovieDetailContainerComponent, SafePipe],
  imports: [
    CommonModule,
    MovieDetailRoutingModule,
    TabsModule,
    MainPlayerModule,
    LoaderModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
})
export class MovieDetailModule {}
