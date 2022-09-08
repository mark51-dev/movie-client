import { VideoServiceAbstraction } from 'src/app/pages/utils/video.service-abstraction';
import { LoaderModule } from './../../shared/components/loader/loader.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieDetailRoutingModule } from './movie-detail-routing.module';
import { MovieDetailContainerComponent } from './components/movie-detail-container/movie-detail-container.component';
import { MovieDetailService } from './services/movie-detail.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SafePipe } from '../../shared/pipes/safe.pipe';
import { TabsModule } from '../../shared/components/UI/tabs/tabs.module';
import { MainPlayerModule } from '../../shared/components/main-player/main-player.module';
import { AuthInterceptor } from 'src/app/shared/interceptors/auth.interceptor';

@NgModule({
  declarations: [MovieDetailContainerComponent, SafePipe],
  imports: [
    CommonModule,
    MovieDetailRoutingModule,
    HttpClientModule,
    TabsModule,
    MainPlayerModule,
    LoaderModule,
  ],
  providers: [
    {
      provide: VideoServiceAbstraction,
      useClass: MovieDetailService,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
})
export class MovieDetailModule {}
