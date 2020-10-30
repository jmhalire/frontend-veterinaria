import { Component, OnInit } from '@angular/core';
import { Option } from "@interfaces/opciones";

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.scss']
})
export class CitasComponent implements OnInit {
  datos: Option[];

  constructor() { 
    this.datos = [
      { nombre: 'citas pendientes', clase: 'btn-dark', url: 'pendientes' },
      { nombre: 'citas finalizadas', clase: 'btn-primary', url: 'finalizadas' },
      { nombre: 'nueva cita', clase: 'btn-cyan', url: 'nueva-cita' },
    ]
  }
  ngOnInit(): void {
  }

}
