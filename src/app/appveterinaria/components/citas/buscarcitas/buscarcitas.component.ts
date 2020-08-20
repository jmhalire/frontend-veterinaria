import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscarcitas',
  templateUrl: './buscarcitas.component.html',
  styleUrls: ['./buscarcitas.component.scss']
})
export class BuscarcitasComponent implements OnInit {

  public title: string
  constructor() {
    this.title = 'Buscar citas'
   }

  ngOnInit(): void {
  }

}
