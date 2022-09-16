import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  IVideo,
  VideoServiceAbstraction,
} from '../../../shared/utils/video.service-abstraction';
import { environment } from 'src/environments/environment.prod';

@Injectable()
export class MovieDetailService extends VideoServiceAbstraction {
  constructor(private readonly http: HttpClient) {
    super();
  }

  fetchVideoByParam(videoParam: string): Observable<IVideo> {
    return this.http.get<IVideo>(
      `${environment.baseUrlApi}/movie/${videoParam}`
    );
  }
  fetchAllVideo(): Observable<IVideo[]> {
    return this.http.get<IVideo[]>(`${environment.baseUrlApi}/movie/all`);
  }

  fetchMoviesBySearch(searchValue: string): Observable<IVideo[]> {
    return this.http.get<IVideo[]>(
      `${environment.baseUrlApi}/movie/search/${searchValue}`
    );
  }

  fetchMoviesByLimit(
    page: string
  ): Observable<{ items: IVideo[]; count: number }> {
    throw new Error('Method not implemented.');
  }
}
