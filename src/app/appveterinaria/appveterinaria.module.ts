import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FechaPipe } from './fecha.pipe';

//google charts
import { GoogleChartsModule } from 'angular-google-charts';

//componetes 
import { AppveterinariaRoutingModule } from './appveterinaria-routing.module';
import { AppveterinariaComponent } from './appveterinaria.component';
import { HomeComponent } from "./components/home/home.component";
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
//componetes de clientes
import { ClientesComponent } from './components/clientes/clientes.component';
import { ListaclientesComponent } from './components/clientes/listaclientes/listaclientes.component';
import { OpcionclientesComponent } from './components/clientes/opcionclientes/opcionclientes.component';
import { AgregarclienteComponent } from './components/clientes/agregarcliente/agregarcliente.component';
import { VerclienteComponent } from './components/clientes/vercliente/vercliente.component';
import { DataclienteComponent } from './components/clientes/vercliente/datacliente/datacliente.component';
//componentes de mascotas
import { MascotasComponent } from './components/mascotas/mascotas.component';
import { OpcionmascotasComponent } from './components/mascotas/opcionmascotas/opcionmascotas.component';
import { DatamascotaComponent } from './components/clientes/vercliente/datamascota/datamascota.component';
import { ListamascotasComponent } from './components/mascotas/listamascotas/listamascotas.component';
import { VermascotaComponent } from './components/mascotas/vermascota/vermascota.component';
import { AgregarmascotaComponent } from './components/mascotas/agregarmascota/agregarmascota.component';
import { DetallesmascotaComponent } from './components/mascotas/vermascota/detallesmascota/detallesmascota.component';
import { MasdetallesComponent } from './components/mascotas/vermascota/masdetalles/masdetalles.component';
//componentes de citas
import { CitasComponent } from './components/citas/citas.component';
import { OpcioncitasComponent } from './components/citas/opcioncitas/opcioncitas.component';
import { ListacitasComponent } from './components/citas/listacitas/listacitas.component';
//message
import { MessageComponent } from './components/clientes/message/message.component';
//vistas
import { VisitaComponent } from './components/mascotas/visita/visita.component';
import { ListavisitasComponent } from "./components/mascotas/listavisitas/listavisitas.component";
import { VacunaComponent } from './components/mascotas/visita/vacuna/vacuna.component';
//citas
import { AgregarcitaComponent } from './components/citas/agregarcita/agregarcita.component';
//ventas
import { VentasComponent } from './components/reportes/ventas/ventas.component';
import { VentaComponent } from './components/venta/venta.component';
import { NuevaventaComponent } from './components/venta/nuevaventa/nuevaventa.component';
import { OpcionesventaComponent } from './components/venta/opcionesventa/opcionesventa.component';
import { ListaventasComponent } from "./components/venta/listaventas/listaventas.component";
//inventario
import { ListaproductosComponent } from './components/inventario/listaproductos/listaproductos.component';
import { PorcategoriaComponent } from './components/inventario/porcategoria/porcategoria.component';
import { NuevoproductoComponent } from './components/inventario/nuevoproducto/nuevoproducto.component';
import { InventarioComponent } from "./components/inventario/inventario.component";
import { OpcionesinventarioComponent } from "./components/inventario/opcionesinventario/opcionesinventario.component";
import { NuevacategoriaComponent } from './components/inventario/nuevacategoria/nuevacategoria.component';
//proveeodre
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { PorproveedorComponent } from './components/inventario/porproveedor/porproveedor.component';
import { ListaproveedoresComponent } from './components/proveedores/listaproveedores/listaproveedores.component';
import { NuevoproveedorComponent } from './components/proveedores/nuevoproveedor/nuevoproveedor.component';
import { OpcionesproveedorComponent } from './components/proveedores/opcionesproveedor/opcionesproveedor.component';
//productos
import { ArticuloComponent } from './components/venta/nuevaventa/articulo/articulo.component';
//usuarioas componets
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { ListausuariosComponent } from './components/usuarios/listausuarios/listausuarios.component';
import { NuevousuarioComponent } from './components/usuarios/nuevousuario/nuevousuario.component';
import { OpcionesusuarioComponent } from "./components/usuarios/opcionesusuario/opcionesusuario.component";
import { UsuarioComponent } from "./components/usuarios/listausuarios/usuario/usuario.component";
//report
import { ReportesComponent } from './components/reportes/reportes.component';
import { OpcionesreporteComponent } from './components/reportes/opcionesreporte/opcionesreporte.component';
import { IngresosComponent } from "./components/reportes/ingresos/ingresos.component";
import { VisitasComponent } from "./components/reportes/visitas/visitas.component";
import { PormesesComponent } from './components/reportes/ingresos/pormeses/pormeses.component';
import { DehoyComponent } from './components/reportes/ingresos/dehoy/dehoy.component';
//perfil
import { PerfilComponent } from './components/perfil/perfil.component';
//loader
import { LoaderComponent } from './components/loader/loader.component';
import { VerproductoComponent } from './components/inventario/verproducto/verproducto.component';
import { VerproveedorComponent } from './components/proveedores/verproveedor/verproveedor.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';

@NgModule({
  declarations: [
    AppveterinariaComponent, HomeComponent,NavbarComponent,SidenavComponent, LoaderComponent, ClientesComponent, MascotasComponent, 
    CitasComponent, OpcioncitasComponent, OpcionmascotasComponent, OpcionclientesComponent, AgregarclienteComponent,
    ListaclientesComponent, VerclienteComponent, DataclienteComponent, DatamascotaComponent, MessageComponent, 
    ListamascotasComponent, VermascotaComponent, AgregarmascotaComponent, MasdetallesComponent, DetallesmascotaComponent, VisitaComponent, 
    VacunaComponent, ListavisitasComponent, AgregarcitaComponent, ListacitasComponent, VentaComponent, NuevaventaComponent, OpcionesventaComponent,
    ListaventasComponent, ArticuloComponent,InventarioComponent, ListaproductosComponent, PorcategoriaComponent, PorproveedorComponent, NuevoproductoComponent,
    OpcionesinventarioComponent, ProveedoresComponent, ListaproveedoresComponent, NuevoproveedorComponent, OpcionesproveedorComponent, UsuariosComponent,
    ListausuariosComponent, NuevousuarioComponent, OpcionesusuarioComponent, ReportesComponent, OpcionesreporteComponent, VentasComponent,
    IngresosComponent, VisitasComponent, PormesesComponent, DehoyComponent, NuevacategoriaComponent, PerfilComponent, UsuarioComponent, VerproductoComponent, 
    FechaPipe, VerproveedorComponent, BusquedaComponent
  ],
  imports: [
    CommonModule,
    AppveterinariaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleChartsModule
  ],
  providers:[ ],
  bootstrap:[AppveterinariaComponent]
})
export class AppveterinariaModule { }
