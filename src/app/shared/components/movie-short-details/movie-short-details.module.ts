import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieShortDetailsComponent } from './movie-short-details.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LoaderModule } from '../loader/loader.module';

@NgModule({
  declarations: [MovieShortDetailsComponent],
  imports: [CommonModule, HttpClientModule, RouterModule, LoaderModule],
  exports: [MovieShortDetailsComponent],
})
export class MovieShortDetailsModule {}
