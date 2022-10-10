import { MovieDetailService } from './../../services/movie-detail.service';
import { environment } from 'src/environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IVideo } from 'src/app/shared/models/movie.interface';

@Component({
  selector: 'app-movie-detail-container',
  templateUrl: './movie-detail-container.component.html',
  styleUrls: ['./movie-detail-container.component.scss'],
})
export class MovieDetailContainerComponent implements OnInit {
  baseUrl: string = environment.baseUrl;
  movie$!: Observable<IVideo>;
  constructor(
    private readonly router: ActivatedRoute,
    private readonly movieDetail: MovieDetailService
  ) {}

  ngOnInit(): void {
    this.initializeData();
  }

  initializeData(): void {
    this.router.paramMap.subscribe((res) => {
      this.movie$ = this.fetchMovieByKPId(res.get('id'));
    });
  }

  fetchMovieByKPId(movieKPId: string | null): Observable<IVideo> {
    return this.movieDetail.fetchVideoByParam(movieKPId);
  }
}
