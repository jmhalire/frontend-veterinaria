import { Component, OnInit, Host, ViewChild } from '@angular/core'; 
import { main } from "@animations/animations";
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-appveterinaria',
  templateUrl: './appveterinaria.component.html',
  styleUrls: ['./appveterinaria.component.scss'],
  animations: [main]
})
export class AppveterinariaComponent implements OnInit {


  public message: boolean;
  @ViewChild(NavbarComponent) navbar: NavbarComponent;

  constructor(
  ) {
    this.message = true;
  }

  ngOnInit(): void {
  }

  /**
   * eventSidenav
   */
  public eventSidenav(e:boolean) {
    this.message = e;   
  }

  /**
   * prueba
   */
  public prueba(e:Event) {
    this.navbar.setState();
    this.message = true;
  }
}
