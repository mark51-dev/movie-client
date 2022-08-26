import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MoviesService {

  constructor(private readonly http: HttpClient) { }

  fetchAllMovies() {
    return this.http.get(`http://localhost:3000/api/movie/all`)
  }
}
