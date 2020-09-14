import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

//routing
import { AppRoutingModule } from './app-routing.module';

//components
import { AppComponent } from './app.component';
import { NavbarComponent } from "./applogin/navbar/navbar.component";
import { FooterComponent } from "./applogin/footer/footer.component";
import { HomeComponent } from "./applogin/home/home.component";
import { SigninComponent } from "./applogin/signin/signin.component";

//services
import { AuthGuard } from "./auth.guard";
import { VentaService } from "@services/ventas.service";
import { ClientesService } from "@services/clientes.service";
import { MascotasService } from "@services/mascotas.service";
import { UserService } from "@services/user.service";
import { InventarioService } from "@services/inventario.service";
import { ServiciosService } from "@services/servicios.service";
import { MessageService } from "@services/message.service";
import { ReportesService } from "@services/reportes.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SigninComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ 
    AuthGuard, 
    VentaService, 
    ClientesService, 
    MascotasService, 
    UserService, 
    InventarioService,
    ServiciosService,
    MessageService,
    ReportesService
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
