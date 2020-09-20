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
import { VentaComponent } from './components/venta/venta.component';
import { NuevaventaComponent } from './components/venta/nuevaventa/nuevaventa.component';
import { OpcionesventaComponent } from './components/venta/opcionesventa/opcionesventa.component';
import { ArticuloComponent } from './components/venta/nuevaventa/articulo/articulo.component';
import { ListaproductosComponent } from './components/inventario/listaproductos/listaproductos.component';
import { PorcategoriaComponent } from './components/inventario/porcategoria/porcategoria.component';
import { PorproveedorComponent } from './components/inventario/porproveedor/porproveedor.component';
import { NuevoproductoComponent } from './components/inventario/nuevoproducto/nuevoproducto.component';
import { InventarioComponent } from "./components/inventario/inventario.component";
import { OpcionesinventarioComponent } from "./components/inventario/opcionesinventario/opcionesinventario.component";
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { ListaproveedoresComponent } from './components/proveedores/listaproveedores/listaproveedores.component';
import { NuevoproveedorComponent } from './components/proveedores/nuevoproveedor/nuevoproveedor.component';
import { OpcionesproveedorComponent } from './components/proveedores/opcionesproveedor/opcionesproveedor.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { ListausuariosComponent } from './components/usuarios/listausuarios/listausuarios.component';
import { NuevousuarioComponent } from './components/usuarios/nuevousuario/nuevousuario.component';
import { OpcionesusuarioComponent } from "./components/usuarios/opcionesusuario/opcionesusuario.component";
import { ReportesComponent } from './components/reportes/reportes.component';
import { OpcionesreporteComponent } from './components/reportes/opcionesreporte/opcionesreporte.component';
import { VentasComponent } from './components/reportes/ventas/ventas.component';
import { IngresosComponent } from "./components/reportes/ingresos/ingresos.component";
import { VisitasComponent } from "./components/reportes/visitas/visitas.component";
import { PormesesComponent } from './components/reportes/ingresos/pormeses/pormeses.component';
import { DehoyComponent } from './components/reportes/ingresos/dehoy/dehoy.component';
import { NuevacategoriaComponent } from './components/inventario/nuevacategoria/nuevacategoria.component';

@NgModule({
  declarations: [
    AppveterinariaComponent, HomeComponent,NavbarComponent,SidenavComponent, ClientesComponent, MascotasComponent, 
    CitasComponent, BuscarmascotaComponent, BuscarclienteComponent, OpcioncitasComponent, OpcionmascotasComponent, OpcionclientesComponent, 
    AgregarclienteComponent, ListaclientesComponent, VerclienteComponent, DataclienteComponent, DatamascotaComponent, MessageComponent, 
    ListamascotasComponent, VermascotaComponent, AgregarmascotaComponent, MasdetallesComponent, DetallesmascotaComponent, VisitaComponent, 
    VacunaComponent, ListavisitasComponent, AgregarcitaComponent, ListacitasComponent, VentaComponent, NuevaventaComponent, OpcionesventaComponent,
    ArticuloComponent,InventarioComponent, ListaproductosComponent, PorcategoriaComponent, PorproveedorComponent, NuevoproductoComponent,
    OpcionesinventarioComponent, ProveedoresComponent, ListaproveedoresComponent, NuevoproveedorComponent, OpcionesproveedorComponent, UsuariosComponent,
    ListausuariosComponent, NuevousuarioComponent, OpcionesusuarioComponent, ReportesComponent, OpcionesreporteComponent, VentasComponent,
    IngresosComponent, VisitasComponent, PormesesComponent, DehoyComponent, NuevacategoriaComponent
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
