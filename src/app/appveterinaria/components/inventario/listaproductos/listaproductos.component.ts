import { Component, OnInit } from '@angular/core';

//services
import { InventarioService } from "@services/inventario.service";

//interfaces
import { Articulo } from "@interfaces/articulo";
import { Categoria } from "@interfaces/categoria";
import { Proveedor } from "@interfaces/proveedor";

@Component({
  selector: 'app-listaproductos',
  templateUrl: './listaproductos.component.html',
  styleUrls: ['./listaproductos.component.scss']
})
export class ListaproductosComponent implements OnInit {

  public title: string;
  public articulos: Articulo[];

  constructor(
    private inventService: InventarioService
  ) { 
    this.title = 'Lista de productos';
  }

  ngOnInit(): void {
   this.inventService.getProductos().subscribe(
     res => {
       this.articulos = res;
     }
   )

  }

}
