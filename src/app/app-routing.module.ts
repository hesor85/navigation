import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShowDetailsComponent } from './tv/show-details/show-details.component';
import { TvComponent } from './tv/tv.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'tv',
    component: TvComponent,
    children: [
      {
        path: ':id',
        component: ShowDetailsComponent
      }
    ]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
