import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { openClose } from "@animations/animations";
import { AuthService } from '@services/auth.service';
import { Router } from '@angular/router';
//interfaces
import { User } from '@interfaces/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [openClose]
})
export class NavbarComponent implements OnInit {


  public stateSidenav: boolean;
  public nameUser: string;
  @Output() emitEvent = new EventEmitter<boolean>();

  constructor(private authService: AuthService, private router: Router) {
    this.stateSidenav = true;
    this.nameUser = 'undefine'
   }

  ngOnInit(): void {
    let names = <User>JSON.parse(localStorage.getItem('user'));
    this.nameUser = names.Names.toUpperCase();
    
  }


    /**
   * sidenav
   */
  public sidenav() {
    this.stateSidenav = !this.stateSidenav;
    this.emitEvent.emit(this.stateSidenav);
    
  }

  /**
   * setState
   */
  public setState() {
    this.stateSidenav = true;
  }

  /**
   * logout
   */
  public logout() {

    this.authService.logout().subscribe(
      res => {
        localStorage.setItem('message', res.message)
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.router.navigate(['/'])
      }
    );
  }
}
