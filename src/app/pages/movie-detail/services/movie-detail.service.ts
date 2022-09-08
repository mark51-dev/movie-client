import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  IVideo,
  VideoServiceAbstraction,
} from '../../utils/video.service-abstraction';

@Injectable()
export class MovieDetailService extends VideoServiceAbstraction {
  constructor(private readonly http: HttpClient) {
    super();
  }

  fetchVideoByParam(videoParam: string): Observable<IVideo> {
    return this.http.get<IVideo>(
      `http://localhost:3000/api/movie/${videoParam}`
    );
  }
  fetchAllVideo(): Observable<IVideo[]> {
    return this.http.get<IVideo[]>(`http://localhost:3000/api/movie/all`);
  }

  fetchMoviesBySearch(searchValue: string): Observable<IVideo[]> {
    return this.http.get<IVideo[]>(
      `http://localhost:3000/api/movie/search/${searchValue}`
    );
  }
}
