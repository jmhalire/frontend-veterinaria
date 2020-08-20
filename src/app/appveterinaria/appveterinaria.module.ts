import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppveterinariaRoutingModule } from './appveterinaria-routing.module';
import { AppveterinariaComponent } from './appveterinaria.component';
import { HomeComponent } from "./components/home/home.component";
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AsideComponent } from './components/aside/aside.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { MascotasComponent } from './components/mascotas/mascotas.component';
import { CitasComponent } from './components/citas/citas.component';
import { BuscarmascotaComponent } from './components/mascotas/buscarmascota/buscarmascota.component';
import { BuscarcitasComponent } from './components/citas/buscarcitas/buscarcitas.component';
import { BuscarclienteComponent } from "./components/clientes/buscarcliente/buscarcliente.component";
import { RecordatoriosComponent } from './components/recordatorios/recordatorios.component';
import { BuscarrecordatorioComponent } from './components/recordatorios/buscarrecordatorio/buscarrecordatorio.component';


@NgModule({
  declarations: [
    AppveterinariaComponent, HomeComponent,NavbarComponent,SidenavComponent, AsideComponent, ClientesComponent, MascotasComponent, 
    CitasComponent, BuscarmascotaComponent, BuscarcitasComponent, BuscarclienteComponent, RecordatoriosComponent, BuscarrecordatorioComponent
  ],
  imports: [
    CommonModule,
    AppveterinariaRoutingModule
  ],
  providers:[],
  bootstrap:[AppveterinariaComponent]
})
export class AppveterinariaModule { }
