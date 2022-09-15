import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageMovieComponent } from './components/page-movie/page-movie.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full',
  },
  {
    path: 'movies',
    component: PageMovieComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
