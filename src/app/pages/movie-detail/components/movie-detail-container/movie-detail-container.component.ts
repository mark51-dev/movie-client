import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { VideoServiceAbstraction } from 'src/app/shared/utils/video.service-abstraction';
import { IVideo } from '../../../../shared/utils/video.service-abstraction';

@Component({
  selector: 'app-movie-detail-container',
  templateUrl: './movie-detail-container.component.html',
  styleUrls: ['./movie-detail-container.component.scss'],
})
export class MovieDetailContainerComponent implements OnInit {
  movie$: Observable<IVideo> | undefined;
  constructor(
    private readonly router: ActivatedRoute,
    private readonly movieDetail: VideoServiceAbstraction
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
