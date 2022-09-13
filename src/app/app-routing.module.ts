import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageGuard } from './pages/auth/guards/auth-page.guard';
import { AuthGuard } from './pages/auth/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/movies/movies.module').then((m) => m.MoviesModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'movie-details',
    loadChildren: () =>
      import('./pages/movie-detail/movie-detail.module').then(
        (m) => m.MovieDetailModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
    canActivate: [AuthPageGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
