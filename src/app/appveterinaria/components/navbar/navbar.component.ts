import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { openClose } from "@animations/animations";
import { AuthService } from '@services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [openClose]
})
export class NavbarComponent implements OnInit {


  public stateSidenav: boolean;
  @Output() emitEvent = new EventEmitter<boolean>();

  constructor(private authService: AuthService, private router: Router) {
    this.stateSidenav = true;
   }

  ngOnInit(): void {
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
    this.authService.logout();
    this.router.navigate(['/'])
  }
}
