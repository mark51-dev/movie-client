import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IVideo } from '../../../shared/models/movie.interface';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class MovieDetailService {
  constructor(private readonly http: HttpClient) {}

  fetchVideoByParam(videoParam: string | null): Observable<IVideo> {
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
}
