import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { AppveterinariaComponent } from "./appveterinaria.component";
import { HomeComponent } from "./components/home/home.component";
import { ClientesComponent } from "./components/clientes/clientes.component";
import { MascotasComponent } from "./components/mascotas/mascotas.component";
import { CitasComponent } from "./components/citas/citas.component";
import { RecordatoriosComponent } from "./components/recordatorios/recordatorios.component";

const routes: Routes = [
  {
    path: '',component: AppveterinariaComponent,
    children:[
      { path :'', redirectTo: 'home', pathMatch: 'full'},
      { path: 'home', component: HomeComponent },
      { path: 'clientes', component: ClientesComponent },
      { path: 'mascotas', component: MascotasComponent },
      { path: 'citas-programadas', component: CitasComponent },
      { path: 'recordatorios', component: RecordatoriosComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppveterinariaRoutingModule { }
