import { Component, OnInit } from '@angular/core';

import { Option } from "@interfaces/opciones";
@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.scss']
})
export class VentaComponent implements OnInit {

  datos: Option[];
  
  constructor() { 
    this.datos = [
      { nombre: 'nueva venta', clase: 'btn-cyan', url: 'nueva-venta' },
      //{ nombre: 'lista de ventas', clase: 'btn-dark', url: 'lista' },
    ]
  }
  
  ngOnInit(): void {
  }

}
