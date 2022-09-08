import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  IVideo,
  VideoServiceAbstraction,
} from '../../utils/video.service-abstraction';
import { Observable } from 'rxjs';

@Injectable()
export class MoviesService extends VideoServiceAbstraction {
  constructor(private readonly http: HttpClient) {
    super();
  }
  fetchVideoByParam(videoParam: string | null): Observable<IVideo> {
    throw new Error('Method not implemented.');
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
