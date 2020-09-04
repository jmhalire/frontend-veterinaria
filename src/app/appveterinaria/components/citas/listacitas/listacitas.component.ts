import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listacitas',
  templateUrl: './listacitas.component.html',
  styleUrls: ['./listacitas.component.scss']
})
export class ListacitasComponent implements OnInit {

  public title: string;
  constructor() {
    this.title = 'Lista de citas'
   }

  ngOnInit(): void {
  }

}
