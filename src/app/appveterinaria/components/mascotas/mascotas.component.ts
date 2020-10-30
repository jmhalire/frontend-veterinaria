import { Component, OnInit } from '@angular/core';
import { Option } from '@interfaces/opciones';
@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.scss']
})
export class MascotasComponent implements OnInit {

  datos: Option[];
  
  constructor() { 
    this.datos = [
      { nombre: 'lista de mascotas', clase: 'btn-dark', url: 'lista' },
      { nombre: 'nueva mascota', clase: 'btn-cyan', url: 'nueva-mascota' },
      { nombre: 'lista de visitas', clase: 'btn-brown', url: 'lista-visitas' },
      { nombre: 'nueva visita', clase: 'btn-success', url: 'nueva-visita' },
    ]
  }

  ngOnInit(): void {

  }

}
