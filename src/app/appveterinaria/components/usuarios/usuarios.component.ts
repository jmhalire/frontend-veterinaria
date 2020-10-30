import { Component, OnInit } from '@angular/core';
import { Option } from "@interfaces/opciones";

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  datos: Option[];
  
  constructor() { 
    this.datos = [
      { nombre: 'Lista de usuarios', clase: 'btn-brown', url: 'lista' },
      { nombre: 'Nuevo usuario', clase: 'btn-cyan', url: 'nuevo-usuario' },
    ]
  }
  ngOnInit(): void {
  }

}
