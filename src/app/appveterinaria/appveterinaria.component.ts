import { Component, OnInit, Host, ViewChild, ElementRef } from '@angular/core'; 
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
  @ViewChild('main') main: ElementRef;

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
    if(e){
      if(screen.width > 992){
        this.main.nativeElement.classList.add('main-open')
      }
    }
    else{
        this.main.nativeElement.classList.remove('main-open')
      }
  }

  /**
   * prueba
   */

}
