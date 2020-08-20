import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.scss']
})
export class CitasComponent implements OnInit {

  public title
  constructor() { 
    this.title = 'CITAS PROGRAMADAS'
  }

  ngOnInit(): void {
  }

}
