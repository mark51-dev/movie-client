import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { fadeInAnimation } from 'src/app/app.animation';
import { MovieDetailService } from '../../services/movie-detail.service';

@Component({
  selector: 'app-movie-detail-container',
  templateUrl: './movie-detail-container.component.html',
  styleUrls: ['./movie-detail-container.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' },
})
export class MovieDetailContainerComponent implements OnInit {
  movieId!: string | null;
  movie!: Observable<any>;
  constructor(
    private readonly router: ActivatedRoute,
    private readonly movieDetail: MovieDetailService
  ) {}

  ngOnInit(): void {
    this.initializeData();
  }

  initializeData() {
    this.router.paramMap.subscribe((res) => (this.movieId = res.get('id')));
    this.fetchMovieByKPId(this.movieId);
  }

  fetchMovieByKPId(movieKPId: string | null) {
    this.movie = this.movieDetail.fetchMovieByKPId(movieKPId);
  }
}
