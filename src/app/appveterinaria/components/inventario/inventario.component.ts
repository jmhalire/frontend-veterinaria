import { Component, OnInit } from '@angular/core';
import { Option } from "@interfaces/opciones";
@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss']
})
export class InventarioComponent implements OnInit {


  datos: Option[];
  
  constructor() { 
    this.datos = [
      { nombre: 'lista de productos', clase: 'btn-dark', url: 'lista' },
      { nombre: 'lista por proveedor', clase: 'btn-success', url: 'productos-por-proveedor' },
      { nombre: 'lista por categoria', clase: 'btn-cyan', url: 'productos-por-categoria' },
      { nombre: 'nuevo producto', clase: 'btn-brown', url: 'nuevo-producto' },
      { nombre: 'nueva categoria', clase: 'btn-primary', url: 'nueva-categoria' }
    ]
  }
  ngOnInit(): void {
  }

}
