import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  mergeMap,
  Observable,
  of,
  tap,
} from 'rxjs';
import {
  IVideo,
  VideoServiceAbstraction,
} from 'src/app/pages/utils/video.service-abstraction';
import { MovieItemComponent } from './../movie-item/movie-item.component';

@Component({
  selector: 'app-page-movie',
  templateUrl: './page-movie.component.html',
  styleUrls: ['./page-movie.component.scss'],
})
export class PageMovieComponent implements OnInit {
  searchControl: FormControl = new FormControl();
  searchMovies$!: Observable<IVideo[]> | Observable<[]>;
  page: number = 0;

  movies$!: Observable<IVideo[]>;

  @ViewChild('movie', { read: ViewContainerRef, static: true })
  element!: ViewContainerRef;

  constructor(private readonly moviesService: VideoServiceAbstraction) {}

  pageHandler(): void {
    this.movies$ = this.fetchMoviesByLimit((this.page * 25).toString()).pipe(
      tap((res) => {
        res.forEach((movie) => this.loadMovies(movie));
      })
    );
    this.page++;
  }

  ngOnInit(): void {
    this.initializeData();
  }

  initializeData(): void {
    this.searchMovies$ = this.searchControl.valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(500),
      mergeMap((searchValue: string) => {
        if (searchValue.length)
          return this.moviesService.fetchMoviesBySearch(searchValue);
        return of([]);
      })
    );
  }

  fetchMoviesByLimit(page: string): Observable<IVideo[]> {
    return this.moviesService
      .fetchMoviesByLimit(page)
      .pipe(map((movie) => movie.items));
  }

  loadMovies(movie: IVideo): void {
    const component = this.element.createComponent(MovieItemComponent);
    component.instance.movie = movie;
  }
}
