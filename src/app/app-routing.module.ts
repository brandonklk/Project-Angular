import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterHeroComponent } from './register-hero/register-hero.component';
import { HeroComponent } from './hero/hero.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { PageNotFoundComponent } from './not-found/page-not-found.component';

const routes: Routes = [

  { path: 'login',   component: LoginComponent },
  { path: 'registrar-heroi', component: RegisterHeroComponent },
  { path: 'herois', component: HeroComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  { path: 'usuarios', component: UsersComponent },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
