import { Observable } from 'rxjs';
export abstract class VideoServiceAbstraction {
  abstract fetchVideoByParam(videoParam: string | null): Observable<IVideo>;
  abstract fetchAllVideo(): Observable<IVideo[]>;
  abstract fetchMoviesBySearch(searchValue: string): Observable<IVideo[]>;
  abstract fetchMoviesByLimit(
    page: string
  ): Observable<{ items: IVideo[]; count: number }>;
}

export interface IVideo {
  kinopoiskId: number;
  imdbId: string;
  nameRu: string;
  nameEn: string;
  nameOriginal: string;
  posterUrl: string;
  posterUrlPreview: string;
  coverUrl: string;
  logoUrl: string;
  reviewsCount: number;
  ratingGoodReview: number;
  ratingGoodReviewVoteCount: number;
  ratingKinopoisk: number;
  ratingKinopoiskVoteCount: number;
  ratingImdb: number;
  ratingImdbVoteCount: number;
  ratingFilmCritics: number;
  ratingFilmCriticsVoteCount: number;
  ratingAwait: number;
  ratingAwaitCount: number;
  ratingRfCritics: number;
  ratingRfCriticsVoteCount: number;
  webUrl: string;
  year: number;
  filmLength: number;
  slogan: string;
  description: string;
  shortDescription: string;
  editorAnnotation: string;
  isTicketsAvailable: boolean;
  productionStatus: string;
  type: string;
  ratingMpaa: string;
  ratingAgeLimits: string;
  countries: string[];
  genres: string[];
  startYear: number;
  endYear: number;
  serial: boolean;
  shortFilm: boolean;
  completed: boolean;
  hasImax: boolean;
  has3D: boolean;
  lastSync: string;
  dashManifestExists: boolean;
  videoCdnMovie: IVideoCdn;
}

export interface IVideoCdn {
  id: number;
  title: string;
  kp_id: string;
  imdb_id: string;
  world_art_id: string;
  type: string;
  add: string;
  orig_title: string;
  year: string;
  translations: string[];
  quality: string;
  translation: string;
  update: string;
  iframe_src: string;
}
