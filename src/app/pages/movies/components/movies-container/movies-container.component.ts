import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { fadeInAnimation } from 'src/app/app.animation';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies-container',
  templateUrl: './movies-container.component.html',
  styleUrls: ['./movies-container.component.scss'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' },
})
export class MoviesContainerComponent implements OnInit {
  movies: Observable<any> | undefined;
  movieSearchValue: string = '';
  constructor(private readonly moviesService: MoviesService) {}

  movieSearchByNameHandler(searchValue: string) {
    this.movieSearchValue = searchValue;
  }

  ngOnInit(): void {
    this.initializeData();
  }

  initializeData() {
    this.fetchAllMovies();
  }

  fetchAllMovies() {
    this.movies = this.moviesService.fetchAllMovies();
  }
}
