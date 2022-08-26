import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MoviesContainerComponent} from './components/movies-container/movies-container.component';


const routes: Routes = [{
  path: 'movies',
  component: MoviesContainerComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
