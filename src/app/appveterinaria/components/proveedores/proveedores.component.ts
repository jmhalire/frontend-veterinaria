import { Component, OnInit } from '@angular/core';
import { Option } from "@interfaces/opciones";

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.scss']
})
export class ProveedoresComponent implements OnInit {

  datos: Option[];
  
  constructor() { 
    this.datos = [
      { nombre: 'lista de proveedores', clase: 'btn-dark', url: 'lista' },
      { nombre: 'nuevo proveedor', clase: 'btn-cyan', url: 'nuevo-proveedor' },
    ]
  }
  
  ngOnInit(): void {
  }

}
