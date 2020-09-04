import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./applogin/home/home.component";
import { AuthGuard } from "./auth.guard";
import { SigninComponent } from "./applogin/signin/signin.component";

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent, pathMatch: 'full'
  },
  {
    path: 'signin', component: SigninComponent
  },
  {
    path: 'veterinaria',
    loadChildren: () => import('./appveterinaria/appveterinaria.module').then( m => m.AppveterinariaModule),
    canLoad: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
