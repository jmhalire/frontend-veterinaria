import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { openClose } from "@animations/animations";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [openClose]
})
export class NavbarComponent implements OnInit {


  public stateSidenav: boolean;
  @Output() emitEvent = new EventEmitter<boolean>();
  constructor() {
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
}
