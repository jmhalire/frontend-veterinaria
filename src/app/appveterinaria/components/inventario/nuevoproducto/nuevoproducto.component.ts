import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { InventarioService } from '@services/inventario.service';

//interface
import { Categoria } from "@interfaces/categoria";
import { Proveedor } from '@interfaces/proveedor';
import { ProveedoresService } from '@services/proveedores.service';
@Component({
  selector: 'app-nuevoproducto',
  templateUrl: './nuevoproducto.component.html',
  styleUrls: ['./nuevoproducto.component.scss']
})
export class NuevoproductoComponent implements OnInit {

  public formArticulo: FormGroup;
  public message: string;
  public title: string
  public categorias: Categoria[];
  public proveedores: Proveedor[];
  constructor(
    private builder: FormBuilder,
    private proveedService: ProveedoresService,
    private inventario: InventarioService
    
  ) {
    this.title = 'Registrar nuevo producto'
  }

  ngOnInit(): void {
    this.proveedService.getListaProveedores().subscribe(
      res => {
        this.proveedores = res;
      }
    )
    this.inventario.getCategorias().subscribe(
      res => {
        this.categorias = res;
      }
    )
    this.formArticulo = this.builder.group(
      {
        proveedor: new FormControl('', Validators.required),
        categoria: new FormControl('', Validators.required),
        Codigo: new FormControl('', Validators.required),
        Nombre: new FormControl('', Validators.required),
        Pcompra: new FormControl('', Validators.required),
        Particulo: new FormControl('', Validators.required),
        Stock: new FormControl('', Validators.required),
      }
    )
  }

  //guardar nuevo articulo
  public created() {
    this.inventario.saveProducto(this.formArticulo.value).subscribe(
      res => {
        this.message = res.message;
        this.complete();
      },
      err => {
        this.message = err.error.message;
        this.complete();
      }
    )
  }

  //closet message
  public closeMessage() {
    this.message = null;
  }

  //esta funcion se ejecuta despues de completar un peticion al servidor
  private complete(){
    this.formArticulo.reset();
    setTimeout(() => {
      this.message = null;
    },10000)
  }
}
