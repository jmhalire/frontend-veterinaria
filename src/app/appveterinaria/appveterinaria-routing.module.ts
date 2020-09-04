import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//canactivate
import { AuthGuard } from "../auth.guard";

//components
import { AppveterinariaComponent } from "./appveterinaria.component";
import { HomeComponent } from "./components/home/home.component";
import { ClientesComponent } from "./components/clientes/clientes.component";
import { MascotasComponent } from "./components/mascotas/mascotas.component";
import { CitasComponent } from "./components/citas/citas.component";
import { AgregarclienteComponent } from "./components/clientes/agregarcliente/agregarcliente.component";
import { ListaclientesComponent } from "./components/clientes/listaclientes/listaclientes.component";
import { VerclienteComponent } from "./components/clientes/vercliente/vercliente.component";
import { AgregarmascotaComponent } from "./components/mascotas/agregarmascota/agregarmascota.component";
import { ListamascotasComponent } from "./components/mascotas/listamascotas/listamascotas.component";
import { VermascotaComponent } from "./components/mascotas/vermascota/vermascota.component";
import { ListavisitasComponent } from "./components/mascotas/listavisitas/listavisitas.component";
import { VisitaComponent } from "./components/mascotas/visita/visita.component";
import { ListacitasComponent } from "./components/citas/listacitas/listacitas.component";

const routes: Routes = [
  {
    path: '', component: AppveterinariaComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      {
        path: 'clientes', component: ClientesComponent,
        children: [
          { path: '', redirectTo: 'lista', pathMatch: 'full' },
          { path: 'lista', component: ListaclientesComponent },
          { path: 'lista/:id', component: VerclienteComponent },
          { path: 'agregar', component: AgregarclienteComponent },
        ]
      },
      {
        path: 'mascotas', component: MascotasComponent,
        children: [
          { path: '', redirectTo: 'lista', pathMatch: 'full' },
          { path: 'lista', component: ListamascotasComponent },
          { path: 'lista/:id', component: VermascotaComponent },
          { path: 'agregar', component: AgregarmascotaComponent },
          { path: 'visita', component: VisitaComponent },
          { path: 'lista-visitas', component: ListavisitasComponent },
        ]
      },
      {
        path: 'citas-programadas', component: CitasComponent,
        children: [
          { path: '', redirectTo: 'lista', pathMatch: 'full' },
          { path: 'lista', component: ListacitasComponent },
        ]
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppveterinariaRoutingModule { }
