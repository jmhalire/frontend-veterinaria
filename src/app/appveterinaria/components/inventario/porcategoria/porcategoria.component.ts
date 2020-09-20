import { Component, OnInit } from '@angular/core';

//services
import { InventarioService } from "@services/inventario.service";

//interfaces
import { Categoria } from '@interfaces/categoria';
import { Producto } from '@interfaces/producto';


@Component({
  selector: 'app-porcategoria',
  templateUrl: './porcategoria.component.html',
  styleUrls: ['./porcategoria.component.scss']
})
export class PorcategoriaComponent implements OnInit {

  public title: string;
  public productos: Producto[];
  public categorias: Categoria[];
  public selectCategoriaName: string;
  constructor(
    private inventService: InventarioService
  ) {
    this.title = "Lista de productos por categorias"
    this.selectCategoriaName = '...'
   }

  ngOnInit(): void {
    this.inventService.getCategorias().subscribe(
      res => {
        this.categorias = res;
        console.log(res);
        
      }
    )
  }

  public selectCategoria(e:any){
    this.selectCategoriaName = this.categorias[e.target.value].Nombre;
    this.productos = []
    this.productos = this.categorias[e.target.value].productos
  }

}
