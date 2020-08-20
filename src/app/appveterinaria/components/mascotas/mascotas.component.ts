import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.scss']
})
export class MascotasComponent implements OnInit {

  public titleList: string
  constructor() { 
    this.titleList = 'LISTA DE MASCOTAS'
  }

  ngOnInit(): void {
  }

}
