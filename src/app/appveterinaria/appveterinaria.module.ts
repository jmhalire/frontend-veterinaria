import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

//componetes 
import { AppveterinariaRoutingModule } from './appveterinaria-routing.module';
import { AppveterinariaComponent } from './appveterinaria.component';
import { HomeComponent } from "./components/home/home.component";
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { MascotasComponent } from './components/mascotas/mascotas.component';
import { CitasComponent } from './components/citas/citas.component';
import { BuscarmascotaComponent } from './components/mascotas/listamascotas/buscarmascota/buscarmascota.component';
import { BuscarclienteComponent } from "./components/clientes/listaclientes/buscarcliente/buscarcliente.component";
import { OpcioncitasComponent } from './components/citas/opcioncitas/opcioncitas.component';
import { OpcionmascotasComponent } from './components/mascotas/opcionmascotas/opcionmascotas.component';
import { OpcionclientesComponent } from './components/clientes/opcionclientes/opcionclientes.component';
import { AgregarclienteComponent } from './components/clientes/agregarcliente/agregarcliente.component';
import { ListaclientesComponent } from './components/clientes/listaclientes/listaclientes.component';
import { VerclienteComponent } from './components/clientes/vercliente/vercliente.component';
import { DataclienteComponent } from './components/clientes/vercliente/datacliente/datacliente.component';
import { DatamascotaComponent } from './components/clientes/vercliente/datamascota/datamascota.component';
import { MessageComponent } from './components/clientes/message/message.component';
import { ListamascotasComponent } from './components/mascotas/listamascotas/listamascotas.component';
import { VermascotaComponent } from './components/mascotas/vermascota/vermascota.component';
import { AgregarmascotaComponent } from './components/mascotas/agregarmascota/agregarmascota.component';
import { MasdetallesComponent } from './components/mascotas/vermascota/masdetalles/masdetalles.component';
import { DetallesmascotaComponent } from './components/mascotas/vermascota/detallesmascota/detallesmascota.component';
import { VisitaComponent } from './components/mascotas/visita/visita.component';
import { VacunaComponent } from './components/mascotas/visita/vacuna/vacuna.component';
import { ListavisitasComponent } from "./components/mascotas/listavisitas/listavisitas.component";
import { AgregarcitaComponent } from './components/citas/agregarcita/agregarcita.component';
import { ListacitasComponent } from './components/citas/listacitas/listacitas.component';

@NgModule({
  declarations: [
    AppveterinariaComponent, HomeComponent,NavbarComponent,SidenavComponent, ClientesComponent, MascotasComponent, 
    CitasComponent, BuscarmascotaComponent, BuscarclienteComponent, OpcioncitasComponent, OpcionmascotasComponent, OpcionclientesComponent, 
    AgregarclienteComponent, ListaclientesComponent, VerclienteComponent, DataclienteComponent, DatamascotaComponent, MessageComponent, 
    ListamascotasComponent, VermascotaComponent, AgregarmascotaComponent, MasdetallesComponent, DetallesmascotaComponent, VisitaComponent, 
    VacunaComponent, ListavisitasComponent, AgregarcitaComponent, ListacitasComponent,
  ],
  imports: [
    CommonModule,
    AppveterinariaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[ ],
  bootstrap:[AppveterinariaComponent]
})
export class AppveterinariaModule { }
