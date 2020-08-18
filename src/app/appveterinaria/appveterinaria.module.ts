import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppveterinariaRoutingModule } from './appveterinaria-routing.module';
import { AppveterinariaComponent } from './appveterinaria.component';
import { HomeComponent } from "./components/home/home.component";
import { OtraComponent } from "./components/otra/otra.component";
import { PruebaComponent } from "./components/prueba/prueba.component";
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AsideComponent } from './components/aside/aside.component';

@NgModule({
  declarations: [
    AppveterinariaComponent, 
    HomeComponent, 
    OtraComponent, 
    PruebaComponent, 
    NavbarComponent, 
    SidenavComponent, AsideComponent],
  imports: [
    CommonModule,
    AppveterinariaRoutingModule
  ],
  providers:[],
  bootstrap:[AppveterinariaComponent]
})
export class AppveterinariaModule { }
