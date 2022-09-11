import { LoaderModule } from './../../shared/components/loader/loader.module';
import { InfiniteScrollComponentModule } from './../../shared/components/infinite-scroll/infinite-scroll-component.module';
import { AuthInterceptor } from './../../shared/interceptors/auth.interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VideoServiceAbstraction } from 'src/app/pages/utils/video.service-abstraction';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SearchByFieldPipe } from 'src/app/shared/pipes/search-by-field.pipe';
import { MovieShortDetailsModule } from '../../shared/components/movie-short-details/movie-short-details.module';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MoviesContainerComponent } from './components/movies-container/movies-container.component';
import { SearchFieldComponent } from './components/search-field/search-field.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesService } from './services/movies.service';
import { PageMovieComponent } from './components/page-movie/page-movie.component';

@NgModule({
  declarations: [
    MoviesContainerComponent,
    MovieItemComponent,
    SearchByFieldPipe,
    SearchFieldComponent,
    PageMovieComponent,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    HttpClientModule,
    MovieShortDetailsModule,
    ReactiveFormsModule,
    InfiniteScrollComponentModule,
    LoaderModule,
  ],
  providers: [
    {
      provide: VideoServiceAbstraction,
      useClass: MoviesService,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
})
export class MoviesModule {}
