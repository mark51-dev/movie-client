import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollComponentModule } from './../../shared/components/infinite-scroll/infinite-scroll-component.module';
import { LoaderModule } from './../../shared/components/loader/loader.module';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from 'src/app/shared/interceptors/auth.interceptor';
import { SearchByFieldPipe } from 'src/app/shared/pipes/search-by-field.pipe';
import { MovieShortDetailsModule } from '../../shared/components/movie-short-details/movie-short-details.module';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MoviesContainerComponent } from './components/movies-container/movies-container.component';
import { PageMovieComponent } from './components/page-movie/page-movie.component';
import { SearchFieldComponent } from './components/search-field/search-field.component';
import { MoviesRoutingModule } from './movies-routing.module';

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
    MovieShortDetailsModule,
    ReactiveFormsModule,
    InfiniteScrollComponentModule,
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
export class MoviesModule {}
