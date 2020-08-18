import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild('navbar', { static: true }) navbar: ElementRef;

  @HostListener('window:scroll', []) onWindowScroll() {
    if (window.pageYOffset > 0) {
        this.navbar.nativeElement.classList.add('navbar-scrolled');
    } else {
        this.navbar.nativeElement.classList.remove('navbar-scrolled');
    }
  }

  constructor() { }


  ngOnInit(): void {
  }

}
