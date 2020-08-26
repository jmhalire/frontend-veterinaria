import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

//routing
import { AppRoutingModule } from './app-routing.module';

//components
import { AppComponent } from './app.component';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from "./components/home.component";
import { SigninComponent } from './components/navbar/signin/signin.component';

//services



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
    BrowserAnimationsModule
  ],
  providers: [  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
