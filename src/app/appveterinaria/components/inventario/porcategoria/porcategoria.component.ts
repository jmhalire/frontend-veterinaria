import { Component, OnInit } from '@angular/core';

//services
import { InventarioService } from "@services/inventario.service";

//interfaces
import { Categoria } from '@interfaces/categoria';
import { Articulo } from '@interfaces/articulo';


@Component({
  selector: 'app-porcategoria',
  templateUrl: './porcategoria.component.html',
  styleUrls: ['./porcategoria.component.scss']
})
export class PorcategoriaComponent implements OnInit {

  public title: string;
  public articulos: Articulo[];
  public categorias: Categoria[];
  constructor(
    private inventService: InventarioService
  ) {
    this.title = "Lista de articulos por categorias"
   }

  ngOnInit(): void {
    this.inventService.getCategorias().subscribe(
      res => {
        this.categorias = res;
      }
    )
  }

  public selectCategoria(e:any){
    this.articulos = []
    this.articulos = this.categorias[e.target.value].articulos
  }

}
