import { Component, OnInit } from '@angular/core';

//services
import { InventarioService } from "@services/inventario.service";

//interfaces
import { Producto } from "@interfaces/producto";

@Component({
  selector: 'app-listaproductos',
  templateUrl: './listaproductos.component.html',
  styleUrls: ['./listaproductos.component.scss']
})
export class ListaproductosComponent implements OnInit {

  public title: string;
  public productos: Producto[];
  constructor(
    private inventService: InventarioService
  ) { 
    this.title = 'Lista de productos';
  }

  ngOnInit(): void {
   this.inventService.getProductos().subscribe(
     res => {
       this.productos = res;
     }
   )

  }

}
