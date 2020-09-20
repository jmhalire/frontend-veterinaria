import { Component, OnInit, Input, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { sidenav, dropdown } from '@animations/animations';
import { User } from '@interfaces/user';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [ sidenav, dropdown ]
})
export class SidenavComponent implements OnInit {


  public dropdown1: boolean;
  public admin : boolean;

  @ViewChild('icondropdown1') icondropdown1: ElementRef;
  @Input() stateSidenav: boolean;
  @Output() emitEvent = new EventEmitter<boolean>();


  constructor() {
    this.dropdown1 = false;
    this.admin = false;
  }

  ngOnInit(): void {
    let user = <User>JSON.parse(localStorage.getItem('user'));
    if(user.Role==='ADMIN'){
      this.admin = true;
    }
    else{
      this.admin = false
    }
    
  }

  /**
   * primerdropdown
   */
  public primerdropdown(e:Event) {
    this.dropdown1 = !this.dropdown1
    if(this.dropdown1){
      this.icondropdown1.nativeElement.classList.add('icon-rotate');
    }else{
      this.icondropdown1.nativeElement.classList.remove('icon-rotate');
    }
  }

}
