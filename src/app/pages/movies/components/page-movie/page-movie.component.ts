import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  mergeMap,
  Observable,
  startWith,
} from 'rxjs';
import {
  IVideo,
  VideoServiceAbstraction,
} from 'src/app/pages/utils/video.service-abstraction';

@Component({
  selector: 'app-page-movie',
  templateUrl: './page-movie.component.html',
  styleUrls: ['./page-movie.component.scss'],
})
export class PageMovieComponent implements OnInit {
  searchControl: FormControl = new FormControl();
  movies: Observable<IVideo[]> | undefined | any;
  movieSearchValue: string = '';
  constructor(private readonly moviesService: VideoServiceAbstraction) {}

  ngOnInit(): void {
    this.initializeData();
  }

  initializeData(): void {
    this.movies = this.searchControl.valueChanges.pipe(
      startWith(''),
      distinctUntilChanged(),
      debounceTime(500),
      mergeMap((searchValue: string) => {
        if (searchValue) {
          return this.moviesService.fetchMoviesBySearch(searchValue);
        }
        return this.fetchAllMovies();
      })
    );
  }

  fetchAllMovies(): Observable<IVideo[]> {
    return this.moviesService.fetchAllVideo();
  }
}
