import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { IVideo } from 'src/app/shared/models/movie.interface';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private readonly http: HttpClient) {}
  fetchVideoByParam(videoParam: string | null): Observable<IVideo> {
    throw new Error('Method not implemented.');
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
    return this.http.get<{ items: IVideo[]; count: number }>(
      `${environment.baseUrlApi}/movie/all/pagination?page=${page}`
    );
  }
}
