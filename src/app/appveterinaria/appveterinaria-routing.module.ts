import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { AppveterinariaComponent } from "./appveterinaria.component";
import { HomeComponent } from "./components/home/home.component";
import { OtraComponent } from "./components/otra/otra.component";
import { PruebaComponent } from "./components/prueba/prueba.component";

const routes: Routes = [
  {
    path: '',component: AppveterinariaComponent,
    children:[
      {
        path :'', redirectTo: 'home', pathMatch: 'full'
      },
      {
        path: 'home', component: HomeComponent
      },
      {
        path: 'otra',
        component: OtraComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppveterinariaRoutingModule { }
