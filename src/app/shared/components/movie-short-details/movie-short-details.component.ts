import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeAll, of, tap } from 'rxjs';
import { divTrigger } from './movie-short-details.animation';

@Component({
  selector: 'app-movie-short-details',
  templateUrl: './movie-short-details.component.html',
  styleUrls: ['./movie-short-details.component.scss'],
  animations: [divTrigger],
})
export class MovieShortDetailsComponent implements OnInit {
  movie!: any;
  movieShortVisible: boolean = false;
  isLoading: boolean = true;
  constructor(
    private readonly router: ActivatedRoute,
    private readonly http: HttpClient
  ) {}

  ngOnInit(): void {
    this.initializeData();
  }

  initializeData() {
    this.movie = this.router.queryParamMap
      .pipe(
        tap(() => (this.isLoading = true)),
        map((params) => {
          if (!params.get('movieShort')) {
            return of(null);
          }
          return this.http.get(
            `http://localhost:3000/api/movie/${params.get('movieShort')}`
          );
        }),
        mergeAll(),
        // fix when try to reload page opened window doesn't show loader
        tap((movieShort) =>
          movieShort
            ? (this.movieShortVisible = true)
            : (this.movieShortVisible = false)
        )
      )
      .subscribe((movie) => {
        this.movie = movie;
        setTimeout(() => (this.isLoading = false), 300);
      });
  }

  detailMovieClose() {
    this.movieShortVisible = false;
  }
}
