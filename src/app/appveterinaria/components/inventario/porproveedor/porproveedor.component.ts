import { Component, OnInit } from '@angular/core';

//services
import { InventarioService } from "@services/inventario.service";

//interfaces
import { Proveedor } from '@interfaces/proveedor';
import { Producto } from '@interfaces/producto';

@Component({
  selector: 'app-porproveedor',
  templateUrl: './porproveedor.component.html',
  styleUrls: ['./porproveedor.component.scss']
})
export class PorproveedorComponent implements OnInit {

  public title: string;
  public proveedores: Proveedor[];
  public productos: Producto[]
  public selectProveedorName: string;
  constructor(
    private inventService: InventarioService
  ) { 
    this.title = 'Lista de productos por proveedor';
    this.selectProveedorName = '...'
  }

  ngOnInit(): void {
    this.inventService.getProveedores().subscribe(
      res => {
        this.proveedores = res;
      }
    )
  }

  public selectProveedor(e: any){
    this.selectProveedorName = this.proveedores[e.target.value].Nombre;
    this.productos = [];
    this.productos = this.proveedores[e.target.value].productos;
  }
}
