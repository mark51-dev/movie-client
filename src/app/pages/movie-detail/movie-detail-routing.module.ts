import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MovieDetailContainerComponent} from './components/movie-detail-container/movie-detail-container.component';

const routes: Routes = [{
  path: ':id',
  component: MovieDetailContainerComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieDetailRoutingModule { }
