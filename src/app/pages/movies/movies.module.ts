import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesContainerComponent } from './components/movies-container/movies-container.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MoviesService } from './services/movies.service';
import { HttpClientModule } from '@angular/common/http';
import { MovieShortDetailsModule } from '../../shared/components/movie-short-details/movie-short-details.module';
import { SearchByFieldPipe } from 'src/app/shared/pipes/search-by-field.pipe';
import { SearchFieldComponent } from './components/search-field/search-field.component';

@NgModule({
  declarations: [
    MoviesContainerComponent,
    MovieItemComponent,
    SearchByFieldPipe,
    SearchFieldComponent,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    HttpClientModule,
    MovieShortDetailsModule,
  ],
  providers: [MoviesService],
})
export class MoviesModule {}
