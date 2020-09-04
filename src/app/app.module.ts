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
import { VeterinariaService } from "./services/veterinaria.service";

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
  providers: [ VeterinariaService, AuthGuard], 
  bootstrap: [AppComponent]
})
export class AppModule { }
