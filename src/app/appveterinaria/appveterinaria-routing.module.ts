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
//servicios
import { VermascotaComponent } from "./components/mascotas/vermascota/vermascota.component";
import { ListavisitasComponent } from "./components/mascotas/listavisitas/listavisitas.component";
import { VisitaComponent } from "./components/mascotas/visita/visita.component";
import { ListacitasComponent } from "./components/citas/listacitas/listacitas.component";
//ventas
import { AgregarcitaComponent } from "./components/citas/agregarcita/agregarcita.component";
import { VentaComponent } from "./components/venta/venta.component";
import { NuevaventaComponent } from "./components/venta/nuevaventa/nuevaventa.component";
import { ListaventasComponent } from "./components/venta/listaventas/listaventas.component";
//inventario
import { ListaproductosComponent } from "./components/inventario/listaproductos/listaproductos.component";
import { PorcategoriaComponent } from "./components/inventario/porcategoria/porcategoria.component";
import { PorproveedorComponent } from "./components/inventario/porproveedor/porproveedor.component";
import { NuevoproductoComponent } from "./components/inventario/nuevoproducto/nuevoproducto.component";
import { InventarioComponent } from "./components/inventario/inventario.component";
import { NuevacategoriaComponent } from "./components/inventario/nuevacategoria/nuevacategoria.component";
import { VerproductoComponent } from "./components/inventario/verproducto/verproducto.component";
//proveedores
import { ProveedoresComponent } from "./components/proveedores/proveedores.component";
import { ListaproveedoresComponent } from "./components/proveedores/listaproveedores/listaproveedores.component";
import { NuevoproveedorComponent } from "./components/proveedores/nuevoproveedor/nuevoproveedor.component";
import {VerproveedorComponent} from "./components/proveedores/verproveedor/verproveedor.component";
//usuarios
import { UsuariosComponent } from "./components/usuarios/usuarios.component";
import { ListausuariosComponent } from "./components/usuarios/listausuarios/listausuarios.component";
import { NuevousuarioComponent } from "./components/usuarios/nuevousuario/nuevousuario.component";
//reportes
import { ReportesComponent } from "./components/reportes/reportes.component"
import { IngresosComponent } from "./components/reportes/ingresos/ingresos.component";
import { VentasComponent } from "./components/reportes/ventas/ventas.component";
import { VisitasComponent } from "./components/reportes/visitas/visitas.component";

//perfil
import { PerfilComponent } from "./components/perfil/perfil.component";

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
          { path: 'nuevo-cliente', component: AgregarclienteComponent },
        ]
      },
      {
        path: 'mascotas', component: MascotasComponent,
        children: [
          { path: '', redirectTo: 'lista', pathMatch: 'full' },
          { path: 'lista', component: ListamascotasComponent },
          { path: 'lista/:id', component: VermascotaComponent },
          { path: 'nueva-mascota', component: AgregarmascotaComponent },
          { path: 'nueva-visita', component: VisitaComponent },
          { path: 'lista-visitas', component: ListavisitasComponent },
        ]
      },
      {
        path: 'citas-programadas', component: CitasComponent,
        children: [
          { path: '', redirectTo: 'pendientes', pathMatch: 'full' },
          { path: 'pendientes', component: ListacitasComponent },
          { path: 'nueva-cita', component: AgregarcitaComponent }
        ]
      },
      {
        path: 'ventas', component: VentaComponent,
        children: [
          { path: '', redirectTo: 'nueva-venta', pathMatch: 'full'},
          { path: 'nueva-venta', component: NuevaventaComponent },
          { path: 'lista', component: ListaventasComponent }          
        ]
      },
      {
        path: 'inventario', component: InventarioComponent,
        children: [
          { path: '', redirectTo: 'lista', pathMatch: 'full'},
          { path: 'lista', component: ListaproductosComponent },
          { path: 'lista/:id', component: VerproductoComponent },
          { path: 'productos-por-proveedor', component: PorproveedorComponent },
          { path: 'productos-por-categoria', component: PorcategoriaComponent },
          { path: 'nuevo-producto', component: NuevoproductoComponent },
          { path: 'nueva-categoria', component: NuevacategoriaComponent },

        ]
      },
      {
        path: 'proveedor', component: ProveedoresComponent,
        children: [
          { path: '', redirectTo: 'lista', pathMatch: 'full'},
          { path: 'lista', component: ListaproveedoresComponent },
          { path: 'nuevo-proveedor', component: NuevoproveedorComponent },
          { path: 'lista/:id', component: VerproveedorComponent},
        ]
      },
      {
        path: 'usuarios', component: UsuariosComponent,
        children: [
          { path: '', redirectTo: 'lista', pathMatch: 'full'},
          { path: 'lista', component: ListausuariosComponent },
          { path: 'nuevo-usuario', component: NuevousuarioComponent },
        ]
      },
      {
        path: 'reportes', component: ReportesComponent,
        children: [
          { path: '', redirectTo: 'ingresos', pathMatch: 'full'},
          { path: 'ingresos', component: IngresosComponent },
          { path: 'ventas', component: VentasComponent },
          { path: 'visitas', component: VisitasComponent },
        ]
      },
      { path: 'perfil', component: PerfilComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppveterinariaRoutingModule { }
