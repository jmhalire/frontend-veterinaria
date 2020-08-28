import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//componetes 
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
import { OpcioncitasComponent } from './components/citas/opcioncitas/opcioncitas.component';
import { OpcionmascotasComponent } from './components/mascotas/opcionmascotas/opcionmascotas.component';
import { OpcionclientesComponent } from './components/clientes/opcionclientes/opcionclientes.component';

import { AgregarComponent } from './components/clientes/agregar/agregar.component';
import { AgregarmascotaComponent } from './components/mascotas/agregarmascota/agregarmascota.component';

@NgModule({
  declarations: [
    AppveterinariaComponent, HomeComponent,NavbarComponent,SidenavComponent, AsideComponent, ClientesComponent, MascotasComponent, 
    CitasComponent, BuscarmascotaComponent, BuscarcitasComponent, BuscarclienteComponent, RecordatoriosComponent, BuscarrecordatorioComponent, 
    OpcioncitasComponent, OpcionmascotasComponent, OpcionclientesComponent, AgregarComponent, AgregarmascotaComponent
  ],
  imports: [
    CommonModule,
    AppveterinariaRoutingModule
  ],
  providers:[ ],
  bootstrap:[AppveterinariaComponent]
})
export class AppveterinariaModule { }
