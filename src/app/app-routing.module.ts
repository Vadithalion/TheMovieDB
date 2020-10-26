import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './containers/home/home.component';
import { DetailsComponent } from './containers/details/details.component';
import { ActoresComponent } from './containers/actores/actores.component';
import { MoviesComponent } from './containers/movies/movies.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'detalles/:id', component: DetailsComponent},
  {path: 'actores', component: ActoresComponent},
  {path: 'movies/:name', component: MoviesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
