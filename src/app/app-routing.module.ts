import { MoviesComponent } from './movies/movies.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthGuard } from './auth.guard';
import { TvComponent } from './tv/tv.component';
import { PeopleComponent } from './people/people.component';

const routes: Routes = [
  {path:"" , redirectTo:"home" , pathMatch:"full"},
  {path:"home" , canActivate:[AuthGuard] , component:HomeComponent},
  {path:"movies" , canActivate:[AuthGuard] , component:MoviesComponent},
  {path:"tv" , canActivate:[AuthGuard] , component:TvComponent},
  {path:"people" , canActivate:[AuthGuard] , component:PeopleComponent},
  {path:"about" , canActivate:[AuthGuard] , component:AboutComponent},
  {path:"contacts" , canActivate:[AuthGuard] , component:ContactsComponent},
  {path:"moviedetails/:id/:term" , canActivate:[AuthGuard] , component:MoviedetailsComponent},
  {path: 'profile',
  loadChildren: () => import('./profile/profile.module').then((m) => m.ProfileModule)
},

  {path:"login" , component:LoginComponent},
  {path:"register" , component:RegisterComponent},
  {path:"**" , component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
