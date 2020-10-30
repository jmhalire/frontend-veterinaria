import { Component, OnInit } from '@angular/core';
import { Option } from "@interfaces/opciones";

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss']
})
export class ReportesComponent implements OnInit {

  datos: Option[];
  
  constructor() { 
    this.datos = [
      { nombre: 'Reporte de ingresos', clase: 'btn-dark', url: 'ingresos' },
      { nombre: 'Reporte de ventas', clase: 'btn-brown', url: 'ventas' },
      { nombre: 'Reporte de visitas', clase: 'btn-cyan', url: 'visitas' },
    ]
  }

  ngOnInit(){

  }

}
