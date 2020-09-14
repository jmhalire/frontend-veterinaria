import { Component, OnInit } from '@angular/core';

//services
import { InventarioService } from "@services/inventario.service";

//interfaces
import { Proveedor } from '@interfaces/proveedor';
import { Articulo } from '@interfaces/articulo';

@Component({
  selector: 'app-porproveedor',
  templateUrl: './porproveedor.component.html',
  styleUrls: ['./porproveedor.component.scss']
})
export class PorproveedorComponent implements OnInit {

  public title: string;
  public proveedores: Proveedor[];
  public articulos: Articulo[]
  constructor(
    private inventService: InventarioService
  ) { 
    this.title = 'Lista de articulos por proveedor';
  }

  ngOnInit(): void {
    this.inventService.getProveedores().subscribe(
      res => {
        this.proveedores = res;
      }
    )
  }

  public selectProveedor(e: any){
    this.articulos = []
    this.articulos = this.proveedores[e.target.value].articulos
  }
}
