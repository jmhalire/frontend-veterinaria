import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscarmascota',
  templateUrl: './buscarmascota.component.html',
  styleUrls: ['./buscarmascota.component.scss']
})
export class BuscarmascotaComponent implements OnInit {

  public title:string
  constructor() { 
    this.title = 'Busqueda'
  }

  ngOnInit(): void {
  }

}
