import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mergeMap, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { IVideo } from '../../models/movie.interface';
import { divTrigger } from './movie-short-details.animation';

@Component({
  selector: 'app-movie-short-details',
  templateUrl: './movie-short-details.component.html',
  styleUrls: ['./movie-short-details.component.scss'],
  animations: [divTrigger],
})
export class MovieShortDetailsComponent implements OnInit {
  baseUrl: string = environment.baseUrl;
  movie!: Partial<IVideo>;
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
    this.router.queryParamMap
      .pipe(
        tap(() => {
          this.isLoading = true;
        }),
        mergeMap((res) => {
          const movieId = res.get('movieShort');
          if (movieId) {
            return this.http
              .get(`${environment.baseUrlApi}/movie/${movieId}`)
              .pipe(
                tap(() => {
                  this.isLoading = false;
                  this.movieShortVisible = true;
                })
              );
          }
          this.movieShortVisible = false;
          return of();
        })
        // fix when try to reload page opened window doesn't show loader
      )
      .subscribe((res: Partial<IVideo>) => (this.movie = res));
  }

  detailMovieClose() {
    this.movieShortVisible = false;
  }
}
