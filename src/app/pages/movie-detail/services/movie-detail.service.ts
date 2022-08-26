import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MovieDetailService {

  constructor(private readonly http: HttpClient) { }

  fetchMovieByKPId(movieKPId: string | null) {
    return this.http.get(`http://localhost:3000/api/movie/${movieKPId}`);
  }
}
